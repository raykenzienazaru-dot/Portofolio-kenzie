import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";

const url = process.env.TEST_URL || "http://127.0.0.1:5173";
const browser = await chromium.launch();
await fs.mkdir(".work/verification", { recursive: true });
const results = [];
try {
  for (const width of (process.env.TEST_WIDTHS || "1440,1024,768,390,320")
    .split(",")
    .map(Number)) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.url().startsWith(url) && response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "RAYKENZIE",
    );
    await expect(page.locator(".project-card")).toHaveCount(10);
    await expect(page.locator(".achievement-item")).toHaveCount(6);
    const overflow = await page.evaluate(() => ({
      viewport: innerWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(
      overflow.document,
      `horizontal overflow at ${width}px`,
    ).toBeLessThanOrEqual(width);
    await page.screenshot({ path: `.work/verification/hero-${width}.png` });

    for (const name of [
      "Home",
      "About",
      "Achievements",
      "Projects",
      "Experience",
      "Contact",
    ]) {
      if (width < 960)
        await page.getByRole("button", { name: "Open menu" }).click();
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name, exact: true })
        .click();
      await expect(page).toHaveURL(new RegExp(`#${name.toLowerCase()}$`));
      const rect = await page.locator(`#${name.toLowerCase()}`).boundingBox();
      expect(rect.y, `${name} hidden by header`).toBeGreaterThanOrEqual(60);
      // The last section cannot align to the top when the document has reached its end.
      const atBottom = await page.evaluate(
        () =>
          innerHeight + scrollY >= document.documentElement.scrollHeight - 2,
      );
      expect(rect.y, `${name} did not scroll into view`).toBeLessThan(
        atBottom ? 700 : 150,
      );
    }
    if (width < 960) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(
        page
          .getByRole("navigation")
          .getByRole("link", { name: "Home", exact: true }),
      ).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open menu" }),
      ).toBeFocused();
      await expect(page.getByRole("navigation")).toBeHidden();
    }

    const expected = { WEB: 6, IoT: 4, AI: 4, "R&D": 2, ALL: 10 };
    for (const [filter, count] of Object.entries(expected)) {
      await page.getByRole("button", { name: filter, exact: true }).click();
      await expect(page.locator(".project-card")).toHaveCount(count);
      await expect(
        page.getByRole("button", { name: filter, exact: true }),
      ).toHaveAttribute("aria-pressed", "true");
      await expect(page.locator('[data-project="waru"]')).toHaveCount(
        ["ALL", "R&D"].includes(filter) ? 1 : 0,
      );
    }
    for (const image of await page.locator(".project-media img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() => image.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.screenshot({ path: `.work/verification/projects-${width}.png` });
    const links = await page
      .locator('a[href^="https://"]')
      .evaluateAll((els) =>
        els.map((el) => ({ href: el.href, target: el.target, rel: el.rel })),
      );
    expect(
      links.every(
        (link) =>
          link.target === "_blank" &&
          link.rel.includes("noopener") &&
          link.rel.includes("noreferrer"),
      ),
    ).toBe(true);
    expect(
      links.some((link) => link.href === "https://www.instagram.com/zienaru_/"),
    ).toBe(true);
    expect(
      await page.locator('a[href="mailto:raykenzienazaru@gmail.com"]').count(),
    ).toBeGreaterThan(0);
    const schema = JSON.parse(
      await page.locator('script[type="application/ld+json"]').textContent(),
    );
    expect(schema.name).toBe("Raykenzie Nazaru Fathurrahmansyah");
    expect(schema["@type"]).toBe("Person");
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const violations = accessibility.violations.map(({ id, nodes }) => ({
      id,
      nodes: nodes.map((node) => ({
        target: node.target,
        summary: node.failureSummary,
      })),
    }));
    expect(violations, `accessibility at ${width}px`).toEqual([]);
    const labelCheck = await new AxeBuilder({ page })
      .withRules(["label-content-name-mismatch"])
      .analyze();
    expect(
      labelCheck.violations,
      `visible and accessible names at ${width}px`,
    ).toEqual([]);
    expect(errors, `browser errors at ${width}px`).toEqual([]);
    await page.evaluate(() => window.scrollTo(0, 0));
    if ([1440, 390].includes(width))
      await page.screenshot({
        path: `.work/verification/full-${width}.png`,
        fullPage: true,
      });
    const result = {
      width,
      navigation: "passed",
      filters: "passed",
      images: "passed",
      accessibility: "passed",
      errors,
    };
    results.push(result);
    console.log(JSON.stringify(result));
    await context.close();
  }
} finally {
  await fs.writeFile(
    ".work/verification/results.json",
    JSON.stringify(results, null, 2),
  );
  await browser.close();
}

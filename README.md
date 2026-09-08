# Raykenzie Portfolio 2026

An editorial portfolio for Raykenzie Nazaru Fathurrahmansyah, built with React, Vite and Tailwind CSS. Includes ten selected projects, a clearly attributed WARU collaboration, six achievements, skills, a technical journey and contact links.

## Source of truth

1. [Original PDF PRD](docs/PRD_Portfolio_Raykenzie_Nazaru_Fathurrahmansyah.pdf) takes priority.
2. [Original detailed brief](.md) supplements the PRD.
3. [Content sources and accuracy decisions](docs/CONTENT_SOURCES.md) record repository evidence and unavailable information.

Do not invent dates, project roles, proficiency ratings, deployments or metrics. Repository ownership does not imply sole authorship. Unknown achievement years are omitted intentionally.

## Local development

Use Node.js 22.12+ or Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. No backend, accounts, API credentials or environment variables are needed. Project filtering uses local data; external project services are contacted only when a visitor follows a link. Contact uses `mailto:`.

## Structure

```text
src/
  components/       Navigation, sections and reusable display components
  data/             Profile, projects, achievements and skills
  App.jsx           Page composition
  main.jsx          React entry and self-hosted font imports
  styles.css        Tailwind theme and responsive editorial styles
public/
  images/           Optimized portrait and real project screenshots
  favicon.svg       RZN favicon
  og-image.png      Social sharing image
  robots.txt
  sitemap.xml
scripts/
  verify.mjs        Browser interaction and accessibility verification
  create-og.mjs     Rebuild the original typographic sharing image
docs/               PRD, source notes and acceptance checklist
```

The original `images/`, `files/`, `.md` and `Foto.jpeg` remain available as source material. Only optimized assets in `public/` are included in the production build. The old standalone CSS/JavaScript application has been replaced.

## Editing content

- Update `src/data/projects.js` for project descriptions, technology tags, screenshots and verified links. An absent image produces an explicitly labeled repository preview, including if an image fails to load.
- Update `src/data/achievements.js` only with verified placements and years.
- Update `src/data/profile.js` for portrait and contact details. Social icons include accessible labels and safe external-link attributes.
- Add optimized WebP thumbnails to `public/images/projects/`; do not fabricate application screenshots.
- Fonts are locally bundled Bebas Neue and Inter. The core palette is exactly Smoky Black `#11120D`, Olive Drab `#565449`, Bone `#D8CFBC`, Floral White `#FFFBF4`. Real project screenshots retain their original colors.
- Motion is limited to small CSS transitions and smooth scrolling, with a reduced-motion override. Framer Motion is unnecessary for these transitions.

## Verification

With a development or production preview server running:

```sh
npx playwright install chromium
npm run test:e2e
```

The test visits desktop, tablet and mobile sizes (1440, 1024, 768, 390 and 320 pixels), navigates all sections, checks mobile keyboard controls, exercises every filter, checks image loading and external-link attributes, validates Person schema and runs axe WCAG A/AA checks. Screenshots and results are saved to the ignored `.work/verification/` directory.

Override `TEST_URL` to test a production preview and `TEST_WIDTHS` with comma-separated widths for focused verification. See [acceptance status](docs/ACCEPTANCE.md) for the recorded result and remaining publishing check.

## Deployment

Vercel configuration is included: framework `vite`, build command `npm run build`, output `dist`. Connect this repository to the intended Vercel project, or deploy `dist/` with another static host. Publish only after reviewing the completed local site.

Canonical, Open Graph and sitemap URLs use the existing portfolio homepage from GitHub metadata: `https://portofolio-kenzie-pearl.vercel.app/`. If the final domain changes, update `index.html`, `public/robots.txt` and `public/sitemap.xml` together. Regenerate the sharing image with `node scripts/create-og.mjs` after changing its copy.

After publishing, verify the public page, mobile navigation, project filters, image loading, favicon, Open Graph image, robots and sitemap. Local verification does not establish that the redesigned version is live.

# PRD acceptance verification

Verified locally on 8 September 2026 against the PDF PRD and supplemental `.md`. The production build is served through Vite preview, separately from the development server.

| ID    | Result                               | Evidence                                                                                                                                                                                                                       |
| ----- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AC-01 | Pass                                 | Six main sections, all navigation anchors tested at 1440, 1024, 768, 390 and 320 px.                                                                                                                                           |
| AC-02 | Pass                                 | Four exact PRD color tokens in `src/styles.css`; original screenshot colors preserved.                                                                                                                                         |
| AC-03 | Pass                                 | Icon-only GitHub/LinkedIn/Instagram links with accessible names and PRD URLs. External link attributes verified in browser.                                                                                                    |
| AC-04 | Pass                                 | Six typographic achievement entries, GRENVIS highlighted, no certificate images. Unavailable years omitted.                                                                                                                    |
| AC-05 | Pass                                 | Ten selected repositories under the owner's account; WARU clearly attributed as R&D. FABRIX AI displays the specific team R&D assistant role from its README. SIGETA appears once.                                             |
| AC-06 | Pass                                 | Five screen widths tested, no horizontal overflow. Mobile opening/closing, Escape, focus behavior and all project filters work.                                                                                                |
| AC-07 | Pass                                 | No invented dates, deployments, statistics, testimonials or lorem ipsum. IOTERA, GWS and KasirKita have clearly labeled repository previews.                                                                                   |
| AC-08 | Pass                                 | Full-name title/description, Open Graph tags and image, favicon, robots, sitemap and parseable Person JSON-LD.                                                                                                                 |
| AC-09 | Pass locally                         | `npm run build` succeeds. Production browser tests report no page errors, console errors or failed local asset responses at all five widths.                                                                                   |
| AC-10 | Implemented; visual review available | Desktop/mobile screenshots reviewed: large editorial typography, asymmetric portrait composition, restrained borders, varied section layouts and exact neutral palette. Final aesthetic approval remains the owner's judgment. |

## Functional and accessibility checks

`scripts/verify.mjs` tests all five widths against the production preview. All filters (ALL, WEB, IoT, AI, R&D), six navigation targets, mobile keyboard controls, real-image loading, mail links, external-link security attributes and structured data pass. Automated axe WCAG A/AA checks pass, including the additional visible-label/accessibility-name rule. Automated checks supplement visual and keyboard review; they are not a formal accessibility certification.

Production screenshot evidence and machine-readable results are in `.work/verification/` (ignored generated files). Run `npm run test:e2e` with `TEST_URL` pointing to the preview URL to reproduce them.

## Performance

The final mobile Lighthouse audit completed successfully with Performance **94**, Accessibility **100**, Best Practices **100** and SEO **100**. First Contentful Paint: 2.0 s; Largest Contentful Paint: 2.5 s; Total Blocking Time: 150 ms; Cumulative Layout Shift: **0**. The visible-label/accessibility-name audit passes. The final report is `.work/lighthouse-mobile-final.json`.

Scores are local laboratory measurements, not measurements of the public production host. Lighthouse reported that the local CPU was slower than its expected calibration, so timings can vary between machines.

## Publishing status

`vercel.json` and README deployment instructions are ready. This report verifies the local production build; the PRD delivery item requiring verification of the final hosted deployment remains pending until the published version is checked. The existing public URL used in SEO metadata is sourced from repository metadata and does not imply this new design is live. A Git push may trigger deployment when the repository is connected to Vercel.

Do not fill the remaining unknown award years or add live demos for IOTERA, GWS or KasirKita without new source evidence.

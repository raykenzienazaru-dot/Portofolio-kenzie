# PRD acceptance verification

Verified locally on 8 September 2026 against the PDF PRD and supplemental `.md`. The production build is served through Vite preview, separately from the development server.

| ID    | Result                               | Evidence                                                                                                                                                                                                                                        |
| ----- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-01 | Pass                                 | Six main navigation targets plus the owner-requested research archive. Anchors tested at 1440, 1024, 768, 390 and 320 px.                                                                                                                       |
| AC-02 | Pass                                 | Four exact PRD color tokens in `src/styles.css`; original screenshot colors preserved.                                                                                                                                                          |
| AC-03 | Pass                                 | Icon-only GitHub/LinkedIn/Instagram links with accessible names and PRD URLs. External link attributes verified in browser.                                                                                                                     |
| AC-04 | Pass                                 | Six typographic achievement entries, GRENVIS highlighted, no certificate images. Unavailable years omitted.                                                                                                                                     |
| AC-05 | Pass                                 | Original ten repositories plus four verified additions; WARU separately attributed as R&D. FABRIX AI retains its team R&D assistant role. UNJ spotlight uses the owner's R&D attribution and the supplied proposal. SIGETA remains one project. |
| AC-06 | Pass                                 | Five screen widths tested, no horizontal overflow. Mobile opening/closing, Escape, focus behavior and all project filters work.                                                                                                                 |
| AC-07 | Pass                                 | No invented dates, deployments, statistics, testimonials or lorem ipsum. IOTERA, GWS and KasirKita have clearly labeled repository previews.                                                                                                    |
| AC-08 | Pass                                 | Full-name title/description, Open Graph tags and image, favicon, robots, sitemap and parseable Person JSON-LD.                                                                                                                                  |
| AC-09 | Pass locally                         | `npm run build` succeeds. Production browser tests report no page errors, console errors or failed local asset responses at all five widths.                                                                                                    |
| AC-10 | Implemented; visual review available | Desktop/mobile screenshots reviewed: large editorial typography, asymmetric portrait composition, restrained borders, varied section layouts and exact neutral palette. Final aesthetic approval remains the owner's judgment.                  |

## Functional and accessibility checks

`scripts/verify.mjs` tests all five widths against the production preview. Project filters (ALL, WEB, IoT, AI, R&D), collection expansion, archive categories, search and empty-state recovery pass. The PDF dialog opens, links to the correct document, closes with Escape and restores focus. All nine PDFs return HTTP 200, PDF content types, valid PDF signatures and exact expected byte counts. Six navigation targets, mobile keyboard controls, real-image loading, mail links, external-link attributes and structured data pass. Automated axe WCAG A/AA checks pass, including the visible-label/accessibility-name rule. Automated checks supplement visual and keyboard review; they are not a formal accessibility certification.

The archive has seventeen resources: nine original documents and eight GitHub dataset/model/firmware links. Dataset categories distinguish synthetic data, archive files and a header-only CSV schema. No UNJ competition placement is invented. Instagram access limitations and LinkedIn evidence are recorded in `CONTENT_SOURCES.md`.

Production screenshot evidence and machine-readable results are in `.work/verification/` (ignored generated files). Run `npm run test:e2e` with `TEST_URL` pointing to the preview URL to reproduce them.

## Performance

The expanded site's mobile Lighthouse report records Performance **93**, Accessibility **100**, Best Practices **100** and SEO **100**. First Contentful Paint: 2.1 s; Largest Contentful Paint: 2.6 s; Total Blocking Time: 100 ms; Cumulative Layout Shift: **0.057** (font loading). The report is `.work/lighthouse-research.json`, with no audit runtime error. The CLI exited with a Windows `EPERM` while cleaning up its temporary Chrome profile after writing the report; it is not recorded as a clean CLI exit.

Scores are local laboratory measurements, not measurements of the public production host. Timings vary between machines and runs. PDFs are loaded on demand; their full contents are not part of the initial page transfer.

## Publishing status

Published after pushing implementation commit `5143945` to `origin/main`. The public site at [portofolio-kenzie-pearl.vercel.app](https://portofolio-kenzie-pearl.vercel.app/) returned HTTP 200 with the exact locally built JavaScript bundle. The public UNJ proposal returned HTTP 200 with `application/pdf`.

The complete browser verification script also passed against this public host at 1440 and 390 px: navigation, project/archive filters, search, PDF viewer, all nine PDF responses, image loading, structured data and axe accessibility checks, with no recorded browser errors. This completes the hosted-deployment verification item. The five-width local checks and mobile Lighthouse results above remain separately identified as local measurements.

Do not fill the remaining unknown award years or add live demos for IOTERA, GWS or KasirKita without new source evidence.

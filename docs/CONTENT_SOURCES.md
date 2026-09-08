# Content sources and accuracy decisions

The owner's PDF PRD is the primary content/design specification. The root `.md` is supplemental. Source inspection was performed on 8 September 2026. Repository links below were checked through GitHub's public API, including owner, file tree, available README and deployment metadata. No private project data is required at runtime.

## Identity, achievements and portrait

- Full name, school, SIJA program, location, interests, skills and contact accounts: PRD sections 3–5.
- Six competition placements: PRD §4.5. Only GRENVIS/GLITER JAK has an explicit achievement year (2026). Other years remain absent. Example dates in the `.md` are not treated as confirmed chronology.
- GRENVIS technology summary: the owner's `.md` achievement brief.
- Portrait: `Foto.jpeg`, explicitly selected by the owner during implementation. `public/images/raykenzie.webp` is an optimized copy; monochrome presentation is applied by CSS. No generated person or GitHub character avatar is used.
- Instagram is `https://www.instagram.com/zienaru_/` per PRD, replacing the different handle in the old code.
- The existing portfolio URL is taken from GitHub repository homepage metadata, not invented.

## Project evidence

| Project     | Repository and evidence                                                                                                                                                                                                       | Media / deployment                                                                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FABRIX AI   | [Repository](https://github.com/raykenzienazaru-dot/FABRIX-AI), `README.MD`, frontend sources and Python service. Next.js, Python, YOLO and Supabase documented.                                                              | [Deployment](https://fabrixai.vercel.app/), HTTP 200; actual browser screenshot.                                                                                   |
| AI VISION   | [Repository](https://github.com/raykenzienazaru-dot/AI_VISION), README, React frontend, FastAPI backend and TensorFlow Lite model. Leaf classifications are Healthy, Powdery and Rust.                                        | [Deployment](https://ai-vision-tau.vercel.app/), HTTP 200; actual browser screenshot.                                                                              |
| IOTERA      | [Repository](https://github.com/raykenzienazaru-dot/IOTERA), README and research/design markdown. No application implementation was present in the inspected tree.                                                            | Explicitly labeled research documentation preview. No live-demo URL. Proposed technologies are not presented as implemented technology tags.                       |
| GWS         | [Repository](https://github.com/raykenzienazaru-dot/GWS), `index.html`, `script.js`, `style.css`; title identifies water-quality analysis. Chart.js and MQTT imports verified. Broader sanitation description comes from PRD. | Repository preview. No deployment in its homepage/README. Legacy dashboard image was not used because it does not match this repository's inspected interface.     |
| AIR.CEK     | [AIR-AI repository](https://github.com/raykenzienazaru-dot/AIR-AI), HTML/CSS/JavaScript source; application title AirCek. Description from PRD.                                                                               | [Metadata deployment](https://air-ai-xi.vercel.app/), HTTP 200; actual browser screenshot.                                                                         |
| SOFIA       | [Repository](https://github.com/raykenzienazaru-dot/SOFIA), HTML/CSS/JavaScript source with MQTT and Chart.js imports.                                                                                                        | [Deployment](https://sofia-lime.vercel.app/), HTTP 200; actual browser screenshot. Connected hardware/backend availability is separate from frontend availability. |
| SIGETA      | [SI-GETA](https://github.com/raykenzienazaru-dot/SI-GETA) frontend and [sigeta-ai](https://github.com/raykenzienazaru-dot/sigeta-ai) README/Python backend.                                                                   | [Deployment](https://si-geta.vercel.app/), HTTP 200; actual browser screenshot. All SIGETA variants are one project.                                               |
| KasirKita   | [Repository](https://github.com/raykenzienazaru-dot/kasirkita), HTML/CSS/JavaScript admin/user interfaces, Supabase modules and SQL file.                                                                                     | Repository preview; no verified live-demo URL.                                                                                                                     |
| SuperClean  | [cucicleane repository](https://github.com/raykenzienazaru-dot/cucicleane), HTML/CSS/JavaScript source.                                                                                                                       | [Deployment](https://superclean-fawn.vercel.app/) from original portfolio, HTTP 200; opened and matched to repository brand/content before capturing.              |
| Golden Bolu | [bolu repository](https://github.com/raykenzienazaru-dot/bolu), HTML/CSS/JavaScript source.                                                                                                                                   | [Metadata deployment](https://bolu-ten.vercel.app/), HTTP 200; actual browser screenshot.                                                                          |
| WARU        | [Dacuvis/waru-backend](https://github.com/Dacuvis/waru-backend), README confirms restaurant/POS operations and AI business assistant. The owner's R&D role is supplied by PRD.                                                | Separate collaboration feature with Research & Development (R&D) role; repository link only.                                                                       |

## Ownership nuance

FABRIX AI is hosted under the owner's account, as required by the PRD's selected-project list. Its README credits team SATORU and specifically lists Raykenzie as **Asisten Riset dan Pengembangan**. The portfolio therefore features it while explicitly showing **Research & Development Assistant · Team SATORU**. It does not claim sole authorship, frontend ownership or backend ownership.

IOTERA's README names a team including Raykenzie. It is described as a team research/design project, not as a finished solo application. The main selected grid prioritizes the ten repositories from the PRD under `raykenzienazaru-dot`; WARU is presented separately with its actual repository owner.

## Media and unavailable information

Seven project screenshots were captured from real deployed frontends at a 1440 × 1000 desktop viewport and encoded as WebP. These verify the interface's availability when inspected, not the complete behavior of externally hosted models, sensor connections, authentication or databases. Original screenshot contents are not asserted as portfolio metrics.

Unknown project dates, unknown award years, unavailable deployments and unspecified client/experience metrics are omitted. The site does not fetch GitHub at runtime and makes no invented availability, customer-satisfaction or professional-experience claims.

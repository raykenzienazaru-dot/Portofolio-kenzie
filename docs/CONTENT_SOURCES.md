# Content sources and accuracy decisions

The owner's PDF PRD is the primary content/design specification. The root `.md` is supplemental. Source inspection was performed on 8 September 2026. Repository links below were checked through GitHub's public API, including owner, file tree, available README and deployment metadata. No private project data is required at runtime.

## Identity, achievements and portrait

- Full name, school, SIJA program, location, interests, skills and contact accounts: PRD sections 3–5.
- Six competition placements: PRD §4.5. A seventh placement, third place at INACOMP 2.0 UNJ, was subsequently confirmed by the owner with a result screenshot. Only GRENVIS/GLITER JAK and INACOMP 2.0 have explicit achievement years (2026). Other years remain absent. Example dates in the `.md` are not treated as confirmed chronology.
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

## Owner-requested research expansion — 8 September 2026

The owner subsequently requested inclusion of KTI PDFs, the UNJ UI/UX competition with their R&D role, additional GitHub sensor resources and UI refinement informed by 21st.dev. These additions supplement the PRD's original ten projects; they do not change its palette or ownership rules.

### EduInsight AI / INACOMP 2.0

Primary source: the owner-provided [`PROPOSAL LOMBA UI UNJ FINAL.pdf`](../PROPOSAL%20LOMBA%20UI%20UNJ%20FINAL.pdf), 46 pages, cover year 2026 and preface dated 22 June 2026. The cover lists team NAVI, including Raykenzie. The proposal identifies UI/UX Design Competition INACOMP 2.0, Universitas Negeri Jakarta. The owner explicitly confirmed **Research & Development (R&D)** in this conversation. A later owner-provided result screenshot identifies team NAVI from SMKN 1 Jakarta as **Juara 3**; the achievement and journey now reflect that placement. No sole ownership or deployed application is claimed.

The description summarizes the proposal's learning concept: gamification/quizzes, AI chatbot/flashcards, class administration and teacher analytics. The spotlight's student mockup is extracted from PDF page 21. The Figma prototype URL is taken from the PDF link annotations, with the temporary sharing token omitted. It is a source-linked prototype, not an independently verified live application.

### Original PDF library

Production copies in `public/documents/` preserve the supplied bytes. Cover thumbnails are rendered from those documents; metadata comes from their actual covers and page counts. Years identify the document, not a competition result.

| Document                | Original source                | Pages | Year / attribution                                 |
| ----------------------- | ------------------------------ | ----- | -------------------------------------------------- |
| EduInsight AI           | Root UNJ proposal above        | 46    | 2026; R&D, team NAVI                               |
| SOFIA — Organic Farming | `files/` farming SOFIA paper   | 43    | 2026; Raykenzie named as author                    |
| Garuda Water Sanitation | `files/` GWS paper             | 51    | 2026; contributing author                          |
| AIR.CEK                 | `files/AIR.CEK.pdf`            | 29    | 2026; contributing author                          |
| SIGETA                  | `files/` SIGETA paper          | 41    | 2025; contributing author                          |
| SIGEMA                  | `files/` SIGEMA paper          | 21    | 2025; writer, team research                        |
| LUMINA                  | `files/` LUMINA proposal       | 20    | 2025; team SATORU, contributing author             |
| SOFIA — Smart Office    | `files/` office SOFIA paper    | 20    | 2026; group 6 includes Raykenzie on page 2         |
| BALAP-SA                | `files/` BALAP-SA presentation | 11    | Scanned cover inspected visually; year unavailable |

Organic Farming SOFIA and Smart Office SOFIA are separately named papers. They are not presented as the same application. BALAP-SA is described as a presentation, not a peer-reviewed publication.

### Additional projects and research assets

- [AI-dasboard](https://github.com/raykenzienazaru-dot/AI-dasboard): README identifies GRENVIS Smart Plant Monitoring System. Dashboard, MQTT, ESP32 and ESP-NOW firmware are present. README explicitly records simulated vision input and unfinished hardware/production integrations; the portfolio describes a prototype.
- [datasetminotoring](https://github.com/raykenzienazaru-dot/datasetminotoring): README describes literature-informed synthetic temperature, humidity and soil-moisture data and experimental environmental-risk classification. It is not field data or a validated plant-disease diagnostic system. The repository confusion matrix is labeled as a synthetic-data evaluation image.
- Dataset archive paths verified in that repository: `dataset/home.zip`, `dataset_disease/archive (3).zip`, `dataset_disease1/DATASET_SENSOR.zip`. Archive contents, image counts and provenance beyond the README are not inferred from filenames.
- Model paths verified: `models/modelsensorminotoring.tflite`, `.h`, `grenvis_sensor_model.keras`, `.tflite`, `.h` and other model artifacts. INT8 sensor description follows the README; no accuracy statistic is added to the portfolio.
- [AI VISION model folder](https://github.com/raykenzienazaru-dot/AI_VISION/tree/main/models): Keras/TFLite leaf-classification artifacts, with Healthy, Powdery and Rust outputs.
- [SIGETA CSV](https://github.com/raykenzienazaru-dot/sigeta-ai/blob/main/sensor_data.csv): the raw file contains only `timestamp,mq,temperature,humidity,status`. It is explicitly labeled a header-only schema with no observation rows.
- [GRENVIS firmware](https://github.com/raykenzienazaru-dot/AI-dasboard/tree/main/firmware): sensor firmware plus simulated vision-data sender; unfinished integrations remain visible in the description.
- [TokoNovi](https://github.com/raykenzienazaru-dot/TokoNovi): source redirects to its account interface. [Deployment](https://tokonovi.vercel.app/) returned HTTP 200 and a matching account screen; screenshot captured from it. Family-business context is supported by the owner's public portfolio/profile.
- [Kesehatan / HealReminder AI](https://github.com/raykenzienazaru-dot/Kesehatan): source contains reminder, browser storage and Chart.js features. [Deployment](https://healreminder.pages.dev/) returned HTTP 200 and the matching dashboard; screenshot captured from it. No medical effectiveness claim is made.

The `PNJ` README describes FABRIX AI, so it was not counted again. Other inspected repositories without sufficient distinct evidence were not turned into invented project cards.

The owner also clarified that the GitHub portfolio is broadly the output of their R&D process. All fourteen displayed repositories therefore participate in the R&D filter. This label describes the process—problem research, prototyping, testing and refinement—and does not overwrite the more specific project categories or claim sole ownership of team work.

### Public profiles and access limits

The indexed public [LinkedIn profile](https://id.linkedin.com/in/raykenzie-nazaru-fathurrahmansyah-774548387) corroborates the UNJ participation and lists AI Ready ASEAN, ASEAN Foundation, July 2026. The latter appears as a learning credential, separate from the seven competition placements. Direct LinkedIn access was rate-limited; only accessible indexed content was used.

[Instagram](https://www.instagram.com/zienaru_/) could not be reliably read because access was throttled. The verified PRD profile link remains available, but no new project, award or date was inferred from inaccessible posts.

See [design references](DESIGN_REFERENCES.md) for the specific 21st.dev patterns and how they were independently implemented.

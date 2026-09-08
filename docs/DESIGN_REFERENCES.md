# UI refinement references

The PDF PRD remains the design authority: Bebas Neue / Inter, editorial hierarchy, asymmetric layouts and the four original neutral colors. The owner requested exploring 21st.dev for additional polish.

- [Vercel Tabs by Yadwinder on 21st.dev](https://21st.dev/@yadwinder/components/vercel-tabs): reference for a compact horizontal control with a moving underline. `src/components/ui/FilterBar.jsx` implements the interaction independently using Framer Motion. These controls filter one collection, so they use buttons with `aria-pressed`, not tab/tabpanel roles.
- [Animated Group by Julien Thibeaut on 21st.dev](https://21st.dev/@ibelick/components/animated-group): reference for restrained group entrance motion. `src/components/ui/Reveal.jsx` independently implements a short opacity/vertical reveal on first entry into the viewport.
- [21st.dev's React tabs guide](https://21st.dev/blog/react-tabs-components): interaction context for selection controls and sliding indicators.

No gated component source was retrieved or copied, and no 21st.dev registry component was installed. These are design/interaction references, not a claim that the site embeds the authors' original components. Framer Motion is an installed dependency with its own license.

The EduInsight spotlight uses a real interface mockup extracted from page 21 of the owner's UNJ proposal. Document thumbnails are rendered from original PDFs. TokoNovi and HealReminder previews are browser captures from their actual deployments; the sensor-model image is the repository's actual confusion matrix and is labeled as synthetic-data evaluation.

The expanded collections initially show six items and provide explicit controls to reveal the rest. The research archive includes category filters, text search, empty-state recovery and an on-demand native dialog with PDF, new-tab and download options. Motion respects `prefers-reduced-motion`; focus returns to the opener when the viewer closes.

The sticky navigation extends the same restrained motion language with a moving active-section block, a reading-progress rule, compact-on-scroll behavior and a short stagger when the mobile menu opens. The wordmark reacts subtly on hover. All effects use the PRD palette and collapse to near-instant changes when reduced motion is requested.

# Codex instructions — Castillo v2

## Mission
Rebuild the current personal website into the new commercial website for **Castillo · Transformación Financiera** while preserving the existing production site until the redesign is explicitly approved.

This is a **real independent professional practice led by Gerson Castillo**, not a fictitious multi-person consultancy. Never invent a team, client list, case studies, AI deployments, savings, ROI figures, awards, partnerships, or testimonials.

## Absolute rules
1. **Do not deploy to production.**
2. **Do not modify `master`.** Work only on `redesign/castillo-v2`.
3. **Do not open a PR to `master` until Gerson explicitly approves the local design.** Existing Azure Static Web Apps workflows deploy PR previews.
4. Preserve the current site as a rollback reference. Build the redesign in parallel.
5. Never claim Castillo has implemented AI agents for external clients yet.
6. The current finance-transformation engagement is real, but its client must remain anonymized on the public website unless Gerson explicitly authorizes the name.
7. Azhum is a separate product/IP brand. Castillo may use or recommend Azhum when appropriate, but Castillo must remain technology-agnostic.
8. Avoid collective language that implies a team where none exists. Prefer “Castillo”, “la práctica”, “Gerson”, or neutral verbs. Use “equipo” only when referring to the client’s team or future capability in generic terms.
9. No stock-photo consultancy clichés. No fake client logos. No invented metrics.
10. Every factual marketing claim must be traceable to `docs/CLAIMS_AND_EVIDENCE.md`.

## Positioning hierarchy
**Brand:** Castillo · Transformación Financiera

**Core proposition:** finance transformation connecting business and technology, from diagnosis and functional design to an implemented solution.

**Commercial emphasis:** Data & AI is a priority growth line, especially:
- AI agents and intelligent automation
- advanced/predictive analytics
- AI opportunity assessment and prioritization
- AI governance and scaling for Finance & Administration

**Existing, equally real capabilities that must remain visible:**
- finance-process transformation
- R2R / P2P / O2C
- functional architecture and requirements
- finance systems and integrations
- reporting and analytical accounting
- vendor / IT coordination
- UAT, implementation and adoption
- custom finance software where justified

Do not turn the brand into “Castillo AI”. AI is a strategic capability within a broader finance-transformation mandate.

## Brand architecture
- **Gerson Castillo:** founder, principal, credibility.
- **Castillo · Transformación Financiera:** independent consulting practice.
- **Azhum:** separate proprietary financial-intelligence product.

## Design direction
The website must feel like a premium, AI-native finance-transformation boutique:
- strategic-consulting restraint
- architectural / systems-thinking visual language
- high-end editorial typography
- strong whitespace
- deep navy + warm gold + off-white
- subtle grids, fine lines, data bars, nodes and systems diagrams
- motion only where it clarifies hierarchy or systems flow
- no generic AI gradients, glowing brains, robots, handshakes, stock-office photography, or “startup template” look

Existing Castillo visual identity is a constraint, not a suggestion:
- preserve the current Castillo logo
- preserve the navy / warm-gold visual family
- refine into a complete design system rather than rebranding

## UX goal
A CFO, Finance Director, CEO, CIO or Controller should understand in under 30 seconds:
1. what Castillo does,
2. why Gerson is credible,
3. what can be contracted,
4. how a project works,
5. how Data & AI fits within broader finance transformation,
6. what the next step is.

## Voice
Spanish first. Executive, precise, calm, technically credible. Avoid hype.
Do not say “revolucionamos”, “líderes”, “disruptivo”, “transformación 360”, “IA de vanguardia” or similar empty language unless there is concrete evidence.

## Required workflow
### Phase 0 — Audit
Before coding:
- inspect the current Blazor WebAssembly site, routes, assets, localization, CSS and Azure workflows;
- identify reusable assets, especially logo and brand elements;
- document what should be preserved, retired or migrated;
- inspect accessibility, responsiveness, SEO structure and first-load behavior.

### Phase 1 — Design architecture
Produce before implementation:
- information architecture
- homepage wireframe
- content hierarchy
- visual-system specification
- typography scale
- spacing scale
- color tokens
- component inventory
- motion principles
- responsive behavior
- accessibility constraints

### Phase 2 — Local prototype
Build a new version in parallel, not over the legacy site.
Preferred architecture: **static-first marketing site**. The current site is Blazor WebAssembly; do not assume it is the right architecture for v2.
Evaluate a lightweight static approach (Astro or equivalent) versus upgrading Blazor. For a marketing site, prioritize:
- instant first paint
- SEO
- accessibility
- low JS payload
- easy Azure Static Web Apps deployment
- maintainability

If using a new frontend stack, place it in a clearly isolated folder such as `site-v2/`.
Do not alter production deployment workflows during this phase.

### Phase 3 — Review
Run locally and provide:
- desktop and mobile screenshots
- route list
- Lighthouse/accessibility notes
- any unresolved copy/claim questions
Do not deploy.

### Phase 4 — Deployment
Only after explicit approval:
- update/create Azure Static Web Apps workflow for the approved v2 build
- create preview first
- verify custom domain, redirects, headers, SEO, analytics and forms
- then merge/deploy production with rollback instructions

## Initial site architecture
Keep v1 intentionally compact.

Navigation:
- Servicios
- Cómo trabajo
- Data & AI
- Sobre Castillo
- Hablemos

Homepage sequence:
1. Hero
2. Core proposition / bridge between Finance and Technology
3. Service pillars
4. Featured Data & AI / AI Transformation section
5. How a project works
6. Credibility / founder
7. Azhum as separate proprietary product
8. CTA

No “Casos de éxito” section until there are real, publishable cases.

## Initial copy direction
Hero should express the broad mandate first, not AI-only.

Working direction:
**Del problema financiero a la solución implantada.**

Supporting idea:
Castillo diseña procesos, sistemas y soluciones de Data & AI para mejorar cómo Finanzas opera, controla y toma decisiones.

Then make **AI Transformation for Finance** highly visible as a priority service line.

## Quality bar
Treat this as a real professional-services brand, not a portfolio exercise.
The final result should look credible beside leading strategy/technology boutiques, while remaining honest about the practice’s current scale.

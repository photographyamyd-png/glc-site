# Project Prime Directive — Consolidated Rules

**Sources:**

- **Exhaustive directive (stakeholder, zero-omission):** Sections I–XI below — **additive normative law** for governance, depth, SEO, audit discipline, and grill workflow.
- **Appendix A:** Cursor Initialization Directive (`Cursor_Initialization_Directive.pdf`) — verbatim extract.
- **Appendix B:** Master Project Bible, Ground Level Edition (`Master_Project_Bible.pdf`) — verbatim extract.

**Purpose:** Single rules document for all agents and humans. PDF extracts preserve provenance; where the exhaustive text and PDFs differ, **both are kept** and **reconciliation** is explicit in §GLC implementation baseline (locked) and §Conflicts / sequencing.

**Agent obligation:** Before merging material homepage changes, open [COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md), map changes to rule IDs (**P-*** and/or **D-*** / **B-***), and update evidence rows. See also [AGENTS.md](../AGENTS.md) for the Socratic Handshake on new requests.

---

## THE EXHAUSTIVE PROJECT PRIME DIRECTIVE (ZERO-OMISSION)

### I. PROJECT GOVERNANCE & SANDBOX PROTOCOL

- **The Homepage Laboratory:** Every structural, visual, and interactive rule must be successfully implemented and approved on the Homepage **first**. No other development is permitted until this is satisfied.
- **Zero-Creation Policy:** Do not initialize the Next.js root directory structure, secondary service pages, or URL slugs until the Homepage is 100% approved.
- **DNA Extraction:** Once the Homepage is approved, Cursor must explicitly "extract" the spacing constants, typographic logic, and component behaviors into a Global Design System (e.g., `.mdc` or `design-dna.tsx`) to ensure absolute consistency for Phase 2.
- **The 10-Section Template:** The initial Homepage build must consist of at least **10 distinct sections** to stress-test the AI's ability to maintain structural variety without repetition.

### II. THE VIRAL "GRILL ME" LOGIC (THE HANDSHAKE)

- **The Socratic Handshake:** Cursor is strictly forbidden from writing code upon a new request. It must first **"Grill"** the user with 3–5 relentless, analytical questions to stress-test the intent, emotional tone, and scale of the design.
- **Aesthetic Friction:** AI must proactively scan every layout for "AI-Standard" patterns (generic centered cards, standard grids). If a layout feels "default," it must be re-engineered using non-standard spacing, depth, or overlapping layers.
- **Approved UI foundation (operative — 2026):** Production builds use an **approved UI kit** as the default component foundation. **shadcn/ui** (Tailwind + **Radix** primitives as wired by that stack) is the **standard** for new sections and components unless a task explicitly scopes otherwise. **MUI** and other non-approved kits remain out of scope unless added by future amendment with documented boundaries. **Aesthetic friction (P-IIb) still applies:** kit primitives must be **composed** into bespoke section architecture (layering, rhythm, anti-flat depth)—dropping default kit layouts without adaptation is non-compliant. Authoritative policy: [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) amendment **2026-04-25** (UI kit production foundation + required kit boundary documentation). **Allowed/disallowed detail:** [UI_KIT_BOUNDARIES.md](./UI_KIT_BOUNDARIES.md).

### III. CONTRAST & COLOR DYNAMICS

- **Atmospheric Backgrounds:** The primary background baseline is established as **High-Key White (#FFFFFF)**.
- **Section Contrast:** **Dark Tones** (Obsidian/Charcoal) and **Brand Colors** are fully permitted and encouraged as background environments for specific sections to create rhythmic contrast and define distinct phases of the user journey.
- **Strategic Intent:** Brand colors and logos must act as navigation beacons or structural motifs. Whether used as a subtle pop or a full-section atmosphere, the usage must be intentional and serve a clear visual purpose.

### IV. DEPTH, TEXTURE & DIMENSIONALITY (THE 2-METHOD MINIMUM)

- **Anti-Flat Multi-Layering:** Every component or section build must employ a **minimum of TWO distinct methods** to prevent flat design.
- **The Dimensionality Toolkit:** Options to be combined include, but are not limited to:
  - **Layered Translucency:** `backdrop-blur`, glassmorphism, or complex `z-index` stacking.
  - **Textural Overlays:** SVG grain/noise, bespoke patterns, or image-based textures.
  - **Machined Architecture:** Bespoke borders, "inner glows," or gradient lines.
  - **Ambient Physics:** Soft ambient shadows, dynamic lighting/glows, or multi-plane parallax effects.

### V. STRUCTURAL ARCHITECTURE & NON-STANDARD GRIDS

- **Vertical Anchoring:** Utilize tall elements (vertical imagery or oversized text) spanning 100vh to act as a visual "spine."
- **Offset Clustering:** Content blocks must be "unsynced"—using varying top/bottom margins so elements never align perfectly on a horizontal baseline.
- **Broken Grid Layouts:** Intentionally overlap container edges or bleed elements off-screen to eliminate the "12-column box" feel.
- **70/30 Optical Weight Balancing:** Counter-balance dense imagery or high-impact sections with extreme whitespace or massive typographic scale on the opposing side.
- **Interlocking Sections:** Elements from one section must physically intrude or "bleed" into the space of the next to tether the scroll experience together.
- **Negative Space Bridges:** Use background textures or subtle decorative lines that "bridge" the gaps between content clusters.
- **Intentional Variety:** No two adjacent sections may share the same structural archetype. Section B must always contrast the architectural physics of Section A.

### VI. CONTENT ARCHITECTURE & SEO PRESERVATION

- **The SEO Integrity Mandate:** All copy required for ranking must remain in the DOM. Copy is never to be cut or shortened for the sake of the UI.
- **Interactive Stowing:** Any content copy exceeding a two-sentence minimum must be housed within an appropriate interactive component that hides the bulk but expands when necessary.
- **Stow/Expand Archetypes:** Options include **Sticky Tab Containers, Expandable "Read More" Overlays, Sliding Cards, Accordions, Drop-down Spines, or Click-to-Expand boxes.**
- **Factored Scaling:** The section component must be built specifically to handle the expanded state of the text without breaking the section's visual balance.

### VII. TRUST SIGNAL & SOCIAL PROOF ARCHITECTURE

- **Decision Matrix Logic:** AI must determine the proof pattern based on the industry:
  - **The Pedigree (Contracting/Construction):** Focus on longevity and technical milestones (e.g., "$25M in completed projects").
  - **The Boutique (Creative/Photography):** Focus on media recognition (e.g., "As Seen In" publication logos).
  - **The Workhorse (Service):** Focus on reliability data (e.g., "4.9/5 stars over 1000+ jobs").
- **Monochrome Filtering:** All third-party logos must be presented in a monochrome, grayscale format (suggested 40% opacity) to ensure a high-end, integrated look. No "Logo Walls."
- **The Two-Scroll Mandate:** The value proposition and primary CTA must be visually established within the first two scrolls on both desktop and mobile.

### VIII. TYPOGRAPHIC RHYTHM & SCALE

- **Hierarchy Scale:** Implement a minimum of three distinct typographic scales.
- **The 5:1 Hero Scale:** The primary H1/Hero text must maintain an extreme scale ratio (suggested 5:1) relative to the body text.
- **The 1:3 Content Ratio:** Maintain a visual ratio of 1 part "Impact Typography" to 3 parts "Description/Utility Text."
- **Cliché Prohibition:** **STRICTLY FORBID** the use of "Script," "Cursive," or "Distressed/Rugged" fonts unless explicitly authorized.
- **Typography Color-Purpose Rule:** Each section must present at least **three distinct typography colors for three distinct semantic roles**: label/eyebrow, display/headline (with accent fragment where section pattern expects it), and body/supporting copy. Repeated single-tone stacks across heading/body/meta are non-compliant.

### IX. MOBILE-FIRST ADAPTIVE LOGIC

- **Mobile Alter-Ego Rule:** Every section must have a stated mobile reflow pattern that is a distinct design "alter-ego"—not just a vertical stack.
- **Touch Optimization:** Transform desktop effects (like magnetic hover) into haptic-ready scroll reveals or touch-appropriate motion.
- **Proportional Fluidity:** Utilize CSS `clamp()` or fluid scaling for all spacing and typography to ensure proportionality across all breakpoints.

### X. TECHNICAL ENGINEERING & SEO INTEGRITY

- **App Router Standards:** Full utilization of Next.js App Router patterns.
- **Functional Connectivity:** 100% link accuracy is mandatory. Every button, card, or link must have a live internal slug or action destination (`mailto:`, `tel:`, or anchor).
- **SEO Schema:** Injection of **LocalBusiness** and **Service** JSON-LD schema is required for local search dominance.
- **Performance:** Zero "jank" and 60fps animations are mandatory for the premium feel.

### XI. THE COMPLIANCE & AUDIT MATRIX

- **Line-by-Line Verification:** Every rule above is indexed. Cursor must be able to justify any design choice by referencing the specific Rule ID.
- **Audit Matrix:** Work proceeds only when the AI can provide evidence for each "Pass" in the Compliance Matrix.
- **Reset Baseline:** Any existing code that does not meet these rules is considered a "Fail" and must be remediated row-by-row.

---

## GLC implementation baseline (locked)

**Stakeholder lock (2026):** The Ground Level Commercial homepage **keeps** the color system, typography, and spacing already chosen in code until explicitly revised. Agents must **not** regress this baseline in drive-by refactors.

| Layer | Source of truth | Notes |
|--------|-----------------|--------|
| **Color / canvas** | [`app/globals.css`](../app/globals.css) — `--y`, `--canvas` / `--brand-canvas` (`#fafafa`), ink tokens (`--ink-deep`, `--g*`), `--gl-forest` token, `band-light` / `band-dark` | Exhaustive **III** names **#FFFFFF** as atmospheric baseline; **locked baseline** remains **#fafafa** canvas until human sign-off to switch. Dark/brand **section fields** and **`--y` accent** remain as implemented. |
| **Typography** | [`app/layout.tsx`](../app/layout.tsx) + globals — Oswald (display / `font-serif`), Barlow (body), Barlow Condensed (labels); Three-Act hero in [`components/ui/ThreeActHeadline.tsx`](../components/ui/ThreeActHeadline.tsx) | Exhaustive **VIII** targets (3+ scales, 5:1, 1:3) are **audit targets**, not a mandate to replace fonts in this baseline. |
| **Spacing** | [`app/globals.css`](../app/globals.css) — `--s1`…`--s14`, `--dna-space-*`, `.section-major`, component Tailwind | Exhaustive **IX** `clamp`/fluidity: **additive** where already used (e.g. hero); full pass optional. |

**Prefab UI (P-IIc):** **Pass** when the repo implements the **approved UI foundation** (shadcn/ui + Radix primitives + Tailwind) per [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) **2026-04-25** amendment and any published **kit boundary** doc. **Fail** if undeclared third-party kits (e.g. **MUI**) or ad-hoc prefab stacks bypass documented boundaries. Historical “no kit” snapshots apply only to **pre-amendment** lab audits.

---

## Exhaustive rule index (P-IDs, for audits)

| ID | Section | Rule (summary) |
|----|---------|----------------|
| P-Ia | I | Homepage laboratory first |
| P-Ib | I | Zero-Creation: no secondary routes/pages until homepage approved |
| P-Ic | I | DNA extraction to global design system after approval |
| P-Id | I | ≥10 distinct homepage sections |
| P-IIa | II | Socratic Handshake: 3–5 questions before code on new requests |
| P-IIb | II | Aesthetic friction; re-engineer AI-default layouts |
| P-IIc | II | Approved UI kit foundation (shadcn/ui + Radix + Tailwind); compose with bespoke section rules; MUI/non-approved kits out unless amended |
| P-IIIa | III | Atmospheric baseline stated as #FFFFFF (see baseline lock) |
| P-IIIb | III | Dark + brand section atmospheres permitted for rhythm |
| P-IIIc | III | Color/logo as intentional beacons |
| P-IVa | IV | Minimum **two** distinct depth methods per section/component |
| P-IVb | IV | Toolkit: translucency, texture, machined, ambient physics |
| P-Va | V | 100vh spine, offset clustering, broken grid, 70/30 |
| P-Vb | V | Interlock bleed; negative-space bridges; adjacent sections differ archetype |
| P-VIa | VI | SEO copy stays in DOM; never cut for UI alone |
| P-VIb | VI | Long copy (>2 sentences) stowed in interactive expand pattern |
| P-VIc | VI | Expanded state must not break section balance |
| P-VIIa | VII | Pedigree / Boutique / Workhorse matrix |
| P-VIIb | VII | Monochrome logos ~40%; no logo walls |
| P-VIIc | VII | Two-scroll value prop + primary CTA |
| P-VIIIa | VIII | ≥3 typographic scales |
| P-VIIIb | VIII | ~5:1 hero vs body |
| P-VIIIc | VIII | ~1:3 impact vs description |
| P-VIIId | VIII | No script / cursive / rugged unless authorized |
| P-VIIIe | VIII | ≥3 typography color-purpose roles per section (label, display/accent, body) |
| P-IXa | IX | Mobile alter-ego per section (not “only stack”) |
| P-IXb | IX | Touch-appropriate motion |
| P-IXc | IX | `clamp()` / fluid spacing and type where applicable |
| P-Xa | X | App Router |
| P-Xb | X | All links/buttons live (`/`, `#`, `tel:`, `mailto:`) |
| P-Xc | X | LocalBusiness + Service JSON-LD |
| P-Xd | X | No jank; 60fps motion target |
| P-XIa | XI | Justify choices by rule ID |
| P-XIb | XI | Compliance matrix evidence for Pass |
| P-XIc | XI | Fail = remediate row-by-row |

---

## Appendix A — Document 1: Cursor Initialization Directive (verbatim PDF extract)

```
COMMAND: INITIATE HIGH-END HOMEPAGE
SANDBOX
[CLAUDE-LOGIC ENABLED]
YOUR MANDATE: Build a single Homepage laboratory. You must use the
"Viral Claude Logic" to escape AI design traps. If any section looks
like a "default" template, you are directed to CRITIQUE AND GRILL
YOURSELF, then re-engineer it using AESTHETIC FRICTION.
1. APPLY VIRAL DESIGN LOGIC
Self-Audit: Every component audited for "AI-Standardness." Replace
generic cards with Broken Grids and Interlocking Sections.
Bespoke Primitives: Build from raw Tailwind; no pre-fab components.
2. GRID & ARCHITECTURE
Vertical Anchoring (100vh spines) and 70/30 Optical Weight.
Baseline Breaking: Staggered content clusters must never align perfectly.
3. THE AESTHETIC FOUNDATION
Light-Dominant Theory: Backgrounds #FAFAFA. Dark tones as "Structural
Ink" only.
5% Color Rule: Brand colors for CTAs and "Pops." No full-color
backgrounds.
Anti-Flat Depth: Use SVG noise grain and backdrop-blur layering.
4. TYPOGRAPHY & RHYTHM
Editorial Chunking: No walls of text. 1:3 ratio of Headings to Body.
High-Contrast Pairing: Geometric Sans + Premium Serif. NO SCRIPT OR
RUGGED FONTS.
[Page 1: decorative ◦ bullets — no additional requirement text]
5:1 Structural Scale: Massive H1 vs. breathable Body text.
5. TRUST & CONVERSION
Two-Scroll Mandate: Value prop and CTA must be clear within two scrolls.
Monochrome Pedigree: Format trust signals as monochrome "stamps" (40%
opacity).
6. INTERACTIVE & MOBILE
Mobile Alter-Ego for every section; do not just stack.
Component Semantics and 4px/8px mathematical baseline for spacing.
PROCEED: Build 10 unique structural archetypes on this Homepage Sandbox. Do
not move to Phase 2 until this DNA is perfected.
[Page 2: decorative ◦ bullets — no additional requirement text]
```

---

## Appendix B — Document 2: Master Project Bible (verbatim PDF extract)

```
THE MASTER PROJECT BIBLE (GROUND
LEVEL EDITION)
I. THE VIRAL DESIGN ENGINE (THE "CLAUDE" LOGIC)
The "Grill Me" Audit: Before any code is finalized, Cursor must perform a self-audit:
"Analyze this layout for 'AI-Standard' patterns. If it looks like a generic template, critique
it harshly and redesign the component using higher-level CSS logic (Clips, Masks, and
Complex Z-Indexing)."
Aesthetic Friction: Intentionally avoid the path of least resistance. If a component feels
"standard," add non-standard spacing, unexpected depth layers, or unique micro-
interactions.
Bespoke Primitive Logic: Avoid pre-built UI components. Build from "CSS
Primitives"—raw Tailwind values and custom properties.
II. THE SANDBOX PROTOCOL (PHASE 1: FOUNDATION)
The Homepage Laboratory: Implement every rule here on the Homepage first.
Zero-Creation Policy: No root directories or secondary pages until the Homepage is
100% approved.
DNA Extraction: Once approved, extract spacing, type, and interaction constants into
a Global Design System.
III. TRUST SIGNAL & SOCIAL PROOF ARCHITECTURE
The Decision Matrix: Categorize business intent (Pedigree, Boutique, or Workhorse)
to select the appropriate "Proof Pattern."
Monochrome Filtering: All third-party logos must be monochrome (40% opacity) for
high-end cohesion.
[Page 1: decorative ▪ row — no additional requirement text]
IV. LIGHT-DOMINANT CONTRAST THEORY
The White Canvas: Primary backgrounds are #FAFAFA.
Dark Punctuation: Dark tones reserved for "structural ink"—lines, coordinates, and
motifs.
V. BRAND COLOR RESTRAINT
The 5% Rule: Colors are for CTAs and "Pops" only. Never for backgrounds.
Color as Navigation: Use color as a functional beacon to guide conversion.
VI. ARCHITECTURAL LAYOUT & NON-STANDARD GRIDS
Vertical Anchoring: 100vh vertical elements act as a "spine."
Offset Clustering: Staggered blocks with varying top margins.
Broken Grids & Interlocking Sections: Overlapping edges and "tethered" scroll
experiences.
70/30 Optical Weight: Counter-balancing density with extreme typographic scale.
VII. STRUCTURAL ARCHETYPES
Impact Horizon (Hero), Asymmetric Spine (Info), Cinematic Reveal (Gallery), Minimalist
Float (Detail).
Intentional Variety: No repeating layouts back-to-back.
VIII. TYPOGRAPHIC INTENT & PARTNERSHIP
The Cliché Ban: STRICTLY NO SCRIPT OR RUGGED FONTS.
Editorial Pairing: Geometric Sans + Premium Serif.
Structural Scale: 5:1 ratio between H1 and Body text.
[Page 2: decorative ▪ rows — no additional requirement text]
IX. COMPOSITIONAL RHYTHM (ANTI-WALL-OF-TEXT)
1:3 Boutique Ratio: Impact Typography vs. Description Text.
Editorial Chunking: Atomize all long-form text into snippets.
X. REPEATABLE BRAND ACCENTS & GEOMETRIC "POPS"
Logo Watermarking: Oversized, low-opacity logo SVGs as background anchors.
Logo-Derived UI: Use fragments for dividers, bullet points, and frames.
XI. DEPTH, TEXTURE & DIMENSIONALITY
Anti-Flat Noise: Subtle SVG grain overlays.
Glassmorphism: Layered backdrop-blur and soft shadows.
Machined Borders: Gradient or "Inner Glow" borders instead of 1px solid lines.
XII. ADAPTIVE COMPONENT ENGINEERING (MOBILE-FIRST)
Contextual Reflow: Every section has a specific "Mobile Alter-Ego."
Touch-Optimized Interaction: Transform "Magnetic" effects into Haptic-ready Scroll
Reveals.
XIII. PREDICTIVE LOGIC & PATTERN GRAMMAR
Component Semantics: Consistent visual "language" for buttons/inputs across all
pages.
Mathematical Spacing: Strict 4px/8px baseline for all gaps.
XIV. STRUCTURAL INTEGRITY & SEO (PHASE 2)
Root Tree: Next.js App Router hierarchy.
[Page 3: decorative ▪ rows — no additional requirement text]
SEO Schema: LocalBusiness and Service JSON-LD injection. ▪
```

---

## Legacy unified rule index (D- / B- IDs, PDF-derived)

| ID | Source | Rule (summary) |
|----|--------|----------------|
| D-MANDATE | D1 L4–7 | Homepage laboratory; Viral Claude Logic; grill + aesthetic friction if template-y |
| D-1a | D1 L8–10 | Self-audit AI-standardness; broken grids + interlock; no generic cards |
| D-1b | D1 L10–11 | PDF: bespoke primitives / no prefab — **operative audits:** follow **P-IIc** + **MASTER_RULES** 2026-04-25 (approved kit); PDF wording retained for provenance |
| D-2a | D1 L12–13 | 100vh spines + 70/30 optical weight |
| D-2b | D1 L14 | Baseline breaking: staggered clusters, never perfect alignment |
| D-3a | D1 L15–17 | #FAFAFA backgrounds; dark = structural ink only |
| D-3c | D1 L20 | SVG grain + backdrop-blur depth |
| D-4a | D1 L21–24 | Editorial chunking; 1:3 heading-to-body; sans + serif; no script/rugged |
| D-4b | D1 L37 | 5:1 H1 vs body scale |
| D-5a | D1 L38–39 | Two-scroll: value prop + CTA clear |
| D-5b | D1 L40–41 | Monochrome pedigree stamps 40% opacity |
| D-6a | D1 L42–43 | Mobile alter-ego per section; not “just stack” |
| D-6b | D1 L44 | Component semantics + 4px/8px spacing baseline |
| D-7 | D1 L45–46 | Ten unique archetypes; no Phase 2 until DNA perfected |
| B-Ia | B2 I | Grill audit before finalize; clips, masks, z-index if generic |
| B-Ib | B2 I | Aesthetic friction: non-standard spacing, depth, micro-interactions |
| B-Ic | B2 I | PDF: no pre-built UI — **operative audits:** same as **D-1b** / **P-IIc** (approved shadcn/Radix foundation) |
| B-IIa | B2 II | Every rule on homepage first |
| B-IIb | B2 II | No new root dirs / secondary pages until homepage 100% approved |
| B-IIc | B2 II | After approval: extract DNA to global design system |
| B-IIIa | B2 III | Decision matrix: Pedigree / Boutique / Workhorse → proof pattern |
| B-IIIb | B2 III | Third-party logos monochrome 40% opacity |
| B-IVa | B2 IV | Primary backgrounds #FAFAFA |
| B-IVb | B2 IV | Dark tones = structural ink (lines, coordinates, motifs) |
| B-Va | B2 V | 5% rule: color for CTAs/pops; never for backgrounds |
| B-Vb | B2 V | Color as navigation / conversion beacon |
| B-VIa | B2 VI | 100vh vertical spine |
| B-VIb | B2 VI | Offset clustering / staggered blocks |
| B-VIc | B2 VI | Broken grids + interlock + tethered scroll |
| B-VId | B2 VI | 70/30 optical weight |
| B-VIIa | B2 VII | Named archetypes: Impact Horizon, Asymmetric Spine, Cinematic Reveal, Minimalist Float |
| B-VIIb | B2 VII | Intentional variety: no repeating layouts back-to-back |
| B-VIIIa | B2 VIII | No script or rugged fonts |
| B-VIIIb | B2 VIII | Geometric sans + premium serif |
| B-VIIIc | B2 VIII | 5:1 H1 to body |
| B-IXa | B2 IX | 1:3 boutique ratio (impact vs description) |
| B-IXb | B2 IX | Editorial chunking / atomize long-form |
| B-Xa | B2 X | Oversized low-opacity logo **SVG** watermarks |
| B-Xb | B2 X | Logo-derived fragments for dividers, bullets, frames |
| B-XIa | B2 XI | Subtle SVG grain |
| B-XIb | B2 XI | Glassmorphism (blur + shadows) |
| B-XIc | B2 XI | Machined borders: gradient/inner glow—not plain 1px only |
| B-XIIa | B2 XII | Every section has distinct mobile alter-ego |
| B-XIIb | B2 XII | Touch: magnetic → haptic-ready scroll reveals |
| B-XIIIa | B2 XIII | Consistent button/input visual language |
| B-XIIIb | B2 XIII | Strict 4px/8px gap baseline |
| B-XIVa | B2 XIV | Next.js App Router hierarchy (when in scope) |
| B-XIVb | B2 XIV | LocalBusiness + Service JSON-LD |

**P ↔ legacy map (partial):** P-IIb/P-IIc **supersede** D-1b/B-Ic PDF kit language for **current implementation** (approved UI kit per **MASTER_RULES** 2026-04-25). P-IIb/P-IIc still align with D-1a, B-Ia–b for anti-template discipline. P-IIIb/c align with band rhythm + accent usage documented in COMPLIANCE §8. P-IVa extends D-3c / B-XIa–c with an explicit **two-method minimum**. P-VIb is **new** vs PDFs (interactive SEO stowing). P-Id overlaps D-7 (ten sections vs ten archetypes — treat as related compliance gap).

---

## Conflicts / sequencing (explicit)

- **P-IIIa vs GLC baseline lock:** Exhaustive states **#FFFFFF**; locked implementation keeps **`#fafafa`** canvas until human sign-off. **Evidence:** `globals.css` `--brand-canvas`.
- **P-Ib / P-Id vs current repo:** Zero-Creation and **≥10 sections** vs existing **`/services/[slug]`** and **seven** homepage bands — document as **Fail / pending** in COMPLIANCE until remediated or formally excepted.
- **P-VIb vs current copy:** Long-copy **stowing** not yet implemented site-wide — **Pending**.
- **P-IVa vs PDF depth:** PDFs require depth generally; Exhaustive requires **count ≥2 methods** per section — audit with checklist.
- **D-7 vs B-IIb (legacy):** Same as prior plan: single-route ideal vs stakeholder routes; JSON-LD may live on one page.
- **D1 “no full-color backgrounds” vs photography / P-IIIb:** Full-bleed **photos** and **structural ink** fields allowed; **saturated brand marketing washes** remain discouraged unless intentional per P-IIIc.
- **B-Va vs structural ink bands:** Reconciled in [COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md) §8 — ink fields are punctuation, not arbitrary brand fill.
- **Appendix A/B verbatim vs operative Section II (P-IIc):** PDF extracts still read “raw Tailwind / no pre-fab components.” **Operative norm** for agents and production audits is **Section II** above and [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) **2026-04-25** — **approved shadcn/ui + Radix + Tailwind** foundation. Appendix text is **historic provenance**, not a blocker on current kit usage.

---

## Agent obligation (homepage changes)

1. Open **[COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md)** and update the audit row for any rule touched (**P-*** and/or **D-*** / **B-***).
2. Run the **Grill** (B-Ia / D-MANDATE / P-IIb) on changed components.
3. On **new** requests, follow **P-IIa** (Socratic Handshake) per [AGENTS.md](../AGENTS.md).
4. Not expand routes or “Phase 2” surface area without explicit human approval (P-Ib, B-IIb, D-7).

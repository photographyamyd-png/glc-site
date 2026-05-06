# Master Design Build Compliance

Single consolidated implementation reference for design/build compliance across sections, components, pages, interaction, and copy architecture.

This document compiles finalized, transferable standards from governance, rule files, and validated audits.  
It is intentionally written as production law, not as a lab diary.

## 1) Authority and precedence

Use this document as the day-to-day implementation reference, with authority resolved in this order:

1. `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` (governance + amendments + conflict resolution)
2. `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` (this file; consolidated implementation rules)
3. `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` (normative rule bodies and IDs)
4. `docs/BAND_RHYTHM_AND_CONTRAST.md` (rhythm and section-level contrast supplement)
5. `docs/MOTIF_ACCENT_RULES.md` + `docs/MOTIF_ACCENT_MANIFEST.json` (motif family policy)
6. `docs/UI_INTERACTION_RULES.md` (interaction behavior and caps)
7. `docs/PHASE2_MASTER_GATE_CHECKLIST.md` + `docs/COMPLIANCE_EXECUTION_PLAN.md` (process and evidence)
8. `docs/design-references/*.md` (structure-only guidance; not brand/token authority)

If constraints overlap, apply the strictest threshold unless a newer amendment in `MASTER_RULES_SOURCE_OF_TRUTH.md` explicitly overrides it.

## 2) Normative owner map

- **Core directive IDs and baseline law:** `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`
- **Band rhythm + section contrast + anti-flat guardrails:** `docs/BAND_RHYTHM_AND_CONTRAST.md`
- **Motif inventory/caps/context:** `docs/MOTIF_ACCENT_RULES.md`, `docs/MOTIF_ACCENT_MANIFEST.json`
- **Interaction caps and behavior:** `docs/UI_INTERACTION_RULES.md`
- **Approved UI kit boundaries:** `docs/UI_KIT_BOUNDARIES.md`
- **Gate workflow and pass/fail execution:** `docs/PHASE2_MASTER_GATE_CHECKLIST.md`, `docs/COMPLIANCE_EXECUTION_PLAN.md`
- **Workspace execution protocol:** `AGENTS.md`

## 3) Exclusion register (non-normative artifacts)

Do not treat these as production rules:

- Sandbox-only section-count or archetype-count stress targets (including historical “build 10 sections” goals)
- Temporary trial-route stress setups from `docs/delete-when-launching/*`
- Dated audits/reports/ledgers as direct law text (they are evidence unless promoted by authority docs)
- Retired conflict framing: `No full-color backgrounds / 5% color rule vs dark band usage` as an active conflict item

Keep only transferable outcomes from those sources (what passed, why it passed, and reusable thresholds).

## 4) Baseline token lock (non-negotiable)

Without explicit human sign-off, do not change:

- Color baseline tokens and band system (`--y`, ink scales, `band-light` / `band-dark`, `--brand-canvas`)
- Typography stack (Oswald / Barlow / Barlow Condensed)
- Spacing tokens (`--s*`, `--dna-space-*`)

### 4.1 Base token color anchors (locked references)

The following base anchors are part of the locked implementation baseline:

- `--brand-canvas: #fafafa` (active approved canvas baseline)
- `--yellow-core: #f2b705` and `--y: var(--yellow-core)` (primary accent beacon)
- `--ink-deep: #1e1c1a` and `--ink-mid: #2e2b28` (structural dark fields/text anchors)
- `--w: #ffffff` (white contrast anchor)

Token aliases and extended brand variables can evolve, but these anchors should not be changed without explicit human sign-off recorded in `MASTER_RULES_SOURCE_OF_TRUTH.md`.

### 4.2 Approved UI component foundation (production)

- **Default stack:** **shadcn/ui** on **Tailwind CSS**, using **Radix UI** primitives where the kit wires them. This is the **standard** component foundation for sections and shared UI unless a task explicitly scopes otherwise.
- **Authority:** [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) amendment **2026-04-25** (UI kit may replace baseline for production foundation) and operative **P-IIc** in [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md).
- **Still required:** composition rules elsewhere in this document (three-layer minimum, depth, rhythm, typography color-purpose, interaction caps). Using kit components **does not** waive anti-flat, contrast, or motion/accessibility rules.
- **Out of scope (unless amended):** **MUI** and other non-documented prefab stacks. Any expansion beyond the approved kit must update **MASTER_RULES** with explicit allowed/disallowed boundaries.
- **Canonical boundary document:** [UI_KIT_BOUNDARIES.md](./UI_KIT_BOUNDARIES.md) — fill in version/token mapping rows as implementation lands.

## 5) Section architecture and composition rules

Every section must satisfy:

- **Three-layer minimum:** field + figure/panel + accent/overlay/rail/watermark
- **Two-method depth minimum:** at least 2 distinct dimensional methods (translucency, texture, machined borders/glows, ambient layering)
- **Anti-flat composition:** no flat band + single text block as finished output
- **Asymmetry with counterbalance:** asymmetrical mass must have an opposing visual anchor
- **Tone-aware internals:** internal cards/panels adapt to light/dark context; wrapper-only tone changes are non-compliant
- **Contrast correctness at component level:** no white text on light surfaces, no muted-ink text on deep charcoal, and no wrapper-only “pass” if inner surfaces violate contrast

## 6) Band rhythm and inter-section contrast

- Do not place adjacent full-width `band-dark` section roots without an approved separator (`marquee-band`, `band-light`, `band-light-field`, or clearly light-dominant figure block)
- Avoid dark-dark-dark root stacking with only minor internal tweaks
- Adjacent sections must not reuse the same structural archetype

## 7) Typography semantic-role rules

Per section, enforce:

- Minimum 3 distinct typography color uses mapped to distinct semantic roles:
  - label/eyebrow
  - display/headline (accent fragment where pattern expects it)
  - body/supporting copy
- Encourage a fourth role where IA supports it (meta/stat/chip/CTA)
- Hard fail conditions:
  - heading/body/meta all one dominant color
  - repeated color without semantic distinction
  - missing expected accent role in accent-key heading patterns

Scoped exception:

- Utility-only separator modules (example: ticker/marquee bands that are not content sections) may be marked `N/A` for full triad enforcement if they remain clearly non-content separators.

## 8) Glassmorphism and translucency constraints

- Glass/translucency is allowed as one depth method, not as blanket styling
- Prefer machined/canvas figure blocks for primary long copy on dark fields
- Avoid persistent generic translucent slabs for core content regions
- Blur/shadow must support hierarchy and legibility, not decorate every block

## 9) Imagery and figure-ground usage rules

- Use figure-ground mass intentionally in sections that require structural weight (hero, feature, service depth blocks)
- For long dark-band copy, pair with machined panel and/or light figure when needed for readability and hierarchy
- Media is optional only when equivalent visual mass and depth are delivered through approved structural motifs/panels
- Avoid pseudo-depth that relies only on tiny overlays without meaningful figure-ground contrast

## 10) Content copy architecture (critical)

### 10.1 Density threshold

- Any copy beyond short utility length must not ship as a flat wall
- Long-form copy (including content that exceeds two-sentence compact framing) must be refactored into structured containers while keeping SEO copy in DOM

### 10.2 Approved stow/expand patterns

- Sticky tab containers
- Accordion / `details-summary` disclosure clusters
- Read-more / expandable overlays
- Sliding or click-to-expand content cards

### 10.3 Pattern placement expectations

- **Overview/process/deep service content:** tabs, accordions, expandable modules preferred
- **FAQ blocks:** semantic disclosure patterns preferred
- **Short utility blurbs/tickers:** stow patterns optional; readability-first concise text acceptable

### 10.4 Non-negotiables

- Expanded states must preserve layout balance
- Ranking copy remains in DOM (no SEO-destructive truncation)
- Keyboard and reduced-motion behavior remain compliant for all expandable systems

## 11) Interaction and motion budget rules

- Max 1 pointer-reactive system per page
- Max 2 heavy scroll-motion modules per page (hero counts as one)
- Minimum 50% motion-light sections per page
- Reduced-motion preferences must be honored globally
- Hover-only behavior cannot be critical on touch
- Essential meaning must be accessible without interaction
- Same-page hash anchors must apply sticky-header offset behavior
- Header navigation may expose only one active nav surface at a time (mega OR drawer)
- Opening mobile drawer must lock body scroll until closed

## 12) Motif and accent governance

- Max 3 accent families per page
- Max 2 ghost systems per page
- Max 1 pointer-reactive motif system per page
- Minimum 50% clean sections per page (no motif overlays)
- Max 1 dominant diagonal motif system per page
- Max 2 side vertical label systems per page
- Honor context locks (example: About-only watermark contexts, sequence ghosts only in sequence/data contexts)
- Truck geometry primitives remain additive and governed by density/opacity limits
- Truck corner density in repeated sibling clusters must remain `<= 0.60`
- Truck watermark opacity must remain `<= 0.12`
- Primitive motif placements should include `data-motif-id` for auditability where applicable

## 13) Accessibility invariants

- Essential content and actions must not depend on animation or interaction state
- Native semantics preferred (`a`, `button`, `details/summary`)
- Keyboard focus must be visible and controls keyboard-operable
- Decorative layers must remain non-blocking for actionable controls

## 14) Conversion and linking invariants

- Value proposition + primary CTA must be visually established within the first two scrolls on desktop and mobile
- Every button/card/link resolves to a live destination (`/`, `#`, `tel:`, `mailto:`)
- CTA actions (phone/email/contact paths) remain directly accessible across device modes and reduced-motion

## 15) Trust signal and proof architecture

- Use decision-matrix proof framing appropriate to context (Pedigree / Boutique / Workhorse)
- Third-party recognition/pedigree logo treatment should be monochrome and visually integrated
- “Logo wall” dumping is non-compliant; proof blocks must be structured and intentional

## 16) IA, anchors, and SEO integrity

- Anchor links must map to real IDs and account for sticky-header offset behavior
- Anchor target IDs must be unique within the page (no duplicate hash targets)
- Route/nav/anchor patterns must remain internally consistent
- App Router, sitemap/robots, and schema standards remain in scope where implemented
- Where local-service scope applies, include `LocalBusiness` + `Service` JSON-LD
- Do not remove or hide required ranking content from DOM for visual simplification

## 17) Binary compliance gate

Before launch/release handoff:

- Apply `docs/PHASE2_MASTER_GATE_CHECKLIST.md` as hard binary PASS/FAIL
- Any failed item blocks launch
- No conditional pass language at gate time

## 18) Verification protocol

For each major design/content change set:

- Verify at minimum at `375px` and `1280px`
- Verify reduced-motion behavior
- Verify keyboard navigation and focus visibility
- Verify touch-safe behavior for interactive modules
- Record evidence in `docs/COMPLIANCE_EXECUTION_PLAN.md` and related gate outputs

---

## Consolidation intent

This file is the single operational reference for consistent aesthetic and behavioral compliance.  
If future decisions diverge, record the amendment in `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` first, then update this file.

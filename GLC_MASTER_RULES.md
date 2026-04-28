# GLC MASTER RULES
## Governance, Process, and Compliance Authority

**Version:** Consolidated April 2026  
**Companion:** [GLC_GLOBAL_DESIGN_SYSTEM.md](./GLC_GLOBAL_DESIGN_SYSTEM.md) — design tokens and structural law

**Purpose:** This document governs *how* sections are built, not *what* they look like. It defines authority, process, the approved technical stack, and the binary compliance gate. The companion document defines the design tokens, layout physics, and visual rules.

> **Scope split:**
> - **Master Rules (this doc):** authority, handshake, audit process, UI kit boundaries, amendments, compliance gate.
> - **Global Design System (companion doc):** color/typography/spacing tokens, section architecture, layout mechanics, band rhythm, motif governance, interaction caps, accessibility, SEO/copy rules, imagery rules, self-audit checklist.

---

## PART 1 — HOW TO USE THIS DOCUMENT

Before any code is written for a new section or component:

1. Read this document and the Global Design System document in full.
2. Run the Socratic Handshake (Section 2.2) — questions before code, every time.
3. Identify every applicable rule ID in both documents.
4. Build to satisfy all applicable rules simultaneously.
5. Self-audit against the checklist in the Global Design System doc before submitting.

If a rule in this document conflicts with any other document in the project, this document wins, unless a dated amendment in Part 8 explicitly overrides it.

---

## PART 2 — GOVERNANCE PROTOCOL

### 2.1 Authority Hierarchy

When any conflict arises between source documents, resolve by this precedence (highest to lowest):

1. **GLC_MASTER_RULES.md** (this document) — governance and amendments
2. **GLC_GLOBAL_DESIGN_SYSTEM.md** — design tokens, structural law, layout mechanics
3. **docs/MOTIF_ACCENT_MANIFEST.json** + **docs/MOTIF_ASSET_PATH_MAPPING.md** — motif inventory data and asset paths (referenced by Global Design System Part 8)
4. **glc-unified-v2.html** — canonical implementation reference; verify token values here
5. Dated audit logs and reports — evidence only, never normative law

Lower-precedence documents never override higher-precedence documents, even if newer in date, unless a dated amendment in this document explicitly elevates them.

Dated audits and reports are implementation evidence. They are not rule text unless promoted by an authority document.

### 2.2 Socratic Handshake (Mandatory — replaces P-IIa)

Cursor is forbidden from writing code on a new request. Before any new section or component is coded, Cursor must ask 3–5 analytical questions to stress-test:

- **Intent:** What problem is this section solving for the visitor?
- **Emotional tone:** What should the visitor feel after scrolling through it?
- **Structural requirement:** Which archetype (see design system doc Part 4.4) is being applied, and why this one over others?
- **Scale:** What is the content volume, and does it require stow/expand patterns?
- **Adjacency:** What sections sit immediately before and after, and what is the rhythm impact?

Skipping the handshake and generating code directly is a protocol violation. If intent is ambiguous and the model proceeds anyway, the output is non-compliant by default.

### 2.3 Aesthetic Friction (Mandatory — replaces P-IIb)

After generating any layout, Cursor must self-audit:

> "Does this layout look like an AI default? Does it use generic centered cards, standard grids, predictable spacing, or template-feel structures?"

If the answer is yes or maybe, the section must be re-engineered using non-standard spacing, unexpected depth layers, broken-grid structures, or one of the archetypes from the design system before submission. "Readable but plain" is not an acceptable output state.

### 2.4 Baseline Lock Authority

The following are locked and may not be changed without an explicit human sign-off recorded in Part 8 (Amendments) of this document:

- Color anchors (see design system doc Part 2.1)
- Typography family stack (see design system doc Part 2.2)
- Spacing token system (see design system doc Part 2.3)

Any modification to a locked anchor without a recorded amendment is an automatic fail, regardless of visual intent or implementation quality.

Token aliases may be added without amendment, provided the underlying anchor values remain unchanged. Wrapper-level color reinterpretations cannot silently redefine anchor intent.

---

## PART 3 — APPROVED TECHNICAL STACK (UI KIT BOUNDARIES)

This part replaces the historical "no prefab UI kits" prohibition. Per the 2026-04-25 governance amendment and subsequent token mapping work, the approved foundation is shadcn/ui composed on Base UI primitives, themed through GLC tokens.

### 3.1 Allowed Stack (In)

| Layer | Tool | Notes |
|-------|------|-------|
| Component kit | **shadcn/ui** | Default for shared UI and section-level controls (buttons, dialogs, sheets, tabs, accordion, dropdowns, tooltips, etc.) when IA fits |
| Primitives | **Base UI** (`@base-ui/react`) | Underlying primitive layer that shadcn components wrap |
| Styling | **Tailwind CSS** | Primary utility layer; must be wired through `app/globals.css` GLC tokens |
| Icons | **lucide-react** (see `components.json` → `iconLibrary`) | Avoid mixing icon families without rationale |

### 3.2 Disallowed Stacks (Out)

| Stack | Status | Notes |
|-------|--------|-------|
| **MUI (Material UI)** | Disallowed | Add only via amendment in Part 8 + update **§3.1 (Allowed)** and **§3.2 (Disallowed)** in this document |
| **Radix UI (direct, standalone)** | Disallowed as a primitive layer | Project uses Base UI as the primitive layer; do not introduce Radix as a parallel system |
| **Chakra UI, Ant Design, Mantine, etc.** | Disallowed | Not standard; require amendment to add |
| **Marketplace block kits / theme packages** | Disallowed as drop-in section replacements | Sections must still satisfy GLC composition, depth, rhythm, and typography rules |

### 3.3 Token Mapping (Required)

shadcn theme variables must be wired through GLC tokens, not declared with default oklch values. The following mappings are operative in `app/globals.css`:

| shadcn variable | Wired to | Notes |
|-----------------|----------|-------|
| `--background` | `var(--canvas)` | GLC canvas baseline |
| `--foreground` | GLC ink tokens | Text contrast anchor |
| `--primary` | GLC accent (`--y` / `--yellow-core`) | Construction Gold accent |
| `--border` | GLC structural grays (`--g100`, `--g200`) | Hairline panel borders |
| `--ring` | GLC accent | Focus indicator |
| `--radius` | `0` | Zero border-radius is mandatory on section internals |
| `--font-sans` | `var(--font-barlow)`, system-ui, sans-serif | Body |
| `--font-heading` | `var(--font-oswald)`, system-ui, sans-serif | Display |

Geist font has been removed from the project. Do not reintroduce.

Authoritative shadcn semantic mappings live in `app/globals.css` (variables wired to GLC tokens). Verify dependency versions in `package.json` and kit paths in `components.json`; cross-check token values against `glc-unified-v2.html`.

### 3.4 Where shadcn Is Used vs Raw Composition

| Use case | Approach |
|----------|----------|
| Forms, dialogs, sheets, dropdowns, tooltips, tabs, accordions | Use shadcn primitives, themed through GLC tokens |
| Full-bleed marketing sections (hero, pedigree, CTA bands, testimonials) | Compose shadcn pieces *inside* existing GLC section shells; do not replace section architecture with a single `Card` stack |
| Decorative motifs, watermarks, blueprint grid, truck geometry | Not replaced by shadcn; continue under motif governance in the design system doc |

A correctly used shadcn component still has to satisfy the section composition rules (three-layer minimum, two-method depth, tone-aware internals, typography triad). The kit gives you scaffolding; it does not give you a finished section.

### 3.5 Expansion Process (Adding a New Allowed Library)

To add a new tool to the approved stack:

1. Draft a written rationale (problem, why shadcn / Base UI / Tailwind cannot cover it).
2. Record an amendment in Part 8 of this document.
3. Update **§3.1 (Allowed)** and **§3.2 (Disallowed)** tables in this document.
4. Update the token mapping section if relevant.
5. Add an audit row to compliance evidence.

### 3.6 Bespoke Primitive Logic Reconciliation

Historical PDF appendices (Cursor Initialization Directive, Master Project Bible) state "no pre-fab" / "raw Tailwind only." Those texts remain in the archive as provenance but are superseded for production work by this Part 3 and the 2026-04-25 / 2026-04-27 amendments. Aesthetic friction (Section 2.3) is the operative protection — kit pieces must be composed into real GLC section architecture, not dropped in as defaults.

---

## PART 4 — PROCESS AND COMPLIANCE EXECUTION

### 4.1 Five-Pass Audit Structure

Every section review uses this pass sequence:

1. **Baseline pass** — token integrity, family compliance, no anchor drift
2. **Omission / delta pass** — every required element present (3 layers, 2 depth methods, type triad, etc.)
3. **Typography / contrast / rhythm pass** — semantic role coverage, contrast at panel level, adjacency safety
4. **Depth / motif / interaction pass** — depth method count, motif caps, motion budget
5. **Reconciliation pass** — every finding mapped to a rule ID and classified Pass / Borderline / Fail / N/A

### 4.2 Wrapper Orchestrator Rule

Wrapper components (page-level orchestrators) are non-substantive for compliance purposes. Audit children for substantive compliance. A wrapper marked compliant when its children fail is itself a fail.

### 4.3 Lab Exception Handling

Layout labs and sandbox stacks (`GLCDnaSandbox`, lab routes, comparison stacks) may break production rhythm and adjacency rules for comparison purposes. Lab exception does not auto-approve any pattern for production. Patterns from labs must apply full production rules before being shipped.

### 4.4 Justification Requirement

Every design choice in a Cursor session must be justifiable by reference to a specific rule ID from this document or the Global Design System document. "It looked good" is not a justification.

### 4.5 Failure Remediation

Existing code that does not meet current rules is classified as a fail and must be remediated rule-by-rule. Visual quality alone does not grant a retroactive pass.

---

## PART 5 — UTILITY AND N/A CLASSIFICATIONS

Some sections are not full content sections and may be classified N/A for specific rule families. Document the N/A classification with the section.

| Module type | N/A-eligible rules | Required rules |
|-------------|---------------------|----------------|
| Marquee / ticker bands | Typography triad, 70/30 weighting, full archetype variety | Rhythm role, accent placement, motion budget |
| Utility separators (thin CTA strips, anchor jump bars) | Triad, 70/30, layered depth (single decorative method acceptable) | Contrast, accessibility, link integrity |
| Grid / metric / system blocks (data fields, spec lists) | 70/30 optical weighting (alternative balancing strategy required) | Tone-aware internals, contrast, type roles, depth |

A claimed N/A must be paired with a documented alternative balancing or compliance strategy. Bare "this is utility" claims do not pass.

---

## PART 6 — CONVERSION, LINK, AND IA INVARIANTS

These are non-negotiable regardless of design intent.

### 6.1 Conversion

- Value proposition and primary CTA must be visually established within the first two scrolls on both desktop and mobile.
- Every button, card, and link must resolve to a live destination: `/`, `#anchor`, `tel:`, or `mailto:`.
- No placeholder `href="#"` on production pages.
- CTA pathways must remain usable across all device modes and `prefers-reduced-motion` states.

### 6.2 Link Accuracy

100% link accuracy is mandatory. Every interactive surface (button, card, link) must have a verified destination. No broken anchors, no dead links, no placeholder slugs in shipped sections.

### 6.3 IA and Anchors

- Anchor links must map to real, existing IDs.
- IDs must be unique within the page — no duplicate hash targets.
- Sticky-header offset behavior must be applied to in-page hash navigation.
- Lane A (production `app/page.tsx`) owns canonical anchors: `#coverage`, `#services`, `#process`, `#testimonials`, `#about`.
- Lane B (sandbox / lab) section IDs must be namespaced (e.g., `#glc-dna-coverage`) to prevent duplicate-ID conflicts.

### 6.4 Schema and SEO Integrity

- `LocalBusiness` and `Service` JSON-LD schema injection is required for local search performance.
- All ranking copy must remain in DOM (see design system doc Part 9).
- Visual simplification cannot delete required semantic or ranking content.
- App Router patterns (Next.js) are used throughout.

### 6.5 Performance

- Zero animation jank.
- 60fps motion target for all interactive systems.
- No animation may introduce scroll lag, frame drops, or layout shift.

---

## PART 7 — BINARY COMPLIANCE GATE

Before any launch, deploy, or release handoff:

- The full self-audit checklist (Global Design System doc, final part) is run as a hard binary PASS / FAIL gate.
- Any failed item blocks launch.
- No conditional pass language is permitted at gate time.
- Unresolved hard-gate items are not granted conditional passes under any interpretation.
- Governance-level gates (zero-creation status, route-level evidence closure, **Part 3** stack documentation in this document) can independently block strict all-green status if unresolved.

Compliance evidence is recorded in dated audit logs and mapped to rule IDs.

---

## PART 8 — ACTIVE AMENDMENTS LOG

Amendments override default rules. Each entry must include date, scope, and the rules affected.

### 2026-04-25: Production UI Kit Approval
The "no prefab UI kits" prohibition (former P-IIc) is reversed for production. shadcn/ui + Base UI + Tailwind is the approved foundation. MUI and other libraries remain disallowed unless amended.

### 2026-04-25: Typography Color-Purpose Enforcement
Three-role minimum (label, display/accent, body) is mandatory at section level. Single-tone heading/body/meta stacks are non-compliant.

### 2026-04-26: Motif and Truck Geometry Governance
Motif governance includes the additive UI geometry kit in `components/motifs/TruckGeometryUiKit.tsx`. Precedence: anti-overuse caps → semantic placement → route-level audit evidence.

### 2026-04-26: Portable Interaction Rules
Interaction caps are mandatory alongside motif caps. Reduced-motion, keyboard access, and non-blocking essential content are mandatory checks per section.

### 2026-04-27: shadcn Token Mapping Operational
shadcn theme variables wired to GLC tokens in `app/globals.css`. `--radius: 0` mandatory. `--font-sans` set to Barlow, `--font-heading` set to Oswald. Geist font removed. Primitive layer is Base UI (`@base-ui/react`), not Radix.

### 2026-04-27: Removal of Phase Gating Rules
The "Homepage Laboratory First" and "DNA Extraction" rules (former P-Ia, P-Ib, P-Ic) are removed. The Global Design System document (companion to this document) is itself the canonical DNA extraction. Phase 2 work may proceed in parallel with Homepage development under the design system rules.

### 2026-04-27: Color Anchor Background Restriction Removed
The rule prohibiting color anchors as large background fills (except in ink field contexts) is removed. Background usage is governed by the dark-band / light-band system in the Global Design System document Part 5.

### 2026-04-27: Section Count Minimum Replaced
The 10-section / 10-archetype requirement (former P-Id, D-7) is replaced by the archetype-coverage requirement in Global Design System Part 4.7. Structural variety is now enforced through archetype diversity and adjacency (Rule D5), not section count.

---

## PART 9 — FORBIDDEN PRACTICES (HARD STOPS)

These practices are immediate fails. No interpretation, no exception.

- Generating code on a new request without running the Socratic Handshake first.
- Hardcoding hex color values inline instead of using CSS custom property tokens.
- Using `--yellow-core` at any value other than `#F2B705`.
- Using `--yellow-dark` at any value other than `#C99804`.
- Replacing Oswald or Barlow with another family without an amendment.
- Introducing MUI, Radix-as-standalone, Chakra, Ant Design, or Mantine without an amendment.
- Adding `border-radius` greater than 0 on section internals.
- Using script, cursive, distressed, or rugged fonts.
- Using white text on light surfaces.
- Using muted-ink text on deep charcoal without verified contrast.
- Cutting or hiding ranking copy from the DOM for visual simplification.
- Generating placeholder text, lorem ipsum, or generic copy when GLC source content is available.
- Assuming a screenshot is being viewed without explicit upload.
- Stacking three consecutive dark section roots with no light separator.
- Stacking two adjacent sections with the same structural archetype.
- Shipping sections without the typography color-purpose triad (three semantic roles).
- Submitting sections that fail the three-layer / two-method-depth minimum.
- Using `href="#"` as a placeholder on production pages.

---

## PART 10 — RULE ID INDEX (MASTER RULES)

| ID | Topic | Rule |
|----|-------|------|
| MR-1 | Authority | Document precedence hierarchy (Section 2.1) |
| MR-2 | Process | Socratic Handshake mandatory before code (Section 2.2) |
| MR-3 | Process | Aesthetic friction self-audit (Section 2.3) |
| MR-4 | Baseline | Token lock requires amendment to change (Section 2.4) |
| MR-5 | Stack | shadcn / Base UI / Tailwind = approved (Section 3.1) |
| MR-6 | Stack | MUI / standalone Radix / Chakra / Ant / Mantine disallowed (Section 3.2) |
| MR-7 | Stack | Token mapping required (Section 3.3) |
| MR-8 | Stack | Section composition rules apply over kit defaults (Section 3.4) |
| MR-9 | Process | Five-pass audit (Section 4.1) |
| MR-10 | Process | Wrapper orchestrators audited via children (Section 4.2) |
| MR-11 | Process | Lab exception does not approve production (Section 4.3) |
| MR-12 | Process | Every choice justifiable by rule ID (Section 4.4) |
| MR-13 | Process | Existing non-compliant code remediated rule-by-rule (Section 4.5) |
| MR-14 | Utility | N/A classifications require alternative strategy (Part 5) |
| MR-15 | Conversion | Two-scroll mandate (Section 6.1) |
| MR-16 | Conversion | 100% link accuracy (Section 6.2) |
| MR-17 | IA | Real anchors, unique IDs, namespaced lab IDs (Section 6.3) |
| MR-18 | SEO | LocalBusiness + Service JSON-LD; ranking copy in DOM (Section 6.4) |
| MR-19 | Performance | Zero jank, 60fps motion (Section 6.5) |
| MR-20 | Gate | Binary launch gate, no conditional passes (Part 7) |

Design rules with their own IDs (color, typography, layer, depth, archetype, motif, interaction, etc.) live in the Global Design System document.

---

*This document governs how Cursor builds. The Global Design System document governs what it builds. Both must be open in any Cursor session for GLC work.*

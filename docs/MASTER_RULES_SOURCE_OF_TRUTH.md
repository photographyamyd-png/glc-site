# Master Rules Source of Truth

This is the canonical rule authority for this repository.

## Document precedence

1. `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` (this file; canonical governance and amendments)
2. `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` (single consolidated implementation reference)
3. `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` (full normative directive text and rule indices)
4. `docs/BAND_RHYTHM_AND_CONTRAST.md` (specialized rhythm/contrast implementation supplement)
5. `docs/MOTIF_ACCENT_RULES.md` + `docs/MOTIF_ACCENT_MANIFEST.json` (motif/accent family governance and anti-overuse constraints)
6. `docs/UI_INTERACTION_RULES.md` (portable interaction behavior constraints and placement policy)
7. `docs/PHASE2_MASTER_GATE_CHECKLIST.md` + `docs/COMPLIANCE_EXECUTION_PLAN.md` (process and gate workflow; non-normative)
8. Dated audit logs in `docs/*AUDIT*.md`, `docs/*REPORT*.md`, `docs/SECTION_RITUAL_LEDGER.md` (evidence only)

If two documents conflict, the higher-precedence document wins unless a newer dated amendment is recorded below.

## Canonical rule sources

- Consolidated implementation law for day-to-day build decisions is defined in:
  - `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md`
- Core directives and indexed rules (`P-*`, `D-*`, `B-*`) are defined in:
  - `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`
- Inter-section band rhythm, candidate guardrails, and detailed contrast heuristics are defined in:
  - `docs/BAND_RHYTHM_AND_CONTRAST.md`
- Workspace-level execution constraints and handshake behavior are defined in:
  - `AGENTS.md`
- Motif/accent family inventory, page limits, and audit requirements are defined in:
  - `docs/MOTIF_ACCENT_RULES.md`
  - `docs/MOTIF_ACCENT_MANIFEST.json`
  - `docs/MOTIF_ACCENT_AUDIT_CHECKLIST.md`
- Interaction behavior constraints and portable UI interaction limits are defined in:
  - `docs/UI_INTERACTION_RULES.md`
- Approved UI kit scope (shadcn/Radix/Tailwind boundaries) is defined in:
  - `docs/UI_KIT_BOUNDARIES.md`
- Launch-gate execution checklist is defined in:
  - `docs/PHASE2_MASTER_GATE_CHECKLIST.md`

## Active baseline lock

- Keep existing GLC baseline tokens until explicit sign-off:
  - color system (`--y`, `--brand-canvas`, ink scales, band classes),
  - typography stack (Oswald / Barlow / Barlow Condensed),
  - spacing tokens (`--s*`, `--dna-space-*`).
- Existing `#fafafa` baseline remains approved unless explicitly changed.

## Active amendments log

### 2026-04-25: Production foundation policy shift

- Prior lab baseline text prohibited UI kits under `P-IIc` interpretation.
- Stakeholder-approved direction for production phase: **UI kit can replace baseline for production foundation**.
- Scope control:
  - historical/lab audits remain valid under original constraints,
  - production implementation may use approved UI kit conventions,
  - any final production standards update must document exact allowed/disallowed kit boundaries.

### 2026-04-27: Directive body aligned to approved kit (operative text)

- **Section II / P-IIc** in [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md) now states the **operative** rule: **shadcn/ui + Radix + Tailwind** as the default production foundation; **MUI** remains non-approved unless added later.
- Verbatim PDF extracts in Appendix A/B remain **historic provenance**; reconciliation is explicit in directive **§Conflicts / sequencing**.
- [MASTER_DESIGN_BUILD_COMPLIANCE.md](./MASTER_DESIGN_BUILD_COMPLIANCE.md) **§4.2** records the same foundation for day-to-day implementation law.
- **Kit boundary scaffold:** [UI_KIT_BOUNDARIES.md](./UI_KIT_BOUNDARIES.md) — allowed/disallowed stack, token mapping, accessibility, and expansion process (fill placeholders as the repo adopts shadcn).

### 2026-04-25: Typography color-purpose enforcement

- `P-VIIIe` is mandatory for section-level design reviews:
  - minimum three semantic typography roles (label, display/accent, body),
  - optional fourth role (stats/chips/meta/CTA),
  - single-tone heading/body/meta stacks are non-compliant.

### 2026-04-26: Combined motif + Truck Geometry governance

- Motif governance now includes an additive UI geometry kit in `components/motifs/TruckGeometryUiKit.tsx`.
- Canonical section motifs remain governed by:
  - `public/images/Accents-and-Motifs/*` (existing canonical),
  - `public/motifs/*` (additive injected motif set),
  - component-level motif primitives in `components/motifs/*`.
- Precedence for motif decisions:
  1. anti-overuse limits and allowed contexts (`MOTIF_ACCENT_MANIFEST.json`)
  2. semantic placement and rationale (`MOTIF_ACCENT_RULES.md`)
  3. route-level evidence (`MOTIF_ACCENT_AUDIT_CHECKLIST.md` + dated audits)

### 2026-04-26: Portable interaction rules adoption

- Interaction systems are now governed by `docs/UI_INTERACTION_RULES.md`.
- Interaction caps are treated as mandatory alongside motif caps:
  - max 1 pointer-reactive system/page
  - max 2 heavy scroll-motion modules/page
  - minimum 50% motion-light sections/page
- Reduced-motion, keyboard access, and non-blocking essential-content behavior are mandatory checks.

### 2026-04-26: Consolidated master compliance publication

- New single implementation reference published at:
  - `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md`
- Purpose:
  - consolidate transferable PASS standards across design, copy architecture, motifs, interaction, accessibility, IA/SEO, and launch gating
  - explicitly exclude sandbox-only scaffolding directives as non-normative production rules
  - retain baseline lock and owner-file precedence while reducing audit-document drift

## How to use this file

When implementing or reviewing:

1. Read this file first to identify precedence and amendments.
2. Use `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` as the primary implementation reference.
3. Use `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` for exact rule IDs and definitions.
4. Use `docs/BAND_RHYTHM_AND_CONTRAST.md` for rhythm/contrast implementation details.
5. Record pass/fail evidence in `docs/COMPLIANCE_EXECUTION_PLAN.md` and dated audit logs.

## Non-goals of this file

- This file does not duplicate full directive appendices.
- This file does not contain full audit evidence logs.
- This file does not authorize file deletion by itself.

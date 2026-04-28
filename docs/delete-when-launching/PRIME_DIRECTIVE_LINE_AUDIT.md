# Prime Directive line audit (execution 2026-04-23)

**Canonical source:** [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md) — includes **Exhaustive directive (P-IDs)**, PDF appendices (D-/B-), and **§GLC implementation baseline (locked)**.

**Canvas note:** Exhaustive **P-IIIa** names High-Key White `#FFFFFF`. The **locked GLC baseline** keeps **`#fafafa`** (`--brand-canvas`) until explicit stakeholder sign-off; audits should record **Pass with baseline exception** for P-IIIa when verifying code, not force a white swap.

**New audit dimensions (additive):** **P-IVa** (≥2 depth methods per section), **P-VIb** (SEO stowing for long copy), **P-Id** (≥10 homepage sections vs current seven).

## Stakeholder reconciliation: color fields and band rhythm

**Bible / Directive text (D-3a, D-3b, B-IVa, B-Va):** light-dominant canvas, 5% color for CTAs/pops, no *arbitrary* full-bleed **brand marketing** washes.

**Ground Level execution:** vertical **dark ↔ light** bands use **structural ink** (`--ink-deep`, near-black) and **canvas / white** for **section division and contrast** (Document 2 **IV** “dark punctuation” read as *field-scale* **punctuation**). **Saturated accent remains `--y` only** (B-Vb). If a future band uses full **forest** fill, document an **explicit human exception** in this file and in [COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md).

**Reference images:** [docs/design-references/](./design-references/) — structure and contrast (dark rail, light grid); **GLC tokens** replace foreign palettes.

## Dimension key

| Dimension | Meaning |
|-----------|---------|
| ColorContrast | Canvas, ink, accent, field alternation |
| Division | Section breaks, interlock, grid breaks |
| Layers | Grain, blur, z-index, machined edges, watermarks |
| Interaction | Hover/focus, motion, mobile alter-ego |
| Type | Scale, pairing, Three-Act pattern |
| Trust | Pedigree, proof |
| Motion | Orchestrated hero, scroll reveal, reduced motion |
| Other | SEO, routes, etc. |

## Unified index — snapshot (not every line expanded; full pass: copy each block from the rules doc and add Evidence)

| ID | Dimension | Status (this build) | Evidence |
|----|-----------|---------------------|----------|
| D-3a, B-IVa | ColorContrast | Pass | Alternating `band-dark` / `band-light` in `globals.css` + section classes |
| D-3b, B-Va, B-Vb | ColorContrast | Pass (with reconciliation) | Dark fields = ink, not `--y` fields; yellow = CTA + Act 3 + focus; nav hover `var(--y)` |
| D-3c, B-XIa–b | Layers | Pass (iterative) | Hero: image + gradient + radial + glass island + watermark; dark bands: gradient overlays; service cards: `before` inner glow |
| B-XIc | Layers | Pass (iterative) | `panel-machined`, `panel-machined-dark`, border / inset treatments |
| B-Xa, B-Xb | Layers / Trust | Pass | Watermarks + `StructuralFragments` / accent rules |
| D-4b, B-VIIIc, B-IXa | Type | Pending | Measure 5:1 and 1:3 after Three-Act clamp in browser |
| B-VIIIb | Type | Pending | No serif body; exception or add pull-quote serif |
| D-7 | Other | Outstanding | Ten archetypes vs seven bands — prior residual |
| P-Id | Other | Gap | Exhaustive ≥10 sections vs seven `app/page.tsx` bands |
| P-IVa | Layers | Pending | Checklist: ≥2 depth methods per `components/ground-level/*` section |
| P-VIb | Other | Pending | Long-copy interactive stowing not site-wide |
| P-IIIa | ColorContrast | Pass (baseline) | `#fafafa` canvas per lock; `#FFFFFF` deferred until sign-off |

*Expand this table by copying **every row** from `PROJECT_PRIME_DIRECTIVE_RULES.md` §Exhaustive rule index + §Legacy unified rule index when you need full line coverage.*

## Three-Act Headline (GLC)

- Component: [`components/ui/ThreeActHeadline.tsx`](../components/ui/ThreeActHeadline.tsx)
- Spec: weights 200 / 600 / 700, opacities 0.22 / 0.92 / full on line 3 with `color: var(--y)`; `clamp(58px, 8vw, 118px)`; `line-height: 0.90`; `letter-spacing: -0.02em`
- Hero copy: **Ready to / Break / Ground.**

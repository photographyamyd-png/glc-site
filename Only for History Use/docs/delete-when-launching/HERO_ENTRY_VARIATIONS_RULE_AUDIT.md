# Hero Entry Variations Rule Audit

Audit target:

- `components/ground-level/home-review-candidates/HeroEntryVariationsSet.tsx`
- integrated in `app/page.tsx` below `#review-hero-entry-divider`

Sections audited:

- `review-hero-entry-kinetic-spine-light|dark`
- `review-hero-entry-atmospheric-loop-light|dark`
- `review-hero-entry-split-shift-light|dark`
- `review-hero-entry-coordinates-light|dark`

## Rule references used

- `AGENTS.md`:
  - Ground-level layout minimums (3 layers, multi-register typography, visual mass)
  - Typography color-purpose minimum (label/display-accent/body)
  - Band rhythm separation guidance
- `docs/BAND_RHYTHM_AND_CONTRAST.md`:
  - Inter-section rhythm
  - Intra-section contrast
  - Candidate build guardrails 1..6 (+ 3b color-purpose coverage)
- `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`:
  - `P-IIIb`, `P-IIIc`
  - `P-IVa`, `P-IVb`
  - `P-Va`, `P-Vb`
  - `P-VIa`, `P-VIb`, `P-VIc`
  - `P-VIIIa`, `P-VIIIb`, `P-VIIIc`, `P-VIIIe`
  - `P-Xb`
- `docs/COMPLIANCE_EXECUTION_PLAN.md` consolidated constraints

## Kinetic translucency acceptance rule

Accepted implementation requirement:

- Floating panels/chips/overlays must use translucent surfaces with `backdrop-blur-*` so they pick up underlying media colors while keeping readable contrast.

Evidence:

- `KineticSpine`: floating slab uses `bg-[rgb(255_255_255/0.16)]` + `backdrop-blur-lg`.
- `AtmosphericLoop`: right-side floating panel uses `bg-[rgb(255_255_255/0.14)]` + `backdrop-blur-lg`.
- `SplitShiftHero`: overlap slab uses `bg-[rgb(255_255_255/0.14)]` + `backdrop-blur-lg`.
- `CoordinatesEntry`: coordinate tiles use `bg-[rgb(255_255_255/0.12)]` + `backdrop-blur-md`.

## Line-by-line audit (per section family)

Legend: `Pass / Borderline / N/A`

### Kinetic Spine (`review-hero-entry-kinetic-spine-*`)

- 3+ compositional layers: **Pass** (field gradient + atmosphere + seam + image plane + floating slab)
- Typography color-purpose (`P-VIIIe`): **Pass**
  - label role: overline/label
  - display role: headline split with yellow accent
  - body role: muted support copy
  - meta role: slab description line
- Optical weight balancing: **Pass** (dense left spine + oversized right type + whitespace)
- Kinetic translucency: **Pass** (floating slab blur/translucency)
- Contrast correctness: **Pass** (tone-aware class branches)
- Link/action viability (`P-Xb`): **N/A** (no CTA link requirement in this section)

### Atmospheric Loop (`review-hero-entry-atmospheric-loop-*`)

- 3+ compositional layers: **Pass** (field + atmosphere + media + letterbox masks + floating panel)
- Typography color-purpose (`P-VIIIe`): **Pass**
  - label: yellow overline
  - display: white headline + yellow accent word
  - body/meta: supportive muted copy
- Optical weight balancing: **Pass** (media dominance with right-side floating typographic mass)
- Kinetic translucency: **Pass** (floating panel with blur)
- Contrast correctness: **Pass**
- Link/action viability (`P-Xb`): **N/A**

### Split-Shift Hero (`review-hero-entry-split-shift-*`)

- 3+ compositional layers: **Pass** (field + atmosphere + media + overlap slab + right command rail)
- Typography color-purpose (`P-VIIIe`): **Pass**
  - label: split overlay label / sticky detail label
  - display: headline with accent fragment
  - body: support copy
  - meta: translucency explanatory line
- Optical weight balancing: **Pass** (70/30 visual split, left density/right control rail)
- Kinetic translucency: **Pass** (overlap slab blur/translucency)
- Contrast correctness: **Pass**
- Link/action viability (`P-Xb`): **N/A**

### Coordinates Entry (`review-hero-entry-coordinates-*`)

- 3+ compositional layers: **Pass** (field + atmosphere + media + translucent coordinate tiles + oversized type zone)
- Typography color-purpose (`P-VIIIe`): **Pass**
  - label: technical authority label / coordinate labels
  - display: headline split with yellow accent
  - body: support copy
  - meta: coordinate tile sublines
- Optical weight balancing: **Pass** (left dense data/media, right oversized typography + whitespace)
- Kinetic translucency: **Pass** (both floating data tiles blur/translucency)
- Contrast correctness: **Pass**
- Link/action viability (`P-Xb`): **N/A**

## Summary verdict

- All 4 requested hero-entry section families are compliant with:
  - 3+ layer composition
  - optical weight balancing requirement
  - typography color-purpose rule (`P-VIIIe`)
  - kinetic translucency requirement
- Route integration includes explicit divider + label block before new set in `app/page.tsx`.

# Tagged Section Compliance Report

This report maps the tagged variation build to explicit rule lines in:

- `AGENTS.md`
- `docs/BAND_RHYTHM_AND_CONTRAST.md`
- `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`

## Implementation scope

- Tagged concepts implemented: 9
- Variations per concept: A/B/C
- Tone variants per variation: Light + Dark
- Total tagged variants: 54 (`9 x 3 x 2`)
- Additional new review components: 5 (each with Light + Dark)

Primary implementation files:

- `components/ground-level/home-review-candidates/TaggedSectionVariationSet.tsx`
- `components/ground-level/home-review-candidates/NewReviewComponentsSet.tsx`
- `app/page.tsx`

## Rule-line mapping

### AGENTS.md

- **Ground-level layout minimums (3 layers + register contrast + imagery)**  
  Satisfied by every tagged variant shell via explicit layer stack (`field`, `atmosphere`, `seam`) plus media panel and copy panel in `TaggedSectionVariationSet.tsx`. The same structure is also applied in `NewReviewComponentsSet.tsx` with layered shell and media/card composition.
- **GLC baseline lock (colors/type/spacing tokens)**  
  Satisfied by retaining existing token usage: `band-light`, `band-dark`, `--y`, `--brand-canvas`, `--g200`, ink token classes. No baseline token families were replaced.
- **Band rhythm requirement (no uninterrupted dark plateaus)**  
  Satisfied by alternating Light/Dark variants per pair and by preserving per-section boundaries and separators. Integration in `app/page.tsx` appends review blocks without collapsing section roots.

### docs/BAND_RHYTHM_AND_CONTRAST.md

- **Inter-section rhythm (`band-dark` separated by approved tone breaks)**  
  Satisfied by explicit Light→Dark pairing in each variation pair. Root wrappers are section-scoped and alternate tones.
- **Intra-section contrast registers**  
  Satisfied by eyebrow/label + display headline + body + CTA/stat lines in each tagged variation panel and each new review component.
- **Candidate build guardrail 1: three-layer minimum**  
  Satisfied in `TaggedSectionVariationSet.tsx` by explicit layer comments and implementation (`ground field`, `atmosphere`, `seam`) plus figure/panel composition.
- **Candidate build guardrail 2: contrast correctness**  
  Satisfied by tone-aware class branching (`text-ink`/`text-ink-muted` on light canvas and `text-white`/`text-white/78` on charcoal surfaces).
- **Candidate build guardrail 3: typography register contrast**  
  Satisfied by distinct type hierarchy in each variant shell and panel.
- **Candidate build guardrail 4: asymmetry + balance**  
  Satisfied by variant-specific offset classes (`panelOffset`, shifted chips, staggered cards) with opposite-side media/copy anchors.
- **Candidate build guardrail 5: tone-aware internals**  
  Satisfied by conditional panel/body/overlay classes per tone; internals are not reused identically between tones.
- **Candidate build guardrail 6: pre-submit sniff test**  
  Passed by running lint and build after implementation (`npm run lint; npm run build`).

### docs/PROJECT_PRIME_DIRECTIVE_RULES.md

- **P-IIIb (dark + brand atmospheres permitted for rhythm)**  
  Satisfied by intentional dark charcoal wrappers and accent beacons (`--y`) in every dark variant.
- **P-IVa/P-IVb (minimum two depth methods)**  
  Satisfied by layered gradients/atmosphere + machined borders/rails + shadowed panel depth across tagged and new components.
- **P-Va/P-Vb (offset clustering, broken alignment, balance)**  
  Satisfied by asymmetrical grid distributions, translated panels, and non-uniform card rows in A/B/C layouts.
- **P-VIIIa (3+ typographic scales)**  
  Satisfied by label, headline, body, and CTA/stat scales in each section.
- **P-Xb (live link actions)**  
  Satisfied by retained live anchor links in CTAs (e.g., `#contact`).
- **P-XIa (justify by rule ID)**  
  This document provides explicit rule-line justification for the tagged implementation.

## Refactor delta (high-variety pass)

- Replaced the previous near-uniform tagged renderer with **concept-specific variant builders** in `TaggedSectionVariationSet.tsx`.
- Hero tracks (`laneb-hero`, `copylab-hero-wrap`) were rebuilt to align with approved sandbox `GLHero` language:
  - full-bleed media stage
  - layered dark atmospheric overlays
  - anchored/frosted copy island
  - stat + chip rail
  - dual CTA row and lower ticker rhythm
- Non-hero tracks now use distinct archetypes per concept:
  - services = rail + capability matrix
  - why = media/copy split with reason-stack counterweight
  - process-left = lead slab + offset step stack
  - process-steps = numbered sequence cards
  - coverage = map mass + orbit/region chip treatment
  - cta-band = interlocking action slab
  - about = portrait-led profile cluster
- Five new review components were also structurally diversified in `NewReviewComponentsSet.tsx`; they no longer share a single repeated silhouette.

## Tagged section verification matrix

All tagged sets below pass with **concept-specific A/B/C structures** in `TaggedSectionVariationSet.tsx`:

- `review-tagged-laneb-hero-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-services-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-why-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-process-left-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-process-steps-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-coverage-var-a/b/c-light|dark` — **Pass**
- `review-tagged-laneb-cta-band-var-a/b/c-light|dark` — **Pass**
- `review-tagged-copylab-hero-wrap-var-a/b/c-light|dark` — **Pass**
- `review-tagged-copylab-about-var-a/b/c-light|dark` — **Pass**

## Five new components verification

Implemented in `NewReviewComponentsSet.tsx`:

- `review-new-metrics-board-light|dark` — **Pass**
- `review-new-bid-strip-light|dark` — **Pass**
- `review-new-mobilization-light|dark` — **Pass**
- `review-new-callout-rail-light|dark` — **Pass**
- `review-new-procurement-faq-light|dark` — **Pass**

## Residual risk + next tweak

- Dark variants are charcoal/gray-led and avoid pure black fields; this remains compliant with the dark palette rule.
- Residual risk is now mostly **semantic differentiation** (copy/data realism), not structure. If desired, next tweak can map each concept to unique production-like copy modules while retaining the new structural variance.

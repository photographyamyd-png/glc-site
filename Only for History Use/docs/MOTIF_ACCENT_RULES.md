# Motif Accent Rules

Canonical motif/accent governance derived from `TRANSFER_SPEC_READY_TO_ATTACH.md`.

## Purpose

Define reusable motif families, semantic usage zones, and anti-overuse constraints for this repository.

Interaction behavior and motion-governance details are defined in `docs/UI_INTERACTION_RULES.md`.  
When motif and interaction policies overlap, apply the stricter limit.

## Canonical asset path policy

- Canonical path in this repository: `public/images/Accents-and-Motifs/...`
- Additive transfer-spec path: `public/motifs/...` (combined mode; does not replace canonical)
- Legacy transfer-spec compatibility alias: `public/images/motifs/...` (documented in `docs/MOTIF_ASSET_PATH_MAPPING.md`)

## Combined injection policy

1. Existing motif system remains active and canonical for current Ground Level sections.
2. New GLC motif kit is additive and includes:
   - file assets under `public/motifs`
   - component API under `components/motifs/GlcMotifs.tsx`
3. Use component motifs when a section needs inline layering, reusable React composition, or animation encapsulation.
4. Use `public/motifs` assets for CSS `background-image` patterns and lightweight decorative overlays.
5. Do not delete or remap existing `public/images/Accents-and-Motifs` assets during combined mode.

## UI geometry kit policy (Truck Geometry additive layer)

The Truck Geometry UI kit is now a governed additive layer under:

- `components/motifs/TruckGeometryUiKit.tsx`

It provides:

- `LogoMark`, `AngleCorner`, `AngleAccent` (primitive motifs)
- `TruckCard`, `TruckButton`, `TruckSection` (structural wrappers)
- `TruckNavbar`, `TruckHero`, `TruckPricingCard`, `TruckGeometryDemo` (composed examples)

### Why this layer exists

1. Convert motif geometry into reusable UI primitives (not just decorative backgrounds).
2. Keep interactions and visual language consistent across product sections.
3. Preserve token lock while allowing production-grade reusable components.

### Placement and usage rules

1. `AngleCorner`:
   - allowed: card corners, panel corners, hero edge overlays
   - not allowed: repeated adjacent corners on every sibling card row
2. `AngleAccent`:
   - allowed: CTA/button edge emphasis, directional micro-accent
   - not allowed: full-width replacement for section divider motifs
3. `LogoMark` watermark:
   - allowed: low-opacity section overlays (`<= 0.12`)
   - not allowed: replacing official logo lockups in nav/footer branding
4. `TruckSection` and `TruckCard`:
   - must remain zero-radius containers
   - must use locked tokens (`--yellow-core`, `--yellow-dark`, `--charcoal-*`)
5. Motion use (Framer Motion):
   - keep to functional transitions (`hover/tap/entry`)
   - avoid introducing extra pointer-reactive motif systems beyond page limit

### Best-option decision matrix

- For reusable UI building blocks: use Truck Geometry components first.
- For decorative section fields/backgrounds: use file-based `/motifs/*`.
- For existing Ground Level section motifs already audited: keep canonical `/images/Accents-and-Motifs/*`.
- For new production sections needing both structure + motif:
  - use Truck UI primitives for composition
  - add one governed motif family overlay only when needed by hierarchy/contrast

## Motif/accent family inventory

### Hero family

- `hero-v2__diag-stripe`: structural diagonal accent for directional energy
- `hero-v2__ghost-mark`, `hero-v2__ghost-mark-img`: hero brand ghost watermark
- `hero-v2__vert-label`: contextual vertical side label

### Featured family

- `glc-wm-03-horizontal-stack.svg`: watermark motif asset
- `motifOffset` pointer drift behavior in featured accordion

### About family

- `ab3__wm`: ghost watermark text (`about.props.watermarkText`, default `GLC`)

### Why family

- `why3__ghost-num`: oversized sequence numerals (`why.props.reasons[].num`)

### Process family

- `proc3__heading-accent`: heading emphasis span
- `proc3__count-mark`: large ghost step count
- `proc3__thread`: vertical timeline connector

### CTA family

- `cta3__diag`: diagonal structural accent
- `cta3__eyebrow-line`: micro eyebrow accent
- `cta3__divider`: action cluster divider
- `cta3__bottom-bar`: end-band brand bar

### Stats family

- `st3__side-label`: vertical side annotation for metrics sections

### Truck geometry family

- `truck-angle-corner`: corner geometry marker for cards/panels
- `truck-angle-accent`: CTA edge geometry marker
- `truck-logo-watermark`: low-opacity section watermark

## Semantic usage zones

- Hero family: homepage hero and optional flagship service hero.
- Featured family: one premium interactive/showcase module per page.
- About watermark: about/brand-story contexts only.
- Why/Process numeric accents: sequence logic and hierarchy contexts only.
- CTA family: conversion-priority zones near page end.
- Stats side label: data/metrics-led sections only.
- Truck geometry motifs: reusable product UI components and selected conversion/hero blocks.

## Hard anti-overuse rules

1. Max accent families per page: `3`
2. Max ghost systems per page: `2`
3. Max pointer-reactive motif systems per page: `1`
4. Minimum clean sections per page: `50%` (no motif overlays)
5. Only one dominant diagonal accent system per page
6. Numeric ghosts only in sequence/data contexts (Why, Process, Stats)
7. `ab3__wm` only in About/Brand contexts
8. Side vertical labels max `2` per page
9. Avoid adjacent sections with identical oversized ghost motif styles
10. Do not treat inspector pixel coordinates as portable spec; use classes/tokens only
11. Truck geometry corner system should not be applied to every sibling card in a repeated list (max 60% of siblings in one row/cluster)
12. Truck logo watermark opacity must remain subtle (`<= 0.12`) unless explicitly approved
13. Total page interaction load must also satisfy `UI_INTERACTION_RULES.md`:
    - max 2 heavy scroll-motion modules/page
    - min 50% motion-light sections/page

## Implementation requirements

1. Use class-based and token-based placement only.
2. Map each family to allowed template zones.
3. Run page-level accent audit before release:
   - families used and count
   - ghost systems count
   - pointer-reactive motif count
   - clean-section ratio
   - context misuse
   - adjacency duplication risk
4. Flag missing required assets immediately.
5. When using Truck geometry components, include `data-motif-id` on primitive placements.

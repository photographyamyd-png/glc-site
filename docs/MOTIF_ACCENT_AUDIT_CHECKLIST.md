# Motif Accent Audit Checklist

Use this checklist per page/template before promotion.

## Page metadata

- Page/Route:
- Reviewer:
- Date:

## Family usage

- Families used (hero/featured/about/why/process/cta/stats):
- Family count:
- Pass `max <= 3`:

## Ghost systems

- Ghost systems used:
- Ghost count:
- Pass `max <= 2`:

## Pointer-reactive motifs

- Pointer-reactive systems used:
- Count:
- Pass `max <= 1`:

## Clean section ratio

- Total sections:
- Sections with no motif overlays:
- Ratio:
- Pass `ratio >= 0.50`:

## Contextual correctness

- Numeric ghost motifs used only in Why/Process/Stats:
- `ab3__wm` used only in About/Brand-story:
- Side vertical labels count `<= 2`:
- Dominant diagonal accent systems `<= 1`:
- Adjacent duplicate oversized ghost motif risk:
- Truck corner density in repeated card clusters `<= 0.60`:
- Truck logo watermark opacity `<= 0.12`:

## Asset checks

- Required featured watermark present:
  - `/images/Accents-and-Motifs/watermarks/glc-wm-03-horizontal-stack.svg`
- Additive motif kit assets present:
  - `/motifs/*.svg` (26-file set)
- Hero ghost logo present:
  - `/images/Logos/ground-level-logo.png` (current local equivalent)
- Missing assets:

## UI geometry kit checks

- `components/motifs/TruckGeometryUiKit.tsx` exists:
- Primitive motifs include `data-motif-id` where rendered:
- Button/Card/Section containers preserve zero-radius policy:
- Motion does not introduce extra pointer-reactive motif systems above page cap:

## Findings

- Misuse findings:
- Corrective actions required:
- Final verdict: Pass / Fail / Conditional

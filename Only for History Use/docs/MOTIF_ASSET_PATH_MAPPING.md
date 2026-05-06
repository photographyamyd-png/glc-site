# Motif Asset Path Mapping

This repository keeps motif assets under:

- Canonical: `/images/Accents-and-Motifs/...`
- Additive motif kit: `/motifs/...`

The transfer spec references:

- Alias: `/images/motifs/...`

## Mapping table

| Transfer spec path | Current repo canonical path | Notes |
|---|---|---|
| `/images/motifs/watermarks/glc-wm-03-horizontal-stack.svg` | `/images/Accents-and-Motifs/watermarks/glc-wm-03-horizontal-stack.svg` | Use canonical path in this repo |
| `glc-accent-shards-01.svg` (new shard accent motif) | `/images/Accents-and-Motifs/watermarks/glc-accent-shards-01.svg` | Added for featured/accent motif library |
| `/images/glc-logo.png` (expected in spec) | `/images/Logos/ground-level-logo.png` | Local equivalent currently used for hero ghost mark |
| `/brand/claude-logic-mark.svg` (legacy in prior code) | `/images/Logos/claude-logic-mark.svg` | Normalized logo location |

## Implementation policy

1. New code in this repo must use canonical paths only.
2. Combined-mode imports can use `/motifs/*` for the injected kit while preserving existing canonical asset usage.
3. Transfer/export docs can include alias paths for compatibility with other repos.
4. If a future import expects `/images/motifs/*`, add explicit compatibility mapping or migration step; do not silently duplicate assets.

## Injected kit inventory path

- New SVG motif files from the injection guide live in: `public/motifs/*.svg` (26 files)
- React motif component API lives in: `components/motifs/GlcMotifs.tsx`
- Truck Geometry additive UI kit lives in: `components/motifs/TruckGeometryUiKit.tsx`
- Truck Geometry uses inline SVG primitives (`LogoMark`, `AngleCorner`, `AngleAccent`) and does not require extra file assets.

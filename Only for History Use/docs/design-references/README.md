# Design references — structure only

Images in this folder are **layout and composition references**. They are **not** approved for brand, palette, photography subjects, or literal UI chrome.

**Before editing** [`components/ground-level/`](../../components/ground-level/) or the header/hero boundary, read the **sidecar `.md`** for any reference you are applying. This directory contains **structure-only blueprints** and is subordinate to [`GLC_MASTER_RULES.md`](../../GLC_MASTER_RULES.md) and [`GLC_GLOBAL_DESIGN_SYSTEM.md`](../../GLC_GLOBAL_DESIGN_SYSTEM.md). If a structure suggestion here conflicts with canonical GLC rules, canonical rules win.

| File | One-line intent | Primary target component(s) |
|------|-----------------|----------------------------|
| `01-layered-header-floating-nav-hero-island-services-grid.*` | Layered header + nav overlap seam; hero readability island; buffer strip; stable 3-col service rhythm | `SiteHeader`, `GLHero`, `GLCtaBand`, `GLServices` |
| `02-hero-asymmetric-split-layered-visual-cluster.*` | Asymmetric text/media split; stacked panels + satellite overlap; band interlock into next section | `GLHero`, `GLWhoWeServe`, `GLDifference`, `GLContact` |
| `03-interlocking-rail-staggered-cards-zigzag.*` | Ink rail with cards bleeding into next section; zig-zag features; focal proof card | `GLCtaBand`, `GLServices`, `GLDifference` |
| `04-hero-fullbleed-offset-copy-services-foundation-grid.*` | Full-bleed hero with offset copy + dual CTAs; dense capability grid as “foundation” | `GLHero`, `GLServices` |
| `05-overlap-card-geometric-accents-orbitals-tabs.*` | Overlapping panel on canvas; tabs-in-block; clipped media; scale-break social row; gutter accent | `GLWhoWeServe`, `GLServices`, `GLDifference`, `GLContact` |

## Usage in Cursor

- `@docs/design-references/README.md` — quick index.
- `@docs/design-references/0N-*.md` — durable structural bullets for implementation.
- Do **not** `@` the PNG for brand extraction — use PNG for human context; **logic lives in the `.md`**.

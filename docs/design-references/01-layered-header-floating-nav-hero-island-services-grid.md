# Structural reference — 01 (layout logic only)

**Paired asset:** `01-layered-header-floating-nav-hero-island-services-grid.png`

## Non-negotiables (do not copy from the reference)

- **Do not** reproduce subject matter, photography, industry tropes, brand marks, literal colors, or typography styles from the image.
- **Governed by:** [PROJECT_PRIME_DIRECTIVE_RULES.md](../PROJECT_PRIME_DIRECTIVE_RULES.md) — `#FAFAFA` canvas, structural ink, **~5%** brand color for CTAs/pops only (no full-bleed brand fields), geometric sans + premium serif, bespoke Tailwind primitives.

## Structural patterns to borrow

- **Stacked header rhythm:** Thin utility band → primary header row → **floating** nav bar that **overlaps** the seam between header and hero (higher z-index, deliberate overlap). *Map to:* [`SiteHeader`](../../components/ui/SiteHeader.tsx) behavior vs hero edge — not literal WordPress chrome.
- **Asymmetric nav anchor:** One primary nav item reads as a **vertical tab** (accent block extends above/below the bar) to create a single optical anchor; remaining items stay calmer.
- **Hero “island”:** Centered (or anchored) **frosted / ink-backed** content cluster over full-bleed media so type stays readable without flattening the whole hero into a solid slab.
- **Sub-hero buffer band:** Narrow full-width strip between hero and dense grid — **lowers cognitive jump** from emotional to informational (copy-only or single line).
- **Services / capabilities grid:** Rigid **3-column** (or responsive 1→2→3) rhythm: icon + title row, then description; equal gutters for stability after an airy hero.

## Target homepage sections

- `GLHero` — island overlay, optional buffer strip below hero (or absorbed into `GLCtaBand`).
- `GLCtaBand` — buffer strip logic if not duplicated under hero.
- `GLServices` — column rhythm, icon+title stack; avoid generic card soup via **offset** or **one** broken column per Prime Directive.
- `SiteHeader` — overlap / z-index at hero boundary; optional single “tab” accent (structural pop only).

## Compliance cross-reference (intent)

- B-VIc (interlock / tethered edge between regions), B-VIb (offset clustering), B-XIb (glass / blur island), D-2a (vertical spine read in hero), D-3c (depth via blur layers).

# Structural reference — 05 (layout logic only)

**Paired asset:** `05-overlap-card-geometric-accents-orbitals-tabs.png`

## Non-negotiables (do not copy from the reference)

- **Do not** copy RetailNext branding, light-blue field backgrounds, orbital marketing graphics, literal triangle/chevron colors, or icon grids from the reference.
- **Governed by:** [PROJECT_PRIME_DIRECTIVE_RULES.md](../PROJECT_PRIME_DIRECTIVE_RULES.md) — canvas stays light; geometry is **structural ink + logo fragments**, not decorative rainbow shapes.

## Structural patterns to borrow

- **Overlapping white / glass card** on canvas: section content sits in a **raised panel** that crosses the boundary between background regions (overlap without colored fields).
- **In-section tabs (pill rail):** Horizontal **segmented control** above body — switches content **inside one block** instead of stacking duplicate sections (use for services/detail toggles only if content warrants).
- **Large geometric frame as mask:** Chevron / diagonal **clips** the media edge — implement as `clip-path` or layered border, **monochrome ink + single accent corner** if needed.
- **Orbital / scatter rhythm (abstracted):** Small marks orbit a focal point — **translate** to **low-opacity logo watermark + sparse accent dots** (B-Xa), not a literal diagram.
- **Testimonial row with scale break:** One portrait **stepped larger**; text wraps in **L-shaped** flow beside it.
- **Grid + gutter “arrow” accent:** Asymmetrical mass in the **gutter** beside an otherwise regular grid (logo fragment or ink block).

## Composition stack — layers & placement (read against the PNG)

What the reference is *doing* with overlap, geometry, and color (GLC translation in parentheses):

| Order | Plane | Role | GLC-safe translation |
|------:|--------|------|----------------------|
| 0 | **Section field** | Very light cool tint vs white — **alternating bands** so sections read as distinct | Stay on **`#fafafa` canvas** + white `cluster-surface` / `panel-machined`; no teal/sky fills |
| 1 | **Raised overlap card** | Large panel **straddles** the boundary between band A and band B (`z-index` lift, shadow) | Featured / product block: **one** machined panel overlapping the seam (see `GLFeaturedServices` direction) |
| 2 | **Tab rail** | Pills sit **on** the card surface, not in the page margin | `role="tablist"` row; selected = ink slab, idle = hairline |
| 3 | **Two-column interior** | Left: copy + CTA; Right: **vertical photo** — clear **figure / ground** | Text column max-width; image in bordered frame |
| 4 | **Geometric interlock** | Teal/yellow **wedge** touches **only the corner** of the image — *punctuation*, not a full-image wash | **`clip-path`** + **one** `--y` corner or `FragmentBullet`-style fragment; **no** 15% full-bleed gray on the whole photo |
| 5 | **Background orbitals** (hero) | Thin circles + avatars = **depth without a second photo** | `ClaudeLogicWatermark` + grain; optional sparse structural lines |
| 6 | **Testimonials** | **Scale break**: one large portrait vs small squares | `GLTestimonials`: one stepped card |
| 7 | **Grid + gutter shape** | Large triangle **behind** cards, clipped by viewport — reads as **layer behind** content | Ink or watermark mass at **low opacity** in gutter, not on top of body copy |

**Takeaway:** Color variation is **local** (button, selected tab, one geometric corner, one headline word). **Placement** variation is **z-index + overlap + clip** — components **cross** seams and **bite** images; they do not rely on a single transparent overlay to carry the section.

## Target homepage sections

- `GLWhoWeServe` — overlapping panel + image clip.
- `GLServices` — optional pill filters (if ever needed); otherwise use **visual** stagger only.
- `GLDifference` — chevron/mask on media; satellite pill.
- `GLContact` — wide/narrow footer split analogy (help column vs link columns) without copying palette.

## Compliance cross-reference (intent)

- B-Xa–b (watermark / fragments instead of ornamental orbitals), B-VIb–c, B-XIc (machined / clipped edges), D-1b (custom primitives for tabs if built).

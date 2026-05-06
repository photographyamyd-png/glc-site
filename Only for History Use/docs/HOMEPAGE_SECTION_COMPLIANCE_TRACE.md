# Homepage Section Compliance Trace

Date: 2026-04-30 (updated: sandbox-strict structural rebuild)  
Scope: `app/page.tsx` → `GLHomeCopyLab`  
Method: Section-by-section parity against `app/sandbox/page.tsx` approved `GL*` shells.

## Structural rebuild (Sandbox-Strict) — 2026-04-30

### Problem (pre-rebuild)

- `#capabilities` and several bands reused the same “panel + uniform card grid” physics; color swaps did not create distinct archetypes.
- Repeated full-width image strips had been added across multiple sections, which read as the same layer recipe.

### Changes (post-rebuild)

| Area | Before | After | Sandbox analogue |
| --- | --- | --- | --- |
| `#services` | Custom `CopyLabFeatured` (static column + link grid) | **`GLFeaturedServices`** with copy-lab content + merged service rows (`merge-copy-lab-services.ts`) | `GLFeaturedServices` in sandbox |
| `#capabilities` | `CopyLabServicesGrid` (static 6-card grid) | **`GLCapabilitiesRail`** — vertical tab rail + single detail panel (keyboard: arrows/home/end) | Interaction-led companion to sandbox tabs; **not** a second horizontal tab strip |
| Shared shells | Mixed custom + GL | **`GLWhoWeServe`, `GLDifference`, `GLProcess`, `GLServiceAreas`, `GLTestimonialsBlock`, `GLCtaBand`** unchanged as archetypes | Same names on sandbox |
| Duplicate media strips | Side image planes on process / coverage / testimonials / CTA | **Removed** from those shells to avoid identical background-layer cloning | Sandbox originals (no repeated strip pattern) |

### Files touched (implementation)

- [`components/ground-level/GLFeaturedServices.tsx`](../components/ground-level/GLFeaturedServices.tsx) — optional `sectionId`, `headingId`, `content`, `services`; `ExpandableCopy` on intro + mega blurbs.
- [`components/ground-level/GLCapabilitiesRail.tsx`](../components/ground-level/GLCapabilitiesRail.tsx) — new client section, `#capabilities`.
- [`components/ground-level/home-copy-lab/GLHomeCopyLab.tsx`](../components/ground-level/home-copy-lab/GLHomeCopyLab.tsx) — composes shells only; deletes custom featured/grid components.
- [`lib/ground-level/merge-copy-lab-services.ts`](../lib/ground-level/merge-copy-lab-services.ts) — role-map descriptions merged onto `GROUND_LEVEL_SERVICES` by slug.
- [`lib/ground-level/home-copy-lab-content.ts`](../lib/ground-level/home-copy-lab-content.ts) — `COPY_LAB_CAPABILITIES_INTRO` (verbatim former grid intro lines).
- Removed: `CopyLabFeatured.tsx`, `CopyLabServicesGrid.tsx`.
- Shell cleanup: [`GLProcess.tsx`](../components/ground-level/GLProcess.tsx), [`GLServiceAreas.tsx`](../components/ground-level/GLServiceAreas.tsx), [`GLTestimonials.tsx`](../components/ground-level/GLTestimonials.tsx), [`GLCtaBand.tsx`](../components/ground-level/GLCtaBand.tsx) — dropped duplicated side image strips.

## Rhythm sequence check

1. `#hero` — `band-dark-field`
2. `GLMarqueeBand` — separator
3. `#services` — `band-light` (`GLFeaturedServices`)
4. `#about` — `band-dark` (`GLWhoWeServe`)
5. `#metrics` — `band-light` (`CopyLabStats`)
6. `#capabilities` — `band-dark` (`GLCapabilitiesRail`)
7. `#why` — `band-light` (`GLDifference`)
8. `#process` — `band-dark` (`GLProcess`)
9. `#coverage` — `band-light` (`GLServiceAreas`)
10. `#testimonials` — `band-dark` (`GLTestimonialsBlock`)
11. `#cta-band` — `band-light-field` (`GLCtaBand`)

## Section ledger (current)

| Homepage section | Sandbox reference | Structural intent | Post-rebuild status |
| --- | --- | --- | --- |
| `#hero` | `GLHero` | Full-bleed stage + glass stack | Pass |
| Marquee | `GLMarqueeBand` | Approved motion separator | Pass |
| `#services` | `GLFeaturedServices` | Horizontal tabs + bespoke panel | Pass |
| `#about` | `GLWhoWeServe` | Dark split + credentials + media column | Pass |
| `#metrics` | (no single sandbox twin; metrics band) | Light metrics + image column | Pass |
| `#capabilities` | Rail interaction (distinct from services tabs) | Vertical rail + one active panel + in-panel media | Pass |
| `#why` | `GLDifference` | Light split + image + reason rails | Pass |
| `#process` | `GLProcess` | Dark timeline + canvas islands | Pass |
| `#coverage` | `GLServiceAreas` | Territory headline + canvas cards | Pass |
| `#testimonials` | `GLTestimonials` / block variant | Dark band + inverse cards | Pass |
| `#cta-band` | `GLCtaBand` | Conversion endband + CTAs | Pass |

## Shared interaction compliance

- `ExpandableCopy` used for long intros and long blurbs where copy exceeds two sentences.
- Capabilities rail: `role="tablist"` / `tab` / `tabpanel`, keyboard navigation on vertical axis.

## Verification

- `npx tsc --noEmit` — pass (last run at rebuild).
- Canonical anchors preserved: `#services`, `#about`, `#metrics`, `#capabilities`, `#why`, `#process`, `#coverage`, `#testimonials`, `#cta-band`.

## Testimonials refined motion pass — 2026-04-30

### Motion strategy (GLTestimonialsBlock)

- Added Framer Motion orchestration to `GLTestimonialsBlock` in [`components/ground-level/GLTestimonials.tsx`](../components/ground-level/GLTestimonials.tsx):
  - section wrapper fades in once on viewport entry
  - staged reveal for left narrative column and right active quote panel
  - active quote panel uses `AnimatePresence` for controlled quote-change transition
- Added reduced-motion safeguards (`useReducedMotion`) to suppress non-essential movement.

### Scroll + interaction behavior

- Scroll-triggered reveal runs once (`viewport.once`) to avoid repeated distraction.
- Selector rail buttons now include restrained hover/tap feedback and active state depth.
- Active quote content transitions softly on selection change; supporting cards settle subtly.

### Spatial/background depth upgrades

- Added section-scoped atmospheric styling in [`app/globals.css`](../app/globals.css):
  - `.testimonial-atmosphere`
  - `.testimonial-atmosphere-mesh`
  - `.testimonial-atmosphere-grain`
- Result: layered mesh + grain + highlight depth without flattening readability.

### Before/after behavior summary

- Before: static dark band with limited hierarchy and weak experiential flow.
- After: refined premium composition with one coherent animation story, stronger focal hierarchy, and atmospheric depth.

### Rule gate confirmation

- Typography role triad: pass (eyebrow/headline/body/meta remain distinct).
- Long-copy handling: pass (`ExpandableCopy` preserved).
- Layering/depth: pass (atmosphere + rails + active/supporting card stack).
- Anchor/IA integrity: pass (`#testimonials` unchanged).

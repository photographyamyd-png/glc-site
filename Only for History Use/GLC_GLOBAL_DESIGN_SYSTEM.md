# GLC GLOBAL DESIGN SYSTEM
## Design Tokens, Layout Mechanics, and Structural Law

**Version:** Consolidated April 2026  
**Companion:** [GLC_MASTER_RULES.md](./GLC_MASTER_RULES.md) — governance, process, and compliance authority

**Purpose:** This document defines *what* GLC sections look like and how they are constructed. It is the canonical DNA reference. Every token, layer, archetype, and rule below is mandatory for production sections unless explicitly classified N/A under Master Rules Part 5.

> **Authority:** This document is binding. Conflicts with lower-precedence documents are resolved in favor of this document. Conflicts with the Master Rules document are resolved in favor of Master Rules.

---

## TABLE OF CONTENTS

- **Part 1** — How to use this document
- **Part 2** — Locked Token Reference (Color, Typography, Spacing)
- **Part 3** — Section Architecture (Layers, Depth, Anti-Flat, Asymmetry)
- **Part 4** — Structural Layout Mechanics (Archetypes, Physics, Toolkit)
- **Part 5** — Band Rhythm and Inter-Section Contrast
- **Part 6** — Typography Rules
- **Part 7** — Glassmorphism and Translucency
- **Part 8** — Motif and Accent Governance
- **Part 9** — Content, Copy, and SEO Architecture
- **Part 10** — Imagery and Figure-Ground
- **Part 11** — Interaction and Motion
- **Part 12** — Trust Signal Architecture
- **Part 13** — Accessibility Invariants
- **Part 14** — Mobile Adaptive Logic
- **Part 15** — Pre-Submission Self-Audit Checklist

---

## PART 1 — HOW TO USE THIS DOCUMENT

For every section or component being built:

1. **Verify token values against `glc-unified-v2.html` first.** Do not guess values from memory.
2. **Identify the section archetype** from Part 4.4 before sketching layout.
3. **Confirm three-layer minimum and two-method depth** before any styling decisions.
4. **Confirm typography triad** before writing any text.
5. **Confirm rhythm safety** against the section before and after.
6. **Run the Part 15 checklist** before submitting.

If a check fails, the section is non-compliant. Do not ship.

---

## PART 2 — LOCKED TOKEN REFERENCE

All values verified against `glc-unified-v2.html`. Never hardcode hex values inline. Always use the CSS custom property token.

### 2.1 Color Tokens

| Token | Value | Role | Usage |
|-------|-------|------|-------|
| `--yellow-core` | `#F2B705` | Primary accent / Construction Gold | CTAs, accent fragments, rails, navigation beacons |
| `--y` | `var(--yellow-core)` | Shorthand alias | Same as above |
| `--yellow-dark` | `#C99804` | Darkened accent | Hover states, deeper accent contexts |
| `--charcoal-deep` / `--ink-deep` | `#1E1C1A` | Deep structural ink | Dark section fields (DSE), high-contrast text |
| `--charcoal-mid` / `--ink-mid` | `#2E2B28` | Mid charcoal | Card surfaces on dark fields, secondary panels |
| `--charcoal-light` | `#585653` | Light charcoal | Muted elements, divider lines |
| `--ink-muted` / `--t400` | (project-defined) | Muted text | Body text on light surfaces, supporting copy |
| `--g100`, `--g200` | (project-defined) | Structural grays | Hairline borders, subtle dividers |
| `--brand-canvas` / `--canvas` | `#fafafa` | Light canvas baseline | Light-band sections, primary background |
| `--w` / `--white` | `#FFFFFF` | White anchor | Light surface contexts only |

**Verified hard rules:**

- `--yellow-core` is `#F2B705`. Never `#F7C520`, `#FFC107`, or any other value.
- `--yellow-dark` is `#C99804`. Never any other value.
- No yellow tints — only charcoal tints are permitted in surface treatments.
- `--yellow-core` is for accents, not large background fills as a primary surface treatment. Apply to CTAs, rails, fragment highlights, and navigation beacons.
- All color values referenced in components must be CSS custom property tokens, not inline hex strings.

### 2.2 Typography Stack

| Family | Weights | Role | Usage Context |
|--------|---------|------|---------------|
| **Oswald** | 200, 600, 700 | Display / headlines | Three-Act Headline pattern; all major section headers; `--font-heading` |
| **Plus Jakarta Sans** | Standard | Body / content | General body copy on light surfaces |
| **Barlow** | 300, 400, 500 | DSE body / `--font-sans` | Dark section body copy and label contexts |
| **Source Code Pro** | Standard | Mono / labels | Monospaced elements, data labels, technical specs |
| **Source Serif 4** | Retained | Light surface long-form | Light background editorial contexts only |
| **Barlow Condensed** | Standard | Condensed labels | Eyebrow labels, compressed UI copy |

**Locked CSS variable mapping:**

- `--font-sans: var(--font-barlow), system-ui, sans-serif`
- `--font-heading: var(--font-oswald), system-ui, sans-serif`

**Forbidden:** Script, cursive, distressed, rugged, or "construction-themed" novelty fonts. Geist font has been removed and may not be reintroduced.

### 2.3 Spacing Tokens

Use `--s1` through `--s14` and the `--dna-space-*` family. Apply CSS `clamp()` and fluid scaling for typography and spacing where the existing pattern uses them. Do not delete or reassign spacing token semantics without an amendment.

### 2.4 Radius and Shape

- **`--radius: 0`** — zero border-radius is mandatory on section internals.
- Machined / hairline edges replace rounded corners throughout.
- Soft rounding is permitted only on truly atomic UI elements (e.g., a circular badge dot motif), not on cards, panels, sections, or structural containers.

### 2.5 Surface System

| Surface class | Field | Use |
|---------------|-------|-----|
| `band-light` | `--brand-canvas` (#fafafa) | Default light section root |
| `band-light-field` | `--brand-canvas` with frosted/CTA treatment | Narrow CTA strips, utility separators |
| `band-dark` | `--charcoal-deep` field | DSE (Dark Surface Environment) section root |
| `marquee-band` | `--yellow-core` field | Yellow ticker, palette-cleanse separator |

The yellow gradient rail appears at DSE section tops. Blueprint grid texture appears on dark sections.

---

## PART 3 — SECTION ARCHITECTURE

Every section must satisfy all of the following simultaneously.

### 3.1 Three-Layer Minimum (Rule C1)

Every content section must include at least three compositional layers stacked along the Z-axis:

1. **Root field layer** — section background band/canvas
2. **Figure / panel / media layer** — a structural visual element creating tonal or compositional separation
3. **Accent / overlay / rail / watermark layer** — a decorative or branded surface element

**Fail conditions:**
- Flat band + heading + paragraph with no materialized second or third layer.
- A decorative third layer so weak it creates no compositional role separation.
- Field + text only as the finished section state.

### 3.2 Two-Method Depth Minimum (Rule C2)

Every section must use at least two distinct methods from this toolkit:

| Method | Examples |
|--------|----------|
| Layered translucency | `backdrop-blur`, glassmorphic panels, complex `z-index` stacking |
| Textural overlays | SVG grain/noise, blueprint grid, image-based textures |
| Machined architecture | Hairline borders, inner glows, gradient edge lines (not plain 1px solid) |
| Ambient physics | Soft ambient shadows, dynamic lighting, multi-plane parallax |
| Figure-ground massing | Deliberate large structural visual elements creating tonal separation |

**Fail conditions:**
- Single cosmetic depth method only (e.g., one thin border, no other depth).
- Glass/translucency used as a blanket default for every block — counts as one method only.

### 3.3 Anti-Flat Enforcement (Rule C3) — Expanded

"Readable but plain" is not a passing output. Structural visual hierarchy must be deliberate, layered, and compositionally distinct. Every section must feel designed, not generated.

This rule is operationalized through four layout mechanics defined in Part 4 (Multi-Box Layering, Split-Rail Bento, Optical Silo Flow, 60-30-10 Spatial Ratio) and the archetype inventory in Part 4.4. A section that does not employ at least one of these mechanics or archetypes is non-compliant under anti-flat enforcement.

**The anti-flat checklist:**
- [ ] Section has at least three Z-axis layers (Part 3.1)
- [ ] Section uses at least two depth methods (Part 3.2)
- [ ] Section employs an identified archetype (Part 4.4)
- [ ] Section uses at least one layout mechanic (Part 4.1–4.3)
- [ ] Section does not visually duplicate adjacent sections

### 3.4 Asymmetry with Counterbalance (Rule C4) — Expanded

If a section uses offset, clip, stagger, zigzag, or 70/30 optical weighting, it must include an opposing visual anchor to stabilize the composition. Asymmetric drift with no stabilizing opposing mass fails.

**Approved counterweights:**
- Chip clusters
- Rail panels (slim vertical or horizontal strips)
- Inverse figure blocks (high-contrast cells with reversed tone)
- Massed media blocks
- Strong typographic anchor islands
- Tabbed rails (narrow vertical sidebars)

The asymmetric system is governed by the 60-30-10 spatial ratio (Part 4.1.4) and the staggering rules in Part 4.1 (the 80px offset rule).

---

## PART 4 — STRUCTURAL LAYOUT MECHANICS

This part defines the physics of GLC layouts. Every production section must apply at least one mechanic from 4.1 or one archetype from 4.4. Mechanics may be combined.

### 4.1 Layout Mechanics

#### 4.1.1 Multi-Box Layering (Rule LM-1)

Creates perceived physical depth by stacking elements along the Z-axis.

- **Rule:** Any section using a background media block must feature at least two overlapping foreground elements with distinct `z-index` values.
- **Pattern:** A large, desaturated media block serves as the base (Z-0). A charcoal text panel overlaps the image edge (Z-10). A yellow accent surface — small CTA, chip cluster, or call-out — overlaps the text panel (Z-20).
- **Visual anchors:**
  - Floating ghost borders, offset 8–12px from the panel they shadow
  - Drop shadows: 15% blur, 4px Y-offset to simulate lift
- **Fail condition:** Single-layer foreground over media with no overlap depth.

#### 4.1.2 Split-Rail Bento (Rule LM-2)

Modular grid that organizes content into a functional hierarchy while preserving compositional interest.

- **Rule:** Divide the section into a 2×2 or 3×2 grid. One cell must be a **Double-Mass** block spanning two columns or rows to act as the primary focal point.
- **Pattern:** Massed media block (video or high-resolution photograph) in the Double-Mass cell. Remaining smaller cells host rail panels for technical specs, or strong typographic islands for quick headlines.
- **Visual anchors:**
  - Rail panels — slim vertical or horizontal strips for proof signals or navigation
  - Inverse figure blocks — high-contrast cells with reversed tone (white text on deep ink, etc.)
- **Fail condition:** Even-weight grid with no Double-Mass focal point — reads as a generic feature card grid.

#### 4.1.3 Optical Silo Flow (Rule LM-3)

Guides the eye vertically through three consecutive sections, reinforcing siloed IA structure.

- **Rule:** A vertical spine — a 2px line or a subtle color-blocked rail — must connect three consecutive sections. The spine anchors asymmetric staggering between them.
- **Pattern:** Place content blocks on alternating sides of the spine. Section 1 weighted 70/30 left → Section 2 weighted 30/70 right → Section 3 returns to a centered or 70/30 left configuration.
- **Visual anchors:**
  - Node points — small geometric shapes (circles, squares) where the spine meets a horizontal section break
  - Massed media blocks used to break the spine for high-impact relief
- **Fail condition:** Spine declared but no alternating staggering applied; spine becomes decorative only.

#### 4.1.4 The 60-30-10 Spatial Ratio (Rule LM-4)

Applies the color-restraint logic to negative space and massing.

- **Rule:** Total section area is distributed as **60% negative space** (breathing room) / **30% primary content** (text and media) / **10% interactive elements** (buttons, chips, CTA).
- **Pattern:** A typographic island sits in the center of a large clean field. Heavy negative space focuses attention on the 10% interactive element.
- **Visual anchors:**
  - Chip clusters — grouped tags or categories that weight one corner of the negative space
  - Strong typographic anchor — a single oversized character or word as a background watermark
- **Fail condition:** Section reads as content-dense with no breathing room; CTA does not earn focus from spatial weighting.

### 4.2 Non-Standard Grid Requirements (Expanded)

#### 4.2.1 Vertical Anchoring (The Spine)

Where a 100vh element is used, it must remain static or move at a different parallax speed than the content clusters. This creates a mooring effect for the eyes during high-speed scrolling.

#### 4.2.2 Offset Clustering — The 80px Rule

No two adjacent horizontal content blocks may share a top margin. Force a minimum offset of **80px to 120px** between them. This breaks table-logic alignment and forces the eye to scan in a non-linear path, increasing engagement time.

#### 4.2.3 Broken Grid

Intentionally overlap container edges or bleed elements off-screen to eliminate the 12-column box feel.

#### 4.2.4 70/30 Optical Weight

Counter-balance dense imagery or high-impact sections with extreme whitespace or massive typographic scale on the opposing side. This is not mandatory for every section. Grid / metric / system sections may classify N/A under Master Rules Part 5 with a documented alternative balancing strategy.

#### 4.2.5 Interlocking Sections (The Hook Mechanic)

Two implementation tiers:

- **Tier 1 — Physical Interlock (preferred):** A foreground image from Section A must physically cross the boundary into the background container of Section B.
  - Implementation: negative `z-index` on Section B's container while Section A's media uses a `transform: translateY(25%)`.
- **Tier 2 — Seam Punctuation Only (borderline):** A decorative seam break between sections without physical bleed. Acceptable for utility transitions but should not be the default for high-impact transitions.

#### 4.2.6 Negative Space Bridges

Background textures or subtle decorative lines that bridge gaps between content clusters.

#### 4.2.7 Intentional Variety

No two adjacent sections may share the same structural archetype. Section B must always contrast the architectural physics of Section A. This is enforced as Rule D5 in Part 5.5.

### 4.3 Zigzag and Asymmetric Offsets (Rule G6)

Allowed and encouraged where narrative pacing requires directional rhythm. Must satisfy the counterbalance rule (Part 3.4) and readability constraints. Two consecutive zigzag-asymmetric sections create visual seasickness and are non-compliant — break with a symmetric archetype between.

### 4.4 The Archetype Inventory

To satisfy the homepage's structural variety requirements without repetition, sections must draw from at least five of the following archetypes across the page. No two adjacent sections share an archetype.

| Archetype | Structural Physics | Best Used For |
|-----------|-------------------|---------------|
| **AR-1: The Monolith** | Single, centered, massive typographic anchor with extreme negative space | High-impact mission statement, manifesto, brand declaration |
| **AR-2: The Staggered Duo** | 70/30 split with media offset high and text offset low (or inverse) | Feature highlight with depth; service overview |
| **AR-3: The Carousel Rail** | Horizontal scroll overflow that breaks the container edge | Portfolio gallery, project case studies, social proof |
| **AR-4: The Kinetic Silo** | Three tall narrow columns with independent hover states | Service / category selection |
| **AR-5: The Data Field** | Geometric grid of small chips or icons with high negative space | Technical specs, client logos, certification stamps |
| **AR-6: The Ghost Transition** | 100vh background video or media with transparent text overlays | Narrative transition, vibe reset between dense content |

Each archetype must still satisfy the three-layer minimum, two-method depth minimum, typography triad, and tone-aware internal rules.

### 4.5 The Toolkit (Reusable Design Elements)

These are recurring elements available for use across archetypes and mechanics.

| Element | Description | Best Used For |
|---------|-------------|---------------|
| **Glassmorphic Overlay** | Semi-transparent panel with `backdrop-blur` | Adding depth over busy media blocks (subject to Part 7 limits) |
| **Micro-Stagger** | Offsetting small icons or labels by 5–10px from the main grid line | Breaking stiff layouts without losing order |
| **Monolith Media** | Edge-to-edge full-bleed image with zero padding | Creating breather sections between dense content |
| **Tabbed Rail** | Narrow vertical sidebar containing icons or vertical text | Stabilizing 70/30 asymmetric weighted sections |
| **Ghost Border** | Outlined panel offset 8–12px from the element it shadows | Multi-Box Layering depth signal |
| **Node Point** | Small circle or square placed where a spine meets a section break | Optical Silo Flow continuity |

### 4.6 Wildcard: High-Contrast Brutalist Minimalism (Rule TK-5)

A typography-only section using brutalist border treatment. Use 2px solid borders in `--charcoal-deep` and `--yellow-core` for all containers. Creates an extremely clean, high-performance section that feels architecturally sound and aligns with siloed URL structure.

This pattern still satisfies the three-layer minimum if borders + typographic island + accent rail provide compositional separation. Use sparingly — overuse degrades the high-contrast effect.

### 4.7 Section Count Minimum

The homepage must use at least 5 of the 6 archetypes defined in Part 4.4. No two adjacent sections may share an archetype (Rule D5). Total section count is determined by content needs, not by an absolute floor.

---

## PART 5 — BAND RHYTHM AND INTER-SECTION CONTRAST

### 5.1 Dark Adjacency Prohibition (Rule D1)

Adjacent full-width dark section roots (`band-dark`) require an approved separator. Two consecutive `section-major band-dark` wrappers without a visible tone break is non-compliant. Continuous Charcoal Grey blocks create scroll fatigue, where the user loses orientation in the page hierarchy.

### 5.2 Approved Separators (Rule D2) — Expanded

#### 5.2.1 The Ticker Break (`marquee-band`)

A `--yellow-core` ticker band acts as a visual speed bump between dark sections. It resets the eye's focus and signals a shift in topic. The ticker may be content-bearing (rotating service categories, certifications, etc.) but must not exceed ~80px height to remain a separator rather than a section.

#### 5.2.2 The Frosted Strip (`band-light-field`)

A narrow band, maximum 200px height, using `--brand-canvas` or a light blurred glass treatment. Should contain minimal text — a single quote, a "Back to Top" utility, or a CTA pair. Must not become a content section in disguise.

#### 5.2.3 Light-Dominant Figure Break

A section whose dominant figure block is clearly light/canvas-dominant — not an unbroken charcoal plateau. Acceptable as a separator only when the light figure visually dominates the section read.

**Disallowed:** Three consecutive dark section roots with only minor internal card changes and no light separator between roots (Rule D3).

### 5.3 Preferred Scroll Rhythm (The Oreo Logic)

The page alternates visual mass:

1. **Mass (Dark):** Heavy, content-rich, high-contrast
2. **Air (Light):** Breathing room, navigational, utility-focused
3. **Mass (Dark):** Conclusion, CTA, or secondary narrative

Preferred sequence: `band-dark` → (`marquee-band` or `band-light` or `band-light-field`) → `band-dark`.

**Approved exception:** Hero + Stats sections may run back-to-back in DSE as the only sanctioned rhythm exception.

### 5.4 Lab Exception (Rule D4)

Layout labs (`GLServiceLayoutLab`, testimonial variant labs, `GLCDnaSandbox` lanes) may stack dark sections for comparison. Treat these as non-production rhythm. Do not copy lab adjacency into production stacks without applying Part 5 rules.

### 5.5 Archetype Adjacency (Rule D5) — Expanded

Adjacent sections must not duplicate structural archetype. Distinction is expected in layout physics, not just copy change.

**Specific adjacency examples:**

- If Section A is **The Staggered Duo** (asymmetric), Section B must be **The Monolith** or **The Data Field** (symmetric). Two asymmetric zigzag sections stacked back-to-back create visual seasickness.
- If Section A is **The Carousel Rail** (horizontal motion), Section B must be a static archetype (Monolith, Data Field, Staggered Duo).
- If Section A is **The Ghost Transition** (atmospheric, low information density), Section B must be high-density (Staggered Duo, Kinetic Silo, Data Field) to restore reading momentum.

### 5.6 The Floating Silo Footer

The final section of the page is treated as an Interlocking Section (Tier 1). Instead of a flat traditional footer:

- The Contact / final CTA section (dark) features a large media block that bleeds upward into the previous section (light).
- The footer reads as an architectural foundation rather than an afterthought.
- The interlock applies Multi-Box Layering (Part 4.1.1) at the page-foot transition.

---

## PART 6 — TYPOGRAPHY RULES

### 6.1 Three-Role Minimum Per Section (Rule E1)

Every content section presents at minimum three distinct typography color uses mapped to three distinct semantic roles:

| Role | Description |
|------|-------------|
| **A — Label / Eyebrow** | Small identifying text above the headline |
| **B — Display / Headline** | Main heading using Oswald with accent fragment (`--y`) where the section pattern requires it |
| **C — Body / Supporting Copy** | Paragraph or descriptive text |

A fourth role is encouraged where IA supports it: stat / meta / chip / CTA copy.

### 6.2 Hard Fail Conditions (Rule E3)

- Heading, body, and meta sharing the same dominant color purpose.
- Repeated color use without semantic role distinction.
- Missing accent fragment in heading patterns that define an accent-key structure.

### 6.3 Utility Exception (Rule E4)

Ticker / marquee utility modules that are clearly non-content separators may classify N/A for the full triad. Rhythm-role enforcement still applies.

### 6.4 Scale and Ratio Requirements

- Minimum **three distinct typographic scales** per layout.
- Hero / H1 maintains approximately a **5:1 scale ratio** relative to body text.
- Maintain approximately a **1:3 ratio** of impact typography to body / utility text.
- CSS `clamp()` or fluid scaling applied to typography across breakpoints.

### 6.5 Register Integrity (Rule E5)

At least three typographic registers visually legible as role-distinct within a section. A reader should immediately identify which text is headline, which is body, and which is label / supporting without context.

### 6.6 Dark Field Long Copy (Rule F3)

Long copy on dark fields uses machined or light figure support for legibility hierarchy. Prefer `--brand-canvas` figure blocks with hairline borders and optional `--y` left rail over generic glass slabs.

### 6.7 Editorial Chunking

No walls of text. Long-form content must be atomized into structured, scannable containers. See Part 9 for stow / expand patterns when content exceeds two sentences.

### 6.8 Forbidden Typography

Script, cursive, distressed, or rugged fonts are forbidden. The locked stack (Part 2.2) is not substitutable.

---

## PART 7 — GLASSMORPHISM AND TRANSLUCENCY

### 7.1 One-Tool Limit

Glass / translucency is one depth method, not a default styling. Do not apply generic translucent slabs to every content block. Counts as a single method toward the two-method depth minimum.

### 7.2 Core Copy Areas

Prefer machined / canvas figure blocks for primary long copy on dark fields. Avoid persistent transparent backgrounds for core content regions.

### 7.3 Depth Must Support Hierarchy

Blur and shadow support hierarchy and legibility. Decorative haze that harms readability is non-compliant. Pseudo-depth using only tiny overlays without meaningful figure-ground contrast fails.

---

## PART 8 — MOTIF AND ACCENT GOVERNANCE

### 8.1 Page-Level Caps

| Constraint | Limit |
|------------|-------|
| Accent families per page | Max 3 |
| Ghost systems per page | Max 2 |
| Pointer-reactive motif systems per page | Max 1 |
| Dominant diagonal motif systems per page | Max 1 |
| Side vertical label systems per page | Max 2 |
| Clean sections (no motif overlay) | Minimum 50% |

### 8.2 Context Lock

Motif families must remain in their approved semantic contexts. Do not repurpose a motif family outside its documented context.

- **Canonical motifs:** `public/images/Accents-and-Motifs/*`
- **Additive injected motifs:** `public/motifs/*`
- **Component primitives:** `components/motifs/*`

### 8.3 Truck Geometry Constraints

- Sibling corner density: ≤ 0.60
- Watermark opacity: ≤ 0.12

### 8.4 Traceability

Governed motif placements should carry a `data-motif-id` attribute for auditability where applicable.

### 8.5 Cursor Motif

The custom yellow-dot cursor with lagging ring is GLC's interactive motif. Apply the page-level pointer-reactive cap (max 1).

### 8.6 Texture and Rail Motifs

- Blueprint grid texture appears on dark sections (DSE contexts).
- Yellow gradient rail appears at DSE section tops.

### 8.7 SVG Motif System

Motif inventory: see `docs/MOTIF_ACCENT_MANIFEST.json` (data) and `docs/MOTIF_ASSET_PATH_MAPPING.md` (asset paths). Reference these before adding any motif to a section.

---

## PART 9 — CONTENT, COPY, AND SEO ARCHITECTURE

### 9.1 SEO Integrity Mandate

All copy required for ranking remains in the DOM. Copy is never cut, truncated, or hidden in a way that removes it from the DOM for visual convenience.

### 9.2 Long Copy Stowing Threshold

Any content copy exceeding a two-sentence minimum must be housed within an interactive stow / expand component.

### 9.3 Approved Stow / Expand Patterns

- Sticky tab containers
- Accordion / `<details>`/`<summary>` disclosure clusters
- Read-more / expandable overlays
- Sliding or click-to-expand cards
- Drop-down spines

shadcn primitives (Tabs, Accordion, Collapsible) are the preferred implementation. Compose them inside GLC section shells; do not let the kit dictate section architecture.

### 9.4 Expanded-State Integrity

Expanded states preserve layout balance. The section is built to handle the expanded state without breaking visual balance, overlapping CTAs, or collapsing rhythm.

### 9.5 Content Architecture Decision Tree

1. **Classify the copy role:** utility separator / introductory value / process or service deep / testimonial or proof / CTA conversion
2. **Test density:** concise and scannable without collapsing hierarchy? → stow optional
3. **Wall-of-text check:** raw block exceeds comfortable editorial chunking? → stow required
4. **Choose stow pattern:**
   - Process / service detail → tabs, accordion, expand cards
   - FAQ-like → disclosure / `details-summary`
   - Supporting elaboration → read-more overlay or expand region
5. **DOM preservation check:** full ranking text in DOM even when visually collapsed
6. **Expanded layout check:** does not break balance or rhythm
7. **Accessibility check:** stow controls keyboard reachable, semantically clear, reduced-motion safe

### 9.6 Editorial Chunking

Apply 1:3 ratio of impact typography to description / utility text. Long-form atomized into structured, scannable containers.

### 9.7 Copy Source Discipline

Treat source copy from approved GLC documents as fixed and verbatim. Do not paraphrase, "improve," or generate placeholder copy. Use known GLC data to fill content gaps. Generic placeholder suggestions are non-compliant.

---

## PART 10 — IMAGERY AND FIGURE-GROUND

### 10.1 Image Role Taxonomy

Every image used in a section serves at least one structural role:

- Documentary proof image
- Material texture image
- Scale cue image
- Contrast anchor image
- Narrative phase image
- Structural mass image

### 10.2 Selection Criteria

Evaluate each image against:

- Narrative purpose fit
- Compositional mass need
- Contrast support need
- Readability impact on overlaid text
- Rhythm transition support
- Trust / proof signaling value
- Motif / brand coherence

### 10.3 Correct Image Criteria

An image passes if it:

- Performs at least one primary structural role and does not break contrast or hierarchy
- Supports the section narrative phase (entry, proof, process, conversion)
- Improves figure-ground clarity vs. a no-image alternative

### 10.4 Incorrect Image Criteria

An image fails if it:

- Is decorative only with no structural role
- Introduces a readability failure
- Conflicts with section tone or trust function
- Repeats a mass pattern causing archetype monotony

### 10.5 Media Omission Rule

Media may be omitted only if equivalent structural mass and depth are achieved through other approved structural motifs or panels.

### 10.6 Overlay Safety

Overlays, scrims, and chips can refine readability but cannot compensate for a fundamentally poor source image role fit.

---

## PART 11 — INTERACTION AND MOTION

### 11.1 Page-Level Interaction Budget

| Constraint | Limit |
|------------|-------|
| Pointer-reactive systems per page | Max 1 |
| Heavy scroll-motion modules per page | Max 2 (hero counts as 1) |
| Motion-light sections per page | Minimum 50% |

### 11.2 Reduced-Motion Mandate

All animated systems honor `prefers-reduced-motion`. This is mandatory, not optional.

### 11.3 Essential Meaning Without Animation

Content meaning and critical actions remain fully accessible without animation. No information may be hidden behind an animation state.

### 11.4 Touch / Hover

Hover-only behavior cannot be critical on touch contexts. Desktop magnetic-hover effects must be transformed into haptic-ready scroll reveals or touch-appropriate motion on mobile.

### 11.5 Keyboard and Focus

All interactive controls are keyboard operable. Focus indicators are visibly apparent. Decorative layers remain non-blocking for actionable targets.

### 11.6 Navigation Surface

Only one active navigation surface at a time — mega menu OR drawer, not both simultaneously.

### 11.7 Mobile Drawer Scroll Lock

Opening a mobile drawer locks body scroll until the drawer is closed.

---

## PART 12 — TRUST SIGNAL ARCHITECTURE

### 12.1 Decision Matrix

GLC is a **Pedigree** business (commercial excavation and site services). Apply the Pedigree proof pattern: longevity and technical milestones (e.g., completed project value, years in operation, equipment fleet specifics).

| Category | Business Type | Proof Pattern |
|----------|---------------|---------------|
| **Pedigree** | Contracting / Construction | Longevity, technical milestones |
| **Boutique** | Creative / Photography | Media recognition, "As Seen In" |
| **Workhorse** | Service | Reliability data, ratings, volume |

### 12.2 Logo Treatment

Third-party logos rendered monochrome / grayscale at approximately 40% opacity. "Logo wall" dumping is non-compliant. Proof blocks must be structured and intentional.

### 12.3 Two-Scroll Mandate

Value proposition and primary CTA visually established within the first two scrolls on desktop and mobile.

---

## PART 13 — ACCESSIBILITY INVARIANTS

Non-negotiable regardless of design intent:

- Essential content and actions never depend on animation or interaction state
- Native semantic HTML preferred: `<a>`, `<button>`, `<details>`/`<summary>`
- Keyboard focus visible; all controls keyboard operable
- Decorative layers remain non-blocking for actionable controls
- `prefers-reduced-motion` honored globally
- Touch behavior safe and usable for all critical actions
- shadcn / Base UI primitives used through their accessible defaults (do not strip aria attributes for visual cleanup)

---

## PART 14 — MOBILE ADAPTIVE LOGIC

### 14.1 Mobile Alter-Ego Per Section

Every section has a defined mobile reflow pattern that is a distinct architectural alter-ego. A vertical stack alone is not a mobile alter-ego. The mobile layout must present a meaningfully different architectural approach while preserving content hierarchy.

### 14.2 Touch-Optimized Interaction

Desktop magnetic / hover effects transformed into haptic-ready scroll reveals or touch-appropriate motion.

### 14.3 Proportional Fluidity

CSS `clamp()` or fluid scaling for spacing and typography ensures proportionality across breakpoints.

### 14.4 Verification Breakpoints

Verify at minimum at **375px** and **1280px**. Verify reduced-motion behavior, keyboard navigation with visible focus, and touch-safe behavior for interactive modules.

---

## PART 15 — PRE-SUBMISSION SELF-AUDIT CHECKLIST

Run before submitting any section. A single unchecked item is a blocker.

### Architecture
- [ ] Section has root field layer
- [ ] Section has figure / panel / media layer
- [ ] Section has accent / overlay / rail / watermark layer
- [ ] At least two distinct depth methods present
- [ ] Section employs an identified archetype from Part 4.4
- [ ] Section employs at least one layout mechanic (Part 4.1)

### Tokens
- [ ] `--yellow-core` is `#F2B705` (verified against `glc-unified-v2.html`)
- [ ] `--yellow-dark` is `#C99804` (verified)
- [ ] All color values use CSS custom property tokens (no inline hex)
- [ ] No script / cursive / rugged fonts
- [ ] `--radius: 0` enforced on section internals
- [ ] No yellow tints used as fill backgrounds

### Typography
- [ ] Three distinct semantic typography roles present (label, display, body)
- [ ] Optional fourth role (stat / meta / chip / CTA) present where IA supports it
- [ ] Heading and body do not share dominant color
- [ ] Accent fragment present where heading pattern expects it
- [ ] Approximate 5:1 hero-to-body scale
- [ ] Approximate 1:3 impact-to-description ratio
- [ ] At least three distinct scales

### Contrast
- [ ] No white text on light surfaces
- [ ] No muted-ink text on deep charcoal without verified contrast
- [ ] Each card / panel passes contrast independently of wrapper
- [ ] Long dark-field copy supported by machined / light figure

### Rhythm
- [ ] Section does not create dark-dark adjacency without approved separator
- [ ] Section archetype differs from sections immediately before and after
- [ ] If interlocking: physical bleed (Tier 1) implemented, not seam-only
- [ ] No two consecutive zigzag-asymmetric archetypes

### Layout Mechanics
- [ ] If asymmetric: counterweight present
- [ ] If using offset clustering: 80–120px offset between adjacent horizontal blocks
- [ ] If 60-30-10 ratio claimed: visually verifiable, CTA earns focus
- [ ] If Multi-Box Layering: minimum two overlapping foreground elements with distinct z-index
- [ ] If Split-Rail Bento: Double-Mass focal cell present
- [ ] If Optical Silo Flow: alternating staggering applied across three sections

### Copy and SEO
- [ ] All ranking copy in DOM
- [ ] Copy beyond two sentences housed in stow / expand pattern
- [ ] Expanded state preserves layout balance
- [ ] No paraphrased or placeholder GLC content; source copy verbatim

### Motif
- [ ] Page-level accent family count ≤ 3
- [ ] Page-level ghost system count ≤ 2
- [ ] Page-level pointer-reactive motif count ≤ 1
- [ ] At least 50% of sections clean (no motif overlay)
- [ ] `data-motif-id` applied to governed placements
- [ ] Truck corner density ≤ 0.60; watermark opacity ≤ 0.12

### Interaction
- [ ] Page-level pointer-reactive system count ≤ 1
- [ ] Page-level heavy scroll-motion count ≤ 2
- [ ] At least 50% of sections motion-light
- [ ] `prefers-reduced-motion` honored
- [ ] All hover behavior has touch equivalent
- [ ] All controls keyboard operable with visible focus
- [ ] Single active navigation surface
- [ ] Mobile drawer locks body scroll

### Mobile
- [ ] Defined mobile alter-ego (not just vertical stack)
- [ ] `clamp()` applied to typography and spacing where pattern uses it
- [ ] All interactive elements touch-safe
- [ ] Verified at 375px and 1280px

### Conversion / Links
- [ ] Value prop and primary CTA within first two scrolls
- [ ] All buttons and links resolve to live destinations
- [ ] No `href="#"` placeholders

### IA / Anchors
- [ ] All anchor links map to real IDs
- [ ] No duplicate IDs within page
- [ ] Lab / sandbox section IDs namespaced
- [ ] Sticky-header offset accounted for

### UI Kit Compliance
- [ ] shadcn theme variables wired through GLC tokens
- [ ] No hardcoded oklch defaults
- [ ] `--font-sans` set to Barlow, `--font-heading` set to Oswald
- [ ] No Geist font reintroduced
- [ ] No MUI / Radix-standalone / Chakra / Ant / Mantine introduced
- [ ] Kit components composed inside GLC section shells, not used as section replacement

---

## PART 16 — RULE ID INDEX (DESIGN SYSTEM)

| ID | Family | Rule |
|----|--------|------|
| C1 | Architecture | Three-layer minimum |
| C2 | Architecture | Two-method depth minimum |
| C3 | Architecture | Anti-flat enforcement |
| C4 | Architecture | Asymmetry with counterbalance |
| C5 | Architecture | Tone-aware internals |
| C6 | Architecture | Contrast at component level |
| LM-1 | Layout Mechanic | Multi-Box Layering |
| LM-2 | Layout Mechanic | Split-Rail Bento |
| LM-3 | Layout Mechanic | Optical Silo Flow |
| LM-4 | Layout Mechanic | 60-30-10 Spatial Ratio |
| AR-1 | Archetype | The Monolith |
| AR-2 | Archetype | The Staggered Duo |
| AR-3 | Archetype | The Carousel Rail |
| AR-4 | Archetype | The Kinetic Silo |
| AR-5 | Archetype | The Data Field |
| AR-6 | Archetype | The Ghost Transition |
| TK-1 | Toolkit | Glassmorphic Overlay |
| TK-2 | Toolkit | Micro-Stagger |
| TK-3 | Toolkit | Monolith Media |
| TK-4 | Toolkit | Tabbed Rail |
| TK-5 | Toolkit | Brutalist Minimalism (Wildcard) |
| D1 | Rhythm | Dark adjacency prohibition |
| D2 | Rhythm | Approved separators (ticker break, frosted strip, light-dominant figure) |
| D3 | Rhythm | Three-dark plateau prohibition |
| D4 | Rhythm | Lab exception |
| D5 | Rhythm | Archetype adjacency enforcement |
| E1 | Typography | Three-role triad mandatory |
| E3 | Typography | Hard fail conditions |
| E4 | Typography | Utility exception |
| E5 | Typography | Three-register minimum |
| F1 | Contrast | Forbidden pairings |
| F2 | Contrast | Local surface test |
| F3 | Contrast | Dark-band long-copy support |
| F4 | Contrast | Pseudo-depth prohibition |
| G1 | Layout | 70/30 optical weighting |
| G6 | Layout | Zigzag / asymmetric offsets |
| H1–H4 | Depth | Method count, glass limit, dark field readability |
| I1–I5 | SEO | DOM preservation, stowing, expanded integrity |
| K1–K6 | Imagery | Role taxonomy, selection, omission, overlay |
| L1–L7 | Interaction | Page caps, reduced-motion, keyboard, drawer |
| M1–M4 | Motif | Page caps, context, geometry, traceability |

---

*This document is the canonical DNA reference. Cursor sessions verify token values and structural rules against this document and `glc-unified-v2.html` before implementation. The Master Rules document governs how this document is enforced.*

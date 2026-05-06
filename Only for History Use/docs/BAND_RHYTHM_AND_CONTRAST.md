# Band rhythm and contrast (ground-level)

Canonical rules for **field-level** alternation and **in-section** typographic contrast. GLC palette tokens stay locked; this document governs **which band classes** and **type roles** to use.

## Inter-section rhythm

- Prefer a scroll sequence of **`band-dark` → (`marquee-band` or `band-light` / `band-light-field`) → `band-dark`**, so two full-width dark fields are not adjacent without a **visible tone break**.
- **Approved separators:** `marquee-band` (yellow ticker), `band-light`, `band-light-field` (CTA / frosted strip), or a section whose dominant figure is **light/canvas** (e.g. `GLServices` dark field with large near-white cards) when that read is clearly two blocks—not an unbroken charcoal plateau.
- **Avoid:** three consecutive `section-major band-dark` wrappers with only small internal tweaks and no light separator between **section roots**.

## Intra-section contrast

- Use **multiple registers:** label eyebrow, serif display with **accent fragment** (`--y` on a substring), muted body, distinct CTA or stat line. Do not run one body color for headline + paragraph + meta in the same island.
- On **`band-dark`**, long copy should usually sit in a **machined / bordered panel** and/or beside **light figure** (image, inverse cards).
- **Typography color-purpose minimum:** each section must include **at least 3 distinct typography color uses mapped to 3 distinct roles**. Baseline roles: label/eyebrow, display/headline (with accent fragment where applicable), and body/supporting copy. Optional fourth role: stat/meta/chip/CTA text.
- **Typography hard fails:** (a) heading/body/meta all sharing one dominant text color, (b) repeated color use without semantic role distinction, (c) missing accent fragment in heading patterns that define an accent-key token.

## Labs and DNA sandbox

- Layout labs (`GLServiceLayoutLab`, testimonial variant labs, `GLCDnaSandbox` lanes) may **stack dark sections** for comparison. Treat them as **non-production rhythm**; do not copy their adjacency into production stacks without applying the rules above.

## IDs and anchors (multi-lane homepage)

- **Lane A** (`app/page.tsx`) owns production anchors such as `#coverage`, `#services`, `#process`, `#testimonials`, `#about` where those components use their defaults. **Lane B** (`GLCDnaSandbox`) sections must use **namespaced** root ids (e.g. `#glc-dna-coverage`, `#glc-dna-services`) so the document never contains duplicate `id` values. In-page links in `navigation.json` stay pointed at Lane A hashes unless intentionally retargeted.

## Light figure on dark bands (prefer canvas over glass)

- Prefer **`--brand-canvas`** (`brand-canvas`) **figure** blocks on `band-dark`: hairline `g200` border, optional **`--y` left rail**, `text-ink` / `text-ink-muted` body. Avoid long-lived **`rgb(255 255 255 / 0.0x)`** “glass” slabs for primary copy; they flatten registers and read closer to generic UI than machined field craft.

## Candidate build guardrails (mandatory pre-flight)

When generating **new candidate sections** (review-only or production-intent), every section must pass all checks below before being shown for review:

1. **Three-layer minimum:** each section must include at least three compositional layers (field, figure/panel, accent/overlay/rail/watermark). Flat band + text fails immediately.
2. **Contrast correctness:** no white text on light surfaces and no ink-muted text on deep charcoal unless contrast-safe. Validate tone pairings at component level, not only section wrapper level.
3. **Typography register contrast:** each section must include at least eyebrow/label + display + body + action/stat line with visible hierarchy shifts.
3b. **Typography color-purpose coverage:** each section must satisfy 3-role color-purpose minimum (`label`, `display/accent`, `body`) and should include a fourth role (`meta/stat/chip/CTA`) when IA supports it.
4. **Asymmetry + balance:** include an offset or asymmetrical mass, but counterweight with an opposing visual anchor (panel, media, or rail) so composition remains stable.
5. **Tone-aware internals:** light/dark variants must adapt internal cards/panels, not only outer band class. “Same internals under different wrapper” is non-compliant.
6. **Pre-submit sniff test:** before shipping candidate batches, run a manual checklist pass for: `3+ layers`, `contrast`, `registers`, `balance`, `no accidental white-on-white`.

## Lane A note

- Main homepage order is defined in `app/page.tsx`. **`GLServiceAreas`** uses `surface="light"` after **`GLProcess`** so `GLProcess` (dark) → territory (light field) → `GLTestimonials` (dark) preserves rhythm without changing IA copy.

## Related

- Design structure (not palette): [`docs/design-references/README.md`](design-references/README.md)
- Agent rules: [`AGENTS.md`](../AGENTS.md)
- GLC baseline lock: [`docs/PROJECT_PRIME_DIRECTIVE_RULES.md`](PROJECT_PRIME_DIRECTIVE_RULES.md)

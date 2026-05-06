# Sequence hierarchy trial rule audit (2026-04-25)

Scope route: `app/sequence-trial/page.tsx`  
Primary component: `components/ground-level/home-review-candidates/SequenceHierarchyTrialSet.tsx`

## Intent lock

- Build mode: page-hierarchy first (not isolated section-only review).
- Rhythm requirement: strict dark/light alternation through all 10 sections.
- Interaction requirement: fully interactive behavior for Stow drawer, Blueprint wipe, and Regional map marker selection.

## Rule references applied

- `AGENTS.md` composition minimum: 3+ compositional layers per section.
- `docs/BAND_RHYTHM_AND_CONTRAST.md` inter-section rhythm and contrast sequencing.
- `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` P-VIIIe typography color-purpose coverage (label + display/accent + body).
- `docs/COMPLIANCE_EXECUTION_PLAN.md` D-2/B-VI optical balancing and D-6 mobile-aware interactive intent.

## Ordered section audit

1. `sequence-kinetic-spine-hero` — **Dark** — Pass  
   - 5:1 style display scale, fixed visual spine, and scroll-command heading plane.
2. `sequence-pedigree-ledger` — **Light** — Pass  
   - Monochrome-styled partner blocks with high-impact stats panel.
3. `sequence-service-matrix` — **Dark** — Pass  
   - 8 sub-services in asymmetric offset clustering.
4. `sequence-stow-content-block` — **Light** — Pass  
   - Sliding drawer behavior with DOM-preserved text.
5. `sequence-blueprint-reveal` — **Dark** — Pass  
   - Interactive before/after wipe slider.
6. `sequence-ink-motif-quote` — **Light** — Pass  
   - Massive obsidian quote over white canvas.
7. `sequence-technical-capabilities` — **Dark** — Pass  
   - Machined-border table pattern for specs/certs.
8. `sequence-regional-impact-map` — **Light** — Pass  
   - Stylized SVG map + interactive coordinate markers.
9. `sequence-social-proof-spine` — **Dark** — Pass  
   - Floating testimonials over parallax-like cinematic field.
10. `sequence-terminal-cta` — **Light** — Pass  
    - 70/30 optical balance with heavy contact-left, whitespace-right.

## Dark/light rhythm verification

Confirmed sequence order alternates without breaks:
Dark -> Light -> Dark -> Light -> Dark -> Light -> Dark -> Light -> Dark -> Light.

## Interaction verification checklist

- Stow drawers: open/close state changes (`useState`) by card index.
- Blueprint reveal: range-slider wipe updates split position live.
- Regional map: marker click updates active coordinate detail card.

## Notes

- Route is intentionally isolated for promotion review and does not alter current homepage composition.

# UI Interaction Rules

Portable interaction governance for Ground Level Contracting builds.  
This file defines behavior purpose, placement, and non-negotiable interaction constraints.

## Purpose

Standardize interaction systems across home, services, and detail templates so motion and UI behavior remain consistent, accessible, and conversion-safe.

## Global interaction primitives

### Hash anchor smooth-scroll with header offset

- Purpose: ensure same-page anchor navigation lands correctly beneath sticky headers.
- Rules:
  - intercept same-page `#anchor` navigation
  - apply current header offset
  - re-run on route/hash transitions

### Header scroll state + mega menu + mobile drawer

- Purpose: stabilize primary navigation behavior across desktop/mobile.
- Rules:
  - set scrolled header state after threshold
  - close on click-away/backdrop
  - lock body scroll when mobile drawer is open
  - allow only one open nav surface at a time (mega OR drawer)

### Utility text rotation

- Purpose: low-priority status messaging in utility bar.
- Rules:
  - timer-based cycling only
  - disable animation under reduced-motion preference

### Mobile nested drawer sections

- Purpose: compact, scannable nav IA on small screens.
- Rules:
  - nested groups expand/collapse predictably
  - motion is optional enhancement, never required to understand structure

## Home template interaction patterns

### Hero parallax + reveal motion

- Purpose: entry hierarchy and depth.
- Rules:
  - use scroll-based parallax by default (not cursor-follow)
  - keep CTA micro-motion subtle
  - always respect reduced-motion preference

### Marquee ticker

- Purpose: trust/service signal strip.
- Rules:
  - continuous movement allowed
  - pause on hover
  - disable under reduced-motion preference

### Featured accordion

- Purpose: flagship interactive showcase.
- Rules:
  - hover sets active card
  - pointer-reactive motif drift is optional
  - do not repeat as multiple flagship sections on one page

### About reveal + floating chip

- Purpose: restrained story emphasis.
- Rules:
  - once-per-view reveal behavior
  - decorative chip cannot carry essential meaning

### Services grid reveal

- Purpose: progressive scanability.
- Rules:
  - reveal by intersection/viewport entry
  - keep links keyboard-safe and focus-visible

### Stats count-up

- Purpose: quantitative credibility.
- Rules:
  - animate once per viewport entry
  - content must remain readable if animation is disabled

### Why stagger motion

- Purpose: ordered rationale pacing.
- Rules:
  - stagger is acceptable for sequence
  - avoid stacking with other heavy motion modules nearby

### Process timeline motion

- Purpose: reinforce step order.
- Rules:
  - motion must support sequence comprehension
  - large ghost numbers cannot compete with other nearby numeric ghosts

### Testimonials reveal

- Purpose: social proof pacing.
- Rules:
  - animate container framing before text complexity
  - text legibility always wins over animation style

### CTA interaction

- Purpose: conversion closure.
- Rules:
  - phone/email actions remain instantly available
  - accent layers remain decorative and non-blocking

## Services/detail template interaction patterns

### Services index baseline

- Purpose: browse-first route entry.
- Rules:
  - link-first interaction
  - avoid over-animating index lists

### Service page shell

- Purpose: shared interaction assembly for detail pages.
- Rules:
  - reuse common primitives consistently
  - avoid one-off interaction patterns per service unless justified

### Service hero parallax

- Purpose: service-level depth.
- Rules:
  - smooth, restrained parallax only

### Scope strip anchor nav

- Purpose: fast in-page navigation on long pages.
- Rules:
  - anchors map to real element IDs
  - must integrate with hash-offset behavior

### Parallax type band (optional)

- Purpose: rhythm break in long pages.
- Rules:
  - max one per page

### Capabilities sticky nav

- Purpose: intra-page jump navigation for long capability modules.
- Rules:
  - remains readable/usable at all breakpoints

### FAQ disclosures

- Purpose: compact Q/A scanning.
- Rules:
  - prefer semantic `details/summary`
  - disclosure behavior remains simple and predictable

## Snow-page-specific interaction

### Pointer-follow hero glow

- Purpose: one signature reactive hero effect.
- Rules:
  - max one pointer-reactive motif system per page
  - degrade gracefully for touch and reduced-motion contexts

### Accordion detail sections

- Purpose: manage long operational detail content.
- Rules:
  - headings stay descriptive
  - collapsed state remains scannable

## System-level interaction rules (portable)

1. Max one pointer-reactive system per page.
2. Max two heavy scroll-motion modules per page (hero counts as one).
3. At least 50% of sections remain motion-light/clean.
4. All animations respect reduced-motion preferences.
5. Essential content must not depend on interaction to be accessible.
6. Anchor and nav interactions must be keyboard accessible.
7. Avoid adjacent “attention grabber” modules.
8. Hover-only behavior must not be critical on touch devices.
9. Use native semantics whenever possible (`details/summary`, anchors, buttons).
10. Keep behavior consistent across home/services/detail templates.

## Keep-by-default interaction baseline

- Hash-scroll handler with header offset
- Site header with mega menu + mobile drawer coordination
- Single hero parallax system
- Single marquee strip
- Stats count-up
- FAQ semantic disclosures
- Conversion CTA action clarity

## Use-selectively modules

- Featured pointer-reactive motif drift
- Parallax type band
- Snow hero pointer-follow glow

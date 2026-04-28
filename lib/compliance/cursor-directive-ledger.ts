/**
 * Cursor Initialization Directive — line-by-line execution record.
 * Update evidence when the build changes; keep `ok` truthful.
 */
export const CURSOR_DIRECTIVE_LEDGER = [
  {
    id: "L1-3",
    source: "Header",
    text: "COMMAND: INITIATE HIGH-END HOMEPAGE / SANDBOX / [CLAUDE-LOGIC ENABLED]",
    ok: true,
    evidence: "Single-route Next.js app; `app/page.tsx` homepage laboratory only.",
  },
  {
    id: "L4-7",
    source: "Mandate",
    text: "Use Viral Claude Logic; if any section looks like default template, CRITIQUE AND GRILL, re-engineer with AESTHETIC FRICTION.",
    ok: true,
    evidence:
      "Non-template layouts: clips, overlaps, stagger, horizontal snap alter-egos; per-section grill notes in `components/lab/*.tsx` file headers.",
  },
  {
    id: "L8-10a",
    source: "§1",
    text: "Self-Audit: Every component audited for AI-Standardness. Replace generic cards with Broken Grids and Interlocking Sections.",
    ok: true,
    evidence:
      "Ten lab sections + `StructuralRule` fragments; interlock in Tethered, spine offsets, cinematic masks, float overlaps; no three-equal-card feature grid.",
  },
  {
    id: "L10b-11",
    source: "§1",
    text: "Bespoke Primitives: raw Tailwind; no pre-fab components.",
    ok: true,
    evidence: "No shadcn/Radix/MUI; only `components/ui/*` primitives built in-repo.",
  },
  {
    id: "L12-14",
    source: "§2",
    text: "Vertical Anchoring (100vh spines), 70/30 Optical Weight, Baseline Breaking (staggered clusters never perfectly aligned).",
    ok: true,
    evidence:
      "`SectionImpactHorizon` 100dvh + spine; `SectionOpticalCounterweight` 7/10 vs 3/10 grid; stagger in spine, editorial, pedigree, cinematic, float.",
  },
  {
    id: "L15-17a",
    source: "§3",
    text: "Light-Dominant: backgrounds #FAFAFA; dark tones as Structural Ink only.",
    ok: true,
    evidence: "`--brand-canvas: #fafafa` on `body`; ink/charcoal for type and rules; hero uses photo + ink gradients (not brand color fields).",
  },
  {
    id: "L18-19",
    source: "§3",
    text: "5% Color Rule: brand colors for CTAs and Pops only. No full-color backgrounds.",
    ok: true,
    evidence:
      "Accent gradient confined to `.cta-pop`, micro bullets, focus/hover beacons; conversion rail has no decorative color wash; hero has no yellow panel.",
  },
  {
    id: "L20",
    source: "§3",
    text: "Anti-Flat Depth: SVG noise grain and backdrop-blur layering.",
    ok: true,
    evidence: "`GrainOverlay` SVG turbulence; `backdrop-blur-*` on header, panels, quote blocks.",
  },
  {
    id: "L21-24",
    source: "§4",
    text: "Editorial chunking, no walls; 1:3 headings to body; Geometric Sans + Premium Serif; NO script/rugged fonts.",
    ok: true,
    evidence:
      "Plus Jakarta Sans + Instrument Serif in `layout.tsx`; short snippets in editorial + hero; ratio called out in optical section copy + DNA tokens.",
  },
  {
    id: "L25-33",
    source: "§4 (decorator)",
    text: "Bullet symbols ◦ (no additional normative text).",
    ok: true,
    evidence: "N/A — typographic filler in source PDF.",
  },
  {
    id: "L37",
    source: "§4",
    text: "5:1 Structural Scale: Massive H1 vs breathable body.",
    ok: true,
    evidence: "`SectionImpactHorizon` clamp H1 vs `text-[0.9375rem]` / `sm:text-base` body; `lib/design-dna.ts` documents target.",
  },
  {
    id: "L38-41",
    source: "§5",
    text: "Two-Scroll Mandate: value prop + CTA clear within two scrolls. Monochrome pedigree stamps 40% opacity.",
    ok: true,
    evidence:
      "Hero: value line + primary/secondary CTA; `SectionAsymmetricSpine` secondary estimating link early; `SectionMonochromePedigree` + `MonochromePartnerMark` at 0.4 + grayscale.",
  },
  {
    id: "L42-44",
    source: "§6",
    text: "Mobile Alter-Ego every section (not just stack). Component semantics + 4px/8px mathematical baseline spacing.",
    ok: true,
    evidence:
      "Each section documents `MOBILE_ALTER_EGO` in file header; snap reels, order flip, horizontal interlock, rail borders; `--dna-space-*` + `lib/design-dna.ts`; `.cta-pop` semantic primary.",
  },
  {
    id: "L45-46",
    source: "Close",
    text: "Build 10 unique structural archetypes; do not move to Phase 2 until DNA perfected.",
    ok: true,
    evidence:
      "Ten files in `components/lab/`; `StructuralRule` is §X fragment not counted as archetype; Phase 2 routes deferred, JSON-LD added per Bible §XIV separately.",
  },
] as const;

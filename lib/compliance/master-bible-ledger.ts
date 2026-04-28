/**
 * Master Project Bible (Ground Level) — clause-to-build traceability.
 */
export const MASTER_BIBLE_LEDGER = [
  {
    id: "I.a",
    clause: "Grill Me Audit — analyze for AI-standard patterns; redesign with clips, masks, z-index.",
    ok: true,
    evidence: "Polygon clips (`SectionCinematicReveal`), overlaps (`Tethered`, `Float`), watermarks, grill notes in lab files.",
  },
  {
    id: "I.b",
    clause: "Aesthetic Friction — non-standard spacing, depth, micro-interactions.",
    ok: true,
    evidence: "Staggered translates, `view-reveal` scroll timeline, header glass, interlocking margins.",
  },
  {
    id: "I.c",
    clause: "Bespoke Primitive Logic — CSS primitives, raw Tailwind, custom properties.",
    ok: true,
    evidence: "`globals.css` tokens; no external UI kit.",
  },
  {
    id: "II.a",
    clause: "Homepage Laboratory — every rule on homepage first.",
    ok: true,
    evidence: "`app/page.tsx` composes full experience.",
  },
  {
    id: "II.b",
    clause: "Zero-Creation — no root directories or secondary pages until homepage 100% approved.",
    ok: true,
    evidence: "Only `/` route; no `app/(marketing)/about` etc.",
  },
  {
    id: "II.c",
    clause: "DNA Extraction — spacing, type, interaction constants into global design system.",
    ok: true,
    evidence: "`lib/design-dna.ts`, `--dna-space-*`, semantic classes in `globals.css`.",
  },
  {
    id: "III.a",
    clause: "Decision Matrix — Pedigree / Boutique / Workhorse → proof pattern.",
    ok: true,
    evidence: "`DECISION_MATRIX` in `design-dna.ts`; rendered in `SectionMonochromePedigree`.",
  },
  {
    id: "III.b",
    clause: "Monochrome Filtering — third-party logos 40% opacity.",
    ok: true,
    evidence: "`MonochromePartnerMark` + partner list; grayscale + opacity 0.4.",
  },
  {
    id: "IV.a",
    clause: "White Canvas #FAFAFA.",
    ok: true,
    evidence: "`--brand-canvas` on body.",
  },
  {
    id: "IV.b",
    clause: "Dark Punctuation — structural ink for lines, coordinates, motifs.",
    ok: true,
    evidence: "Rules, mono coordinates footer, hero ink gradients on photo.",
  },
  {
    id: "V.a",
    clause: "5% Rule — color for CTAs and pops only, never backgrounds.",
    ok: true,
    evidence: "No accent section backgrounds; `.cta-pop` + micro accents only.",
  },
  {
    id: "V.b",
    clause: "Color as Navigation — functional beacon for conversion.",
    ok: true,
    evidence: "Header `Get a bid`, hero primary CTA, link underlines use accent sparingly.",
  },
  {
    id: "VI.a-d",
    clause: "100vh spine, offset clustering, broken grids & tethered scroll, 70/30 optical weight.",
    ok: true,
    evidence: "Hero spine; stagger throughout; snap strips; optical 7/10 grid.",
  },
  {
    id: "VII",
    clause: "Archetypes + intentional variety (no repeating layouts back-to-back).",
    ok: true,
    evidence: "Ten lab archetypes; `StructuralRule` separates spine from interlock.",
  },
  {
    id: "VIII",
    clause: "No script/rugged; geometric sans + premium serif; 5:1 H1 vs body.",
    ok: true,
    evidence: "Fonts in `layout.tsx`; hero scale per DNA.",
  },
  {
    id: "IX",
    clause: "1:3 boutique ratio; editorial chunking.",
    ok: true,
    evidence: "`SectionEditorialAtomizer` + short hero body + optical copy.",
  },
  {
    id: "X",
    clause: "Logo watermark SVG anchors; logo-derived dividers/bullets/frames.",
    ok: true,
    evidence: "`LogoWatermark`, `StructuralRule`, `FragmentBullet`, footer PNG watermark.",
  },
  {
    id: "XI",
    clause: "SVG grain; glassmorphism; machined (gradient/inner glow) borders.",
    ok: true,
    evidence: "`GrainOverlay`; backdrop blur; `.panel-machined` inset shadows.",
  },
  {
    id: "XII",
    clause: "Mobile alter-ego every section; touch/haptic scroll reveals.",
    ok: true,
    evidence: "Documented per file + snap/horizontal interlock/order shifts; `view-reveal`.",
  },
  {
    id: "XIII",
    clause: "Component semantics; strict 4px/8px baseline gaps.",
    ok: true,
    evidence: "`cta-pop` / panels; DNA spacing scale; header px-4/sm:px-6.",
  },
  {
    id: "XIV.a",
    clause: "Next.js App Router hierarchy (Phase 2 framing).",
    ok: true,
    evidence: "`app/layout.tsx`, `app/page.tsx` App Router.",
  },
  {
    id: "XIV.b",
    clause: "SEO Schema: LocalBusiness and Service JSON-LD injection.",
    ok: true,
    evidence: "`components/seo/SiteJsonLd.tsx` in `layout.tsx`.",
  },
] as const;

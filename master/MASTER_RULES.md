# GLC master rules (V7 architectural truth)

This file is the only authoritative rules source for this workspace. Assistants, automations, and contributors must treat it as governing law for layout, typography, tokens, assets, motion, and accessibility.

---
Here is the consolidated V7 Master Architectural Truth. Every single data point, Z-index layer, interaction physics parameter, and spacing token from both documents has been meticulously retained and merged.
Crucially, the Typography and Visual Hierarchy sections have been systematically updated to comply with your new readability-first label/body execution (shifting away from the muted, overline DNA to explicit, high-legibility sizing, tracking, and text-ink color mappings).
________________


Master V7 Architectural Truth & Layout Governance
This consolidated rule base represents 100% data retention from the GLFeaturedServices specification, the V6 Master Audit, and the new Asset Mandatory/Editorial Refactor policies. It incorporates structural pivots for copy volume and enforces the updated readability-first typography DNA.
1. Layout & Grid Logic (Structural Pivots & DOM)
The layout is reactive to copy volume and utilizes a layered Z-order stack to maintain interaction clarity and atmospheric depth.
Layer Stack (Z-Order)
* Level -1: Atmosphere — ClaudeLogicWatermark (low opacity), ambient motifs (0.18 opacity, rotated), absolute tonal gradient planes.
* Level 0: Base Canvas — section-major root, band-light tonal drift, or dark "blueprint" field with linear gridlines.
* Level 1: Substrate — Absolute gradient wash (absolute inset-0), image scrims, or dark image veils.
* Level 2: Structural Accents — Top/side rails, 4px yellow accent borders, 1px section dividers, and grid seams.
* Level 10+: Interaction Plane — relative z-10 foreground, bespoke-surface, panel-machined raised panels, and content shells.
The "Two-Sentence" Pivot (Volume Rules)
* $\leq$ 2 Sentences: Use the Standard Header Stack (max-w-2xl, centered or left-aligned with pl-5 spine).
* > 2 Sentences: Mandatory refactor to Split-Column/Asymmetric Structure. Copy must be broken into a grid-cols-12 layout where text occupies a 6-column measure to maintain readability (the "Measure Safety" rule).
Compositional Strategies
* Container Logic: mx-auto max-w-[min(100%,var(--max))] (1440px/1200px cap). Gutters: 28px $\rightarrow$ 40px $\rightarrow$ 80px.
* Header Cluster: max-w-2xl measure with pl-5 left accent border (4px yellow spine).
* Raised Panel: bespoke-surface panel-machined with asymmetric offset at lg (lg:ml-[var(--dna-stagger-sm)]). This creates visual "offsets" preventing eye fatigue on long horizontal lines.
* Responsive Splits: Mobile flex-col $\rightarrow$ md:flex-row 50/50 split for featured sections.
* Stateful Rails: Horizontal strips with stateful widths (Active: 400px / Inactive: 60px).
________________


2. Tonal Rhythm & Contrast (alternation, dark/light thresholds, seam)
Sections must never exist in a vacuum; they must follow the Chromatic Transition Rule.
* Alternation: Sections must alternate between band-dark-field and band-light-drift. Two consecutive sections of the same tone are considered a "Visual Flatline."
* Dark/light thresholds: band-dark-field carries high-authority and technical clusters (text-white/90, backdrop-blur-md glass); band-light-drift carries editorial and longform (--text-600 used sparingly; text-ink for labels/body per Typography Architecture below). Each band must meet contrast intent before the next tonal shift.
* Dark Sections (--ink): Used for high-authority, hero, and technical data clusters. Requires text-white/90 and backdrop-blur-md glass panels.
* Light Sections (--white): Used for editorial, longform narrative, and case studies. Requires sharp contrast with --text-600 and high-fidelity raster anchors.
* Seam: Use a 1px section divider or a 4px yellow accent rail at the transition point to define the break between tonal shifts.
________________


3. Content Mapping & Governance
This section ensures the "Mapping" of data to the DOM is contextually appropriate.
Copy Volume
	Component Mapping
	Structural Requirement
	Eyebrow + 1 Sentence
	GLFeaturedServices Header
	max-w-2xl center-stack.
	2-3 Sentences
	GLFeaturedServices + Intro Block
	pl-5 accent spine + mt-7 release.
	Narrative/Longform
	GLSplitSection or GLNarrative
	Mandatory 50/50 split or staggered multi-panel layout.
	Tabbed Details
	GLServicePanel
	Content must be bulleted or broken into <ExpandableCopy/> if over 40 words.
	________________


4. Mandatory Asset Logic (Rule: Always Visual)
* Default State: All sections MUST contain a visual asset (Raster Image, Vector Motif, or Video Scrim) unless explicitly flagged with disableAssets: true.
* Presence Rule: A section without an image is considered "Incomplete DNA."
* Asset Treatment:
   * Primary: High-fidelity raster with object-cover and mix-blend-overlay (if background).
   * Secondary: ClaudeLogicWatermark at 0.18 opacity as a structural "texture" in the Z-minus-1 layer.
   * Tertiary: 40x40px SVG icons in currentColor for micro-interactions.
* Anchor Requirement: If copy exceeds 2 sentences, the image must move from "decorative background" to a "compositional anchor" (e.g., a side-car image or a floating panel-machined asset).
________________


5. Spacing System (Master Token Map)
Category
	Token / Value
	Usage
	Macro Rhythm
	--s14 / --section-v / 96px
	Primary vertical section block padding.
	Macro Rhythm
	--s12 / 80px
	Global inset (LG) / Maximum frame scaling.
	Macro Rhythm
	--s9
	Responsive vertical section padding.
	Section Flow
	60px
	Heading-to-Asset, Heading-to-Panel, or Services header-to-grid breathing zone.
	Section Flow
	--s7 / 56px
	Deliberate copy release (Heading $\rightarrow$ Intro).
	Splits
	gap-12 (48px)
	Editorial column separation.
	Global Inset
	40px / 28px
	Master Gutter Hierarchy (MD/SM) / Card padding progression.
	Panel/Card
	32px
	Stats cell desktop padding / Card inset.
	Breakpoints
	px-4 sm:px-6
	Inner content wrapper / Second-tier gutter.
	Gap System
	mt-10 / sm:mt-12
	Header $\rightarrow$ Panel lift separation.
	Gap System/Tension
	mt-8 (32px)
	Required gap between paragraph breaks in longform; Component block gap.
	Exit Logic
	mt-8 (32px)
	Section-exit CTA offset.
	Gap System
	24px
	CTA margin / Link top margin.
	Micro Rhythm
	20px
	Icon bottom; Number right; Rail padding.
	Micro Rhythm
	12px
	Title bottom; Stat label top margin.
	Micro Rhythm
	8px / 4px
	Inline gap; Micro-spacing for icons and links.
	Surfaces
	p-5 / sm:p-8 / lg:p-10
	Interactive surface density scaling.
	________________


6. Typography Architecture (Readability-First DNA)
Updates applied: Shifted away from text-ink-muted and label-overline to explicit, high-legibility sizing, tracking, and contrast.
Display & Headings (Oswald Mapping / Serif)
* 3-Act Headline: clamp(58px, 8vw, 118px). Weight: 200/600/700. Tracking: -0.02em.
* Stat Number: clamp(52px, 5vw, 80px). Weight: 700. Tracking: -0.04em.
* Card Number: 64px. Weight: 700. Tracking: -0.04em.
* Section H2: text-3xl $\rightarrow$ sm:text-4xl (clamp(36px, 3.5vw, 52px)). Weight: 600. Tight leading/tracking. Uppercase.
* Card Title / Panel H3: 20px (text-xl $\rightarrow$ sm:text-2xl). Weight: 700. Tracking: 0.02em. Uppercase.
Metadata & Labels (Readability Execution)
* Section Labels & Eyebrows (e.g., READY TO BUILD?): font-label text-[11px] font-bold tracking-[0.14em] text-ink. (Replaces old label-overline and text-ink-muted).
* Side Label: 9px. Weight: 800. Tracking: 0.22em. Uppercase.
* Tab Labels: font-label text-[11px] font-bold tracking-[0.14em] text-ink (Upgraded from 10px weight 600).
* CTA Primary: 12px or 13px. Weight: 700/800. Tracking: 0.08em to 0.14em. Uppercase.
* Stat Label: font-label text-[11px] font-bold tracking-[0.14em] text-ink (Replaces old 10px 0.18em tracking).
Longform & UI Copy (Readability Execution)
* Intro / Body Paragraphs: text-[15px] leading-[1.72] text-ink sm:text-base. (Replaces old text-sm leading-relaxed text-ink-muted). 15px is the absolute floor for readability.
* Card Desc: Upgraded to align with body standards: text-[15px] leading-[1.72] text-ink.
________________


7. Interactive DNA & Physics
* Reveal Stages: Staggered viewport entrance (0.5 threshold): 0s (BG) $\rightarrow$ 0.4s (Eyebrow) $\rightarrow$ 0.5s-0.8s (Headline) $\rightarrow$ 1.15s (Caption) $\rightarrow$ 1.9s (CTA).
* Section Reveal / Entrance: view-reveal-up (0.65s, cubic-bezier(0.16,1,0.3,1), translateY 16$\rightarrow$0). If an image is present, it uses a 0.2s parallax lag relative to the text to create depth.
* pivot-expand-reveal: 0.85s; 50% slide (from origin); 1.02× X-axis scale tension.
* Accordion Physics: 700ms width expansion; 220ms motif parallax drift. --ease-expo.
* Tab System: role="tablist" with per-tab selected inversion. Uses [hidden] toggling for panels.
* Count-Up: 1800ms cubic-out; triggered at 0.5 viewport threshold.
* Tactile States: .cta-primary uses lift/press (0.2s envelope). Hover translateY(-2px), arrow translateX(4px), brightness +10%.
________________


8. Visual Hierarchy & Palette
* Colors:
   * --yellow-core (--y): #f2b705
   * --charcoal-deep (--ink): #1e1c1a (Now the dominant color for body and labels, removing muted fatigue).
   * --white: #ffffff
   * --text-600: #6b6560 (Used sparingly, no longer the default for labels/body).
* Tri-Tonal Logic (applied across Dark and Light sections): Regardless of background tone, every area must use three distinct typographic color treatments to establish depth.
   * Primary (high-impact headings / stats): Dark field (--ink band) — pure white (#ffffff) or Yellow Core (#f2b705). Light drift (--white band) — Charcoal Deep (#1e1c1a).
   * Secondary (body copy / ledes): Dark field — text-white/90. Light drift — --text-600 (#6b6560).
   * Tertiary (metadata / labels / eyebrows): Dark field — text-white/55. Light drift — text-400 / muted slate.
* Hero Metrics Cluster: For the "Authority" look, apply the three-color rule strictly to the metrics row — (1) Color 1 (primary accent): Yellow Core on the numeric value (e.g. 15+), the hook; (2) Color 2 (secondary support): text-white/90 on the stat label (e.g. Years of Field Experience), the context; (3) Color 3 (tertiary metadata): text-white/55 on the coverage / overline (e.g. SERVICE COVERAGE — BARRIE…), technical texture without competing for attention.
* Rhythm Directive (Dark vs Light): Dark sections ("Authority" pulse) — high-contrast transition Yellow $\rightarrow$ text-white/90 $\rightarrow$ text-white/55 (machined, industrial). Light sections ("Editorial" pulse) — Charcoal Deep $\rightarrow$ --text-600 $\rightarrow$ muted slate (maximum longform readability; sophisticated, not stark).
* Master V7 — Color & contrast truth: Rule of Three — every section must use a minimum of three distinct typographic color tokens. The Anchor — high-contrast (Yellow or Deep Charcoal) for values and titles. The Narrative — mid-contrast for body text. The Texture — low-contrast (55% white on dark, or muted slate on light) for metadata and technical overlines.
* Depth: .bespoke-surface + .panel-machined (machined multi-inset shadow, backdrop-filter depth, micro-grain pseudo-layer).
* Glass Panel: bg-[rgb(10,12,11,0.45)], backdrop-blur-md, 1px border white/10.
* Borders: 4px yellow accent rails; 1px top seams (var(--g200)); 1px section dividers.
* Shape: Sharp industrial edges (--radius: 0 baseline).
________________


9. Accessibility & Asset Constraints
* Alt Text: Mandatory for all primary assets.
* A11y Semantics: role="tablist/tab/tabpanel", aria-selected, aria-controls, aria-labelledby, roving tabindex.
* Tap Targets: 44px minimum for all interactive elements (tabs/links).
* Asset Logic: Inline SVG icons (currentColor, 40x40). Raster images with object-cover.
* Line Clamp: Tab titles use line-clamp-2 on small viewports.
* Typographic Measure: Longform body copy must never exceed 75 characters per line to maintain readability.
* Visibility: Decorative motifs and watermarks set to aria-hidden.
* Performance: prefers-reduced-motion kills all count-ups, marquee motion, and parallax transforms.
________________


Audit Summary: V7 Architectural Truth
* Refactor Trigger: Any paragraph > 2 sentences forces a structural layout change.
* Asset Default: Assets = TRUE.
* Tonal alternation: Enforce dark/light band rhythm (band-dark-field / band-light-drift); respect thresholds and seams per Tonal Rhythm & Contrast; avoid consecutive same-tone sections ("Visual Flatline").
* Mapping: Copy volume dictates the component selection (Stack vs. Split).
* Typography: The system strictly utilizes text-ink for high-contrast, readability-first label/body execution, deprecating small muted overlines.
Portable Blueprint: GLHeroMetricsCoverageBlock.tsx
TypeScript
import React from 'react';
import Link from 'next/link'; // Retained per Dependency DNA


// 1. Data DNA (Required Content Shape)
export interface GLHeroStat {
  value: string;
  label: string;
}


export interface GLHeroMetricsCoverageBlockProps {
  stats: GLHeroStat[];
  serviceCoverageLabel: string;
  serviceChips?: string[];
  className?: string; // Allows for external positioning (e.g., mt-8)
}


export const GLHeroMetricsCoverageBlock: React.FC<GLHeroMetricsCoverageBlockProps> = ({
  stats,
  serviceCoverageLabel,
  serviceChips = [],
  className = '',
}) => {
  return (
    // 2. Visual/Material DNA (The Dark Glass Shell)
    // Encapsulates the required translucent backdrop, shadow, and border context
    <div className={`relative z-10 w-full max-w-2xl rounded-sm border border-white/10 bg-[rgb(10,12,11,0.45)] p-6 shadow-2xl backdrop-blur-md sm:p-8 ${className}`}>
      
      {/* 3. DOM/Structure DNA (Yellow Rule Divider) */}
      <div className="mb-6 h-[1px] w-full bg-[#f2b705]/80" aria-hidden="true" />


      {/* 4. DOM & Typography DNA (Stats Row) */}
      {/* Inherits hero choreography and technical white/90 styling */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <span className="text-[1.25rem] font-bold tracking-[-0.04em] text-[#f2b705]">
              {stat.value}
            </span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>


      {/* 5. DOM & Typography DNA (Coverage Label) */}
      {/* Technical overline DNA: font-label, tracking, low contrast */}
      <div className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-white/55">
        {serviceCoverageLabel}
      </div>


      {/* 6. DOM DNA (Service Chips Row) */}
      {serviceChips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceChips.map((chip, index) => (
            <span
              key={index}
              className="rounded border border-white/20 bg-white/5 px-2 py-1 font-label text-[10px] uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/10"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};


Required Globals Checklist (Integration Verification)
Before dropping this into a new page, verify the environment has the following tokens active in app/globals.css or Tailwind config:
* font-label: Mapped to Barlow Condensed (or your chosen Sans-Serif utility).
* bg-[rgb(10,12,11,0.45)]: The specific "charcoal-deep" / dark field atmospheric value.
* text-[#f2b705]: The var(--yellow-core) accent token.
* .hero-stage: If this component relies on staggered entrance animations, the parent container must possess this class to trigger the nested view-reveal logic.

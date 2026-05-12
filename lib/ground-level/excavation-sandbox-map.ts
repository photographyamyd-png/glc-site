import type { CopyLabStatsContent } from "@/components/ground-level/home-copy-lab/CopyLabStats";
import type { GLCtaBandContent } from "@/components/ground-level/GLCtaBand";
import type { GLDifferenceContent } from "@/components/ground-level/GLDifference";
import type { GLFeaturedServicesContent } from "@/components/ground-level/GLFeaturedServices";
import type { GLHeroContent } from "@/components/ground-level/GLHero";
import type { GLProcessContent } from "@/components/ground-level/GLProcess";
import type { GLServiceAreasContent } from "@/components/ground-level/GLServiceAreas";
import type { GLTestimonialsBlockContent } from "@/components/ground-level/GLTestimonials";
import type { GLWhoWeServeContent } from "@/components/ground-level/GLWhoWeServe";
import { COPY_LAB_HERO, COPY_LAB_MARQUEE_ITEMS } from "@/lib/ground-level/home-copy-lab-content";
import { CTA_BAND, EMAIL_MAILTO, MARQUEE_PHRASES, PHONE_TEL, SERVICES_GRID } from "@/lib/ground-level/homepage-copy";
import { GROUND_LEVEL_SERVICES, type GroundLevelService } from "@/lib/ground-level/services";
import { HOME_COPY, SERVICE_DETAILS } from "@/lib/site/copy";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

/**
 * Excavation route — copy helpers for hero/marquee/CTA. Article flow:
 * pain → solution → proof gallery → yellow conversion CTA → SEO basement → related.
 */

/** Same ticker phrases as copy-lab / sandbox-approved marquee pool. */
export const excavationMarqueeItems: readonly string[] = COPY_LAB_MARQUEE_ITEMS;

function stripOuterQuotes(s: string): string {
  let t = s.trim();
  if (t.startsWith('"') && t.endsWith('"')) t = t.slice(1, -1);
  return t.trim();
}

export function excavationHeroContent(): GLHeroContent {
  const h = detail.hero;
  return {
    eyebrow: "Commercial excavation & site preparation",
    titleLine1: "Precision",
    titleLine2: "Digging for Complex",
    titleLine3: "Projects.",
    lede: h.lede,
    /** Structured for marketing hero metrics (yellow value + white eyebrow label). */
    stats: detail.hubStats.map((s) => ({ value: s.value, label: s.label })),
    /** Matches HomeHero: eyebrow line only; chips come from `serviceShortcuts`. */
    serviceCoverageLabel: HOME_COPY.hero.coverageLabel,
    serviceShortcuts: COPY_LAB_HERO.serviceShortcuts.map((x) => ({ label: x.label, slug: x.slug })),
    primaryCta: { label: "Call now", href: PHONE_TEL },
    secondaryCta: { label: "Get free quote", href: "/contact/" },
    marqueePhrases: [...MARQUEE_PHRASES],
  };
}

export function excavationWhoWeServeContent(): GLWhoWeServeContent {
  const signals = detail.ctaOverride.trustSignals ?? [];
  const hs = detail.hubStats;
  return {
    eyebrow: detail.scopeStripLabels[0] ?? "Overview",
    heading: `${detail.scopeStripLabels[1] ?? "Scope"} — ${detail.deliverablesHeading}`,
    body: detail.intro.join("\n\n"),
    credentials: detail.deliverables.map((d) => d),
    cta: { label: detail.ctaOverride.buttonLabel, href: "/contact/" },
    mediaStat: hs[0] ? `${hs[0].value} ${hs[0].label}` : "",
    badge: signals[0] ?? "Licensed & insured",
    imageAlt: "Excavator on a commercial excavation site",
    imageSrc: "/images/services/Excavation/excavation-016.jpg",
  };
}

export function excavationCopyLabStatsContent(): CopyLabStatsContent {
  return {
    eyebrow: "Operations snapshot",
    heading: "Field metrics",
    metrics: detail.hubStats.map((m) => ({
      value: m.value,
      label: m.label,
      sub: m.sub,
    })),
    imageSrc: "/images/services/Excavation/excavation-008.jpg",
    imageAlt: "Excavation equipment on active commercial site in Simcoe County",
  };
}

export function excavationCapabilitiesRailProps(): {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  services: readonly GroundLevelService[];
} {
  return {
    eyebrow: SERVICES_GRID.eyebrow,
    titleLine1: SERVICES_GRID.heading.split(/\s+/)[0] ?? "Service",
    titleLine2: SERVICES_GRID.heading.split(/\s+/).slice(1).join(" ") ?? "lines",
    intro: detail.intro.join("\n\n"),
    services: GROUND_LEVEL_SERVICES.filter((s) => s.slug !== "excavation-site-preparation"),
  };
}

function subServiceReasons() {
  return detail.subServices.map((sub, i) => ({
    index: String(i + 1).padStart(2, "0"),
    title: sub.heading,
    body: [...sub.paragraphs, sub.closing].join("\n\n"),
  }));
}

export function excavationDifferenceContent(): GLDifferenceContent {
  const signals = detail.ctaOverride.trustSignals ?? [];
  return {
    eyebrow: detail.scopeStripLabels[2] ?? "Capabilities",
    heading: detail.trust.heading,
    body: detail.trust.paragraphs.join("\n\n"),
    reasons: subServiceReasons(),
    ctaLabel: "Call now",
    ctaHref: PHONE_TEL,
    chipLine1: signals[3] ?? signals[0] ?? "",
    chipLine2: signals[4] ?? signals[1] ?? "",
    imageSrc: "/images/services/Excavation/excavation-004.jpg",
    imageAlt: "Commercial excavation and earthworks site preparation",
  };
}

export function excavationProcessContent(): GLProcessContent {
  return {
    eyebrow: detail.process.eyebrow,
    heading: detail.process.heading,
    intro: detail.hero.body[4],
    steps: detail.process.steps.map((step) => ({
      index: step.id,
      title: step.title,
      body: step.body,
    })),
  };
}

export function excavationServiceAreasContent(): GLServiceAreasContent {
  return {
    eyebrow: HOME_COPY.coverage.eyebrow,
    heading: HOME_COPY.coverage.heading,
    headingAccentKey: "Simcoe County",
    body: detail.hero.body[2],
    areas: HOME_COPY.coverage.areas.map((a) => a.label),
  };
}

export function excavationTestimonialsContent(): GLTestimonialsBlockContent {
  const t = HOME_COPY.testimonials;
  const entries = t.quotes.map((q) => ({
    quote: stripOuterQuotes(q.quote),
    attribution: q.by,
  }));
  return {
    eyebrow: t.eyebrow,
    headline: t.heading,
    intro: t.sub,
    entries,
  };
}

export function excavationClosingCtaContent(): GLCtaBandContent {
  return {
    eyebrow: CTA_BAND.eyebrow,
    heading: detail.ctaOverride.heading,
    headingAccentKey: detail.ctaOverride.heading.includes("Site") ? "Site" : CTA_BAND.headingAccentKey,
    sub: detail.ctaOverride.supporting,
    phoneLabel: CTA_BAND.phoneLabel,
    phoneHref: PHONE_TEL,
    emailCta: CTA_BAND.emailCta,
    emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent("Excavation & site preparation inquiry")}`,
  };
}

export function excavationRelatedFeaturedContent(): GLFeaturedServicesContent {
  return {
    eyebrow: "Related",
    heading: "Other / Service Lines",
    intro:
      "Explore adjacent service lines that pair with excavation — grading, foundations, drainage, and hauling on commercial programs.",
    cta: "All services",
    ctaHref: "/services/",
  };
}

/** Conversion funnel — pain band (asymmetric + asset anchor). */
export const excavationPainCopy = {
  eyebrow: "The cost of guessing",
  headingLine1: "Digging blind costs",
  headingAccent: "thousands.",
  bodyParas: [
    "Utility strikes, undocumented locates, and rushed trench walls turn a single day into a week of insurance calls and re-design.",
    "Poor soil management — mixing organics into structural lifts, skipping moisture checks, or hauling without a balanced cut-fill plan — shows up as settlement, heave, and failed compaction tests.",
    "Without survey-tied precision, pads drift, footings miss line, and trades stack delay on delay. You need operators who read the plan set like a control document, not a suggestion.",
  ],
} as const;

/** Conversion funnel — solution feature list + icon labels. */
export const excavationSolutionFeatures = [
  {
    title: "Laser- & GPS-guided grading",
    body: "Machine control tied to survey models keeps pads, trenches, and finish corridors inside tolerance so the next trade inherits a true surface.",
  },
  {
    title: "Heavy excavator capability",
    body: "Deep structural digs, mass rock handling, and production trenching with the reach and power your schedule assumes — not rental-store guesswork.",
  },
  {
    title: "Utility discipline & spoils control",
    body: "Coordinated daylighting, benching, and export/import sequencing so corridors stay safe and inspectors see intent, not improvisation.",
  },
] as const;

/** Proof gallery — captions / editorial line. */
export const excavationProofGalleryEyebrow = "Field proof";
export const excavationProofGalleryHeading = "Clean footings. Tight trenches.";
export const excavationProofGallerySub =
  "Tight shots from active commercial digs — structural lines held, spoils managed, and turnover ready for forming.";

/** High-contrast conversion strip before SEO basement. */
export function excavationYellowConversionCtaContent() {
  return {
    eyebrow: "Mobilization",
    heading: "Book your site prep window",
    supporting: detail.ctaOverride.supporting,
    primaryLabel: "Book Your Site Prep",
    primaryHref: "/contact/" as const,
    phoneLabel: CTA_BAND.phoneLabel,
    phoneHref: PHONE_TEL,
    emailCta: CTA_BAND.emailCta,
    emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent("Excavation & site preparation inquiry")}`,
  };
}

export function excavationRelatedServices(): readonly GroundLevelService[] {
  return GROUND_LEVEL_SERVICES.filter((s) => s.slug !== "excavation-site-preparation");
}

export const excavationFaqItems = detail.faq;

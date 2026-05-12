import type {
  AboutProps,
  AccordionContentItem,
  CoverageProps,
  CtaBandProps,
  HeroProps,
  MegaMenuCard,
  ProcessProps,
  ServicesSectionProps,
  WhyProps,
} from "@/lib/glc-dna/types";
import type { ServiceDetailCopy } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";
import { SERVICE_SLUGS } from "@/lib/glc-dna/routes";
import navigation from "@/lib/glc-dna/navigation.json";
import { CTA_BAND, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/ground-level/homepage-copy";

const SERVICE_AREA_BODY =
  "Ground Level Contracting serves Barrie, Midland, Orillia, and surrounding Simcoe County municipalities with commercial-focused dispatch and reliable field coordination.";

const HAULING_WHY_TITLES = ["Throughput", "Interfaces", "Dispatch clarity", "Site proof"] as const;

type MegaNavCard = (typeof navigation.megaMenu.cards)[number];

function megaCardForSlug(slug: string): MegaMenuCard | null {
  const c = navigation.megaMenu.cards.find((x: MegaNavCard) => x.slug === slug);
  if (!c) return null;
  return {
    slug: c.slug,
    num: c.num,
    title: c.title,
    description: c.description,
    gridTitle: [...c.gridTitle],
    gridDescription: c.gridDescription,
  };
}

function serviceBarFromNav(): Array<{ slug: string; title: string }> {
  return SERVICE_SLUGS.map((slug) => {
    const card = navigation.megaMenu.cards.find((c: MegaNavCard) => c.slug === slug);
    return { slug, title: card?.title ?? slug };
  });
}

export type HaulingGlcDnaLaneProps = {
  hero: HeroProps;
  scopeAbout: AboutProps;
  fieldGrid: ServicesSectionProps & { cards: MegaMenuCard[] };
  midCta: CtaBandProps;
  why: WhyProps;
  process: ProcessProps;
  faqAccordion: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    cta: { label: string; href: string };
    items: AccordionContentItem[];
  };
  coverage: CoverageProps;
  relatedGrid: ServicesSectionProps & { cards: MegaMenuCard[] };
  finalCta: CtaBandProps;
};

export function buildHaulingGlcDnaLaneProps(input: {
  detail: ServiceDetailCopy;
  serviceTitle: string;
  related: ServiceDef[];
  heroImageSrc: string;
  heroImageAlt: string;
  proofImage: { src: string; alt: string } | null;
}): HaulingGlcDnaLaneProps {
  const { detail, serviceTitle, related, heroImageSrc, heroImageAlt, proofImage } = input;

  const titleBefore = detail.hero.titleBefore.trim();
  const tbParts = titleBefore.split(".").map((s) => s.trim()).filter(Boolean);
  const line1 = tbParts[0] ? (tbParts[0].endsWith(",") ? tbParts[0].slice(0, -1) : tbParts[0]) : "Hauling";
  const line2 = tbParts[1] ?? "Clear timelines";
  const line3 = detail.hero.titleEmphasis.replace(/\.\s*$/, "").trim();

  const lede =
    detail.hero.body?.length && detail.hero.body[0]
      ? `${detail.hero.lede} — ${detail.hero.body[0]}`
      : detail.hero.lede;

  const hub = detail.hubStats;
  const stats = hub.slice(0, 3).map((s) => ({
    value: s.value,
    label: [s.label, s.sub].filter(Boolean).join(" · "),
  }));

  const hero: HeroProps = {
    eyebrow: "Commercial hauling & site logistics",
    title: {
      line1,
      line2: line2 + (titleBefore.includes(".") ? "." : ""),
      line3,
      emphasizeLine: 3,
    },
    subheadline: undefined,
    lede,
    primaryCta: { label: detail.ctaOverride.buttonLabel, href: "/contact/" },
    secondaryCta: { label: "View service scope", href: "#scope" },
    stats,
    coverage: { label: "Service coverage", tags: ["Barrie", "Midland", "Orillia", "Simcoe County"] },
    serviceBarSlugTitles: serviceBarFromNav(),
    parallaxBackgroundImage: heroImageSrc,
    sectionId: "overview",
    photoPanelImageSrc: proofImage?.src ?? heroImageSrc,
    photoPanelImageAlt: proofImage ? `${proofImage.alt} — ${serviceTitle}` : heroImageAlt,
  };

  const mediaStat = hub[0]
    ? { value: hub[0].value, label: [hub[0].label, hub[0].sub].filter(Boolean).join(" ") }
    : { value: "15+", label: "Years field experience" };

  const credentials = detail.deliverables.slice(0, 4).map((d) => ({
    title: d,
    sub: "Commercial demolition and active civil sites.",
  }));

  const scopeAbout: AboutProps = {
    eyebrow: "Service overview",
    headingBefore: "Scope ",
    headingAccent: "and delivery",
    headingAfter: "",
    body: detail.intro.join(" "),
    credentials,
    cta: {
      label: detail.ctaOverride.buttonLabel,
      href: "/contact/",
    },
    mediaStat,
    badgeText: "Haul",
    photoUrl: proofImage?.src ?? heroImageSrc,
    photoAlt: proofImage?.alt ?? heroImageAlt,
    sectionId: "scope",
  };

  const fieldCards: MegaMenuCard[] = detail.subServices.slice(0, 3).map((s, i) => ({
    slug: `hauling-field-${s.id}`,
    num: `0${i + 1}`,
    title: s.heading,
    description: s.closing,
    gridTitle: [s.heading],
    gridDescription: s.paragraphs[0] ?? s.closing,
    href: "#seo-technical-basement",
  }));

  const midHeading = detail.ctaOverride.heading.trim();
  const midWords = midHeading.split(/\s+/);
  const midEmphasis = midWords.pop() ?? "";
  const midLine2Word = midWords.pop() ?? "";
  const midLine1 = midWords.join(" ");

  const closing = detail.closingHeading.trim();
  const closingWords = closing.split(/\s+/);
  const closingEmphasis = closingWords.pop() ?? "";
  const closingLine2Word = closingWords.pop() ?? "";
  const closingLine1 = closingWords.join(" ");

  const fieldGrid: ServicesSectionProps & { cards: MegaMenuCard[] } = {
    eyebrow: "Service breakdown",
    headingLine1: detail.deliverablesHeading,
    headingLine2: "",
    intro:
      "Pressure signals we clear before they cost you a day — tri-axle and dump fleets aligned to gate rules and clearing milestones.",
    cards: fieldCards,
  };

  const midCta: CtaBandProps = {
    eyebrow: CTA_BAND.eyebrow,
    headingLine1: midLine1,
    headingLine2: midLine2Word ? `${midLine2Word} ` : "",
    headingEmphasis: midEmphasis,
    sub: detail.ctaOverride.supporting,
    phoneLabel: CTA_BAND.phoneLabel,
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_TEL,
    emailCta: {
      label: CTA_BAND.emailCta,
      href: `${EMAIL_MAILTO}?subject=${encodeURIComponent(`${serviceTitle} service inquiry`)}`,
    },
  };

  const trustParas = detail.trust.paragraphs.slice(0, 4);
  const reasons = trustParas.map((text, i) => ({
    num: `0${i + 1}`,
    title: HAULING_WHY_TITLES[i] ?? `Reason ${i + 1}`,
    text,
  }));

  const floatChip = hub[1]
    ? { line1: `${hub[1].value} ${hub[1].label}`.trim(), line2: hub[1].sub }
    : { line1: "Hours saved", line2: "Fewer idle crews" };

  const why: WhyProps = {
    eyebrow: "Why GLC",
    headingBefore: "",
    headingEmphasis: detail.trust.heading,
    headingAfter: "",
    body: detail.hero.lede,
    reasons,
    cta: { label: detail.ctaOverride.buttonLabel, href: "/contact/" },
    floatChip,
    sectionId: "why-glc",
  };

  const ph = detail.process.heading;
  const dashIdx = ph.indexOf(" — ");
  const processHeadingMain = dashIdx >= 0 ? ph.slice(0, dashIdx).trim() : ph.trim();
  const processHeadingAccent = dashIdx >= 0 ? ph.slice(dashIdx).trim() : "";

  const process: ProcessProps = {
    eyebrow: detail.process.eyebrow,
    heading: processHeadingMain,
    headingAccent: processHeadingAccent,
    intro:
      "We sequence trucks, stockpiles, and documentation so clearing milestones stay tied to your superintendent’s plan — without surprise no-shows at the gate.",
    steps: detail.process.steps.map((s) => ({
      num: s.id,
      title: s.title,
      desc: s.body,
    })),
    sectionId: "process",
    processHeadingId: "process-heading",
  };

  const faqImages = [heroImageSrc, proofImage?.src ?? heroImageSrc, heroImageSrc];
  const faqItems: AccordionContentItem[] = detail.faq.map((item, i) => ({
    id: i + 1,
    title: item.q,
    imageUrl: faqImages[i % faqImages.length] ?? heroImageSrc,
  }));

  const faqAccordion = {
    eyebrow: "FAQ",
    headingLine1: "Common",
    headingLine2: "questions",
    intro:
      "Quick answers above the fold. Procurement-ready notes, full capability copy, and the complete FAQ live in Technical Specifications & Project FAQ at the bottom of this page (#seo-technical-basement) — same content, organized for bid teams.",
    cta: { label: "Email dispatch", href: `${EMAIL_MAILTO}?subject=${encodeURIComponent("Hauling FAQ follow-up")}` },
    items: faqItems,
  };

  const coverage: CoverageProps = {
    eyebrow: "Service area",
    headingBefore: "Barrie ",
    headingEmphasis: "and Simcoe County",
    headingAfter: " coverage",
    body: SERVICE_AREA_BODY,
    areas: [
      { name: "Barrie", sub: "Core dispatch" },
      { name: "Midland", sub: "Commercial corridors" },
      { name: "Orillia", sub: "Urban interfaces" },
      { name: "Innisfil", sub: "Growth corridors" },
      { name: "Wasaga Beach", sub: "Seasonal demand" },
      { name: "Simcoe County", sub: "Regional reach" },
    ],
  };

  const relatedCards: MegaMenuCard[] = related
    .map((r) => megaCardForSlug(r.slug))
    .filter((c): c is MegaMenuCard => Boolean(c))
    .slice(0, 3);

  const relatedGrid: ServicesSectionProps & { cards: MegaMenuCard[] } = {
    eyebrow: "Related services",
    headingLine1: "Adjacent",
    headingLine2: "service lines",
    intro: "Excavation, grading, drainage, and winter operations pair with disciplined hauling on commercial sites.",
    cards: relatedCards.length
      ? relatedCards
      : (navigation.megaMenu.cards as MegaNavCard[]).slice(0, 3).map((c) => ({
          slug: c.slug,
          num: c.num,
          title: c.title,
          description: c.description,
          gridTitle: [...c.gridTitle],
          gridDescription: c.gridDescription,
        })),
  };

  const finalCta: CtaBandProps = {
    eyebrow: "Request site visit",
    headingLine1: closingLine1,
    headingLine2: closingLine2Word ? `${closingLine2Word} ` : "",
    headingEmphasis: closingEmphasis,
    sub: detail.ctaOverride.supporting,
    phoneLabel: CTA_BAND.phoneLabel,
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_TEL,
    emailCta: {
      label: CTA_BAND.emailCta,
      href: `${EMAIL_MAILTO}?subject=${encodeURIComponent(`${serviceTitle} site visit`)}`,
    },
  };

  return {
    hero,
    scopeAbout,
    fieldGrid,
    midCta,
    why,
    process,
    faqAccordion,
    coverage,
    relatedGrid,
    finalCta,
  };
}

export { SERVICE_AREA_BODY };

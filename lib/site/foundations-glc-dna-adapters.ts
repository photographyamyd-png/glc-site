import {
  EMAIL_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/ground-level/homepage-copy";
import type {
  CtaBandProps,
  MegaMenuCard,
  ProcessProps,
  ServicesSectionProps,
  StatCellProps,
  StatsProps,
  WhyProps,
} from "@/lib/glc-dna/types";
import {
  FOUNDATIONS_HUB_PAIN,
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_HUB_PROOF,
  FOUNDATIONS_HUB_QUALITY_CHECKS,
  FOUNDATIONS_HUB_YELLOW_STRIP,
  FOUNDATIONS_HUB_ZIGZAG,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_SERVICES_INTRO,
  FOUNDATIONS_SERVICES_INTRO_B,
  FOUNDATIONS_SERVICE_AREA,
  FOUNDATIONS_TRUST_BENTO,
} from "@/lib/site/foundations-civil-infrastructure-content";

const CONTACT_HREF = "/contact/" as const;

/** Split service titles into two lines for `service-card__title` rhythm. */
export function splitFoundationsGridTitle(title: string): string[] {
  const amp = title.indexOf(" & ");
  if (amp !== -1) {
    return [title.slice(0, amp + 3).trimEnd(), title.slice(amp + 3).trim()].filter(Boolean);
  }
  const comma = title.indexOf(", ");
  if (comma !== -1 && comma < title.length * 0.55) {
    return [title.slice(0, comma + 1).trim(), title.slice(comma + 2).trim()];
  }
  const mid = Math.floor(title.length / 2);
  let cut = title.lastIndexOf(" ", mid + 8);
  if (cut < 8) cut = title.indexOf(" ", mid);
  if (cut <= 0) return [title];
  return [title.slice(0, cut).trim(), title.slice(cut + 1).trim()];
}

export function toFoundationsMegaMenuCards(): MegaMenuCard[] {
  return FOUNDATIONS_SERVICE_CARDS.map((card, i) => ({
    slug: card.slug,
    num: String(i + 1).padStart(2, "0"),
    title: card.title,
    description: card.blurb,
    gridTitle: splitFoundationsGridTitle(card.title),
    gridDescription: card.blurb,
    href: `${FOUNDATIONS_HUB_PATH}${card.slug}/`,
  }));
}

export function toFoundationsServicesGridProps(): ServicesSectionProps {
  return {
    eyebrow: "Capabilities",
    headingLine1: "Eight foundation &",
    headingLine2: "civil infrastructure lines",
    intro: `${FOUNDATIONS_SERVICES_INTRO} ${FOUNDATIONS_SERVICES_INTRO_B}`,
  };
}

export function toFoundationsWhyProps(): WhyProps {
  const [c0, c1, c2] = FOUNDATIONS_HUB_PAIN.cards;
  const trust = FOUNDATIONS_TRUST_BENTO[0];
  return {
    eyebrow: "Risk",
    headingBefore: "Foundation failure is ",
    headingEmphasis: "non-negotiable",
    headingAfter: ".",
    body: FOUNDATIONS_HUB_PAIN.lede,
    reasons: [
      { num: "01", title: c0.title, text: c0.body },
      { num: "02", title: c1.title, text: c1.body },
      { num: "03", title: c2.title, text: c2.body },
    ],
    cta: { label: "Request a project quote", href: CONTACT_HREF },
    floatChip: {
      line1: trust.title,
      line2: "Licensed, insured, WSIB-clearance ready.",
    },
  };
}

function foundationsQualityIntro(): string {
  return FOUNDATIONS_HUB_QUALITY_CHECKS.map((q) => `${q.label} — ${q.detail}`).join(" ");
}

export function toFoundationsProcessProps(): ProcessProps {
  const qcDesc = FOUNDATIONS_HUB_QUALITY_CHECKS.map((q) => `${q.label}: ${q.detail}`).join(" ");

  const steps: ProcessProps["steps"] = [
    { num: "00", title: "IFC field checklist", desc: qcDesc },
    ...FOUNDATIONS_HUB_ZIGZAG.map((row) => ({
      num: row.step,
      title: row.title,
      desc: row.body,
    })),
  ];

  return {
    eyebrow: "Quality checklist",
    heading: "Field execution",
    headingAccent: "to IFC",
    intro: foundationsQualityIntro(),
    steps,
  };
}

export function toFoundationsStatsProps(): StatsProps {
  const cityCount = FOUNDATIONS_SERVICE_AREA.cities.length;
  const cells: StatCellProps[] = [
    {
      target: 8,
      afterNumber: "",
      label: "Dedicated scopes",
      sub: "Excavation, forming, servicing, mass earthworks, underpinning, and engineered solutions.",
    },
    {
      target: 4,
      afterNumber: "",
      label: "Compliance anchors",
      sub: FOUNDATIONS_HUB_PROOF.badgeTitles.join(" · "),
    },
    {
      target: cityCount,
      afterNumber: "+",
      label: "Regional reach",
      sub: `${FOUNDATIONS_SERVICE_AREA.cities.slice(0, 4).join(", ")}, and across Simcoe County.`,
    },
    {
      target: 3,
      afterNumber: "",
      label: "Delivery themes",
      sub: FOUNDATIONS_HUB_PROOF.highlights.join(" "),
    },
  ];
  return { cells };
}

export function toFoundationsCtaBandProps(): CtaBandProps {
  return {
    eyebrow: "Foundations desk",
    headingLine1: "Ready when your",
    headingLine2: "drawings ",
    headingEmphasis: "are.",
    sub: FOUNDATIONS_HUB_YELLOW_STRIP.sub,
    phoneLabel: "Call direct",
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_TEL,
    emailCta: { label: "Email us", href: EMAIL_MAILTO },
  };
}

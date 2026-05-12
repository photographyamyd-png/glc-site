/**
 * Production homepage stack.
 * Strings: `lib/ground-level/home-copy-lab-content.ts` (verbatim from HOMEPAGE_COPY_ROLE_MAP.md).
 * Presentation: sandbox-approved `GL*` shells only — `GLFeaturedServicesBento` (sticky shortcuts + bento) +
 * `GLCapabilitiesRail` (vertical rail + panel). No duplicate static capability grids.
 *
 * ## IA (order, stable anchor ids)
 *
 * 1. `#hero` — `GLHero`
 * 2. Marquee — `GLMarqueeBand`
 * 3. `#services` — `GLFeaturedServices` (sandbox DNA)
 * 4. `#about` — `GLWhoWeServe`
 * 5. `#metrics` — `CopyLabStats`
 * 6. `#capabilities` — `GLCapabilitiesRail` (interaction-led, not card grid)
 * 7. `#why` — `GLDifference`
 * 8. `#process` — `GLProcess`
 * 9. `#coverage` — `GLServiceAreas` (`surface="light"`)
 * 10. `#testimonials` — `GLTestimonialsBlock`
 * 11. `#cta-band` — `GLCtaBand`
 * 12. `#ghost-test` — `GLGhostTestSection` (active-chain-only verification section)
 */

import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { GLCapabilitiesRail } from "@/components/ground-level/GLCapabilitiesRail";
import { GLGhostTestSection } from "@/components/ground-level/GLGhostTestSection";
import { GLFeaturedServicesBento } from "@/components/ground-level/GLFeaturedServicesBento";
import { GLHero, type GLHeroContent } from "@/components/ground-level/GLHero";
import { GLCtaBand, type GLCtaBandContent } from "@/components/ground-level/GLCtaBand";
import { GLServiceAreas, type GLServiceAreasContent } from "@/components/ground-level/GLServiceAreas";
import { GLWhoWeServe, type GLWhoWeServeContent } from "@/components/ground-level/GLWhoWeServe";
import { GLDifference, type GLDifferenceContent } from "@/components/ground-level/GLDifference";
import { GLProcess, type GLProcessContent } from "@/components/ground-level/GLProcess";
import { GLTestimonialsBlock, type GLTestimonialsBlockContent } from "@/components/ground-level/GLTestimonials";
import {
  COPY_LAB_ABOUT,
  COPY_LAB_CAPABILITIES_INTRO,
  COPY_LAB_CLOSING_CTA,
  COPY_LAB_COVERAGE,
  COPY_LAB_FEATURED_SERVICES,
  COPY_LAB_HERO,
  COPY_LAB_MARQUEE_ITEMS,
  COPY_LAB_PROCESS,
  COPY_LAB_TESTIMONIALS,
  COPY_LAB_WHY,
} from "@/lib/ground-level/home-copy-lab-content";
import { SERVICES_GRID } from "@/lib/ground-level/homepage-copy";
import { groundLevelServicesWithCopyLabDescriptions } from "@/lib/ground-level/merge-copy-lab-services";
import { CopyLabStats } from "./CopyLabStats";

const copyLabMergedServices = groundLevelServicesWithCopyLabDescriptions();

const capabilitiesHeadingParts = SERVICES_GRID.heading.trim().split(/\s+/);
const capabilitiesTitleLine1 = capabilitiesHeadingParts[0] ?? SERVICES_GRID.heading;
const capabilitiesTitleLine2 = capabilitiesHeadingParts.slice(1).join(" ");

const copyLabHeroContent: GLHeroContent = {
  eyebrow: COPY_LAB_HERO.eyebrow,
  titleLine1: COPY_LAB_HERO.h1Line1,
  titleLine2: COPY_LAB_HERO.h1Line2Emphasis,
  titleLine3: COPY_LAB_HERO.h1Line3,
  lede: COPY_LAB_HERO.lede,
  stats: COPY_LAB_HERO.stats,
  serviceCoverageLabel: `${COPY_LAB_HERO.coverageHeading} — ${COPY_LAB_HERO.coverageTags.join(", ")}`,
  serviceShortcuts: [...COPY_LAB_HERO.serviceShortcuts],
  primaryCta: { ...COPY_LAB_HERO.primaryCta },
  secondaryCta: { ...COPY_LAB_HERO.secondaryCta },
  marqueePhrases: [...COPY_LAB_MARQUEE_ITEMS],
};

const copyLabFeaturedContent = {
  eyebrow: COPY_LAB_FEATURED_SERVICES.eyebrow,
  heading: `${COPY_LAB_FEATURED_SERVICES.h2Line1} / ${COPY_LAB_FEATURED_SERVICES.h2Line2}`,
  intro: COPY_LAB_FEATURED_SERVICES.body,
  cta: COPY_LAB_FEATURED_SERVICES.primaryCta.label,
  ctaHref: COPY_LAB_FEATURED_SERVICES.primaryCta.href,
} as const;

const copyLabAboutContent: GLWhoWeServeContent = {
  eyebrow: COPY_LAB_ABOUT.eyebrow,
  heading: COPY_LAB_ABOUT.headline,
  body: COPY_LAB_ABOUT.body,
  credentials: COPY_LAB_ABOUT.credentials,
  cta: { label: COPY_LAB_ABOUT.cta.label, href: COPY_LAB_ABOUT.cta.href },
  mediaStat: COPY_LAB_ABOUT.mediaStat,
  badge: COPY_LAB_ABOUT.badge,
  imageAlt: COPY_LAB_ABOUT.imageAlt,
  watermark: COPY_LAB_ABOUT.watermark,
};

const copyLabWhyContent: GLDifferenceContent = {
  eyebrow: COPY_LAB_WHY.eyebrow,
  heading: COPY_LAB_WHY.headline,
  body: COPY_LAB_WHY.body,
  reasons: COPY_LAB_WHY.reasons,
  ctaLabel: COPY_LAB_WHY.ctaLabel,
  ctaHref: COPY_LAB_WHY.ctaHref,
  chipLine1: COPY_LAB_WHY.chipLine1,
  chipLine2: COPY_LAB_WHY.chipLine2,
};

const copyLabProcessContent: GLProcessContent = {
  eyebrow: COPY_LAB_PROCESS.eyebrow,
  heading: COPY_LAB_PROCESS.headline,
  intro: COPY_LAB_PROCESS.intro,
  steps: COPY_LAB_PROCESS.steps,
  footerActions: {
    primary: {
      label: `${COPY_LAB_CLOSING_CTA.phoneLabel} — ${COPY_LAB_CLOSING_CTA.phoneDisplay}`,
      href: COPY_LAB_CLOSING_CTA.phoneHref,
    },
    secondary: {
      label: COPY_LAB_CLOSING_CTA.emailLabel,
      href: COPY_LAB_CLOSING_CTA.emailHref,
    },
  },
};

const copyLabCoverageContent: GLServiceAreasContent = {
  eyebrow: COPY_LAB_COVERAGE.eyebrow,
  heading: COPY_LAB_COVERAGE.headline,
  body: COPY_LAB_COVERAGE.body,
  areas: COPY_LAB_COVERAGE.regions.map((r) => `${r.name} — ${r.sub}`),
};

const copyLabTestimonialsContent: GLTestimonialsBlockContent = {
  eyebrow: COPY_LAB_TESTIMONIALS.eyebrow,
  headline: COPY_LAB_TESTIMONIALS.headline,
  intro: COPY_LAB_TESTIMONIALS.intro,
  entries: COPY_LAB_TESTIMONIALS.items.map((item) => ({
    quote: item.quote,
    attribution: `${item.name}, ${item.role}`,
  })),
};

const copyLabClosingContent: GLCtaBandContent = {
  eyebrow: COPY_LAB_CLOSING_CTA.eyebrow,
  heading: COPY_LAB_CLOSING_CTA.headline,
  headingAccentKey: "Site Consultation",
  sub: COPY_LAB_CLOSING_CTA.supporting,
  phoneLabel: `${COPY_LAB_CLOSING_CTA.phoneLabel} — ${COPY_LAB_CLOSING_CTA.phoneDisplay}`,
  phoneHref: COPY_LAB_CLOSING_CTA.phoneHref,
  emailCta: COPY_LAB_CLOSING_CTA.emailLabel,
  emailHref: COPY_LAB_CLOSING_CTA.emailHref,
};

export function GLHomeCopyLab() {
  return (
    <div className="copy-lab-stack" data-prototype="home-copy-lab">
      <GLHero
        sectionId="hero"
        headingId="hero-heading"
        content={copyLabHeroContent}
        imageAlt="Ground Level Contracting equipment preparing a commercial site in Simcoe County"
      />
      <GLMarqueeBand items={COPY_LAB_MARQUEE_ITEMS} />
      <GLFeaturedServicesBento
        sectionId="services"
        headingId="services-heading"
        content={copyLabFeaturedContent}
        services={copyLabMergedServices}
      />
      <GLWhoWeServe
        sectionId="about"
        headingId="about-heading"
        content={copyLabAboutContent}
        showStatsStrip={false}
      />
      <CopyLabStats />
      <GLCapabilitiesRail
        eyebrow={SERVICES_GRID.eyebrow}
        titleLine1={capabilitiesTitleLine1}
        titleLine2={capabilitiesTitleLine2}
        intro={COPY_LAB_CAPABILITIES_INTRO}
        services={copyLabMergedServices}
      />
      <GLDifference sectionId="why" headingId="why-heading" content={copyLabWhyContent} />
      <GLProcess sectionId="process" headingId="process-heading" content={copyLabProcessContent} />
      <GLServiceAreas
        sectionId="coverage"
        headingId="coverage-heading"
        content={copyLabCoverageContent}
        surface="light"
      />
      <GLTestimonialsBlock
        sectionId="testimonials"
        headingId="testimonials-heading"
        content={copyLabTestimonialsContent}
        surface="dark"
      />
      <GLCtaBand sectionId="cta-band" headingId="cta-band-heading" content={copyLabClosingContent} />
      <GLGhostTestSection sectionId="ghost-test" headingId="ghost-test-heading" />
    </div>
  );
}

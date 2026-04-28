/**
 * Home copy prototype — bottom-of-page stack after `GLCDnaSandbox`.
 * Strings: `lib/ground-level/home-copy-lab-content.ts` (verbatim from HOMEPAGE_COPY_ROLE_MAP.md).
 * Presentation: composes shared `GL*` section shells + layered `CopyLab*` blocks (featured, grid, stats).
 *
 * ## IA (order, rationale, ids)
 *
 * 1. `copy-lab-hero` — Full-bleed hero (`GLHero` + media) + role-map copy.
 * 2. Marquee — `GLMarqueeBand` with role-map phrases (yellow ticker, same as Lane A DNA).
 * 3. `copy-lab-featured` — Six Core intro + imagery column + service links.
 * 4. `copy-lab-about` — `GLWhoWeServe` shell + role-map about (stats strip off; separate metrics band).
 * 5. `copy-lab-stats` — Light-field metrics + imagery (rhythm break before grid).
 * 6. `copy-lab-services-grid` — Dark capabilities grid (aligned with `GLServices`).
 * 7. `copy-lab-why` — `GLDifference` + role-map why.
 * 8. `copy-lab-process` — `GLProcess` + role-map process intro + steps.
 * 9. `copy-lab-coverage` — `GLServiceAreas` (`surface="light"`) + role-map territory.
 * 10. `copy-lab-testimonials` — `GLTestimonialsBlock` (accent-rail cards).
 * 11. `copy-lab-closing` — `GLCtaBand` + role-map closing CTA.
 *
 * Flow: attention → offer → trust → proof → process → geography → peer proof → conversion.
 * All ids use prefix `copy-lab-` to avoid collisions with Lane A anchors.
 */

import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { GLHero, type GLHeroContent } from "@/components/ground-level/GLHero";
import { GLCtaBand, type GLCtaBandContent } from "@/components/ground-level/GLCtaBand";
import { GLServiceAreas, type GLServiceAreasContent } from "@/components/ground-level/GLServiceAreas";
import { GLWhoWeServe, type GLWhoWeServeContent } from "@/components/ground-level/GLWhoWeServe";
import { GLDifference, type GLDifferenceContent } from "@/components/ground-level/GLDifference";
import { GLProcess, type GLProcessContent } from "@/components/ground-level/GLProcess";
import { GLTestimonialsBlock, type GLTestimonialsBlockContent } from "@/components/ground-level/GLTestimonials";
import {
  COPY_LAB_ABOUT,
  COPY_LAB_CLOSING_CTA,
  COPY_LAB_COVERAGE,
  COPY_LAB_HERO,
  COPY_LAB_MARQUEE_ITEMS,
  COPY_LAB_PROCESS,
  COPY_LAB_TESTIMONIALS,
  COPY_LAB_WHY,
} from "@/lib/ground-level/home-copy-lab-content";
import { CopyLabFeatured } from "./CopyLabFeatured";
import { CopyLabServicesGrid } from "./CopyLabServicesGrid";
import { CopyLabStats } from "./CopyLabStats";

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

const copyLabAboutContent: GLWhoWeServeContent = {
  eyebrow: COPY_LAB_ABOUT.eyebrow,
  heading: COPY_LAB_ABOUT.headline,
  body: COPY_LAB_ABOUT.body,
  credentials: COPY_LAB_ABOUT.credentials,
  cta: { label: COPY_LAB_ABOUT.cta.label, href: COPY_LAB_ABOUT.cta.href },
  mediaStat: `${COPY_LAB_ABOUT.mediaStat.value} ${COPY_LAB_ABOUT.mediaStat.label}`,
  badge: COPY_LAB_ABOUT.badge,
  imageAlt: COPY_LAB_ABOUT.imageAlt,
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
      <GLHero sectionId="copy-lab-hero" headingId="copy-lab-hero-heading" content={copyLabHeroContent} />
      <GLMarqueeBand items={COPY_LAB_MARQUEE_ITEMS} />
      <CopyLabFeatured />
      <GLWhoWeServe
        sectionId="copy-lab-about"
        headingId="copy-lab-about-heading"
        content={copyLabAboutContent}
        showStatsStrip={false}
      />
      <CopyLabStats />
      <CopyLabServicesGrid />
      <GLDifference sectionId="copy-lab-why" headingId="copy-lab-why-heading" content={copyLabWhyContent} />
      <GLProcess sectionId="copy-lab-process" headingId="copy-lab-process-heading" content={copyLabProcessContent} />
      <GLServiceAreas
        sectionId="copy-lab-coverage"
        headingId="copy-lab-coverage-heading"
        content={copyLabCoverageContent}
        surface="light"
      />
      <GLTestimonialsBlock
        sectionId="copy-lab-testimonials"
        headingId="copy-lab-testimonials-heading"
        content={copyLabTestimonialsContent}
      />
      <GLCtaBand sectionId="copy-lab-closing" headingId="copy-lab-closing-heading" content={copyLabClosingContent} />
    </div>
  );
}

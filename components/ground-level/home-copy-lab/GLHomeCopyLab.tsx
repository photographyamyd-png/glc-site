/**
 * Production homepage stack.
 * Strings: `lib/ground-level/home-copy-lab-content.ts`.
 *
 * ## IA (order, stable anchor ids)
 *
 * 1. `#hero` — `GLHero`
 * 2. Marquee — `GLMarqueeBand`
 * 3. `#services` — `GLFeaturedServicesBento`
 * 3b. `#services-about-divider` — `CopyLabServicesAboutDivider`
 * 4. `#about` — `GLWhoWeServe`
 * 5. `#agitator` — `HomeAgitatorSection`
 * 6. `#capabilities` — `HomeCapabilityBentoSection` (depth rows + `megaBlurb`, not a second featured bento)
 * 7. `#proof` — `HomeProofBeforeAfter`
 * 8. `#cta-band` — `HomeFinalCtaSection`
 * 9. `#home-faq` — `HomeSeoFaqSection` (compact band: `HeroFieldBackdrop` scrim stack with a **different** field raster than `#hero`; includes `#why`, `#process`, `#coverage` scroll targets)
 */

import dynamic from "next/dynamic";
import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { GLFeaturedServicesBento } from "@/components/ground-level/GLFeaturedServicesBento";
import { GLHero, type GLHeroContent } from "@/components/ground-level/GLHero";
import type { GLWhoWeServeContent } from "@/components/ground-level/GLWhoWeServe";
import { CopyLabServicesAboutDivider } from "@/components/ground-level/home-copy-lab/CopyLabServicesAboutDivider";
import {
  COPY_LAB_ABOUT,
  COPY_LAB_FEATURED_SERVICES,
  COPY_LAB_HERO,
  COPY_LAB_MARQUEE_ITEMS,
} from "@/lib/ground-level/home-copy-lab-content";
import { groundLevelServicesWithCopyLabDescriptions } from "@/lib/ground-level/merge-copy-lab-services";

const GLWhoWeServe = dynamic(() =>
  import("@/components/ground-level/GLWhoWeServe").then((m) => ({ default: m.GLWhoWeServe })),
);

const HomeAgitatorSection = dynamic(() =>
  import("@/components/ground-level/home-copy-lab/HomeAgitatorSection").then((m) => ({
    default: m.HomeAgitatorSection,
  })),
);

const HomeCapabilityBentoSection = dynamic(() =>
  import("@/components/ground-level/home-copy-lab/HomeCapabilityBentoSection").then((m) => ({
    default: m.HomeCapabilityBentoSection,
  })),
);

const HomeProofBeforeAfter = dynamic(() =>
  import("@/components/ground-level/home-copy-lab/HomeProofBeforeAfter").then((m) => ({
    default: m.HomeProofBeforeAfter,
  })),
);

const HomeFinalCtaSection = dynamic(() =>
  import("@/components/ground-level/home-copy-lab/HomeFinalCtaSection").then((m) => ({
    default: m.HomeFinalCtaSection,
  })),
);

const HomeSeoFaqSection = dynamic(() =>
  import("@/components/ground-level/home-copy-lab/HomeSeoFaqSection").then((m) => ({
    default: m.HomeSeoFaqSection,
  })),
);

const copyLabMergedServices = groundLevelServicesWithCopyLabDescriptions();

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
  imageSrc: COPY_LAB_ABOUT.imageSrc,
  imageAlt: COPY_LAB_ABOUT.imageAlt,
  watermark: COPY_LAB_ABOUT.watermark,
};

export function GLHomeCopyLab() {
  return (
    <div className="copy-lab-stack" data-prototype="home-copy-lab">
      <GLHero
        sectionId="hero"
        headingId="hero-heading"
        content={copyLabHeroContent}
        imageSrc={COPY_LAB_HERO.fieldImageSrc}
        imageAlt={COPY_LAB_HERO.fieldImageAlt}
      />
      <GLMarqueeBand items={COPY_LAB_MARQUEE_ITEMS} />
      <GLFeaturedServicesBento
        sectionId="services"
        headingId="services-heading"
        content={copyLabFeaturedContent}
        services={copyLabMergedServices}
      />
      <CopyLabServicesAboutDivider />
      <GLWhoWeServe
        sectionId="about"
        headingId="about-heading"
        content={copyLabAboutContent}
        showStatsStrip={false}
      />
      <HomeAgitatorSection />
      <HomeCapabilityBentoSection />
      <HomeProofBeforeAfter />
      <HomeFinalCtaSection />
      <HomeSeoFaqSection />
    </div>
  );
}

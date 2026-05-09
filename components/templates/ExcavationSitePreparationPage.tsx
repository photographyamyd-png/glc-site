import { CopyLabStats } from "@/components/ground-level/home-copy-lab/CopyLabStats";
import { GLCapabilitiesRail } from "@/components/ground-level/GLCapabilitiesRail";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { GLDifference } from "@/components/ground-level/GLDifference";
import { GLFeaturedServices } from "@/components/ground-level/GLFeaturedServices";
import { GLHero } from "@/components/ground-level/GLHero";
import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { GLProcess } from "@/components/ground-level/GLProcess";
import { GLServiceAreas } from "@/components/ground-level/GLServiceAreas";
import { GLServiceFaq } from "@/components/ground-level/GLServiceFaq";
import { GLTestimonialsBlock } from "@/components/ground-level/GLTestimonials";
import { GLWhoWeServe } from "@/components/ground-level/GLWhoWeServe";
import { ExcavationJsonLd } from "@/components/seo/ExcavationJsonLd";
import {
  excavationCapabilitiesRailProps,
  excavationClosingCtaContent,
  excavationCopyLabStatsContent,
  excavationDifferenceContent,
  excavationFaqItems,
  excavationHeroContent,
  excavationMarqueeItems,
  excavationProcessContent,
  excavationRelatedFeaturedContent,
  excavationRelatedServices,
  excavationServiceAreasContent,
  excavationTestimonialsContent,
  excavationWhoWeServeContent,
} from "@/lib/ground-level/excavation-sandbox-map";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

type Props = {
  service: ServiceDef;
  /** Reserved for parity with other templates; related primaries are mapped inside GL stacks. */
  related: ServiceDef[];
};

/**
 * Excavation route composer — presentation shells match `/sandbox` + `GLHomeCopyLab` DNA only.
 */
export function ExcavationSitePreparationPage(props: Props) {
  void props.service;
  void props.related;
  const rail = excavationCapabilitiesRailProps();

  return (
    <>
      <ExcavationJsonLd faq={detail.faq} processHeading={detail.process.heading} steps={detail.process.steps} />

      <GLHero
        sectionId="hero"
        headingId="excavation-hero-heading"
        content={excavationHeroContent()}
        imageSrc="/images/services/Excavation/excavation-016.jpg"
        imageAlt="Commercial excavation equipment on an active Simcoe County construction site"
        showMarquee={false}
        variant="marketing"
      />

      <GLMarqueeBand items={excavationMarqueeItems} />

      <CopyLabStats content={excavationCopyLabStatsContent()} />

      <GLWhoWeServe
        sectionId="about"
        headingId="excavation-scope-heading"
        content={excavationWhoWeServeContent()}
        showStatsStrip={false}
      />

      <GLCapabilitiesRail
        sectionId="capabilities-crosslines"
        headingId="excavation-capabilities-rail-heading"
        eyebrow={rail.eyebrow}
        titleLine1={rail.titleLine1}
        titleLine2={rail.titleLine2}
        intro={rail.intro}
        services={rail.services}
      />

      <GLDifference sectionId="excavation-offerings" headingId="excavation-difference-heading" content={excavationDifferenceContent()} />

      <GLProcess sectionId="process" headingId="excavation-process-heading" content={excavationProcessContent()} />

      <GLServiceAreas
        sectionId="coverage"
        headingId="excavation-coverage-heading"
        content={excavationServiceAreasContent()}
        surface="light"
      />

      <GLTestimonialsBlock
        sectionId="testimonials"
        headingId="excavation-testimonials-heading"
        content={excavationTestimonialsContent()}
        surface="dark"
      />

      <GLFeaturedServices
        sectionId="related-services"
        headingId="excavation-related-heading"
        content={excavationRelatedFeaturedContent()}
        services={excavationRelatedServices()}
      />

      <GLServiceFaq
        sectionId="faq"
        headingId="excavation-faq-heading"
        eyebrow="FAQ"
        title="Common questions"
        faqGroupName="excavation-site-preparation-faq"
        items={excavationFaqItems}
      />

      <GLCtaBand sectionId="cta-band" headingId="excavation-closing-cta-heading" content={excavationClosingCtaContent()} />
    </>
  );
}

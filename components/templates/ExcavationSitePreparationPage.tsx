import { ExcavationSitePreparationArticle } from "@/components/templates/ExcavationSitePreparationArticle";
import { GLHero } from "@/components/ground-level/GLHero";
import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { ExcavationJsonLd } from "@/components/seo/ExcavationJsonLd";
import {
  excavationHeroContent,
  excavationMarqueeItems,
} from "@/lib/ground-level/excavation-sandbox-map";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

type Props = {
  service: ServiceDef;
  related: ServiceDef[];
};

/**
 * Excavation primary route — marketing hero + bespoke article body (Drainage-class DNA).
 */
export function ExcavationSitePreparationPage(props: Props) {
  void props.service;
  const { related } = props;

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

      <ExcavationSitePreparationArticle related={related} />
    </>
  );
}

import { ExcavationSitePreparationArticle } from "@/components/templates/ExcavationSitePreparationArticle";
import { GLHero } from "@/components/ground-level/GLHero";
import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { ExcavationJsonLd } from "@/components/seo/ExcavationJsonLd";
import { ServiceAreasCrossLinks } from "@/components/seo/ServiceAreasCrossLinks";
import {
  excavationHeroContent,
  excavationMarqueeItems,
} from "@/lib/ground-level/excavation-sandbox-map";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { GLC_PROJECT_REEL_LOOP } from "@/lib/site/brand-media";
import type { ServiceDef } from "@/lib/site/registry";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

type Props = {
  service: ServiceDef;
  related: ServiceDef[];
};

/**
 * Excavation primary route — marketing hero + marquee + conversion article (pain → solution → proof → CTA) + SEO basement.
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
        imageSrc={GLC_PROJECT_REEL_LOOP.posterSrc}
        imageAlt="Commercial excavation equipment on an active Simcoe County construction site"
        loopVideo={GLC_PROJECT_REEL_LOOP}
        loopVideoPlaybackRate={0.65}
        showMarquee={false}
        variant="marketing"
      />

      <GLMarqueeBand items={excavationMarqueeItems} />

      <ExcavationSitePreparationArticle related={related} />

      <div className="section-major band-light">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <ServiceAreasCrossLinks serviceSlug="excavation-site-preparation" />
        </div>
      </div>
    </>
  );
}

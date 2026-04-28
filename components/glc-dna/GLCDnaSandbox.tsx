import homeContent from "@/lib/glc-dna/home.json";
import navigation from "@/lib/glc-dna/navigation.json";
import type { HomePageContent, MegaMenuCard } from "@/lib/glc-dna/types";
import { HeroSection } from "@/components/glc-dna/sections/hero-section";
import { MarqueeBand } from "@/components/glc-dna/sections/marquee-band";
import { FeaturedAccordion } from "@/components/glc-dna/sections/featured-accordion";
import { AboutSection } from "@/components/glc-dna/sections/about-section";
import { ServicesGridSection } from "@/components/glc-dna/sections/services-grid-section";
import { StatsSection } from "@/components/glc-dna/sections/stats-section";
import { WhySection } from "@/components/glc-dna/sections/why-section";
import { ProcessSection } from "@/components/glc-dna/sections/process-section";
import { CoverageSection } from "@/components/glc-dna/sections/coverage-section";
import { TestimonialsSection } from "@/components/glc-dna/sections/testimonials-section";
import { CtaBandSection } from "@/components/glc-dna/sections/cta-band-section";
import { GlcDnaLaneStyles } from "@/components/glc-dna/GlcDnaLaneStyles";

const home = homeContent as HomePageContent;
const megaCards = navigation.megaMenu.cards as MegaMenuCard[];

/**
 * Isolated “Lane B”: glc-site DNA section order from `home.json`, with mega menu cards for the services grid.
 */
export function GLCDnaSandbox() {
  return (
    <>
      <GlcDnaLaneStyles />
      <div className="glc-dna-sandbox" id="glc-dna-sandbox-lane">
      {home.sections.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "hero":
            return <HeroSection key={key} {...block.props} />;
          case "marquee":
            return <MarqueeBand key={key} {...block.props} />;
          case "accordion":
            return <FeaturedAccordion key={key} {...block.props} />;
          case "about":
            return <AboutSection key={key} {...block.props} />;
          case "services":
            return (
              <ServicesGridSection key={key} cards={megaCards} {...block.props} />
            );
          case "stats":
            return <StatsSection key={key} {...block.props} />;
          case "why":
            return <WhySection key={key} {...block.props} />;
          case "process":
            return <ProcessSection key={key} {...block.props} />;
          case "coverage":
            return <CoverageSection key={key} {...block.props} />;
          case "testimonials":
            return <TestimonialsSection key={key} {...block.props} />;
          case "ctaBand":
            return <CtaBandSection key={key} {...block.props} />;
          default:
            return null;
        }
      })}
    </div>
    </>
  );
}

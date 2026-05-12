import { Reveal } from "@/components/glc-dna/ui/reveal";
import { ServicesGridCard } from "@/components/glc-dna/sections/services-grid-card";
import type { MegaMenuCard, ServicesSectionProps } from "@/lib/glc-dna/types";
import type { RevealDelayClass } from "@/components/glc-dna/ui/reveal";

const delayFor = (i: number): RevealDelayClass | undefined => {
  if (i % 3 === 1) return "reveal--delay-1";
  if (i % 3 === 2) return "reveal--delay-2";
  return undefined;
};

type Props = ServicesSectionProps & { cards: MegaMenuCard[] };

export function ServicesGridSection({ cards, sectionId = "glc-dna-services", servicesHeadingId = "glc-dna-services-heading", ...props }: Props) {
  return (
    <section id={sectionId} aria-labelledby={servicesHeadingId}>
      <div className="services__header">
        <div>
          <Reveal className="eyebrow eyebrow--dark" style={{ marginBottom: 16 }}>
            {props.eyebrow}
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id={servicesHeadingId} className="services__heading">
              {props.headingLine1}
              <br />
              <span>{props.headingLine2}</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delayClass="reveal--delay-2">
          <p className="services__intro">{props.intro}</p>
        </Reveal>
      </div>

      <div className="services__grid-wrap">
        <div className="services__grid" role="list">
          {cards.map((card, i) => (
            <ServicesGridCard
              key={card.slug}
              card={card}
              delayClass={delayFor(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

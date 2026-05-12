"use client";

import { Reveal } from "@/components/glc-dna/ui/reveal";
import type { RevealDelayClass } from "@/components/glc-dna/ui/reveal";
import { HaulingFaqServiceCard } from "@/components/services/hauling/HaulingFaqServiceCard";
import { IconArrow } from "@/components/glc-dna/ui/icon-arrow";
import type { HaulingGlcDnaLaneProps } from "@/lib/site/hauling-glc-dna-map";

const delayFor = (i: number): RevealDelayClass | undefined => {
  if (i % 3 === 1) return "reveal--delay-1";
  if (i % 3 === 2) return "reveal--delay-2";
  return undefined;
};

type Props = {
  faqAccordion: HaulingGlcDnaLaneProps["faqAccordion"];
};

/**
 * FAQ band using the same services grid shell and `service-card` DNA as `#glc-dna-services`
 * (numbered rail, charcoal tiles, yellow accents, reveal cadence).
 */
export function HaulingFaqServiceGridSection({ faqAccordion }: Props) {
  const { eyebrow, headingLine1, headingLine2, intro, cta, items } = faqAccordion;

  return (
    <section id="glc-dna-faq" aria-labelledby="hauling-faq-grid-heading" className="scroll-mt-[var(--header)]">
      <div className="services__header">
        <div>
          <Reveal className="eyebrow eyebrow--dark" style={{ marginBottom: 16 }}>
            {eyebrow}
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id="hauling-faq-grid-heading" className="services__heading">
              {headingLine1}
              <br />
              <span>{headingLine2}</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delayClass="reveal--delay-2">
          <p className="services__intro">{intro}</p>
        </Reveal>
      </div>

      <div className="services__grid-wrap">
        <div className="services__grid" role="list">
          {items.map((item, i) => (
            <HaulingFaqServiceCard key={item.id} item={item} index={i} delayClass={delayFor(i)} />
          ))}
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <a href={cta.href} className="btn-primary inline-flex min-h-[44px] items-center gap-2 px-5 py-3">
            {cta.label}
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

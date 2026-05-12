"use client";

import { useReveal } from "@/components/glc-dna/hooks/use-reveal";
import { ServiceCardIcon } from "@/components/glc-dna/sections/service-card-icon";
import type { AccordionContentItem } from "@/lib/glc-dna/types";
import type { RevealDelayClass } from "@/components/glc-dna/ui/reveal";

const HAULING_SLUG = "hauling-site-clearing-logistics" as const;

type Props = {
  item: AccordionContentItem;
  index: number;
  delayClass?: RevealDelayClass;
};

export function HaulingFaqServiceCard({ item, index, delayClass }: Props) {
  const ref = useReveal<HTMLDetailsElement>();
  const num = String(index + 1).padStart(2, "0");
  const delay = delayClass ? ` ${delayClass}` : "";

  return (
    <details ref={ref} name="hauling-faq" className={`service-card reveal${delay}`.trim()}>
      <summary className="service-card__summary flex list-none flex-col outline-none marker:content-none [&::-webkit-details-marker]:hidden">
        <div className="service-card__num" aria-hidden>
          {num}
        </div>
        <ServiceCardIcon slug={HAULING_SLUG} />
        <span className="service-card__title">{item.title}</span>
        <div className="mt-auto flex flex-col gap-1 pt-4">
          <span className="service-card__link service-card__faq-toggle service-card__faq-toggle--open">View answer</span>
          <span className="service-card__link service-card__faq-toggle service-card__faq-toggle--close">Hide answer</span>
        </div>
      </summary>
      {item.body ? <p className="service-card__desc service-card__faq-answer">{item.body}</p> : null}
    </details>
  );
}

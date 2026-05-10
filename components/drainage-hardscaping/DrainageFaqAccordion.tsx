"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { readonly q: string; readonly a: string };

export function DrainageFaqAccordion({
  items,
  headingId,
  eyebrow,
  h2,
}: {
  items: readonly Item[];
  headingId: string;
  eyebrow: string;
  h2: string;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
      <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
        <p className="eyebrow text-ink">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.5vw,52px)]"
        >
          {h2}
        </h2>
      </div>
      <ul className="mt-10 max-w-[75ch] list-none space-y-0 border-t border-[color:var(--g200)]">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `${baseId}-faq-${i}`;
          return (
            <li key={item.q} className="border-b border-[color:var(--g200)]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={`${baseId}-faq-btn-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 py-3 text-left"
              >
                <span className="text-base font-medium text-ink">{item.q}</span>
                <span className="eyebrow shrink-0 text-2xl leading-none text-[color:var(--y)]" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={`${baseId}-faq-btn-${i}`}
                hidden={!isOpen}
                className={cn(
                  "overflow-hidden motion-safe:transition-[max-height] motion-safe:duration-[250ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen ? "max-h-[2000px] pb-6 pt-1" : "max-h-0",
                )}
              >
                <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{item.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

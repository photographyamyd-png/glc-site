"use client";

import { useId, useState } from "react";
import { YellowRule } from "@/components/drainage-hardscaping/primitives";
import { cn } from "@/lib/utils";

export type DrainageFaqItem = { readonly q: string; readonly aParas: readonly string[] };

export function DrainageFaqAccordion({
  items,
  headingId,
  eyebrow,
  h2,
}: {
  items: readonly DrainageFaqItem[];
  headingId: string;
  eyebrow: string;
  h2: string;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl rounded-sm border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.88)] p-5 shadow-[0_12px_40px_rgb(0_0_0/0.08)] backdrop-blur-sm sm:p-8">
        <YellowRule className="mb-6" width="2px" />
        <p className="eyebrow text-ink">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-[var(--s7)] font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.5vw,52px)]"
        >
          {h2}
        </h2>
      </div>
      <ul className="mt-10 max-w-[75ch] list-none space-y-0 rounded-sm border border-[color:var(--g200)] bg-white/80 px-2 py-1 shadow-md backdrop-blur-sm sm:px-4">
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
                <span className="eyebrow shrink-0 leading-none text-[color:var(--y)]" aria-hidden>
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
                <div className="space-y-3 text-[15px] leading-[1.72] text-ink sm:text-base">
                  {item.aParas.map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

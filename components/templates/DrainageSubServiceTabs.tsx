"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";

export type DrainageSubTabItem = {
  id: string;
  heading: string;
  paragraphs: string[];
  closing: string;
};

type Props = {
  sectionId?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  items: DrainageSubTabItem[];
  imageSrcs: string[];
  imageAlts: string[];
};

const bodyClass = "text-[15px] leading-[1.72] text-ink sm:text-base";

export function DrainageSubServiceTabs({
  sectionId = "capability-detail",
  headingId = "drainage-subs-heading",
  eyebrow,
  title,
  items,
  imageSrcs,
  imageAlts,
}: Props) {
  const baseId = useId();
  const [selected, setSelected] = useState(0);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const len = items.length;
      let next = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (index + 1) % len;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (index - 1 + len) % len;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = len - 1;
      } else {
        return;
      }
      setSelected(next);
      queueMicrotask(() => {
        document.getElementById(`${baseId}-tab-${next}`)?.focus();
      });
    },
    [baseId, items.length],
  );

  return (
    <section
      id={sectionId}
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="mb-3 eyebrow text-ink">{eyebrow}</p>
          <h2
            id={headingId}
            className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
        </div>

        <div className="bespoke-surface panel-machined mt-10 bg-[color:var(--brand-canvas)] p-5 sm:mt-12 sm:p-8 lg:ml-[var(--dna-stagger-sm)] lg:p-10">
          <div
            role="tablist"
            aria-label="Drainage and hardscaping capabilities"
            className="flex flex-wrap gap-2 border-b border-[color:var(--g200)] pb-4"
          >
            {items.map((item, i) => {
              const isSel = selected === i;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={isSel}
                  aria-controls={`${baseId}-panel-${i}`}
                  tabIndex={isSel ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={`min-h-[44px] max-w-[220px] px-3 py-2 text-left eyebrow transition-[background,color,box-shadow] sm:max-w-none sm:px-4 ${
                    isSel
                      ? "bg-[color:var(--ink-deep)] text-white shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]"
                      : "border border-[color:var(--g200)] bg-white/80 text-ink hover:border-[color:var(--y)]/35"
                  }`}
                >
                  <span className="line-clamp-2 sm:line-clamp-none">{item.heading}</span>
                </button>
              );
            })}
          </div>

          {items.map((item, i) => {
            const img = imageSrcs[i % imageSrcs.length] ?? imageSrcs[0];
            const alt = imageAlts[i % imageAlts.length] ?? imageAlts[0];
            return (
              <div
                key={item.id}
                role="tabpanel"
                id={`${baseId}-panel-${i}`}
                aria-labelledby={`${baseId}-tab-${i}`}
                hidden={selected !== i}
                className="pt-8"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="relative min-h-[220px] lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-[color:var(--g200)] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[280px]">
                      <Image
                        src={img}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.25)] to-transparent mix-blend-multiply"
                        aria-hidden
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                      {item.heading}
                    </h3>
                    <div className="mt-6 space-y-8">
                      {item.paragraphs.map((para, pi) => (
                        <ExpandableCopy key={`${item.id}-p${pi}`} text={para} className={bodyClass} />
                      ))}
                    </div>
                    <p className="mt-8 eyebrow text-[color:var(--y)]">
                      {item.closing}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useId, useState } from "react";
import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { FEATURED_SERVICES } from "@/lib/ground-level/homepage-copy";

function toneSplit(text: string) {
  const [left, right] = text.split("/");
  if (!right) return <>{text}</>;
  return (
    <>
      <span className="text-ink">{left.trim()}</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

function serviceTitleTone(title: string) {
  const [left, right] = title.split("&");
  if (!right) return <>{title}</>;
  return (
    <>
      <span>{left.trim()} &</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

export function GLFeaturedServices() {
  const baseId = useId();
  const [selected, setSelected] = useState(0);

  const onTabKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const len = GROUND_LEVEL_SERVICES.length;
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
  }, [baseId]);

  return (
    <section
      id="what-we-do"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="featured-services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="label-overline mb-3">{FEATURED_SERVICES.eyebrow}</p>
          <h2
            id="featured-services-heading"
            className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {toneSplit(FEATURED_SERVICES.heading)}
          </h2>
          <p className="mt-[var(--s7)] text-sm leading-relaxed text-ink-muted sm:text-base">
            {FEATURED_SERVICES.intro}
          </p>
        </div>

        <div className="bespoke-surface panel-machined mt-10 -mx-2 p-5 sm:mt-12 sm:-mx-4 sm:p-8 lg:mx-0 lg:ml-[var(--dna-stagger-sm)] lg:p-10">
          <div
            role="tablist"
            aria-label="Choose a service line to read details"
            className="flex flex-wrap gap-2 border-b border-[color:var(--g200)] pb-4"
          >
            {GROUND_LEVEL_SERVICES.map((s, i) => {
              const isSel = selected === i;
              return (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={isSel}
                  aria-controls={`${baseId}-panel-${i}`}
                  tabIndex={isSel ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={`min-h-[44px] px-3 py-2 text-left font-label text-[10px] font-semibold uppercase tracking-[0.14em] transition-[background,color,box-shadow] sm:px-4 ${
                    isSel
                      ? "bg-[color:var(--ink-deep)] text-white shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]"
                      : "border border-[color:var(--g200)] bg-white/80 text-ink-muted hover:border-[color:var(--y)]/35 hover:text-ink"
                  }`}
                >
                  <span className="line-clamp-2 sm:line-clamp-none">{serviceTitleTone(s.title)}</span>
                </button>
              );
            })}
          </div>

          {GROUND_LEVEL_SERVICES.map((s, i) => (
            <div
              key={s.slug}
              role="tabpanel"
              id={`${baseId}-panel-${i}`}
              aria-labelledby={`${baseId}-tab-${i}`}
              hidden={selected !== i}
              className="pt-6"
            >
              <h3 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink sm:text-2xl">
                {serviceTitleTone(s.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{s.short}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{s.megaBlurb}</p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4 transition-colors hover:decoration-[color:var(--y)]"
              >
                View service →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="cta-primary inline-block px-8 py-4 text-sm font-semibold tracking-wide"
          >
            {FEATURED_SERVICES.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

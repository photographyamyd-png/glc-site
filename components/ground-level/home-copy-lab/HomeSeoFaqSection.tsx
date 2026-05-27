"use client";

import { useMemo, useState } from "react";
import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_HOME_FAQ, formatCopyLabFaqCollapsedStatus } from "@/lib/ground-level/home-copy-lab-content";

const FAQ_NAME = "home-faq";
const FAQ_NAME_SEO_MIRROR = "home-faq-seo-mirror";

function countItems(
  clusters: readonly { items: readonly { q: string; a: string }[] }[],
): number {
  return clusters.reduce((n, c) => n + c.items.length, 0);
}

export function HomeSeoFaqSection() {
  const f = COPY_LAB_HOME_FAQ;
  const [expanded, setExpanded] = useState(false);

  const totalCount = useMemo(() => countItems(f.groups), [f.groups]);
  const frequentCount = useMemo(() => countItems(f.frequentGroups), [f.frequentGroups]);
  const moreCount = totalCount - frequentCount;

  return (
    <section
      id="home-faq"
      className="section-major band-light-field relative isolate z-[6] scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--y)] bg-[rgb(255_255_255/0.97)] py-[var(--section-v)] shadow-[0_-12px_40px_rgb(0_0_0/0.06)] view-reveal"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--y)_4%,transparent),transparent_40%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-left" mode="default" className="opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{f.eyebrow}</p>
          <h2
            id="home-faq-heading"
            className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
          >
            {f.heading}
          </h2>
          <div className="mt-4 max-w-prose">
            <p className="font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{f.introCompact}</p>
            <p className="sr-only">{f.intro}</p>
          </div>
        </div>

        <div id="home-faq-list" className="mt-8 sm:mt-10">
          {expanded ? (
            <GlcFaqDetailsGrid
              clusters={[...f.groups]}
              groupName={FAQ_NAME}
              tone="light"
              className="w-full"
            />
          ) : (
            <>
              <GlcFaqDetailsGrid
                clusters={[...f.frequentGroups]}
                groupName={FAQ_NAME}
                tone="light"
                className="w-full"
              />
              <div className="sr-only" aria-hidden>
                <GlcFaqDetailsGrid
                  clusters={[...f.groups]}
                  groupName={FAQ_NAME_SEO_MIRROR}
                  tone="light"
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>

        {moreCount > 0 ? (
          <div className="panel-machined mt-6 border border-[color:var(--g200)] bg-white p-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
            <p className="text-[11px] leading-snug text-ink-muted sm:max-w-[20rem] sm:text-xs">
              {expanded
                ? f.faqExpandedStatus
                : formatCopyLabFaqCollapsedStatus(f.faqCollapsedStatus, frequentCount, moreCount)}
            </p>
            <button
              type="button"
              className="mt-3 inline-flex min-h-[44px] w-full shrink-0 items-center justify-center border border-[color:var(--g200)] bg-[rgb(248_247_246/0.9)] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-[color:var(--y)]/60 hover:bg-[rgb(242_183_5/0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:mt-0 sm:w-auto"
              aria-expanded={expanded}
              aria-controls="home-faq-list"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? f.collapseQuestionsLabel : f.expandQuestionsLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

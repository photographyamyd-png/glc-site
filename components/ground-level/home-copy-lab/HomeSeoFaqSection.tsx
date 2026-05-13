"use client";

import { useMemo, useState } from "react";
import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import type { GlcFaqCluster } from "@/components/faq/GlcFaqDetailsGrid";
import { HeroFieldBackdrop } from "@/components/ground-level/HeroFieldBackdrop";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { COPY_LAB_FAQ_BACKDROP, COPY_LAB_HOME_FAQ, type HomeFaqGroup } from "@/lib/ground-level/home-copy-lab-content";
import { cn } from "@/lib/utils";

const FAQ_NAME = "home-faq";
const FAQ_NAME_SEO_MIRROR = "home-faq-seo-mirror";

function firstClusterSlice(groups: readonly HomeFaqGroup[]): GlcFaqCluster[] {
  for (const cluster of groups) {
    const first = cluster.items[0];
    if (first) {
      return [
        {
          anchorId: cluster.anchorId,
          sectionTitle: cluster.sectionTitle,
          items: [first],
        },
      ];
    }
  }
  return [];
}

function totalFaqCount(groups: readonly HomeFaqGroup[]) {
  return groups.reduce((n, c) => n + c.items.length, 0);
}

export function HomeSeoFaqSection() {
  const f = COPY_LAB_HOME_FAQ;
  const [expanded, setExpanded] = useState(false);

  const total = useMemo(() => totalFaqCount(f.groups), [f.groups]);
  const collapsedClusters = useMemo(() => firstClusterSlice(f.groups), [f.groups]);

  return (
    <section
      id="home-faq"
      className="band-dark-field relative isolate scroll-mt-[var(--header)] overflow-hidden py-8 text-white view-reveal sm:py-10 lg:py-11"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-1 bg-[color:var(--y)]" aria-hidden />

      <HeroFieldBackdrop
        imageSrc={COPY_LAB_FAQ_BACKDROP.imageSrc}
        imageAlt={COPY_LAB_FAQ_BACKDROP.imageAlt}
        priority={false}
        imageClassName="object-cover object-center"
      />
      <ClaudeLogicWatermark placement="bottom-right" className="z-[1] opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.48)] p-5 shadow-[0_14px_40px_rgb(0_0_0/0.28)] backdrop-blur-md sm:p-6">
          <p className="eyebrow mb-0 text-white">{f.eyebrow}</p>
          <h2
            id="home-faq-heading"
            className="mt-3 font-serif text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl"
          >
            {f.heading}
          </h2>
          <div className="mt-3 max-w-lg text-sm leading-relaxed text-white/82 sm:text-base">
            <ExpandableCopy text={f.intro} className="text-sm leading-relaxed text-white/82 sm:text-base" />
          </div>
          <div className="mt-4 h-px w-full max-w-xs bg-[color:var(--y)]/40" aria-hidden />

          {!expanded &&
            f.groups.slice(1).map((cluster) =>
              cluster.anchorId ? (
                <div
                  key={`faq-anchor-stub-${cluster.anchorId}`}
                  id={cluster.anchorId}
                  className="scroll-mt-[var(--header)] h-0 w-full overflow-hidden"
                  tabIndex={-1}
                  aria-hidden
                />
              ) : null,
            )}

          <div id="home-faq-list" className="mt-4">
            {expanded ? (
              <GlcFaqDetailsGrid
                clusters={[...f.groups]}
                embedded
                groupName={FAQ_NAME}
                tone="dark"
                className="w-full"
              />
            ) : (
              <>
                <GlcFaqDetailsGrid
                  clusters={collapsedClusters}
                  embedded
                  groupName={FAQ_NAME}
                  tone="dark"
                  className="w-full"
                />
                <div className="sr-only" aria-hidden>
                  <GlcFaqDetailsGrid
                    clusters={[...f.groups]}
                    embedded
                    groupName={FAQ_NAME_SEO_MIRROR}
                    tone="dark"
                    className="w-full"
                  />
                </div>
              </>
            )}
          </div>

          {total > 1 ? (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {!expanded ? (
                <button
                  type="button"
                  className={cn(
                    "inline-flex min-h-[44px] items-center justify-center border border-white/25 bg-[rgb(255_255_255/0.06)] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[color:var(--y)]/55 hover:bg-[rgb(255_255_255/0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]",
                  )}
                  aria-expanded={false}
                  aria-controls="home-faq-list"
                  onClick={() => setExpanded(true)}
                >
                  Expand for frequently asked questions
                </button>
              ) : (
                <button
                  type="button"
                  className={cn(
                    "inline-flex min-h-[44px] items-center justify-center border border-white/20 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/90 underline-offset-4 transition-colors hover:border-[color:var(--y)]/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]",
                  )}
                  aria-expanded={true}
                  aria-controls="home-faq-list"
                  onClick={() => setExpanded(false)}
                >
                  Show fewer questions
                </button>
              )}
              {!expanded ? (
                <span className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {total} answers in full list
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

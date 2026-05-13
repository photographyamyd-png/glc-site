"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_HERO, COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";

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

  const fieldSrc = COPY_LAB_HERO.fieldImageSrc;
  const fieldAlt = COPY_LAB_HERO.fieldImageAlt;

  return (
    <section
      id="home-faq"
      className="band-dark-field relative isolate scroll-mt-[var(--header)] overflow-hidden py-9 text-white view-reveal sm:py-10 lg:py-11"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={fieldSrc}
          alt={fieldAlt}
          fill
          sizes="100vw"
          className="hero-bg-image object-cover object-center"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.78)] to-[rgb(10_12_11/0.28)] lg:via-[rgb(10_12_11/0.64)] lg:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.32)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            background:
              "radial-gradient(ellipse 82% 66% at 72% 40%, rgb(242 183 5 / 0.32) 0%, transparent 56%)",
          }}
          aria-hidden
        />
      </div>

      <ClaudeLogicWatermark placement="bottom-right" className="z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,var(--max-bleed))] px-7 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[var(--max)]">
          <div className="rounded-none border border-white/10 bg-[rgb(10_12_11/0.4)] p-5 shadow-[0_20px_60px_rgb(0_0_0/0.28)] backdrop-blur-sm sm:p-6 lg:p-7">
            <p className="hero-eyebrow label-overline-on-dark mb-0">{f.eyebrow}</p>
            <h2
              id="home-faq-heading"
              className="mt-4 font-serif text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl"
            >
              {f.heading}
            </h2>
            <div className="hero-caption mt-3 max-w-[36rem]">
              <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">{f.introCompact}</p>
              <p className="sr-only">{f.intro}</p>
            </div>
            <div className="hero-rule mt-4 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />

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
                    clusters={[...f.frequentGroups]}
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

            {moreCount > 0 ? (
              <div className="hero-cta-row mt-4 border border-white/14 bg-[rgb(0_0_0/0.24)] p-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                <p className="text-[11px] leading-snug text-white/72 sm:max-w-[20rem] sm:text-xs">
                  {expanded
                    ? "Showing the full library. Collapse to return to the top FAQs only."
                    : `Showing ${frequentCount} frequent answers. Expand for ${moreCount} more question${moreCount === 1 ? "" : "s"}.`}
                </p>
                <button
                  type="button"
                  className="mt-3 inline-flex min-h-[44px] w-full shrink-0 items-center justify-center border border-white/22 bg-[rgb(255_255_255/0.06)] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[color:var(--y)]/50 sm:mt-0 sm:w-auto"
                  aria-expanded={expanded}
                  aria-controls="home-faq-list"
                  onClick={() => setExpanded((v) => !v)}
                >
                  {expanded ? f.collapseQuestionsLabel : f.expandQuestionsLabel}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

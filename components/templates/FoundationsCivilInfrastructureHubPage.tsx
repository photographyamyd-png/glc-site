"use client";

import Link from "next/link";
import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { FoundationsHubQuoteForm } from "@/components/foundations/FoundationsHubQuoteForm";
import { GlcDnaLaneStyles } from "@/components/glc-dna/GlcDnaLaneStyles";
import { WhySection } from "@/components/glc-dna/sections/why-section";
import { ProcessSection } from "@/components/glc-dna/sections/process-section";
import { ServicesGridSection } from "@/components/glc-dna/sections/services-grid-section";
import { StatsSection } from "@/components/glc-dna/sections/stats-section";
import { CtaBandSection } from "@/components/glc-dna/sections/cta-band-section";
import {
  FOUNDATIONS_FAQ,
  FOUNDATIONS_COMPANY,
  FOUNDATIONS_HUB_HERO,
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_KNOWLEDGE_HUB_ACCORDIONS,
  FOUNDATIONS_KNOWLEDGE_HUB_TITLE,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_SUB_SLUGS,
  FOUNDATIONS_TECHNICAL_BASEMENT,
} from "@/lib/site/foundations-civil-infrastructure-content";
import {
  foundationsBlueprintMotif,
  FoundationsHubServiceFilmstrip,
  FoundationsHubVisualBridge,
} from "@/components/foundations/FoundationsHubLaneRhythm";
import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import {
  toFoundationsCtaBandProps,
  toFoundationsMegaMenuCards,
  toFoundationsProcessProps,
  toFoundationsServicesGridProps,
  toFoundationsStatsProps,
  toFoundationsWhyProps,
} from "@/lib/site/foundations-glc-dna-adapters";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { getServiceImage } from "@/lib/site/service-images";

const detailsClass =
  "foundations-hub-details group border border-[color:var(--g200)] bg-white p-3 shadow-sm panel-machined";

const summaryClass =
  "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 font-label text-[13px] font-semibold leading-snug tracking-[0.02em] text-ink marker:content-none outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden";

export function FoundationsCivilInfrastructureHubPage() {
  const heroImage = getServiceImage("foundations-civil-infrastructure");
  const megaCards = toFoundationsMegaMenuCards();

  return (
    <article className="relative">
      {/* Hero — unchanged from legacy hub */}
      <section className="hero-stage section-major band-dark-field relative min-h-[min(100dvh,920px)] scroll-mt-[var(--header)] overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.72)] to-[rgb(10_12_11/0.35)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.3)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.16]" />
        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-8 pt-[var(--site-header-offset)] sm:px-10 sm:pb-10 lg:justify-between lg:px-20 lg:pt-[var(--site-header-offset)]">
          <div className="max-w-[min(100%,var(--max))] rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
            <p className="hero-eyebrow label-overline-on-dark mb-0">Foundations & Civil Infrastructure</p>
            <h1 className="mt-[var(--s7)] max-w-4xl font-serif text-[clamp(1.75rem,5vw,3.25rem)] font-semibold uppercase leading-[0.95] tracking-tight text-white">
              Foundations & Civil Infrastructure Built to Last —{" "}
              <span className="text-[color:var(--y)]">Serving Barrie, Orillia & Simcoe County</span>
            </h1>
            <h2 className="mt-6 max-w-4xl font-serif text-base font-bold uppercase leading-snug tracking-tight text-white/90 sm:text-lg">
              {FOUNDATIONS_HUB_HERO.h2}
            </h2>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{FOUNDATIONS_HUB_HERO.introA}</p>
            <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{FOUNDATIONS_HUB_HERO.introB}</p>
            <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
            <div className="hero-cta-row mt-6 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-2 sm:items-stretch">
              <Link
                href="/contact/"
                className="cta-hero-fill flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_HERO.ctaPrimaryLabel}
              </Link>
              <Link
                href={PHONE_TEL}
                className="cta-outline-light flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_HERO.ctaPhoneLabel}
              </Link>
            </div>
            <p className="mt-3 text-sm text-white/60">{FOUNDATIONS_HUB_HERO.microcopy}</p>
            <p className="mt-6 eyebrow text-white">{FOUNDATIONS_COMPANY}</p>
          </div>
        </div>
      </section>

      {/* Post-hero — GLC-DNA lane sections + layered rhythm (imagery / scrims / rails; order unchanged). */}
      <GlcDnaLaneStyles />
      <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[7]} variant="into-dark" priority />

      <div className="glc-dna-sandbox" id="foundations-glc-dna-lane">
        <div className="relative isolate scroll-mt-[var(--header)] border-b-4 border-[color:var(--y)]">
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.14]"
            style={{
              background:
                "radial-gradient(ellipse 65% 70% at 18% 12%, rgb(242 183 5 / 0.35) 0%, transparent 52%), radial-gradient(ellipse 50% 45% at 92% 88%, rgb(242 183 5 / 0.12) 0%, transparent 48%)",
            }}
            aria-hidden
          />
          <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="z-[2] opacity-[0.12]" />
          <div className="relative z-[3]">
            <WhySection {...toFoundationsWhyProps()} />
          </div>
        </div>

        <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[0]} variant="into-light" />

        <div className="relative isolate scroll-mt-[var(--header)] overflow-hidden border-b border-[color:var(--g200)] bg-white">
          <div className={foundationsBlueprintMotif} aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgb(242_183_5/0.08),transparent_55%)]"
            aria-hidden
          />
          <ClaudeLogicWatermark placement="center-right" mode="default" className="z-[2] opacity-[0.06]" />
          <div className="relative z-[3]">
            <ProcessSection {...toFoundationsProcessProps()} />
          </div>
        </div>

        <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[2]} variant="into-light" />

        <div className="relative isolate scroll-mt-[var(--header)] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-[0] opacity-[0.06]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(30 28 26 / 0.2) 0%, transparent 55%), linear-gradient(180deg, rgb(255 255 255 / 0.9) 0%, transparent 28%)",
            }}
            aria-hidden
          />
          <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[2] opacity-[0.05]" />
          <div className="relative z-[3]">
            <FoundationsHubServiceFilmstrip slugs={FOUNDATIONS_SUB_SLUGS.slice(0, 6)} />
            <ServicesGridSection cards={megaCards} {...toFoundationsServicesGridProps()} />
          </div>
        </div>

        <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[4]} variant="into-dark" />

        <div className="relative isolate scroll-mt-[var(--header)] border-b border-[color:var(--g200)]">
          <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" className="z-[2] opacity-[0.1]" />
          <div className="relative z-[3]">
            <StatsSection {...toFoundationsStatsProps()} />
          </div>
        </div>

        <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[5]} variant="into-dark" />

        <div className="relative isolate scroll-mt-[var(--header)]">
          <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[2] opacity-[0.08]" />
          <div className="relative z-[3]">
            <CtaBandSection {...toFoundationsCtaBandProps()} />
          </div>
        </div>
      </div>

      <FoundationsHubVisualBridge slug={FOUNDATIONS_SUB_SLUGS[3]} variant="into-light" />

      {/* Quote form — hero-style layers on brand yellow (adjunct, not a DNA section). */}
      <section
        className="relative scroll-mt-[var(--header)] overflow-hidden border-y-4 border-[color:var(--ink-deep)] py-[var(--section-v)]"
        aria-labelledby="foundations-quote-form-heading"
      >
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover object-[center_35%] opacity-[0.18]"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[color:var(--y)]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.22)] via-transparent to-[rgb(10_12_11/0.18)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.35)] via-transparent to-[rgb(255_255_255/0.12)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 30%, rgb(242 183 5 / 0.55) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-left" mode="default" className="z-[1] opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--ink-deep)_14%,transparent),transparent_48%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <FoundationsHubQuoteForm />
        </div>
      </section>

      {/* SEO basement — native <details> for FAQ crawl parity with FoundationsHubJsonLd (not FeaturedAccordion). */}
      <section
        className="band-light-field relative isolate z-[6] -mt-8 overflow-hidden scroll-mt-[var(--header)] border-t border-[color:var(--y)] bg-[rgb(255_255_255/0.97)] pb-[var(--section-v)] pt-10 shadow-[0_-20px_56px_rgb(0_0_0/0.12)] backdrop-blur-xl sm:-mt-10 lg:-mt-12"
        aria-labelledby="foundations-knowledge-hub-heading"
      >
        <div className={foundationsBlueprintMotif} aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--y)_5%,transparent),transparent_45%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-left" mode="default" className="opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">Reference library</p>
            <h2 id="foundations-knowledge-hub-heading" className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              {FOUNDATIONS_KNOWLEDGE_HUB_TITLE}
            </h2>
            <p className="mt-4 max-w-prose font-sans text-sm leading-relaxed text-ink-muted">
              Expand for full service language, coverage, and FAQ — kept in the DOM for search and spec review.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <details name="foundations-knowledge" className={detailsClass}>
              <summary className={summaryClass}>
                <span className="text-left">{FOUNDATIONS_TECHNICAL_BASEMENT.heading}</span>
                <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-3 space-y-4 border-t border-[color:var(--g200)] pt-4">
                {FOUNDATIONS_TECHNICAL_BASEMENT.paragraphs.map((p, pi) => (
                  <p key={pi} className="max-w-prose font-sans text-[15px] leading-[1.72] text-ink sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </details>

            {FOUNDATIONS_KNOWLEDGE_HUB_ACCORDIONS.map((block) => (
              <details key={block.summary} name="foundations-knowledge" className={detailsClass}>
                <summary className={summaryClass}>
                  <span className="text-left">{block.summary}</span>
                  <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-3 space-y-4 border-t border-[color:var(--g200)] pt-4">
                  {block.paragraphs.map((p, pi) => (
                    <p key={`${block.summary}-${pi}`} className="max-w-prose font-sans text-[15px] leading-[1.72] text-ink sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </details>
            ))}

            <details name="foundations-knowledge" className={detailsClass}>
              <summary className={summaryClass}>
                <span className="text-left">Service line detail pages</span>
                <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <ul className="mt-3 space-y-2 border-t border-[color:var(--g200)] pt-4 font-sans text-[15px] leading-[1.72] text-ink sm:text-base">
                {FOUNDATIONS_SERVICE_CARDS.map((card) => (
                  <li key={card.slug}>
                    <Link
                      href={`${FOUNDATIONS_HUB_PATH}${card.slug}/`}
                      className="font-semibold text-ink underline decoration-[color:var(--y)]/50 underline-offset-4 hover:text-[color:var(--y)]"
                    >
                      {card.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <details name="foundations-knowledge" className={detailsClass}>
              <summary className={summaryClass}>
                <span className="text-left">Frequently asked questions — verbatim answers</span>
                <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-3 border-t border-[color:var(--g200)] pt-4">
                <GlcFaqDetailsGrid className="w-full max-w-none" groupName="foundations-faq-verbatim" tone="light" items={FOUNDATIONS_FAQ} />
              </div>
            </details>
          </div>
        </div>
      </section>
    </article>
  );
}

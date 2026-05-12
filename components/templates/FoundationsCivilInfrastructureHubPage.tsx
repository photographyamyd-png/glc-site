"use client";

import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import {
  FOUNDATIONS_FAQ,
  FOUNDATIONS_HUB_FUNNEL_CTA,
  FOUNDATIONS_HUB_FUNNEL_HERO,
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_HUB_SPEC_SHEET,
  FOUNDATIONS_HUB_ZIGZAG,
  FOUNDATIONS_KNOWLEDGE_HUB_ACCORDIONS,
  FOUNDATIONS_KNOWLEDGE_HUB_TITLE,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_STANDARD_SECTION,
  getFoundationsSubImageAlt,
  getFoundationsSubImageSrc,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";

const detailsClass =
  "foundations-hub-details group border border-[color:var(--g200)] bg-white p-4 shadow-sm panel-machined";

const summaryClass =
  "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none sm:text-xl [&::-webkit-details-marker]:hidden";

export function FoundationsCivilInfrastructureHubPage() {
  const heroSrc = getFoundationsSubImageSrc(FOUNDATIONS_HUB_FUNNEL_HERO.imageSlug);
  const heroAlt = FOUNDATIONS_HUB_FUNNEL_HERO.imageAlt;

  return (
    <article className="relative">
      {/* 1 — Hero: split, rebar + concrete visual */}
      <section className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.08),transparent_45%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.12]" />
        <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max-bleed))] gap-10 px-4 pb-[var(--section-v)] pt-[calc(var(--site-header-offset)+var(--s9))] sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10">
          <div className="max-w-xl rounded-sm border border-white/10 bg-[rgb(10_12_11/0.55)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-none">
            <p className="hero-eyebrow label-overline-on-dark mb-0">{FOUNDATIONS_HUB_FUNNEL_HERO.eyebrow}</p>
            <h1 className="mt-[var(--s7)] font-serif text-[clamp(1.65rem,4.2vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-tight text-white">
              {FOUNDATIONS_HUB_FUNNEL_HERO.h1}
            </h1>
            <p className="mt-6 max-w-prose font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">
              {FOUNDATIONS_HUB_FUNNEL_HERO.supportingLine}
            </p>
            <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/50" aria-hidden />
            <div className="hero-cta-row mt-6 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.28)] p-4 sm:grid-cols-2 sm:items-stretch">
              <Link
                href="/contact/"
                className="cta-hero-fill flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_FUNNEL_CTA.primaryLabel}
              </Link>
              <Link
                href={PHONE_TEL}
                className="cta-outline-light flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_FUNNEL_CTA.phoneLabel}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden border border-white/15 bg-[color:var(--g200)] lg:min-h-[420px]">
            <Image
              src={heroSrc}
              alt={heroAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.45)] to-transparent" aria-hidden />
          </div>
        </div>
      </section>

      {/* 2 — The Standard: certification / badge row */}
      <section className="section-major band-light relative scroll-mt-[var(--header)] border-b border-[color:var(--g200)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(242_183_5/0.05),transparent_42%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">Compliance & accountability</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {FOUNDATIONS_STANDARD_SECTION.h2}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-lg font-semibold text-ink sm:text-xl">{FOUNDATIONS_STANDARD_SECTION.lede}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FOUNDATIONS_STANDARD_SECTION.badges.map((b) => (
              <li
                key={b.title}
                className="bespoke-surface panel-machined flex flex-col border border-[color:var(--g200)] bg-white p-5 shadow-[0_12px_40px_rgb(0_0_0/0.06)]"
              >
                <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink sm:text-base">{b.title}</p>
                <p className="mt-3 font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Service detail: zig-zag */}
      <section className="section-major band-dark-field relative scroll-mt-[var(--header)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(242_183_5/0.07),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-left" mode="on-dark" className="z-[1] opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Service detail</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Forming, footings & structural slabs
            </h2>
          </div>
          <div className="mt-12 space-y-14 lg:space-y-20">
            {FOUNDATIONS_HUB_ZIGZAG.map((row, i) => {
              const src = getFoundationsSubImageSrc(row.imageSlug);
              const alt = getFoundationsSubImageAlt(row.imageSlug);
              const imageFirst = i % 2 === 0;
              return (
                <div
                  key={row.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div className={`relative min-h-[240px] overflow-hidden border border-white/15 bg-[rgb(30_28_26)] lg:min-h-[320px] ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                    <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(min-width: 1024px) 45vw, 100vw" />
                  </div>
                  <div className={`border-l-4 border-[color:var(--y)] pl-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">{row.title}</h3>
                    <p className="mt-4 max-w-prose font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">{row.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — Spec sheet */}
      <section className="section-major band-light relative scroll-mt-[var(--header)] border-b border-[color:var(--g200)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgb(242_183_5/0.04),transparent_50%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.065]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">Technical alignment</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">{FOUNDATIONS_HUB_SPEC_SHEET.h2}</h2>
            <p className="mt-4 max-w-prose font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_HUB_SPEC_SHEET.intro}</p>
          </div>
          <dl className="mt-10 space-y-0 border border-[color:var(--g200)] bg-white font-sans text-[15px] leading-[1.72] text-ink shadow-[0_16px_48px_rgb(0_0_0/0.06)] sm:text-base">
            {FOUNDATIONS_HUB_SPEC_SHEET.rows.map((row, idx) => (
              <div
                key={row.label}
                className={`grid gap-2 border-[color:var(--g200)] px-4 py-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-6 sm:px-6 sm:py-5 ${idx > 0 ? "border-t" : ""}`}
              >
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted sm:pt-0.5">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5 — Bold CTA block */}
      <section className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.14),transparent_40%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.11]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl border border-white/15 bg-[rgb(10_12_11/0.65)] p-8 text-center shadow-[0_28px_90px_rgb(0_0_0/0.4)] backdrop-blur-md sm:p-12">
            <h2 className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              {FOUNDATIONS_HUB_FUNNEL_CTA.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-[15px] leading-[1.72] text-white/85 sm:text-base">{FOUNDATIONS_HUB_FUNNEL_CTA.sub}</p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="/contact/"
                className="cta-hero-fill inline-flex min-h-[48px] min-w-[min(100%,280px)] items-center justify-center px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_FUNNEL_CTA.primaryLabel}
              </Link>
              <Link
                href={PHONE_TEL}
                className="cta-outline-light inline-flex min-h-[48px] min-w-[min(100%,280px)] items-center justify-center px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.12em]"
              >
                {FOUNDATIONS_HUB_FUNNEL_CTA.phoneLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge hub — Technical Specifications & Project FAQ */}
      <section
        className="section-major band-light relative scroll-mt-[var(--header)] pb-[var(--section-v)] pt-2"
        aria-labelledby="foundations-knowledge-hub-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(242_183_5/0.035),transparent_50%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-right" mode="default" className="z-[1] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">SEO reference</p>
            <h2 id="foundations-knowledge-hub-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {FOUNDATIONS_KNOWLEDGE_HUB_TITLE}
            </h2>
            <p className="mt-4 max-w-prose font-sans text-sm leading-relaxed text-ink-muted">
              Expand any topic for full project language, service scope, and FAQ answers — identical to the legacy hub copy, kept in the DOM for search and specification review.
            </p>
          </div>

          <div className="mt-10 space-y-3">
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
              <div className="mt-3 space-y-6 border-t border-[color:var(--g200)] pt-4">
                {FOUNDATIONS_FAQ.map((item) => (
                  <div key={item.q}>
                    <p className="font-sans text-base font-semibold text-ink">{item.q}</p>
                    <p className="mt-2 max-w-prose font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{item.a}</p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>
    </article>
  );
}

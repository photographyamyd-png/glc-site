"use client";

import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { FoundationsHubQuoteForm } from "@/components/foundations/FoundationsHubQuoteForm";
import {
  FOUNDATIONS_FAQ,
  FOUNDATIONS_COMPANY,
  FOUNDATIONS_HUB_HERO,
  FOUNDATIONS_HUB_PAIN,
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_HUB_PROOF,
  FOUNDATIONS_HUB_QUALITY_CHECKS,
  FOUNDATIONS_HUB_YELLOW_STRIP,
  FOUNDATIONS_HUB_ZIGZAG,
  FOUNDATIONS_KNOWLEDGE_HUB_ACCORDIONS,
  FOUNDATIONS_KNOWLEDGE_HUB_TITLE,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_TECHNICAL_BASEMENT,
  getFoundationsSubImageAlt,
  getFoundationsSubImageSrc,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { getServiceImage } from "@/lib/site/service-images";

const detailsClass =
  "foundations-hub-details group border border-[color:var(--g200)] bg-white p-4 shadow-sm panel-machined";

const summaryClass =
  "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none sm:text-xl [&::-webkit-details-marker]:hidden";

const blueprintBg =
  "pointer-events-none absolute inset-0 opacity-[0.35] [background-image:repeating-linear-gradient(0deg,transparent,transparent_11px,rgb(30_28_26/0.06)_11px,rgb(30_28_26/0.06)_12px),repeating-linear-gradient(90deg,transparent,transparent_11px,rgb(30_28_26/0.06)_11px,rgb(30_28_26/0.06)_12px)]";

export function FoundationsCivilInfrastructureHubPage() {
  const heroImage = getServiceImage("foundations-civil-infrastructure");

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

      {/* Post-hero 1 — Pain (charcoal warning band) */}
      <section className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-b-4 border-[color:var(--y)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.1),transparent_42%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="z-[1] opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Risk</p>
            <h2 className="mt-3 max-w-4xl font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              {FOUNDATIONS_HUB_PAIN.h2}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">{FOUNDATIONS_HUB_PAIN.lede}</p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {FOUNDATIONS_HUB_PAIN.cards.map((c) => (
              <li
                key={c.title}
                className="border border-white/12 bg-[rgb(10_12_11/0.55)] p-5 shadow-[0_16px_48px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-6"
              >
                <p className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-[color:var(--y)]">{c.title}</p>
                <p className="mt-3 font-sans text-[15px] leading-[1.72] text-white/88 sm:text-base">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Post-hero 2 — Solution (light + blueprint + checklist + zig-zag) */}
      <section className="section-major band-light relative scroll-mt-[var(--header)] overflow-visible border-b border-[color:var(--g200)]">
        <div className={blueprintBg} aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgb(242_183_5/0.06),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-right" mode="default" className="z-[1] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-5">
              <p className="eyebrow text-ink">Quality checklist</p>
              <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                Field execution <span className="text-[color:var(--y)]">to IFC</span>
              </h2>
              <ol className="mt-8 space-y-6">
                {FOUNDATIONS_HUB_QUALITY_CHECKS.map((item, i) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="font-serif text-4xl font-bold leading-none text-[color:var(--y)] sm:text-5xl" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-serif text-base font-bold uppercase tracking-[0.04em] text-ink sm:text-lg">{item.label}</p>
                      <p className="mt-2 font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow text-ink-muted">Technical sequence</p>
              <p className="mt-2 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">Rebar · forming · slabs</p>
              <div className="mt-10 space-y-12 lg:space-y-16">
                {FOUNDATIONS_HUB_ZIGZAG.map((row, i) => {
                  const src = getFoundationsSubImageSrc(row.imageSlug);
                  const alt = getFoundationsSubImageAlt(row.imageSlug);
                  const imgFirst = i % 2 === 0;
                  const isLast = i === FOUNDATIONS_HUB_ZIGZAG.length - 1;
                  return (
                    <div key={row.step} className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${isLast ? "lg:-mb-12" : ""}`}>
                      <div
                        className={`relative min-h-[220px] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)] shadow-[0_20px_50px_rgb(0_0_0/0.12)] lg:min-h-[280px] ${imgFirst ? "lg:order-1" : "lg:order-2"} ${
                          isLast ? "lg:shadow-[0_28px_70px_rgb(0_0_0/0.18)]" : ""
                        }`}
                      >
                        <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(min-width: 1024px) 38vw, 100vw" />
                      </div>
                      <div className={`border-l-4 border-[color:var(--y)] pl-5 ${imgFirst ? "lg:order-2" : "lg:order-1"}`}>
                        <p className="font-serif text-5xl font-bold leading-none text-[color:var(--y)]/90 sm:text-6xl" aria-hidden>
                          {row.step}
                        </p>
                        <h3 className="mt-2 font-serif text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">{row.title}</h3>
                        <p className="mt-4 font-sans text-[15px] leading-[1.72] text-ink sm:text-base">{row.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow interrupter (charcoal + yellow rails) */}
      <section
        className="relative z-[5] scroll-mt-[var(--header)] border-y-4 border-[color:var(--y)] bg-[rgb(10_12_11/0.96)] py-12 sm:py-14"
        aria-labelledby="foundations-yellow-strip-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--y) 0, var(--y) 1px, transparent 1px, transparent 11px)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_85%_50%,rgb(242_183_5/0.14),transparent_60%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 text-center sm:px-6 lg:px-10">
          <h2 id="foundations-yellow-strip-heading" className="font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
            {FOUNDATIONS_HUB_YELLOW_STRIP.h2}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[15px] leading-[1.72] text-white/88 sm:text-base">{FOUNDATIONS_HUB_YELLOW_STRIP.sub}</p>
        </div>
      </section>

      {/* Post-hero 3 — Proof (certification row + highlights) */}
      <section className="section-major band-light relative scroll-mt-[var(--header)] border-b border-[color:var(--g200)] bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgb(242_183_5/0.05),transparent_48%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.055]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pb-[var(--section-v)] pt-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--y)] pl-5 text-center lg:text-left">
            <p className="eyebrow text-ink">Proof</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">{FOUNDATIONS_HUB_PROOF.h2}</h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base font-semibold text-ink lg:mx-0">{FOUNDATIONS_HUB_PROOF.inspectionLine}</p>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {FOUNDATIONS_HUB_PROOF.badgeTitles.map((t) => (
              <li
                key={t}
                className="border border-[color:var(--g200)] bg-[color:rgb(255_255_255/0.95)] px-4 py-2 font-serif text-xs font-bold uppercase tracking-[0.08em] text-ink shadow-sm sm:text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <ul className="mx-auto mt-10 max-w-3xl list-disc space-y-3 pl-5 font-sans text-[15px] leading-[1.72] text-ink sm:text-base lg:mx-0">
            {FOUNDATIONS_HUB_PROOF.highlights.map((h) => (
              <li key={h} className="pl-1 marker:text-[color:var(--y)]">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Post-hero 4 — Full-bleed yellow + quote form */}
      <section
        className="relative scroll-mt-[var(--header)] border-y-4 border-[color:var(--ink-deep)] bg-[color:var(--y)] py-[var(--section-v)]"
        aria-labelledby="foundations-quote-form-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--ink-deep)_12%,transparent),transparent_50%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <FoundationsHubQuoteForm />
        </div>
      </section>

      {/* Post-hero 5 — SEO basement */}
      <section
        className="band-light-field relative z-[6] -mt-8 scroll-mt-[var(--header)] border-t border-[color:var(--y)] bg-[rgb(255_255_255/0.97)] pb-[var(--section-v)] pt-10 shadow-[0_-20px_56px_rgb(0_0_0/0.12)] backdrop-blur-xl sm:-mt-10 lg:-mt-12"
        aria-labelledby="foundations-knowledge-hub-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--y)_5%,transparent),transparent_45%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-left" mode="default" className="opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">Reference library</p>
            <h2 id="foundations-knowledge-hub-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
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

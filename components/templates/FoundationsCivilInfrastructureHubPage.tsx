"use client";

import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { StickyTabBox } from "@/components/drainage-hardscaping/StickyTabBox";
import {
  FOUNDATIONS_COMPANY,
  FOUNDATIONS_FAQ,
  FOUNDATIONS_FINAL_CTA,
  FOUNDATIONS_HUB_HERO,
  FOUNDATIONS_MID_CTA,
  FOUNDATIONS_SERVICE_AREA,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_SERVICES_INTRO,
  FOUNDATIONS_SERVICES_INTRO_B,
  FOUNDATIONS_TRUST_BENTO,
  FOUNDATIONS_WHY,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { getServiceImage } from "@/lib/site/service-images";

export function FoundationsCivilInfrastructureHubPage() {
  const heroImage = getServiceImage("foundations-civil-infrastructure");

  const overviewPanel = (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.08] sm:opacity-[0.11]" />
      {/* Same architecture as ServicePageTemplate scope band: 6+6 split, raster + machined panel (no centered stack / no dark slab / no gutter breakout) */}
      <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max))] gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-6">
          <p className="eyebrow text-ink">Overview & trust</p>
          <p className="mt-2 eyebrow text-ink-muted">Field-led crews · WSIB · Liability coverage</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Why teams spec us on <span className="text-[color:var(--y)]">civil packages</span>
          </h2>
          <div className="mt-[var(--s7)] max-w-[min(100%,42rem)] space-y-6">
            <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_HUB_HERO.introC}</p>
            <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_HUB_HERO.introD}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover object-[center_42%] sm:object-[center_38%]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className="bespoke-surface panel-machined relative border border-[color:var(--g200)] bg-white p-5 sm:p-8">
            <p className="eyebrow text-ink-muted">Trust & compliance</p>
            <ul className="mt-4 space-y-5">
              {FOUNDATIONS_TRUST_BENTO.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 bg-[color:var(--y)]" aria-hidden />
                  <div className="min-w-0">
                    <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink sm:text-base">{item.title}</p>
                    <p className="mt-1 text-[15px] leading-[1.72] text-ink sm:text-base">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const servicesPanel = (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(242_183_5/0.04),transparent_40%)]" aria-hidden />
      <ClaudeLogicWatermark placement="center-left" mode="default" className="z-[1] opacity-[0.065]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Capabilities</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Our Foundations & Civil Infrastructure Services
          </h2>
        </div>
        <p className="mt-[var(--s7)] max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_SERVICES_INTRO}</p>
        <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_SERVICES_INTRO_B}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {FOUNDATIONS_SERVICE_CARDS.map((card) => (
            <Link
              key={card.slug}
              href={`/services/foundations-civil-infrastructure/${card.slug}/`}
              className="group bespoke-surface panel-machined flex flex-col border border-[color:var(--g200)] bg-white p-5 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none sm:p-6"
            >
              <span className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink group-hover:text-[color:var(--y)] sm:text-2xl">
                {card.title}
              </span>
              <p className="mt-3 flex-1 text-[15px] leading-[1.72] text-ink sm:text-base">{card.blurb}</p>
              <span className="mt-4 eyebrow text-[color:var(--y)]">Open scope →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const whyPanel = (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(200deg,rgb(242_183_5/0.045),transparent_55%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.085]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Differentiators</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Why Builders, Developers & Municipalities Choose Us
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FOUNDATIONS_WHY.map((block) => (
            <details
              key={block.heading}
              name="foundations-why"
              className="foundations-hub-details group border border-[color:var(--g200)] bg-white p-4 shadow-sm panel-machined"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink marker:content-none sm:text-2xl [&::-webkit-details-marker]:hidden">
                <span>{block.heading}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{block.body}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );

  const areasPanel = (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.05),transparent_50%)]" aria-hidden />
      <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Coverage</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {FOUNDATIONS_SERVICE_AREA.heading}
          </h2>
        </div>
        <p className="mt-[var(--s7)] max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_SERVICE_AREA.intro}</p>
        <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_SERVICE_AREA.introB}</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FOUNDATIONS_SERVICE_AREA.cities.map((city) => (
            <li
              key={city}
              className="eyebrow border border-[color:var(--g200)] bg-white px-3 py-2 text-center text-ink"
            >
              {city}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_SERVICE_AREA.closing}</p>
      </div>
    </div>
  );

  const faqPanel = (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgb(242_183_5/0.06),transparent_55%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-right" mode="default" className="z-[1] opacity-[0.072]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions — Foundations & Civil Infrastructure
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FOUNDATIONS_FAQ.map((item) => (
            <details key={item.q} name="foundations-faq" className="foundations-hub-details group border border-[color:var(--g200)] bg-white p-4 panel-machined">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink marker:content-none sm:text-2xl [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );

  const contactPanel = (
    <div className="space-y-10">
      <section className="relative overflow-hidden border border-white/15 bg-[rgb(10_12_11/0.92)] p-6 text-white sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" className="opacity-[0.1]" />
        <div className="relative z-10 border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-white">Mid-page CTA</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            {FOUNDATIONS_MID_CTA.heading}
          </h2>
          <p className="mt-[var(--s7)] max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{FOUNDATIONS_MID_CTA.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
              {FOUNDATIONS_HUB_HERO.ctaPrimaryLabel}
            </Link>
            <Link
              href={PHONE_TEL}
              className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
            >
              Call Us: 705-619-4902
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/55">{FOUNDATIONS_MID_CTA.microcopy}</p>
        </div>
      </section>

      <section className="relative border border-[color:var(--g200)] bg-white p-6 sm:p-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Final CTA</p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {FOUNDATIONS_FINAL_CTA.heading}
          </h2>
          <p className="mt-[var(--s7)] max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_FINAL_CTA.bodyA}</p>
          <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{FOUNDATIONS_FINAL_CTA.bodyB}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact/" className="cta-hero-fill inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
              {FOUNDATIONS_HUB_HERO.ctaPrimaryLabel}
            </Link>
            <Link
              href={PHONE_TEL}
              className="inline-flex min-h-[44px] items-center justify-center border-2 border-[color:var(--ink)] bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none"
            >
              Call 705-619-4902
            </Link>
          </div>
          <p className="mt-6 eyebrow text-ink-muted">{FOUNDATIONS_FINAL_CTA.tagline}</p>
        </div>
      </section>
    </div>
  );

  return (
    <article className="relative">
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

      <section className="section-major band-light relative scroll-mt-[var(--header)] px-0 py-0">
        <div className="mx-auto max-w-[min(100%,var(--max-bleed))] px-4 pb-[var(--section-v)] pt-2 sm:px-6 lg:px-10">
          <StickyTabBox
            panelReveal
            ariaLabel="Foundations and civil infrastructure hub sections"
            tabs={[
              { label: "Overview", content: overviewPanel },
              { label: "Services", content: servicesPanel },
              { label: "Why us", content: whyPanel },
              { label: "Service area", content: areasPanel },
              { label: "FAQ", content: faqPanel },
              { label: "Contact", content: contactPanel },
            ]}
          />
        </div>
      </section>
    </article>
  );
}

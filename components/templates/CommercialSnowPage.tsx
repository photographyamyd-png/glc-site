import Image from "next/image";
import Link from "next/link";
import type { ServiceDef } from "@/lib/site/registry";
import { cn } from "@/lib/utils";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CardSurface } from "@/components/ui/CardSurface";
import { CommercialSnowJsonLd } from "@/components/seo/CommercialSnowJsonLd";
import { CtvSnowFeature } from "@/components/templates/commercial-snow/CtvSnowFeature";
import { CommercialSnowLocalVideos } from "@/components/templates/commercial-snow/CommercialSnowLocalVideos";
import { CommercialSnowPropertyTabs } from "@/components/templates/commercial-snow/CommercialSnowPropertyTabs";
import { CommercialSnowProofTabs } from "@/components/templates/commercial-snow/CommercialSnowProofTabs";
import { CommercialSnowStickyNav } from "@/components/templates/commercial-snow/CommercialSnowStickyNav";
import { COMMERCIAL_SNOW_FAQS } from "@/lib/site/commercial-snow-faqs";
import {
  COMMERCIAL_SNOW_CHAPTERS,
  COMMERCIAL_SNOW_CLOSING,
  COMMERCIAL_SNOW_CONTRACTS,
  COMMERCIAL_SNOW_CREDENTIALS,
  COMMERCIAL_SNOW_EQUIPMENT,
  COMMERCIAL_SNOW_FAQ_SECTION,
  COMMERCIAL_SNOW_HERO,
  COMMERCIAL_SNOW_MID_LOWER_CTA,
  COMMERCIAL_SNOW_MID_SERVICE_CTA,
  COMMERCIAL_SNOW_PROCESS,
  COMMERCIAL_SNOW_PROPERTY_TYPES,
  COMMERCIAL_SNOW_RELATED,
  COMMERCIAL_SNOW_SERVICE_CARDS,
  COMMERCIAL_SNOW_SERVICE_DEEP_DIVES,
  COMMERCIAL_SNOW_SERVICES_CHAPTER,
  COMMERCIAL_SNOW_SLA,
  COMMERCIAL_SNOW_TRUST_ITEMS,
  COMMERCIAL_SNOW_TRUST_STRIP_ARIA,
  COMMERCIAL_SNOW_VALUE_PROP,
  COMMERCIAL_SNOW_WHY_CHOOSE,
  COMMERCIAL_SNOW_WHY_INTRO,
  getCommercialSnowProcessStepsForJsonLd,
} from "@/lib/site/commercial-snow-page-data";
import { SNOW_HUB_SECTION } from "@/lib/site/snow-removal-media";
import { getServiceImage } from "@/lib/site/service-images";

type Props = { service: ServiceDef; related: ServiceDef[] };

export function CommercialSnowPage({ service, related }: Props) {
  const processStepsJson = getCommercialSnowProcessStepsForJsonLd();

  return (
    <article className="relative">
      <CommercialSnowJsonLd
        faq={COMMERCIAL_SNOW_FAQS}
        processHeading={COMMERCIAL_SNOW_PROCESS.h2}
        processDescription={COMMERCIAL_SNOW_PROCESS.visibleLede}
        steps={processStepsJson}
      />

      <CommercialSnowStickyNav chapters={COMMERCIAL_SNOW_CHAPTERS} />

      {/* —— Hero —— */}
            <section
              id="chapter-hero"
              className="scroll-mt-[var(--header)] bg-[var(--ink-deep)]"
              aria-labelledby={COMMERCIAL_SNOW_HERO.h1Id}
            >
              <div className="hero-stage section-major band-dark-field relative min-h-[min(100dvh,920px)] overflow-hidden">
          <Image
            src={SNOW_HUB_SECTION.hero.src}
            alt={COMMERCIAL_SNOW_HERO.heroImageAriaLabel}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.72)] to-[rgb(10_12_11/0.35)]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.75)] via-transparent to-[rgb(10_12_11/0.28)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgb(255_255_255/0.06),transparent_55%)]" aria-hidden />
          <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.16]" />

          <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-8 pt-[calc(var(--header)+2rem)] sm:px-10 sm:pb-10 lg:justify-between lg:px-20 lg:pt-[calc(var(--header)+3rem)]">
            <div className="max-w-[min(100%,var(--max))] rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl">
              <div
                className="mb-4 inline-flex border border-white/20 bg-[rgb(0_0_0/0.35)] px-3 py-2"
                aria-label={COMMERCIAL_SNOW_HERO.pressBadgeAriaLabel}
              >
                <div className="flex flex-col gap-0.5">
                  {COMMERCIAL_SNOW_HERO.pressBadgeLines.map((line) => (
                    <span key={line} className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {line}
                    </span>
                  ))}
                </div>
              </div>

              <p className="eyebrow text-white">{COMMERCIAL_SNOW_HERO.eyebrow}</p>
              <p className="mt-2 text-[13px] text-white/80">
                <Link href={COMMERCIAL_SNOW_HERO.breadcrumb.homeHref} className="underline-offset-2 hover:text-white hover:underline">
                  Home
                </Link>
                <span aria-hidden> · </span>
                <Link href={COMMERCIAL_SNOW_HERO.breadcrumb.servicesHref} className="underline-offset-2 hover:text-white hover:underline">
                  Services
                </Link>
                <span aria-hidden> · </span>
                <span>{COMMERCIAL_SNOW_HERO.breadcrumb.currentLabel}</span>
              </p>

              <h1
                id={COMMERCIAL_SNOW_HERO.h1Id}
                className="mt-[var(--s7)] max-w-4xl font-serif text-[clamp(2.3rem,6.2vw,5.1rem)] font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-white"
              >
                {COMMERCIAL_SNOW_HERO.h1}
              </h1>
              <p className="hero-caption mt-[var(--s7)] max-w-[36rem] text-[15px] leading-[1.72] text-white/90 sm:text-base">
                {COMMERCIAL_SNOW_HERO.lede}
              </p>

              <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/80" aria-hidden />

              <div
                className="mt-6 grid gap-4 border-l-4 border-[color:var(--y)] pl-5 sm:grid-cols-3"
                aria-label={COMMERCIAL_SNOW_HERO.metricsAriaLabel}
              >
                {COMMERCIAL_SNOW_HERO.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-serif text-[clamp(52px,5vw,80px)] font-bold leading-none tracking-[-0.04em] text-[color:var(--y)]">
                      {m.value}
                    </p>
                    <p className="mt-2 text-[15px] leading-snug text-white/90">{m.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 eyebrow text-white">Service coverage</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Service coverage">
                {["Barrie", "Orillia", "Innisfil", "Wasaga Beach", "Simcoe County"].map((tag) => (
                  <li
                    key={tag}
                    className="eyebrow border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={COMMERCIAL_SNOW_HERO.ctas.primary.href} className="cta-hero-fill inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  {COMMERCIAL_SNOW_HERO.ctas.primary.label}
                </Link>
                <Link
                  href={COMMERCIAL_SNOW_HERO.ctas.secondary.href}
                  className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                >
                  {COMMERCIAL_SNOW_HERO.ctas.secondary.label}
                </Link>
                <Link
                  href={COMMERCIAL_SNOW_HERO.ctas.tertiary.href}
                  className="inline-flex min-h-[44px] items-center justify-center border border-white/25 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white hover:border-white/50"
                >
                  {COMMERCIAL_SNOW_HERO.ctas.tertiary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Trust + value —— */}
      <section id="chapter-overview" className="scroll-mt-[var(--header)]">
        <div className="section-major band-light relative overflow-hidden view-reveal">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(142deg,rgb(242_183_5/0.065),transparent_50%)]" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_90%_10%,rgb(30_28_26/0.04),transparent_55%)]" aria-hidden />
          <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.09]" />
          <ClaudeLogicWatermark placement="top-left" mode="default" className="z-[1] opacity-[0.06]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
            <div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              aria-label={COMMERCIAL_SNOW_TRUST_STRIP_ARIA}
            >
              {COMMERCIAL_SNOW_TRUST_ITEMS.map((t) => (
                <div
                  key={t.label}
                  className="border border-[color:var(--g200)] bg-white p-5 shadow-[inset_0_1px_0_rgb(242_183_5/0.35)]"
                >
                  <p className="font-sans text-lg font-bold uppercase tracking-[0.04em] text-ink">{t.label}</p>
                  <p className="mt-2 text-[15px] leading-[1.72] text-ink-muted">{t.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-6">
                <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{COMMERCIAL_SNOW_VALUE_PROP.visibleLede}</p>
                <p className="mt-6 eyebrow text-[color:var(--y)]" aria-hidden>
                  —
                </p>
                <p className="mt-2 max-w-prose font-sans text-xl font-bold uppercase tracking-[0.04em] text-ink/90">
                  {COMMERCIAL_SNOW_VALUE_PROP.pullQuote}
                </p>
                <details className="mt-8 group border border-[color:var(--g200)] bg-white p-4">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    {COMMERCIAL_SNOW_VALUE_PROP.detailsSummary}
                    <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                    <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                  </summary>
                  <div className="mt-4 space-y-4">
                    {COMMERCIAL_SNOW_VALUE_PROP.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                        {p}
                      </p>
                    ))}
                    <Link href={COMMERCIAL_SNOW_VALUE_PROP.inlineCta.href} className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--y)] hover:underline">
                      {COMMERCIAL_SNOW_VALUE_PROP.inlineCta.label}
                    </Link>
                  </div>
                </details>
              </div>
              <div className="relative aspect-[16/11] overflow-hidden border border-[color:var(--g200)] lg:col-span-6">
                <Image
                  src={SNOW_HUB_SECTION.valueProp.src}
                  alt={SNOW_HUB_SECTION.valueProp.alt}
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgb(10_12_11/0.25)] to-transparent" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Services —— */}
      <section
        id="chapter-services"
        className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-t border-white/10 view-reveal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(195deg,rgb(255_255_255/0.035),transparent_48%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgb(242_183_5/0.06),transparent_50%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="z-[1] opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Commercial programs</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              {COMMERCIAL_SNOW_SERVICES_CHAPTER.h2}
            </h2>
            <p className="mt-[var(--s7)] max-w-[42rem] text-[15px] leading-[1.72] text-white/90 sm:text-base">
              {COMMERCIAL_SNOW_SERVICES_CHAPTER.visibleLede}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMMERCIAL_SNOW_SERVICE_CARDS.map((c) => (
              <Link
                key={c.anchor}
                href={`#${c.anchor}`}
                className="group flex min-h-[44px] flex-col border border-white/15 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm transition-colors hover:border-[color:var(--y)]/50"
              >
                <span className="eyebrow text-[color:var(--y)]">{c.num}</span>
                <span className="mt-2 font-serif text-lg font-bold uppercase tracking-[0.04em] text-white group-hover:text-[color:var(--y)]">
                  {c.title}
                </span>
                <span className="mt-2 text-[15px] leading-[1.65] text-white/88">{c.teaser}</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 space-y-3">
            {COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.map((d, idx) => (
              <details
                key={d.anchor}
                id={d.anchor}
                name="snow-service-deep"
                className="group scroll-mt-[calc(var(--header)+52px)] border border-white/18 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-base font-bold uppercase tracking-[0.04em] text-white sm:text-lg">{d.summary}</span>
                  <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/15">
                    <Image
                      src={d.imageSrc}
                      alt={d.imageAlt}
                      fill
                      className={cn("object-cover", d.imageObjectClass ?? "object-center")}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                  <div className="space-y-4">
                    {d.paragraphs.map((p) => (
                      <p key={p.slice(0, 20)} className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
                        {p}
                      </p>
                    ))}
                    {d.propertyTypes ? (
                      <p className="text-[15px] leading-[1.72] text-white/80 sm:text-base">
                        <span className="font-semibold text-white">Property types served: </span>
                        {d.propertyTypes}
                      </p>
                    ) : null}
                    <Link href={d.learnMoreHref} className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--y)] hover:underline">
                      {d.learnMoreLabel}
                    </Link>
                  </div>
                </div>
                {idx === 3 ? (
                  <div className="mt-8 border-t border-white/15 pt-6">
                    <p className="text-[15px] text-white/90">{COMMERCIAL_SNOW_MID_SERVICE_CTA.text}</p>
                    <Link
                      href={COMMERCIAL_SNOW_MID_SERVICE_CTA.href}
                      className="cta-primary mt-4 inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
                    >
                      {COMMERCIAL_SNOW_MID_SERVICE_CTA.buttonLabel}
                    </Link>
                  </div>
                ) : null}
              </details>
            ))}
          </div>

          <div className="mt-12 border border-white/15 bg-[rgb(0_0_0/0.25)] p-6">
            <p className="eyebrow text-white">{COMMERCIAL_SNOW_RELATED.eyebrow}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {COMMERCIAL_SNOW_RELATED.cards.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="flex min-h-[44px] flex-col justify-center border border-white/20 bg-[rgb(255_255_255/0.05)] p-4 hover:border-[color:var(--y)]/60">
                    <span className="eyebrow text-white/70">{c.sub}</span>
                    <span className="mt-1 font-serif text-sm font-bold uppercase tracking-[0.04em] text-white">{c.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* —— Proof —— */}
      <section
        id="chapter-proof"
        className="section-major band-light-drift relative scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--g200)] view-reveal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgb(242_183_5/0.07),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(30_28_26/0.04)_100%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.1]" />
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pt-[var(--section-v)] pb-[calc(var(--section-v)+var(--s8))] sm:px-6 lg:px-10">
          <div className="overflow-hidden border border-[color:var(--g200)] bg-[rgb(12_14_13)] text-white shadow-2xl ring-1 ring-black/20">
            <div className="relative bg-[rgb(10_12_11/0.92)] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.1),transparent_40%)]" aria-hidden />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.35),transparent_45%)]" aria-hidden />
              <div className="relative z-10">
                <CommercialSnowProofTabs
                  mediaLabel="Media"
                  credentialsLabel="Credentials"
                  mediaPanel={
                    <>
                      <CtvSnowFeature />
                      <CommercialSnowLocalVideos />
                    </>
                  }
                  credentialsPanel={
                    <div>
                      <p className="eyebrow text-[color:var(--y)]">Commercial proof</p>
                      <h2 className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                        {COMMERCIAL_SNOW_CREDENTIALS.h2}
                      </h2>
                      <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_CREDENTIALS.visibleLede}</p>
                      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {COMMERCIAL_SNOW_CREDENTIALS.badges.map((b) => (
                          <div key={b.label} className="border border-white/15 bg-[rgb(255_255_255/0.05)] p-4">
                            <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{b.stat}</p>
                            <p className="mt-2 font-serif text-sm font-bold uppercase tracking-tight text-white">{b.label}</p>
                            <p className="mt-2 text-[13px] leading-snug text-white/75">{b.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[color:var(--g200)] pt-8" aria-hidden />
        </div>
      </section>

      {/* —— Operations —— */}
      <section
        id="chapter-operations"
        className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-t border-white/10 view-reveal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgb(255_255_255/0.035),transparent_42%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_20%,rgb(242_183_5/0.05),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="z-[1] opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Operations</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Equipment, SLAs, contracts &amp; process
            </h2>
            <p className="mt-[var(--s7)] max-w-[42rem] text-[15px] leading-[1.72] text-white/90">
              Industrial fleet, written SLAs, flexible contract frames, and a seven-step delivery rhythm — details expand per topic.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <details className="group border border-white/18 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-lg font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
                {COMMERCIAL_SNOW_EQUIPMENT.h2}
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="relative aspect-[16/11] overflow-hidden border border-white/15">
                  <Image
                    src={SNOW_HUB_SECTION.equipment.src}
                    alt={SNOW_HUB_SECTION.equipment.alt}
                    fill
                    className="object-cover object-[center_48%]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
                <div>
                  <p className="text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_EQUIPMENT.intro}</p>
                  <ul className="mt-6 space-y-4">
                    {COMMERCIAL_SNOW_EQUIPMENT.items.map((i) => (
                      <li key={i.name}>
                        <span className="font-semibold text-white">{i.name}: </span>
                        <span className="text-[15px] leading-[1.72] text-white/85">{i.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[15px] leading-[1.72] text-white/88">{COMMERCIAL_SNOW_EQUIPMENT.outro}</p>
                </div>
              </div>
            </details>

            <details className="group border border-white/18 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-lg font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
                {COMMERCIAL_SNOW_SLA.h2}
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="relative aspect-video overflow-hidden border border-white/15">
                  <Image
                    src={SNOW_HUB_SECTION.sla.src}
                    alt={SNOW_HUB_SECTION.sla.alt}
                    fill
                    className="object-cover object-[center_42%]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
                <div>
                  <p className="text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_SLA.intro}</p>
                  <dl className="mt-6 space-y-4">
                    {COMMERCIAL_SNOW_SLA.items.map((row) => (
                      <div key={row.name}>
                        <dt className="font-semibold text-[color:var(--y)]">{row.name}</dt>
                        <dd className="mt-1 text-[15px] leading-[1.72] text-white/85">{row.desc}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 text-[15px] text-white/88">{COMMERCIAL_SNOW_SLA.outro}</p>
                </div>
              </div>
            </details>

            <details className="group border border-white/18 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-lg font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
                {COMMERCIAL_SNOW_CONTRACTS.h2}
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-6 text-[15px] leading-[1.72] text-white/90">
                  <p>{COMMERCIAL_SNOW_CONTRACTS.intro}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-white/15 bg-[rgb(0_0_0/0.2)] p-4">
                      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-white">{COMMERCIAL_SNOW_CONTRACTS.seasonal.h3}</h3>
                      <p className="mt-3">{COMMERCIAL_SNOW_CONTRACTS.seasonal.body}</p>
                      <p className="mt-3 text-sm text-white/75">{COMMERCIAL_SNOW_CONTRACTS.seasonal.recommended}</p>
                    </div>
                    <div className="border border-white/15 bg-[rgb(0_0_0/0.2)] p-4">
                      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-white">{COMMERCIAL_SNOW_CONTRACTS.perEvent.h3}</h3>
                      <p className="mt-3">{COMMERCIAL_SNOW_CONTRACTS.perEvent.body}</p>
                      <p className="mt-3 text-sm text-white/75">{COMMERCIAL_SNOW_CONTRACTS.perEvent.recommended}</p>
                    </div>
                    <div className="border border-white/15 bg-[rgb(0_0_0/0.2)] p-4 sm:col-span-2">
                      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-white">{COMMERCIAL_SNOW_CONTRACTS.hybrid.h3}</h3>
                      <p className="mt-3">{COMMERCIAL_SNOW_CONTRACTS.hybrid.body}</p>
                      <p className="mt-3 text-sm text-white/75">{COMMERCIAL_SNOW_CONTRACTS.hybrid.recommended}</p>
                    </div>
                  </div>
                  <p>{COMMERCIAL_SNOW_CONTRACTS.outro}</p>
                </div>
                <div className="relative aspect-[4/5] min-h-[240px] overflow-hidden border border-white/15 lg:aspect-auto lg:min-h-[min(100%,420px)]">
                  <Image
                    src={SNOW_HUB_SECTION.contracts.src}
                    alt={SNOW_HUB_SECTION.contracts.alt}
                    fill
                    className="object-cover object-[center_42%]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.45)] to-transparent" aria-hidden />
                </div>
              </div>
            </details>

            <details className="group border border-white/18 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-lg font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
                {COMMERCIAL_SNOW_PROCESS.h2}
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-6">
                <p className="max-w-prose text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_PROCESS.visibleLede}</p>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {COMMERCIAL_SNOW_PROCESS.steps.map((s) => (
                    <li key={s.id} className="border border-white/15 bg-[rgb(0_0_0/0.2)] p-4">
                      <p className="eyebrow text-[color:var(--y)]">{s.id}</p>
                      <h3 className="mt-2 font-serif text-lg font-bold uppercase tracking-[0.04em] text-white">{s.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.72] text-white/85">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* —— Coverage —— */}
      <section
        id="chapter-coverage"
        className="section-major relative band-light scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--g200)] view-reveal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(242_183_5/0.055),transparent_46%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgb(30_28_26/0.035),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.1]" />
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="relative z-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgb(242_183_5/0.05),transparent_42%)]" aria-hidden />
            <ClaudeLogicWatermark placement="top-right" mode="default" className="pointer-events-none absolute right-0 top-8 z-[1] opacity-[0.07]" />
            {/* Chassis + split measure: substrate plane, spine typography, raised machined deck (V7 layer stack). */}
            <div className="relative z-10 overflow-hidden rounded-sm border border-[color:var(--g200)] bg-[color:rgb(30_28_26/0.028)] shadow-[0_22px_64px_rgb(0_0_0/0.07)]">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgb(242_183_5/0.07),transparent_42%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_48%_at_92%_8%,rgb(255_255_255/0.72),transparent_58%)]"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[color:var(--g200)]" aria-hidden />
              <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-5">
                  <p className="eyebrow text-ink">{COMMERCIAL_SNOW_PROPERTY_TYPES.sectionEyebrow}</p>
                  <h2 className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                    {COMMERCIAL_SNOW_PROPERTY_TYPES.h2}
                  </h2>
                  <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink">{COMMERCIAL_SNOW_PROPERTY_TYPES.visibleLede}</p>
                </div>
                <div className="relative lg:col-span-7">
                  <div className="h-px w-full bg-[color:var(--y)]/80 lg:hidden" aria-hidden />
                  <div className="bespoke-surface panel-machined relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.94)] p-5 sm:p-6 lg:ml-[var(--dna-stagger-sm)] lg:p-8">
                    <div className="relative z-10">
                      <CommercialSnowPropertyTabs
                        tablistAria={COMMERCIAL_SNOW_PROPERTY_TYPES.tablistAria}
                        types={COMMERCIAL_SNOW_PROPERTY_TYPES.types}
                        imageCta={COMMERCIAL_SNOW_HERO.ctas.primary}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Assurance & FAQ —— */}
      <section
        id="chapter-assurance"
        className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-t border-white/10 view-reveal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgb(255_255_255/0.04),transparent_50%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_100%,rgb(242_183_5/0.05),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.1]" />
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="z-[1] opacity-[0.08]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Assurance</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              {COMMERCIAL_SNOW_WHY_INTRO.h2}
            </h2>
            <p className="mt-[var(--s7)] max-w-[42rem] text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_WHY_INTRO.visibleLede}</p>
          </div>

          <details className="mt-8 border border-white/18 bg-[rgb(255_255_255/0.06)] p-4">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-sm font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
              Read full positioning narrative
              <span className="eyebrow text-[color:var(--y)]">+</span>
            </summary>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                {COMMERCIAL_SNOW_WHY_INTRO.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[15px] leading-[1.72] text-white/90">
                    {p}
                  </p>
                ))}
              </div>
              <div className="relative aspect-[16/11] overflow-hidden border border-white/15">
                <Image
                  src={SNOW_HUB_SECTION.assuranceNarrative.src}
                  alt={SNOW_HUB_SECTION.assuranceNarrative.alt}
                  fill
                  className="object-cover object-[center_50%]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </details>

          <h2 className="mt-14 font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            {COMMERCIAL_SNOW_WHY_CHOOSE.h2}
          </h2>
          <p className="mt-4 max-w-prose text-[15px] text-white/90">{COMMERCIAL_SNOW_WHY_CHOOSE.visibleLede}</p>
          <div className="mt-8 space-y-3">
            {COMMERCIAL_SNOW_WHY_CHOOSE.items.map((item) => (
              <details key={item.title} name="why-choose" className="group border border-white/18 bg-[rgb(255_255_255/0.06)] p-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="font-serif text-base font-bold uppercase tracking-[0.04em] text-white">{item.title}</span>
                    <span className="mt-1 block text-sm text-white/70">{item.subtitle}</span>
                  </span>
                  <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <p className="text-[15px] leading-[1.72] text-white/88">{item.body}</p>
                  <div className="relative aspect-video overflow-hidden border border-white/15">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-[center_45%]"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* —— FAQ (editorial light — breaks long dark assurance run) —— */}
      <section
        id="chapter-faq"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--g200)] view-reveal"
        aria-labelledby="chapter-faq-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(242_183_5/0.055),transparent_48%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_42%_at_15%_0%,rgb(30_28_26/0.04),transparent_50%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.09]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">{COMMERCIAL_SNOW_FAQ_SECTION.eyebrow}</p>
            <h2
              id="chapter-faq-heading"
              className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
            >
              {COMMERCIAL_SNOW_FAQ_SECTION.h2}
            </h2>
            <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{COMMERCIAL_SNOW_FAQ_SECTION.visibleLede}</p>
          </div>
          <div className="mt-10 space-y-3">
            {COMMERCIAL_SNOW_FAQS.map((item) => (
              <details key={item.q} name="snow-faq" className="group border border-[color:var(--g200)] bg-white p-4 shadow-[inset_0_1px_0_rgb(242_183_5/0.2)]">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-balance">{item.q}</span>
                  <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <p className="mt-4 text-[15px] leading-[1.72] text-ink sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* —— Contact —— */}
      <section
        id="chapter-contact"
        className="section-major band-light-drift relative scroll-mt-[var(--header)] overflow-hidden view-reveal border-t border-[color:var(--g200)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgb(242_183_5/0.06),transparent_52%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(225deg,transparent_55%,rgb(30_28_26/0.035)_100%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.09]" />
        <ClaudeLogicWatermark placement="bottom-left" mode="default" className="z-[1] opacity-[0.08]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <div
            className={`relative overflow-hidden border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-[rgb(12_14_13)] p-6 text-white sm:p-8 ${COMMERCIAL_SNOW_MID_LOWER_CTA.className}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]" aria-hidden />
            <p className="relative z-10 max-w-3xl font-sans text-xl font-bold uppercase tracking-[0.04em] sm:text-2xl">
              {COMMERCIAL_SNOW_MID_LOWER_CTA.headline}
            </p>
            <p className="relative z-10 mt-3 max-w-2xl text-[15px] leading-[1.72] text-white/90">{COMMERCIAL_SNOW_MID_LOWER_CTA.sub}</p>
            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={COMMERCIAL_SNOW_MID_LOWER_CTA.primary.href} className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                {COMMERCIAL_SNOW_MID_LOWER_CTA.primary.label}
              </Link>
              <Link
                href={COMMERCIAL_SNOW_MID_LOWER_CTA.secondary.href}
                className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]"
              >
                {COMMERCIAL_SNOW_MID_LOWER_CTA.secondary.label}
              </Link>
            </div>
          </div>

          <div className="relative mt-12 grid gap-8 border-t border-[color:var(--g200)] pt-12 lg:grid-cols-2">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgb(30_28_26/0.04),transparent)]" aria-hidden />
            <div className="relative border-l-4 border-[color:var(--y)] pl-5">
              <h2 className="font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">{COMMERCIAL_SNOW_CLOSING.h2}</h2>
              <p className="mt-4 text-[15px] leading-[1.72] text-ink sm:text-base">{COMMERCIAL_SNOW_CLOSING.visibleLede}</p>
              <details className="mt-6 border border-[color:var(--g200)] bg-white p-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  Read closing detail
                  <span className="eyebrow text-[color:var(--y)]">+</span>
                </summary>
                <div className="mt-4 space-y-4">
                  {COMMERCIAL_SNOW_CLOSING.paragraphs.map((p) => (
                    <p key={p.slice(0, 20)} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </details>
              <p className="mt-6 font-semibold text-ink">{COMMERCIAL_SNOW_CLOSING.urgency}</p>
            </div>
            <div className="relative flex flex-col gap-3">
              {COMMERCIAL_SNOW_CLOSING.ctas.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="inline-flex min-h-[44px] items-center justify-center border border-[color:var(--g200)] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink hover:border-[color:var(--y)]"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {related.length ? (
            <div className="mt-14 border-t border-[color:var(--g200)] pt-10">
              <p className="eyebrow text-ink-muted">Related lines</p>
              <ul className="mt-4 grid gap-4 lg:grid-cols-3">
                {related.slice(0, 3).map((r) => {
                  const ri = getServiceImage(r.slug);
                  return (
                    <CardSurface key={r.slug} as="li" className="overflow-hidden border-[color:var(--g200)] p-0">
                      <Link href={`/services/${r.slug}/`} className="group flex h-full flex-col">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image src={ri.src} alt={ri.alt} fill className="object-cover transition-transform group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" sizes="(min-width: 1024px) 33vw, 100vw" />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <span className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink group-hover:text-[color:var(--y)]">{r.title}</span>
                          <span className="mt-2 text-[15px] leading-[1.72] text-ink-muted">{r.description}</span>
                        </div>
                      </Link>
                    </CardSurface>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </article>
  );
}

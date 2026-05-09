import Image from "next/image";
import Link from "next/link";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { ExcavationJsonLd } from "@/components/seo/ExcavationJsonLd";
import { CardSurface } from "@/components/ui/CardSurface";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { CTA_BAND, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { HOME_COPY, SERVICE_DETAILS } from "@/lib/site/copy";
import type { PrimaryServiceSlug } from "@/lib/site/registry";
import type { ServiceDef } from "@/lib/site/registry";

const EXCAVATION_IMAGES = [
  "/images/services/Excavation/excavation-016.jpg",
  "/images/services/Excavation/excavation-004.jpg",
  "/images/services/Excavation/excavation-008.jpg",
  "/images/services/Excavation/excavation-012.jpg",
] as const;

const bodyLight = "text-[15px] leading-[1.72] text-ink sm:text-base";
const bodyOnDark = "text-[15px] leading-[1.72] text-white/90 sm:text-base";

/** Cities named in approved hero geography copy — vocabulary aligned with `hero.body[2]`. */
const SERVICE_AREA_CHIPS = [
  "Barrie",
  "Orillia",
  "Wasaga Beach",
  "Innisfil",
  "Midland",
  "Collingwood",
  "Bradford",
  "Simcoe County",
] as const;

function relatedPrimaryImage(slug: PrimaryServiceSlug): { src: string; alt: string } {
  switch (slug) {
    case "site-preparation-grading":
      return {
        src: "/images/services/Grading/Excavation%20and%20Site%20Preparation.jpg",
        alt: "Commercial grading and site preparation equipment on development site",
      };
    case "foundations-civil-infrastructure":
      return {
        src: "/images/services/Excavation/excavation-012.jpg",
        alt: "Foundation excavation and civil infrastructure earthwork",
      };
    case "drainage-hardscaping":
      return {
        src: "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-008.jpg",
        alt: "Drainage and hardscape-related excavation civil work",
      };
    case "hauling-site-clearing-logistics":
      return {
        src: "/images/services/Excavation/excavation-004.jpg",
        alt: "Hauling site clearing and logistics support on active jobsite",
      };
    case "snow-removal":
      return {
        src: "/images/services/Snow%20Removal/Ground%20Level%20Contracting%20barrie%20snow%20removal23.JPG",
        alt: "Commercial snow removal truck clearing parking area",
      };
    default:
      return {
        src: "/images/services/Excavation/excavation-016.jpg",
        alt: "Excavation and site preparation services",
      };
  }
}

function firstSentence(text: string): string {
  const idx = text.search(/\.\s/);
  if (idx === -1) return text.trim();
  return text.slice(0, idx + 1).trim();
}

function ExcavationCapabilityIcon({ className = "h-10 w-10 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M8 30 L32 30 L28 14 L18 10 L12 14 Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <rect x="14" y="22" width="12" height="8" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

type Props = {
  service: ServiceDef;
  related: ServiceDef[];
};

export function ExcavationSitePreparationPage({ service, related }: Props) {
  const detail = SERVICE_DETAILS["excavation-site-preparation"];
  const testimonials = HOME_COPY.testimonials.quotes.slice(0, 2);
  const trustSignals = detail.ctaOverride.trustSignals ?? [];
  const diffTitles = trustSignals.slice(0, 3);
  const trustP = detail.trust.paragraphs;
  const trustSentences = trustP[0]
    ? trustP[0].split(/(?<=\.)\s+/).filter(Boolean)
    : [];
  const diffBodies = [trustSentences[0] ?? "", trustSentences[1] ?? "", trustP[1] ?? ""];
  const heroCoverageTags = ["Barrie", "Simcoe County", "Wasaga Beach", "Orillia"];
  const remainingSignals = trustSignals.slice(3);
  const subCards = detail.subServices;
  const primaryOfferCards = subCards.slice(0, 8);
  const extraOfferCards = subCards.slice(8);

  return (
    <>
      <ExcavationJsonLd faq={detail.faq} processHeading={detail.process.heading} steps={detail.process.steps} />

      <article className="relative">
        {/* 01 — Hero */}
        <section
          id="overview"
          className="hero-stage section-major band-dark-field relative min-h-[min(100dvh,920px)] scroll-mt-[var(--header)] overflow-hidden"
          aria-labelledby="excavation-hero-heading"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={EXCAVATION_IMAGES[0]}
              alt="Commercial excavation equipment operating on an active construction site in Simcoe County"
              fill
              priority
              className="hero-bg-image object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.92)] via-[rgb(20_24_22/0.55)] to-[rgb(15_18_16/0.35)]" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgb(255_255_255/0.06),transparent_55%)]"
            aria-hidden
          />
          <ClaudeLogicWatermark placement="bottom-right" className="z-[1] opacity-[0.18]" />

          <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:justify-between lg:px-10 lg:pb-10 lg:pt-[calc(var(--header)+3rem)]">
            <div className="max-w-[min(100%,var(--max))] space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-3xl">
              <nav aria-label="Breadcrumb" className="eyebrow text-white">
                <Link href="/services/" className="text-white/80 underline-offset-4 hover:text-[color:var(--y)] hover:underline">
                  {detail.hero.breadcrumbParent}
                </Link>
                <span className="mx-2 text-white/45" aria-hidden>
                  /
                </span>
                <span className="text-white/90">{service.title}</span>
              </nav>

              <p className="mt-6 eyebrow text-white">Excavation &amp; site preparation</p>

              <h1
                id="excavation-hero-heading"
                className="mt-[var(--s7)] font-serif text-[clamp(1.85rem,5vw,3.25rem)] font-semibold uppercase leading-[0.95] tracking-tight text-white"
              >
                {detail.hero.titleBefore} <span className="text-[color:var(--y)]">{detail.hero.titleEmphasis}</span>
              </h1>

              <p className={`mt-[var(--s7)] max-w-2xl ${bodyOnDark}`}>{detail.hero.lede}</p>

              <p className={`mt-3 max-w-[36rem] ${bodyOnDark}`}>{detail.hero.body[1]}</p>

              <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/80" aria-hidden />

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="eyebrow inline-flex items-center gap-2 border border-white/20 bg-[rgb(255_255_255/0.06)] px-3 py-2 text-white">
                  <span className="text-[color:var(--y)]">{detail.hubStats[1]?.value}</span>
                  <span>{detail.hubStats[1]?.label}</span>
                  <span className="text-white/70">·</span>
                  <span>{detail.hero.body[1].split("—")[0]?.trim() ?? detail.hero.body[1]}</span>
                </span>
              </div>

              <div className="hero-cta-row mt-8 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-2 sm:items-stretch">
                <a
                  href={PHONE_TEL}
                  className="cta-hero-fill flex min-h-[48px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                >
                  Call now — {PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact/"
                  className="cta-outline-light flex min-h-[48px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                >
                  Get free quote
                </Link>
              </div>

              <p className="eyebrow mt-6 text-white">Service coverage</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Primary service coverage">
                {heroCoverageTags.map((tag) => (
                  <li
                    key={tag}
                    className="eyebrow border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 — Trust bar */}
        <section id="trust-bar" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="trust-bar-heading">
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-6 border border-[color:var(--g200)] bg-white p-5 shadow-[0_12px_40px_rgb(0_0_0/0.06)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="border-l-4 border-[color:var(--y)] pl-5">
                <p id="trust-bar-heading" className="eyebrow text-ink">
                  Trusted locally
                </p>
                <p className="mt-2 font-serif text-xl font-semibold uppercase tracking-tight text-ink sm:text-2xl">
                  Field metrics &amp; compliance
                </p>
              </div>
              <div className="flex flex-wrap gap-8 lg:justify-end">
                {detail.hubStats.map((s) => (
                  <div key={s.label} className="min-w-[120px]">
                    <p className="font-serif text-3xl font-bold tracking-[-0.04em] text-[color:var(--y)] sm:text-4xl">{s.value}</p>
                    <p className="eyebrow mt-1 text-ink">{s.label}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Certifications and trust signals">
              {trustSignals.slice(0, 5).map((label) => (
                <span key={label} className="eyebrow border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] px-3 py-2 text-ink">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Intro */}
        <section id="scope" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby="excavation-intro-heading">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_42%)]" aria-hidden />
          <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="opacity-[0.1]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                  <p className="eyebrow text-white">{detail.scopeStripLabels[0]}</p>
                  <h2
                    id="excavation-intro-heading"
                    className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
                  >
                    {detail.scopeStripLabels[1]}
                  </h2>
                  <div className="mt-[var(--s7)] space-y-6">
                    {detail.intro.map((p) => (
                      <p key={p.slice(0, 40)} className={bodyOnDark}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative min-h-[280px] lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgb(0_0_0/0.35)] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[320px]">
                  <Image
                    src={EXCAVATION_IMAGES[1]}
                    alt="Excavator and grading crew preparing commercial building pad in Simcoe County"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(10_12_11/0.45)] to-transparent" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Core offer grid */}
        <section
          id="services-offered"
          className="section-major band-light scroll-mt-[var(--header)]"
          aria-labelledby="services-offered-heading"
        >
          <ClaudeLogicWatermark placement="bottom-right" className="opacity-[0.07]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-ink">Capabilities</p>
              <h2 id="services-offered-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                {detail.deliverablesHeading}
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {primaryOfferCards.map((item, idx) => (
                <article
                  key={item.id}
                  className="bespoke-surface panel-machined flex flex-col border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <ExcavationCapabilityIcon className="h-10 w-10 shrink-0 text-[color:var(--y)]" />
                    <div>
                      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.02em] text-ink sm:text-xl">{item.heading}</h3>
                      <p className={`mt-3 ${bodyLight}`}>{firstSentence(item.paragraphs[0] ?? "")}</p>
                    </div>
                  </div>
                  <details className="group mt-4 border-t border-[color:var(--g200)] pt-4">
                    <summary className="cursor-pointer font-label text-xs font-bold uppercase tracking-[0.12em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      Full scope <span className="text-[color:var(--y)] group-open:hidden">+</span>
                      <span className="hidden text-[color:var(--y)] group-open:inline">−</span>
                    </summary>
                    <div className="mt-3 space-y-3">
                      {item.paragraphs.map((para) => (
                        <p key={para.slice(0, 24)} className={bodyLight}>
                          {para}
                        </p>
                      ))}
                      <p className={`text-sm text-ink-muted ${bodyLight}`}>{item.closing}</p>
                    </div>
                  </details>
                  <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden border border-[color:var(--g200)]">
                    <Image
                      src={EXCAVATION_IMAGES[idx % EXCAVATION_IMAGES.length]}
                      alt={`${item.heading} — excavation and earthworks`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </article>
              ))}
            </div>

            {extraOfferCards.length ? (
              <div className="mt-14 border-t border-[color:var(--g200)] pt-14">
                <h3 className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink">Additional offerings</h3>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {extraOfferCards.map((item, idx) => (
                    <article
                      key={item.id}
                      className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <ExcavationCapabilityIcon className="h-9 w-9 shrink-0 text-[color:var(--y)]" />
                        <div>
                          <h4 className="font-serif text-lg font-bold uppercase tracking-[0.02em] text-ink">{item.heading}</h4>
                          <p className={`mt-2 ${bodyLight}`}>{firstSentence(item.paragraphs[0] ?? "")}</p>
                        </div>
                      </div>
                      <details className="group mt-3">
                        <summary className="cursor-pointer font-label text-xs font-bold uppercase tracking-[0.12em] text-ink">
                          Details <span className="text-[color:var(--y)] group-open:hidden">+</span>
                        </summary>
                        <div className="mt-2 space-y-2">
                          {item.paragraphs.map((para) => (
                            <p key={para.slice(0, 24)} className={`text-sm ${bodyLight}`}>
                              {para}
                            </p>
                          ))}
                          <p className="text-sm text-ink-muted">{item.closing}</p>
                        </div>
                      </details>
                      <div className="relative mt-4 aspect-[16/10] overflow-hidden border border-[color:var(--g200)]">
                        <Image
                          src={EXCAVATION_IMAGES[(idx + 2) % EXCAVATION_IMAGES.length]}
                          alt={`${item.heading} — field photography`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, 50vw"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* 05 — Why GLC */}
        <section id="why-glc" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby="why-glc-heading">
          <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.12]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">Why GLC</p>
              <h2 id="why-glc-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                Differentiators
              </h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {diffTitles.map((title, i) => (
                <article
                  key={title}
                  className="border border-white/15 bg-[rgb(255_255_255/0.06)] p-6 backdrop-blur-sm sm:p-8"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-3xl font-bold leading-none text-[color:var(--y)]">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white sm:text-2xl">{title}</h3>
                      <p className={`mt-4 ${bodyOnDark}`}>{diffBodies[i]}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Reviews & authority */}
        <section id="reviews" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="reviews-heading">
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="border-l-4 border-[color:var(--y)] pl-5">
                  <p className="eyebrow text-ink">{HOME_COPY.testimonials.eyebrow}</p>
                  <h2 id="reviews-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
                    {HOME_COPY.testimonials.heading}
                  </h2>
                  <p className={`mt-4 ${bodyLight}`}>{HOME_COPY.testimonials.sub}</p>
                </div>
                <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-[color:var(--g200)] shadow-lg lg:max-w-md">
                  <Image
                    src={EXCAVATION_IMAGES[2]}
                    alt="Commercial excavation site operations supporting schedule-critical builds"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:col-span-7">
                {testimonials.map((t) => (
                  <blockquote
                    key={t.by}
                    className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-6 sm:p-8"
                  >
                    <p className={`font-serif text-lg leading-relaxed text-ink sm:text-xl`}>{t.quote}</p>
                    <footer className={`mt-4 border-l-4 border-[color:var(--y)] pl-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted`}>
                      {t.by}
                    </footer>
                  </blockquote>
                ))}
                <div className="flex flex-wrap gap-2" aria-label="Authority badges">
                  {remainingSignals.map((label) => (
                    <span key={label} className="eyebrow border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] px-3 py-2 text-ink">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — Who we serve */}
        <section id="who-we-serve" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby="who-we-serve-heading">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_38%)]" aria-hidden />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">Who we serve</p>
              <h2 id="who-we-serve-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                Who we serve
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="border border-white/15 bg-[rgb(255_255_255/0.06)] p-6 backdrop-blur-sm">
                <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white">Contractors &amp; homeowners</h3>
                <p className={`mt-4 ${bodyOnDark}`}>{detail.hero.body[0]}</p>
              </article>
              <article className="border border-white/15 bg-[rgb(255_255_255/0.06)] p-6 backdrop-blur-sm">
                <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white">Builders &amp; developers</h3>
                <p className={`mt-4 ${bodyOnDark}`}>{detail.hero.body[3]}</p>
              </article>
              <article className="border border-white/15 bg-[rgb(255_255_255/0.06)] p-6 backdrop-blur-sm">
                <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white">GCs, engineers &amp; municipalities</h3>
                <p className={`mt-4 ${bodyOnDark}`}>{detail.trust.paragraphs[1]}</p>
              </article>
            </div>
          </div>
        </section>

        {/* 08 — Process */}
        <section id="process" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
                  <Image
                    src={EXCAVATION_IMAGES[3]}
                    alt="Earthmoving and compaction phase on commercial excavation project"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="border-l-4 border-[color:var(--y)] pl-5">
                  <p className="eyebrow text-ink">{detail.process.eyebrow}</p>
                  <h2 id="process-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
                    {detail.process.heading}
                  </h2>
                </div>
                <ol className="mt-10 grid gap-4 sm:grid-cols-2">
                  {detail.process.steps.map((step) => (
                    <li key={step.id} className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5">
                      <p className="eyebrow text-[color:var(--y)]">{step.id}</p>
                      <p className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink">{step.title}</p>
                      <p className={`mt-3 ${bodyLight}`}>{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — Mid-page CTA */}
        <section id="mid-cta" className="section-major band-light scroll-mt-[var(--header)]">
          <GLCtaBand
            sectionId="excavation-mid-cta-band"
            headingId="excavation-mid-cta-heading"
            overlap={false}
            content={{
              eyebrow: CTA_BAND.eyebrow,
              heading: detail.ctaOverride.heading,
              headingAccentKey: "Site",
              sub: detail.ctaOverride.supporting,
              phoneLabel: CTA_BAND.phoneLabel,
              phoneHref: PHONE_TEL,
              emailCta: CTA_BAND.emailCta,
              emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent("Excavation & site preparation quote request")}`,
            }}
          />
        </section>

        {/* 10 — Service area */}
        <section id="service-area" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby="service-area-heading">
          <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" className="opacity-[0.09]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="border-l-4 border-[color:var(--y)] pl-5">
                <p className="eyebrow text-white">Service area</p>
                <h2 id="service-area-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                  {HOME_COPY.coverage.heading}
                </h2>
                <p className={`mt-[var(--s7)] ${bodyOnDark}`}>{detail.hero.body[2]}</p>
              </div>
              <div className="bespoke-surface panel-machined border border-white/15 bg-[rgb(255_255_255/0.06)] p-5 backdrop-blur-sm sm:p-8">
                <p className="eyebrow text-white">City &amp; township coverage</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {SERVICE_AREA_CHIPS.map((place) => (
                    <li key={place} className={`${bodyOnDark}`}>
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — FAQ */}
        <section id="faq" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-ink">FAQ</p>
              <h2 id="faq-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
                Excavation questions
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {detail.faq.map((item) => (
                <details key={item.q} name="excavation-faq" className="group border border-[color:var(--g200)] bg-white p-4 shadow-sm">
                  <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 list-none font-serif text-lg font-semibold uppercase tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                    <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                  </summary>
                  <p className={`mt-3 ${bodyLight}`}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 12 — Related services */}
        <section id="related-services" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby="related-heading">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">Related services</p>
              <h2 id="related-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                You might also need
              </h2>
            </div>
            <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const img = relatedPrimaryImage(r.slug as PrimaryServiceSlug);
                return (
                  <CardSurface key={r.slug} as="li" className="overflow-hidden border-white/20 bg-[rgb(255_255_255/0.08)] p-0 text-white backdrop-blur-sm">
                    <Link href={`/services/${r.slug}/`} className="group flex h-full flex-col">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <span className="font-serif text-xl font-semibold uppercase tracking-tight text-white group-hover:text-[color:var(--y)]">
                          {r.title}
                        </span>
                        <span className={`mt-3 ${bodyOnDark}`}>{r.description}</span>
                      </div>
                    </Link>
                  </CardSurface>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 13 — Final CTA */}
        <section id="request-site-visit" className="section-major band-light scroll-mt-[var(--header)] pb-[var(--section-v)]">
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-[rgb(12_14_13)] p-6 text-white sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]" aria-hidden />
              <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow text-white">{detail.scopeStripLabels[6] ?? "Request a site visit"}</p>
                  <p className="mt-4 font-serif text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">{detail.ctaOverride.heading}</p>
                  <ExpandableCopy text={detail.ctaOverride.supporting} className={`relative z-10 mt-4 ${bodyOnDark}`} />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={PHONE_TEL}
                    className="cta-primary inline-flex min-h-[48px] flex-1 items-center justify-center px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <Link
                    href="/contact/"
                    className="cta-outline-light inline-flex min-h-[48px] flex-1 items-center justify-center px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                  >
                    {detail.ctaOverride.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ServiceDef } from "@/lib/site/registry";
import type { PrimaryServiceSlug } from "@/lib/site/registry";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { CTA_BAND, EMAIL_MAILTO, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CardSurface } from "@/components/ui/CardSurface";
import { getServiceImage } from "@/lib/site/service-images";

/** Snow hub photography — `public/images/services/Snow Removal/` (encode spaces in URL). */
const SNOW_REMOVAL_PLOW_IMAGE_SRC =
  "/images/services/Snow%20Removal/Ground%20Level%20Contracting%20barrie%20snow%20removal23.JPG";

const SNOW_PLOW_IMAGE_ALT =
  "Ground Level Contracting RAM plow truck clearing a commercial parking lot during winter operations in Simcoe County";

type ServicePageTemplateProps = {
  service: ServiceDef;
  related: ServiceDef[];
};

export function ServicePageTemplate({ service, related }: ServicePageTemplateProps) {
  const detail = service.category === "primary" ? SERVICE_DETAILS[service.slug as PrimaryServiceSlug] : null;
  const isSnowHub = service.slug === "snow-removal";
  const serviceImage = getServiceImage(service.slug);
  const imageSrc = serviceImage.src;
  const scopeAnchorAlt = `${serviceImage.alt} — ${service.title} scope reference`;
  const faqItems = detail?.faq ?? [];
  const whyItems = detail?.trust.paragraphs ?? [
    "Experienced crews and commercial-first operations.",
    "Service area coverage across Barrie and Simcoe County.",
    "Fast response with transparent communication.",
    "Equipment and process discipline built for active sites.",
  ];
  const processSteps = detail?.process.steps ?? [
    { id: "01", title: "Discovery", body: "Scope, access, and site constraints are confirmed before mobilization." },
    { id: "02", title: "Planning", body: "Production sequence and resources are aligned with your schedule." },
    { id: "03", title: "Execution", body: "Field operations run with quality controls and documented progress." },
    { id: "04", title: "Turnover", body: "Final checks and handoff keep downstream trades moving." },
  ];
  const snowModuleIds = [
    "svc-parking-lot",
    "svc-industrial",
    "svc-ice",
    "svc-emergency",
    "svc-hauling",
    "svc-retail",
    "svc-property-management",
    "svc-office-campus",
  ];

  return (
    <article className="relative">
      <section id="overview" className="hero-stage section-major band-dark-field relative min-h-[100dvh] scroll-mt-[var(--header)] overflow-hidden">
        <Image
          src={imageSrc}
          alt={serviceImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.72)] to-[rgb(10_12_11/0.35)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.3)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgb(255_255_255/0.06),transparent_55%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.16]" />
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-8 pt-28 sm:px-10 sm:pb-10 lg:justify-between lg:px-20 lg:pt-[calc(var(--header)+3rem)]">
          <div className="max-w-[min(100%,var(--max))] rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
          <p className="hero-eyebrow label-overline-on-dark mb-0">Service overview</p>
          <h1 className="mt-[var(--s7)] max-w-4xl font-serif text-[clamp(2.3rem,6.2vw,5.1rem)] font-semibold uppercase leading-[0.9] tracking-tight text-white">
            {detail ? (
              <>
                {detail.hero.titleBefore} <span className="text-[color:var(--y)]">{detail.hero.titleEmphasis}</span>
              </>
            ) : service.title}
          </h1>
          <p className="hero-caption mt-[var(--s7)] max-w-[36rem] text-[15px] leading-[1.72] text-white/84 sm:text-base">{detail?.hero.lede ?? service.description}</p>
          <p className="eyebrow mt-3 max-w-[36rem] text-white">
            Built exclusively for commercial operators across Simcoe County.
          </p>
          <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
          <div className="mt-6 max-w-3xl space-y-6 border-l-4 border-[color:var(--y)] pl-5">
            {(detail?.hero.body ?? [service.description]).slice(0, 2).map((p) => (
              <p key={p} className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
            {(detail?.hubStats ?? []).slice(0, 3).map((s) => (
              <span key={s.label}>
                <span className="text-[color:var(--y)]">{s.value}</span> {s.label}
              </span>
            ))}
          </div>
          <p className="mt-6 eyebrow text-white">Service Coverage</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Service Coverage">
            {["Barrie", "Midland", "Orillia", "Simcoe County"].map((tag) => (
              <li
                key={tag}
                className="eyebrow border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="hero-cta-row mt-6 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-2 sm:items-center">
            <Link href="/contact/" className="cta-hero-fill px-5 py-3 text-center text-xs tracking-wide">
              {detail?.ctaOverride.buttonLabel ?? "Request Dispatch"}
            </Link>
            <Link
              href={service.moreHref ?? "#scope"}
              className="cta-outline-light px-5 py-3 text-center text-xs tracking-wide"
            >
              {service.moreHref ? "Open Snow Hub Section" : "View service scope"}
            </Link>
          </div>
          </div>
        </div>
      </section>

      <section
        id="scope"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby={`${service.slug}-scope-heading`}
      >
        {/* planes: atmosphere (-1) + tonal wash (substrate) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.08] sm:opacity-[0.11]" />
        <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max))] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-6">
            <p className="eyebrow text-ink">Service overview</p>
            <h2
              id={`${service.slug}-scope-heading`}
              className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl"
            >
              Scope and delivery
            </h2>
            <div className="mt-[var(--s7)] max-w-[min(100%,42rem)] space-y-6">
              {(detail?.intro ?? ["Mobilization, staging, and production execution are configured per site constraints and handoff schedule."]).slice(0, 3).map((p) => (
                <p key={p} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* compositional raster anchor (§4) + machined panel = ≥3 planes with band-light base */}
            <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)]">
              <Image
                src={imageSrc}
                alt={scopeAnchorAlt}
                fill
                className="object-cover object-[center_42%] sm:object-[center_38%]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <div className="bespoke-surface panel-machined relative border border-[color:var(--g200)] bg-white p-5 sm:p-8">
              <p className="eyebrow text-ink-muted">Benefits</p>
              <ul className="mt-4 space-y-3">
                {(detail?.deliverables ?? ["Site analysis", "Field execution", "Quality controls"]).slice(0, 6).map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-[color:var(--y)]" aria-hidden />
                    <span className="text-[15px] leading-[1.72] text-ink sm:text-base">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isSnowHub && detail ? (
        <section
          id="snow-plow-cta"
          className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden"
          aria-labelledby="snow-plow-cta-heading"
        >
          {/* Layer: base canvas + atmosphere treatment */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.05),transparent_42%)]" aria-hidden />
          <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" className="z-[1] opacity-[0.09]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            {/* Layer: structural shell (glass) + yellow accent plane (palette) */}
            <div className="relative overflow-hidden border border-white/15 bg-[rgb(10_12_11/0.5)] shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]"
                aria-hidden
              />
              <div className="relative grid lg:grid-cols-2">
                {/* Layer: substrate (photo) + scrim treatments */}
                <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]">
                  <Image
                    src={SNOW_REMOVAL_PLOW_IMAGE_SRC}
                    alt={SNOW_PLOW_IMAGE_ALT}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_50%,transparent_20%,rgb(10_12_11/0.5)_88%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgb(10_12_11/0.88)] max-lg:hidden"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.82)] via-[rgb(10_12_11/0.15)] to-transparent lg:hidden"
                    aria-hidden
                  />
                </div>
                {/* Layer: interaction panel — dark bg + machined depth (no bespoke-surface: use panel-machined + explicit bg; see globals.css .bespoke-surface). */}
                <div className="relative flex flex-col justify-center border-t border-white/12 bg-[rgb(10_12_11/0.92)] p-6 sm:p-8 lg:border-l-4 lg:border-t-0 lg:border-l-[color:var(--y)] lg:pl-9 lg:pr-11 lg:py-12 panel-machined">
                  <p className="eyebrow text-white">Winter operations</p>
                  <h2
                    id="snow-plow-cta-heading"
                    className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl"
                  >
                    {detail.ctaOverride.heading}
                  </h2>
                  <div className="mt-4 h-px max-w-md bg-[color:var(--y)]/55" aria-hidden />
                  <div className="mt-[var(--s7)] grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-12">
                    <p className="text-[15px] leading-[1.72] text-white/90 sm:text-base lg:col-span-6">
                      {detail.ctaOverride.supporting}
                    </p>
                    {detail.trust.paragraphs[0] ? (
                      <p className="text-[15px] leading-[1.72] text-white/90 sm:text-base lg:col-span-6">
                        {detail.trust.paragraphs[0]}
                      </p>
                    ) : null}
                  </div>
                  {/* Interaction strip: CTA plane + yellow primary (palette) */}
                  <div className="mt-8 border border-white/14 bg-[rgb(0_0_0/0.28)] p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Link
                        href="/contact/"
                        className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                      >
                        Book winter scope
                      </Link>
                      <Link
                        href={PHONE_TEL}
                        className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                      >
                        {detail.ctaOverride.buttonLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section
        id="field-capabilities"
        className={`section-major relative scroll-mt-[var(--header)] overflow-hidden ${isSnowHub ? "band-light" : "band-dark"}`}
      >
        {isSnowHub ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]"
              aria-hidden
            />
            <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.08] sm:opacity-[0.11]" />
          </>
        ) : (
          <>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
            <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="opacity-[0.1]" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className={`eyebrow ${isSnowHub ? "text-ink" : "text-white"}`}>Service breakdown</p>
            <h2
              className={`mt-3 font-serif text-3xl font-semibold uppercase tracking-tight sm:text-4xl ${isSnowHub ? "text-ink" : "text-white"}`}
            >
              {detail?.deliverablesHeading ?? "Capabilities"}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(detail?.subServices ?? []).slice(0, 6).map((item, idx) => (
              <article
                key={item.id}
                className={
                  isSnowHub
                    ? "bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5 sm:p-8"
                    : "relative panel-machined border border-white/15 bg-[rgb(255_255_255/0.06)] p-5 backdrop-blur-sm sm:p-8"
                }
              >
                <div
                  className={`relative mb-4 aspect-[16/10] overflow-hidden border ${
                    isSnowHub ? "border-[color:var(--g200)]" : "border-white/20"
                  }`}
                >
                  <Image src={imageSrc} alt={`${item.heading} visual ${idx + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <h3
                  className={`font-serif text-xl font-bold uppercase tracking-[0.02em] sm:text-2xl ${
                    isSnowHub ? "text-ink" : "text-white"
                  }`}
                >
                  {item.heading}
                </h3>
                <p
                  className={`mt-3 text-[15px] leading-[1.72] sm:text-base ${
                    isSnowHub ? "text-ink-muted" : "text-white/90"
                  }`}
                >
                  {item.paragraphs[0]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mid-cta" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <GLCtaBand
            sectionId="mid-page-cta-band"
            headingId="mid-page-cta-heading"
            overlap={false}
            content={{
              eyebrow: CTA_BAND.eyebrow,
              heading: detail?.ctaOverride.heading ?? CTA_BAND.heading,
              headingAccentKey: detail?.hero.titleEmphasis?.split(" ")[0],
              sub: detail?.ctaOverride.supporting ?? CTA_BAND.sub,
              phoneLabel: CTA_BAND.phoneLabel,
              phoneHref: PHONE_TEL,
              emailCta: CTA_BAND.emailCta,
              emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent(`${service.title} service inquiry`)}`,
            }}
          />
        </div>
      </section>

      <section id="why-glc" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden">
        <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.12]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Why GLC</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">Differentiators</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.slice(0, 4).map((item, idx) => (
              <article key={item} className="border border-white/15 bg-[rgb(255_255_255/0.06)] p-5 backdrop-blur-sm">
                <p className="eyebrow text-[color:var(--y)]">0{idx + 1}</p>
                <p className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-white">Field advantage</p>
                <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">{detail?.process.eyebrow ?? "How it works"}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">{detail?.process.heading ?? "Delivery process"}</h2>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.id} className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5 sm:min-h-[44px]">
                <p className="eyebrow text-[color:var(--y)]">{step.id}</p>
                <p className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink">{step.title}</p>
                <p className="mt-3 text-[15px] leading-[1.72] text-ink-muted sm:text-base">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_38%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">Common questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} name={`${service.slug}-faq`} className="group border border-white/20 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 list-none font-serif text-lg font-semibold uppercase tracking-tight text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">{item.a}</p>
              </details>
            ))}
            {!faqItems.length ? (
              <details name={`${service.slug}-faq`} className="border border-white/20 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
                <summary className="flex min-h-[44px] cursor-pointer items-center font-serif text-lg font-semibold uppercase tracking-tight text-white">
                  Need detailed scope?
                </summary>
                <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">
                  This sub-service has dedicated scope alignment on the snow hub. Use the active link below to open its full context.
                </p>
              </details>
            ) : null}
          </div>
        </div>
      </section>

      <section id="service-area" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-ink">Service area</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">Barrie and Simcoe County coverage</h2>
              <p className="mt-[var(--s7)] text-[15px] leading-[1.72] text-ink sm:text-base">
                Ground Level Contracting serves Barrie, Midland, Orillia, and surrounding Simcoe County municipalities with commercial-focused dispatch and reliable field coordination.
              </p>
            </div>
            <div className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5 sm:p-8">
              <p className="eyebrow text-ink-muted">Coverage list</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {["Barrie", "Midland", "Orillia", "Innisfil", "Wasaga Beach", "Simcoe County"].map((place) => (
                  <li key={place} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isSnowHub ? (
            <div className="mt-10 border border-[color:var(--g200)] bg-white p-5 sm:p-8">
              <p className="eyebrow text-ink">Snow service modules</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(detail?.extra?.snowHub?.lineBlockHeadings ?? []).map((label, idx) => (
                  <CardSurface id={snowModuleIds[idx]} key={label} className="p-4">
                    <p className="font-serif text-lg font-semibold uppercase tracking-tight text-ink">{label}</p>
                    <Link href="/contact/" className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:text-[color:var(--y)]">
                      Request this service {"->"}
                    </Link>
                  </CardSurface>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section id="related-services" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Related services</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">Related service lines</h2>
          </div>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {related.slice(0, 3).map((r) => {
              const relatedImage = getServiceImage(r.slug);
              return (
                <CardSurface key={r.slug} as="li" className="overflow-hidden border-white/20 bg-[rgb(255_255_255/0.08)] p-0 text-white backdrop-blur-sm">
                  <Link href={`/services/${r.slug}/`} className="group flex h-full flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image src={relatedImage.src} alt={relatedImage.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" sizes="(min-width: 1024px) 33vw, 100vw" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="font-serif text-xl font-semibold uppercase tracking-tight text-white group-hover:text-[color:var(--y)]">{r.title}</span>
                      <span className="mt-3 text-[15px] leading-[1.72] text-white/85">{r.description}</span>
                    </div>
                  </Link>
                </CardSurface>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="request-site-visit" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div id="cta-band" className="relative overflow-hidden border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-[rgb(12_14_13)] p-6 text-white sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]" aria-hidden />
            <p className="relative z-10 eyebrow text-white">Request site visit</p>
            <p className="relative z-10 mt-3 font-serif text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">
              {detail?.ctaOverride.heading ?? "Ready to scope your site?"}
            </p>
            <p className="relative z-10 mt-4 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">
              {detail?.ctaOverride.supporting ?? "Share site address, scope context, and target timeline to receive a scoped dispatch response."}
            </p>
            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                {detail?.ctaOverride.buttonLabel ?? "Request Dispatch"}
              </Link>
              <Link
                href={service.moreHref ?? "/services/"}
                className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]"
              >
                {service.moreHref ? "Open Snow Hub Section" : "Browse Services"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

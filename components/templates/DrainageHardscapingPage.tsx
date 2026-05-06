import Image from "next/image";
import Link from "next/link";
import type { ServiceDef } from "@/lib/site/registry";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { CardSurface } from "@/components/ui/CardSurface";
import { DrainageSubServiceTabs } from "@/components/templates/DrainageSubServiceTabs";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { CTA_BAND, EMAIL_MAILTO, PHONE_TEL } from "@/lib/ground-level/homepage-copy";

const DRAINAGE_IMAGES = [
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-001.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-008.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-016.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-024.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-032.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-040.jpg",
  "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-048.jpg",
] as const;

const TAB_IMAGE_ALTS = [
  "Storm pipe and catch basin installation for commercial site drainage",
  "French drain or trench drain excavation with geotextile and aggregate",
  "Grading for commercial parking lot sheet flow and cross-slope drainage",
  "Retaining wall footing excavation and structural fill placement",
  "Paver and asphalt subgrade preparation with compaction",
  "Erosion control swale and inlet protection on active construction site",
  "Armor stone and commercial hardscape base preparation",
] as const;

const RELATED_CARD_IMAGES = [
  "/images/services/Excavation/excavation-004.jpg",
  "/images/services/Excavation/excavation-008.jpg",
  "/images/services/Excavation/excavation-012.jpg",
  "/images/services/Excavation/excavation-016.jpg",
] as const;

const bodyLight = "text-[15px] leading-[1.72] text-ink sm:text-base";
const bodyOnDark = "text-[15px] leading-[1.72] text-white/90 sm:text-base";

type Props = {
  service: ServiceDef;
  related: ServiceDef[];
};

export function DrainageHardscapingPage({ service, related }: Props) {
  const detail = SERVICE_DETAILS["drainage-hardscaping"];
  const parallax = detail.extra?.parallaxBand;

  return (
    <article className="relative">
      {/* —— Hero: full-bleed asset + glass shell (V7) —— */}
      <section
        id="overview"
        className="hero-stage band-dark-field relative min-h-[min(100dvh,920px)] scroll-mt-[var(--header)] overflow-hidden"
        aria-labelledby="drainage-hero-heading"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={DRAINAGE_IMAGES[2]}
            alt="Commercial drainage excavation catch basin and storm infrastructure Simcoe County"
            fill
            priority
            className="hero-bg-image object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.92)] via-[rgb(20_24_22/0.55)] to-[rgb(15_18_16/0.35)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgb(255_255_255/0.06),transparent_55%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" className="z-[1] opacity-[0.18]" />

        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:justify-between lg:px-10 lg:pb-10 lg:pt-[calc(var(--header)+3rem)]">
          <div className="max-w-[min(100%,var(--max))] space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-3xl">
            <nav aria-label="Breadcrumb" className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
              <Link href="/services/" className="text-white/80 underline-offset-4 hover:text-[color:var(--y)] hover:underline">
                {detail.hero.breadcrumbParent}
              </Link>
              <span className="mx-2 text-white/45" aria-hidden>
                /
              </span>
              <span className="text-white/90">{service.title}</span>
            </nav>

            <p className="mt-6 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Drainage &amp; hardscape civil
            </p>

            <h1 id="drainage-hero-heading" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {detail.hero.titleBefore}
              <span className="text-[color:var(--y)]"> {detail.hero.titleEmphasis}</span>
            </h1>

            <div className={`mt-[var(--s7)] max-w-2xl ${bodyOnDark}`}>
              <ExpandableCopy text={detail.hero.lede} className={bodyOnDark} />
            </div>

            <p className="mt-3 max-w-[36rem] text-[11px] uppercase tracking-[0.14em] text-white/72">
              Built exclusively for commercial operators across Simcoe County.
            </p>

            <div className="mt-8 max-w-2xl space-y-8 border-l-4 border-[color:var(--y)] pl-5">
              {detail.hero.body.slice(0, 1).map((p) => (
                <p key={p.slice(0, 32)} className={bodyOnDark}>
                  {p}
                </p>
              ))}
            </div>

            <div className="hero-rule mt-8 h-px w-full max-w-md bg-[color:var(--y)]/80" aria-hidden />

            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {detail.hubStats.map((s) => (
                <div key={s.label} className="min-w-[140px]">
                  <p className="text-lg font-bold tracking-[-0.04em] text-[color:var(--y)] sm:text-xl">
                    {s.value}{" "}
                    <span className="text-sm font-semibold tracking-normal text-white/90">{s.label}</span>
                  </p>
                  <p className="mt-1 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">{s.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-white/55">Service Coverage</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Service Coverage">
              {["Barrie", "Midland", "Orillia", "Simcoe County"].map((tag) => (
                <li
                  key={tag}
                  className="border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-cta-row mt-8 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-2 sm:items-center lg:mt-10">
            <Link href="/contact/" className="cta-hero-fill px-6 py-4 text-center text-sm font-semibold tracking-wide sm:min-w-[200px]">
              {detail.ctaOverride.buttonLabel}
            </Link>
            <Link
              href="#capability-detail"
              className="cta-outline-light px-6 py-3.5 text-center text-sm font-semibold tracking-wide transition-colors"
            >
              View capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* —— Scope: split column + compositional anchor (measure safety) —— */}
      <section id="scope" className="section-major band-light scroll-mt-[var(--header)] view-reveal" aria-labelledby="drainage-scope-heading">
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">Scope</p>
                <h2
                  id="drainage-scope-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
                >
                  Site water management
                </h2>
                <div className="mt-[var(--s7)] space-y-8">
                  {detail.intro.map((p) => (
                    <p key={p.slice(0, 32)} className={bodyLight}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)] shadow-[0_20px_50px_rgb(0_0_0/0.12)] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[320px]">
                <Image
                  src={DRAINAGE_IMAGES[1]}
                  alt="Excavated drainage trench and storm pipe run on commercial development site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Deliverables: every card carries a raster anchor —— */}
      <section
        id="field-capabilities"
        className="section-major band-light scroll-mt-[var(--header)] view-reveal"
        aria-labelledby="drainage-deliverables-heading"
      >
        <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">Capabilities</p>
            <h2 id="drainage-deliverables-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              {detail.deliverablesHeading}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.deliverables.map((cap, i) => (
              <article
                key={cap}
                className="bespoke-surface panel-machined flex flex-col overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={DRAINAGE_IMAGES[i % DRAINAGE_IMAGES.length]}
                    alt={`${cap} — commercial drainage and hardscape field work`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-8">
                  <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">{cap}</h3>
                  <Link
                    href="/contact/"
                    className="cta-primary mt-6 inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]"
                  >
                    Request this scope
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mid-cta" className="section-major band-light scroll-mt-[var(--header)]">
        <GLCtaBand
          sectionId="mid-page-cta-band"
          headingId="drainage-mid-cta-heading"
          overlap={false}
          content={{
            eyebrow: CTA_BAND.eyebrow,
            heading: detail.ctaOverride.heading,
            headingAccentKey: "drainage",
            sub: detail.ctaOverride.supporting,
            phoneLabel: CTA_BAND.phoneLabel,
            phoneHref: PHONE_TEL,
            emailCta: CTA_BAND.emailCta,
            emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent("Drainage & hardscaping site review")}`,
          }}
        />
      </section>

      {/* —— Editorial parallax band —— */}
      {parallax ? (
        <section
          className="relative min-h-[340px] overflow-hidden scroll-mt-[var(--header)]"
          aria-labelledby="drainage-parallax-heading"
        >
          <Image
            src={DRAINAGE_IMAGES[4]}
            alt={parallax.imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgb(10_12_11/0.55)] mix-blend-multiply" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.85)] via-[rgb(10_12_11/0.5)] to-transparent" aria-hidden />
          <ClaudeLogicWatermark placement="center-right" className="opacity-[0.12]" />
          <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[min(100%,var(--max))] items-center px-4 py-16 sm:px-6 lg:px-10">
            <div className="max-w-xl rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white">{parallax.eyebrow}</p>
              <h2 id="drainage-parallax-heading" className="mt-4 font-serif text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                {parallax.title}
              </h2>
              <p className={`mt-6 ${bodyOnDark}`}>{parallax.subtitle}</p>
            </div>
          </div>
        </section>
      ) : null}

      {/* —— Trust: 50/50 split (longform paragraphs) —— */}
      <section id="trust-drainage" className="section-major band-light scroll-mt-[var(--header)] view-reveal" aria-labelledby="drainage-trust-heading">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--g200)] lg:min-h-[360px]">
                <Image
                  src={DRAINAGE_IMAGES[5]}
                  alt="Finished grading and drainage detail protecting commercial pavement and hardscape investment"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">Why it matters</p>
                <h2
                  id="drainage-trust-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
                >
                  {detail.trust.heading}
                </h2>
                <div className="mt-[var(--s7)] space-y-8">
                  {detail.trust.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className={bodyLight}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Process —— */}
      <section id="process" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal" aria-labelledby="drainage-process-heading">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_45%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="relative min-h-[240px] lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-full">
                <Image
                  src={DRAINAGE_IMAGES[3]}
                  alt="Drainage workflow excavation crew coordinating storm tie-in on commercial site"
                  fill
                  className="object-cover opacity-95"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] to-transparent" aria-hidden />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white">{detail.process.eyebrow}</p>
              <h2
                id="drainage-process-heading"
                className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
              >
                {detail.process.heading}
              </h2>
              <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                {detail.process.steps.map((step) => (
                  <li
                    key={step.id}
                    className="border border-white/20 bg-[rgb(255_255_255/0.06)] p-5 backdrop-blur-sm"
                  >
                    <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)]">{step.id}</p>
                    <p className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-white sm:text-2xl">{step.title}</p>
                    <p className={`mt-4 ${bodyOnDark}`}>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <DrainageSubServiceTabs
        sectionId="capability-detail"
        headingId="drainage-subs-heading"
        eyebrow="Capability detail"
        title="Drainage & hardscape scopes"
        items={detail.subServices}
        imageSrcs={[...DRAINAGE_IMAGES]}
        imageAlts={[...TAB_IMAGE_ALTS]}
      />

      {/* —— FAQ —— */}
      <section id="faq" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="drainage-faq-heading">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">FAQ</p>
            <h2 id="drainage-faq-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {detail.faq.map((item) => (
              <details
                key={item.q}
                name="drainage-faq"
                className="group border border-[color:var(--g200)] bg-white p-4 sm:min-h-[44px] sm:p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex min-h-[44px] items-center justify-between gap-4">
                    {item.q}
                    <span className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)] group-open:hidden">
                      +
                    </span>
                    <span className="hidden font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)] group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className={`mt-2 max-w-3xl pb-1 ${bodyLight}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="service-area" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="drainage-service-area-heading">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">Service area</p>
                <h2 id="drainage-service-area-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                  Barrie and Simcoe County drainage coverage
                </h2>
                <p className={`mt-[var(--s7)] ${bodyLight}`}>
                  Ground Level Contracting provides drainage and hardscaping civil support across Barrie, Midland, Orillia, and surrounding Simcoe County municipalities for commercial and industrial properties.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative min-h-[260px] overflow-hidden border border-[color:var(--g200)]">
                <Image
                  src={DRAINAGE_IMAGES[6]}
                  alt="Drainage and hardscaping service coverage visual in Simcoe County"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Related —— */}
      <section id="related-services" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="drainage-related-heading">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">Related</p>
            <h2 id="drainage-related-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              Related services
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {related.slice(0, 3).map((r, i) => (
              <CardSurface key={r.slug} as="li" className="overflow-hidden p-0">
                <Link href={`/services/${r.slug}/`} className="group flex flex-col sm:flex-row sm:items-stretch">
                  <div className="relative aspect-[16/10] w-full shrink-0 sm:w-[min(42%,260px)]">
                    <Image
                      src={RELATED_CARD_IMAGES[i % RELATED_CARD_IMAGES.length]}
                      alt={`${r.title} — related commercial excavation service`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(min-width: 640px) 220px, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                    <span className="font-serif text-lg font-semibold uppercase tracking-tight text-ink group-hover:text-[color:var(--y)]">
                      {r.title}
                    </span>
                    <span className="mt-2 text-[15px] leading-[1.72] text-ink">{r.description}</span>
                  </div>
                </Link>
              </CardSurface>
            ))}
          </ul>
        </div>
      </section>

      <section id="request-site-visit" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden border border-white/20 border-l-[4px] border-l-[color:var(--y)] bg-[rgb(10_12_11/0.72)] p-6 backdrop-blur-md sm:p-8">
            <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.12]" />
            <p className="relative z-10 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Request site visit</p>
            <h2 id="drainage-cta-heading" className="relative z-10 mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              {detail.ctaOverride.heading}
            </h2>
            <p className={`relative z-10 mt-4 max-w-2xl ${bodyOnDark}`}>{detail.ctaOverride.supporting}</p>
            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                {detail.ctaOverride.buttonLabel}
              </Link>
              <Link href="/services/" className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

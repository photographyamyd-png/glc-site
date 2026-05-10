import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CardSurface } from "@/components/ui/CardSurface";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { ExcavationMetricsSection } from "@/components/templates/ExcavationMetricsSection";
import { excavationClosingCtaContent } from "@/lib/ground-level/excavation-sandbox-map";
import { HOME_COPY, SERVICE_DETAILS } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

/** Distinct roster — cycle for cards; avoid repeating hero-only shot everywhere. */
const EX_IMAGES = [
  "/images/services/Excavation/excavation-004.jpg",
  "/images/services/Excavation/excavation-008.jpg",
  "/images/services/Excavation/excavation-012.jpg",
  "/images/services/Excavation/excavation-016.jpg",
] as const;

const RELATED_CARD_IMAGES = [
  "/images/services/Excavation/excavation-004.jpg",
  "/images/services/Excavation/excavation-008.jpg",
  "/images/services/Excavation/excavation-012.jpg",
] as const;

/** §8 tertiary line — deliverables are title-only strings; shared muted caption satisfies tri-tone per card */
const DELIVERABLE_CARD_CAPTION = "Commercial site work · Simcoe County";

/** §6 + §8 tri-tone: primary ink body; tertiary ink-muted (not washed eyebrows as sole texture on dark). */
const bodyLightPrimary =
  "text-[15px] leading-[1.72] text-ink sm:text-base";
const bodyOnDark = "text-[15px] leading-[1.72] text-white/90 sm:text-base";

function stripOuterQuotes(s: string): string {
  let t = s.trim();
  if (t.startsWith('"') && t.endsWith('"')) t = t.slice(1, -1);
  return t.trim();
}

type Props = {
  related: ServiceDef[];
};

/**
 * Bespoke excavation narrative — drainage-class section grammar, hero-derived layering DNA.
 * Does not compose generic GL lab shells (Who/Rail/Difference/Process blocks).
 */
export function ExcavationSitePreparationArticle({ related }: Props) {
  const processAccentMatch = /^(.+?)\s+(final\s+grade)$/i.exec(detail.process.heading);
  const testimonials = HOME_COPY.testimonials;
  const quoteEntries = testimonials.quotes.slice(0, 3).map((q) => ({
    quote: stripOuterQuotes(q.quote),
    by: q.by,
  }));

  return (
    <article className="relative">
      <ExcavationMetricsSection introLine={detail.hero.body[1] ?? detail.hero.body[0]} />

      {/* —— Scope: dark authority + glass column + raster —— */}
      <section
        id="about"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-scope-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="rounded-none border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_20px_60px_rgb(0_0_0/0.28)] backdrop-blur-md sm:p-8">
                <p className="label-overline-on-dark mb-0">{detail.scopeStripLabels[0] ?? "Overview"}</p>
                <h2
                  id="excavation-scope-heading"
                  className="mt-6 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
                >
                  <span className="text-white">{detail.scopeStripLabels[1] ?? "Scope"} — </span>
                  <span className="text-[color:var(--y)]">{detail.deliverablesHeading}</span>
                </h2>
                <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
                <div className="mt-6 space-y-6">
                  {detail.intro.map((p) => (
                    <p key={p.slice(0, 40)} className={bodyOnDark}>
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Deliverables snapshot">
                  {detail.deliverables.slice(0, 4).map((d) => (
                    <li
                      key={d}
                      className="eyebrow border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className="cta-hero-fill mt-8 inline-block px-8 py-4 text-sm font-semibold tracking-wide"
                >
                  {detail.ctaOverride.buttonLabel}
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 shadow-[0_24px_60px_rgb(0_0_0/0.45)] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[380px]">
                <Image
                  src="/images/services/Excavation/excavation-016.jpg"
                  alt="Excavator on a commercial excavation and site preparation project"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.5)] via-[rgb(0_0_0/0.12)] to-transparent" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Deliverables grid: mandatory raster per card —— */}
      <section
        id="field-deliverables"
        className="section-major band-light relative scroll-mt-[var(--header)] view-reveal"
        aria-labelledby="excavation-deliverables-heading"
      >
        <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink-muted">Capabilities</p>
            <h2
              id="excavation-deliverables-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              What we deliver on site
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {detail.deliverables.map((cap, i) => (
              <article
                key={cap}
                className={`flex flex-col overflow-hidden rounded-none border border-[color:var(--g200)] bespoke-surface panel-machined bg-[color:var(--brand-canvas)] ${
                  i === 0 ? "lg:ml-[var(--dna-stagger-sm)] motion-reduce:lg:ml-0" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={EX_IMAGES[i % EX_IMAGES.length]}
                    alt={`${cap} — commercial excavation field work`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.25)] to-transparent" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">{cap}</h3>
                  <p className="mt-2 text-xs leading-snug text-ink-muted sm:text-sm">{DELIVERABLE_CARD_CAPTION}</p>
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

      {/* —— Trust: editorial split (dark band — tonal seam vs deliverables light) —— */}
      <section
        id="excavation-offerings"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-trust-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative min-h-[280px] overflow-hidden border border-white/15 lg:min-h-[360px]">
                <Image
                  src="/images/services/Excavation/excavation-004.jpg"
                  alt="Commercial earthworks and excavation site preparation"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="eyebrow text-white">{detail.scopeStripLabels[2] ?? "Capabilities"}</p>
                <h2
                  id="excavation-trust-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
                >
                  <span className="text-white">Trust & </span>
                  <span className="text-[color:var(--y)]">authority</span>
                </h2>
                <div className="mt-[var(--s7)] max-w-prose space-y-8">
                  {detail.trust.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className={bodyOnDark}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Editorial band: full-bleed image + glass panel (multiply substrate = intentional plane-0 art) —— */}
      <section
        className="section-major band-dark-field relative isolate min-h-[280px] overflow-hidden scroll-mt-[var(--header)] border-t border-white/10"
        aria-labelledby="excavation-editorial-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/services/Excavation/excavation-012.jpg"
            alt="Earthmoving and grading operations on a commercial development site"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[rgb(10_12_11/0.5)] mix-blend-multiply" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.88)] via-[rgb(10_12_11/0.55)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse 82% 66% at 72% 40%, rgb(242 183 5 / 0.28) 0%, transparent 56%)",
          }}
          aria-hidden
        />
        <ClaudeLogicWatermark placement="center-right" className="opacity-[0.14]" />
        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-[min(100%,var(--max))] items-center px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl rounded-none border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8">
            <p className="eyebrow text-white">Field standard</p>
            <h2
              id="excavation-editorial-heading"
              className="mt-4 font-serif text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl"
            >
              Workmanship that carries the build
            </h2>
            <p className={`mt-6 ${bodyOnDark}`}>{detail.hero.body[4]}</p>
          </div>
        </div>
      </section>

      {/* —— Process: dark + image + glass step tiles —— */}
      <section
        id="process"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-process-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/45 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_45%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="relative min-h-[240px] lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-full">
                <Image
                  src="/images/services/Excavation/excavation-008.jpg"
                  alt="Excavation crew coordinating rough grading and site preparation"
                  fill
                  className="object-cover opacity-95"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] to-transparent" aria-hidden />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow text-white">{detail.process.eyebrow}</p>
              <h2
                id="excavation-process-heading"
                className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
              >
                {processAccentMatch ? (
                  <>
                    <span className="text-white">{processAccentMatch[1]} </span>
                    <span className="text-[color:var(--y)]">{processAccentMatch[2]}</span>
                  </>
                ) : (
                  detail.process.heading
                )}
              </h2>
              <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                {detail.process.steps.map((step) => (
                  <li
                    key={step.id}
                    className="rounded-none border border-white/20 bg-[rgb(255_255_255/0.06)] p-5 backdrop-blur-md"
                  >
                    <p className="eyebrow text-[color:var(--y)]">{step.id}</p>
                    <p className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-white sm:text-2xl">{step.title}</p>
                    <p className={`mt-4 ${bodyOnDark}`}>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* —— Coverage —— */}
      <section
        id="coverage"
        className="section-major band-light scroll-mt-[var(--header)] view-reveal"
        aria-labelledby="excavation-coverage-heading"
      >
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="eyebrow text-ink-muted">{HOME_COPY.coverage.eyebrow}</p>
                <h2
                  id="excavation-coverage-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
                >
                  Serving Barrie, Midland, Orillia &{" "}
                  <span className="text-[color:var(--y)]">Simcoe County</span>
                </h2>
                <p className={`mt-[var(--s7)] max-w-prose ${bodyLightPrimary}`}>
                  {detail.hero.body[2]}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative min-h-[260px] overflow-hidden border border-[color:var(--g200)]">
                <Image
                  src="/images/services/Excavation/excavation-016.jpg"
                  alt="Commercial excavation service coverage across Simcoe County"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Testimonials: no tabs — quote grid on dark —— */}
      <section
        id="testimonials"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-testimonials-heading"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_40%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">{testimonials.eyebrow}</p>
            <h2
              id="excavation-testimonials-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              <span className="text-white">Trusted by site supervisors </span>
              <span className="text-[color:var(--y)]">& PMs</span>
            </h2>
            <p className={`mt-5 max-w-2xl ${bodyOnDark}`}>{testimonials.sub}</p>
          </div>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {quoteEntries.map((entry) => (
              <li
                key={entry.by}
                className="rounded-none border border-white/18 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_18px_44px_rgb(0_0_0/0.35)] backdrop-blur-md"
              >
                <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">&ldquo;{entry.quote}&rdquo;</p>
                <p className="mt-6 eyebrow text-white">{entry.by}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/contact/"
              className="cta-hero-fill inline-flex min-h-[44px] items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.14em]"
            >
              Start consultation
            </Link>
          </div>
        </div>
      </section>

      {/* —— FAQ: light band + §4 atmosphere —— */}
      <section
        id="faq"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-faq-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 12% 30%, rgb(242 183 5 / 0.18) 0%, transparent 58%)",
          }}
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" className="opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink-muted">FAQ</p>
            <h2
              id="excavation-faq-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              Common questions
            </h2>
          </div>
          <div className="mt-10 space-y-3 sm:mt-12">
            {detail.faq.map((item) => (
              <details
                key={item.q}
                name="excavation-site-prep-faq"
                className="group border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-4 sm:min-h-[44px] sm:p-5"
              >
                <summary className="cursor-pointer list-none font-sans text-[15px] font-semibold leading-snug text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex min-h-[44px] items-center justify-between gap-4">
                    {item.q}
                    <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                    <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                  </span>
                </summary>
                <p className={`mt-2 max-w-prose pb-1 ${bodyLightPrimary}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* —— Related services (dark end-cap before CTA field) —— */}
      <section
        id="related-services"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-related-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Related</p>
            <h2
              id="excavation-related-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              <span className="text-white">Other </span>
              <span className="text-[color:var(--y)]">service lines</span>
            </h2>
            <p className={`mt-5 max-w-prose ${bodyOnDark}`}>{detail.hero.body[0]}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
            {related.slice(0, 3).map((r, i) => (
              <CardSurface
                key={r.slug}
                as="li"
                className="overflow-hidden rounded-none border-[color:var(--g200)] p-0 shadow-[0_16px_40px_rgb(0_0_0/0.22)]"
              >
                <Link href={`/services/${r.slug}/`} className="group flex flex-col sm:flex-row sm:items-stretch">
                  <div className="relative aspect-[16/10] w-full shrink-0 sm:w-[min(42%,260px)]">
                    <Image
                      src={RELATED_CARD_IMAGES[i % RELATED_CARD_IMAGES.length]}
                      alt={`${r.title} — related commercial service`}
                      fill
                      className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                      sizes="(min-width: 640px) 220px, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center border-l border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-4 sm:p-5">
                    <span className="line-clamp-2 font-serif text-lg font-semibold uppercase tracking-tight text-ink group-hover:text-[color:var(--y)]">
                      {r.title}
                    </span>
                    <span className={`mt-2 ${bodyLightPrimary}`}>{r.description}</span>
                  </div>
                </Link>
              </CardSurface>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/services/"
              className="cta-hero-fill inline-flex min-h-[44px] items-center px-8 py-4 text-sm font-semibold tracking-wide"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <GLCtaBand sectionId="cta-band" headingId="excavation-closing-cta-heading" content={excavationClosingCtaContent()} overlap />
    </article>
  );
}

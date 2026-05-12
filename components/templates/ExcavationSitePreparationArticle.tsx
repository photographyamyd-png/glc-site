import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CardSurface } from "@/components/ui/CardSurface";
import { ExcavationSeoBasement } from "@/components/templates/ExcavationSeoBasement";
import {
  excavationPainCopy,
  excavationProofGalleryEyebrow,
  excavationProofGalleryHeading,
  excavationProofGallerySub,
  excavationSolutionFeatures,
  excavationYellowConversionCtaContent,
} from "@/lib/ground-level/excavation-sandbox-map";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";
import { cn } from "@/lib/utils";

const detail = SERVICE_DETAILS["excavation-site-preparation"];

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

const RELATED_INTRO =
  "Explore adjacent service lines that pair with excavation — grading, foundations, drainage, and hauling on commercial programs.";

const bodyLightPrimary = "text-[15px] leading-[1.72] text-ink sm:text-base";
const bodyLightMuted = "text-[15px] leading-[1.72] text-ink-muted sm:text-base";
const bodyOnDark = "text-[15px] leading-[1.72] text-white/90 sm:text-base";

function IconLaserGuided({ className }: { className?: string }) {
  return (
    <svg className={className} width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M20 8v6M20 26v6M8 20h6M26 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

function IconExcavator({ className }: { className?: string }) {
  return (
    <svg className={className} width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M6 28h28v3H6v-3zM8 28V18l6-4h8l4 6v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
      <path d="M22 20h10l2 4v4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="31" r="2.5" fill="currentColor" />
      <circle cx="28" cy="31" r="2.5" fill="currentColor" />
    </svg>
  );
}

function IconUtility({ className }: { className?: string }) {
  return (
    <svg className={className} width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M8 12h24v16H8V12z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const SOLUTION_ICONS = [IconLaserGuided, IconExcavator, IconUtility] as const;

type Props = {
  related: ServiceDef[];
};

/**
 * Excavation service page — conversion funnel (pain → solution → proof → yellow CTA) + SEO basement.
 */
export function ExcavationSitePreparationArticle({ related }: Props) {
  const yellow = excavationYellowConversionCtaContent();
  const pain = excavationPainCopy;

  return (
    <article className="relative">
      {/* —— Pain: asymmetric text + image anchor (light) —— */}
      <section
        id="excavation-pain"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-pain-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/40 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_50%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative min-h-[240px] overflow-hidden border border-[color:var(--g200)] shadow-[0_16px_40px_rgb(0_0_0/0.08)] lg:min-h-[320px]">
                <Image
                  src="/images/services/Excavation/excavation-012.jpg"
                  alt="Trench and earthwork cut on a commercial development site in Simcoe County"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.35)] to-transparent" aria-hidden />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 70% 40%, rgb(242 183 5 / 0.22) 0%, transparent 55%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
                <p className="eyebrow text-ink-muted">{pain.eyebrow}</p>
                <h2
                  id="excavation-pain-heading"
                  className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
                >
                  <span className="text-ink">{pain.headingLine1} </span>
                  <span className="text-[color:var(--y)]">{pain.headingAccent}</span>
                </h2>
                <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
                <div className="mt-[var(--s7)] max-w-prose space-y-6">
                  {pain.bodyParas.map((p) => (
                    <p key={p.slice(0, 40)} className={bodyLightPrimary}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Solution: feature list + dual imagery (dark) —— */}
      <section
        id="excavation-solution"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-solution-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">How we de-risk the dig</p>
            <h2
              id="excavation-solution-heading"
              className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              <span className="text-white">Precision equipment </span>
              <span className="text-[color:var(--y)]">& field control</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgb(0_0_0/0.35)]">
                <Image
                  src="/images/services/Excavation/excavation-008.jpg"
                  alt="Laser- and GPS-guided grading on a commercial site in Simcoe County"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] to-transparent" aria-hidden />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgb(0_0_0/0.35)]">
                <Image
                  src="/images/services/Excavation/excavation-016.jpg"
                  alt="Heavy excavator on structural excavation and footing prep"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] to-transparent" aria-hidden />
              </div>
            </div>
            <ul className="flex flex-col gap-6 lg:col-span-7">
              {excavationSolutionFeatures.map((feat, i) => {
                const Icon = SOLUTION_ICONS[i] ?? IconUtility;
                return (
                  <li
                    key={feat.title}
                    className={cn(
                      "flex gap-5 border border-white/12 bg-[rgb(10_12_11/0.35)] p-5 backdrop-blur-sm sm:p-6",
                      i === 0 ? "lg:ml-[var(--dna-stagger-sm)] motion-reduce:lg:ml-0" : "",
                    )}
                  >
                    <div className="shrink-0 text-[color:var(--y)]">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-white sm:text-2xl">
                        {feat.title}
                      </h3>
                      <p className={`mt-3 max-w-prose ${bodyOnDark}`}>{feat.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* —— Proof: full-width gallery (light) —— */}
      <section
        id="excavation-proof"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-proof-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/45 to-transparent"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink-muted">{excavationProofGalleryEyebrow}</p>
            <h2
              id="excavation-proof-heading"
              className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {excavationProofGalleryHeading}
            </h2>
            <p className={`mt-5 max-w-prose ${bodyLightMuted}`}>{excavationProofGallerySub}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {EX_IMAGES.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden border border-[color:var(--g200)] shadow-[0_12px_32px_rgb(0_0_0/0.08)]"
              >
                <Image
                  src={src}
                  alt={
                    i % 2 === 0
                      ? "Clean structural footing excavation and trench line on a commercial site"
                      : "Machine-controlled trench and grade on a Simcoe County civil project"
                  }
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.2)] to-transparent" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —— Final CTA: high-contrast yellow —— */}
      <section
        id="excavation-final-cta"
        className="section-major relative z-20 scroll-mt-[var(--header)] border-y border-black/15 bg-[color:var(--y)]"
        aria-labelledby="excavation-final-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--ink)_6%,transparent),transparent_55%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="center-right" className="opacity-[0.08]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-ink">{yellow.eyebrow}</p>
              <h2
                id="excavation-final-cta-heading"
                className="mt-3 font-serif text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-3xl"
              >
                {yellow.heading}
              </h2>
              <p className={`mt-4 max-w-prose ${bodyLightPrimary}`}>{yellow.supporting}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={yellow.primaryHref}
                className="inline-flex min-h-[44px] items-center justify-center border-2 border-[color:var(--ink)] bg-[color:var(--ink)] px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[color:var(--ink)]/90"
              >
                {yellow.primaryLabel}
              </Link>
              <a
                href={yellow.phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center border-2 border-[color:var(--ink)] bg-transparent px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)]/10"
              >
                {yellow.phoneLabel}
              </a>
              <a
                href={yellow.emailHref}
                className="eyebrow text-center text-[color:var(--ink)] underline decoration-[color:var(--ink)]/45 underline-offset-4 transition hover:decoration-[color:var(--ink)]"
              >
                {yellow.emailCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExcavationSeoBasement detail={detail} />

      {/* —— Related services —— */}
      <section
        id="related-services"
        className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="excavation-related-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Related</p>
            <h2
              id="excavation-related-heading"
              className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              <span className="text-white">Other </span>
              <span className="text-[color:var(--y)]">service lines</span>
            </h2>
            <p className={`mt-5 max-w-prose ${bodyOnDark}`}>{RELATED_INTRO}</p>
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
                    <span className="line-clamp-2 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink group-hover:text-[color:var(--y)]">
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
              className="cta-hero-fill inline-flex min-h-[44px] items-center px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em]"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

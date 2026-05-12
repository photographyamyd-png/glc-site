import Image from "next/image";
import Link from "next/link";
import type { ServiceDef } from "@/lib/site/registry";
import type { ServiceDetailCopy } from "@/lib/site/copy";
import { CTA_BAND, EMAIL_MAILTO, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { GLCtaBand } from "@/components/ground-level/GLCtaBand";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CardSurface } from "@/components/ui/CardSurface";
import { getGradingProofSliderImages, getServiceImage } from "@/lib/site/service-images";
import { GradingBeforeAfterProof } from "@/components/services/grading/GradingBeforeAfterProof";
import { GradingStickyCtaBar } from "@/components/services/grading/GradingStickyCtaBar";

type Props = {
  service: ServiceDef;
  related: ServiceDef[];
  detail: ServiceDetailCopy;
};

export function GradingConversionLane({ service, related, detail }: Props) {
  const lane = detail.extra?.gradingLane;
  if (!lane) {
    throw new Error("GradingConversionLane requires detail.extra.gradingLane");
  }

  const gradingImg = getServiceImage("site-preparation-grading");
  const excavationImg = getServiceImage("excavation-site-preparation");
  const proofPair = getGradingProofSliderImages();
  const painCardImages = [gradingImg, excavationImg, gradingImg] as const;

  return (
    <div className="relative pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))]">
      <GradingStickyCtaBar href="/contact/" label={detail.ctaOverride.buttonLabel} />

      <section
        id="overview"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden"
        aria-labelledby="grading-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(165deg,rgb(242_183_5/0.08),transparent_48%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.07] sm:opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
          <nav className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-muted" aria-label="Breadcrumb">
            <Link href="/services/" className="text-ink-muted underline-offset-2 hover:text-ink hover:underline">
              {detail.hero.breadcrumbParent}
            </Link>
            <span aria-hidden className="mx-2 text-[color:var(--g200)]">
              /
            </span>
            <span className="text-ink">{service.title}</span>
          </nav>
          <div className="mt-8 max-w-4xl border-l-4 border-[color:var(--y)] pl-5 sm:mt-10">
            <p className="eyebrow text-ink">Site preparation &amp; grading</p>
            <h1
              id="grading-hero-heading"
              className="mt-4 font-serif text-[clamp(2rem,5.5vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-tight text-ink"
            >
              {lane.displayH1}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] text-ink sm:text-base">{lane.heroKeywordLine}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink">
              {detail.hubStats.map((s) => (
                <span key={s.label}>
                  <span className="text-[color:var(--y)]">{s.value}</span>{" "}
                  <span className="text-[color:var(--text-600)]">{s.label}</span>
                </span>
              ))}
            </div>
            <p className="mt-6 eyebrow text-ink">Service coverage</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Service coverage">
              {["Barrie", "Midland", "Orillia", "Simcoe County"].map((tag) => (
                <li key={tag} className="eyebrow border border-[color:var(--g200)] bg-white px-3 py-1.5 text-ink shadow-sm">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                {detail.ctaOverride.buttonLabel}
              </Link>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[44px] items-center justify-center border-2 border-ink px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-[color:var(--y)]"
              >
                Call dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="grading-pain"
        className="relative z-[2] -mt-12 scroll-mt-[var(--header)] sm:-mt-16 lg:-mt-20"
        aria-labelledby="grading-pain-heading"
      >
        <div className="section-major band-dark-field relative overflow-hidden pb-4 pt-8 sm:pb-6 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_35%)]" aria-hidden />
          <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="opacity-[0.1]" />
          <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">The pain</p>
              <h2 id="grading-pain-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                {lane.painHeading}
              </h2>
              <p className="mt-6 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">{lane.painIntro}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
              {lane.painCards.map((card, idx) => {
                const img = painCardImages[idx % painCardImages.length];
                const overlap = idx === 1 ? "md:-translate-y-4 md:translate-y-0 lg:-translate-y-6" : idx === 2 ? "md:translate-y-3 lg:translate-y-5" : "";
                return (
                  <article
                    key={card.id}
                    className={`relative border border-white/15 bg-[rgb(255_255_255/0.06)] p-5 shadow-[0_20px_48px_rgb(0_0_0/0.35)] backdrop-blur-sm sm:p-7 ${overlap}`}
                  >
                    <div className="relative mb-4 aspect-[16/10] overflow-hidden border border-white/20">
                      <Image
                        src={img.src}
                        alt={`${card.title} — ${img.alt}`}
                        fill
                        className={idx === 2 ? "object-cover object-[center_60%]" : "object-cover"}
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-white sm:text-2xl">{card.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">{card.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="grading-solution"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden"
        aria-labelledby="grading-solution-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.08]" />
        <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max))] gap-10 px-4 py-[var(--section-v)] sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-5">
            <p className="eyebrow text-ink">{lane.solutionEyebrow}</p>
            <h2 id="grading-solution-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {lane.solutionHeading}
            </h2>
            <div className="mt-[var(--s7)] max-w-xl space-y-6">
              {lane.solutionParagraphs.map((p) => (
                <p key={p} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)] shadow-lg">
              <Image
                src={gradingImg.src}
                alt={`${gradingImg.alt} — laser and GPS finish equipment`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)] shadow-lg">
              <Image
                src={excavationImg.src}
                alt={`${excavationImg.alt} — finished pad and commercial turnover context`}
                fill
                className="object-cover object-[center_40%]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <GradingBeforeAfterProof
        eyebrow={lane.proofEyebrow}
        heading={lane.proofHeading}
        caption={lane.proofCaption}
        beforeSrc={proofPair.before.src}
        beforeAlt={proofPair.before.alt}
        afterSrc={proofPair.after.src}
        afterAlt={proofPair.after.alt}
      />

      <section id="mid-cta" className="section-major border-t border-[color:var(--y)]/30 bg-[color:var(--brand-canvas)] scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <GLCtaBand
            sectionId="grading-mid-cta-band"
            headingId="grading-mid-cta-heading"
            overlap={false}
            content={{
              eyebrow: CTA_BAND.eyebrow,
              heading: detail.ctaOverride.heading,
              headingAccentKey: detail.ctaOverride.heading.toLowerCase().includes("grading") ? "grading" : undefined,
              sub: detail.ctaOverride.supporting,
              phoneLabel: CTA_BAND.phoneLabel,
              phoneHref: PHONE_TEL,
              emailCta: CTA_BAND.emailCta,
              emailHref: `${EMAIL_MAILTO}?subject=${encodeURIComponent(`${service.title} service inquiry`)}`,
            }}
          />
        </div>
      </section>

      <section id="request-site-visit" className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden">
        <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.08]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden border border-white/15 border-l-[4px] border-l-[color:var(--y)] bg-[rgb(12_14_13)] p-6 text-white shadow-2xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(242_183_5/0.12),transparent_38%)]" aria-hidden />
            <p className="relative z-10 eyebrow text-white">Request site visit</p>
            <p className="relative z-10 mt-3 font-sans text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              {detail.ctaOverride.heading}
            </p>
            <p className="relative z-10 mt-4 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">{detail.ctaOverride.supporting}</p>
            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                {detail.ctaOverride.buttonLabel}
              </Link>
              <Link href="/services/" className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="service-area" className="section-major band-light scroll-mt-[var(--header)] border-t border-[color:var(--g200)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-ink">Service area</p>
              <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">Barrie and Simcoe County coverage</h2>
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
        </div>
      </section>

      <section id="related-services" className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white">Related services</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Related service lines</h2>
          </div>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {related.slice(0, 3).map((r) => {
              const relatedImage = getServiceImage(r.slug);
              return (
                <CardSurface key={r.slug} as="li" className="overflow-hidden border-white/20 bg-[rgb(255_255_255/0.08)] p-0 text-white backdrop-blur-sm">
                  <Link href={`/services/${r.slug}/`} className="group flex h-full flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={relatedImage.src}
                        alt={relatedImage.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="font-serif text-xl font-bold uppercase leading-tight tracking-[0.04em] text-white group-hover:text-[color:var(--y)]">{r.title}</span>
                      <span className="mt-3 text-[15px] leading-[1.72] text-white/85">{r.description}</span>
                    </div>
                  </Link>
                </CardSurface>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { DrainagePainGradientSection } from "@/components/drainage-hardscaping/DrainagePainGradientSection";
import { DrainageSeoBasement } from "@/components/drainage-hardscaping/DrainageSeoBasement";
import { DrainageSystemsSolution } from "@/components/drainage-hardscaping/DrainageSystemsSolution";
import { DrainageTechnicalCrossSection } from "@/components/drainage-hardscaping/DrainageTechnicalCrossSection";
import { GradingBeforeAfterProof } from "@/components/services/grading/GradingBeforeAfterProof";
import { DrainageHardscapingJsonLd } from "@/components/seo/DrainageHardscapingJsonLd";
import { CTAButton } from "@/components/drainage-hardscaping/primitives";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import {
  DRAINAGE_FINAL_CTA,
  DRAINAGE_HERO,
  DRAINAGE_IMAGES,
  DRAINAGE_PROOF_BEFORE_AFTER,
  drainageHeroPhoneCta,
} from "@/lib/site/drainage-hardscaping-landing-content";
import type { ServiceDef } from "@/lib/site/registry";

/**
 * Slim drainage-led article: split hero → technical cross-section → pain → systems →
 * proof slider → final CTA → SEO basement (technical + FAQ accordions). Hardscape
 * longform lives off this route; gutter shell matches design-system §1.
 */
type Props = { service: ServiceDef; related: ServiceDef[] };

export function DrainageHardscapingPage({ service, related }: Props) {
  void service;
  void related;

  return (
    <article className="relative">
      <DrainageHardscapingJsonLd />

      <section
        className="hero-stage band-dark-field relative scroll-mt-[var(--header)] overflow-hidden"
        aria-labelledby="drainage-hero-h1"
      >
        <div className="relative w-full lg:min-h-[min(88dvh,860px)]">
          <div className="mx-auto grid max-w-[min(100%,var(--max-bleed))] min-h-[min(100dvh,920px)] lg:min-h-[min(88dvh,860px)] lg:grid-cols-2">
            <div className="relative z-10 order-1 flex flex-col justify-end bg-[rgb(10_12_11)] px-4 pb-10 pt-[var(--site-header-offset)] sm:px-6 sm:pb-12 lg:justify-center lg:px-10 lg:pb-14 lg:pt-[var(--site-header-offset)]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_0%_100%,rgb(242_183_5/0.08),transparent_55%)]"
                aria-hidden
              />
              <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-0 opacity-[0.12] lg:hidden" />
              <div className="relative max-w-xl">
                <nav aria-label="Breadcrumb" className="hero-eyebrow eyebrow text-white/55">
                  <Link href="/" className="hover:text-[color:var(--y)]">
                    {DRAINAGE_HERO.breadcrumbHome}
                  </Link>
                  <span className="mx-2" aria-hidden>
                    /
                  </span>
                  <Link href="/services/" className="hover:text-[color:var(--y)]">
                    {DRAINAGE_HERO.breadcrumbServices}
                  </Link>
                  <span className="mx-2" aria-hidden>
                    /
                  </span>
                  <span className="text-white">{DRAINAGE_HERO.breadcrumbCurrent}</span>
                </nav>
                <p className="hero-eyebrow label-overline-on-dark mt-[var(--s7)] mb-0">Drainage solutions</p>
                <h1
                  id="drainage-hero-h1"
                  className="mt-[var(--s7)] max-w-4xl font-serif text-[clamp(1.75rem,4.2vw,3rem)] font-semibold uppercase leading-[0.98] tracking-tight text-white"
                >
                  {DRAINAGE_HERO.h1LineBefore}{" "}
                  <span className="text-[color:var(--y)]">{DRAINAGE_HERO.h1LineAccent}</span>
                </h1>
                <p className="mt-3 font-serif text-sm font-bold uppercase leading-snug tracking-tight text-white/85 sm:text-base">
                  {DRAINAGE_HERO.kicker}
                </p>
                <p className="mt-6 max-w-prose border-l-4 border-[color:var(--y)]/50 pl-5 text-[15px] leading-[1.72] text-white/90 sm:text-base">
                  {DRAINAGE_HERO.sub}
                </p>
                <div className="hero-cta-row mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link href="/contact/" className="cta-hero-fill px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                    {DRAINAGE_HERO.ctaPrimary}
                  </Link>
                  <Link href="/contact/" className="cta-outline-light px-5 py-3 text-center text-xs tracking-wide">
                    {DRAINAGE_HERO.ctaSecondary}
                  </Link>
                  <a href={PHONE_TEL} className="cta-outline-light px-5 py-3 text-center text-xs tracking-wide">
                    {drainageHeroPhoneCta()}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative order-2 min-h-[min(42dvh,420px)] w-full lg:min-h-0">
              <Image
                src={DRAINAGE_IMAGES.hero.src}
                alt={DRAINAGE_IMAGES.hero.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.55)] via-transparent to-[rgb(10_12_11/0.15)] lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[rgb(10_12_11/0.45)]" aria-hidden />
              <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] hidden opacity-[0.14] lg:block" />
            </div>
          </div>
        </div>
      </section>

      <DrainageTechnicalCrossSection />
      <DrainagePainGradientSection />
      <DrainageSystemsSolution />
      <GradingBeforeAfterProof
        sectionId="drainage-proof"
        headingId="drainage-proof-heading"
        eyebrow={DRAINAGE_PROOF_BEFORE_AFTER.eyebrow}
        heading={DRAINAGE_PROOF_BEFORE_AFTER.heading}
        caption={DRAINAGE_PROOF_BEFORE_AFTER.caption}
        beforeSrc={DRAINAGE_IMAGES.proofBefore.src}
        beforeAlt={DRAINAGE_IMAGES.proofBefore.alt}
        afterSrc={DRAINAGE_IMAGES.proofAfter.src}
        afterAlt={DRAINAGE_IMAGES.proofAfter.alt}
      />

      <section
        id={DRAINAGE_FINAL_CTA.id}
        className="relative scroll-mt-[var(--header)] border-t-4 border-[color:var(--y)] py-[var(--s14)] band-dark-field"
        aria-labelledby="final-cta-h2"
      >
        <div className="absolute inset-0">
          <Image src={DRAINAGE_IMAGES.finalCta.src} alt={DRAINAGE_IMAGES.finalCta.alt} fill className="object-cover opacity-60" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[rgb(10_12_11/0.45)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 text-center sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-sm border border-white/10 bg-[rgb(10_12_11/0.5)] px-6 py-10 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:px-10 sm:py-12">
            <h2 id="final-cta-h2" className="font-serif text-4xl font-bold uppercase text-white sm:text-[48px]">
              {DRAINAGE_FINAL_CTA.line1}
            </h2>
            <p className="mt-2 font-serif text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-[color:var(--y)] sm:text-[48px]">{DRAINAGE_FINAL_CTA.line2}</p>
            <div className="mx-auto mt-8 max-w-2xl space-y-3 text-left text-base text-white/90 sm:text-center">
              {DRAINAGE_FINAL_CTA.subParas.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton variant="primary" href="/contact/">
                {DRAINAGE_FINAL_CTA.ctaPrimary}
              </CTAButton>
              <CTAButton variant="secondary" href="/contact/">
                {DRAINAGE_FINAL_CTA.ctaSecondary}
              </CTAButton>
              <CTAButton variant="ghost" href={PHONE_TEL}>
                {DRAINAGE_FINAL_CTA.ctaPhone}
              </CTAButton>
            </div>
            <p className="mt-6 text-xs text-white/55">{DRAINAGE_FINAL_CTA.finePrint}</p>
          </div>
        </div>
      </section>

      <DrainageSeoBasement />
    </article>
  );
}

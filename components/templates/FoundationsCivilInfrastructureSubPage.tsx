import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import type { FoundationsSubPageContent } from "@/lib/site/foundations-civil-infrastructure-content";
import { FOUNDATIONS_HUB_HERO, FOUNDATIONS_HUB_PATH } from "@/lib/site/foundations-civil-infrastructure-content";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";

type Props = {
  content: FoundationsSubPageContent;
  imageSrc: string;
  imageAlt: string;
};

export function FoundationsCivilInfrastructureSubPage({ content, imageSrc, imageAlt }: Props) {
  return (
    <article className="relative">
      <section className="hero-stage section-major band-dark-field relative min-h-[min(100dvh,880px)] scroll-mt-[var(--header)] overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.72)] to-[rgb(10_12_11/0.35)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.3)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.14]" />
        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,880px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-10 pt-[var(--site-header-offset)] sm:px-10 lg:px-20 lg:pt-[var(--site-header-offset)]">
          <div className="max-w-[min(100%,var(--max))] rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
            <p className="hero-eyebrow label-overline-on-dark mb-0">Foundations & Civil Infrastructure</p>
            <h1 className="mt-[var(--s7)] font-serif text-[clamp(1.5rem,4.5vw,2.75rem)] font-semibold uppercase leading-[0.95] tracking-tight text-white">
              {content.h1Lead}
              <span className="text-[color:var(--y)]">{content.h1Accent}</span>
            </h1>
            <h2 className="mt-6 font-serif text-base font-bold uppercase leading-snug tracking-tight text-white/90 sm:text-lg">
              {content.h2}
            </h2>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{content.heroLead}</p>
            {content.heroMore.length ? (
              <div className="mt-6 max-w-prose space-y-3 border-l-4 border-[color:var(--y)] pl-5">
                {content.heroMore.map((p) => (
                  <p key={p.slice(0, 48)} className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
            <div className="hero-cta-row mt-6 grid max-w-prose gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-2 sm:items-stretch">
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
            <p className="mt-3 max-w-prose text-sm text-white/60">{FOUNDATIONS_HUB_HERO.microcopy}</p>
          </div>
        </div>
      </section>

      <section className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]" aria-hidden />
        <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.08]" />
        <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max))] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5 lg:col-span-6">
            <p className="eyebrow text-ink">Scope</p>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">{content.servicesHeading}</h2>
            <ul className="mt-8 max-w-prose space-y-3">
              {content.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.72] text-ink sm:text-base">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 bg-[color:var(--y)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)] lg:col-span-6">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-[center_40%]" sizes="(min-width: 1024px) 42vw, 100vw" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.35)] to-transparent" aria-hidden />
          </div>
        </div>
      </section>

      <section className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_40%)]" aria-hidden />
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">Next step</p>
              <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{content.ctaParagraph}</p>
              {content.ctaParagraphB ? (
                <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-white/90 sm:text-base">{content.ctaParagraphB}</p>
              ) : null}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact/" className="cta-primary inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  {content.ctaButtonLabel}
                </Link>
                <Link
                  href={PHONE_TEL}
                  className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
                >
                  Call 705-619-4902
                </Link>
              </div>
              <p className="mt-10">
                <Link href={FOUNDATIONS_HUB_PATH} className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--y)] hover:underline">
                  ← Back to Foundations & Civil Infrastructure
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

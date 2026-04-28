import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ThreeActHeadline } from "@/components/ui/ThreeActHeadline";
import { HERO, MARQUEE_PHRASES } from "@/lib/ground-level/homepage-copy";

export type GLHeroStat = string | { value: string; label: string };

export type GLHeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  lede: string;
  stats: readonly GLHeroStat[];
  serviceCoverageLabel: string;
  serviceBarLabels?: readonly string[];
  serviceShortcuts?: readonly { label: string; slug: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  marqueePhrases: readonly string[];
};

function defaultHeroContent(): GLHeroContent {
  return {
    eyebrow: HERO.eyebrow,
    titleLine1: HERO.titleLine1,
    titleLine2: HERO.titleLine2,
    titleLine3: HERO.titleLine3,
    lede: HERO.lede,
    stats: HERO.stats,
    serviceCoverageLabel: HERO.serviceCoverageLabel,
    serviceBarLabels: HERO.serviceBarLabels,
    primaryCta: { label: HERO.primaryCta, href: "#contact" },
    secondaryCta: { label: HERO.secondaryCta, href: "#services" },
    marqueePhrases: MARQUEE_PHRASES,
  };
}

function formatStat(s: GLHeroStat) {
  return typeof s === "string" ? s : `${s.value} ${s.label}`;
}

export type GLHeroProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLHeroContent;
  imageSrc?: string;
  showMarquee?: boolean;
};

export function GLHero({
  sectionId = "top",
  headingId = "hero-heading",
  content,
  imageSrc = "/images/services/Excavation/excavation-016.jpg",
  showMarquee = true,
}: GLHeroProps = {}) {
  const c = content ?? defaultHeroContent();
  const marqueeDup = [...c.marqueePhrases, ...c.marqueePhrases];
  const shortcuts = c.serviceShortcuts;
  const barLabels = c.serviceBarLabels;

  return (
    <section
      id={sectionId}
      className="hero-stage band-dark-field relative min-h-[100dvh] w-full scroll-mt-0 overflow-hidden"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,color-mix(in_srgb,var(--y)_6%,transparent),transparent_55%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-right" className="z-[1]" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-8 pt-28 sm:px-10 sm:pb-10 lg:justify-between lg:px-20 lg:pb-8 lg:pt-[calc(var(--header)+3rem)]">
        <div className="max-w-[min(100%,var(--max))] space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
          <p className="hero-eyebrow label-overline-on-dark mb-0 opacity-90">{c.eyebrow}</p>
          <div className="mt-[var(--s7)]">
            <ThreeActHeadline id={headingId} line1={c.titleLine1} line2={c.titleLine2} line3={c.titleLine3} />
          </div>
          <p className="hero-caption mt-[var(--s7)] max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{c.lede}</p>
          <div className="hero-rule mt-8 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
            {c.stats.map((s) => (
              <span key={formatStat(s)}>{formatStat(s)}</span>
            ))}
          </div>
          <p className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-white/55">{c.serviceCoverageLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {shortcuts
              ? shortcuts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:border-[color:var(--y)]/45"
                  >
                    {item.label}
                  </Link>
                ))
              : barLabels
                ? barLabels.map((label) => (
                    <span
                      key={label}
                      className="border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85"
                    >
                      {label}
                    </span>
                  ))
                : null}
          </div>
        </div>
        <div className="hero-cta-row mt-8 flex min-h-[76px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-6">
          <a
            href={c.primaryCta.href}
            className="cta-hero-fill px-6 py-4 text-center text-sm font-semibold tracking-wide sm:min-w-[200px]"
          >
            {c.primaryCta.label}
          </a>
          <a
            href={c.secondaryCta.href}
            className="cta-outline-light px-6 py-3.5 text-center text-sm font-semibold tracking-wide transition-colors"
          >
            {c.secondaryCta.label}
          </a>
        </div>
        {showMarquee ? (
          <div
            className="hero-marquee mt-8 w-full overflow-hidden border-y border-white/10 bg-[rgb(0_0_0/0.35)] py-3 backdrop-blur-sm sm:mt-10"
            aria-hidden
          >
            <div className="hero-marquee-track flex w-max gap-10 pr-10">
              {marqueeDup.map((phrase, i) => (
                <span
                  key={`${phrase}-${i}`}
                  className="shrink-0 font-label text-[10px] uppercase tracking-[0.22em] text-white/65"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

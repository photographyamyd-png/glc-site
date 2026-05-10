import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { ThreeActHeadline } from "@/components/ui/ThreeActHeadline";
import { HERO, MARQUEE_PHRASES } from "@/lib/ground-level/homepage-copy";
import type { PrimaryServiceSlug } from "@/lib/site/registry";
import { cn } from "@/lib/utils";

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
  serviceShortcuts?: readonly { label: string; slug: PrimaryServiceSlug; sub?: string }[];
  primaryCta: { label: string; href: string; sub?: string };
  secondaryCta: { label: string; href: string; sub?: string };
  marqueePhrases: readonly string[];
};

function heroTrustSublineForCta(href: string, fallback?: string) {
  if (fallback) return fallback;
  if (href.startsWith("tel:")) return "CALL NOW — FREE ESTIMATE";
  if (href.startsWith("#")) return "SCROLL TO SECTION";
  if (href.includes("contact")) return "BOOK A CONSULTATION";
  return "CONTINUE";
}

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
    primaryCta: { label: HERO.primaryCta, href: "/contact" },
    secondaryCta: { label: HERO.secondaryCta, href: "/#services" },
    marqueePhrases: MARQUEE_PHRASES,
  };
}

function formatStat(s: GLHeroStat) {
  return typeof s === "string" ? s : `${s.value} ${s.label}`;
}

function parseStatParts(s: GLHeroStat): { value: string; label: string } | null {
  if (typeof s !== "string") return { value: s.value, label: s.label };
  const m = /^\s*(\S+)\s+(.+)$/.exec(s);
  if (!m) return null;
  return { value: m[1], label: m[2] };
}

function isInternalRoute(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

const MARKETING_IMAGE_ALT_DEFAULT =
  "Commercial excavation equipment operating on an active construction site";

export type GLHeroProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLHeroContent;
  imageSrc?: string;
  /** Meaningful alt when `variant="marketing"` (authority-field DNA). */
  imageAlt?: string;
  showMarquee?: boolean;
  /**
   * `marketing` matches [HomeHeroSection] layers, header offset, glass panel, hero-metrics cards,
   * and secondary CTA as underlined text (not outline slab).
   */
  variant?: "default" | "marketing";
};

export function GLHero({
  sectionId = "top",
  headingId = "hero-heading",
  content,
  imageSrc = "/images/services/Excavation/excavation-016.jpg",
  imageAlt,
  showMarquee = true,
  variant = "default",
}: GLHeroProps = {}) {
  const c = content ?? defaultHeroContent();
  const marqueeDup = [...c.marqueePhrases, ...c.marqueePhrases];
  const shortcuts = c.serviceShortcuts;
  const barLabels = c.serviceBarLabels;
  const resolvedAlt = variant === "marketing" ? imageAlt ?? MARKETING_IMAGE_ALT_DEFAULT : imageAlt ?? "";

  if (variant === "marketing") {
    return (
      <section
        id={sectionId}
        className="hero-stage band-dark-field relative isolate min-h-[100svh] scroll-mt-[var(--site-header-offset)] overflow-hidden"
        aria-labelledby={headingId}
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={imageSrc}
            alt={resolvedAlt}
            fill
            priority
            sizes="100vw"
            className="hero-bg-image object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.78)] to-[rgb(10_12_11/0.28)] lg:via-[rgb(10_12_11/0.64)] lg:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.32)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              background:
                "radial-gradient(ellipse 82% 66% at 72% 40%, rgb(242 183 5 / 0.32) 0%, transparent 56%)",
            }}
            aria-hidden
          />
        </div>

        <ClaudeLogicWatermark placement="bottom-right" className="z-[1]" />

        <div className="relative z-10 mx-auto w-full max-w-[min(100%,var(--max-bleed))] px-7 pb-8 pt-[var(--site-header-offset)] sm:px-10 sm:pb-10 lg:px-20 lg:pb-12">
          <div className="mx-auto grid max-w-[var(--max)] gap-6 lg:grid-cols-1">
            <div className="rounded-none border border-white/10 bg-[rgb(10_12_11/0.4)] p-6 shadow-[0_20px_60px_rgb(0_0_0/0.28)] backdrop-blur-sm sm:p-7">
              <p className="hero-eyebrow label-overline-on-dark mb-0">{c.eyebrow}</p>
              <div className="mt-6">
                <ThreeActHeadline id={headingId} line1={c.titleLine1} line2={c.titleLine2} line3={c.titleLine3} />
              </div>
              <div className="hero-caption mt-5 max-w-[36rem]">
                <ExpandableCopy text={c.lede} className="text-[15px] leading-relaxed text-white/90 sm:text-base" />
              </div>
              <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-[34rem]">
                {c.stats.map((stat) => {
                  const parts = parseStatParts(stat);
                  const key = formatStat(stat);
                  const inner = parts ? (
                    <>
                      <p className="font-serif text-xl text-[color:var(--y)] sm:text-2xl">{parts.value}</p>
                      <p className="mt-1 eyebrow text-white">{parts.label}</p>
                    </>
                  ) : (
                    <p className="font-serif text-xl text-white sm:text-2xl">{key}</p>
                  );
                  return (
                    <Link
                      key={key}
                      href="/about/"
                      className="rounded-none border border-white/16 bg-[rgb(10_12_11/0.5)] p-3 text-white backdrop-blur-sm transition hover:border-[color:var(--y)]/80 hover:bg-[rgb(10_12_11/0.68)]"
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>

              <p className="mt-6 eyebrow text-white">{c.serviceCoverageLabel}</p>
              {(shortcuts?.length || barLabels?.length) ? (
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={c.serviceCoverageLabel}>
                  {shortcuts?.length
                    ? shortcuts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="eyebrow inline-block border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white transition-colors hover:border-[color:var(--y)]/45"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))
                    : barLabels!.map((label) => (
                        <li
                          key={label}
                          className="eyebrow border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-white"
                        >
                          {label}
                        </li>
                      ))}
                </ul>
              ) : null}

              <div className="hero-cta-row mt-6 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-1 sm:items-center">
                <p className="text-xs leading-relaxed text-white/76">
                  Start with a scoped consultation, then move to pricing and mobilization.
                </p>
                {isInternalRoute(c.primaryCta.href) ? (
                  <Link href={c.primaryCta.href} className="cta-hero-fill px-5 py-3 text-center text-xs tracking-wide">
                    {c.primaryCta.label}
                  </Link>
                ) : (
                  <a href={c.primaryCta.href} className="cta-hero-fill px-5 py-3 text-center text-xs tracking-wide">
                    {c.primaryCta.label}
                  </a>
                )}
                {isInternalRoute(c.secondaryCta.href) ? (
                  <Link
                    href={c.secondaryCta.href}
                    className="eyebrow text-center text-white underline decoration-white/45 underline-offset-4 transition hover:text-[color:var(--y)] hover:decoration-[color:var(--y)]"
                  >
                    {c.secondaryCta.label}
                  </Link>
                ) : (
                  <a
                    href={c.secondaryCta.href}
                    className="eyebrow text-center text-white underline decoration-white/45 underline-offset-4 transition hover:text-[color:var(--y)] hover:decoration-[color:var(--y)]"
                  >
                    {c.secondaryCta.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {showMarquee ? (
          <div className="relative z-10 mx-auto w-full max-w-[min(100%,var(--max-bleed))] px-7 pb-8 sm:px-10 lg:px-20">
            <div
              className="hero-marquee w-full overflow-hidden border-y border-white/10 bg-[rgb(0_0_0/0.35)] py-3 backdrop-blur-sm"
              aria-hidden
            >
              <div className="hero-marquee-track flex w-max gap-10 pr-10">
                {marqueeDup.map((phrase, i) => (
                  <span key={`${phrase}-${i}`} className="shrink-0 eyebrow text-white">
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section
      id={sectionId}
      className="hero-stage band-dark-field relative min-h-[100dvh] w-full scroll-mt-0 overflow-hidden"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={resolvedAlt}
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
      <ClaudeLogicWatermark placement="bottom-right" className="z-[1]" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-7 pb-8 pt-28 sm:px-10 sm:pb-10 lg:justify-between lg:px-20 lg:pb-8 lg:pt-[calc(var(--header)+3rem)]">
        <div className="max-w-[min(100%,var(--max))] space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
          <p className="hero-eyebrow label-overline-on-dark mb-0">{c.eyebrow}</p>
          <div className="mt-[var(--s7)]">
            <ThreeActHeadline id={headingId} line1={c.titleLine1} line2={c.titleLine2} line3={c.titleLine3} />
          </div>
          <div className="hero-caption mt-[var(--s7)] max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            <ExpandableCopy text={c.lede} className="text-base leading-relaxed text-white/85 sm:text-lg" />
          </div>
          <div className="hero-rule mt-8 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
            {c.stats.map((s) => (
              <span key={formatStat(s)}>{formatStat(s)}</span>
            ))}
          </div>
          <p className="mt-6 eyebrow text-white">{c.serviceCoverageLabel}</p>
        </div>

        {/* Trust bands sit on the hero field (not inside frosted glass) so ink-deep + yellow rail read like drainage §8 */}
        {shortcuts?.length ? (
          <div className="mt-6 w-full max-w-[min(100%,var(--max))] border-t-4 border-[color:var(--y)] bg-[var(--ink-deep)] shadow-[0_16px_56px_rgb(0_0_0/0.45)] ring-1 ring-white/15">
            <div className="border-t border-white/20">
              <div className="grid grid-cols-2 gap-px bg-white/20 md:grid-cols-3">
                {shortcuts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className={cn(
                      "group block min-h-[44px] bg-[var(--ink-deep)] px-4 py-6 outline-none transition-colors sm:px-6 sm:py-8",
                      "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-deep)]",
                      "hover:bg-[rgb(255_255_255/0.06)]",
                    )}
                  >
                    <p className="font-serif text-xl font-bold leading-snug text-[color:var(--y)] line-clamp-2 sm:text-2xl">
                      {item.label}
                    </p>
                    <p className="mt-3 eyebrow text-white">{item.sub ?? "VIEW SERVICE →"}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : barLabels?.length ? (
          <div className="mt-6 w-full max-w-[min(100%,var(--max))] border-t-4 border-[color:var(--y)] bg-[var(--ink-deep)] shadow-[0_16px_56px_rgb(0_0_0/0.45)] ring-1 ring-white/15">
            <div className="border-t border-white/20">
              <div className="grid grid-cols-2 gap-px bg-white/20 md:grid-cols-3">
                {barLabels.map((label) => (
                  <div key={label} className="bg-[var(--ink-deep)] px-4 py-6 sm:px-6 sm:py-8">
                    <p className="font-serif text-xl font-bold leading-snug text-[color:var(--y)] line-clamp-2 sm:text-2xl">
                      {label}
                    </p>
                    <p className="mt-3 eyebrow text-white/70">SERVICE LINE</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-4 w-full max-w-[min(100%,var(--max))] border-t-4 border-[color:var(--y)] bg-[var(--ink-deep)] shadow-[0_16px_56px_rgb(0_0_0/0.45)] ring-1 ring-white/15">
          <div className="grid grid-cols-1 gap-px border-t border-white/20 bg-white/20 sm:grid-cols-2">
            {isInternalRoute(c.primaryCta.href) ? (
              <Link
                href={c.primaryCta.href}
                className={cn(
                  "group block min-h-[44px] bg-[var(--ink-deep)] px-4 py-8 outline-none transition-colors sm:px-6 sm:py-10",
                  "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-deep)]",
                  "hover:bg-[rgb(255_255_255/0.06)]",
                )}
              >
                <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{c.primaryCta.label}</p>
                <p className="mt-3 eyebrow text-white">
                  {heroTrustSublineForCta(c.primaryCta.href, c.primaryCta.sub)}
                </p>
              </Link>
            ) : (
              <a
                href={c.primaryCta.href}
                className={cn(
                  "group block min-h-[44px] bg-[var(--ink-deep)] px-4 py-8 outline-none transition-colors sm:px-6 sm:py-10",
                  "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-deep)]",
                  "hover:bg-[rgb(255_255_255/0.06)]",
                )}
              >
                <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{c.primaryCta.label}</p>
                <p className="mt-3 eyebrow text-white">
                  {heroTrustSublineForCta(c.primaryCta.href, c.primaryCta.sub)}
                </p>
              </a>
            )}
            {isInternalRoute(c.secondaryCta.href) ? (
              <Link
                href={c.secondaryCta.href}
                className={cn(
                  "group block min-h-[44px] bg-[var(--ink-deep)] px-4 py-8 outline-none transition-colors sm:px-6 sm:py-10",
                  "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-deep)]",
                  "hover:bg-[rgb(255_255_255/0.06)]",
                )}
              >
                <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{c.secondaryCta.label}</p>
                <p className="mt-3 eyebrow text-white">
                  {heroTrustSublineForCta(c.secondaryCta.href, c.secondaryCta.sub)}
                </p>
              </Link>
            ) : (
              <a
                href={c.secondaryCta.href}
                className={cn(
                  "group block min-h-[44px] bg-[var(--ink-deep)] px-4 py-8 outline-none transition-colors sm:px-6 sm:py-10",
                  "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-deep)]",
                  "hover:bg-[rgb(255_255_255/0.06)]",
                )}
              >
                <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{c.secondaryCta.label}</p>
                <p className="mt-3 eyebrow text-white">
                  {heroTrustSublineForCta(c.secondaryCta.href, c.secondaryCta.sub)}
                </p>
              </a>
            )}
          </div>
        </div>
        {showMarquee ? (
          <div
            className="hero-marquee mt-8 w-full overflow-hidden border-y border-white/10 bg-[rgb(0_0_0/0.35)] py-3 backdrop-blur-sm sm:mt-10"
            aria-hidden
          >
            <div className="hero-marquee-track flex w-max gap-10 pr-10">
              {marqueeDup.map((phrase, i) => (
                <span key={`${phrase}-${i}`} className="shrink-0 eyebrow text-white">
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

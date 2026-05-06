import Image from "next/image";
import Link from "next/link";
import type { HomeCopy } from "@/lib/site/copy";

const HERO_IMAGE_SRC = "/images/services/Excavation/excavation-016.jpg";

type HomeHeroSectionProps = {
  copy: HomeCopy["hero"];
};

export function HomeHeroSection({ copy }: HomeHeroSectionProps) {
  return (
    <section
      id="hero"
      className="hero-stage band-dark-field relative isolate min-h-[100svh] scroll-mt-[var(--site-header-offset)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Commercial excavation equipment operating on an active construction site"
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

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,var(--max-bleed))] px-7 pb-8 pt-[var(--site-header-offset)] sm:px-10 sm:pb-10 lg:px-20 lg:pb-12">
        <div className="mx-auto grid min-h-[calc(100svh-var(--site-header-offset)-2rem)] max-w-[var(--max)] content-center gap-6 lg:grid-cols-[minmax(0,42rem)_minmax(260px,320px)] lg:gap-8">
          <div className="border border-white/10 bg-[rgb(10_12_11/0.4)] p-6 shadow-[0_20px_60px_rgb(0_0_0/0.28)] backdrop-blur-sm sm:p-7">
            <div>
              <p className="hero-eyebrow label-overline-on-dark mb-0 opacity-90">{copy.eyebrow}</p>
              <h1
                id="hero-heading"
                className="mt-6 font-serif text-[clamp(2.3rem,6.2vw,5.1rem)] font-semibold uppercase leading-[0.9] tracking-tight text-white"
              >
                <span className="opacity-90">{copy.titleLines[0]} </span>
                <span className="text-[color:var(--y)]">{copy.titleLines[1]}</span>
                <span className="opacity-95"> {copy.titleLines[2]}.</span>
              </h1>
              <p className="hero-caption mt-5 max-w-[36rem] text-[15px] leading-relaxed text-white/84 sm:text-base">{copy.lede}</p>
              <p className="mt-3 max-w-[36rem] text-xs uppercase tracking-[0.14em] text-white/72 sm:text-[11px]">
                Built exclusively for commercial operators across Simcoe County.
              </p>
              <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />
              <p className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-white/55">{copy.coverageLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={copy.coverageLabel}>
                {copy.coverageTags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-white/15 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="hero-cta-row mt-6 grid gap-3 border border-white/14 bg-[rgb(0_0_0/0.24)] p-4 sm:grid-cols-1 sm:items-center">
                <p className="text-xs leading-relaxed text-white/76">
                  Start with a scoped consultation, then move to pricing and mobilization.
                </p>
                <Link href={copy.primaryCta.href} className="cta-hero-fill px-5 py-3 text-xs tracking-wide text-center">
                  {copy.primaryCta.label}
                </Link>
                <Link
                  href={copy.secondaryCta.href}
                  className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/78 underline decoration-white/45 underline-offset-4 transition hover:text-[color:var(--y)] hover:decoration-[color:var(--y)]"
                >
                  {copy.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>

          <aside className="self-end border border-white/18 bg-[rgb(10_12_11/0.34)] p-4 backdrop-blur-sm">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-[color:var(--y)]">Request Quote</p>
            <p className="mt-2 font-serif text-[clamp(1.1rem,1.4vw,1.35rem)] uppercase leading-tight text-white">Fast Site Review</p>
            <p className="mt-2 text-xs leading-relaxed text-white/72">
              Commercial excavation, grading, foundations, drainage, and mobilization planning.
            </p>
          </aside>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:max-w-[34rem]">
            {copy.stats.map((stat) => (
              <Link
                key={stat.label}
                href="/about/"
                className="border border-white/16 bg-[rgb(10_12_11/0.5)] p-3 text-white backdrop-blur-sm transition hover:border-[color:var(--y)]/80 hover:bg-[rgb(10_12_11/0.68)]"
              >
                <p className="font-serif text-xl sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/78">{stat.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

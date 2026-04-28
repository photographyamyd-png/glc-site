import Image from "next/image";
import { siteImages } from "@/lib/site-images";

/**
 * Archetype I — Impact Horizon (§VII).
 * MOBILE_ALTER_EGO: spine hidden; content justified from bottom; CTAs row where space allows.
 */
export function SectionImpactHorizon() {
  return (
    <section id="impact" className="relative min-h-[100dvh] scroll-mt-0">
      <div className="absolute inset-0">
        <Image
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-black/88 via-brand-charcoal-deep/70 to-brand-charcoal-deep/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-black/55 via-transparent to-brand-black/20"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute left-[8%] top-28 hidden h-[min(72dvh,640px)] w-[2px] bg-gradient-to-b from-white/0 via-white/35 to-white/0 lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[min(100%,1200px)] flex-col justify-end gap-12 px-4 pb-20 pt-28 sm:gap-16 sm:px-8 sm:pb-24 sm:pt-32 lg:justify-center lg:pb-28">
        <div className="view-reveal max-w-3xl border-l-4 border-white/35 pl-6 sm:pl-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/80">
            Licensed · Bonded · Field-led
          </p>
          <h1 className="mt-6 max-w-[14ch] text-[clamp(3rem,9vw,5.5rem)] font-semibold leading-[0.92] tracking-tight text-brand-white">
            Build
            <span className="block translate-x-1 text-white/50 sm:translate-x-2">with</span>
            <span className="block -translate-x-1 text-white sm:-translate-x-2">momentum.</span>
          </h1>
        </div>

        <div className="view-reveal flex max-w-3xl flex-col gap-8 border-l-4 border-white/25 pl-6 sm:gap-10 sm:pl-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl font-serif text-[0.9375rem] leading-[1.7] text-white/90 sm:text-base md:max-w-md">
            Commercial and industrial construction: owned equipment, tight coordination,
            supers who protect your opening date.
          </p>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <a
              href="#convert"
              className="cta-hero-fill inline-flex min-h-[44px] items-center justify-center px-8 py-4 text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a bid this week
            </a>
            <a
              href="#spine"
              className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-8 py-4 text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white"
            >
              What we build
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-4 hidden font-mono text-[10px] text-white/30 sm:block">
        01 — Impact
      </div>
    </section>
  );
}

import Link from "next/link";
import { BackgroundLoopVideo } from "@/components/ui/BackgroundLoopVideo";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { IconArrow } from "@/components/ui/icon-arrow";
import { COPY_LAB_CLOSING_CTA } from "@/lib/ground-level/home-copy-lab-content";
import { GLC_PROJECT_REEL_AMBIENT_PLAYBACK_RATE, GLC_PROJECT_REEL_LOOP } from "@/lib/site/brand-media";

const c = COPY_LAB_CLOSING_CTA;

const CTA_REEL_IMAGE_CLASS = "object-cover object-center cta-reel-drift";

export function HomeFinalCtaSection() {
  return (
    <section
      id="cta-band"
      className="band-dark-field relative scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--y)] border-b border-[color:var(--g200)] text-white view-reveal"
      aria-labelledby="final-cta-heading"
      data-accent-family="cta"
      data-accent-zone="conversion-endband"
    >
      {/* Mobile: full-width horizontal 16:9 video window above copy */}
      <div
        className="relative z-0 aspect-video max-h-[min(56.25vw,44svh)] w-full shrink-0 overflow-hidden border-b border-white/10 md:hidden"
        aria-hidden
      >
        <BackgroundLoopVideo
          src={GLC_PROJECT_REEL_LOOP.src}
          posterSrc={GLC_PROJECT_REEL_LOOP.posterSrc}
          posterAlt={GLC_PROJECT_REEL_LOOP.ariaLabel}
          preload="none"
          playWhenInView
          playbackRate={GLC_PROJECT_REEL_AMBIENT_PLAYBACK_RATE}
          imageClassName={CTA_REEL_IMAGE_CLASS}
          overlayVariant="ambient"
          softLoopCrossfade
          showOverlay
        />
      </div>

      {/* Desktop: full-bleed atmosphere behind content */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <BackgroundLoopVideo
          src={GLC_PROJECT_REEL_LOOP.src}
          posterSrc={GLC_PROJECT_REEL_LOOP.posterSrc}
          posterAlt={GLC_PROJECT_REEL_LOOP.ariaLabel}
          preload="none"
          playWhenInView
          playbackRate={GLC_PROJECT_REEL_AMBIENT_PLAYBACK_RATE}
          imageClassName={CTA_REEL_IMAGE_CLASS}
          overlayVariant="ambient"
          softLoopCrossfade
          showOverlay
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgb(0_0_0/0.35),transparent_48%,rgb(242_183_5/0.07))]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_38%)]"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-[color:var(--y)]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-white/10" aria-hidden />

      <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.09]" />

      <div className="section-major relative z-10 !pt-8 md:!pt-[var(--s9)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="border-l-4 border-[color:var(--y)] pl-5 sm:pl-6">
                <p className="eyebrow text-white">{c.eyebrow}</p>
                <h2
                  id="final-cta-heading"
                  className="mt-4 font-serif text-3xl font-semibold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl lg:max-w-[22ch]"
                >
                  <span className="block">{c.headlineLine1}</span>
                  <span className="mt-2 block text-[color:var(--y)]">{c.headlineLine2}</span>
                </h2>
                <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">{c.supporting}</p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12">
                  <a
                    href={c.primaryCtaHref}
                    className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]"
                  >
                    {c.primaryCtaLabel}
                    <IconArrow />
                  </a>
                  <a
                    href={`${c.secondaryCtaHref}?subject=${encodeURIComponent(c.secondaryEmailSubject)}`}
                    className="inline-flex min-h-[44px] items-center justify-center border border-white/25 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-[background-color,border-color] duration-200 hover:border-[color:var(--y)]/60 hover:bg-white/5"
                  >
                    {c.secondaryCtaLabel}
                  </a>
                  <Link
                    href={c.contactFormHref}
                    className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--y)] underline-offset-4 hover:underline"
                  >
                    {c.contactFormLabel}
                  </Link>
                </div>
              </div>
            </div>

            <aside className="flex flex-col justify-center lg:col-span-5">
              <div className="panel-machined-dark relative border border-white/10 bg-[rgb(10_12_11/0.42)] p-6 shadow-[0_24px_64px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8">
                <div className="mb-6 h-px w-full bg-[color:var(--y)]/80" aria-hidden />
                <p className="eyebrow text-white">{c.contactPanelEyebrow}</p>
                <a
                  href={c.phoneHref}
                  className="mt-4 block font-serif text-2xl font-bold uppercase tracking-tight text-[color:var(--y)] sm:text-3xl"
                >
                  {c.phoneDisplay}
                </a>
                <p className="mt-2 font-sans text-sm text-white/75">{c.phoneLabel}</p>
                <a
                  href={c.emailHref}
                  className="mt-6 inline-flex min-h-[44px] items-center font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white/90 transition-colors hover:text-[color:var(--y)]"
                >
                  {c.emailLabel}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

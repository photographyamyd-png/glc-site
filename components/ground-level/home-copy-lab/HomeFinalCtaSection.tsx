import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { IconArrow } from "@/components/ui/icon-arrow";
import { COPY_LAB_CLOSING_CTA } from "@/lib/ground-level/home-copy-lab-content";

const c = COPY_LAB_CLOSING_CTA;

export function HomeFinalCtaSection() {
  return (
    <section
      id="cta-band"
      className="section-major band-dark-field relative z-20 -mt-10 scroll-mt-[var(--header)] border-y border-[color:var(--g200)] border-t-[color:var(--y)] shadow-[0_-20px_56px_rgb(0_0_0/0.22)] sm:-mt-12 lg:-mt-14"
      aria-labelledby="final-cta-heading"
      data-accent-family="cta"
      data-accent-zone="conversion-endband"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--y)_12%,transparent),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center lg:gap-14">
          <div className="border border-white/10 bg-[rgb(10_12_11/0.55)] p-6 shadow-[0_20px_56px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:p-10">
            <p className="eyebrow text-white">{c.eyebrow}</p>
            <h2
              id="final-cta-heading"
              className="mt-4 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              {c.headline}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.72] text-white/88 sm:text-base">{c.supporting}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={c.primaryCtaHref} className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                {c.primaryCtaLabel}
                <IconArrow />
              </a>
              <a
                href={`${c.secondaryCtaHref}?subject=${encodeURIComponent("Commercial site — mobilization request")}`}
                className="inline-flex min-h-[44px] items-center justify-center border border-white/25 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-[background-color,border-color] duration-200 hover:border-[color:var(--y)]/60 hover:bg-white/5"
              >
                {c.secondaryCtaLabel}
              </a>
              <Link
                href="/contact/"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--y)] underline-offset-4 hover:underline"
              >
                Contact form
              </Link>
            </div>
          </div>

          <div className="space-y-4 border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-white/80">Direct lines</p>
            <a
              href={c.phoneHref}
              className="block font-serif text-2xl font-bold uppercase tracking-tight text-[color:var(--y)] sm:text-3xl"
            >
              {c.phoneDisplay}
            </a>
            <p className="text-sm text-white/70">{c.phoneLabel}</p>
            <a href={c.emailHref} className="block text-sm font-semibold uppercase tracking-[0.08em] text-white/90 hover:text-[color:var(--y)]">
              {c.emailLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

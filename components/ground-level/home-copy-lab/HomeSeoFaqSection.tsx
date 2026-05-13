import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { HeroFieldBackdrop } from "@/components/ground-level/HeroFieldBackdrop";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";

const FAQ_NAME = "home-faq";

/** Same meaningful alt as homepage `GLHero` bookend field photo. */
const FAQ_BOOKEND_IMAGE_ALT =
  "Ground Level Contracting equipment preparing a commercial site in Simcoe County";

export function HomeSeoFaqSection() {
  const f = COPY_LAB_HOME_FAQ;

  return (
    <section
      id="home-faq"
      className="hero-stage band-dark-field relative isolate section-major scroll-mt-[var(--header)] overflow-hidden text-white view-reveal"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-1 bg-[color:var(--y)]" aria-hidden />

      <HeroFieldBackdrop imageAlt={FAQ_BOOKEND_IMAGE_ALT} priority={false} />
      <ClaudeLogicWatermark placement="bottom-right" className="z-[1]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max-bleed))] px-7 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12 lg:px-20 lg:pb-14">
        <div className="max-w-[min(100%,var(--max))] space-y-0 rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
          <p className="hero-eyebrow label-overline-on-dark mb-0">{f.eyebrow}</p>
          <h2
            id="home-faq-heading"
            className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            {f.heading}
          </h2>
          <div className="hero-caption mt-[var(--s7)] max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            <ExpandableCopy text={f.intro} className="text-base leading-relaxed text-white/85 sm:text-lg" />
          </div>
          <div className="hero-rule mt-8 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />

          <div className="mt-8">
            <GlcFaqDetailsGrid
              clusters={[...f.groups]}
              embedded
              groupName={FAQ_NAME}
              tone="dark"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

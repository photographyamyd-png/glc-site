import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { IconArrow } from "@/components/ui/icon-arrow";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { COPY_LAB_CLOSING_CTA } from "@/lib/ground-level/home-copy-lab-content";
import { getServiceImage, getServiceImageRasterPlaceholder } from "@/lib/site/service-images";

const c = COPY_LAB_CLOSING_CTA;

const CTA_FIELD_SLUG = "drainage-hardscaping" as const;
const fieldImage = getServiceImage(CTA_FIELD_SLUG);
const fieldImageFallback = getServiceImageRasterPlaceholder(CTA_FIELD_SLUG);

export function HomeFinalCtaSection() {
  return (
    <section
      id="cta-band"
      className="section-major band-dark-field relative z-20 -mt-8 scroll-mt-[var(--header)] overflow-hidden border-b border-[color:var(--g200)] text-white shadow-[0_-16px_48px_rgb(0_0_0/0.2)] view-reveal sm:-mt-10 lg:-mt-12"
      aria-labelledby="final-cta-heading"
      data-accent-family="cta"
      data-accent-zone="conversion-endband"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <ServiceLabImg
          src={fieldImage.src}
          fallbackSrc={fieldImageFallback}
          alt=""
          sizes="100vw"
          className="h-full w-full object-cover opacity-[0.2] sm:opacity-[0.24]"
        />
        <div className="absolute inset-0 bg-[rgb(18_17_16/0.94)]" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgb(0_0_0/0.55),transparent_48%,rgb(242_183_5/0.07))]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_38%)]"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-[color:var(--y)]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-white/10" aria-hidden />

      <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.09]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
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
          </div>

          <aside className="flex flex-col justify-center lg:col-span-5">
            <div className="panel-machined-dark relative border border-white/10 bg-[rgb(10_12_11/0.58)] p-6 shadow-[0_24px_64px_rgb(0_0_0/0.45)] backdrop-blur-md sm:p-8">
              <div className="mb-6 h-px w-full bg-[color:var(--y)]/80" aria-hidden />
              <p className="eyebrow text-white">Direct lines</p>
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
    </section>
  );
}

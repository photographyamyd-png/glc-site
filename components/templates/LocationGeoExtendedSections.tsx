import Link from "next/link";
import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import type { GeoLocationExtendedContent } from "@/lib/site/geo-location-content";
import { cn } from "@/lib/utils";

type Props = {
  placeName: string;
  extended: GeoLocationExtendedContent;
};

const shell =
  "mx-auto w-full max-w-[52rem] overflow-hidden rounded-sm border border-l-[3px] border-[color:var(--g200)] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.98)] shadow-[0_10px_36px_rgb(0_0_0/0.06)]";

const summaryClass =
  "flex w-full min-h-[48px] cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white text-ink";

function SeoDetailBlock({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-[color:var(--g200)] last:border-b-0">
      <summary className={summaryClass}>
        <span className="min-w-0 flex-1 font-sans text-sm font-medium leading-snug tracking-tight">{summary}</span>
        <span className="mt-0.5 shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:hidden" aria-hidden>+</span>
        <span className="mt-0.5 hidden shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:inline" aria-hidden>−</span>
      </summary>
      <div className="border-t border-[color:var(--g200)] bg-[rgb(250_250_250/0.75)] px-5 py-4">{children}</div>
    </details>
  );
}

/** City-specific FAQ, capabilities, and SEO basement for geo location landers. */
export function LocationGeoExtendedSections({ placeName, extended }: Props) {
  return (
    <>
      <section
        className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="geo-local-details-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgb(242_183_5/0.08),transparent_45%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" className="z-[1] opacity-[0.12]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-white">Local context</p>
              <h2
                id="geo-local-details-heading"
                className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl"
              >
                Excavation in {placeName}
              </h2>
              <div className="mt-5 space-y-4">
                {extended.localParagraphs.map((para, i) => (
                  <p key={i} className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
              {extended.resourceLink ? (
                <p className="mt-6">
                  <Link
                    href={extended.resourceLink.href}
                    className="inline-flex min-h-[44px] items-center border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-[color:var(--y)]"
                  >
                    {extended.resourceLink.label}
                  </Link>
                </p>
              ) : null}
            </div>
            <div className="bespoke-surface panel-machined border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 backdrop-blur-md lg:col-span-6 lg:p-8">
              <p className="eyebrow text-white">Capabilities</p>
              <ul className="mt-4 space-y-3">
                {extended.capabilityBullets.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-snug text-white/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[color:var(--y)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="geo-faq-heading"
      >
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.08]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">FAQ</p>
            <h2 id="geo-faq-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {placeName} excavation questions
            </h2>
          </div>
          <GlcFaqDetailsGrid
            className={cn("mt-8", shell)}
            groupName="geo-location-faq"
            tone="light"
            items={extended.faq}
          />
        </div>
      </section>

      <section
        id="local-seo-details"
        className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
        aria-labelledby="geo-seo-basement-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_55%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink">Details</p>
            <h2 id="geo-seo-basement-heading" className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              {placeName} service area reference
            </h2>
          </div>
          <div className={cn("mt-8", shell)}>
            {extended.seoSections.map((section) => (
              <SeoDetailBlock key={section.title} summary={section.title}>
                <div className="space-y-3 text-sm leading-relaxed text-[color:var(--text-600)] sm:text-[15px]">
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </SeoDetailBlock>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

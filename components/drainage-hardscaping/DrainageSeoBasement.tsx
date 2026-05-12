import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { DRAINAGE_SEO_BASEMENT } from "@/lib/site/drainage-hardscaping-landing-content";

const detailsClass =
  "group border border-[color:var(--g200)] bg-white p-3 shadow-sm panel-machined";

const summaryClass =
  "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 font-label text-[13px] font-semibold leading-snug tracking-[0.02em] text-ink marker:content-none outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden";

/**
 * Native details/summary SEO basement — longform stays in DOM for crawlers.
 */
export function DrainageSeoBasement() {
  return (
    <section
      className="band-light-field relative isolate z-[6] scroll-mt-[var(--header)] border-t border-[color:var(--y)] bg-[rgb(255_255_255/0.97)] py-[var(--section-v)] shadow-[0_-12px_40px_rgb(0_0_0/0.06)]"
      aria-labelledby="drainage-seo-basement-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--y)_4%,transparent),transparent_40%)]" aria-hidden />
      <ClaudeLogicWatermark placement="center-left" mode="default" className="opacity-[0.05]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{DRAINAGE_SEO_BASEMENT.sectionEyebrow}</p>
          <h2
            id="drainage-seo-basement-heading"
            className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
          >
            {DRAINAGE_SEO_BASEMENT.sectionTitle}
          </h2>
          <p className="mt-4 max-w-prose font-sans text-sm leading-relaxed text-ink-muted">{DRAINAGE_SEO_BASEMENT.sectionIntro}</p>
        </div>

        <div className="mt-10 space-y-3">
          {DRAINAGE_SEO_BASEMENT.blocks.map((block) => (
            <details key={block.summary} name="drainage-seo-basement" className={detailsClass}>
              <summary className={summaryClass}>
                <span className="text-left">{block.summary}</span>
                <span className="eyebrow shrink-0 text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden shrink-0 eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-3 space-y-4 border-t border-[color:var(--g200)] pt-4">
                {block.paragraphs.map((p, pi) => (
                  <p key={pi} className="max-w-prose font-sans text-[15px] leading-[1.72] text-ink sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { COMMERCIAL_SNOW_FAQS } from "@/lib/site/commercial-snow-faqs";
import { COMMERCIAL_SNOW_SEO_TEXTUAL_GROUPS } from "@/lib/site/commercial-snow-seo-basement-groups";

/**
 * Full keyword and FAQ copy — collapsed by default; always in the DOM for crawlers.
 * @see `components/services/hauling/HaulingSeoTechnicalBasement.tsx`
 */
export function CommercialSnowSeoTechnicalBasement() {
  return (
    <section
      id="chapter-seo-basement"
      className="section-major scroll-mt-[var(--header)] border-t border-[color:var(--g200)] bg-[color:var(--brand-canvas)]"
      aria-labelledby="snow-seo-basement-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Knowledge hub</p>
          <h2 id="snow-seo-basement-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Technical Specifications &amp; Project FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
            Procurement-ready narratives, equipment and SLA depth, regional coverage, program scopes, and the full FAQ — collapsed by default; every answer remains on-page for search visibility.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {COMMERCIAL_SNOW_SEO_TEXTUAL_GROUPS.map((group, gi) => (
            <details
              key={`${gi}-${group.summary}`}
              name="snow-seo-basement"
              className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="text-left">{group.summary}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
                {group.paragraphs.map((p, pi) => (
                  <p key={`${gi}-${pi}`}>{p}</p>
                ))}
              </div>
            </details>
          ))}

          {COMMERCIAL_SNOW_FAQS.map((item) => (
            <details key={item.q} name="snow-seo-basement" className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="text-left">{item.q}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ServiceDetailCopy } from "@/lib/site/copy";
import { SERVICE_AREA_BODY } from "@/lib/site/hauling-glc-dna-map";

type Props = {
  detail: ServiceDetailCopy;
};

/** Hauling-only SEO basement — full keyword copy in DOM; matches prior ServicePageTemplate block. */
export function HaulingSeoTechnicalBasement({ detail }: Props) {
  return (
    <section
      id="seo-technical-basement"
      className="section-major scroll-mt-[var(--header)] border-t border-[color:var(--g200)] bg-[color:var(--brand-canvas)]"
      aria-labelledby="hauling-seo-basement-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Specifications</p>
          <h2
            id="hauling-seo-basement-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl"
          >
            Technical Specifications &amp; Project FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
            Procurement-ready notes, logistics detail, and the full FAQ — collapsed by default, always in the DOM for search and bid teams.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <details
            name="hauling-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>Full service overview</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              {detail.intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}
            </div>
          </details>

          <details
            name="hauling-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{detail.trust.heading}</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              {detail.trust.paragraphs.map((p, i) => (
                <p key={`trust-${i}`}>{p}</p>
              ))}
            </div>
          </details>

          <details
            name="hauling-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>Site pressure signals &amp; scope anchors</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              {detail.deliverables.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
          </details>

          {detail.subServices.map((s) => (
            <details
              key={s.id}
              name="hauling-seo-basement"
              className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{s.heading}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
                {s.paragraphs.map((p, i) => (
                  <p key={`${s.id}-p-${i}`}>{p}</p>
                ))}
                <p className="font-sans font-semibold text-ink">{s.closing}</p>
              </div>
            </details>
          ))}

          {detail.faq.map((item) => (
            <details
              key={item.q}
              name="hauling-seo-basement"
              className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{item.a}</p>
            </details>
          ))}

          <details
            name="hauling-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>Service area &amp; coverage</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{SERVICE_AREA_BODY}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {["Barrie", "Midland", "Orillia", "Innisfil", "Wasaga Beach", "Simcoe County"].map((place) => (
                <li key={place} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                  {place}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}

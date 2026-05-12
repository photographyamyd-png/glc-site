import type { ServiceDetailCopy } from "@/lib/site/copy";

type Props = {
  detail: ServiceDetailCopy;
};

const SERVICE_AREA_BODY =
  "Ground Level Contracting serves Barrie, Midland, Orillia, and surrounding Simcoe County municipalities with commercial-focused dispatch and reliable field coordination.";

/** Grading-only SEO basement — full keyword copy in DOM via details/summary. */
export function GradingSeoTechnicalBasement({ detail }: Props) {
  const specs = detail.extra?.gradingLane?.technicalSpecs;

  return (
    <section
      id="seo-technical-basement"
      className="section-major scroll-mt-[var(--header)] border-t border-[color:var(--g200)] bg-[color:var(--brand-canvas)]"
      aria-labelledby="grading-seo-basement-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Specifications</p>
          <h2
            id="grading-seo-basement-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl"
          >
            Technical Specifications &amp; Project FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
            Procurement-ready earthwork notes, model alignment, and the full project FAQ — collapsed by default, always in the DOM for search and bid teams.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          <details
            name="grading-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>Where are detailed specifications and FAQ answers?</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              Long-form capability notes, civil alignment language, and the full project FAQ live in this{" "}
              <strong className="font-semibold text-ink">Technical Specifications &amp; Project FAQ</strong> section — same
              answers, organized for quick scanning.
            </p>
          </details>

          <details
            name="grading-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>
                {detail.hero.titleBefore} {detail.hero.titleEmphasis}
              </span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              <p className="font-sans font-semibold text-ink">{detail.hero.lede}</p>
              {detail.hero.body.map((p, i) => (
                <p key={`hero-body-${i}`}>{p}</p>
              ))}
              <ul className="grid gap-2 border-t border-[color:var(--g200)] pt-4 sm:grid-cols-3">
                {detail.hubStats.map((s) => (
                  <li key={s.label} className="text-ink">
                    <span className="font-serif text-lg font-bold text-[color:var(--y)]">{s.value}</span>{" "}
                    <span className="block text-sm text-[color:var(--text-600)]">{s.label}</span>
                    <span className="text-xs text-[color:var(--text-600)]">{s.sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details
            name="grading-seo-basement"
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
            name="grading-seo-basement"
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
            name="grading-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{detail.deliverablesHeading}</span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              {detail.deliverables.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
          </details>

          <details
            name="grading-seo-basement"
            className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>
                {detail.process.eyebrow}: {detail.process.heading}
              </span>
              <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
              <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
            </summary>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
              {detail.process.steps.map((step) => (
                <li key={step.id}>
                  <span className="font-sans font-semibold text-ink">
                    {step.id} {step.title}
                  </span>
                  <span className="mt-1 block">{step.body}</span>
                </li>
              ))}
            </ol>
          </details>

          {detail.subServices.map((s) => (
            <details
              key={s.id}
              name="grading-seo-basement"
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

          {specs ? (
            <>
              <details
                name="grading-seo-basement"
                className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>Slope ratios &amp; finished grades</span>
                  <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
                  {specs.slopeRatios.map((p, i) => (
                    <p key={`slope-${i}`}>{p}</p>
                  ))}
                </div>
              </details>
              <details
                name="grading-seo-basement"
                className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>Erosion control during grading</span>
                  <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
                  {specs.erosionControl.map((p, i) => (
                    <p key={`erosion-${i}`}>{p}</p>
                  ))}
                </div>
              </details>
              <details
                name="grading-seo-basement"
                className="group border border-[color:var(--g200)] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>Topsoil preservation &amp; organics separation</span>
                  <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                  <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                </summary>
                <div className="mt-3 space-y-4 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">
                  {specs.topsoilPreservation.map((p, i) => (
                    <p key={`topsoil-${i}`}>{p}</p>
                  ))}
                </div>
              </details>
            </>
          ) : null}

          {detail.faq.map((item) => (
            <details
              key={item.q}
              name="grading-seo-basement"
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
            name="grading-seo-basement"
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

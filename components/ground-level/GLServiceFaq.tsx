type FaqItem = { q: string; a: string };

export type GLServiceFaqProps = {
  sectionId?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
  /** Passed to `<details name>` so only one open per group when supported. */
  faqGroupName: string;
};

/**
 * FAQ accordion shell aligned with service template DNA (dark band, glass rows).
 * Registered on `/sandbox` for approval parity with service routes.
 */
export function GLServiceFaq({
  sectionId = "faq",
  headingId = "service-faq-heading",
  eyebrow,
  title,
  items,
  faqGroupName,
}: GLServiceFaqProps) {
  return (
    <section id={sectionId} className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden" aria-labelledby={headingId}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_38%)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-white">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details key={item.q} name={faqGroupName} className="group border border-white/20 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 list-none font-serif text-lg font-semibold uppercase tracking-tight text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

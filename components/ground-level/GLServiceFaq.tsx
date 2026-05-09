type FaqItem = { q: string; a: string };

export type GLServiceFaqProps = {
  sectionId?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
  /** Passed to `<details name>` so only one open per group when supported. */
  faqGroupName: string;
  /** `light` = editorial band on `band-light` (defaults match sandbox/service dark FAQ). */
  surface?: "dark" | "light";
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
  surface = "dark",
}: GLServiceFaqProps) {
  const isLight = surface === "light";
  return (
    <section
      id={sectionId}
      className={`section-major relative scroll-mt-[var(--header)] overflow-hidden ${isLight ? "band-light" : "band-dark"}`}
      aria-labelledby={headingId}
    >
      <div
        className={`absolute inset-0 ${isLight ? "bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]" : "bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_38%)]"}`}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className={`eyebrow ${isLight ? "text-ink" : "text-white"}`}>{eyebrow}</p>
          <h2
            id={headingId}
            className={`mt-3 font-serif text-3xl font-semibold uppercase tracking-tight sm:text-4xl ${isLight ? "text-ink" : "text-white"}`}
          >
            {title}
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              name={faqGroupName}
              className={`group border p-4 backdrop-blur-sm ${
                isLight
                  ? "border-[color:var(--g200)] bg-white shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
                  : "border-white/20 bg-[rgb(255_255_255/0.06)]"
              }`}
            >
              <summary
                className={`flex min-h-[44px] cursor-pointer items-center justify-between gap-4 list-none font-serif text-lg font-semibold uppercase tracking-tight marker:content-none [&::-webkit-details-marker]:hidden ${isLight ? "text-ink" : "text-white"}`}
              >
                <span>{item.q}</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className={`mt-3 text-[15px] leading-[1.72] sm:text-base ${isLight ? "text-[color:var(--text-600)]" : "text-white/88"}`}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

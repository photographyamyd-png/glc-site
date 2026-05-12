import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";

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
            className={`mt-3 font-serif text-2xl font-bold uppercase tracking-tight sm:text-3xl ${isLight ? "text-ink" : "text-white"}`}
          >
            {title}
          </h2>
        </div>
        <GlcFaqDetailsGrid
          className="mt-8 sm:mt-10"
          items={items}
          groupName={faqGroupName}
          tone={isLight ? "light" : "dark"}
          maxColumns={4}
          density="cards"
        />
      </div>
    </section>
  );
}

import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";
import { cn } from "@/lib/utils";

const FAQ_NAME = "home-faq";

export function HomeSeoFaqSection() {
  const f = COPY_LAB_HOME_FAQ;

  return (
    <section
      id="home-faq"
      className="section-major band-light-drift relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.6),transparent_40%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{f.eyebrow}</p>
          <h2 id="home-faq-heading" className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {f.heading}
          </h2>
          <div className="mt-5 max-w-xl">
            <ExpandableCopy text={f.intro} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {f.groups.map((group, gi) => {
            const items = (
              <>
                {group.sectionTitle ? (
                  <h3 className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink">{group.sectionTitle}</h3>
                ) : null}
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <details
                      key={`${gi}-${item.q}`}
                      name={FAQ_NAME}
                      className="group border border-[color:var(--g200)] bg-white/95 p-4 shadow-[0_8px_24px_rgb(0_0_0/0.06)] backdrop-blur-sm"
                    >
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden sm:text-xl">
                        <span>{item.q}</span>
                        <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                        <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
                      </summary>
                      <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{item.a}</p>
                    </details>
                  ))}
                </div>
              </>
            );

            if (group.anchorId) {
              return (
                <div key={`${group.anchorId}-${gi}`} id={group.anchorId} className={cn("scroll-mt-[var(--header)] space-y-3")}>
                  {items}
                </div>
              );
            }

            return (
              <div key={`faq-group-${gi}`} className="space-y-3">
                {items}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

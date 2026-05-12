import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
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
          <h2 id="home-faq-heading" className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
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
                  <h3 className="font-label text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted">{group.sectionTitle}</h3>
                ) : null}
                <GlcFaqDetailsGrid
                  items={group.items}
                  groupName={FAQ_NAME}
                  tone="light"
                  maxColumns={4}
                  density="cards"
                />
              </>
            );

            if (group.anchorId) {
              return (
                <div key={`${group.anchorId}-${gi}`} id={group.anchorId} className={cn("scroll-mt-[var(--header)] space-y-4")}>
                  {items}
                </div>
              );
            }

            return (
              <div key={`faq-group-${gi}`} className="space-y-4">
                {items}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_STATS } from "@/lib/ground-level/home-copy-lab-content";
import { getServiceImage } from "@/lib/site/service-images";

export type CopyLabStatsMetric = {
  value: string;
  label: string;
  sub: string;
};

export type CopyLabStatsContent = {
  eyebrow: string;
  heading: string;
  metrics: readonly CopyLabStatsMetric[];
  imageSrc: string;
  imageAlt: string;
};

const DEFAULT_STATS_CONTENT: CopyLabStatsContent = {
  eyebrow: COPY_LAB_STATS.eyebrow,
  heading: COPY_LAB_STATS.heading,
  metrics: [...COPY_LAB_STATS.metrics],
  imageSrc: getServiceImage("site-preparation-grading").src,
  imageAlt: getServiceImage("site-preparation-grading").alt,
};

/** Light-field metrics band — breaks dark runs after about / before services grid. */
export function CopyLabStats(props: { content?: CopyLabStatsContent } = {}) {
  const { content } = props;
  const s = content ?? DEFAULT_STATS_CONTENT;
  return (
    <section
      id="metrics"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="metrics-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/40 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
          <div className="relative z-[1] order-2 min-h-[200px] -translate-x-2 overflow-hidden border border-[color:var(--g200)] shadow-[0_16px_40px_rgb(0_0_0/0.08)] translate-y-[var(--dna-stagger-sm)] lg:order-1 lg:min-h-[280px] lg:-translate-x-4 [clip-path:polygon(0_0,92%_0,100%_10%,100%_100%,0_100%)]">
            <Image
              src={s.imageSrc}
              alt={s.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0_0_0/0.35)] to-transparent" aria-hidden />
          </div>
          <div className="relative z-[2] order-1 translate-y-1 lg:order-2">
            <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-ink">{s.eyebrow}</p>
              <h2
                id="metrics-heading"
                className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
              >
                {s.heading}
              </h2>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:mt-12">
              {s.metrics.map((m, i) => (
                <li
                  key={`${m.label}-${m.value}`}
                  className={`group px-5 py-6 text-center transition-[transform,box-shadow,border-color,background-color] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${
                    i === 0
                      ? "bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-white shadow-[0_12px_32px_rgb(0_0_0/0.08)] hover:shadow-[0_22px_48px_rgb(0_0_0/0.12)]"
                      : "bespoke-surface panel-machined border border-[color:var(--g200)] bg-white shadow-[0_8px_24px_rgb(0_0_0/0.05)] hover:border-[color:var(--y)]/40 hover:shadow-[0_18px_40px_rgb(0_0_0/0.1)]"
                  }`}
                >
                  <p
                    className={`font-serif text-3xl font-bold leading-tight tracking-[-0.04em] tabular-nums sm:text-4xl ${
                      i === 0 ? "text-[color:var(--y)]" : "text-ink"
                    }`}
                  >
                    {m.value}
                  </p>
                  <p className="mt-3 eyebrow text-ink">
                    {m.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.72] text-[color:var(--text-600)]">
                    {m.sub}
                  </p>
                  <div
                    className="mx-auto mt-4 h-px w-12 bg-[color:var(--y)]/55 transition-[width,opacity] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-20 group-hover:opacity-100 motion-reduce:transition-none"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

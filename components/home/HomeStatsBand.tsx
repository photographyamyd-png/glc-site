import Link from "next/link";
import type { HomeCopy } from "@/lib/site/copy";

type HomeStatsBandProps = {
  band: HomeCopy["statsBand"];
  stats: HomeCopy["stats"];
};

export function HomeStatsBand({ band, stats }: HomeStatsBandProps) {
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
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="eyebrow text-ink">{band.eyebrow}</p>
        <h2 id="metrics-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          {band.heading}{" "}
          <span className="text-[color:var(--y)]">{band.headingAccent}</span>
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{band.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Link
              key={stat.label}
              href="/about/"
              className={`bespoke-surface panel-machined group min-h-[44px] border border-[color:var(--g200)] p-5 transition-[box-shadow,transform,border-color] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[color:var(--y)]/45 hover:shadow-[0_20px_44px_rgb(0_0_0/0.12)] motion-reduce:transform-none ${
                i === 1 ? "lg:relative lg:z-[1] lg:translate-y-[var(--dna-stagger-sm)] motion-reduce:lg:translate-y-0" : ""
              }`}
            >
              <p className="font-serif text-3xl font-bold leading-tight tracking-[-0.04em] tabular-nums text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-3 eyebrow text-ink">{stat.label}</p>
              <p className="mt-2 text-[15px] leading-[1.72] text-[color:var(--text-600)]">{stat.sub}</p>
              <p className="mt-4 eyebrow text-[color:var(--y)] transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 motion-reduce:transform-none">
                Why this matters {"->"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

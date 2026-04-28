import Link from "next/link";
import type { HomeCopy } from "@/lib/site/copy";

type HomeStatsBandProps = {
  band: HomeCopy["statsBand"];
  stats: HomeCopy["stats"];
};

export function HomeStatsBand({ band, stats }: HomeStatsBandProps) {
  return (
    <section id="metrics" className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="metrics-heading">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-0">
        <p className="label-overline">{band.eyebrow}</p>
        <h2 id="metrics-heading" className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          {band.heading}{" "}
          <span className="text-[color:var(--y)]">{band.headingAccent}</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">{band.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Link
              key={stat.label}
              href="/about/"
              className={`bespoke-surface panel-machined group border border-[color:var(--g200)] p-5 transition-[box-shadow,transform] hover:-translate-y-0.5 motion-reduce:transform-none ${
                i === 1 ? "lg:relative lg:z-[1] lg:translate-y-[var(--dna-stagger-sm)] motion-reduce:lg:translate-y-0" : ""
              }`}
            >
              <p className="font-serif text-3xl font-semibold tabular-nums text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-2 font-semibold uppercase tracking-[0.12em] text-ink">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stat.sub}</p>
              <p className="mt-4 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] group-hover:underline">
                Why this matters {"->"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_STATS } from "@/lib/ground-level/home-copy-lab-content";

/** Light-field metrics band — breaks dark runs after about / before services grid. */
export function CopyLabStats() {
  const s = COPY_LAB_STATS;
  return (
    <section
      id="copy-lab-stats"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="copy-lab-stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--y)_4%,transparent),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/40 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
          <div className="relative order-2 min-h-[200px] overflow-hidden border border-[color:var(--g200)] shadow-[0_16px_40px_rgb(0_0_0/0.08)] lg:order-1 lg:min-h-[280px] [clip-path:polygon(0_0,92%_0,100%_10%,100%_100%,0_100%)]">
            <Image
              src="/ground-level/equipment-wide.jpg"
              alt="Heavy equipment on a graded commercial site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0_0_0/0.35)] to-transparent" aria-hidden />
          </div>
          <div className="order-1 lg:order-2">
            <h2 id="copy-lab-stats-heading" className="label-overline mb-2">
              {s.sideLabel}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {s.metrics.map((m, i) => (
                <li
                  key={m.label}
                  className={`border px-5 py-6 text-center ${
                    i === 0
                      ? "border-[color:var(--y)]/50 bg-[color-mix(in_srgb,var(--y)_6%,white)] shadow-[0_12px_32px_rgb(0_0_0/0.08)]"
                      : "border-[color:var(--g200)] bg-white shadow-[0_8px_24px_rgb(0_0_0/0.05)]"
                  }`}
                >
                  <p className="font-serif text-3xl font-semibold text-[color:var(--y)] sm:text-4xl">{m.value}</p>
                  <p className="mt-2 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                    {m.label}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{m.sub}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

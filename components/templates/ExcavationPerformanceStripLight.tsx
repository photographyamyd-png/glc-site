import type { PerformanceStatCell } from "@/lib/ground-level/excavation-metrics-reference";

export function ExcavationPerformanceStripLight({ cells }: { cells: PerformanceStatCell[] }) {
  return (
    <div className="mt-10 overflow-hidden rounded-none border border-[color:var(--g200)] bg-white shadow-[0_12px_40px_rgb(0_0_0/0.06)] sm:mt-12">
      <div
        className="h-[3px] bg-gradient-to-r from-[color:var(--y)] via-[color:var(--y)]/25 to-transparent"
        aria-hidden
      />
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <p className="eyebrow border-b border-[color:var(--g200)] bg-[color:var(--brand-canvas)] px-4 py-3 text-center text-ink-muted lg:hidden">
          Performance
        </p>
        <div
          className="hidden w-14 shrink-0 border-b border-[color:var(--g200)] lg:flex lg:border-b-0 lg:border-r lg:py-10"
          aria-hidden
        >
          <span className="m-auto font-sans text-[9px] font-extrabold uppercase tracking-[0.22em] text-ink-muted [text-orientation:mixed] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
            Performance
          </span>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-px bg-[color:var(--g200)] sm:grid-cols-2 lg:grid-cols-4">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="bg-white px-4 py-10 text-center sm:px-6"
            >
              <span className="block font-serif font-bold tabular-nums tracking-[-0.04em] text-[clamp(2.75rem,5vw,5rem)] leading-none text-ink">
                {cell.target}
                <span className="text-[color:var(--y)]">{cell.afterNumber}</span>
              </span>
              <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink-muted">
                {cell.label}
              </span>
              <span className="mt-1.5 block text-xs font-medium leading-snug text-ink-muted">{cell.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

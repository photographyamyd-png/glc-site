import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExcavationMetricsServiceCardLight } from "@/components/templates/ExcavationMetricsServiceCardLight";
import { ExcavationPerformanceStripLight } from "@/components/templates/ExcavationPerformanceStripLight";
import {
  excavationMetricsServiceCards,
  excavationPerformanceCells,
} from "@/lib/ground-level/excavation-metrics-reference";

type Props = {
  /** Right column intro — balances header weight (sandbox services pattern) */
  introLine: string;
};

export function ExcavationMetricsSection({ introLine }: Props) {
  const cards = excavationMetricsServiceCards();
  const cells = excavationPerformanceCells();

  return (
    <section
      id="metrics"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="excavation-metrics-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_50%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="eyebrow text-ink-muted">Operations snapshot</p>
            <h2
              id="excavation-metrics-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              Field metrics
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-[1.72] text-ink sm:text-base lg:justify-self-end lg:text-right">
            {introLine}
          </p>
        </div>

        <div className="relative mt-10 border-l-4 border-[color:var(--y)] pl-5 sm:mt-12">
          <div className="grid gap-2 sm:grid-cols-2">
            {cards.map((card) => (
              <ExcavationMetricsServiceCardLight key={card.slug} card={card} />
            ))}
          </div>
        </div>

        {cells.length > 0 ? <ExcavationPerformanceStripLight cells={cells} /> : null}
      </div>
    </section>
  );
}

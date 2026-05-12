import type { StatsProps } from "@/lib/glc-dna/types";
import { StatCellAnimated } from "@/components/glc-dna/ui/stat-cell-animated";

export function StatsSection({ cells, sectionId = "stats" }: StatsProps) {
  const delays = [
    undefined,
    "reveal--delay-1",
    "reveal--delay-2",
    "reveal--delay-3",
  ] as const;

  return (
    <section id={sectionId} aria-label="Company statistics" data-accent-family="stats" data-accent-zone="metrics-data">
      {/* Yellow punctuation rail */}
      <div className="st3__top-rail" aria-hidden />

      <div className="st3__inner">
        {/* Vertical side label */}
        <div className="st3__side-label" aria-hidden data-motif-id="st3__side-label">
          <span>Performance</span>
        </div>

        {/* 4-cell grid */}
        <div className="st3__grid">
          {cells.map((cell, i) => (
            <StatCellAnimated
              key={cell.label}
              {...cell}
              delayClass={delays[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

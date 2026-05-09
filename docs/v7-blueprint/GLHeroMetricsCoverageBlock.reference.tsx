/**
 * V7 reference — archived from legacy MASTER_RULES.md (Portable Blueprint).
 * Not wired into routes; copy patterns into product components as needed.
 * @see .cursor/rules/design-system.mdc §8 (hero metrics cluster)
 */

import type { FC } from "react";

/** Required content shape */
export interface GLHeroStat {
  value: string;
  label: string;
}

export interface GLHeroMetricsCoverageBlockProps {
  stats: GLHeroStat[];
  serviceCoverageLabel: string;
  serviceChips?: string[];
  /** External positioning (e.g. mt-8) */
  className?: string;
}

export const GLHeroMetricsCoverageBlock: FC<GLHeroMetricsCoverageBlockProps> = ({
  stats,
  serviceCoverageLabel,
  serviceChips = [],
  className = "",
}) => {
  return (
    <div
      className={`relative z-10 w-full max-w-2xl rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-2xl backdrop-blur-md sm:p-8 ${className}`}
    >
      <div className="mb-6 h-px w-full bg-[#f2b705]/80" aria-hidden />

      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
        {stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`} className="flex items-baseline gap-2">
            <span className="text-[1.25rem] font-bold tracking-[-0.04em] text-[#f2b705]">{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 eyebrow text-white">{serviceCoverageLabel}</div>

      {serviceChips.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceChips.map((chip) => (
            <span
              key={chip}
              className="eyebrow rounded border border-white/20 bg-white/5 px-2 py-1 text-white transition-colors hover:bg-white/10"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

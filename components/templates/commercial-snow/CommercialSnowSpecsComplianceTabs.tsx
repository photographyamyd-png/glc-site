"use client";

import { useCallback, useId, useState, type KeyboardEvent } from "react";
import type { CommercialSnowSpecsComplianceBand } from "@/lib/site/commercial-snow-page-data";
import { cn } from "@/lib/utils";

export function CommercialSnowSpecsComplianceTabs({ data }: { data: CommercialSnowSpecsComplianceBand }) {
  const [tab, setTab] = useState<"logistics" | "liability">("logistics");
  const tabListId = useId();
  const logisticsPanelId = `${tabListId}-logistics`;
  const liabilityPanelId = `${tabListId}-liability`;

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setTab((t) => (t === "logistics" ? "liability" : "logistics"));
      }
    },
    [],
  );

  return (
    <div className="bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-white p-5 shadow-[0_18px_48px_rgb(0_0_0/0.06)] sm:p-8">
      <div className="border-b border-[color:var(--g200)] pb-4" role="tablist" aria-label="Technical specs categories" onKeyDown={onKeyDown}>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            role="tab"
            id={`${tabListId}-tab-logistics`}
            aria-selected={tab === "logistics"}
            aria-controls={logisticsPanelId}
            tabIndex={tab === "logistics" ? 0 : -1}
            className={cn(
              "min-h-[44px] flex-1 px-4 py-2 text-center font-serif text-sm font-bold uppercase tracking-[0.04em] transition-colors sm:text-base",
              tab === "logistics" ? "bg-[color:var(--y)] text-ink" : "bg-[rgb(30_28_26/0.06)] text-ink-muted hover:text-ink",
            )}
            onClick={() => setTab("logistics")}
          >
            {data.logisticsTabLabel}
          </button>
          <button
            type="button"
            role="tab"
            id={`${tabListId}-tab-liability`}
            aria-selected={tab === "liability"}
            aria-controls={liabilityPanelId}
            tabIndex={tab === "liability" ? 0 : -1}
            className={cn(
              "min-h-[44px] flex-1 px-4 py-2 text-center font-serif text-sm font-bold uppercase tracking-[0.04em] transition-colors sm:text-base",
              tab === "liability" ? "bg-[color:var(--y)] text-ink" : "bg-[rgb(30_28_26/0.06)] text-ink-muted hover:text-ink",
            )}
            onClick={() => setTab("liability")}
          >
            {data.liabilityTabLabel}
          </button>
        </div>
      </div>

      <div
        id={logisticsPanelId}
        role="tabpanel"
        aria-labelledby={`${tabListId}-tab-logistics`}
        hidden={tab !== "logistics"}
        className="pt-6"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.logisticsBullets.map((line) => (
            <li key={line} className="flex gap-3 border border-[color:var(--g200)] bg-[color:rgb(30_28_26/0.02)] p-4">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--y)]/60 bg-[rgb(242_183_5/0.12)]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-ink">
                  <path d="M4 14L12 6l8 8" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 20h16" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span className="font-sans text-sm font-semibold uppercase tracking-[0.04em] text-ink">{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        id={liabilityPanelId}
        role="tabpanel"
        aria-labelledby={`${tabListId}-tab-liability`}
        hidden={tab !== "liability"}
        className="pt-6"
      >
        <ul className="space-y-3">
          {data.liabilityChecklist.map((line) => (
            <li key={line} className="flex items-start gap-3 border border-[color:var(--g200)] bg-[color:rgb(30_28_26/0.02)] p-4">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--y)] text-[12px] font-bold text-ink" aria-hidden>
                ✓
              </span>
              <span className="text-[15px] leading-[1.72] text-ink sm:text-base">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

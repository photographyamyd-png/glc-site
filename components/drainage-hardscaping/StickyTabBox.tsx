"use client";

import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/utils";

export type StickyTabItem = {
  label: string;
  content: React.ReactNode;
};

export function StickyTabBox({ tabs, ariaLabel }: { tabs: StickyTabItem[]; ariaLabel?: string }) {
  const baseId = useId();
  const [selected, setSelected] = useState(0);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const len = tabs.length;
      let next = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (index + 1) % len;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (index - 1 + len) % len;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = len - 1;
      } else {
        return;
      }
      setSelected(next);
      queueMicrotask(() => {
        document.getElementById(`${baseId}-tab-${next}`)?.focus();
      });
    },
    [baseId, tabs.length],
  );

  return (
    <div className="relative isolate border border-[color:var(--g200)] bg-white">
      <div
        role="tablist"
        aria-label={ariaLabel ?? "Section tabs"}
        className="band-dark-field sticky top-[var(--header)] z-10 flex gap-2 overflow-x-auto border-b border-white/10 px-4 py-2 sm:px-6 sm:py-3 lg:px-8"
      >
        {tabs.map((tab, i) => {
          const isSel = selected === i;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={isSel}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={isSel ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className={cn(
                "min-h-[44px] shrink-0 whitespace-nowrap border-b-[4px] px-3 py-2 eyebrow transition-colors sm:px-4",
                isSel
                  ? "border-[color:var(--y)] text-[color:var(--y)]"
                  : "border-transparent text-white/80 hover:text-white",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, i) => {
        const isSel = selected === i;
        return (
          <div
            key={tab.label}
            role="tabpanel"
            id={`${baseId}-panel-${i}`}
            aria-labelledby={`${baseId}-tab-${i}`}
            hidden={!isSel}
            className="band-light border-t border-[color:var(--g200)] px-4 py-10 motion-safe:transition-opacity motion-safe:duration-150 motion-safe:ease-out sm:px-6 sm:py-12 lg:px-10 lg:py-[var(--s12)]"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}

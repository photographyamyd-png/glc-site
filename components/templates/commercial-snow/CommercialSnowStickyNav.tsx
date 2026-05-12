"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type SnowChapter = { id: string; label: string; shortLabel: string };

export function CommercialSnowStickyNav({ chapters }: { chapters: readonly SnowChapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const nodes = chapters
      .map((c) => document.getElementById(c.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${typeof window !== "undefined" ? getComputedStyle(document.documentElement).getPropertyValue("--header").trim() || "80px" : "80px"} 0px -55% 0px`,
        threshold: [0.08, 0.15, 0.25, 0.35],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "sticky z-40 border-b border-[color:var(--g200)] bg-[rgb(255_255_255/0.92)] backdrop-blur-md",
        "motion-reduce:scroll-auto",
      )}
      style={{ top: "var(--header)" }}
    >
      <div className="mx-auto flex max-w-[min(100%,var(--max))] gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-10">
        {chapters.map((c) => {
          const isActive = active === c.id;
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={cn(
                "flex min-h-[44px] shrink-0 items-center border-b-2 px-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors",
                isActive
                  ? "border-[color:var(--y)] text-ink"
                  : "border-transparent text-ink-muted hover:text-ink",
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="sm:hidden">{c.shortLabel}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

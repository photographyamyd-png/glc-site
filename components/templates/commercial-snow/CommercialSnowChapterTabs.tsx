"use client";

import {
  Children,
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type SnowStickyChapter = { id: string; label: string; shortLabel: string };

function flattenChildren(node: ReactNode): ReactElement[] {
  return Children.toArray(node).flatMap((c) => {
    if (!isValidElement(c)) return [];
    if (c.type === Fragment) return flattenChildren((c.props as { children?: ReactNode }).children);
    return [c];
  });
}

function chapterIdForHash(hash: string, chapterIds: ReadonlySet<string>): string | null {
  if (!hash) return null;
  if (chapterIds.has(hash)) return hash;
  if (typeof document === "undefined") return null;
  const el = document.getElementById(hash);
  if (!el) return null;
  let node: HTMLElement | null = el;
  while (node) {
    const cid = node.getAttribute("data-snow-chapter");
    if (cid && chapterIds.has(cid)) return cid;
    node = node.parentElement;
  }
  return null;
}

export function CommercialSnowChapterTabs({
  chapters,
  beforePanels,
  children,
}: {
  chapters: readonly SnowStickyChapter[];
  /** Rendered after the sticky tab row (e.g. hero) so tabs stay immediately under the site header. */
  beforePanels?: ReactNode;
  children: ReactNode;
}) {
  const baseId = useId();
  const chapterIds = useMemo(() => new Set(chapters.map((c) => c.id)), [chapters]);
  const defaultId = chapters[0]?.id ?? "";
  const [activeId, setActiveId] = useState(defaultId);

  const applyHash = useCallback(() => {
    if (typeof window === "undefined") return;
    const raw = window.location.hash.slice(1);
    const decoded = raw ? decodeURIComponent(raw.replace(/\+/g, " ")) : "";
    if (decoded === "chapter-hero") {
      queueMicrotask(() => {
        document.getElementById("chapter-hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    const chapter = chapterIdForHash(decoded, chapterIds);
    if (chapter) {
      setActiveId(chapter);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = decoded ? document.getElementById(decoded) : null;
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "nearest" });
          } else {
            document.getElementById(chapter)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    }
  }, [chapterIds]);

  useLayoutEffect(() => {
    applyHash();
  }, [applyHash]);

  useEffect(() => {
    const onHash = () => applyHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [applyHash]);

  const flatPanels = useMemo(() => flattenChildren(children), [children]);

  const onTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const len = chapters.length;
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
      const id = chapters[next]?.id;
      if (id) {
        setActiveId(id);
        window.history.replaceState(null, "", `#${id}`);
        queueMicrotask(() => {
          document.getElementById(`${baseId}-tab-${id}`)?.focus();
        });
      }
    },
    [baseId, chapters],
  );

  const selectTab = useCallback((id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    queueMicrotask(() => {
      document.getElementById(`${baseId}-panel-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [baseId]);

  return (
    <div className="relative">
      <div
        role="tablist"
        aria-label="Commercial snow page sections"
        className={cn(
          "sticky z-40 border-b border-[color:var(--g200)] bg-[rgb(255_255_255/0.92)] backdrop-blur-md",
          "motion-reduce:scroll-auto",
        )}
        style={{ top: "var(--header)" }}
      >
        <div className="mx-auto flex max-w-[min(100%,var(--max))] gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-10">
          {chapters.map((c, i) => {
            const isActive = activeId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${c.id}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${c.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(c.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={cn(
                  "flex min-h-[44px] shrink-0 items-center border-b-2 px-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors",
                  isActive
                    ? "border-[color:var(--y)] text-ink"
                    : "border-transparent text-ink-muted hover:text-ink",
                )}
              >
                <span className="sm:hidden">{c.shortLabel}</span>
                <span className="hidden sm:inline">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {beforePanels}

      <div className="relative">
        {flatPanels.map((child, idx) => {
          const id = isValidElement(child) ? (child.props as { id?: string }).id : undefined;
          if (!id || !chapterIds.has(id)) {
            return <Fragment key={`snow-extra-${idx}`}>{child}</Fragment>;
          }
          const isSel = activeId === id;
          return (
            <div
              key={id}
              role="tabpanel"
              id={`${baseId}-panel-${id}`}
              aria-labelledby={`${baseId}-tab-${id}`}
              hidden={!isSel}
              className="scroll-mt-[var(--header)]"
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type Props = {
  summary?: React.ReactNode;
  triggerLabel: string;
  children: React.ReactNode;
  band: "light" | "dark";
  hashId?: string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ExpandSection({
  summary,
  triggerLabel,
  children,
  band,
  hashId,
  className,
  open: openProp,
  onOpenChange,
}: Props) {
  const id = useId();
  const panelId = `${id}-panel`;
  const [internalOpen, setInternalOpen] = useState(false);
  const controlled = openProp !== undefined;
  const open = controlled ? openProp : internalOpen;
  const setOpen = (v: boolean) => {
    if (!controlled) setInternalOpen(v);
    onOpenChange?.(v);
  };

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!hashId) return;
    const check = () => {
      if (window.location.hash.replace(/^#/, "") === hashId) {
        if (controlled) onOpenChange?.(true);
        else setInternalOpen(true);
        requestAnimationFrame(() => {
          document.getElementById(hashId)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        });
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [hashId, reducedMotion, controlled, onOpenChange]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (!open) {
      setMaxHeight(0);
      return;
    }

    const measure = () => setMaxHeight(el.scrollHeight);
    measure();
    const raf = requestAnimationFrame(() => measure());
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [open, children]);

  const bodyClass =
    band === "light"
      ? "text-[15px] leading-[1.72] text-ink sm:text-base"
      : "text-[15px] leading-[1.72] text-white/90 sm:text-base";

  return (
    <div className={cn("border-t border-[color:var(--g200)]", className)}>
      {summary ? <div className={bodyClass}>{summary}</div> : null}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className={cn("flex min-h-[44px] w-full cursor-pointer items-center gap-2 text-left", summary ? "mt-3" : "mt-0")}
      >
        <span className="eyebrow text-[color:var(--y)]">{triggerLabel}</span>
        <svg
          className={cn("h-6 w-6 shrink-0 text-[color:var(--y)] transition-transform duration-200", open && "rotate-180")}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="square" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={cn(
          /* max-height without overflow clips nothing — collapsed panels must not paint over following UI */
          "overflow-hidden",
          !reducedMotion && "transition-[max-height] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        )}
        style={{
          maxHeight: reducedMotion ? (open ? "9999px" : 0) : maxHeight,
          transition: reducedMotion ? "none" : undefined,
        }}
      >
        <div ref={contentRef} className={cn("pt-6", bodyClass, !open && "pointer-events-none")}>
          {children}
        </div>
      </div>
    </div>
  );
}

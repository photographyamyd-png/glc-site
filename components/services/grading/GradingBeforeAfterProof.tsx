"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

export type GradingBeforeAfterProofProps = {
  eyebrow: string;
  heading: string;
  caption: string;
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  /** Defaults preserve grading page anchors. */
  sectionId?: string;
  headingId?: string;
};

export function GradingBeforeAfterProof({
  eyebrow,
  heading,
  caption,
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  sectionId = "grading-proof",
  headingId = "grading-proof-heading",
}: GradingBeforeAfterProofProps) {
  const [pct, setPct] = useState(50);
  const [reduceMotion, setReduceMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPct(Math.round((x / rect.width) * 100));
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = "touches" in e ? (e.touches[0]?.clientX ?? 0) : e.clientX;
      setFromClientX(clientX);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, [setFromClientX]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((v) => Math.max(0, v - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((v) => Math.min(100, v + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(100);
    }
  }, []);

  return (
    <section
      id={sectionId}
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden text-white view-reveal"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.35),transparent_45%,rgb(242_183_5/0.08))]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[color:var(--y)]" aria-hidden />
      <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-white">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">{caption}</p>
        </div>

        <figure className="mt-10 overflow-hidden border border-white/15 bg-[rgb(10_12_11/0.55)] shadow-[0_24px_64px_rgb(0_0_0/0.45)] backdrop-blur-md">
          <figcaption id={labelId} className="sr-only">
            Compare before and after site imagery. Drag the slider or use arrow keys to adjust the split.
          </figcaption>
          {reduceMotion ? (
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="relative aspect-[4/3] min-h-[200px]">
                <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(min-width:640px) 50vw,100vw" />
                <span className="absolute left-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] min-h-[200px] border-t border-white/10 sm:border-l sm:border-t-0">
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(min-width:640px) 50vw,100vw" />
                <span className="absolute right-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                  After
                </span>
              </div>
            </div>
          ) : (
            <div
              ref={trackRef}
              className="relative aspect-[16/10] min-h-[260px] w-full touch-none select-none"
              role="slider"
              tabIndex={0}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              aria-valuetext={`${pct}% before imagery visible`}
              aria-labelledby={labelId}
              onKeyDown={onKeyDown}
              onMouseDown={(e) => {
                dragging.current = true;
                setFromClientX(e.clientX);
              }}
              onTouchStart={(e) => {
                dragging.current = true;
                const t = e.touches[0];
                if (t) setFromClientX(t.clientX);
              }}
            >
              <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(min-width: 1024px) 70vw, 100vw" />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${100 - pct}%)` }}>
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(min-width: 1024px) 70vw, 100vw" />
              </div>
              <div
                className="absolute inset-y-0 w-0.5 bg-[color:var(--y)] shadow-[0_0_20px_rgb(242_183_5/0.55)]"
                style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
                aria-hidden
              />
              <button
                type="button"
                className="absolute top-1/2 z-[2] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-[color:var(--y)] bg-[rgb(10_12_11/0.75)] text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm motion-reduce:transition-none"
                style={{ left: `${pct}%` }}
                aria-label="Drag to compare before and after"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  dragging.current = true;
                  setFromClientX(e.clientX);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  dragging.current = true;
                  const t = e.touches[0];
                  if (t) setFromClientX(t.clientX);
                }}
              >
                Drag
              </button>
              <span className="pointer-events-none absolute left-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                Before
              </span>
              <span className="pointer-events-none absolute right-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                After
              </span>
            </div>
          )}
        </figure>
      </div>
    </section>
  );
}

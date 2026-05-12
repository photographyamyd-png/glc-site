"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_PROOF } from "@/lib/ground-level/home-copy-lab-content";

const p = COPY_LAB_PROOF;

export function HomeProofBeforeAfter() {
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
    const w = rect.width;
    if (w <= 0) return;
    const x = Math.min(Math.max(clientX - rect.left, 0), w);
    setPct(Math.round((x / w) * 100));
  }, []);

  const endDrag = useCallback((el: HTMLDivElement | null, pointerId: number) => {
    dragging.current = false;
    if (!el) return;
    try {
      if (el.hasPointerCapture(pointerId)) el.releasePointerCapture(pointerId);
    } catch {
      /* capture already released */
    }
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      dragging.current = true;
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
      if (e.pointerType !== "mouse" && e.cancelable) e.preventDefault();
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onPointerUpOrCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    endDrag(e.currentTarget, e.pointerId);
  }, [endDrag]);

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
      id="proof"
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden text-white view-reveal"
      aria-labelledby="proof-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.35),transparent_45%,rgb(242_183_5/0.08))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[color:var(--y)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-right" className="opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start lg:gap-14">
          <div>
            <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
              <p className="eyebrow text-white">{p.eyebrow}</p>
              <h2
                id="proof-heading"
                className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
              >
                {p.heading}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.72] text-white/90 sm:text-base">{p.caption}</p>
            </div>

            <figure className="mt-10 overflow-hidden border border-white/15 bg-[rgb(10_12_11/0.55)] shadow-[0_24px_64px_rgb(0_0_0/0.45)] backdrop-blur-md">
              <figcaption id={labelId} className="sr-only">
                Compare before and after site imagery. Drag the slider or use arrow keys to adjust the split.
              </figcaption>
              {reduceMotion ? (
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] min-h-[200px]">
                    <Image src={p.beforeSrc} alt={p.beforeAlt} fill className="object-cover" sizes="(min-width:640px) 50vw,100vw" />
                    <span className="absolute left-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] min-h-[200px] border-t border-white/10 sm:border-l sm:border-t-0">
                    <Image src={p.afterSrc} alt={p.afterAlt} fill className="object-cover" sizes="(min-width:640px) 50vw,100vw" />
                    <span className="absolute right-3 top-3 border border-white/30 bg-[rgb(0_0_0/0.55)] px-2 py-1 eyebrow text-white">
                      After
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  ref={trackRef}
                  className="relative aspect-[4/3] min-h-[200px] w-full touch-none select-none sm:aspect-[16/10] sm:min-h-[240px] lg:min-h-[260px]"
                  role="slider"
                  tabIndex={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={pct}
                  aria-valuetext={`${pct}% before imagery visible`}
                  aria-labelledby={labelId}
                  onKeyDown={onKeyDown}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUpOrCancel}
                  onPointerCancel={onPointerUpOrCancel}
                  onLostPointerCapture={() => {
                    dragging.current = false;
                  }}
                >
                  <Image
                    src={p.beforeSrc}
                    alt={p.beforeAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    priority={false}
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${100 - pct}%)` }}
                  >
                    <Image
                      src={p.afterSrc}
                      alt={p.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 70vw, 100vw"
                    />
                  </div>
                  <div
                    className="absolute inset-y-0 w-0.5 bg-[color:var(--y)] shadow-[0_0_20px_rgb(242_183_5/0.55)]"
                    style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
                    aria-hidden
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 z-[2] flex min-h-[48px] min-w-[48px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-manipulation items-center justify-center rounded-full border-2 border-[color:var(--y)] bg-[rgb(10_12_11/0.75)] px-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm sm:h-12 sm:w-12 sm:px-0 motion-reduce:transition-none"
                    style={{ left: `${pct}%` }}
                    aria-label="Drag to compare before and after"
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

          <aside className="relative border border-white/15 border-l-[4px] border-l-[color:var(--y)] bg-[rgb(10_12_11/0.55)] p-6 shadow-[0_20px_48px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8">
            <p className="eyebrow text-[color:var(--y)]">Client signal</p>
            <blockquote className="mt-4 border-l border-white/20 pl-4">
              <p className="font-sans text-base leading-relaxed text-white/92 sm:text-lg">&ldquo;{p.pullQuote}&rdquo;</p>
              <footer className="mt-4 text-sm text-white/70">— {p.pullAttribution}</footer>
            </blockquote>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              Slider compares two distinct commercial site photographs to illustrate mobilization-through-grade outcomes — not a
              georeferenced survey pair.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

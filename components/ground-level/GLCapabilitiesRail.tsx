"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useId, useState } from "react";
import type { GroundLevelService } from "@/lib/ground-level/services";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";

function serviceTitleToneOnDark(title: string) {
  const [left, right] = title.split("&");
  if (!right) return <>{title}</>;
  return (
    <>
      <span className="text-white">{left.trim()} &</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

function serviceTitleToneOnCanvas(title: string) {
  const [left, right] = title.split("&");
  if (!right) return <>{title}</>;
  return (
    <>
      <span className="text-ink">{left.trim()} &</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

export type GLCapabilitiesRailProps = {
  sectionId?: string;
  headingId?: string;
  eyebrow: string;
  /** First line (white) + second line (accent) — distinct from horizontal-tab services hero. */
  titleLine1: string;
  titleLine2: string;
  intro: string;
  services: readonly GroundLevelService[];
};

export function GLCapabilitiesRail({
  sectionId = "capabilities",
  headingId = "capabilities-heading",
  eyebrow,
  titleLine1,
  titleLine2,
  intro,
  services,
}: GLCapabilitiesRailProps) {
  const baseId = useId();
  const [selected, setSelected] = useState(0);
  const len = services.length;

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let next = index;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        next = (index + 1) % len;
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
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
        document.getElementById(`${baseId}-rail-${next}`)?.focus();
      });
    },
    [baseId, len],
  );

  return (
    <section
      id={sectionId}
      className="section-major band-dark relative z-[11] scroll-mt-[var(--header)] overflow-hidden pb-6 view-reveal sm:pb-8 lg:pb-10"
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline-on-dark mb-3">{eyebrow}</p>
        <h2
          id={headingId}
          className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
        >
          <span className="text-white">{titleLine1}</span>{" "}
          <span className="text-[color:var(--y)]">{titleLine2}</span>
        </h2>
        <div className="mt-6 max-w-2xl border border-white/12 border-l-[5px] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.06)] px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
          <ExpandableCopy text={intro} className="text-sm leading-relaxed text-white/80 sm:text-base" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-12 lg:items-start">
          <div
            className="flex flex-col gap-2 border-white/12 lg:border-r lg:pr-8"
            role="tablist"
            aria-label="Choose a capability line"
          >
            {services.map((s, i) => {
              const isSel = selected === i;
              return (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  id={`${baseId}-rail-${i}`}
                  aria-selected={isSel}
                  aria-controls={`${baseId}-rail-panel-${i}`}
                  tabIndex={isSel ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`min-h-[48px] w-full px-4 py-3 text-left font-label text-[10px] font-semibold uppercase tracking-[0.14em] transition-[background,border-color,box-shadow] ${
                    isSel
                      ? "border border-[color:var(--y)]/55 bg-[rgb(255_255_255/0.1)] text-white shadow-[0_12px_32px_rgb(0_0_0/0.35)]"
                      : "border border-white/10 bg-[rgb(255_255_255/0.04)] text-white/70 hover:border-[color:var(--y)]/35 hover:text-white"
                  }`}
                >
                  <span className="line-clamp-3">{serviceTitleToneOnDark(s.title)}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[280px] lg:min-h-[360px]">
            <div
              className="pointer-events-none absolute -right-4 top-10 hidden h-[55%] w-px bg-gradient-to-b from-[color:var(--y)]/50 via-white/20 to-transparent lg:block"
              aria-hidden
            />
            {services.map((s, i) => (
              <div
                key={s.slug}
                role="tabpanel"
                id={`${baseId}-rail-panel-${i}`}
                aria-labelledby={`${baseId}-rail-${i}`}
                hidden={selected !== i}
                className="relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-ink shadow-[0_20px_50px_rgb(0_0_0/0.22)] sm:p-7"
              >
                <div
                  className="relative -mx-5 -mt-5 mb-6 h-36 overflow-hidden border-b border-[color:var(--g200)] sm:-mx-7 sm:-mt-7 sm:h-44"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
                >
                  <Image
                    src="/ground-level/equipment-wide.jpg"
                    alt=""
                    fill
                    className="object-cover object-center opacity-90"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] to-transparent" aria-hidden />
                  <p className="absolute bottom-3 left-4 font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    {String(i + 1).padStart(2, "0")} — {s.slug.replace(/-/g, " ")}
                  </p>
                </div>
                <h3 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink sm:text-2xl">
                  {serviceTitleToneOnCanvas(s.title)}
                </h3>
                <div className="mt-4">
                  <ExpandableCopy text={s.megaBlurb} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4 transition-colors hover:decoration-[color:var(--y)]"
                >
                  View full service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

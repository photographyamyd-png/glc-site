import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COMMERCIAL_SNOW_LIVE_TRACKING } from "@/lib/site/commercial-snow-page-data";
import { cn } from "@/lib/utils";

const DECO_MARKERS = [
  { className: "left-[12%] top-[38%]" },
  { className: "left-[48%] top-[52%]" },
  { className: "right-[18%] top-[30%]" },
] as const;

export function CommercialSnowLiveTrackingSection() {
  const t = COMMERCIAL_SNOW_LIVE_TRACKING;

  return (
    <section
      id="chapter-live-tracking"
      className="section-major relative scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--g200)] bg-[rgb(18_20_19)] view-reveal"
      aria-labelledby={t.h2Id}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgb(242_183_5/0.07),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgb(255_255_255/0.04),transparent_55%)]" aria-hidden />
      <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.1]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-[color:var(--y)]">{t.eyebrow}</p>
          <h2 id={t.h2Id} className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            {t.h2}
          </h2>
          <p className="mt-[var(--s7)] max-w-[42rem] text-[15px] leading-[1.72] text-white/90 sm:text-base">{t.visibleLede}</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-sm border border-white/15 ring-1 ring-[color:var(--y)]/40">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            <Image src={t.figureSrc} alt={t.figureAlt} fill className="object-cover object-center" sizes="(min-width: 1024px) 56rem, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.55)] to-transparent" aria-hidden />
            <p className="absolute bottom-3 right-3 rounded-sm bg-[rgb(10_12_11/0.75)] px-2 py-1 font-label text-[9px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:bottom-4 sm:right-4">
              {t.siteContextLabel}
            </p>
            <div className="absolute left-3 top-3 rounded-sm border border-[color:var(--y)]/80 bg-[rgb(10_12_11/0.82)] px-2 py-1 backdrop-blur-sm sm:left-4 sm:top-4">
              <p className="font-label text-[9px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]">{t.fleetOverlayLabel}</p>
            </div>
            {DECO_MARKERS.map((m) => (
              <div
                key={m.className}
                className={cn(
                  "pointer-events-none absolute flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--y)] bg-[rgb(10_12_11/0.7)] text-[10px] font-bold text-[color:var(--y)] shadow-md",
                  m.className,
                )}
                aria-hidden
              >
                P
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 border border-white/12 bg-[rgb(10_12_11/0.55)] p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div
              className="relative h-16 w-16 shrink-0 rounded-full border-4 border-white/20 border-t-[color:var(--y)] motion-reduce:animate-none"
              style={{ transform: "rotate(-32deg)" }}
              aria-hidden
            />
            <div>
              <p className="eyebrow text-white">{t.statusLabel}</p>
              <p className="font-serif text-3xl font-bold uppercase tracking-tight text-[color:var(--y)] sm:text-4xl">{t.statusValue}</p>
            </div>
          </div>
          <p className="max-w-md text-[15px] leading-[1.72] text-white/85 sm:text-base">{t.statusDetail}</p>
        </div>

        <p className="mx-auto mt-4 max-w-4xl text-center text-[12px] leading-snug text-white/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

export type GlcFaqDetailItem = {
  q: string;
  /** Single-paragraph answer (most routes). */
  a?: string;
  /** Multi-paragraph answer; rendered when present instead of `a`. */
  answerParas?: readonly string[];
};

export type GlcFaqDetailsGridProps = {
  items: readonly GlcFaqDetailItem[];
  /** `<details name>` — one open at a time per group in supporting browsers. */
  groupName: string;
  tone: "light" | "dark";
  /** Upper cap for responsive columns at the widest breakpoint. */
  maxColumns?: 2 | 3 | 4;
  /** `list` = one framed stack (single column). `cards` = compact grid cells (default). */
  density?: "cards" | "list";
  className?: string;
};

function gridClass(maxColumns: 2 | 3 | 4): string {
  switch (maxColumns) {
    case 2:
      return "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3";
    case 3:
      return "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3";
    default:
      return "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4";
  }
}

function renderAnswer(item: GlcFaqDetailItem, tone: "light" | "dark") {
  const bodyMuted =
    tone === "light" ? "text-sm leading-relaxed text-[color:var(--text-600)]" : "text-sm leading-relaxed text-white/80";

  if (item.answerParas?.length) {
    return (
      <div className={cn("mt-2 space-y-2 border-t pt-2.5", tone === "light" ? "border-[color:var(--g200)]" : "border-white/15")}>
        {item.answerParas.map((para, i) => (
          <p key={i} className={bodyMuted}>
            {para}
          </p>
        ))}
      </div>
    );
  }
  if (item.a != null && item.a !== "") {
    return (
      <p
        className={cn(
          "mt-2 border-t pt-2.5 text-sm leading-relaxed",
          tone === "light" ? "border-[color:var(--g200)] text-[color:var(--text-600)]" : "border-white/15 text-white/80",
        )}
      >
        {item.a}
      </p>
    );
  }
  return null;
}

/**
 * Shared FAQ UI: native `<details>`, compact Barlow/Source typography, responsive multi-column grid.
 */
export function GlcFaqDetailsGrid({
  items,
  groupName,
  tone,
  maxColumns = 4,
  density = "cards",
  className,
}: GlcFaqDetailsGridProps) {
  const isLight = tone === "light";

  const detailsShell = cn(
    "group glc-faq-details",
    density === "list"
      ? cn(
          "border-0 border-b bg-transparent py-1 last:border-b-0",
          isLight ? "border-[color:var(--g200)]" : "border-white/12",
        )
      : isLight
        ? "rounded-sm border border-[color:var(--g200)] bg-[rgb(255_255_255/0.92)] p-3 shadow-[0_1px_0_rgb(242_183_5/0.12)]"
        : "rounded-sm border border-white/15 bg-[rgb(255_255_255/0.05)] p-3 backdrop-blur-sm",
  );

  const summaryClass = cn(
    "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 marker:content-none [&::-webkit-details-marker]:hidden",
    "font-label text-[13px] font-semibold leading-snug tracking-[0.02em] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2",
    isLight ? "text-ink focus-visible:ring-offset-white" : "text-white/95 focus-visible:ring-offset-[rgb(18_20_19)]",
  );

  const chevron = (
    <>
      <span className="shrink-0 font-label text-[11px] font-semibold tracking-[0.12em] text-[color:var(--y)] group-open:hidden">
        +
      </span>
      <span className="hidden shrink-0 font-label text-[11px] font-semibold tracking-[0.12em] text-[color:var(--y)] group-open:inline">
        −
      </span>
    </>
  );

  if (density === "list") {
    return (
      <div
        className={cn(
          "rounded-sm border px-1 py-0.5",
          isLight
            ? "border-[color:var(--g200)] bg-[rgb(255_255_255/0.94)]"
            : "border-white/18 bg-[rgb(255_255_255/0.04)]",
          className,
        )}
      >
        <div className={cn("divide-y", isLight ? "divide-[color:var(--g200)]" : "divide-white/12")}>
          {items.map((item, i) => (
            <details key={`${item.q}-${i}`} name={groupName} className={cn(detailsShell, "px-3 py-1")}>
              <summary className={summaryClass}>
                <span className="min-w-0 text-pretty pr-2">{item.q}</span>
                {chevron}
              </summary>
              <div className="px-0 pb-2">{renderAnswer(item, tone)}</div>
            </details>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(gridClass(maxColumns), className)}>
      {items.map((item, i) => (
        <details key={`${item.q}-${i}`} name={groupName} className={detailsShell}>
          <summary className={summaryClass}>
            <span className="min-w-0 text-pretty pr-2">{item.q}</span>
            {chevron}
          </summary>
          {renderAnswer(item, tone)}
        </details>
      ))}
    </div>
  );
}

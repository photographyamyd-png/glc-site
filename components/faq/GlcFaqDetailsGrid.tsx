import { cn } from "@/lib/utils";

export type GlcFaqDetailItem = {
  q: string;
  a?: string;
  answerParas?: readonly string[];
};

export type GlcFaqDetailsGridProps = {
  items: readonly GlcFaqDetailItem[];
  groupName: string;
  tone: "light" | "dark";
  className?: string;
};

function renderAnswer(item: GlcFaqDetailItem, tone: "light" | "dark") {
  const body =
    tone === "light" ? "text-sm leading-relaxed text-[color:var(--text-600)]" : "text-sm leading-relaxed text-white/82";

  if (item.answerParas?.length) {
    return (
      <div className={cn("space-y-2.5", body)}>
        {item.answerParas.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    );
  }
  if (item.a != null && item.a !== "") {
    return <p className={body}>{item.a}</p>;
  }
  return null;
}

/**
 * Single-column FAQ list: shared rail, aligned typography, predictable rhythm (no ragged multi-column masonry).
 */
export function GlcFaqDetailsGrid({ items, groupName, tone, className }: GlcFaqDetailsGridProps) {
  const isLight = tone === "light";

  const shell = cn(
    "mx-auto w-full max-w-[52rem] overflow-hidden rounded-sm border border-l-[3px] shadow-sm",
    isLight
      ? "border-[color:var(--g200)] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.98)] shadow-[0_10px_36px_rgb(0_0_0/0.06)]"
      : "border-white/12 border-l-[color:var(--y)] bg-[rgb(18_20_19)] shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]",
    className,
  );

  const rowBorder = isLight ? "border-[color:var(--g200)]" : "border-white/10";

  const summaryClass = cn(
    "flex w-full min-h-[48px] cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden",
    "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2",
    isLight ? "text-ink focus-visible:ring-offset-white" : "text-white focus-visible:ring-offset-[rgb(18_20_19)]",
  );

  const qClass = "min-w-0 flex-1 font-sans text-sm font-medium leading-snug tracking-tight";

  const panelClass = cn(
    "border-t px-5 py-4",
    isLight ? "border-[color:var(--g200)] bg-[rgb(250_250_250/0.75)]" : "border-white/10 bg-black/20",
  );

  const chevron = (
    <>
      <span className="mt-0.5 shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:hidden" aria-hidden>
        +
      </span>
      <span className="mt-0.5 hidden shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:inline" aria-hidden>
        −
      </span>
    </>
  );

  return (
    <div className={cn(shell, className)}>
      {items.map((item, i) => {
        const body = renderAnswer(item, tone);
        return (
          <details key={`${item.q}-${i}`} name={groupName} className={cn("group border-b last:border-b-0", rowBorder)}>
            <summary className={summaryClass}>
              <span className={qClass}>{item.q}</span>
              {chevron}
            </summary>
            {body ? <div className={panelClass}>{body}</div> : null}
          </details>
        );
      })}
    </div>
  );
}

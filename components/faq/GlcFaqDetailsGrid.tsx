import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type GlcFaqDetailItem = {
  q: string;
  a?: string;
  answerParas?: readonly string[];
};

/** Optional headings + anchor ids between FAQ rows (single shell, one `name` group). */
export type GlcFaqCluster = {
  anchorId?: string;
  sectionTitle?: string;
  items: readonly GlcFaqDetailItem[];
};

export type GlcFaqDetailsGridProps = {
  items?: readonly GlcFaqDetailItem[];
  clusters?: readonly GlcFaqCluster[];
  groupName: string;
  tone: "light" | "dark";
  className?: string;
  /** Flatten outer chrome when nested inside a parent glass panel (dark tone). */
  embedded?: boolean;
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

function clusterHeadingId(cluster: GlcFaqCluster): string | undefined {
  if (cluster.anchorId) return cluster.anchorId;
  return undefined;
}

/**
 * Single-column FAQ list: shared rail, aligned typography, predictable rhythm (no ragged multi-column masonry).
 */
export function GlcFaqDetailsGrid({ items, clusters, groupName, tone, className, embedded = false }: GlcFaqDetailsGridProps) {
  const isLight = tone === "light";
  const useClusters = clusters != null && clusters.length > 0;
  const resolvedItems = useClusters ? clusters.flatMap((c) => [...c.items]) : items ?? [];

  const shell = cn(
    "mx-auto w-full overflow-hidden",
    embedded && !isLight
      ? "max-w-none rounded-none border-0 bg-transparent shadow-none"
      : "max-w-[52rem] rounded-sm border border-l-[3px] shadow-sm",
    !(embedded && !isLight) &&
      (isLight
        ? "border-[color:var(--g200)] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.98)] shadow-[0_10px_36px_rgb(0_0_0/0.06)]"
        : "border-white/12 border-l-[color:var(--y)] bg-[rgb(18_20_19)] shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"),
    className,
  );

  const rowBorder = isLight ? "border-[color:var(--g200)]" : "border-white/10";

  const ringOffset =
    embedded && !isLight
      ? "focus-visible:ring-offset-[rgb(10_12_11/0.45)]"
      : isLight
        ? "focus-visible:ring-offset-white"
        : "focus-visible:ring-offset-[rgb(18_20_19)]";

  const summaryClass = cn(
    "flex w-full min-h-[48px] cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden",
    "focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2",
    isLight ? "text-ink" : "text-white",
    ringOffset,
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

  const headingShell = cn(
    "border-b px-5 py-3 font-label text-[12px] font-semibold uppercase tracking-[0.1em]",
    isLight ? "border-[color:var(--g200)] bg-[rgb(248_247_246/0.9)] text-ink-muted" : "border-white/10 bg-black/15 text-white/75",
  );

  if (useClusters && clusters) {
    const totalDetails = clusters.reduce((n, c) => n + c.items.length, 0);
    let seenDetails = 0;

    return (
      <div className={cn(shell, className)}>
        {clusters.flatMap((cluster, ci) => {
          const block: ReactNode[] = [];
          if (cluster.anchorId && !cluster.sectionTitle) {
            block.push(
              <div
                key={`anchor-${cluster.anchorId}`}
                id={cluster.anchorId}
                className="scroll-mt-[var(--header)] h-0 w-full overflow-hidden"
                tabIndex={-1}
              />,
            );
          }
          if (cluster.sectionTitle) {
            block.push(
              <h3
                key={`h-${ci}`}
                id={clusterHeadingId(cluster)}
                className={cn(headingShell, cluster.anchorId && "scroll-mt-[var(--header)]")}
              >
                {cluster.sectionTitle}
              </h3>,
            );
          }
          cluster.items.forEach((item, i) => {
            seenDetails += 1;
            const body = renderAnswer(item, tone);
            const isLastGlobal = seenDetails === totalDetails;
            block.push(
              <details
                key={`${item.q}-${ci}-${i}`}
                name={groupName}
                className={cn("group border-b", rowBorder, isLastGlobal && "border-b-0")}
              >
                <summary className={summaryClass}>
                  <span className={qClass}>{item.q}</span>
                  {chevron}
                </summary>
                {body ? <div className={panelClass}>{body}</div> : null}
              </details>,
            );
          });
          return block;
        })}
      </div>
    );
  }

  return (
    <div className={cn(shell, className)}>
      {resolvedItems.map((item, i) => {
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

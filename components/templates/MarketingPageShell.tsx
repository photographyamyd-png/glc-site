import type { ReactNode } from "react";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

type MarketingPageShellProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  /** Short line under H1 (optional if you only use `ledeSplit`). */
  lede?: string;
  /**
   * Two-column measure at `lg` (copy volume pivot): header cluster + 6+6 split per design-system §1.
   * Renders below `lede` when both are set.
   */
  ledeSplit?: { primary: string; secondary: string };
  children?: ReactNode;
};

export function MarketingPageShell({ id, eyebrow, title, lede, ledeSplit, children }: MarketingPageShellProps) {
  return (
    <section id={id} className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.05),transparent_52%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.07] sm:opacity-[0.09]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="relative overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-6 sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-full w-72 opacity-[0.1]"
            style={{
              backgroundImage: "url('/motifs/split-angle.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right center",
            }}
            aria-hidden
          />
          <p className="label-overline relative z-10">{eyebrow}</p>
          <h1 className="relative z-10 mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="relative z-10 mt-5 max-w-3xl text-base leading-relaxed text-ink-muted">{lede}</p>
          ) : null}
          {ledeSplit ? (
            <div
              className={`relative z-10 grid gap-6 text-ink lg:grid-cols-12 lg:gap-12 ${lede ? "mt-6 sm:mt-7" : "mt-5"}`}
            >
              <p className="max-w-[min(100%,42rem)] border-l-4 border-[color:var(--y)] pl-5 text-[15px] leading-[1.72] lg:col-span-6">
                {ledeSplit.primary}
              </p>
              <p className="max-w-[min(100%,42rem)] text-[15px] leading-[1.72] text-[color:var(--text-600)] lg:col-span-6">
                {ledeSplit.secondary}
              </p>
            </div>
          ) : null}
          <div className="relative z-10 mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

type MarketingPageShellProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  children?: ReactNode;
};

export function MarketingPageShell({ id, eyebrow, title, lede, children }: MarketingPageShellProps) {
  return (
    <section id={id} className="section-major band-light scroll-mt-[var(--header)]">
      <div className="mx-auto max-w-[min(100%,var(--max))]">
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
          <p className="relative z-10 mt-5 max-w-3xl text-base leading-relaxed text-ink-muted">{lede}</p>
          <div className="relative z-10 mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

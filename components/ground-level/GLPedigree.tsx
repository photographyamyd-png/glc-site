import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

/**
 * Trust / proof on dark field + band rhythm — see GLC_GLOBAL_DESIGN_SYSTEM.md Part 12 and Part 5 (D5).
 */
export function GLPedigree() {
  const stamps = [
    { label: "GC schedules", sub: "Production windows" },
    { label: "Developers", sub: "Pad & export" },
    { label: "Industrial", sub: "Yard & access" },
    { label: "Civil tie-ins", sub: "Drainage & ledge" },
  ];

  return (
    <section
      className="section-major band-dark relative overflow-hidden"
      aria-labelledby="pedigree-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--y)_5%,transparent),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-left" mode="on-dark" className="opacity-[0.08]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p id="pedigree-heading" className="label-overline-on-dark mb-2">
          Proof pattern — Workhorse
        </p>
        <div className="max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-5">
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
            Boutique polish is not the signal here—owned iron, dispatch discipline, and drawings marked up against
            field reality. Pedigree reads as{" "}
            <strong className="font-semibold text-[color:var(--y)]">reliability under load</strong>, not awards walls.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stamps.map((s) => (
            <li
              key={s.label}
              className="border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] px-5 py-6 text-center text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[color:var(--g200)] bg-[color:var(--g100)]">
                <span className="font-serif text-sm font-semibold uppercase tracking-widest text-[color:var(--y)]" aria-hidden>
                  ✓
                </span>
              </div>
              <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-ink-muted">{s.sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

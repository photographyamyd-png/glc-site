/**
 * Logo-derived L-corner punctuation — see GLC_GLOBAL_DESIGN_SYSTEM.md Part 8 (motif traceability / logo fragments).
 */
export function StructuralRule() {
  return (
    <div
      className="mx-auto flex w-full max-w-[min(100%,var(--max))] items-center gap-4 bg-canvas px-7 py-12 sm:gap-6 sm:px-10 sm:py-16 lg:px-20"
      aria-hidden
    >
      <span className="relative box-border h-4 w-4 shrink-0 border-l-2 border-t-2 border-structural/50">
        <span className="absolute bottom-0 right-0 h-2 w-px bg-[color:var(--y)]" />
      </span>
      <span className="h-px min-w-[3rem] flex-1 bg-gradient-to-r from-structural/45 via-structural/20 to-transparent" />
      <span className="h-2 w-2 shrink-0 bg-structural/40" />
      <span className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-transparent via-structural/18 to-transparent" />
      <span className="relative box-border h-4 w-4 shrink-0 border-b-2 border-r-2 border-structural/50">
        <span className="absolute left-0 top-0 h-px w-2 bg-[color:var(--y)]" />
      </span>
    </div>
  );
}

export function FragmentBullet({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative mt-1.5 inline-flex h-3 w-3 shrink-0 border-2 border-structural/60 bg-canvas ${className}`}
      aria-hidden
    >
      <span className="absolute bottom-0 left-0 h-2 w-px bg-[color:var(--y)]" />
      <span className="absolute bottom-0 left-0 h-px w-2 bg-[color:var(--y)]" />
    </span>
  );
}

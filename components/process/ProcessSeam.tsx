/**
 * Tonal seam between V7 sections — see design-system.mdc §2 (Chromatic Transition / no Visual Flatline).
 *
 * Variants:
 *   - "thin": 1px hairline seam (`var(--g200)`-ish), used between most band swaps.
 *   - "yellow-rail": 4px yellow rail with subtle top/bottom gradient halos — used at the strongest pivots.
 *   - "shard-interlock": 8px clipped angular SVG seam — used between the shard-heavy bands (Industries → Offers, Offers → Showcase).
 *
 * Decorative only. `aria-hidden`. Server-safe leaf, no client JS.
 */
type ProcessSeamProps = {
  variant?: "thin" | "yellow-rail" | "shard-interlock";
  /** Optional label exposed via `data-seam-label` for sandbox debugging. */
  label?: string;
};

export function ProcessSeam({ variant = "thin", label }: ProcessSeamProps) {
  if (variant === "thin") {
    return (
      <div
        aria-hidden
        data-seam="thin"
        data-seam-label={label}
        className="relative h-px w-full bg-[color:var(--g200,rgb(255_255_255/0.12))]"
      />
    );
  }

  if (variant === "yellow-rail") {
    return (
      <div
        aria-hidden
        data-seam="yellow-rail"
        data-seam-label={label}
        className="relative h-1 w-full bg-[color:var(--y)]"
      >
        <span className="pointer-events-none absolute inset-x-0 -top-2 h-2 bg-[linear-gradient(180deg,transparent,rgb(242_183_5/0.18))]" />
        <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-2 bg-[linear-gradient(0deg,transparent,rgb(242_183_5/0.18))]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      data-seam="shard-interlock"
      data-seam-label={label}
      className="relative h-2 w-full overflow-hidden bg-[color:var(--ink,#1e1c1a)]"
    >
      <svg
        viewBox="0 0 1440 16"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <polygon points="0,0 80,16 200,2 360,16 540,4 720,16 920,2 1120,16 1300,4 1440,16 1440,0" fill="#0b0d0c" />
        <polygon points="0,16 120,4 280,16 440,2 620,16 820,4 1020,16 1200,2 1360,16 1440,12 1440,16" fill="#f2b705" opacity="0.85" />
        <polygon points="200,16 360,8 540,16 720,10 920,16 1120,8 1300,16 1440,14 1440,16 0,16" fill="#1e1c1a" opacity="0.55" />
      </svg>
    </div>
  );
}

/**
 * Rugged shard framing applied to "Offers" cards — design-system.mdc §7 (interactive DNA / framing textures).
 *
 * Sits absolutely inside a positioned card. Top-right corner clipped polygon plus a thin yellow shard accent.
 * Decorative only. `aria-hidden`.
 */
type ShardFrameProps = {
  className?: string;
  /** Tone tunes the corner clip to read on light vs. dark card surfaces. */
  tone?: "on-light" | "on-dark";
};

export function ShardFrame({ className = "", tone = "on-light" }: ShardFrameProps) {
  const accent = tone === "on-light" ? "#1e1c1a" : "#ffffff";
  const accentOpacity = tone === "on-light" ? 0.85 : 0.65;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <svg
        viewBox="0 0 280 200"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {/* Top-right rugged shard clip — reads as a chipped corner over the card. */}
        <polygon
          points="280,0 220,0 240,18 210,28 264,38 232,52 280,46"
          fill={accent}
          fillOpacity={accentOpacity}
        />
        {/* Yellow accent sliver immediately under the clip. */}
        <polygon
          points="280,52 232,52 280,60"
          fill="#f2b705"
          fillOpacity={0.95}
        />
        {/* Bottom-left micro shard for compositional balance (very low contrast). */}
        <polygon
          points="0,200 28,182 0,176"
          fill={accent}
          fillOpacity={accentOpacity * 0.45}
        />
      </svg>
    </div>
  );
}

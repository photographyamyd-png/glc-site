/**
 * Machined micro-shard texture — sits BEHIND the hero stat cluster (and any §8 hero-metric data clusters)
 * to give the data row a faint industrial grain. Design-system.mdc §7 (machined depth tokens) + §4 (tertiary motifs).
 *
 * Decorative only. `aria-hidden`. Server-safe leaf.
 */
type ShardDataTextureProps = {
  className?: string;
  /** Color tone used for the inner shards; defaults to yellow core for stat clusters. */
  tone?: "yellow" | "white" | "ink";
  opacity?: number;
};

const TONES = {
  yellow: "#f2b705",
  white: "#ffffff",
  ink: "#1e1c1a",
} as const;

export function ShardDataTexture({
  className = "",
  tone = "yellow",
  opacity = 0.12,
}: ShardDataTextureProps) {
  const fill = TONES[tone];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <g fill={fill}>
          <polygon points="0,90 180,38 360,52 560,30 800,46 800,60 600,84 400,72 200,108 0,118" opacity="0.55" />
          <polygon points="0,72 220,28 440,40 660,20 800,32 800,40 620,62 420,52 220,86 0,98" opacity="0.32" />
          <polygon points="120,108 320,72 520,84 720,60 800,68 800,80 600,104 380,96 180,120 0,118" opacity="0.22" />
        </g>
      </svg>
    </div>
  );
}

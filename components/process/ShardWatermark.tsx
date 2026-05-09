/**
 * Atmospheric shard watermark — Z-layer −1, ~5% opacity. Decorative only.
 *
 * Per design-system.mdc §1 (atmosphere, -1) and §4 (mandatory asset, tertiary motif),
 * this never replaces a primary raster anchor. Use only on dark bands behind glass / panels.
 */
type ShardWatermarkProps = {
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  opacity?: number;
  className?: string;
};

const PLACEMENTS = {
  "top-left": "top-0 left-0 -translate-x-[10%] -translate-y-[8%]",
  "top-right": "top-0 right-0 translate-x-[10%] -translate-y-[8%] rotate-[18deg]",
  "bottom-left": "bottom-0 left-0 -translate-x-[14%] translate-y-[12%] -rotate-[12deg]",
  "bottom-right": "bottom-0 right-0 translate-x-[12%] translate-y-[14%] rotate-[6deg]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
} as const;

export function ShardWatermark({
  placement = "bottom-right",
  opacity = 0.05,
  className = "",
}: ShardWatermarkProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 select-none ${PLACEMENTS[placement]} ${className}`}
      style={{ opacity }}
    >
      <svg
        width="640"
        height="320"
        viewBox="0 0 640 320"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[min(72vw,640px)] max-w-none"
      >
        <g fill="currentColor">
          <polygon points="0,210 220,128 540,150 640,138 640,170 380,232 80,256" />
          <polygon points="120,232 360,162 560,178 640,168 640,196 420,250 180,278" opacity="0.55" />
          <polygon points="220,260 480,196 640,208 640,224 480,272 280,300" opacity="0.32" />
          <polygon points="0,176 180,108 360,124 480,114 480,124 300,158 120,194" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

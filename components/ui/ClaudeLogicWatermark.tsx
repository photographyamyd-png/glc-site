const variants = {
  "bottom-right": "bottom-0 right-0 translate-x-[12%] translate-y-[18%]",
  "top-left": "left-0 top-0 -translate-x-[18%] -translate-y-[12%]",
  "top-right": "right-0 top-0 translate-x-[14%] -translate-y-[10%]",
  "bottom-left": "bottom-0 left-0 -translate-x-[10%] translate-y-[14%]",
  "center-right": "right-0 top-1/2 -translate-y-1/2 translate-x-[20%]",
  "center-left": "left-0 top-1/2 -translate-y-1/2 -translate-x-[16%]",
} as const;

export type ClaudeWatermarkPlacement = keyof typeof variants;

type Props = {
  placement?: ClaudeWatermarkPlacement;
  className?: string;
  mode?: "default" | "on-dark" | "on-light";
};

/**
 * Low-opacity Claude Logic mark — see GLC_GLOBAL_DESIGN_SYSTEM.md Part 8 (M1–M4 motif caps). Never competes with CTAs.
 * Prefer SVG; PNG fallback not used here.
 */
export function ClaudeLogicWatermark({ placement = "bottom-right", className = "", mode = "default" }: Props) {
  const modeClass =
    mode === "on-dark"
      ? "opacity-[0.18] mix-blend-screen [filter:brightness(1.5)_saturate(1.1)] sm:opacity-[0.24]"
      : "opacity-[0.07] sm:opacity-[0.09]";

  return (
    <div
      className={`pointer-events-none absolute z-0 select-none ${modeClass} ${variants[placement]} ${className}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG watermark */}
      <img src="/images/Logos/claude-logic-mark.svg" alt="" width={320} height={320} className="h-auto w-[min(52vw,280px)] max-w-none sm:w-[min(40vw,320px)]" />
    </div>
  );
}

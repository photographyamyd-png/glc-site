/**
 * Bible §X: oversized low-opacity logo-derived SVG anchors.
 * Geometry: structural frame + accent L (5% accent as watermark punctuation only).
 */
export function LogoWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="miter"
        className="text-ink"
        d="M48 48h220v92H132v120h136v92H48V48z"
        opacity="0.12"
      />
      <path
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="miter"
        className="text-[color:var(--y)]"
        d="M268 32v156h104v-88"
        opacity="0.08"
      />
    </svg>
  );
}

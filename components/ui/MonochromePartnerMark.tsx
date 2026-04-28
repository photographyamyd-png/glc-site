/**
 * §III — Third-party partner / credential marks: monochrome, 40% effective ink, logo-derived corner fragment (§X).
 */
type MonochromePartnerMarkProps = {
  label: string;
  className?: string;
};

export function MonochromePartnerMark({ label, className = "" }: MonochromePartnerMarkProps) {
  return (
    <div
      className={`relative flex h-16 w-full min-w-[140px] flex-col items-center justify-center border border-ink/25 bg-white/30 px-2 ${className}`}
      role="img"
      aria-label={label}
      style={{ opacity: 0.4, filter: "grayscale(1)" }}
    >
      <svg
        className="absolute left-2 top-2 h-3 w-3 text-ink"
        viewBox="0 0 8 8"
        aria-hidden
      >
        <path d="M0 8V0h8v2H2v6H0z" fill="currentColor" fillOpacity="0.4" />
      </svg>
      <span className="px-2 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-ink">
        {label}
      </span>
    </div>
  );
}

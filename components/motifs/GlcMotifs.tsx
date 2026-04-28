import React from "react";

/** Hero Full Sweep — use at 100vw in hero sections */
export const MotifHeroSweep = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,240 650,220 1200,240 1200,400 0,400" fill="#111111" />
    <polygon points="0,260 280,200 500,210 350,260" fill="#1E1E1E" />
    <polygon points="120,280 420,210 850,230 1200,260 1200,300 500,320" fill="#F2B705" />
    <polygon points="300,260 700,220 1200,235 1200,250 600,290" fill="#C99804" />
    <polygon points="450,250 900,220 1200,225 1200,240 700,270" fill="#2A2A2A" />
    <polygon points="500,290 950,250 1200,255 1200,265 700,310" fill="#FFFFFF" opacity="0.10" />
  </svg>
);

/** Hero Reversed — mirrored for right-to-left flow */
export const MotifHeroReversed = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <g transform="scale(-1,1) translate(-1200,0)">
      <polygon points="0,300 300,240 650,220 1200,240 1200,400 0,400" fill="#111111" />
      <polygon points="120,280 420,210 850,230 1200,260 1200,300 500,320" fill="#F2B705" />
      <polygon points="450,250 900,220 1200,225 1200,240 700,270" fill="#2A2A2A" />
    </g>
  </svg>
);

/** Corner 45° Solid — top-right / bottom-left use */
export const MotifCorner45 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#111111" />
    <polygon points="0,300 220,80 300,120 300,300" fill="#F2B705" />
    <polygon points="160,200 300,140 300,180 200,260" fill="#C99804" />
  </svg>
);

/** Corner 45° Watermark — subtle version for backgrounds */
export const MotifCorner45Wm = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#F2B705" opacity="0.08" />
    <polygon points="100,300 300,100 300,300" fill="#111111" opacity="0.05" />
  </svg>
);

/** Corner 60° Solid — more aggressive angle */
export const MotifCorner60 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 260,0 300,300" fill="#F2B705" />
    <polygon points="0,300 180,120 300,180 300,300" fill="#111111" />
    <polygon points="120,200 280,150 300,165 300,230 200,280" fill="#C99804" opacity="0.80" />
  </svg>
);

/** Corner 60° Watermark */
export const MotifCorner60Wm = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 260,0 300,300" fill="#F2B705" opacity="0.08" />
    <polygon points="80,300 280,60 300,300" fill="#111111" opacity="0.04" />
  </svg>
);

/** Corner 90° Solid — square geometry */
export const MotifCorner90 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#111111" />
    <polygon points="0,300 300,50 300,100 30,300" fill="#F2B705" />
    <polygon points="0,300 300,80 300,110 60,300" fill="#C99804" opacity="0.60" />
    <polygon points="200,120 300,100 300,130 240,280" fill="#FFFFFF" opacity="0.10" />
  </svg>
);

/** Corner 90° Watermark */
export const MotifCorner90Wm = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#F2B705" opacity="0.08" />
  </svg>
);

/** Accent Strip — thin horizontal divider */
export const MotifAccentStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,80 300,40 1200,60 1200,120 0,120" fill="#F2B705" />
    <polygon points="200,70 700,35 1200,50 1200,60 500,110" fill="#C99804" opacity="0.50" />
  </svg>
);

/** Section Divider — between dark and light sections */
export const MotifSectionDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,120 400,80 1200,100 1200,200 0,200" fill="#111111" />
    <polygon points="200,140 700,90 1200,110 1200,130 400,180" fill="#F2B705" />
    <polygon points="400,130 900,95 1200,105 1200,115 600,160" fill="#C99804" opacity="0.60" />
  </svg>
);

/** Diagonal Strip — full-width band */
export const MotifDiagonalStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,160 1200,60 1200,100 0,200" fill="#F2B705" />
    <polygon points="0,170 1200,75 1200,90 0,190" fill="#C99804" opacity="0.50" />
  </svg>
);

/** Double-Layer 45° — stacked depth corner */
export const MotifDoubleLayer45 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#111111" />
    <polygon points="60,300 300,60 300,300" fill="#F2B705" />
    <polygon points="140,300 300,140 300,300" fill="#C99804" />
    <polygon points="200,300 300,200 300,300" fill="#FFFFFF" opacity="0.12" />
  </svg>
);

/** Double-Layer 45° Watermark */
export const MotifDoubleLayer45Wm = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,0 300,300" fill="#F2B705" opacity="0.08" />
    <polygon points="100,300 300,100 300,300" fill="#F2B705" opacity="0.05" />
  </svg>
);

/** Sharp Slice — thin aggressive diagonal */
export const MotifSharpSlice = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,280 290,10 300,20 10,300" fill="#F2B705" />
    <polygon points="0,290 295,20 300,30 5,300" fill="#C99804" opacity="0.50" />
  </svg>
);

/** Block + Slash — structured UI layout divider */
export const MotifBlockSlash = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="0" y="0" width="180" height="300" fill="#111111" />
    <polygon points="160,0 220,0 60,300 0,300" fill="#F2B705" />
    <rect x="200" y="0" width="200" height="300" fill="#1E1E1E" />
    <polygon points="200,0 260,0 100,300 40,300" fill="#C99804" opacity="0.40" />
  </svg>
);

/** Minimal Line Angle — super subtle accent */
export const MotifMinimalLine = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,250 400,150 400,165 0,265" fill="#F2B705" opacity="0.18" />
    <polygon points="0,265 400,170 400,180 0,275" fill="#FFFFFF" opacity="0.06" />
  </svg>
);

/** Inverted Corner — top-left placement */
export const MotifInvertedCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,0 300,0 0,300" fill="#111111" />
    <polygon points="0,0 300,0 0,220" fill="#F2B705" />
    <polygon points="0,0 240,0 0,160" fill="#C99804" />
    <polygon points="0,0 140,0 0,80" fill="#FFFFFF" opacity="0.10" />
  </svg>
);

/** Split Angle — dual direction, centre-seam layout */
export const MotifSplitAngle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 280,150 300,150 300,300" fill="#111111" />
    <polygon points="0,300 260,160 300,155 300,300" fill="#F2B705" opacity="0.90" />
    <polygon points="300,150 300,300 600,300 320,150" fill="#1E1E1E" />
    <polygon points="300,155 300,300 600,300 340,160" fill="#C99804" opacity="0.70" />
    <polygon points="290,145 310,145 310,300 290,300" fill="#F2B705" />
  </svg>
);

/** Parallax Layer — animated background (CSS keyframes) */
export const MotifParallaxLayer = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <style>{`
      .glc-l1 { animation: glcP1 12s ease-in-out infinite alternate; }
      .glc-l2 { animation: glcP2 16s ease-in-out infinite alternate-reverse; }
      .glc-l3 { animation: glcP3 20s ease-in-out infinite alternate; }
      @keyframes glcP1 { from { transform: translateX(0); } to { transform: translateX(40px); } }
      @keyframes glcP2 { from { transform: translateX(0); } to { transform: translateX(-30px); } }
      @keyframes glcP3 { from { transform: translateX(0); } to { transform: translateX(20px); } }
    `}</style>
    <polygon className="glc-l1" points="0,300 400,220 900,240 1200,260 1200,400 0,400" fill="#F2B705" opacity="0.12" />
    <polygon className="glc-l2" points="100,320 500,240 1000,260 1200,280 1200,400 0,400" fill="#111111" opacity="0.30" />
    <polygon className="glc-l3" points="200,310 700,250 1200,265 1200,300 400,380" fill="#C99804" opacity="0.08" />
  </svg>
);

/** Watermark Large — full-section background at 8% */
export const MotifWatermarkLarge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,300 300,240 1200,260 1200,400 0,400" fill="#F2B705" opacity="0.08" />
    <polygon points="200,280 700,230 1200,245 1200,270 500,330" fill="#111111" opacity="0.05" />
  </svg>
);

interface CardProps {
  children: React.ReactNode;
  corner?: "45" | "60" | "90" | "double";
  watermark?: boolean;
  className?: string;
}

/** GlcCard — dark card with corner motif accent */
export const GlcCard = ({ children, corner = "45", watermark = false, className = "" }: CardProps) => {
  const CornerMap = {
    "45": watermark ? MotifCorner45Wm : MotifCorner45,
    "60": watermark ? MotifCorner60Wm : MotifCorner60,
    "90": watermark ? MotifCorner90Wm : MotifCorner90,
    double: watermark ? MotifDoubleLayer45Wm : MotifDoubleLayer45,
  };
  const CornerMotif = CornerMap[corner];
  return (
    <div className={`relative overflow-hidden bg-[#111111] p-6 text-white ${className}`}>
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 select-none">
        <CornerMotif className="h-full w-full" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "dark";
}

/** GlcButton — yellow primary button with shard edge */
export const GlcButton = ({ children, onClick, className = "", variant = "primary" }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`relative overflow-hidden px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300
      ${
        variant === "primary"
          ? "bg-[#F2B705] text-[#111111] hover:bg-[#C99804]"
          : "border border-[#F2B705] bg-[#111111] text-[#F2B705] hover:bg-[#1E1E1E]"
      }
      ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <span className="pointer-events-none absolute right-0 top-0 h-full w-8 opacity-40">
      <MotifSharpSlice className="h-full w-auto" />
    </span>
  </button>
);

interface SectionProps {
  children: React.ReactNode;
  motif?: "sweep" | "watermark" | "parallax" | "divider" | "none";
  dark?: boolean;
  className?: string;
}

/** GlcSection — section wrapper with optional motif background */
export const GlcSection = ({ children, motif = "watermark", dark = true, className = "" }: SectionProps) => (
  <section className={`relative overflow-hidden py-20 ${dark ? "bg-[#111111] text-white" : "bg-white text-[#111111]"} ${className}`}>
    {motif === "sweep" ? (
      <div className="pointer-events-none absolute inset-0 select-none">
        <MotifHeroSweep className="h-full w-full object-cover" />
      </div>
    ) : null}
    {motif === "watermark" ? (
      <div className="pointer-events-none absolute inset-0 select-none">
        <MotifWatermarkLarge className="h-full w-full" />
      </div>
    ) : null}
    {motif === "parallax" ? (
      <div className="pointer-events-none absolute inset-0 select-none">
        <MotifParallaxLayer className="h-full w-full" />
      </div>
    ) : null}
    {motif === "divider" ? (
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none">
        <MotifAccentStrip className="w-full" />
      </div>
    ) : null}
    <div className="relative z-10 mx-auto max-w-6xl px-6">{children}</div>
  </section>
);

/** GlcHero — full hero section with layered sweep motif */
export const GlcHero = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative flex min-h-[80vh] items-center overflow-hidden bg-[#111111] text-white ${className}`}>
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none">
      <MotifHeroSweep className="w-full" />
    </div>
    <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 select-none opacity-30">
      <MotifCorner45Wm className="h-full w-full" />
    </div>
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">{children}</div>
  </section>
);

/** GlcDivider — standalone angled section break */
export const GlcDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <MotifSectionDivider className="w-full" />
  </div>
);

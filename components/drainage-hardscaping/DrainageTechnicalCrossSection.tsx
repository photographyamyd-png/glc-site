import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { SectionEyebrow, YellowRule } from "@/components/drainage-hardscaping/primitives";
import { DRAINAGE_CROSS_SECTION } from "@/lib/site/drainage-hardscaping-landing-content";

const y = "#f2b705";
const ink = "#1e1c1a";
const stone = "#c4bfb8";
const soil = "#8a847c";

/**
 * Inline SVG schematic — illustrative trench section (not survey-accurate).
 */
export function DrainageTechnicalCrossSection() {
  const labels = DRAINAGE_CROSS_SECTION.layerLabels;
  return (
    <section
      className="section-major band-light relative isolate scroll-mt-[var(--header)] overflow-hidden border-t-4 border-[color:var(--y)] px-0"
      aria-labelledby="drainage-cross-section-h2"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_0%,rgb(242_183_5/0.07),transparent_50%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" mode="default" className="z-0 opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
        <div className="bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.96)] p-6 shadow-[0_16px_48px_rgb(0_0_0/0.07)] backdrop-blur-sm sm:p-8">
          <YellowRule className="mb-6 sm:mb-8" />
          <SectionEyebrow text={DRAINAGE_CROSS_SECTION.eyebrow} band="light" />
          <h2
            id="drainage-cross-section-h2"
            className="mt-[var(--s7)] max-w-3xl font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.2vw,46px)]"
          >
            {DRAINAGE_CROSS_SECTION.h2}
          </h2>
          <p className="mt-4 max-w-prose font-sans text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.72]">
            {DRAINAGE_CROSS_SECTION.caption}
          </p>
        </div>

        <figure className="mt-10 overflow-hidden border border-[color:var(--g200)] bg-[color:rgb(250_249_247)] shadow-[0_12px_40px_rgb(0_0_0/0.06)]">
          <figcaption id="drainage-cross-figcap" className="sr-only">
            Illustrative drainage trench cross-section with finish surface, bedding, perforated carrier pipe, clear stone envelope, filter layer, and native soils.
          </figcaption>
          <svg
            viewBox="0 0 960 420"
            className="h-auto w-full max-h-[min(52vh,520px)]"
            role="img"
            aria-labelledby="drainage-cross-figcap"
          >
            <defs>
              <pattern id="drain-soil-hatch" patternUnits="userSpaceOnUse" width="8" height="8">
                <path d="M0 8 L8 0 M-2 2 L2 -2 M6 10 L10 6" stroke={soil} strokeWidth="0.5" opacity="0.5" />
              </pattern>
              <pattern id="drain-stone" patternUnits="userSpaceOnUse" width="6" height="6">
                <circle cx="1.5" cy="2" r="0.9" fill={stone} opacity="0.55" />
                <circle cx="4" cy="4.5" r="0.7" fill={stone} opacity="0.45" />
                <circle cx="3" cy="1" r="0.6" fill={stone} opacity="0.4" />
              </pattern>
            </defs>
            <rect width="960" height="420" fill="rgb(252 252 251)" />
            {/* Native soil */}
            <rect x="0" y="280" width="960" height="140" fill="url(#drain-soil-hatch)" opacity="0.35" />
            <rect x="0" y="280" width="960" height="140" fill={soil} opacity="0.12" />
            {/* Geotextile */}
            <path d="M 280 278 L 680 278 L 675 282 L 285 282 Z" fill="none" stroke={ink} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.55" />
            {/* Stone envelope */}
            <path d="M 300 276 L 660 276 L 640 120 L 320 120 Z" fill="url(#drain-stone)" opacity="0.9" />
            <path d="M 300 276 L 660 276 L 640 120 L 320 120 Z" fill="none" stroke={ink} strokeWidth="1.5" opacity="0.25" />
            {/* Bedding */}
            <path d="M 330 200 L 630 200 L 618 135 L 342 135 Z" fill={stone} opacity="0.35" />
            <path d="M 330 200 L 630 200 L 618 135 L 342 135 Z" fill="none" stroke={ink} strokeWidth="1" opacity="0.3" />
            {/* Pipe */}
            <rect x="360" y="158" width="240" height="36" rx="6" fill={ink} opacity="0.88" />
            <circle cx="390" cy="176" r="5" fill="rgb(40 42 41)" opacity="0.5" />
            <circle cx="430" cy="176" r="5" fill="rgb(40 42 41)" opacity="0.5" />
            <circle cx="470" cy="176" r="5" fill="rgb(40 42 41)" opacity="0.5" />
            <circle cx="510" cy="176" r="5" fill="rgb(40 42 41)" opacity="0.5" />
            <circle cx="550" cy="176" r="5" fill="rgb(40 42 41)" opacity="0.5" />
            {/* Finish / surface */}
            <rect x="260" y="88" width="440" height="22" fill={ink} opacity="0.15" />
            <line x1="240" y1="110" x2="720" y2="110" stroke={y} strokeWidth="3" opacity="0.85" />
            {/* Leader labels */}
            <text x="730" y="102" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[0]}
            </text>
            <text x="730" y="148" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[1]}
            </text>
            <text x="730" y="176" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[2]}
            </text>
            <text x="730" y="220" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[3]}
            </text>
            <text x="730" y="268" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[4]}
            </text>
            <text x="730" y="348" fill={ink} fontSize="13" fontFamily="var(--font-source-sans),system-ui,sans-serif" fontWeight="600">
              {labels[5]}
            </text>
          </svg>
        </figure>
      </div>
    </section>
  );
}

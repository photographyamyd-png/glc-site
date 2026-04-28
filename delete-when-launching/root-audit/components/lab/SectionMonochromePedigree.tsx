import { MonochromePartnerMark } from "@/components/ui/MonochromePartnerMark";
import { DECISION_MATRIX } from "@/lib/design-dna";

const partnerLabels = [
  "Ironclad Surety",
  "Metro Builders Exchange",
  "AGC Member Firm",
  "OSHA Partner",
  "LEED AP Staff",
  "Local 46 Affiliation",
];

/**
 * §III Trust + §VII variety.
 * MOBILE_ALTER_EGO: horizontal snap strip; desktop = staggered grid.
 */
export function SectionMonochromePedigree() {
  return (
    <section id="pedigree" className="section-major scroll-mt-24 bg-canvas px-4 sm:px-8">
      <div className="view-reveal mx-auto max-w-[min(100%,1200px)]">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b-2 border-black/10 pb-12 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl border-l-4 border-structural/35 pl-6 sm:pl-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/55">
              §III Decision matrix
            </p>
            <p className="mt-6 text-sm font-semibold leading-[1.6] text-ink sm:text-base">
              Intent: <span className="uppercase tracking-wide">{DECISION_MATRIX.intent}</span>
              <span className="mx-2 text-ink-muted">·</span>
              {DECISION_MATRIX.proofPattern}
            </p>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight">
              Trust — monochrome stamps
            </h2>
            <p className="mt-6 max-w-md font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
              Third-party marks only: grayscale plates, 40% opacity — no full-color sponsor
              wall.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
            Pedigree / boutique / workhorse
          </p>
        </div>

        <div className="snap-strip flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible lg:grid-cols-6">
          {partnerLabels.map((name, i) => (
            <div
              key={name}
              className={`shrink-0 sm:min-w-0 ${
                i % 3 === 1 ? "sm:translate-y-2 lg:translate-y-0" : ""
              } ${i % 3 === 2 ? "sm:-translate-y-2 lg:translate-y-3" : ""} ${
                i % 3 === 0 ? "lg:-translate-y-1" : ""
              }`}
            >
              <MonochromePartnerMark label={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { DRAINAGE_FUNNEL_PAIN } from "@/lib/site/drainage-hardscaping-landing-content";

/**
 * Dark-to-light pain band: headline on authority field, body in raised light panel (split columns).
 */
export function DrainagePainGradientSection() {
  return (
    <section
      className="section-major relative scroll-mt-[var(--header)] overflow-hidden border-b border-[color:var(--g200)] bg-gradient-to-b from-[rgb(10_12_11)] from-0% via-[rgb(18_19_18)] via-[42%] to-[rgb(252_252_251)] to-100% px-0"
      aria-labelledby="drainage-funnel-pain-h2"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_12%,rgb(242_183_5/0.12),transparent_55%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" mode="on-dark" className="z-0 opacity-[0.1]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pb-12 pt-14 sm:px-6 sm:pb-14 sm:pt-16 lg:px-10">
        <div className="max-w-4xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-white">{DRAINAGE_FUNNEL_PAIN.eyebrow}</p>
          <h2
            id="drainage-funnel-pain-h2"
            className="mt-4 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-[clamp(36px,3.5vw,52px)]"
          >
            {DRAINAGE_FUNNEL_PAIN.h2}
          </h2>
        </div>

        <div className="mt-10 rounded-sm border border-[color:var(--g200)] bg-[rgb(255_255_255/0.97)] p-6 shadow-[0_20px_56px_rgb(0_0_0/0.12)] backdrop-blur-md sm:mt-12 sm:p-8 lg:mt-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <p className="border-l-4 border-[color:var(--y)]/80 pl-5 font-sans text-[15px] leading-[1.72] text-ink sm:text-base">
              {DRAINAGE_FUNNEL_PAIN.colLeft}
            </p>
            <p className="font-sans text-[15px] leading-[1.72] text-ink sm:text-base lg:border-l lg:border-[color:var(--g200)] lg:pl-8">
              {DRAINAGE_FUNNEL_PAIN.colRight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/glc-dna/ui/reveal";
import type { CoverageProps } from "@/lib/glc-dna/types";

/** Dark-band coverage — Lane B; ids namespaced so Lane A `#coverage` stays canonical for nav anchors. */
export function CoverageSection(props: CoverageProps) {
  return (
    <section
      id="glc-dna-coverage"
      className="coverage section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="glc-dna-coverage-heading"
    >
      {/* STRUCTURE: top accent + radial glow (see .coverage__fx-* in glc-base.css) */}
      <span aria-hidden className="coverage__fx-radial" />
      <span aria-hidden className="coverage__fx-topbar" />
      <div className="coverage__inner relative z-[1]">
        <div className="coverage__label-col">
          <div className="coverage__intro">
            <Reveal className="eyebrow coverage__eyebrow">{props.eyebrow}</Reveal>
            <Reveal delayClass="reveal--delay-1">
              <h2 id="glc-dna-coverage-heading" className="coverage__heading">
                {props.headingBefore}
                <em>{props.headingEmphasis}</em>
                {props.headingAfter}
              </h2>
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <p className="coverage__body">{props.body}</p>
            </Reveal>
          </div>
        </div>
        <Reveal delayClass="reveal--delay-2" className="coverage__areas">
          {props.areas.map((a) => (
            <div key={a.name} className="coverage__area">
              <div className="coverage__area-dot" aria-hidden />
              <div className="coverage__area-text">
                <div className="coverage__area-name">{a.name}</div>
                <div className="coverage__area-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

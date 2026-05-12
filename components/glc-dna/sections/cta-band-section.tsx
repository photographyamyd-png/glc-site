import { IconArrow } from "@/components/glc-dna/ui/icon-arrow";
import type { CtaBandProps } from "@/lib/glc-dna/types";

export function CtaBandSection({
  sectionId = "cta-band",
  headingId = "cta-heading",
  ...props
}: CtaBandProps) {
  return (
    <section id={sectionId} aria-labelledby={headingId} data-accent-family="cta" data-accent-zone="conversion-endband">
      {/* Structural diagonal accent */}
      <div className="cta3__diag" aria-hidden data-motif-id="cta3__diag" />

      <div className="cta3__inner">

        {/* LEFT — copy block */}
        <div className="cta3__copy">
          <div className="cta3__eyebrow-bar" aria-hidden>
            <span className="cta3__eyebrow">{props.eyebrow}</span>
            <span className="cta3__eyebrow-line" data-motif-id="cta3__eyebrow-line" />
          </div>
          <h2 id={headingId} className="cta3__heading">
            {props.headingLine1}
            <br />
            {props.headingLine2}
            <em>{props.headingEmphasis}</em>
          </h2>
          <p className="cta3__sub">{props.sub}</p>
        </div>

        {/* RIGHT — phone + email actions */}
        <div className="cta3__actions">
          <div className="cta3__phone-wrap">
            <div className="cta3__phone-label">{props.phoneLabel}</div>
            <a href={props.phoneHref} className="cta3__phone">
              {props.phone}
            </a>
          </div>
          <div className="cta3__divider" aria-hidden data-motif-id="cta3__divider" />
          <a href={props.emailCta.href} className="btn-ghost cta3__email-btn">
            {props.emailCta.label}
            <IconArrow />
          </a>
        </div>

      </div>

      {/* Bottom brand bar */}
      <div className="cta3__bottom-bar" aria-hidden data-motif-id="cta3__bottom-bar" />
    </section>
  );
}

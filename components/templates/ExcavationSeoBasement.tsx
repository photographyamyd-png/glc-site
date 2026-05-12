import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import type { ServiceDetailCopy } from "@/lib/site/copy";
import { HOME_COPY } from "@/lib/site/copy";
import { cn } from "@/lib/utils";

type Props = {
  detail: ServiceDetailCopy;
};

function stripOuterQuotes(s: string): string {
  let t = s.trim();
  if (t.startsWith('"') && t.endsWith('"')) t = t.slice(1, -1);
  return t.trim();
}

const shell =
  "mx-auto w-full max-w-[52rem] overflow-hidden rounded-sm border border-l-[3px] border-[color:var(--g200)] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.98)] shadow-[0_10px_36px_rgb(0_0_0/0.06)]";

const rowBorder = "border-[color:var(--g200)]";

const summaryClass =
  "flex w-full min-h-[48px] cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white text-ink";

const qClass = "min-w-0 flex-1 font-sans text-sm font-medium leading-snug tracking-tight";

const panelClass = "border-t border-[color:var(--g200)] bg-[rgb(250_250_250/0.75)] px-5 py-4";

const bodyProse = "text-sm leading-relaxed text-[color:var(--text-600)] sm:text-[15px]";

const chevron = (
  <>
    <span
      className="mt-0.5 shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:hidden"
      aria-hidden
    >
      +
    </span>
    <span
      className="mt-0.5 hidden shrink-0 font-label text-[11px] font-semibold tracking-[0.14em] text-[color:var(--y)] group-open:inline"
      aria-hidden
    >
      −
    </span>
  </>
);

function SeoDetailBlock({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className={cn("group border-b last:border-b-0", rowBorder)}>
      <summary className={summaryClass}>
        <span className={qClass}>{summary}</span>
        {chevron}
      </summary>
      <div className={panelClass}>{children}</div>
    </details>
  );
}

/**
 * Long-form SEO copy for excavation — native details/summary, full DOM for crawlers.
 */
export function ExcavationSeoBasement({ detail }: Props) {
  const testimonials = HOME_COPY.testimonials;
  const quoteEntries = testimonials.quotes.slice(0, 3).map((q) => ({
    quote: stripOuterQuotes(q.quote),
    by: q.by,
  }));

  const h = detail.hero;

  return (
    <section
      id="technical-specifications-faq"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="excavation-seo-basement-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.02),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 12% 30%, rgb(242 183 5 / 0.18) 0%, transparent 58%)",
        }}
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-right" className="opacity-[0.1]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink-muted">Technical reference</p>
          <h2
            id="excavation-seo-basement-heading"
            className="mt-3 font-serif text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-3xl"
          >
            Technical Specifications & Project FAQ
          </h2>
        </div>

        <div className={cn(shell, "mt-8 sm:mt-10")}>
          <SeoDetailBlock summary="Commercial site preparation overview">
            <div className={cn("space-y-3", bodyProse)}>
              {detail.intro.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </SeoDetailBlock>

          <SeoDetailBlock summary={detail.trust.heading}>
            <div className={cn("space-y-3", bodyProse)}>
              {detail.trust.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </SeoDetailBlock>

          <SeoDetailBlock summary={"Serving contractors, developers & homeowners"}>
            <div className={cn("space-y-3", bodyProse)}>
              <p>{h.body[0]}</p>
              <p>{h.body[1]}</p>
            </div>
          </SeoDetailBlock>

          <SeoDetailBlock summary={"Coverage, permitting & local requirements"}>
            <p className={bodyProse}>{h.body[2]}</p>
          </SeoDetailBlock>

          <SeoDetailBlock summary="Project types &amp; workmanship standards">
            <div className={cn("space-y-3", bodyProse)}>
              <p>{h.body[3]}</p>
              <p>{h.body[4]}</p>
            </div>
          </SeoDetailBlock>

          <SeoDetailBlock summary="Deliverables checklist">
            <ul className={cn("list-disc space-y-2 pl-5", bodyProse)}>
              {detail.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </SeoDetailBlock>

          <SeoDetailBlock summary={detail.process.heading}>
            <p className={cn("mb-4 eyebrow text-ink-muted")}>{detail.process.eyebrow}</p>
            <ol className="list-decimal space-y-4 pl-5 marker:font-semibold marker:text-[color:var(--y)]">
              {detail.process.steps.map((step) => (
                <li key={step.id} className={cn("pl-1", bodyProse)}>
                  <span className="font-sans font-semibold text-ink">{step.title}</span>
                  <span className="mt-1 block font-normal">{step.body}</span>
                </li>
              ))}
            </ol>
          </SeoDetailBlock>

          {detail.subServices.map((sub) => (
            <SeoDetailBlock key={sub.id} summary={sub.heading}>
              <div className={cn("space-y-3", bodyProse)}>
                {sub.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                <p>{sub.closing}</p>
              </div>
            </SeoDetailBlock>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <GlcFaqDetailsGrid
            groupName="excavation-seo-basement-faq"
            tone="light"
            items={detail.faq}
          />
        </div>

        <div className={cn(shell, "mt-8")}>
          <SeoDetailBlock summary="Client feedback">
            <div className={cn("space-y-6", bodyProse)}>
              <p className="eyebrow text-ink-muted">{testimonials.eyebrow}</p>
              <p className="font-sans font-semibold text-ink">{testimonials.heading}</p>
              <p>{testimonials.sub}</p>
              <ul className="space-y-5 border-t border-[color:var(--g200)] pt-5">
                {quoteEntries.map((entry) => (
                  <li key={entry.by}>
                    <p>&ldquo;{entry.quote}&rdquo;</p>
                    <p className="mt-2 eyebrow text-ink-muted">{entry.by}</p>
                  </li>
                ))}
              </ul>
            </div>
          </SeoDetailBlock>
        </div>
      </div>
    </section>
  );
}

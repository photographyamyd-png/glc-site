import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

type LegalPageTemplateProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPageTemplate({ title, intro, sections }: LegalPageTemplateProps) {
  return (
    <article className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.05),transparent_52%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-right" mode="default" className="z-[1] opacity-[0.07] sm:opacity-[0.09]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,900px)] px-4 sm:px-6">
        <h1 className="font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-4 text-[15px] leading-[1.72] text-ink-muted sm:text-base">{intro}</p>
        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section key={section.heading} className="border border-[color:var(--g200)] bg-white p-5">
              <h2 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

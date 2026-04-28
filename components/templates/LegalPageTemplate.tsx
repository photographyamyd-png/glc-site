type LegalPageTemplateProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPageTemplate({ title, intro, sections }: LegalPageTemplateProps) {
  return (
    <article className="section-major band-light scroll-mt-[var(--header)]">
      <div className="mx-auto max-w-[min(100%,900px)]">
        <h1 className="font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{intro}</p>
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

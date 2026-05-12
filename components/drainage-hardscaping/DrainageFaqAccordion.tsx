import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { YellowRule } from "@/components/drainage-hardscaping/primitives";

export type DrainageFaqItem = { readonly q: string; readonly aParas: readonly string[] };

export function DrainageFaqAccordion({
  items,
  headingId,
  eyebrow,
  h2,
}: {
  items: readonly DrainageFaqItem[];
  headingId: string;
  eyebrow: string;
  h2: string;
}) {
  const gridItems = items.map((item) => ({
    q: item.q,
    answerParas: item.aParas,
  }));

  return (
    <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl rounded-sm border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.88)] p-5 shadow-[0_12px_40px_rgb(0_0_0/0.08)] backdrop-blur-sm sm:p-8">
        <YellowRule className="mb-6" width="2px" />
        <p className="eyebrow text-ink">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-[var(--s7)] font-serif text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-3xl"
        >
          {h2}
        </h2>
      </div>
      <GlcFaqDetailsGrid className="mt-8 sm:mt-10" groupName="drainage-faq" tone="light" items={gridItems} />
    </div>
  );
}

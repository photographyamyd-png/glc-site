import Link from "next/link";
import { ServiceCardIcon } from "@/components/glc-dna/sections/service-card-icon";
import { IconArrowSmall } from "@/components/glc-dna/ui/icon-arrow";
import type { MegaMenuCard } from "@/lib/glc-dna/types";

export function ExcavationMetricsServiceCardLight({ card }: { card: MegaMenuCard }) {
  return (
    <Link
      href={`/services/${card.slug}/`}
      className="group relative flex min-h-[280px] flex-col overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-8 shadow-[0_8px_28px_rgb(0_0_0/0.06)] transition-[border-color,box-shadow] hover:border-[color:var(--y)]/45 hover:shadow-[0_12px_36px_rgb(0_0_0/0.1)]"
    >
      <span
        className="pointer-events-none absolute right-5 top-4 font-serif text-[64px] font-bold leading-none tracking-[-0.04em] text-ink/[0.07] transition-colors group-hover:text-ink/[0.11]"
        aria-hidden
      >
        {card.num}
      </span>
      <ServiceCardIcon slug={card.slug} className="relative z-[1] mb-5 h-10 w-10 shrink-0 text-[color:var(--y)]" />
      <h3 className="relative z-[1] font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
        {card.gridTitle.map((line, i) => (
          <span key={`${card.slug}-line-${i}`}>
            {i > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </h3>
      <p className="relative z-[1] mt-3 flex-1 text-[13px] leading-relaxed text-ink-muted sm:text-sm">{card.gridDescription}</p>
      <span className="relative z-[1] mt-6 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[color:var(--y)] transition-[gap] group-hover:gap-3">
        Learn More
        <IconArrowSmall />
      </span>
    </Link>
  );
}

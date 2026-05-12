import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_AGITATOR } from "@/lib/ground-level/home-copy-lab-content";
import { getServiceImage } from "@/lib/site/service-images";
import { cn } from "@/lib/utils";

const a = COPY_LAB_AGITATOR;
const fieldImage = getServiceImage("site-preparation-grading");

const cardLayout = [
  "relative z-[3] motion-reduce:transform-none lg:absolute lg:left-[2%] lg:top-4 lg:w-[min(100%,380px)] lg:-rotate-[1.5deg]",
  "relative z-[2] motion-reduce:transform-none lg:absolute lg:left-[28%] lg:top-[52%] lg:w-[min(100%,360px)] lg:translate-y-[-50%] lg:rotate-[1deg]",
  "relative z-[1] motion-reduce:transform-none lg:absolute lg:right-[2%] lg:top-10 lg:w-[min(100%,360px)] lg:-rotate-[0.75deg]",
] as const;

export function HomeAgitatorSection() {
  return (
    <section
      id="agitator"
      className="section-major band-light-drift relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="agitator-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden>
        <Image
          src={fieldImage.src}
          alt=""
          fill
          className="object-cover mix-blend-multiply"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(252_251_249/0.92)] via-[rgb(248_247_245/0.88)] to-[rgb(245_243_240/0.95)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/50 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{a.eyebrow}</p>
          <h2
            id="agitator-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {a.heading}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.72] text-ink sm:text-base">{a.lede}</p>
        </div>

        <div className="relative mt-14 min-h-0 lg:mt-16 lg:min-h-[400px]">
          <ul className="flex list-none flex-col gap-6 lg:block lg:gap-0">
            {a.cards.map((card, i) => (
              <li
                key={card.title}
                className={cn(
                  "bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-white/95 p-6 shadow-[0_18px_48px_rgb(0_0_0/0.12)] backdrop-blur-sm transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:p-8",
                  "hover:-translate-y-1 hover:shadow-[0_26px_56px_rgb(0_0_0/0.16)] motion-reduce:hover:transform-none",
                  cardLayout[i] ?? "",
                )}
              >
                <p className="eyebrow text-[color:var(--y)]">{card.accent}</p>
                <h3 className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

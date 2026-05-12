import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_AGITATOR } from "@/lib/ground-level/home-copy-lab-content";
import { getServiceImage } from "@/lib/site/service-images";
import { cn } from "@/lib/utils";

const a = COPY_LAB_AGITATOR;
const fieldImage = getServiceImage("site-preparation-grading");

export function HomeAgitatorSection() {
  return (
    <section
      id="agitator"
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden text-white view-reveal"
      aria-labelledby="agitator-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={fieldImage.src}
          alt=""
          fill
          className="object-cover opacity-[0.22]"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[rgb(30_28_26/0.82)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgb(0_0_0/0.45),transparent_42%,rgb(242_183_5/0.07))]"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[color:var(--y)]" aria-hidden />
      <ClaudeLogicWatermark placement="center-right" className="opacity-[0.1]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:col-span-5">
            <p className="eyebrow text-white">{a.eyebrow}</p>
            <h2
              id="agitator-heading"
              className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              {a.heading}
            </h2>
            <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">{a.lede}</p>
          </div>

          <figure className="relative isolate overflow-hidden border border-white/10 bg-[rgb(10_12_11/0.35)] shadow-[0_24px_64px_rgb(0_0_0/0.45)] backdrop-blur-sm lg:col-span-7">
            <div className="relative aspect-[4/3] min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[280px]">
              <Image
                src={fieldImage.src}
                alt={a.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.5),transparent_55%)]"
                aria-hidden
              />
            </div>
          </figure>
        </div>

        <ul className="mt-14 list-none space-y-6 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
          {a.cards.map((card) => (
            <li
              key={card.title}
              className={cn(
                "border border-white/10 border-l-[4px] border-l-[color:var(--y)] bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_64px_rgb(0_0_0/0.35)] backdrop-blur-md transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:p-8",
                "hover:-translate-y-1 hover:shadow-[0_28px_72px_rgb(0_0_0/0.45)] motion-reduce:hover:transform-none",
              )}
            >
              <p className="eyebrow text-[color:var(--y)]">{card.accent}</p>
              <h3 className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.04em] text-white sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.72] text-white/90 sm:text-base">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

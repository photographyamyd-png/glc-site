import { GlcFaqDetailsGrid } from "@/components/faq/GlcFaqDetailsGrid";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";
import { getServiceImage, getServiceImageRasterPlaceholder } from "@/lib/site/service-images";

const FAQ_NAME = "home-faq";

const FAQ_FIELD_SLUG = "excavation-site-preparation" as const;
const fieldImage = getServiceImage(FAQ_FIELD_SLUG);
const fieldImageFallback = getServiceImageRasterPlaceholder(FAQ_FIELD_SLUG);

export function HomeSeoFaqSection() {
  const f = COPY_LAB_HOME_FAQ;

  return (
    <section
      id="home-faq"
      className="section-major band-light-drift relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <ServiceLabImg
          src={fieldImage.src}
          fallbackSrc={fieldImageFallback}
          alt=""
          sizes="100vw"
          className="h-full w-full object-cover opacity-[0.1] sm:opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.94),rgb(252_251_249/0.88))]" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_42%,rgb(242_183_5/0.045))]" />
      </div>

      <ClaudeLogicWatermark placement="bottom-right" mode="on-light" className="z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,var(--max-bleed))]">
        <div className="mx-auto max-w-[min(100%,var(--max))] rounded-sm border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:max-w-4xl lg:pt-10">
          <p className="hero-eyebrow label-overline-on-dark mb-0">{f.eyebrow}</p>
          <h2
            id="home-faq-heading"
            className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            {f.heading}
          </h2>
          <div className="hero-caption mt-[var(--s7)] max-w-xl">
            <ExpandableCopy text={f.intro} className="text-[15px] leading-relaxed text-white/90 sm:text-base" />
          </div>
          <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/40" aria-hidden />

          <div className="mt-8">
            <GlcFaqDetailsGrid
              clusters={[...f.groups]}
              embedded
              groupName={FAQ_NAME}
              tone="dark"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

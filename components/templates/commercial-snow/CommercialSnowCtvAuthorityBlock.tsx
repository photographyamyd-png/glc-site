import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CommercialSnowLazyYouTube } from "@/components/templates/commercial-snow/CommercialSnowLazyYouTube";
import { ctvSnowFeature } from "@/lib/site/ctv-snow-feature";
import { SNOW_HUB_CTV_POSTER } from "@/lib/site/snow-removal-media";

export function CommercialSnowCtvAuthorityBlock() {
  const iframeTitle = `${ctvSnowFeature.segmentTitle} — ${ctvSnowFeature.ctvBodyParagraphs[0]}`;

  return (
    <section
      id="chapter-authority"
      className="section-major relative scroll-mt-[var(--header)] overflow-hidden border-t border-white/10 bg-[rgb(12_14_13)] view-reveal"
      aria-labelledby="commercial-snow-authority-h2"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgb(242_183_5/0.06),transparent_48%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgb(255_255_255/0.04),transparent_55%)]" aria-hidden />
      <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.12]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[color:var(--y)]">{ctvSnowFeature.eyebrow}</p>
          <h2 id="commercial-snow-authority-h2" className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            {ctvSnowFeature.authorityH2}
          </h2>
          <p className="mt-[var(--s7)] text-[15px] leading-[1.72] text-white/90 sm:text-base">{ctvSnowFeature.authoritySub}</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <div
            className="pointer-events-none absolute -left-2 -top-2 z-20 rounded-sm border border-[color:var(--y)]/80 bg-[rgb(10_12_11/0.92)] px-3 py-2 shadow-lg backdrop-blur-md sm:left-0 sm:top-3"
            aria-hidden
          >
            <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]">Featured on</p>
            <p className="font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-white">CTV News</p>
          </div>

          <div id="ctv-news-barrie" className="relative z-10 mx-auto flex justify-center">
            <CommercialSnowLazyYouTube
              embedSrc={ctvSnowFeature.segmentEmbedSrc}
              posterSrc={SNOW_HUB_CTV_POSTER.src}
              posterAlt={SNOW_HUB_CTV_POSTER.alt}
              iframeTitle={iframeTitle}
            />
          </div>

          <div className="relative z-10 mx-auto mt-0 flex max-w-4xl flex-wrap items-center justify-between gap-4 border border-[color:var(--g200)] bg-white px-4 py-3 sm:px-6">
            <div className="flex min-h-[44px] flex-wrap items-center gap-4">
              <span className="font-serif text-lg font-bold uppercase tracking-[0.08em] text-ink sm:text-xl" aria-hidden>
                CTV
              </span>
              <span className="hidden h-8 w-px bg-[color:var(--g200)] sm:block" aria-hidden />
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink sm:text-base">{ctvSnowFeature.asFeaturedOnLabel}</p>
            </div>
            {ctvSnowFeature.mediaBarPartnerSrcs.length ? (
              <div className="flex flex-wrap items-center gap-4">
                {ctvSnowFeature.mediaBarPartnerSrcs.map((src) => (
                  <Image key={src} src={src} alt="" width={120} height={40} className="h-8 w-auto object-contain" />
                ))}
              </div>
            ) : null}
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="font-sans text-[15px] font-medium italic leading-relaxed text-white/90 border-l-[3px] border-[color:var(--y)] pl-4 text-left sm:text-base">
              {ctvSnowFeature.ctvBodyParagraphs[0]}
            </p>
            <p className="mt-2 text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-white/55">{ctvSnowFeature.ctvBodyParagraphs[1]}</p>
            <p className="mt-4 text-[13px] leading-snug text-white/75">
              <span className="font-semibold text-white">Source — </span>
              <Link
                href={ctvSnowFeature.ctvArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--y)] underline-offset-2 hover:underline"
              >
                CTV News Barrie: full segment and article
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

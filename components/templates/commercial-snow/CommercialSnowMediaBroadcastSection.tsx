import { ctvSnowFeature } from "@/lib/site/ctv-snow-feature";
import { SNOW_HUB_FIELD_VIDEOS } from "@/lib/site/snow-removal-media";

/**
 * CTV + field MP4 proof — **broadcast-style** layout (no tabs, no `glc-snow-ctv` card).
 * Section title/lede live in `CommercialSnowPage` above this shell. Deep link: `#ctv-news-barrie`.
 */
export function CommercialSnowMediaBroadcastSection() {
  const iframeTitle = `${ctvSnowFeature.segmentTitle} — ${ctvSnowFeature.ctvBodyParagraphs[0]}`;

  return (
    <div
      id="ctv-news-barrie"
      className="relative overflow-hidden rounded-sm border border-[color:var(--g200)] bg-[rgb(10_12_11)] text-white shadow-[0_28px_80px_rgb(0_0_0/0.18)] ring-1 ring-black/15"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgb(242_183_5/0.08),transparent_45%)] opacity-90"
        aria-hidden
      />
      <div className="relative z-10">
        <div className="grid lg:grid-cols-12">
          {/* Editorial rail + cinema frame */}
          <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:col-span-5 lg:min-h-[min(52vw,440px)] lg:border-b-0 lg:border-r lg:border-white/10">
            <div>
              <p className="eyebrow text-[color:var(--y)]">{ctvSnowFeature.eyebrow}</p>
              <h3 className="mt-2 font-serif text-lg font-bold uppercase leading-snug tracking-[0.04em] text-white sm:text-xl">
                {ctvSnowFeature.heading}
              </h3>
              <h4 className="mt-4 max-w-[40ch] font-serif text-base font-bold uppercase leading-snug tracking-[0.04em] text-white/95 sm:text-lg">
                {ctvSnowFeature.segmentTitle}
              </h4>
              <p className="mt-4 max-w-[48ch] border-l-[3px] border-[color:var(--y)] pl-4 font-sans text-[15px] font-medium italic leading-relaxed text-white/90">
                {ctvSnowFeature.ctvBodyParagraphs[0]}
              </p>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-white/55">
                {ctvSnowFeature.ctvBodyParagraphs[1]}
              </p>
            </div>
            <p className="mt-8 text-[13px] leading-snug text-white/80 lg:mt-10">
              <span className="font-semibold text-white">Source — </span>
              <a
                href={ctvSnowFeature.ctvArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--y)] underline-offset-2 hover:underline"
              >
                CTV News Barrie: full segment and article
              </a>
            </p>
          </div>

          {/* Cinema frame */}
          <div className="relative min-h-[220px] bg-black lg:col-span-7 lg:min-h-[min(52vw,440px)]">
            <iframe
              title={iframeTitle}
              src={ctvSnowFeature.segmentEmbedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        {/* Field footage — horizontal rail (scroll on small / wide) */}
        {SNOW_HUB_FIELD_VIDEOS.length ? (
          <div className="border-t border-white/10 bg-[rgb(8_10_9)] px-4 py-8 sm:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
              <div className="shrink-0 lg:max-w-xs lg:pt-1">
                <p className="eyebrow text-[color:var(--y)]">Field footage</p>
                <p className="mt-2 font-serif text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                  On-site video
                </p>
                <p className="mt-3 text-[15px] leading-[1.72] text-white/75">
                  Local MP4 clips from Barrie and Simcoe County winter operations — manual play, no autoplay.
                </p>
              </div>
              <ul className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:grid lg:max-w-none lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
                {SNOW_HUB_FIELD_VIDEOS.map((v) => (
                  <li
                    key={v.src}
                    className="w-[min(100%,320px)] shrink-0 snap-start border border-white/12 bg-[rgb(12_14_13)] p-3 sm:w-[min(100%,360px)] lg:w-auto lg:min-w-0"
                  >
                    <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-white">{v.title}</p>
                    {v.description ? (
                      <p className="mt-2 text-[12px] leading-snug text-white/60">{v.description}</p>
                    ) : null}
                    <div className="relative mt-3 aspect-video overflow-hidden border border-white/10 bg-black">
                      <video
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        poster={v.posterSrc}
                        aria-label={v.title}
                      >
                        <source src={v.src} type="video/mp4" />
                      </video>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

import { SNOW_HUB_FIELD_VIDEOS } from "@/lib/site/snow-removal-media";

/** Field MP4 rail — manual play, no autoplay. */
export function CommercialSnowFieldVideoRail() {
  if (!SNOW_HUB_FIELD_VIDEOS.length) return null;

  return (
    <div className="border border-[color:var(--g200)] bg-[color:rgb(30_28_26/0.03)] p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
        <div className="shrink-0 lg:max-w-xs lg:pt-1">
          <p className="eyebrow text-ink-muted">Field footage</p>
          <p className="mt-2 font-serif text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">On-site video</p>
          <p className="mt-3 text-[15px] leading-[1.72] text-ink-muted">
            Local MP4 clips from Barrie and Simcoe County winter operations — manual play, no autoplay.
          </p>
        </div>
        <ul className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:grid lg:max-w-none lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {SNOW_HUB_FIELD_VIDEOS.map((v) => (
            <li
              key={v.src}
              className="w-[min(100%,320px)] shrink-0 snap-start border border-[color:var(--g200)] bg-white p-3 sm:w-[min(100%,360px)] lg:w-auto lg:min-w-0"
            >
              <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink">{v.title}</p>
              {v.description ? <p className="mt-2 text-[12px] leading-snug text-ink-muted">{v.description}</p> : null}
              <div className="relative mt-3 aspect-video overflow-hidden border border-[color:var(--g200)] bg-[rgb(10_12_11)]">
                <video className="h-full w-full object-cover" controls playsInline preload="metadata" poster={v.posterSrc} aria-label={v.title}>
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

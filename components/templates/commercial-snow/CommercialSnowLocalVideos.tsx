import { SNOW_HUB_FIELD_VIDEOS } from "@/lib/site/snow-removal-media";

export function CommercialSnowLocalVideos() {
  if (!SNOW_HUB_FIELD_VIDEOS.length) return null;

  return (
    <div className="mt-10 border-t border-[color:var(--g200)] pt-8">
      <p className="eyebrow text-[color:var(--y)]">Field footage</p>
      <h3 className="mt-2 font-serif text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
        On-site video — Ground Level Contracting
      </h3>
      <p className="mt-3 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">
        Local clips from our Barrie and Simcoe County winter operations. Use controls to play — no autoplay.
      </p>
      <ul className="mt-8 grid list-none gap-6 sm:grid-cols-2">
        {SNOW_HUB_FIELD_VIDEOS.map((v) => (
          <li key={v.src} className="border border-[color:var(--g200)] bg-white p-3 shadow-[inset_0_1px_0_rgb(242_183_5/0.2)]">
            <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-ink">{v.title}</p>
            {v.description ? <p className="mt-2 text-[13px] leading-snug text-[color:var(--text-600)]">{v.description}</p> : null}
            <div className="relative mt-3 aspect-video overflow-hidden border border-[color:var(--g200)] bg-[color:var(--ink-deep)]">
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
  );
}

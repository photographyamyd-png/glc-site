import { ctvSnowFeature } from "@/lib/site/ctv-snow-feature";

export function CtvSnowFeature() {
  const iframeTitle = `${ctvSnowFeature.segmentTitle} — ${ctvSnowFeature.ctvBodyParagraphs[0]}`;

  return (
    <section className="glc-snow-ctv" id="ctv-news-barrie" aria-labelledby="ctv-heading">
      <div className="glc-snow-ctv__inner">
        <p className="eyebrow mb-3 text-[color:var(--y)]">{ctvSnowFeature.eyebrow}</p>

        <h2 id="ctv-heading" className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          {ctvSnowFeature.heading}
        </h2>

        <h3 className="mt-2 max-w-[40ch] font-serif text-xl font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-2xl">
          {ctvSnowFeature.segmentTitle}
        </h3>

        <div className="glc-snow-ctv__body">
          <p className="mt-3 max-w-[48ch] border-l-[3px] border-[color:var(--y)] pl-4 font-sans text-[clamp(1.05rem,1.6vw,1.2rem)] font-medium italic leading-snug text-ink">
            {ctvSnowFeature.ctvBodyParagraphs[0]}
          </p>
          <p className="mt-2 text-[13px] font-semibold tracking-[0.05em] text-[color:var(--text-600)]">
            {ctvSnowFeature.ctvBodyParagraphs[1]}
          </p>
        </div>

        <div className="glc-snow-ctv__frame">
          <iframe
            title={iframeTitle}
            src={ctvSnowFeature.segmentEmbedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <p className="glc-snow-ctv__note">
          <span className="font-semibold text-ink">Source — </span>
          <a href={ctvSnowFeature.ctvArticleUrl} target="_blank" rel="noopener noreferrer">
            CTV News Barrie: full segment and article
          </a>
        </p>
      </div>
    </section>
  );
}

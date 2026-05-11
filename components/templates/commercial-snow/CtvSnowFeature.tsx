import { ctvSnowFeature } from "@/lib/site/ctv-snow-feature";

export function CtvSnowFeature() {
  const iframeTitle = `${ctvSnowFeature.segmentTitle} — ${ctvSnowFeature.ctvBodyParagraphs[0]}`;

  return (
    <section className="glc-snow-ctv" id="ctv-news-barrie" aria-labelledby="ctv-heading">
      <div className="glc-snow-ctv__inner">
        <p className="glc-snow-ctv__eyebrow">{ctvSnowFeature.eyebrow}</p>

        <h2 id="ctv-heading" className="glc-snow-ctv__title">
          {ctvSnowFeature.heading}
        </h2>

        <h3 className="glc-snow-ctv__segment-title">{ctvSnowFeature.segmentTitle}</h3>

        <div className="glc-snow-ctv__body">
          <p className="glc-snow-ctv__subtitle">{ctvSnowFeature.ctvBodyParagraphs[0]}</p>
          <p className="glc-snow-ctv__published">{ctvSnowFeature.ctvBodyParagraphs[1]}</p>
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
          <span className="glc-snow-ctv__note-label">Source — </span>
          <a href={ctvSnowFeature.ctvArticleUrl} target="_blank" rel="noopener noreferrer">
            CTV News Barrie: full segment and article
          </a>
        </p>
      </div>
    </section>
  );
}

"use client";

import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";

type Ab3PhotoProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
};

/** Dark media panel raster + scrim for `.ab3__media` (GLWhoWeServe / DNA about). */
export function Ab3Photo({ src, fallbackSrc, alt }: Ab3PhotoProps) {
  return (
    <div className="ab3__photo">
      <ServiceLabImg
        src={src}
        fallbackSrc={fallbackSrc}
        alt={alt}
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="ab3__photo-overlay" aria-hidden />
    </div>
  );
}

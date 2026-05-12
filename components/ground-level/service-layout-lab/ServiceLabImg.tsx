"use client";

import { useCallback, useState } from "react";

type Props = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
};

/** Local `/images/*` may 404; swap to raster placeholder on error. */
export function ServiceLabImg({ src, fallbackSrc, alt, className }: Props) {
  const [current, setCurrent] = useState(src);
  const onError = useCallback(() => {
    setCurrent((prev) => (prev === fallbackSrc ? prev : fallbackSrc));
  }, [fallbackSrc]);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional onError fallback for missing local assets
    <img src={current} alt={alt} className={className} onError={onError} loading="lazy" decoding="async" />
  );
}

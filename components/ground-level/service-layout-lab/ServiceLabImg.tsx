"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  /** Responsive width hint for `next/image` when using `fill` (layout-dependent). */
  sizes?: string;
};

/** Local `/images/*` may 404; swap to raster placeholder on error. */
export function ServiceLabImg({
  src,
  fallbackSrc,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: Props) {
  const [current, setCurrent] = useState(src);
  const onError = useCallback(() => {
    setCurrent((prev) => (prev === fallbackSrc ? prev : fallbackSrc));
  }, [fallbackSrc]);

  return (
    <Image
      key={current}
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={onError}
    />
  );
}

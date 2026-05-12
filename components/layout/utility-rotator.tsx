"use client";

import { useEffect, useState } from "react";

type Props = {
  lines: string[];
};

export function UtilityRotator({ lines }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (lines.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % lines.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [lines.length]);

  return <span className="gl-header__utility-rotator">{lines[index % lines.length]}</span>;
}

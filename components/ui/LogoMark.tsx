"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
};

export function LogoMark({ className = "", priority }: LogoMarkProps) {
  const [accentPop, setAccentPop] = useState(false);

  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center ${className}`}
      onMouseEnter={() => setAccentPop(true)}
      onMouseLeave={() => setAccentPop(false)}
      onFocus={() => setAccentPop(true)}
      onBlur={() => setAccentPop(false)}
    >
      <span
        className={`pointer-events-none absolute -inset-1 transition-opacity duration-300 ${
          accentPop ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgb(199 120 26 / 0.35), rgb(44 74 56 / 0.12), transparent 65%)",
        }}
        aria-hidden
      />
      <Image
        src="/images/Logos/ground-level-mark.png"
        alt="Ground Level Contracting"
        width={160}
        height={160}
        priority={priority}
        unoptimized
        className="relative h-9 w-auto max-h-10 object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] sm:h-10"
      />
    </Link>
  );
}

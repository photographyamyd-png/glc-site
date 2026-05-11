import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  icon,
  title,
  body,
  paras,
  href,
  anchorLabel,
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  paras?: readonly string[];
  href: string;
  anchorLabel: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col border border-[color:var(--g200)] bg-white",
        "border-t-[4px] border-t-[color:var(--y)]",
        "p-5 transition-[transform,box-shadow] duration-200 ease-out sm:p-8",
        "hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      <div className="text-[color:var(--y)] [&_svg]:h-10 [&_svg]:w-10">{icon}</div>
      <h3 className="mt-3 font-serif text-xl font-bold uppercase tracking-[0.04em] text-ink sm:text-2xl">{title}</h3>
      {paras?.length ? (
        <div className="mt-3 space-y-3">
          {paras.map((p) => (
            <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.72]">
              {p}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.72]">{body}</p>
      )}
      <Link href={href} className="eyebrow mt-auto pt-6 text-[color:var(--y)]">
        {anchorLabel}
      </Link>
    </article>
  );
}

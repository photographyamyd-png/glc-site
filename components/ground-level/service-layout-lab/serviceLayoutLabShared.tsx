import type { ReactNode } from "react";

export function serviceTitleTone(title: string): ReactNode {
  const [left, right] = title.split("&");
  if (!right) return title;
  return (
    <>
      <span>{left.trim()} &</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

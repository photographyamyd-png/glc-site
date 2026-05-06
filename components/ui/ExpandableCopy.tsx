type ExpandableCopyProps = {
  text: string;
  previewSentences?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
};

function splitSentences(text: string) {
  return text
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ExpandableCopy({
  text,
  previewSentences = 2,
  className = "",
  moreLabel = "Read more",
  lessLabel = "Show less",
}: ExpandableCopyProps) {
  const sentences = splitSentences(text);
  if (sentences.length <= previewSentences) {
    return <p className={className}>{text}</p>;
  }

  const preview = sentences.slice(0, previewSentences).join(" ");
  const remainder = sentences.slice(previewSentences).join(" ");

  return (
    <details className="group">
      <summary className="list-none">
        <p className={className}>{preview}</p>
        <span className="mt-2 inline-block cursor-pointer font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4 group-open:hidden">
          {moreLabel}
        </span>
        <span className="mt-2 hidden cursor-pointer font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4 group-open:inline-block">
          {lessLabel}
        </span>
      </summary>
      <p className={`${className} mt-2`}>{remainder}</p>
    </details>
  );
}

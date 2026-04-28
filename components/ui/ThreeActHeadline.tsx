/**
 * GLC Three-Act Headline — ghost / anchor / eruption (Oswald).
 * Spec: clamp(58px, 8vw, 118px), lh 0.90, tracking -0.02em; weights 200 / 600 / 700 + opacities.
 */
type Props = {
  id?: string;
  line1: string;
  line2: string;
  line3: string;
  className?: string;
};

export function ThreeActHeadline({ id, line1, line2, line3, className = "" }: Props) {
  return (
    <h1 id={id} className={`three-act-headline font-serif uppercase ${className}`}>
      <span className="three-act-line1 hero-act block">{line1}</span>
      <span className="three-act-line2 hero-act block">{line2}</span>
      <span className="three-act-line3 hero-act block">{line3}</span>
    </h1>
  );
}

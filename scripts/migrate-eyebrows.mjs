import fs from "fs";
import path from "path";

const roots = ["app", "components", "docs"];
/** Longest / most specific first — generic patterns last */
const pairs = [
  [
    "font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted",
    "eyebrow text-ink-muted",
  ],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink", "eyebrow text-ink"],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55", "eyebrow text-white"],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/70", "eyebrow text-white"],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/75", "eyebrow text-white"],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/80", "eyebrow text-white"],
  ["font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white", "eyebrow text-white"],
  [
    "font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)]",
    "eyebrow text-[color:var(--y)]",
  ],
  ["font-label text-[11px] font-bold tracking-[0.14em] text-white/55", "eyebrow text-white"],
  ["font-label text-[11px] font-bold tracking-[0.16em] text-[var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[10px] uppercase tracking-[0.2em] text-white/55", "eyebrow text-white"],
  ["font-label text-[10px] uppercase tracking-[0.22em] text-white/65", "eyebrow text-white"],
  ["font-label text-[10px] uppercase tracking-[0.18em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[10px] uppercase tracking-[0.14em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[11px] uppercase tracking-[0.18em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[11px] uppercase tracking-[0.14em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[11px] uppercase tracking-[0.12em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[11px] uppercase tracking-[0.18em] text-white/85", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.18em] text-white/82", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.14em] text-white/90", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.16em] text-white/84", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.16em] text-white", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.14em] text-white", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.2em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  [
    "font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]",
    "eyebrow text-[color:var(--y)]",
  ],
  ["font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65", "eyebrow text-ink/65"],
  ["font-label text-[10px] font-semibold tabular-nums uppercase tracking-[0.16em] text-[color:var(--y)]", "eyebrow tabular-nums text-[color:var(--y)]"],
  ["font-label text-xs font-semibold uppercase tracking-[0.14em] text-ink/55", "eyebrow text-ink/55"],
  ["font-label text-xs font-semibold uppercase tracking-[0.14em] text-white/90", "eyebrow text-white"],
  [
    "font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]",
    "eyebrow text-[color:var(--y)]",
  ],
  ["font-label text-[11px] uppercase tracking-[0.16em] text-white", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.14em] text-white", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.1em] text-white", "eyebrow text-white"],
  ["font-label text-[11px] uppercase tracking-[0.16em]", "eyebrow text-ink"],
  ["font-label text-[11px] uppercase tracking-[0.14em]", "eyebrow text-ink"],
  ["font-label text-[11px] uppercase tracking-[0.12em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[10px] uppercase tracking-[0.16em] text-white/90", "eyebrow text-white"],
  ["font-label text-[10px] uppercase tracking-[0.16em] text-white", "eyebrow text-white"],
  [
    "font-label text-[10px] font-semibold uppercase leading-snug tracking-[0.14em]",
    "eyebrow leading-snug",
  ],
  [
    "font-label text-[10px] font-semibold uppercase tracking-[0.14em] transition-[background,color,box-shadow]",
    "eyebrow transition-[background,color,box-shadow]",
  ],
  [
    "font-label text-[10px] font-semibold uppercase tracking-[0.14em] transition-[background-color,color,border-color] duration-200",
    "eyebrow transition-[background-color,color,border-color] duration-200",
  ],
  [
    "font-label text-[11px] font-extrabold uppercase tracking-[0.11em] text-ink leading-[1.45]",
    "eyebrow font-extrabold tracking-[0.11em] text-ink leading-[1.45]",
  ],
  ["font-label text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-muted", "eyebrow font-extrabold tracking-[0.15em] text-ink-muted"],
  ["font-label text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink-muted", "eyebrow font-extrabold tracking-[0.18em] text-ink-muted"],
  ["font-label text-[10px] uppercase tracking-[0.2em] text-ink-muted", "eyebrow text-ink-muted"],
  ["font-label text-[11px] uppercase tracking-[0.2em] text-[color:var(--y)]", "eyebrow text-[color:var(--y)]"],
  ["font-label text-[10px] font-bold uppercase tracking-[0.18em] text-white/45", "eyebrow text-white"],
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.name === "node_modules" || e.name === ".next") continue;
    if (e.isDirectory()) walk(p, out);
    else if (e.isFile() && p.endsWith(".tsx")) out.push(p);
  }
  return out;
}

let filesTouched = 0;
for (const root of roots) {
  for (const file of walk(root)) {
    let s = fs.readFileSync(file, "utf8");
    const orig = s;
    for (const [a, b] of pairs) {
      if (s.includes(a)) s = s.split(a).join(b);
    }
    if (s !== orig) {
      fs.writeFileSync(file, s);
      filesTouched++;
    }
  }
}
console.log("migrate-eyebrows: updated", filesTouched, "files");

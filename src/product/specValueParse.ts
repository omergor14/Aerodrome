/** Numeric token: not immediately after a letter (avoids F9P, HX4, O2B). */
const NUM_RE = /(?<![A-Za-z])\d[\d,]*(?:\.\d+)?/g;

export type SpecValueSegment =
  | { kind: "text"; s: string }
  | { kind: "num"; raw: string; target: number; decimals: number };

export function parseSpecValue(value: string): SpecValueSegment[] {
  const segments: SpecValueSegment[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(NUM_RE.source, "g");
  while ((m = re.exec(value)) !== null) {
    if (m.index > last) {
      segments.push({ kind: "text", s: value.slice(last, m.index) });
    }
    const raw = m[0];
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = raw.includes(".")
      ? (raw.split(".")[1]?.replace(/,/g, "").length ?? 0)
      : 0;
    segments.push({ kind: "num", raw, target, decimals });
    last = m.index + raw.length;
  }
  if (last < value.length) {
    segments.push({ kind: "text", s: value.slice(last) });
  }
  return segments;
}

export function hasNumericTokens(value: string): boolean {
  const re = new RegExp(NUM_RE.source, "g");
  return re.test(value);
}

function formatSegment(n: number, raw: string, decimals: number): string {
  const hadComma = raw.includes(",");
  if (decimals > 0) {
    const s = n.toFixed(decimals);
    if (!hadComma) return s;
    const [intp, frac] = s.split(".");
    const grouped = intp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${grouped}.${frac}`;
  }
  const rounded = Math.round(n);
  if (!hadComma) return String(rounded);
  return rounded.toLocaleString("en-US");
}

/** progress 0..1 */
export function buildCountUpDisplay(
  segments: SpecValueSegment[],
  progress: number
): string {
  let out = "";
  for (const seg of segments) {
    if (seg.kind === "text") {
      out += seg.s;
      continue;
    }
    const t = seg.target * progress;
    out += formatSegment(t, seg.raw, seg.decimals);
  }
  return out;
}

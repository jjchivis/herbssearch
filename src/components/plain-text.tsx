import { Fragment, type ReactNode } from "react";
import { GLOSSARY, splitTechnical } from "@/lib/plain-language";

const TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const TERM_PATTERN = new RegExp(
  `\\b(${TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
  "i"
);

function glossaryKey(match: string) {
  return TERMS.find((t) => t.toLowerCase() === match.toLowerCase())!;
}

// Wraps each glossary term in `text` that isn't already in `used` with a
// tooltip definition, so a term is only explained the first time it appears.
function withGlossary(text: string, used: Set<string>): ReactNode {
  const out: ReactNode[] = [];
  let rest = text;
  while (rest) {
    const m = TERM_PATTERN.exec(rest);
    if (!m) break;
    const key = glossaryKey(m[0]);
    const before = rest.slice(0, m.index);
    rest = rest.slice(m.index + m[0].length);
    out.push(before);
    if (used.has(key)) {
      out.push(m[0]);
      continue;
    }
    used.add(key);
    out.push(
      <abbr
        key={out.length}
        title={GLOSSARY[key]}
        tabIndex={0}
        className="cursor-help underline decoration-dotted underline-offset-2"
      >
        {m[0]}
      </abbr>
    );
  }
  out.push(rest);
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

// Renders stored herb text: lines starting with "- " become a bullet list,
// other lines become paragraphs, and a trailing "Technical detail" section is
// shown as a small muted note. `after` (e.g. a citation link) is placed at the
// end of the plain-language part. Pass one shared `glossaryUsed` set to every
// PlainText on a page so each term gets a tooltip only on first use.
export function PlainText({
  text,
  after,
  glossaryUsed,
}: {
  text: string;
  after?: ReactNode;
  glossaryUsed?: Set<string>;
}) {
  const { plain, technical } = splitTechnical(text);
  const used = glossaryUsed ?? new Set<string>();
  const lines = plain.split("\n").filter((l) => l.trim());

  // Group lines into paragraphs and bullet lists first, so `after` can sit
  // inline at the end of a closing paragraph.
  const groups: { type: "p" | "ul"; lines: string[] }[] = [];
  for (const line of lines) {
    const type = line.startsWith("- ") ? "ul" : "p";
    const last = groups[groups.length - 1];
    if (type === "ul" && last?.type === "ul") last.lines.push(line.slice(2));
    else groups.push({ type, lines: [type === "ul" ? line.slice(2) : line] });
  }
  const endsWithParagraph = groups[groups.length - 1]?.type === "p";

  const blocks = groups.map((g, gi) =>
    g.type === "ul" ? (
      <ul key={gi} className="flex list-disc flex-col gap-1 pl-5">
        {g.lines.map((b, i) => (
          <li key={i}>{withGlossary(b, used)}</li>
        ))}
      </ul>
    ) : (
      <p key={gi}>
        {withGlossary(g.lines[0], used)}
        {gi === groups.length - 1 && after}
      </p>
    )
  );

  return (
    <div className="flex flex-col gap-2">
      {blocks}
      {after && !endsWithParagraph && <div className="-mt-1">{after}</div>}
      {technical && (
        <p className="text-xs leading-relaxed opacity-75">
          <span className="font-semibold">Technical detail:</span> {technical}
        </p>
      )}
    </div>
  );
}

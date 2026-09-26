// Checks herb content in the seed and populate scripts against the plain-language
// rules in docs/CONTENT_STYLE.md. Run with `npm run content:check`.
//
// Only visitor-facing fields are checked (summary, description, notes, uses,
// properties, cautions, nativeRange, partsUsed, habitat), and only the
// plain-language part: anything after "Technical detail:" may use exact terms.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const PRISMA_DIR = new URL("../prisma/", import.meta.url).pathname;
const FIELDS = ["summary", "description", "notes", "uses", "properties", "cautions", "nativeRange", "partsUsed", "habitat"];

// Marketing-style or overpromising phrases. Never allowed.
const BANNED = [
  /miracle/i,
  /cures? (everything|all)/i,
  /guaranteed/i,
  /100% safe/i,
  /works instantly/i,
  /the natural cure/i,
  /better than medicine/i,
  /\b(has|have|with|causes?) no side effects\b/i,
  /side[- ]effect[- ]free/i,
  /\bscientifically proven\b/i,
  /\bdetox(ify|ification)?\b/i,
];

// Technical terms that need a plain-language replacement (or should be moved to
// the "Technical detail" note). Suggested wording from the content brief.
const JARGON = {
  "anti-inflammatory": "may help reduce inflammation",
  antispasmodic: "may ease cramps",
  spasmolytic: "may ease cramps",
  carminative: "may help relieve gas and bloating",
  expectorant: "may help loosen mucus",
  diuretic: "may increase urination",
  // "sedatives" as a class of medicine is fine; "a mild sedative" as a property isn't.
  "sedative(?!s| or| and| medicine| drug)": "may make you feel sleepy or relaxed",
  anxiolytic: "may ease anxiety",
  analgesic: "may relieve pain",
  antipyretic: "may lower fever",
  emmenagogue: "to bring on menstruation",
  galactagogue: "to increase breast milk",
  abortifacient: "can cause miscarriage",
  teratogenic: "may cause birth defects",
  hepatotoxic: "damages the liver",
  nephrotoxic: "damages the kidneys",
  neurotoxic: "damages the nerves",
  hepatoprotective: "protects the liver",
  contraindicat: "a reason someone should avoid using it",
  "adverse effect": "side effect",
  "adverse event": "side effect",
  gastrointestinal: "digestive / stomach and gut",
  "topical application": "putting it on the skin",
  topically: "on the skin",
  "oral administration": "taking it by mouth",
  orally: "by mouth",
  aqueous: "water-based",
  "volatile oil": "essential oil",
  dyspepsia: "indigestion",
  flatulence: "gas",
  "in vitro": "in lab tests",
  preclinical: "lab and animal research",
  hypersensitivity: "allergy",
  pruritus: "itching",
  urticaria: "hives",
  "p ?[<=]": "(move statistics to Technical detail)",
  "95% CI": "(move statistics to Technical detail)",
};

function literals(src) {
  const out = [];
  const re = new RegExp(`\\b(${FIELDS.join("|")}):\\s*"((?:[^"\\\\\\n]|\\\\.)*)"`, "g");
  for (const m of src.matchAll(re)) {
    try {
      out.push({ field: m[1], text: JSON.parse(`"${m[2]}"`), line: src.slice(0, m.index).split("\n").length });
    } catch {}
  }
  return out;
}

const files = readdirSync(PRISMA_DIR).filter((f) => /^(seed|seed-taxonomy|populate-.*)\.ts$/.test(f));
let problems = 0;
for (const file of files) {
  const src = readFileSync(join(PRISMA_DIR, file), "utf8");
  for (const { field, text, line } of literals(src)) {
    const plain = text.split("\n\nTechnical detail: ")[0];
    const issues = [];
    for (const re of BANNED) if (re.test(plain)) issues.push(`banned phrase ${re}`);
    for (const [term, suggestion] of Object.entries(JARGON)) {
      const re = new RegExp(`\\b${term}`, "i");
      if (re.test(plain)) issues.push(`"${term.replace(/\(.*$/, "")}" → ${suggestion}`);
    }
    for (const sentence of plain.split(/(?<=[.!?])\s+|\n/)) {
      if (sentence.split(/\s+/).length > 45) issues.push(`long sentence (${sentence.split(/\s+/).length} words): split it`);
    }
    if (issues.length) {
      problems += issues.length;
      console.log(`prisma/${file}:${line} [${field}] ${plain.slice(0, 70)}…`);
      for (const i of issues) console.log(`    - ${i}`);
    }
  }
}
if (problems) {
  console.log(`\n${problems} issue(s). See docs/CONTENT_STYLE.md.`);
  process.exit(1);
}
console.log(`Content check passed (${files.length} files).`);

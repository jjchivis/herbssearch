# HerbSearch content style

Every herb page is written for an intelligent reader who has never studied herbs,
botany or medicine. Translate technical language into everyday words **without
changing what the source says**. This applies to all 20 current herbs and to every
herb added from now on.

> Scientific information people can actually understand is more useful than
> scientific information they cannot read.

Run `npm run content:check` after writing or editing any herb content.

## The rules

1. **Plain words first.** "May help relieve gas and bloating", not "carminative".
   See the word list below. If a technical term is genuinely useful, explain it in
   the same sentence, or rely on the glossary tooltip (see below).
2. **Never change the meaning.** Don't invent facts, exaggerate benefits, drop
   warnings, or turn uncertain evidence into fact. Keep hedges ("may", "limited
   evidence", "more research is needed") exactly as strong as the source's.
3. **Keep tradition, lab/animal research and human research separate.**
   - Traditional use: "Traditionally used for…", "Herbalists have used…". Never
     "This herb treats…".
   - Lab and animal research: say "In lab tests…" or "In mice…" so it can't be
     mistaken for human evidence.
   - Research in people: say how many people, what they took, what happened, and
     the study's limits.
4. **Keep every number that matters to a reader** (study size, dose, duration,
   percentages, safety limits). Move statistics (p-values, confidence intervals,
   effect sizes), enzyme or receptor names, assay names and original technical
   terms into a **Technical detail** note (below), so nothing is lost.
5. **Safety stays prominent and specific.** List the actual medicines, conditions
   and symptoms. Say when to see a doctor if the source says so. Don't add warnings
   the source doesn't support.
6. **No marketing or fear language.** Never: miracle, cures everything,
   guaranteed, 100% safe, works instantly, natural cure, better than medicine,
   "no side effects" as a promise, "scientifically proven" (unless it truly is),
   detox.
7. **Short and scannable.** Short sentences (the checker flags anything over 45
   words), one idea per paragraph, and bullet lists for three or more parallel items.
8. **Keep search terms.** Common name, scientific name, other names, traditional
   uses, preparations and relevant symptoms should all still appear naturally.
9. **Tone:** warm, calm, clear, respectful, evidence-aware. Not academic,
   promotional, alarming or condescending.
10. **Keep citations and the medical disclaimer.** Don't write new legal language.
    If a health section lacks a disclaimer, flag it for review.

## Text conventions the site understands

Herb text fields (evidence summaries, safety descriptions, tradition notes,
constituent notes) support three conventions, rendered by
`src/components/plain-text.tsx`:

- **Paragraphs:** separate lines with `\n`.
- **Bullets:** lines starting with `- ` become a bulleted list.
- **Technical detail:** end the text with `\n\nTechnical detail: …` for exact figures
  and terms. It shows as a small note under the plain-language text, and the
  content checker ignores it.

```ts
summary:
  "In one trial, 60 people with major depression who were already taking sertraline added a basil syrup or a placebo every night for 4 weeks. The basil group had much larger drops in anxiety and depression scores.\n\nTechnical detail: single-blind, randomized, placebo-controlled; 1100 mg extract per 5 mL; HAM-A and BDI, p < 0.001.",
```

**Glossary tooltips.** Terms listed in `GLOSSARY` in `src/lib/plain-language.ts`
(adaptogen, tincture, infusion, placebo, systematic review and others) get a
tooltip on their first use on a page. Add a term there when an unavoidable word
keeps coming up. **Plant families:** add new families to `FAMILY_COMMON_NAMES`
in the same file, so pages show e.g. "Lamiaceae, the mint family".

## Page structure

The herb page template (`src/app/herbs/[id]/page.tsx`) already arranges content in
this order, with plain headings:

1. Summary, plus an interaction alert if the herb has documented medicine interactions
2. **What is [herb]?**: plant family, parts used, where it grows, other names
3. **Traditionally used for** / **Traditionally described as** (tag lists from `uses` / `properties`)
4. **Traditions that use it**
5. **Safety**: interactions, who should avoid it, allergies, side effects, pregnancy, breastfeeding, dosage…
6. **What does the research say?**: Traditional use → Laboratory & animal research → Research in people
7. Sources and disclaimer

Write each field so it reads well under its heading. Page titles are generated as
`Name (Scientific name): Uses, Research & Safety`, adding "Drug Interactions" when
the herb has interaction records.

### Field-by-field

| Field | Write it as |
|---|---|
| `summary` (seed.ts) | 1–2 sentences: what it is, what it's traditionally used for. Also used on search cards and as the meta description. Mention a major safety issue if there is one. |
| `uses` | Comma-separated short tags, read as "Traditionally used for: …". e.g. `Sleep, Calming tea, Soothing skin`. No commas inside a tag. |
| `properties` | Comma-separated tags, read as "Traditionally described as: …". e.g. `May ease cramps, Antioxidant`. |
| `cautions` | One plain sentence: the single most important caution. |
| `partsUsed` / `nativeRange` | Plain phrases: "The dried seeds (botanically small fruits)", "Originally from southern Europe; now grown worldwide". |
| Evidence `TRADITIONAL` | Who used it and for what. Bullets for regional lists. The page adds "These are traditional uses, not proven treatments", so don't repeat it. |
| Evidence `PRECLINICAL` | Start with "In lab tests" / "In animal studies". The page adds the standard reminder that these don't prove effects in people. |
| Evidence `HUMAN_RESEARCH` | Number of people, what they took, for how long, the result in words, the limits. Statistics go in Technical detail. |
| Safety records | Direct, practical, second person where natural ("Don't use… if you…"). Name the medicines. |

## Word list

| Instead of | Write |
|---|---|
| anti-inflammatory | may help reduce inflammation |
| antioxidant activity | antioxidant activity (glossary explains it) or "helps protect cells from damage" |
| antispasmodic / spasmolytic | may ease cramps |
| carminative | may help relieve gas and bloating |
| expectorant | may help loosen mucus so it's easier to cough up |
| diuretic | may increase urination |
| sedative (as a property) | may make you feel sleepy or relaxed. "Sedatives (medicines that make you sleepy)" is fine for the drug class. |
| anxiolytic | may ease anxiety |
| analgesic | may relieve pain |
| antipyretic | may lower fever |
| emmenagogue | to bring on menstruation |
| galactagogue | to increase breast milk |
| abortifacient | can cause miscarriage |
| teratogenic | may cause birth defects |
| hepatotoxic / nephrotoxic / neurotoxic | damages the liver / kidneys / nerves |
| contraindicated | don't use if… / a reason to avoid it |
| adverse effects/events | side effects |
| drug interactions | ways it may affect medicines |
| gastrointestinal | digestive / stomach and gut |
| topical application | putting it on the skin |
| oral administration | taking it by mouth |
| aqueous extract | water-based extract |
| volatile oil | essential oil |
| dyspepsia / flatulence | indigestion / gas |
| in vitro | in lab tests |
| preclinical | lab and animal research |
| hypersensitivity | allergy |
| pruritus / urticaria | itching / hives |

## Symptom search

When writing symptom or body-system content, say "traditionally used for
headaches" or "some research has looked at this herb for headaches", never "relieves
headaches". If a symptom could signal something serious (chest pain, blood in the
urine, severe or lasting pain, depression), add a short line recommending
professional care.

## Adding a new herb: checklist

1. Add the herb's basic row to `prisma/seed.ts` (summary, uses, properties,
   cautions, `imageUrl`) and put its illustration in `public/herbs/<name>.jpg`.
2. Create `prisma/populate-<herb>.ts` as a data-only file that calls `run()` from
   `prisma/lib/populate-herb.ts` (see `populate-hawthorn.ts`). Every evidence and
   safety entry names the source it comes from.
3. Research from verified sources first; write the content in plain language from
   the start, using the conventions above.
4. Link the herb to symptom-search topics with `symptoms: [{ slug, notes }]`. The
   note says plainly whether the link is traditional use or research, and what the
   research found, even if it found no effect. New topics go in
   `prisma/seed-taxonomy.ts` with a description that says when to get medical care.
5. Check each sentence against its source: nothing removed, nothing added, the same
   level of certainty. Leave out anything the sources don't cover (for example a
   native range or pregnancy advice) rather than filling the gap.
6. Run `npm run content:check` and fix what it flags.
7. If the herb's plant family is new, add it to `FAMILY_COMMON_NAMES`.
8. Back up (`npx tsx prisma/backup-content.ts backups/<file>.json`), then run
   `npx tsx prisma/seed-taxonomy.ts`, `npx tsx --env-file=.env prisma/seed.ts` and
   the populate script. Open the page locally and read it top to bottom on a
   phone-width screen.

## Final test

Could someone with no herbal or scientific background read the page and understand
what the plant is, what people traditionally use it for, what researchers have
actually found, how it's commonly used, and what safety issues they should know
about? If not, simplify the wording, not the facts.

import { run } from "./lib/populate-herb";

// Black psyllium (Plantago indica, syn. P. arenaria), seed. Sources: the EMA
// public summary and Community herbal monograph on psyllium seed (P. afra and
// P. indica). Family per GBIF. Not the same species as Psyllium (P. ovata).

run({
  name: "Black Psyllium",
  profile: {
    family: "Plantaginaceae",
    genus: "Plantago",
    species: "indica",
    partsUsed: "The ripe seeds, whole or powdered",
  },
  sources: {
    emaSummary: {
      title: "Psyllium seed: summary for the public (EMA/HMPC/322933/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-07-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/psyllium-seed-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Plantago afra L. et Plantago indica L., semen (EMA/HMPC/599747/2012)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-05-14",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-plantago-afra-l-et-plantago-indica-l-semen_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Plantago arenaria", type: "SCIENTIFIC_SYNONYM" },
    { name: "Psyllium Seed", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency recognizes psyllium seed (from this plant or Plantago afra) as an established medicine, backed by scientific evidence:\n- for long-term constipation that isn't caused by a physical problem in the gut\n- to soften stools when passing them is painful, such as with anal fissures, hemorrhoids or after surgery on the bottom\nThe evidence comes from studies of a closely related psyllium (ispaghula), which contains similar ingredients.",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Psyllium seeds contain fiber that forms a gel when mixed with water. This makes stools bulkier and softer, lubricates the gut, and triggers bowel movements.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Always take it with plenty of liquid (about 30 ml of water for each gram). Taken with too little liquid, it can block the throat, food pipe or gut, causing choking. Signs include chest pain, vomiting, or trouble swallowing or breathing. Don't take it right before bed.",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "It can cause gas and a swollen belly.",
      source: "emaSummary",
    },
    {
      category: "ALLERGY",
      description:
        "Allergic reactions can occur, including a runny nose, red eyes, tightening of the airways and severe allergic reactions (anaphylaxis). Avoid breathing in the powder, because this can cause allergies, especially in people who handle it often.",
      source: "emaSummary",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "It can slow the absorption of other medicines and supplements, including minerals, vitamin B12, heart medicines like digoxin, blood thinners like warfarin, carbamazepine and lithium. Take it at least 30 to 60 minutes before or after other medicines. People with diabetes, or who take thyroid medicine, should only use it under a doctor's supervision, because their doses may need changing.\n\nTechnical detail: cardiac glycosides and coumarin derivatives.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use it if you have a sudden change in bowel habit lasting more than 2 weeks, unexplained bleeding from the bottom, no bowel movement after using a laxative, a narrowing or blockage in the gut, or trouble swallowing or other throat problems. Stop and see a doctor if you get stomach pain. Older or frail people should use it under medical supervision. Take it with opioids or other drugs that slow the gut only under medical supervision.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "It may be considered during pregnancy and breastfeeding if needed and if changing your diet hasn't worked.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Ages 12 and up: 25 to 40 g a day, split into 3 doses. Children 6 to 12: 12 to 25 g a day in 3 doses. Not for children under 6. It starts working in 12 to 24 hours. See a doctor or pharmacist if constipation doesn't improve within 3 days.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Recognized in Europe as an established treatment for long-term constipation and to soften stools. Take with plenty of water." },
  ],
});

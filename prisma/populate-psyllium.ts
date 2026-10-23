import { run } from "./lib/populate-herb";

// Psyllium / ispaghula husk (Plantago ovata), from the EMA herbal monograph and
// summary for the public on ispaghula husk (2013) and a 2018 meta-analysis of
// psyllium and cholesterol (Jovanovski et al.). Family per GBIF.

const EMA = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run({
  name: "Psyllium",
  profile: {
    family: "Plantaginaceae",
    genus: "Plantago",
    species: "ovata",
    partsUsed: "The seed husks (seed coats)",
  },
  sources: {
    emaMono: {
      title: "Community herbal monograph on Plantago ovata Forssk., seminis tegumentum",
      organization: EMA,
      publicationDate: "2013-05-14",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-plantago-ovata-forssk-seminis-tegumentum_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaSum: {
      title: "Ispaghula husk: summary for the public (EMA/HMPC/313600/2013)",
      organization: EMA,
      publicationDate: "2013-07-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/ispaghula-husk-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    jovanovski: {
      title: "Effect of psyllium (Plantago ovata) fiber on LDL cholesterol and alternative lipid targets, non-HDL cholesterol and apolipoprotein B: a systematic review and meta-analysis of randomized controlled trials",
      author: "Jovanovski E, Yashpal S, Komishon A, et al.",
      journal: "The American Journal of Clinical Nutrition",
      publicationDate: "2018-11-01",
      doi: "10.1093/ajcn/nqy115",
      pmid: "30239559",
      url: "https://pubmed.ncbi.nlm.nih.gov/30239559/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Ispaghula", type: "COMMON_NAME" },
    { name: "Ispaghula Husk", type: "COMMON_NAME" },
    { name: "Psyllium Husk", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on scientific evidence, the European Medicines Agency recognizes psyllium husk for:\n- Ongoing constipation\n- Softening the stool when passing it is painful, such as with anal fissures, hemorrhoids or after surgery on the anus or rectum\n- Adding fiber when that's advisable, such as for people with irritable bowel syndrome who are constipated, or alongside diet for high cholesterol",
      source: "emaMono",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Psyllium husk is a dietary fiber. Mixed with water it forms a gel that works as a mild laxative: it bulks up and softens the stool as it moves through the gut. The effect starts 12 to 24 hours after taking it.",
      source: "emaSum",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2018 review of 28 trials with 1,924 people found that about 10 g of psyllium a day lowered LDL (\"bad\") cholesterol, in people with or without high cholesterol.\n\nTechnical detail: LDL cholesterol MD −0.33 mmol/L (95% CI −0.38 to −0.27); non-HDL cholesterol and apolipoprotein B also reduced.",
      source: "jovanovski",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Always take psyllium with plenty of liquid, about 30 ml of water for every gram. Taken with too little liquid, it can block the throat or gut and cause choking, chest pain, vomiting, or trouble swallowing or breathing.",
      source: "emaMono",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use psyllium if you have:\n- Trouble swallowing or throat problems\n- A narrowing or blockage of the gut, or a gut that has stopped working\n- A sudden change in bowel habit lasting more than 2 weeks\n- Rectal bleeding that hasn't been diagnosed, or no bowel movement after using a laxative\nStop and get medical advice if you get stomach pain. See a doctor if constipation lasts more than 3 days.",
      source: "emaMono",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Psyllium can delay the absorption of other medicines, such as minerals, vitamin B12, heart medicines like digoxin, warfarin, carbamazepine and lithium. Take it at least 30 to 60 minutes before or after other medicines. People with diabetes or taking thyroid hormone should use it only under medical supervision, because their dose may need changing. With opioids or other medicines that slow the gut, use it only under medical supervision.",
      source: "emaMono",
    },
    {
      category: "ALLERGY",
      description:
        "Psyllium contains strong allergens. Allergic reactions, including a runny nose, eye irritation, wheezing, rashes and itching, and sometimes anaphylaxis, can happen. People who handle the powder often, such as caregivers, can become allergic by breathing it in.",
      source: "emaMono",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Gas may occur and usually goes away as treatment continues. Bloating can also occur.",
      source: "emaMono",
    },
    {
      category: "PREGNANCY",
      description:
        "Psyllium may be used during pregnancy and breastfeeding if needed and if changing your diet hasn't helped. Bulk laxatives like psyllium should be tried before other laxatives.",
      source: "emaMono",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not recommended for children under 6 for constipation, or under 12 for adding fiber. Older or frail people need medical supervision.",
      source: "emaMono",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Recognized in Europe, based on scientific evidence, for ongoing constipation and to soften the stool." },
    { slug: "high-cholesterol", notes: "A 2018 review of 28 trials found about 10 g a day lowered LDL cholesterol." },
    { slug: "ibs", notes: "Recognized in Europe as added fiber for people with irritable bowel syndrome who are constipated." },
  ],
  preparations: [
    { slug: "powder", notes: "The seed husks are used whole or powdered, and taken by mouth mixed with or followed by plenty of water, milk or juice.", source: "emaMono" },
  ],
});

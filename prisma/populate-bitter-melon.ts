import { run } from "./lib/populate-herb";

// Bitter Melon (Momordica charantia fruit), from a 2025 meta-analysis in
// prediabetes and type 2 diabetes (Mkhize et al.), a 2023 meta-analysis of
// placebo-controlled trials in metabolic syndrome (Laczkó-Zöld et al.), and the
// safety sources also used on the Cerasee page (Çiçek 2022; MSKCC).

run({
  name: "Bitter Melon",
  profile: {
    family: "Cucurbitaceae",
    genus: "Momordica",
    species: "charantia",
    partsUsed: "The fruit, as juice, powder or extract",
  },
  sources: {
    mkhize: {
      title: "Efficacy of Momordica charantia in glycaemic control and insulin resistance among patients with prediabetes and type 2 diabetes: a systematic review and meta-analysis",
      author: "Mkhize SAL, Phoswa WN, Ngubane PS, Mokgalaboni K",
      journal: "Metabolism Open",
      publicationDate: "2025-10-24",
      doi: "10.1016/j.metop.2025.100407",
      pmid: "41280283",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12630335/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    laczko: {
      title: "The metabolic effect of Momordica charantia cannot be determined based on the available clinical evidence: a systematic review and meta-analysis of randomized clinical trials",
      author: "Laczkó-Zöld E, Csupor-Löffler B, Kolcsár EB, et al.",
      journal: "Frontiers in Nutrition",
      publicationDate: "2024-01-11",
      doi: "10.3389/fnut.2023.1200801",
      pmid: "38274207",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10808600/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    cicek: {
      title: "Momordica charantia L.—Diabetes-Related Bioactivities, Quality Control, and Safety Considerations",
      author: "Çiçek SS",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2022-01-01",
      doi: "10.3389/fphar.2022.904643",
      pmid: "35656300",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9152207/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mskcc: {
      title: "Bitter Melon",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2021-12-22",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/bitter-melon",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Yangju Bitter Melon", type: "COMMON_NAME" },
    { name: "Bitter Gourd", type: "COMMON_NAME" },
    { name: "Karela", type: "COMMON_NAME" },
    { name: "Momordica charantia", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Bitter melon is the fruit of Momordica charantia, the same species as cerasee, whose leaves and vines are used as a Caribbean bush tea (see the Cerasee page). It's studied mainly for diabetes.",
      source: "cicek",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A 2025 review of 25 trials in people with prediabetes or type 2 diabetes found bitter melon lowered fasting blood sugar and long-term blood sugar (HbA1c) and improved insulin resistance.\n\nTechnical detail: FBG SMD −0.46 (−0.73 to −0.18); HbA1c SMD −0.57 (−0.83 to −0.31).",
      source: "mkhize",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "But a 2023 review of 9 placebo-controlled trials with 414 people with metabolic syndrome found no clear effect on blood sugar, cholesterol, weight or blood pressure, and concluded that its effect can't be determined from the evidence so far.\n\nTechnical detail: FBG MD −0.03 (−0.38 to 0.31); HbA1c MD −0.12 (−0.35 to 0.11).",
      source: "laczko",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Avoid bitter melon preparations during pregnancy: they caused bleeding from the womb in pregnant animals, and some of their compounds act like estrogen.",
      source: "cicek",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Bitter melon may add to the effects of insulin and other diabetes medicines, raising the risk of low blood sugar. It may also affect how some other medicines are cleared from the body.",
      source: "mskcc",
    },
    {
      category: "TOXICITY",
      description: "The seeds contain vicine, which has caused headache, fever, stomach pain and coma.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "It can cause stomach and gut problems. Case reports describe irregular heartbeat, stomach ulcers and severe kidney injury.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Reviews disagree: one found lower blood sugar in diabetes trials, another found no clear effect against placebo. May add to diabetes medicines." },
  ],
});

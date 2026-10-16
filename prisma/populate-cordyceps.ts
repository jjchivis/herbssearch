import { run } from "./lib/populate-herb";

// Cordyceps (Ophiocordyceps sinensis, Chinese caterpillar fungus), from a 2024
// systematic review of its preparations in dialysis patients (Liu et al.) and a
// 2025 systematic review in kidney dysfunction (Wu et al.).

run({
  name: "Cordyceps",
  profile: {
    family: "Ophiocordycipitaceae",
    genus: "Ophiocordyceps",
    species: "sinensis",
    nativeRange: "Mainly the Qinghai–Tibetan Plateau",
    partsUsed: "The fungus and the caterpillar it grows from; today mostly lab-grown fungus powder in capsules",
  },
  sources: {
    liu: {
      title: "Effects and safety of Ophiocordyceps sinensis preparation in the adjuvant treatment for dialysis patients: a systematic review and meta-analysis",
      author: "Liu M, Cui C, Chang T, Zhou Q, Cui Y, Zhang S, Liao X",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-07-19",
      doi: "10.3389/fphar.2024.1360997",
      pmid: "39101133",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11294943/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    wu: {
      title: "Efficacy of traditional Chinese medicine Cordyceps sinensis as an adjunctive treatment in patients with renal dysfunction: a systematic-review and meta-analysis",
      author: "Wu F, Xu C, Si X, He F, Xu K, Zhang Y, Lin S",
      journal: "Frontiers in Medicine",
      publicationDate: "2025-01-07",
      doi: "10.3389/fmed.2024.1477569",
      pmid: "39839641",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11747039/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Chinese Caterpillar Fungus", type: "COMMON_NAME" },
    { name: "Dong Chong Xia Cao", type: "TRADITIONAL_NAME" },
    { name: "Tochukaso", type: "REGIONAL_NAME", region: "Japan" },
    { name: "Cordyceps sinensis", type: "SCIENTIFIC_SYNONYM" },
    { name: "Caterpillar Fungus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called dong chong xia cao (\"winter worm, summer grass\"); used for over 700 years as a tonic for the lungs and kidneys." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cordyceps is a fungus that grows from caterpillars, mainly on the Qinghai–Tibetan Plateau. In Chinese it's called dong chong xia cao, \"winter worm, summer grass\". It has been used in China for over 700 years, mainly as a tonic for the lungs and kidneys. Because wild cordyceps is overharvested and very expensive, most products today are made from lab-grown fungus, such as Bailing and Jinshuibao capsules.",
      source: "liu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review combined 35 trials with 2,914 people on dialysis in China, mostly testing Bailing capsules alongside standard care. Cordyceps preparations lowered markers of inflammation and kidney waste (creatinine and urea) and improved albumin and haemoglobin. The certainty of this evidence is low to very low.",
      source: "liu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 15 Chinese studies with 1,310 people with kidney problems, mainly sudden kidney injury, found that adding cordyceps to treatment lowered creatinine and shortened the time of low urine output. Many studies were small and poorly designed.",
      source: "wu",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Few side effects were reported in the dialysis trials, mainly stomach upset and nausea, and they weren't more common than in people not taking cordyceps.",
      source: "liu",
    },
  ],
});

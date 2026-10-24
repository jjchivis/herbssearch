import { run } from "./lib/populate-herb";

// White mulberry leaf (Morus alba), from a 2023 meta-analysis of mulberry leaf
// and blood sugar (Cui et al.) and a 2014 trial in people with prediabetes (Kim
// et al.). No safety sources were found. Family per GBIF.

run({
  name: "White Mulberry Leaf",
  profile: {
    family: "Moraceae",
    genus: "Morus",
    species: "alba",
    partsUsed: "The leaves",
  },
  sources: {
    cui: {
      title: "Effect of mulberry leaf or mulberry leaf extract on glycemic traits: a systematic review and meta-analysis",
      author: "Cui W, Luo K, Xiao Q, et al.",
      journal: "Food & Function",
      publicationDate: "2023-02-06",
      doi: "10.1039/d2fo02645g",
      pmid: "36644880",
      url: "https://pubmed.ncbi.nlm.nih.gov/36644880/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    kim: {
      title: "Mulberry leaf extract improves postprandial glucose response in prediabetic subjects: a randomized, double-blind placebo-controlled trial",
      author: "Kim JY, Ok HM, Kim J, et al.",
      journal: "Journal of Medicinal Food",
      publicationDate: "2014-10-24",
      doi: "10.1089/jmf.2014.3160",
      pmid: "25343729",
      url: "https://pubmed.ncbi.nlm.nih.gov/25343729/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mulberry Leaf", type: "COMMON_NAME" },
    { name: "White Mulberry", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "1-Deoxynojirimycin", slug: "1-deoxynojirimycin", type: "alkaloid" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Mulberry leaf contains 1-deoxynojirimycin (DNJ), flavonoids and other compounds thought to help the body handle sugar, lower blood sugar and increase insulin release.",
      source: "cui",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 12 trials with 615 adults found mulberry leaf or its extract lowered fasting blood sugar, HbA1c (a measure of average blood sugar) and fasting insulin. It worked better when taken for 8 weeks or more by people whose blood sugar was already high.\n\nTechnical detail: FBG −0.47 mmol/L; HbA1c −2.92 mmol/mol; fasting insulin −0.58 μIU/mL.",
      source: "cui",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2014 trial in people with prediabetes, mulberry leaf extract reduced the rise in blood sugar after eating, compared with a placebo.",
      source: "kim",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "A 2023 review of 12 trials found it lowered fasting blood sugar and HbA1c." },
  ],
  preparations: [
    { slug: "extract", notes: "In trials, people took mulberry leaf or mulberry leaf extract.", source: "cui" },
  ],
});

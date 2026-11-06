import { run } from "./lib/populate-herb";

// Jujube Seed (suan zao ren, the seed of sour jujube, Ziziphus jujuba var.
// spinosa), from a 2023 systematic review of sleep trials (Yang et al.) and a 2024
// review of its chemistry, effects and toxicology (Liu et al.). Family per GBIF.

run({
  name: "Jujube Seed",
  profile: { family: "Rhamnaceae", genus: "Ziziphus", species: "jujuba var. spinosa", nativeRange: "Northern China", partsUsed: "The seeds of the sour jujube" },
  sources: {
    yang: {
      title: "The Herbal Medicine Suanzaoren (Ziziphi Spinosae Semen) for Sleep Quality Improvements: A Systematic Review and Meta-analysis",
      author: "Yang M, Wang H, Zhang YL, et al.",
      journal: "Integrative Cancer Therapies",
      publicationDate: "2023-01-01",
      doi: "10.1177/15347354231162080",
      pmid: "37014010",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10084578/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    liu: {
      title: "Phytochemical, pharmacological, pharmacokinetic and toxicological characteristics of Ziziphi Spinosae Semen: a review",
      author: "Liu MH, Jin HX, Song Z, Wang JY, Gao DJ",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-11-29",
      doi: "10.3389/fphar.2024.1504009",
      pmid: "39679366",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11639084/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Suan Zao Ren", type: "REGIONAL_NAME", region: "China" },
    { name: "Sour Jujube Seed", type: "COMMON_NAME" },
    { name: "Ziziphi Spinosae Semen", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A first-choice herb for insomnia in traditional Chinese medicine, used to calm the mind. Over 30 formulas in the official Chinese pharmacopoeia contain it, for palpitations, insomnia, dizziness, depression and anxiety.",
      source: "liu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 9 trials found it improved sleep quality compared with placebo, and eased insomnia about as well as or better than sleeping pills (benzodiazepines) or talk therapy at 4 weeks. Long-term results were mixed and the studies were small.",
      source: "yang",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with insomnia, it shortened time awake and lengthened deep sleep.",
      source: "liu",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In sleep trials it didn't increase serious side effects. Mild ones included dizziness, dry mouth, rash, stomach upset and tiredness.",
      source: "yang",
    },
  ],
  symptoms: [
    { slug: "occasional-sleeplessness", notes: "Improved sleep quality versus placebo in a review of 9 trials." },
    { slug: "anxiety", notes: "A traditional Chinese remedy for anxiety and restlessness." },
  ],
});

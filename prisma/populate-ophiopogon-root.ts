import { run } from "./lib/populate-herb";

// Ophiopogon Root (Ophiopogon japonicus, mai dong), from a 2024 review of its
// main compound ophiopogonin D (Chen et al.) and a 2024 systematic review of the
// classical formula Shengmai San, which contains it (Zhang et al.).

run({
  name: "Ophiopogon Root",
  profile: {
    family: "Asparagaceae",
    genus: "Ophiopogon",
    species: "japonicus",
    partsUsed: "The small, light brownish-yellow tuberous roots",
  },
  sources: {
    chen: {
      title: "Ophiopogonin D: review of pharmacological activity",
      author: "Chen KQ, Wang SZ, Lei HB, Liu X",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-07-18",
      doi: "10.3389/fphar.2024.1401627",
      pmid: "39101149",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11295246/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zhang: {
      title: "Effectiveness and Safety of Shengmai San for Viral Myocarditis: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Zhang BR, Liu XH, Ling YT, et al.",
      journal: "Cardiovascular Therapeutics",
      publicationDate: "2024-06-20",
      doi: "10.1155/2024/2127018",
      pmid: "39742019",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11211013/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Mai Dong", type: "TRADITIONAL_NAME" },
    { name: "Maidong", type: "TRADITIONAL_NAME" },
    { name: "Dwarf Lilyturf", type: "COMMON_NAME" },
    { name: "Ophiopogonis Radix", type: "COMMON_NAME" },
    { name: "Ophiopogon", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called mai dong; one of the three herbs in the classical formula sheng mai, used to \"supplement qi and yin\"." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ophiopogon root, called mai dong in Chinese, is one of the three herbs in sheng mai, a classical Chinese formula first written down about 1,000 years ago. With ginseng and schisandra, it's used to \"supplement qi and yin\" and to ease symptoms linked to irregular heartbeat and heart failure.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Ophiopogonin D, a main compound of the root, has been studied in lab and animal research. It may help reduce inflammation, slowed cancer cells, and protected the heart, blood vessels, liver and bones. These effects haven't been confirmed in people.",
      source: "chen",
    },
  ],
});

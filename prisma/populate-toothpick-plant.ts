import { run } from "./lib/populate-herb";

// Toothpick plant / khella (Visnaga daucoides, syn. Ammi visnaga). Sources: a
// 2024 review of visnagin, a 2025 lab study and a 2026 fatal poisoning case
// report. Family per GBIF.

run({
  name: "Toothpick Plant",
  profile: {
    family: "Apiaceae",
    genus: "Visnaga",
    species: "daucoides",
    partsUsed: "The fruits (seeds) and above-ground parts",
  },
  sources: {
    yadav: {
      title: "Therapeutic potential and pharmacological mechanism of visnagin",
      author: "Yadav P, Singh SK, Datta S, et al.",
      journal: "Journal of Integrative Medicine",
      publicationDate: "2024-05-08",
      doi: "10.1016/j.joim.2024.05.001",
      pmid: "38797603",
      url: "https://doi.org/10.1016/j.joim.2024.05.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sevindik: {
      title: "Geographical variation in antioxidant, anticancer and anticholinesterase activities and phenolic contents of Visnaga daucoides",
      author: "Sevindik M, Krupodorova T, Uysal İ, Koçer O, Sevindik E",
      journal: "Scientific Reports",
      publicationDate: "2025-07-02",
      doi: "10.1038/s41598-025-08936-w",
      pmid: "40604080",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12223098/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    benyousef: {
      title: "Autopsy case: Vitiligo death from self-medication by Ammi visnaga poisoning",
      author: "Benyousef R, Essadi A, Zarhouni B, et al.",
      journal: "The Medico-Legal Journal",
      publicationDate: "2025-10-27",
      doi: "10.1177/00258172251337046",
      pmid: "41145408",
      url: "https://doi.org/10.1177/00258172251337046",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ammi visnaga", type: "SCIENTIFIC_SYNONYM" },
    { name: "Khella", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The plant is used in traditional medicine to treat a variety of ailments.",
      source: "yadav",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Visnagin, one of the plant's main compounds, has shown effects against inflammation and diabetes and benefits for the heart and kidneys in lab and animal research. A 2024 review called it a promising lead but said more research is needed on whether it is safe to use.",
      source: "yadav",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 lab study, extracts of plants from Iraq and Turkey acted as antioxidants, slowed lung cancer cells, and blocked enzymes involved in memory. The results differed by where the plants grew.",
      source: "sevindik",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "An 18-year-old woman who treated her vitiligo by taking the plant's powder for a long time died of poisoning, with damage to her liver, kidneys, lungs and pancreas. The authors warn that long-term use without medical supervision can be dangerous, and that the strength of its compounds varies.",
      source: "benyousef",
    },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Long-term use of the powder caused fatal poisoning in a young woman." },
    { slug: "liver-safety-warnings", notes: "A fatal poisoning case involved severe liver damage." },
  ],
});

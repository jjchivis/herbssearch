import { run } from "./lib/populate-herb";

// Echinopsis pachanoi (San Pedro cactus), from a 2026 systematic review of
// mescaline use (Shaw et al.). Family per GBIF.

run({
  name: "Echinopsis Pachanoi",
  profile: {
    family: "Cactaceae",
    genus: "Echinopsis",
    species: "pachanoi",
    nativeRange: "The Andes of Ecuador and Peru",
    partsUsed: "The stem",
  },
  sources: {
    shaw: {
      title: "The Ethnopharmacological Use of Mescaline for Psychiatric Disorders: A Systematic Review",
      author: "Shaw J, Yong A, Lee J, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-03-28",
      doi: "10.3390/ijms27073081",
      pmid: "41977267",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13072975/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "San Pedro Cactus", type: "COMMON_NAME" },
    { name: "Huachuma", type: "TRADITIONAL_NAME", region: "Andes" },
    { name: "Trichocereus pachanoi", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [{ name: "Mescaline", slug: "mescaline", type: "phenethylamine alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "San Pedro is one of the two main mescaline-containing cacti, with peyote. Mescaline-containing cacti have been used in traditional medicine for centuries.",
      source: "shaw",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review found only 10 usable studies of people taking mescaline or mescaline-containing plants. Some reported improvements in depression, well-being, nicotine and alcohol use, and obsessions. The studies were few and of very mixed quality, so no firm conclusions can be drawn.",
      source: "shaw",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "San Pedro contains mescaline, a hallucinogen. Commonly reported effects include high blood pressure, headache, nausea and vomiting. Its safety hasn't been properly studied.",
      source: "shaw",
    },
  ],
});

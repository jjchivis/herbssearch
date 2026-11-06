import { run } from "./lib/populate-herb";

// Caper Spurge (Euphorbia lathyris), from a 2018 review of its seed as a Chinese
// medicine (Zhu et al.) and a 2024 case of eye injury from its sap (Kok et al.).
// Family per GBIF.

run({
  name: "Caper Spurge",
  profile: { family: "Euphorbiaceae", genus: "Euphorbia", species: "lathyris", nativeRange: "Southern Europe and western Asia", partsUsed: "The seeds" },
  sources: {
    zhu: {
      title: "The phytochemistry, pharmacokinetics, pharmacology and toxicity of Euphorbia semen",
      author: "Zhu A, Zhang T, Wang Q",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2018-12-05",
      doi: "10.1016/j.jep.2018.08.024",
      pmid: "30144497",
      url: "https://doi.org/10.1016/j.jep.2018.08.024",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kok: {
      title: "Exposure to Caper Spurge (Euphorbia lathyris) Sap: A Case of Ocular and Periorbital Toxicity",
      author: "Kok LT, Bizrah M, Cordeiro MF, Din N",
      journal: "Case Reports in Ophthalmology",
      publicationDate: "2024-07-03",
      doi: "10.1159/000539419",
      pmid: "39015244",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11250593/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Euphorbia Semen", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A tall, blue-green spurge with caper-like seed pods. Its dried seed, Euphorbia semen, is a traditional Chinese medicine listed in the Chinese Pharmacopoeia.",
      source: "zhu",
    },
    {
      category: "PRECLINICAL",
      summary: "Seed compounds increased urine, lowered uric acid and reduced inflammation in lab and animal studies.",
      source: "zhu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "The seed is highly irritating to the gut and toxic, and some of its compounds promote cancer when combined with other agents. Processing methods have been developed to reduce its toxicity.",
      source: "zhu",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "The milky sap is toxic. A gardener who got it near his eyes developed severe inflammation of both corneas and his vision worsened for weeks before he recovered. Symptoms can take a day or two to appear.",
      source: "kok",
    },
  ],
});

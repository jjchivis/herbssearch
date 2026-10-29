import { run } from "./lib/populate-herb";

// Baobab (Adansonia digitata), from a 2026 review of the fruit pulp (Pfukwa et
// al.). Family per GBIF.

run({
  name: "Baobab",
  profile: {
    family: "Malvaceae",
    genus: "Adansonia",
    species: "digitata",
    nativeRange: "The dry savannas of sub-Saharan Africa",
    partsUsed: "The fruit pulp",
  },
  sources: {
    pfukwa: {
      title: "Baobab (Adansonia digitata L.) Fruit Pulp in Nutritional Therapeutics: Mechanistic Insights, Clinical Evidence, and Future Research Priorities",
      author: "Pfukwa TM, Abdulraheem MI, Aremu AO, Fawole OA",
      journal: "Foods",
      publicationDate: "2026-10-09",
      doi: "10.3390/foods15203579",
      pmid: "42940219",
      url: "https://pubmed.ncbi.nlm.nih.gov/42940219/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Monkeybread Tree", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Baobab fruit pulp is a traditional African food rich in fiber. In lab and animal studies, its fibers fed helpful gut bacteria, and its compounds slowed sugar-digesting enzymes and helped the body take up iron.",
      source: "pfukwa",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Only six studies in people were found. They looked at blood sugar after meals in healthy adults, and at iron in schoolchildren; one trial raised hemoglobin but not iron stores. Its effects on gut bacteria, immunity and diabetes haven't been tested in people, so its health benefits aren't established.",
      source: "pfukwa",
    },
  ],
});

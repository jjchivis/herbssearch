import { run } from "./lib/populate-herb";

// Camu camu (Myrciaria dubia), fruit. Source: a 2025 review of its nutrition
// and pharmacology. Family per GBIF. The review's human claims are vague and
// it calls for human trials, so only its clear statements are used. No source
// covering safety was found, so none is stated.

run({
  name: "Camu Camu",
  profile: {
    family: "Myrtaceae",
    genus: "Myrciaria",
    species: "dubia",
    partsUsed: "The fruit, often as a powder",
  },
  sources: {
    maqsood: {
      title: "Nutritional Composition, Pharmacological Properties, and Industrial Applications of Myrciaria dubia: An Undiscovered Superfruit",
      author: "Maqsood S, Arshad MT, Ikram A, Gnedeka KT",
      journal: "Food Science & Nutrition",
      publicationDate: "2025-05-23",
      doi: "10.1002/fsn3.70331",
      pmid: "40417739",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12101967/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Camu camu is a small fruit native to the Amazon. It is prized for its vitamin C, with up to 2,800 mg per 100 g of pulp, far more than oranges or acerola cherries.",
      source: "maqsood",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies suggest camu camu acts as an antioxidant and may help reduce inflammation, fight bacteria and lower blood sugar and blood pressure. A 2025 review said human trials are still needed to confirm these effects and work out the right doses.",
      source: "maqsood",
    },
  ],
});

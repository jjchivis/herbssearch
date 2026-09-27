import { run } from "./lib/populate-herb";

// Chickweed (Stellaria media), from a verified source: a study of its extracts
// that reviews its traditional uses (Cusumano et al. 2024). Family per GBIF /
// Catalogue of Life. No studies in people and no source covering side effects,
// interactions, pregnancy or breastfeeding were found, so none is stated.

run({
  name: "Chickweed",
  profile: {
    family: "Caryophyllaceae",
    genus: "Stellaria",
    species: "media",
    nativeRange: "Widespread in all parts of the world",
    partsUsed: "The above-ground parts",
  },
  sources: {
    cusumano: {
      title: "Small Steps to the Big Picture for Health-Promoting Applications Through the Use of Chickweed (Stellaria media): In Vitro, In Silico, and Pharmacological Network Approaches",
      author: "Cusumano G, Flores GA, Cetiz MV, Kurt U, Ak G, Saka E, Aly SH, Eldahshan OA, Singab AN, Zengin G, Senkardes I, Rodrigues MJ, Custodio L, Emiliani C, Angelini P",
      journal: "Food Science & Nutrition",
      organization: "Food Science & Nutrition",
      publicationDate: "2024-10-03",
      doi: "10.1002/fsn3.4505",
      pmid: "39620022",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11606822/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Common Chickweed", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chickweed is eaten as part of the diet and traditionally used for breathing problems and skin ailments such as burns, cuts and scratches. It has also been used for tension and for inflammation of the kidneys and the digestive, reproductive and breathing systems, and for joint inflammation and wound healing.",
      source: "cusumano",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, chickweed extracts, which contain flavonoids such as apigenin, showed antioxidant activity. Earlier studies reported effects against inflammation, fungi and bacteria.",
      source: "cusumano",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Traditionally used for burns, cuts and scratches. It hasn't been studied in people." },
    { slug: "skin-irritation", notes: "Traditionally used for skin ailments. It hasn't been studied in people." },
  ],
});

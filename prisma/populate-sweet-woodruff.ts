import { run } from "./lib/populate-herb";

// Sweet Woodruff (Galium odoratum), from a 2026 review of its traditional use,
// chemistry and toxicology (Herre and Stegemann) and a 2020 review of coumarin in
// food (Lončar et al.). Family per GBIF.

run({
  name: "Sweet Woodruff",
  profile: { family: "Rubiaceae", genus: "Galium", species: "odoratum", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The leaves and flowering shoots" },
  sources: {
    herre: {
      title: "Sweet Woodruff (Galium odoratum L.)-More than Just Coumarin: From Fundamental to Biomass Valorization",
      author: "Herre I, Stegemann T",
      journal: "Molecules",
      publicationDate: "2026-08-21",
      doi: "10.3390/molecules31162920",
      pmid: "42654000",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13516820/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    loncar: {
      title: "Coumarins in Food and Methods of Their Determination",
      author: "Lončar M, Jakovljević M, Šubarić D, et al.",
      journal: "Foods",
      publicationDate: "2020-05-18",
      doi: "10.3390/foods9050645",
      pmid: "32443406",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7278589/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Woodruff", type: "COMMON_NAME" },
    { name: "Asperula odorata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Waldmeister", type: "REGIONAL_NAME", region: "Germany" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A European woodland herb that smells of fresh hay when dried, from coumarin. It's traditionally used to flavor drinks, especially German May wine (Maibowle), and was used on wounds and for digestive problems, coughs and anxiety.",
      source: "herre",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a leaf extract reduced swelling and helped burns heal. There's no good clinical evidence for sweet woodruff preparations.",
      source: "herre",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Its coumarin can damage the liver in large amounts. The EU's safe limit is 0.1 mg of coumarin per kg of body weight a day, and adding pure coumarin to food isn't allowed.",
      source: "loncar",
    },
    {
      category: "TOXICITY",
      description: "Some people are especially sensitive to coumarin's liver effects, which usually reverse after stopping.",
      source: "herre",
    },
  ],
});

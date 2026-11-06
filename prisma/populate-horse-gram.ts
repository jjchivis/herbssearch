import { run } from "./lib/populate-herb";

// Horse Gram (Macrotyloma uniflorum), from a 2024 systematic review (Oli et al.)
// and rat and mouse studies of kidney stones (Patel and Acharya 2020), metabolic
// syndrome (R M et al. 2021) and gallstones (Bigoniya et al. 2014). Family per
// GBIF.

run({
  name: "Horse Gram",
  profile: { family: "Fabaceae", genus: "Macrotyloma", species: "uniflorum", nativeRange: "Tropical Africa and South Asia", partsUsed: "The seeds (a pulse)" },
  sources: {
    oli: {
      title: "Traditional uses, phytochemistry, pharmacology, and nutraceutical potential of horse gram (Macrotyloma uniflorum): A systematic review",
      author: "Oli P, Joshi K, Punetha S",
      journal: "Journal of Food Science",
      publicationDate: "2024-12-10",
      doi: "10.1111/1750-3841.17594",
      pmid: "39656760",
      url: "https://doi.org/10.1111/1750-3841.17594",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    patel: {
      title: "Effect of Macrotyloma uniflorum in ethylene glycol induced urolithiasis in rats",
      author: "Patel VB, Acharya N",
      journal: "Heliyon",
      publicationDate: "2020-06-26",
      doi: "10.1016/j.heliyon.2020.e04253",
      pmid: "32637686",
      url: "https://doi.org/10.1016/j.heliyon.2020.e04253",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rm: {
      title: "Macrotyloma uniflorum a plant food alleviates the metabolic syndrome through modulation of adipokines and PPARs",
      author: "R M, Mani S, Sali VK, Bhardwaj M, Vasanthi HR",
      journal: "Journal of Food Biochemistry",
      publicationDate: "2020-12-23",
      doi: "10.1111/jfbc.13595",
      pmid: "33368458",
      url: "https://doi.org/10.1111/jfbc.13595",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bigoniya: {
      title: "The effect of Macrotyloma uniflorum seed on bile lithogenicity against diet induced cholelithiasis on mice",
      author: "Bigoniya P, Bais S, Sirohi B",
      journal: "Ancient Science of Life",
      publicationDate: "2014-04-01",
      doi: "10.4103/0257-7941.147433",
      pmid: "25593405",
      url: "https://doi.org/10.4103/0257-7941.147433",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Horsegram", type: "COMMON_NAME" },
    { name: "Kulthi", type: "REGIONAL_NAME", region: "India" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A hardy pulse rich in protein, fiber and minerals. Since ancient times it's been eaten and used as a remedy in the Himalayas for kidney and bladder stones, bronchitis, asthma, piles, skin patches (leukoderma) and heart disease.",
      source: "oli",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with kidney stones, a seed extract increased urine, raised stone-blocking minerals and cut crystals in the urine.",
      source: "patel",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats on a high-fat diet, horse gram lowered blood sugar, cholesterol, triglycerides and body weight, and raised HDL cholesterol.",
      source: "rm",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice on a gallstone-causing diet, seed extracts cut gallstones by up to 60% and lowered cholesterol.",
      source: "bigoniya",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "It's eaten as a food, but no human medical studies were found.", source: "oli" },
  ],
  symptoms: [
    { slug: "kidney-stones", notes: "A traditional kidney stone remedy; a seed extract reduced stone crystals in rats. Not tested in people." },
    { slug: "high-cholesterol", notes: "Lowered cholesterol in rats. Not tested in people." },
  ],
});

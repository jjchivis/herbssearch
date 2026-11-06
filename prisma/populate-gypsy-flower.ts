import { run } from "./lib/populate-herb";

// Gypsy Flower (Cynoglossum officinale, hound's tongue), from the USDA PLANTS
// database and veterinary reports of pyrrolizidine alkaloid poisoning in horses
// (Knight et al. 1984) and calves (Baker et al. 1991). Family per GBIF.

run({
  name: "Gypsy Flower",
  profile: { family: "Boraginaceae", genus: "Cynoglossum", species: "officinale", nativeRange: "Europe and western Asia; now a weed in North America", partsUsed: "The leaves and roots" },
  sources: {
    usda: {
      title: "Cynoglossum officinale L. (gypsyflower)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/CYOF",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    knight: {
      title: "Cynoglossum officinale (hound's-tongue)--a cause of pyrrolizidine alkaloid poisoning in horses",
      author: "Knight AP, Kimberling CV, Stermitz FR, Roby MR",
      journal: "Journal of the American Veterinary Medical Association",
      publicationDate: "1984-09-15",
      pmid: "6490488",
      url: "https://pubmed.ncbi.nlm.nih.gov/6490488/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    baker: {
      title: "Cynoglossum officinale toxicity in calves",
      author: "Baker DC, Pfister JA, Molyneux RJ, Kechele P",
      journal: "Journal of Comparative Pathology",
      publicationDate: "1991-05-01",
      doi: "10.1016/s0021-9975(08)80150-8",
      pmid: "1678752",
      url: "https://doi.org/10.1016/s0021-9975(08)80150-8",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hound's Tongue", type: "COMMON_NAME" },
    { name: "Houndstongue", type: "COMMON_NAME" },
    { name: "Gypsyflower", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A coarse, hairy biennial with purple-red flowers and burr-like seeds, also called hound's tongue. It's now a widespread weed in North American pastures.",
      source: "knight",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "It contains large amounts of pyrrolizidine alkaloids, which destroy the liver. Ten horses died after eating hay containing it, with jaundice, weight loss and brain effects from liver failure.",
      source: "knight",
    },
    {
      category: "TOXICITY",
      description: "Calves given the dried plant died of massive liver damage, some after a single dose.",
      source: "baker",
    },
  ],
});

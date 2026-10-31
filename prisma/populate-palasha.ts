import { run } from "./lib/populate-herb";

// Palasha, flame of the forest (Butea monosperma), from a 2014 study in
// diabetic rats (Samad et al.) and a 2014 kidney study in rats (Sonkar et al.).
// No human trials were found. Family per GBIF.

run({
  name: "Palasha",
  profile: {
    family: "Fabaceae",
    genus: "Butea",
    species: "monosperma",
    nativeRange: "India and Southeast Asia",
    partsUsed: "The leaves, bark, flowers and seeds",
  },
  sources: {
    samad: {
      title: "Ethanolic Extract of Butea monosperma Leaves Elevate Blood Insulin Level in Type 2 Diabetic Rats, Stimulate Insulin Secretion in Isolated Rat Islets, and Enhance Hepatic Glycogen Formation",
      author: "Samad MB, Kabir AU, D'Costa NM, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2014-03-31",
      doi: "10.1155/2014/356290",
      pmid: "24860609",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3988748/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sonkar: {
      title: "An experimetal evaluation of nephroprotective potential of Butea monosperma extract in albino rats",
      author: "Sonkar N, Ganeshpurkar A, Yadav P, Dubey S, Bansal D, Dubey N",
      journal: "Indian Journal of Pharmacology",
      publicationDate: "2014-01-01",
      doi: "10.4103/0253-7613.125190",
      pmid: "24550595",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3912793/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Flame of the Forest", type: "COMMON_NAME" },
    { name: "Palash", type: "REGIONAL_NAME", region: "India" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In rats with type 2 diabetes, a leaf extract lowered blood sugar before and after meals, raised insulin, and improved cholesterol and blood fats. It worked by helping the body release insulin and store sugar in the liver.",
      source: "samad",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given an antibiotic that damages the kidneys, palash extract protected the kidneys.",
      source: "sonkar",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Goatweed (Ageratum conyzoides), from reviews of its traditional uses (Yadav et
// al. 2019; Kotta et al. 2020) and a 2024 study of the liver-damaging
// pyrrolizidine alkaloids it contains (Hungerford et al.). Family per GBIF.

run({
  name: "Goatweed",
  profile: { family: "Asteraceae", genus: "Ageratum", species: "conyzoides", nativeRange: "Tropical America; now a weed throughout the tropics", partsUsed: "The leaves and whole plant" },
  sources: {
    yadav: {
      title: "Phytochemical constituents and ethnopharmacological properties of Ageratum conyzoides L.",
      author: "Yadav N, Ganie SA, Singh B, Chhillar AK, Yadav SS",
      journal: "Phytotherapy Research",
      publicationDate: "2019-09-01",
      doi: "10.1002/ptr.6405",
      pmid: "31290201",
      url: "https://doi.org/10.1002/ptr.6405",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kotta: {
      title: "Medicinal Effect, In Silico Bioactivity Prediction, and Pharmaceutical Formulation of Ageratum conyzoides L.: A Review",
      author: "Kotta JC, Lestari ABS, Candrasari DS, Hariono M",
      journal: "Scientifica",
      publicationDate: "2020-10-13",
      doi: "10.1155/2020/6420909",
      pmid: "33110668",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7578719/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hungerford: {
      title: "Analysis of Pyrrolizidine Alkaloids in Stingless Bee Honey and Identification of a Botanical Source as Ageratum conyzoides",
      author: "Hungerford NL, Zawawi N, Zhu TE, et al.",
      journal: "Toxins",
      publicationDate: "2024-01-12",
      doi: "10.3390/toxins16010040",
      pmid: "38251258",
      url: "https://doi.org/10.3390/toxins16010040",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Goat Weed", type: "COMMON_NAME" },
    { name: "Bandotan", type: "REGIONAL_NAME", region: "Indonesia" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A tropical weed named for its goat-like smell. It's long been used on wounds and burns, and for headache, joint pain and breathing trouble.",
      source: "kotta",
    },
    {
      category: "TRADITIONAL",
      summary: "In Africa it's used for constipation, fever, ulcers and as a wound dressing; in Togo for measles and snakebite; and in Nigeria for skin diseases, wounds and diarrhea.",
      source: "kotta",
    },
    {
      category: "TRADITIONAL",
      summary: "It's also used for leprosy, skin disorders, sleeping sickness, rheumatism, toothache and pneumonia.",
      source: "yadav",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab and animal studies suggest it may fight germs and reduce inflammation and pain.",
      source: "yadav",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "It contains pyrrolizidine alkaloids, compounds that can damage the liver. They were found in the plant and in honey made by bees that fed on it.",
      source: "hungerford",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A traditional wound and burn remedy. Contains liver-damaging alkaloids." },
  ],
});

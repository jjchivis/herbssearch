import { run } from "./lib/populate-herb";

// Tall White Squill (Drimia altissima, also Urginea altissima), from reviews of
// the Drimia genus (Manganyi et al. 2021; Bozorgi et al. 2017), a 2001 Zimbabwe
// skin study (Cogne et al.) and a 2021 study of its bulb compounds (Langat et al.).
// Family per GBIF.

run({
  name: "Tall White Squill",
  profile: { family: "Asparagaceae", genus: "Drimia", species: "altissima", nativeRange: "Tropical and southern Africa", partsUsed: "The bulb" },
  sources: {
    manganyi: {
      title: "Bulbous Plants Drimia: \"A Thin Line between Poisonous and Healing Compounds\" with Biological Activities",
      author: "Manganyi MC, Tlatsana GS, Mokoroane GT, et al.",
      journal: "Pharmaceutics",
      publicationDate: "2021-09-01",
      doi: "10.3390/pharmaceutics13091385",
      pmid: "34575461",
      url: "https://doi.org/10.3390/pharmaceutics13091385",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bozorgi: {
      title: "Traditional medical uses of Drimia species in terms of phytochemistry, pharmacology and toxicology",
      author: "Bozorgi M, Amin G, Shekarchi M, Rahimi R",
      journal: "Journal of Traditional Chinese Medicine",
      publicationDate: "2017-02-01",
      doi: "10.1016/s0254-6272(17)30036-5",
      pmid: "29960283",
      url: "https://doi.org/10.1016/s0254-6272(17)30036-5",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cogne: {
      title: "Study of two plants used in traditional medicine in Zimbabwe for skin problems and rheumatism: Dioscorea sylvatica and Urginea altissima",
      author: "Cogne AL, Marston A, Mavi S, Hostettmann K",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2001-04-01",
      doi: "10.1016/s0378-8741(00)00347-0",
      pmid: "11282443",
      url: "https://doi.org/10.1016/s0378-8741(00)00347-0",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    langat: {
      title: "Antiproliferative Bufadienolides from the Bulbs of Drimia altissima",
      author: "Langat L, Langat MK, Wetschnig W, Knirsch W, Mulholland DA",
      journal: "Journal of Natural Products",
      publicationDate: "2021-03-26",
      doi: "10.1021/acs.jnatprod.0c01079",
      pmid: "33478223",
      url: "https://doi.org/10.1021/acs.jnatprod.0c01079",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Urginea altissima", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Zimbabwe the bulb is rubbed on the skin for skin problems and rheumatism.",
      source: "cogne",
    },
    {
      category: "TRADITIONAL",
      summary: "Drimia bulbs are among South Africa's best-known medicinal plants, used for colds, coughs, pneumonia, measles, fever, headache, skin disorders and joint problems.",
      source: "manganyi",
    },
    {
      category: "PRECLINICAL",
      summary: "Heart-active compounds from the bulb (bufadienolides) killed cancer cells at very low doses in lab tests.",
      source: "langat",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Drimia bulbs contain bufadienolides, powerful heart-acting compounds, and some species are among southern Africa's six most common poisonous plants for people and livestock.",
      source: "manganyi",
    },
    {
      category: "TOXICITY",
      description: "The gap between a helpful and a toxic dose is very narrow. These plants have been used as rat poison and shouldn't be taken without medical supervision.",
      source: "bozorgi",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Rubbing the bulb on the skin causes itching and mild inflammation, partly from needle-like calcium oxalate crystals.",
      source: "cogne",
    },
  ],
});

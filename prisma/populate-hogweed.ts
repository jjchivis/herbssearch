import { run } from "./lib/populate-herb";

// Hogweed (Heracleum sphondylium), from a 2025 study of furocoumarins in hogweed
// supplements (Laczkó Zöld et al.), a 1980 phototoxicity study (Weimarck and
// Nilsson) and a 2014 essential oil study (Maggi et al.). Family per GBIF.

run({
  name: "Hogweed",
  profile: { family: "Apiaceae", genus: "Heracleum", species: "sphondylium", partsUsed: "The above-ground parts and fruits" },
  sources: {
    laczko: {
      title: "Fast Determination of Furocoumarins in Food Supplements Containing Heracleum sphondylium L. Using Capillary Electrophoresis",
      author: "Laczkó Zöld E, Kis C, Nagy-György E, et al.",
      journal: "Foods",
      publicationDate: "2025-07-02",
      doi: "10.3390/foods14132348",
      pmid: "40647100",
      url: "https://doi.org/10.3390/foods14132348",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    weimarck: {
      title: "Phototoxicity in Heracleum sphondylium",
      author: "Weimarck G, Nilsson E",
      journal: "Planta Medica",
      publicationDate: "1980-02-01",
      doi: "10.1055/s-2008-1074844",
      pmid: "6988851",
      url: "https://doi.org/10.1055/s-2008-1074844",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    maggi: {
      title: "Composition and biological activities of hogweed [Heracleum sphondylium L. subsp. ternatum (Velen.) Brummitt] essential oil and its main components octyl acetate and octyl butyrate",
      author: "Maggi F, Quassinti L, Bramucci M, et al.",
      journal: "Natural Product Research",
      publicationDate: "2014-04-04",
      doi: "10.1080/14786419.2014.904311",
      pmid: "24697288",
      url: "https://doi.org/10.1080/14786419.2014.904311",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Eltrot", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A plant in the carrot family. It's sold in food supplements meant to support the reproductive organs, balance hormones and act as an aphrodisiac.",
      source: "laczko",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, oil from the fruits slowed the growth of melanoma and colon cancer cells. It hasn't been tested in people.",
      source: "maggi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Hogweed contains furocoumarins. The European Food Safety Authority lists it as a substance of possible concern for health in foods and supplements.",
      source: "laczko",
    },
    {
      category: "TOXICITY",
      description: "The plant can be phototoxic: its compounds can make skin react badly to sunlight.",
      source: "weimarck",
    },
  ],
});

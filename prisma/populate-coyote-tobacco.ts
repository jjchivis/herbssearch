import { run } from "./lib/populate-herb";

// Coyote Tobacco (Nicotiana attenuata), from a 2018 chemical study of ancient
// pipes in the Columbia River Basin (Tushingham et al.). Family per GBIF.

run({
  name: "Coyote Tobacco",
  profile: {
    family: "Solanaceae",
    genus: "Nicotiana",
    species: "attenuata",
    nativeRange: "Western North America",
    partsUsed: "The leaves, traditionally smoked",
  },
  sources: {
    tushingham: {
      title: "Biomolecular archaeology reveals ancient origins of indigenous tobacco smoking in North American Plateau",
      author: "Tushingham S, Snyder CM, Brownstein KJ, Damitio WJ, Gang DR",
      journal: "Proceedings of the National Academy of Sciences of the United States of America",
      publicationDate: "2018-10-29",
      doi: "10.1073/pnas.1813796115",
      pmid: "30373836",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6243282/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Wild Tobacco", type: "COMMON_NAME" }],
  constituents: [{ name: "Nicotine", slug: "nicotine", type: "pyridine alkaloid" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Wild tobacco smoked in pipes on the Columbia Plateau for at least 1,200 years." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Nicotine found in ancient stone pipes shows that Indigenous peoples of the Columbia River Basin, including ancestors of the Nez Perce, smoked wild tobacco for at least 1,200 years. They likely tended native species such as coyote tobacco long before trade tobacco arrived in the 1790s.",
      source: "tushingham",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Coyote tobacco contains nicotine, an addictive stimulant.",
      source: "tushingham",
    },
  ],
});

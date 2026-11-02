import { run } from "./lib/populate-herb";

// Greenthread (Thelesperma filifolium), from the Native American Ethnobotany
// Database (Moerman, BRIT). Its close relative Navajo tea (T. megapotamicum)
// has more records and a 2019 metals study (Samuel-Nakamura and Hodge); both
// are labeled as the related species. Family per GBIF.

run({
  name: "Greenthread",
  profile: {
    family: "Asteraceae",
    genus: "Thelesperma",
    species: "filifolium",
    nativeRange: "Central and southwestern US and northern Mexico",
    partsUsed: "The leaves, stems and flowers",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Thelesperma filifolium",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Thelesperma+filifolium",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    naebRelated: {
      title: "Native American Ethnobotany Database: Thelesperma megapotamicum (Navajo tea)",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Thelesperma+megapotamicum",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    samuel: {
      title: "Occurrence and Risk of Metal(loid)s in Thelesperma megapotamicum Tea Plant",
      author: "Samuel-Nakamura C, Hodge FS",
      journal: "Plants",
      publicationDate: "2019-12-23",
      doi: "10.3390/plants9010021",
      pmid: "31877937",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7020170/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "native-american-ethnobotany", notes: "Drunk as a tea by the Tewa and Western Keres; its relative Navajo tea by the Navajo, Hopi and Apache." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Tewa and Western Keres steeped the plant as a tea to drink. The Western Keres also gave it to children with tuberculosis.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its close relative Navajo tea (Thelesperma megapotamicum) is a popular wild tea. The Navajo drank it as a stimulant and for toothache, and the Hopi, Apache and Keres boiled the flowers and young leaves for tea. The Hopi also used the flowers as a reddish-brown dye.",
      source: "naebRelated",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Navajo tea, a close relative, gathered near uranium mines and busy roads on the Navajo Nation had cadmium above WHO limits for medicinal plants.",
      source: "samuel",
    },
  ],
  preparations: [{ slug: "tea-infusion", notes: "Leaves and flowers steeped as a tea.", source: "naeb" }],
});

import { run } from "./lib/populate-herb";

// Greenthread (Thelesperma filifolium), from the Native American Ethnobotany
// Database (Moerman, BRIT) and a 2009 University of New Mexico Maxwell Museum
// guide to edible wild plants, which covers cota (T. filifolium and
// T. megapotamicum) together, and Charles W. Kane's notes on Navajo tea from his
// Applied Medical Botany site (citing his books). Its close relative Navajo tea (T. megapotamicum)
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
    maxwell: {
      title: "A Place at Mother Earth's Table: Edible Wild Plants of the Rio Grande Region (Cota)",
      organization: "Maxwell Museum of Anthropology, University of New Mexico",
      publicationDate: "2009-01-01",
      url: "https://maxwellmuseum.unm.edu/sites/default/files/public/ResGuide.pdf",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    kane: {
      title: "Thelesperma megapotamicum (Greenthread): medicinal uses (citing Medicinal Plants of the American Southwest and Wild Edible Plants of New Mexico)",
      author: "Kane CW",
      organization: "Applied Medical Botany",
      url: "https://medivetus.com/botanic/thelesperma-megapotamicum-greenthread-medicinal-uses/",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
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
  synonyms: [
    { name: "Cota", type: "REGIONAL_NAME", region: "New Mexico" },
    { name: "Navajo Tea", type: "COMMON_NAME" },
    { name: "Indian Tea", type: "COMMON_NAME" },
  ],
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
    {
      category: "TRADITIONAL",
      summary:
        "Known in New Mexico as cota, greenthread and its relatives make a reddish-brown, slightly sweet tea enjoyed across the Southwest by Native Americans, Hispanics and Anglos. A Zuni bundle of about 12 dried stalks makes about 10 cups.",
      source: "maxwell",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Hispanic folk medicine the tea is used to bring down fever, soothe babies' chafed skin, and increase urine. At Zuni, two kinds of cota are recognized, and expectant mothers drink one or the other in the hope of having a boy or a girl. Navajo weavers and Hopi basket makers use it as a dye.",
      source: "maxwell",
    },
    {
      category: "PRECLINICAL",
      summary: "The tea provides small amounts of potassium, calcium and magnesium.",
      source: "maxwell",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Herbalist Charles Kane describes Navajo tea, a close relative, as a pleasant, non-bitter beverage tea that's only mildly diuretic and otherwise not significantly medicinal. Its very young leaves can be chopped into salads.",
      source: "kane",
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
  symptoms: [{ slug: "fever", notes: "Cota tea is a Hispanic folk remedy for fever in New Mexico. Not studied in people." }],
  preparations: [{ slug: "tea-infusion", notes: "Leaves and flowers steeped as a tea.", source: "naeb" }],
});

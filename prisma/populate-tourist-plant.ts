import { run } from "./lib/populate-herb";

// Tourist Plant (Dimorphocarpa wislizeni, spectacle pod), from the Native
// American Ethnobotany Database and a 2019 review of plants for colon cancer
// (Aiello et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Tourist Plant",
  profile: {
    family: "Brassicaceae",
    genus: "Dimorphocarpa",
    species: "wislizeni",
    nativeRange: "The deserts of the southwestern United States and northern Mexico",
    partsUsed: "The whole plant, leaves, seeds and pods",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Dimorphocarpa wislizeni",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Dimorphocarpa",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    aiello: {
      title: "Medicinal Plants in the Prevention and Treatment of Colon Cancer",
      author: "Aiello P, Sharghi M, Mansourkhani SM, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2019-12-04",
      doi: "10.1155/2019/2075614",
      pmid: "32377288",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7187726/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Spectacle Pod", type: "COMMON_NAME" }, { name: "Touristplant", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Hopi, Navajo, Zuni, Apache and Western Keres peoples." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Hopi sprinkled the powdered plant, leaves or ground pods on wounds and scrapes, and used the ground stalk as a salve for sores. The Navajo used it for itching, scabs, insect bites and hemorrhoids, and children chewed it to strengthen their teeth.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The White Mountain Apache used a tea of the plant as a wash for swellings and throat troubles. The Western Keres inhaled the crushed seeds and leaves for a sore nose and used them as snuff. The Hopi describe the plant as a strong skin irritant.",
      source: "naeb",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A water extract was one of several plants that killed cancer cells in a hamster study listed in a 2019 review of plants for colon cancer.",
      source: "aiello",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "The Hopi describe the plant as a strong irritant on the skin.",
      source: "naeb",
    },
  ],
});

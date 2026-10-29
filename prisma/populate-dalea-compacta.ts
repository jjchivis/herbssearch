import { run } from "./lib/populate-herb";

// Dalea compacta (compact prairie clover), from a 2026 review of the genus
// Dalea (Solis-Peña et al.) and the Native American Ethnobotany Database.
// No lab, human or safety studies were found. Family per GBIF.

run({
  name: "Dalea Compacta",
  profile: {
    family: "Fabaceae",
    genus: "Dalea",
    species: "compacta",
    nativeRange: "The central United States and Rocky Mountains",
    partsUsed: "The root",
  },
  sources: {
    solis: {
      title: "Phytochemistry and Pharmacological Potential of the Genus Dalea: Current Evidence and Future Directions",
      author: "Solis-Peña R, Correa-Macias VL, Peralez-Olguin HL, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2026-08-15",
      doi: "10.3390/ph19081294",
      pmid: "42653790",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13516910/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    naeb: {
      title: "Native American Ethnobotany Database: Dalea compacta",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Dalea+compacta",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [{ name: "Compact Prairie Clover", type: "COMMON_NAME" }, { name: "Bush Prairie Clover", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Zuni for stomachaches and skin sores." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Zuni people of New Mexico drank a root tea for stomachaches and put a root poultice on sores and rashes.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A 2026 review of the prairie clovers also records the Zuni use of this species for stomachaches and as a poultice for sores and skin rashes. No lab or human studies of this species were found.",
      source: "solis",
    },
  ],
});

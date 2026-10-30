import { run } from "./lib/populate-herb";

// Pale wolfberry (Lycium pallidum), from the Native American Ethnobotany
// Database and a 2021 study of plants at archaeological sites (Pavlik et al.).
// No lab, human or safety studies were found. Family per GBIF.

run({
  name: "Pale Wolfberry",
  profile: {
    family: "Solanaceae",
    genus: "Lycium",
    species: "pallidum",
    nativeRange: "The southwestern United States and northern Mexico",
    partsUsed: "The berries and root",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Lycium pallidum",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Lycium+pallidum",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    pavlik: {
      title: "Plant species richness at archaeological sites suggests ecological legacy of Indigenous subsistence on the Colorado Plateau",
      author: "Pavlik BM, Louderback LA, Vernon KB, et al.",
      journal: "Proceedings of the National Academy of Sciences of the United States of America",
      publicationDate: "2021-05-01",
      doi: "10.1073/pnas.2025047118",
      pmid: "34001615",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8166080/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Wolfberry", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Berries eaten by the Navajo, Hopi, Havasupai, Acoma and Pueblo peoples." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The berries were an important food. The Navajo, Hopi, Havasupai, Acoma, Laguna and Jemez ate them fresh, dried them for winter, cooked them into syrup, jam, soup and stew, and mashed them into drinks. The Navajo put the ground root into cavities for toothache.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "On the Colorado Plateau, pale wolfberry grows at ancient Puebloan sites more than elsewhere, a sign it was among the plants people relied on.",
      source: "pavlik",
    },
  ],
});

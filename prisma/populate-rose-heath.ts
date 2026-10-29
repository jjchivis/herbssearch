import { run } from "./lib/populate-herb";

// Rose Heath (Chaetopappa ericoides), from the Native American Ethnobotany
// Database. No lab, human or safety studies were found. Family per GBIF.

run({
  name: "Rose Heath",
  profile: {
    family: "Asteraceae",
    genus: "Chaetopappa",
    species: "ericoides",
    nativeRange: "The deserts and plains of the western United States and northern Mexico",
    partsUsed: "The whole plant and root",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Chaetopappa ericoides",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Chaetopappa+ericoides",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Hopi, Navajo, Zuni, Havasupai and Western Keres peoples." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Several Southwestern peoples used rose heath as medicine. The Zuni rubbed a tea of the plant on the body for swelling, rheumatism and aches from a cold. The Havasupai used it for digestive troubles, including in children. The Hopi used the root as an all-purpose remedy and for a sore nose.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Ramah Navajo chewed the leaves for toothache, used the dried plant as snuff for nose trouble, and used it on snakebites. The Kayenta Navajo drank it with sumac berries for kidney and bladder disease.",
      source: "naeb",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Oneseed juniper (Juniperus monosperma), from the Native American Ethnobotany
// Database. No lab, human or safety studies were found. Family per GBIF.

run({
  name: "Oneseed Juniper",
  profile: {
    family: "Cupressaceae",
    genus: "Juniperus",
    species: "monosperma",
    nativeRange: "The southwestern United States",
    partsUsed: "The berries, leaves, twigs and bark",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Juniperus monosperma",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Juniperus+monosperma",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Hopi, Apache, Acoma, Jemez, Isleta and Western Keres." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Southwestern peoples ate the berries fresh, cooked, in stews and gravies, and as a seasoning for meat, and in hard times as a starvation food.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The White Mountain Apache drank a leaf tea for colds and coughs. The Hopi used it for indigestion and as a laxative, and put heated twigs on bruises and sprains. Jemez and Isleta women drank a leaf tea after childbirth.",
      source: "naeb",
    },
  ],
});

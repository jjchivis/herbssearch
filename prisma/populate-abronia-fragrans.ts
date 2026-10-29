import { run } from "./lib/populate-herb";

// Abronia fragrans (snowball sand verbena), from the Native American
// Ethnobotany Database. No lab, human or safety studies were found. Family
// per GBIF.

run({
  name: "Abronia Fragrans",
  profile: {
    family: "Nyctaginaceae",
    genus: "Abronia",
    species: "fragrans",
    nativeRange: "The western and central United States",
    partsUsed: "The roots, flowers and whole plant",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Abronia fragrans",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Abronia+fragrans",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [{ name: "Snowball Sand Verbena", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Navajo, Zuni, Ute, Acoma and Laguna peoples." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Acoma and Laguna peoples ground the roots, mixed them with corn meal and ate them, partly to improve appetite. The Western Keres made the flowers into ceremonial necklaces.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Navajo used the plant for boils, insect bites and stomach cramps, and the Ramah Navajo used a cold tea as a lotion for sores, a sore mouth and sweaty feet. The Ute used the roots and flowers for stomach and bowel troubles, and the Zuni ate the fresh flowers for stomachaches.",
      source: "naeb",
    },
  ],
});

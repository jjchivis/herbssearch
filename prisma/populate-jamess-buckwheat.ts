import { run } from "./lib/populate-herb";

// James's buckwheat (Eriogonum jamesii), from the Native American Ethnobotany
// Database. No lab, human or safety studies were found. Family per GBIF.

run({
  name: "James's Buckwheat",
  profile: {
    family: "Polygonaceae",
    genus: "Eriogonum",
    species: "jamesii",
    nativeRange: "The southwestern United States",
    partsUsed: "The root and whole plant",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Eriogonum jamesii",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Eriogonum+jamesii",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Zuni, Navajo, Apache and Western Keres." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Zuni ate the root for stomachaches and used it as a wash for sore eyes. The Ramah Navajo drank a tea of the plant to ease labor pains and used the root as a 'life medicine'. The Western Keres chewed the roots as a heart medicine and used a root tea for low spirits.",
      source: "naeb",
    },
  ],
});

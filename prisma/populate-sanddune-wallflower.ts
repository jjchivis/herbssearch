import { run } from "./lib/populate-herb";

// Sanddune wallflower (Erysimum capitatum), from the Native American
// Ethnobotany Database. No lab, human or safety studies were found. Family per
// GBIF.

run({
  name: "Sanddune Wallflower",
  profile: {
    family: "Brassicaceae",
    genus: "Erysimum",
    species: "capitatum",
    nativeRange: "Western North America",
    partsUsed: "The whole plant, leaves, seeds and root",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Erysimum capitatum",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Erysimum+capitatum",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [{ name: "Western Wallflower", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Zuni, Navajo, Hopi, Okanagan-Colville and Teton Sioux." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Zuni used a tea of the plant for muscle aches, and the Western Keres put chewed leaves on swellings. The Ramah Navajo sniffed the crushed leaves for headache, snuffed the pods for a congested nose and put the warmed root on toothache. The Okanagan-Colville put the pounded plant on fresh wounds, and the Teton Sioux used the seeds for stomach and bowel cramps.",
      source: "naeb",
    },
  ],
});

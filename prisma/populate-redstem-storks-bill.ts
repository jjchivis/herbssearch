import { run } from "./lib/populate-herb";

// Redstem stork's bill (Erodium cicutarium), from the Native American
// Ethnobotany Database. No lab, human or safety studies were found. Family per
// GBIF.

run({
  name: "Redstem Stork's Bill",
  profile: {
    family: "Geraniaceae",
    genus: "Erodium",
    species: "cicutarium",
    nativeRange: "Europe and Asia; now widespread in North America",
    partsUsed: "The leaves, stems and root",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Erodium cicutarium",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Erodium+cicutarium",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [{ name: "Common Stork's Bill", type: "COMMON_NAME" }, { name: "Filaree", type: "COMMON_NAME" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Zuni, Navajo, Jemez, Costanoan and Diegueño." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Diegueño cooked the young leaves as greens, the Costanoan ate the raw stems, and Hopi children chewed the roots like gum.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Zuni put a poultice of the chewed root on sores and rashes and drank a root tea for stomachache. Jemez women ate it to make more breast milk, and the Costanoan used a leaf tea for typhoid fever.",
      source: "naeb",
    },
  ],
});

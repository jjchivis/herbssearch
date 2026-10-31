import { run } from "./lib/populate-herb";

// Chamiso (Atriplex canescens, four-wing saltbush), from the Native American
// Ethnobotany Database (Moerman, BRIT). No medical research on this species
// was found in PubMed Central. Family per GBIF.

run({
  name: "Chamiso",
  profile: {
    family: "Amaranthaceae",
    genus: "Atriplex",
    species: "canescens",
    nativeRange: "Western North America",
    partsUsed: "The leaves, roots, flowers, seeds and ashes",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Atriplex canescens",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Atriplex+canescens",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [
    { name: "Four-wing Saltbush", type: "COMMON_NAME" },
    { name: "Fourwing Saltbush", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by the Navajo, Hopi, Zuni, Havasupai, Jemez, Tewa, Shoshoni and other peoples of the Southwest.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Navajo, Zuni and Jemez put crushed leaves or flowers on ant bites. The Havasupai whipped the leaves into a soapy lather to wash hair and soothe itchy rashes such as chickenpox and measles.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Ramah Navajo healers gave a tea of the leaves or roots for a bad cough, a tea of the tops or roots to bring up a painful stomach, and a warm root poultice for toothache. Leaves were used as a snuff for nose trouble.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Hopi and Tewa use its ashes like baking soda in cooking, and to keep blue corn meal and piki bread blue. The Navajo dye wool yellow with the leaves and twigs, and feed the plant to sheep for salt in winter. The Gosiute ate the seeds.",
      source: "naeb",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "A traditional Native American remedy for ant bites and itchy rashes. Not studied in people." },
    { slug: "cough", notes: "The Ramah Navajo took a tea of the leaves or roots for a bad cough. Not studied in people." },
  ],
  preparations: [{ slug: "poultice", notes: "Crushed leaves or flowers put on ant bites.", source: "naeb" }],
});

import { run } from "./lib/populate-herb";

// Scarlet Globemallow (Sphaeralcea coccinea), from the Native American
// Ethnobotany Database (Moerman, BRIT). No medical research on this species
// was found in PubMed Central. Family per GBIF.

run({
  name: "Scarlet Globemallow",
  profile: {
    family: "Malvaceae",
    genus: "Sphaeralcea",
    species: "coccinea",
    nativeRange: "Western and central North America",
    partsUsed: "The whole plant, especially the roots",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Sphaeralcea coccinea",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Sphaeralcea+coccinea",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by the Lakota, Dakota, Navajo, Cheyenne, Comanche and Western Keres peoples.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Dakota and Lakota chewed the plant or its roots and put it on sores and wounds as a cooling, healing salve. The Kayenta Navajo used the dried plant as a dusting powder for sores and as a lotion for skin problems, and the Comanche used a tea of it for swellings.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Lakota and Dakota ceremonies, medicine men rubbed the chewed roots on their hands to protect them from boiling water. The Navajo used it as a tonic to improve appetite and a tea of it to stop bleeding.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cheyenne mixed a tea of the plant into other medicines to make them taste better. The Navajo chewed the roots when food was scarce.",
      source: "naeb",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Chewed plant or roots were put on sores and wounds by the Dakota and Lakota. Not studied in people." },
    { slug: "loss-of-appetite", notes: "The Kayenta Navajo used it as a tonic to improve appetite. Not studied in people." },
  ],
  preparations: [{ slug: "poultice", notes: "Chewed roots or plant put on sores and wounds.", source: "naeb" }],
});

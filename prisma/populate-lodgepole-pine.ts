import { run } from "./lib/populate-herb";

// Lodgepole Pine (Pinus contorta), from the Native American Ethnobotany
// Database (Moerman, BRIT) and the USDA Poisonous Plant Research Laboratory
// page on ponderosa pine, which names lodgepole pine as containing the same
// cattle-abortion compound. Family per GBIF.

run({
  name: "Lodgepole Pine",
  profile: {
    family: "Pinaceae",
    genus: "Pinus",
    species: "contorta",
    nativeRange: "Western North America",
    partsUsed: "The pitch (sap), inner bark, needles and buds",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Pinus contorta",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Pinus+contorta",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    usda: {
      title: "Ponderosa Pine (Pinus ponderosa)",
      organization: "USDA Agricultural Research Service, Poisonous Plant Research Laboratory",
      url: "https://www.ars.usda.gov/pacific-west-area/logan-ut/poisonous-plant-research/docs/ponderosa-pine-pinus-ponderosa",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by the Thompson, Okanagan, Gitksan, Carrier, Blackfoot, Bella Coola, Kwakiutl and many other western peoples.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The pitch was the main medicine. The Thompson and Okanagan chewed the gum or boiled it with grease into a salve for colds, coughs, sore throats and chest congestion, and rubbed it on sore muscles and joints.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Pitch was put on cuts, sores, burns and boils by the Bella Coola, Quinault and Flathead, and mixed with fat as a skin cream. The Klamath and Carrier put it on sore or snow-blind eyes.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Gitksan, Shuswap and Kutenai took the inner bark or a tea of it for tuberculosis and coughs, and the Okanagan-Colville ate the inner layer for stomach ulcers. The Thompson made a tea of the twigs and needles for flu.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The inner bark, seeds and sap were eaten, and the pitch was chewed like gum. The Blackfoot, Cheyenne and Dakota used the trunks as tipi poles.",
      source: "naeb",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Lodgepole pine contains isocupressic acid, the chemical in ponderosa pine needles that causes miscarriage in pregnant cattle. Effects in people haven't been studied.",
      source: "usda",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Pitch and inner bark were traditional cough remedies across the West. Not studied in people." },
    { slug: "sore-throat", notes: "Pitch was chewed or sucked for sore throats. Not studied in people." },
    { slug: "wounds-and-burns", notes: "Pitch was put on cuts, sores and burns. Not studied in people." },
  ],
  preparations: [{ slug: "salve", notes: "Pitch boiled with grease, rubbed on for colds, chest congestion and sore muscles.", source: "naeb" }],
});

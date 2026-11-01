import { run } from "./lib/populate-herb";

// Tiger Flower (Tigridia pavonia), from three Mexican ethnobotany studies
// (Blancas et al. 2013; Farfán-Heredia et al. 2018; Aparicio Aparicio et al.
// 2021), Dr. Duke's Ethnobotanical Database (USDA, citing Martínez 1969), the
// Online Nahuatl Dictionary (citing Karttunen 1992) and Plants For A Future. No
// medical research on this plant was found.
// Family per GBIF.

run({
  name: "Tiger Flower",
  profile: {
    family: "Iridaceae",
    genus: "Tigridia",
    species: "pavonia",
    nativeRange: "Mexico and Central America",
    partsUsed: "The corm (bulb) and flowers",
  },
  sources: {
    blancas: {
      title: "Ecological and socio-cultural factors influencing plant management in Náhuatl communities of the Tehuacán Valley, Mexico",
      author: "Blancas J, Casas A, Pérez-Salicrup D, Caballero J, Vega E",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2013-06-02",
      doi: "10.1186/1746-4269-9-39",
      pmid: "23725379",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3702518/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    farfan: {
      title: "Cultural, economic, and ecological factors influencing management of wild plants and mushrooms interchanged in Purépecha markets of Mexico",
      author: "Farfán-Heredia B, Casas A, Rangel-Landa S",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2018-11-20",
      doi: "10.1186/s13002-018-0269-9",
      pmid: "30454000",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6245724/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    aparicio: {
      title: "Are Mixtec Forgetting Their Plants? Intracultural Variation of Ethnobotanical Knowledge in Oaxaca, Mexico",
      author: "Aparicio Aparicio JC, Voeks RA, Silveira Funch L",
      journal: "Economic Botany",
      publicationDate: "2021-11-29",
      doi: "10.1007/s12231-021-09535-2",
      pmid: "34866643",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8629604/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    duke: {
      title: "Ethnobotanical Plant: Tigridia pavonia (citing Martínez M, Las Plantas Medicinales de México, 1969)",
      organization: "Dr. Duke's Phytochemical and Ethnobotanical Databases, USDA Agricultural Research Service",
      url: "https://phytochem.nal.usda.gov/node/11887",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    nahuatl: {
      title: "oceloxochitl (citing Karttunen F, An Analytical Dictionary of Nahuatl, 1992)",
      organization: "Online Nahuatl Dictionary, ed. Stephanie Wood, Wired Humanities Projects, University of Oregon",
      url: "https://nahuatl.wired-humanities.org/node/200054",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    pfaf: {
      title: "Tigridia pavonia - Tiger Flower",
      organization: "Plants For A Future",
      url: "https://pfaf.org/user/Plant.aspx?LatinName=Tigridia+pavonia",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Tlalteztli", type: "REGIONAL_NAME", region: "Mexico (Náhuatl)" },
    { name: "Tisa'aí", type: "REGIONAL_NAME", region: "Mexico (Mixtec)" },
    { name: "Oceloxochitl", type: "TRADITIONAL_NAME", region: "Mexico (Nahuatl)" },
    { name: "Cacomite", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Flor de Tigre", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Peacock Flower", type: "COMMON_NAME" },
    { name: "Mexican Shell Flower", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The corm is eaten by Náhuatl communities in the Tehuacán Valley and by Mixtec people in Oaxaca, gathered occasionally from the wild.",
      source: "blancas",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Baked, the small corm tastes like sweet potato. Eaten raw it burns the mouth. The plant has also been used to promote fertility.",
      source: "pfaf",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Purépecha markets in Michoacán, its showy flowers are offerings to saints and decorations for the home. It's the only one of these ceremonial flowers people grow, from seed and by potting the bulbs.",
      source: "farfan",
    },
    {
      category: "TRADITIONAL",
      summary: "In Mexican folk medicine it has been used for chest complaints, fever, childbirth and infertility.",
      source: "duke",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its Nahuatl (Aztec) name is oceloxochitl. A standard Nahuatl dictionary records the bulbs as food and as a remedy for fevers and infertility, though not from early Aztec texts directly.",
      source: "nahuatl",
    },
    {
      category: "TRADITIONAL",
      summary: "In a study of Mixtec plant knowledge, tiger flower was among the plants listed as edible.",
      source: "aparicio",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A Mexican folk remedy for fever. Not studied in people." },
    { slug: "fertility", notes: "Traditionally used in Mexico to promote fertility. Not studied in people." },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "The corm should be cooked; eaten raw it causes an unpleasant burning in the mouth. No medical or safety studies were found.",
      source: "pfaf",
    },
  ],
});

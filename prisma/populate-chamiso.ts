import { run } from "./lib/populate-herb";

// Chamiso (Atriplex canescens, four-wing saltbush), from the Native American
// Ethnobotany Database (Moerman, BRIT) and a 2021 review of the Atriplex genus
// (Ali et al.). No medical research on this species was found in PubMed
// Central. A 2018 Taos News column (Hawley) notes that
// "chamiso" means big sagebrush in northern New Mexico. Family per GBIF.

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
    ali: {
      title: "The Therapeutic Properties, Ethno pharmacology and Phyto-chemistry of Atriplex Species: A review",
      author: "Ali B, Musaddiq S, Iqbal S, Rehman T, Shafiq N, Hussain A",
      journal: "Pakistan Journal of Biochemistry and Biotechnology",
      publicationDate: "2021-01-01",
      doi: "10.52700/pjbb.v2i1.38",
      url: "https://doi.org/10.52700/pjbb.v2i1.38",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hawley: {
      title: "Herb of the month: Chamiso",
      author: "Hawley R",
      organization: "The Taos News",
      publicationDate: "2018-01-11",
      url: "https://www.taosnews.com/la-vida/herb-of-the-month-chamiso/article_4ac591a0-9e97-508b-9196-d3918eddcbd2.html",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
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
    {
      category: "TRADITIONAL",
      summary:
        "Outside the US, the leaves are used for stomach and gut infections in Mexico, and a leaf paste is put on snake bites in Gilgit-Baltistan, Pakistan.",
      source: "ali",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a leaf extract slowed the growth of E. coli and Salmonella bacteria, and extracts killed mosquito larvae. Very little else has been studied; the leaves contain 20-hydroxyecdysone, a plant steroid, and betaine.",
      source: "ali",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Watch the name: in northern New Mexico, \"chamiso\" usually means big sagebrush (Artemisia tridentata), a different plant with different uses. \"Chamisa\" is rabbitbrush.",
      source: "hawley",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "A traditional Native American remedy for ant bites and itchy rashes. Not studied in people." },
    { slug: "cough", notes: "The Ramah Navajo took a tea of the leaves or roots for a bad cough. Not studied in people." },
  ],
  preparations: [{ slug: "poultice", notes: "Crushed leaves or flowers put on ant bites.", source: "naeb" }],
});

import { run } from "./lib/populate-herb";

// Big Sagebrush (Artemisia tridentata), called chamiso in northern New Mexico,
// from the Native American Ethnobotany Database (Moerman, BRIT), a 2022 study of
// sagebrush oils (Zheljazkov et al.), a 1967 lab study of its oil (Nagy and
// Tengerdy), a 2025 review of Asteraceae allergies (Ključevšek and Kreft), and a
// 2018 Taos News herbal column (Hawley) for the local name and its pregnancy
// caution. Family per GBIF.

run({
  name: "Big Sagebrush",
  profile: {
    family: "Asteraceae",
    genus: "Artemisia",
    species: "tridentata",
    nativeRange: "Western North America",
    partsUsed: "The leaves and leafy branches",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Artemisia tridentata",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Artemisia+tridentata",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    zheljazkov: {
      title: "Essential Oil Yield, Composition, and Bioactivity of Sagebrush Species in the Bighorn Mountains",
      author: "Zheljazkov VD, Cantrell CL, Jeliazkova EA, Astatkie T, Schlegel V",
      journal: "Plants",
      publicationDate: "2022-05-01",
      doi: "10.3390/plants11091228",
      pmid: "35567228",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9103225/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nagy: {
      title: "Antibacterial action of essential oils of Artemisia as an ecological factor. I. Antibacterial action of the volatile oils of Artemisia tridentata and Artemisia nova on aerobic bacteria",
      author: "Nagy JG, Tengerdy RP",
      journal: "Applied Microbiology",
      publicationDate: "1967-07-01",
      doi: "10.1128/am.15.4.819-821.1967",
      pmid: "4963443",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC547073/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kljucevsek: {
      title: "Allergic Potential of Medicinal Plants From the Asteraceae Family",
      author: "Ključevšek T, Kreft S",
      journal: "Health Science Reports",
      publicationDate: "2025-02-23",
      doi: "10.1002/hsr2.70398",
      pmid: "39995792",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11847717/",
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
    { name: "Chamiso", type: "REGIONAL_NAME", region: "Northern New Mexico" },
    { name: "Chamiso Hediondo", type: "REGIONAL_NAME", region: "Northern New Mexico" },
    { name: "Sagebrush", type: "COMMON_NAME" },
    { name: "Desert Sage", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Camphor", slug: "camphor", type: "monoterpene" }],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by more than 20 peoples, including the Paiute, Shoshoni, Navajo, Zuni, Tewa, Hopi, Washo, Klamath and Okanagan-Colville.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Big sagebrush was one of the most widely used medicines of the West, especially for colds. The Paiute, Shoshoni, Washo, Zuni, Kawaiisu and many other peoples drank a tea of the leaves for colds, coughs, flu and fever, and breathed the steam or smoke for head colds and headaches.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Paiute, Shoshoni, Tewa and Hopi chewed the leaves or drank the tea for indigestion and stomach cramps. The Klamath and Northern Paiute took it for diarrhea, and the Shoshoni gargled it for sore throats.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Paiute and Shoshoni washed cuts, wounds and sores with a leaf decoction, bathed newborns in it, and used the powdered leaves as baby powder. Hot poultices of the branches were put on aching joints and muscles, and the Zuni put leaves in shoes for athlete's foot.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Many peoples burned the branches to purify homes, sweathouses and sickrooms, and the Paiute and Shoshoni gave a tea of the plant as a tonic after childbirth.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In northern New Mexico, big sagebrush is called chamiso (not to be confused with chamiso saltbush). A local herbalist recommends a tea of the dried leaves, sipped before meals, as a bitter to help digestion, and for coughs and menstrual cramps.",
      source: "hawley",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaves contain an aromatic oil that can be up to 45% camphor, along with eucalyptol and alpha-pinene. In a 2022 study, sagebrush oils didn't have significant effects against germs, malaria or leishmania parasites.",
      source: "zheljazkov",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 1967 lab study, big sagebrush oil slowed the growth of several bacteria, including Staphylococcus aureus; E. coli was the most resistant.",
      source: "nagy",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Sagebrush essential oil is considered toxic.",
      source: "zheljazkov",
    },
    {
      category: "ALLERGY",
      description:
        "Big sagebrush pollen contains an officially recognized allergen (Art t 1), from the same group as the main allergen in mugwort pollen. Artemisia pollen is a major cause of hay fever.",
      source: "kljucevsek",
    },
    {
      category: "PREGNANCY",
      description: "A Taos herbalist advises not using chamiso (big sagebrush) during pregnancy.",
      source: "hawley",
    },
    {
      category: "PREGNANCY",
      description:
        "A Thompson elder recorded in the ethnobotany database said the tea was too strong to drink, warning that it could stop a woman from having more children.",
      source: "naeb",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "One of the most widely used Native American cold remedies, as a tea or steam. Not studied in people." },
    { slug: "cough", notes: "A leaf tea was taken for coughs by many Western peoples. Not studied in people." },
    { slug: "indigestion", notes: "Leaves were chewed or made into tea for indigestion and stomach cramps. Not studied in people." },
    { slug: "sore-throat", notes: "The Shoshoni gargled a leaf decoction for sore throats. Not studied in people." },
    { slug: "fever", notes: "A leaf tea was taken to cause sweating and break fevers. Not studied in people." },
  ],
  preparations: [
    { slug: "tea-infusion", notes: "Leaf tea taken for colds, coughs, fevers and indigestion.", source: "naeb" },
    { slug: "poultice", notes: "Hot or mashed leaves and branches put on aches, swellings and sores.", source: "naeb" },
  ],
});

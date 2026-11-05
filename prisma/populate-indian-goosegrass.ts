import { run } from "./lib/populate-herb";

// Indian Goosegrass (Eleusine indica), from a rat liver study (Iqbal and
// Gnanaraj 2012), a Malaysian phytochemical study with traditional uses (Salim et
// al. 2023), rat cholesterol and fat-digestion studies (Ong et al. 2016, 2017), a
// Cameroonian lab study (Sagnia et al. 2014) and a goat worm study (Gonzaga et al.
// 2023). Not the same plant as Cleavers, which is also called goosegrass. Family
// per GBIF.

run({
  name: "Indian Goosegrass",
  profile: { family: "Poaceae", genus: "Eleusine", species: "indica", nativeRange: "Tropical and subtropical Asia and Africa", partsUsed: "The whole plant, especially the root, and the leaves" },
  sources: {
    iqbal: {
      title: "Eleusine indica L. possesses antioxidant activity and precludes carbon tetrachloride (CCl₄)-mediated oxidative hepatic damage in rats",
      author: "Iqbal M, Gnanaraj C",
      journal: "Environmental Health and Preventive Medicine",
      publicationDate: "2012-07-01",
      doi: "10.1007/s12199-011-0255-5",
      pmid: "22207570",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3390565/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    salim: {
      title: "Annotation and Identification of Phytochemicals from Eleusine indica Using High-Performance Liquid Chromatography Tandem Mass Spectrometry: Databases-Driven Approach",
      author: "Salim F, et al.",
      journal: "Molecules",
      publicationDate: "2023-03-30",
      doi: "10.3390/molecules28073111",
      pmid: "37049873",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10095617/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ong2017: {
      title: "Potential Lipid-Lowering Effects of Eleusine indica (L) Gaertn. Extract on High-Fat-Diet-Induced Hyperlipidemic Rats",
      author: "Ong SL, Nalamolu KR, Lai HY",
      journal: "Pharmacognosy Magazine",
      publicationDate: "2017-01-01",
      doi: "10.4103/0973-1296.203986",
      pmid: "28479718",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5407099/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ong2016: {
      title: "Porcine Pancreatic Lipase Inhibitory Agent Isolated from Medicinal Herb and Inhibition Kinetics of Extracts from Eleusine indica (L.) Gaertner",
      author: "Ong SL, Mah SH, Lai HY",
      journal: "Journal of Pharmaceutics",
      publicationDate: "2016-10-31",
      doi: "10.1155/2016/8764274",
      pmid: "27872792",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5107878/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sagnia: {
      title: "Antioxidant and anti-inflammatory activities of extracts from Cassia alata, Eleusine indica, Eremomastax speciosa, Carica papaya and Polyscias fulva medicinal plants collected in Cameroon",
      author: "Sagnia B, Fedeli D, Casetti R, Montesano C, Falcioni G, Colizzi V",
      journal: "PLoS One",
      publicationDate: "2014-08-04",
      doi: "10.1371/journal.pone.0103999",
      pmid: "25090613",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4121200/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gonzaga: {
      title: "In vivo anthelmintic activity of Eleusine indica extracts against gastrointestinal nematodes of goats",
      author: "Gonzaga EA, Taño TV, Gonzaga LJA",
      journal: "Journal of Advanced Veterinary and Animal Research",
      publicationDate: "2023-09-24",
      doi: "10.5455/javar.2023.j686",
      pmid: "37969803",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10636077/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wiregrass", type: "COMMON_NAME" },
    { name: "Rumput Sambau", type: "REGIONAL_NAME", region: "Malaysia" },
    { name: "Sohinatad", type: "REGIONAL_NAME", region: "Sabah, Malaysia" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A common tropical weed grass. In traditional medicine the whole plant, especially the root, is boiled and drunk for fever, cough and worms, and to increase urine. The seed has been eaten in famine and used for liver complaints.",
      source: "iqbal",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Malaysia, leaf juice is used after childbirth to help deliver the placenta and ease pain from vaginal bleeding. A root decoction is used for asthma, and a whole-plant decoction for urinary infections.",
      source: "salim",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a water extract protected the liver from chemical damage.",
      source: "iqbal",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats on a high-fat diet, an extract lowered body weight, cholesterol, triglycerides and LDL cholesterol, and raised HDL cholesterol. Its lutein blocked a fat-digesting enzyme in lab tests.",
      source: "ong2017",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a leaf extract from Cameroon protected cells from damage and may help reduce inflammation.",
      source: "sagnia",
    },
    {
      category: "PRECLINICAL",
      summary: "In goats with gut worms, an extract cut worm eggs by up to 56%, less than the standard worming drug levamisole (97%).",
      source: "gonzaga",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In a rat safety test, a single large dose of an extract caused no deaths, toxic signs or tissue damage. No human safety studies were found.",
      source: "ong2017",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional fever remedy. Not studied in people." },
    { slug: "cough", notes: "Traditionally used for cough. Not studied in people." },
    { slug: "high-cholesterol", notes: "An extract lowered cholesterol in rats on a high-fat diet. Not tested in people." },
    { slug: "asthma-and-wheezing", notes: "A root decoction is a Malaysian remedy for asthma. Not studied in people." },
  ],
});

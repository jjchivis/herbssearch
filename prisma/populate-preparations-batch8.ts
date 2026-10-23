import { run } from "./lib/populate-herb";

// Preparations sweep, batch 8: abstracts of studies about each exact species
// (Europe PMC), plus the US vanilla extract standard (21 CFR 169.175).

run(
  {
    name: "Black Walnut",
    sources: {
      s1: { title: "Thirty polymorphic nuclear microsatellite loci from black walnut", author: "Woeste K, Burns R, Rhodes O, et al.", journal: "The Journal of Heredity", publicationDate: "2002-01-01", doi: "10.1093/jhered/93.1.58", pmid: "12011179", url: "https://pubmed.ncbi.nlm.nih.gov/12011179/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Black walnut is prized for its edible nut.", source: "s1" },
    ],
  },
  {
    name: "Chia Seeds",
    sources: {
      s1: { title: "Characterization of phenolic compounds in chia (Salvia hispanica L.) seeds, fiber flour and oil", author: "Oliveira-Alves SC, Vendramini-Costa DB, Betim Cazarin CB, et al.", journal: "Food Chemistry", publicationDate: "2017-04-05", doi: "10.1016/j.foodchem.2017.04.002", pmid: "28490078", url: "https://pubmed.ncbi.nlm.nih.gov/28490078/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Chia seeds and chia products are eaten as a food, and their use has grown in recent years.", source: "s1" },
    ],
  },
  {
    name: "Cornelian Cherry",
    sources: {
      s1: { title: "Loganin ameliorates cartilage degeneration and osteoarthritis development in an osteoarthritis mouse model", author: "Hu J, Zhou J, Wu J, et al.", journal: "Journal of Ethnopharmacology", publicationDate: "2019-09-29", doi: "10.1016/j.jep.2019.112261", pmid: "31577939", url: "https://pubmed.ncbi.nlm.nih.gov/31577939/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
      s2: { title: "The effect of Liuwei Dihuang decoction on PI3K/Akt signaling pathway in liver of type 2 diabetes mellitus (T2DM) rats with insulin resistance", author: "Dai B, Wu Q, Zeng C, et al.", journal: "Journal of Ethnopharmacology", publicationDate: "2016-07-09", doi: "10.1016/j.jep.2016.07.024", pmid: "27401286", url: "https://pubmed.ncbi.nlm.nih.gov/27401286/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The red fruit has been used both as a food and as a medicinal herb in traditional Chinese medicine.", source: "s1" },
      { slug: "decoction", notes: "It's one of the six herbs in Liuwei Dihuang decoction, a classic Chinese formula.", source: "s2" },
    ],
  },
  {
    name: "Cynomorium Songaricum",
    sources: {
      s1: { title: "Cynomorium songaricum prevents bone resorption in ovariectomized rats through RANKL/RANK/TRAF6 mediated suppression of PI3K/AKT and NF-κB pathways", author: "Ma X, Liu J, Yang L, et al.", journal: "Life Sciences", publicationDate: "2018-08-06", doi: "10.1016/j.lfs.2018.08.008", pmid: "30092296", url: "https://pubmed.ncbi.nlm.nih.gov/30092296/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's eaten as a food as well as used as a traditional Chinese medicine.", source: "s1" },
    ],
  },
  {
    name: "Horseradish",
    sources: {
      s1: { title: "Horseradish (Armoracia rusticana), a neglected medical and condiment species with a relevant glucosinolate profile: a review", author: "Agneta R, Möllers C, Rivelli AR", journal: "Genetic Resources and Crop Evolution", publicationDate: "2013-10-01", doi: "10.1007/s10722-013-0010-4", url: "https://doi.org/10.1007/s10722-013-0010-4", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Horseradish has a long tradition as a condiment and in preserving food in many parts of the world.", source: "s1" },
    ],
  },
  {
    name: "Jasmine",
    sources: {
      s1: { title: "Identification of potent odorants in Chinese jasmine green tea scented with flowers of Jasminum sambac", author: "Ito Y, Sugimoto A, Kakuda T, et al.", journal: "Journal of Agricultural and Food Chemistry", publicationDate: "2002-08-01", doi: "10.1021/jf020282h", pmid: "12166975", url: "https://pubmed.ncbi.nlm.nih.gov/12166975/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Chinese jasmine tea is green tea scented with jasmine flowers.", source: "s1" },
    ],
  },
  {
    name: "Lion's Mane",
    sources: {
      s1: { title: "Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial", author: "Mori K, Inatomi S, Ouchi K, et al.", journal: "Phytotherapy Research", publicationDate: "2009-03-01", doi: "10.1002/ptr.2634", pmid: "18844328", url: "https://pubmed.ncbi.nlm.nih.gov/18844328/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Lion's mane (yamabushitake) is an edible mushroom.", source: "s1" },
    ],
  },
  {
    name: "Mauby Bark",
    sources: {
      s1: { title: "The control of hypertension by use of coconut water and mauby: two tropical food drinks", author: "Alleyne T, Roache S, Thomas C, et al.", journal: "The West Indian Medical Journal", publicationDate: "2005-01-01", doi: "10.1590/s0043-31442005000100002", pmid: "15892382", url: "https://pubmed.ncbi.nlm.nih.gov/15892382/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Mauby is a traditional tropical drink made from the bark.", source: "s1" },
    ],
  },
  {
    name: "Scrophularia Root",
    sources: {
      s1: { title: "Effects of Scrophularia ningpoensis Hemsl. on inhibition of proliferation, apoptosis induction and NF-κB signaling of immortalized and cancer cell lines", author: "Shen X, Eichhorn T, Greten HJ, et al.", journal: "Pharmaceuticals", publicationDate: "2012-02-14", doi: "10.3390/ph5020189", pmid: "24288088", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3763631/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "tea-infusion", notes: "It has been used in China for centuries as an herbal tea.", source: "s1" },
    ],
  },
  {
    name: "Shan Zha",
    sources: {
      s1: { title: "Triterpenic acids present in hawthorn lower plasma cholesterol by inhibiting intestinal ACAT activity in hamsters", author: "Lin Y, Vermeer MA, Trautwein EA", journal: "Evidence-Based Complementary and Alternative Medicine", publicationDate: "2010-10-19", doi: "10.1093/ecam/nep007", pmid: "19228775", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3139965/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Chinese hawthorn is an edible fruit that's also used in traditional Chinese medicine.", source: "s1" },
    ],
  },
  {
    name: "Shi Hu",
    sources: {
      s1: { title: "Structural analysis of a rhamnoarabinogalactan from the stems of Dendrobium nobile Lindl", author: "Wang JH, Luo JP, Yang XF, et al.", journal: "Food Chemistry", publicationDate: "2010-10-01", doi: "10.1016/j.foodchem.2010.03.012", url: "https://doi.org/10.1016/j.foodchem.2010.03.012", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Its stems are a well-known edible and medicinal plant in Southeast Asia.", source: "s1" },
    ],
  },
  {
    name: "Stemona Root",
    sources: {
      s1: { title: "Baiheqingjin formula reduces inflammation in mice with asthma by inhibiting the PI3K/AKT/NF-κB signaling pathway", author: "Yan X, Tong X, Jia Y, et al.", journal: "Journal of Ethnopharmacology", publicationDate: "2023-12-09", doi: "10.1016/j.jep.2023.117565", pmid: "38081397", url: "https://pubmed.ncbi.nlm.nih.gov/38081397/", sourceType: "peer_reviewed" as const, tier: "TIER_3_PEER_REVIEWED" as const },
    },
    preparations: [
      { slug: "decoction", notes: "It's one of the seven herbs in Baiheqingjin decoction, a Chinese formula.", source: "s1" },
    ],
  },
  {
    name: "Vanilla",
    sources: {
      s1: { title: "21 CFR 169.175 — Vanilla extract", organization: "US Food and Drug Administration (Code of Federal Regulations)", url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-169/subpart-B/section-169.175", sourceType: "government" as const, tier: "TIER_1_GOVERNMENT" as const },
    },
    preparations: [
      { slug: "extract", notes: "In the US, vanilla extract is legally defined as the flavor compounds of vanilla beans dissolved in alcohol and water, with at least 35% alcohol.", source: "s1" },
    ],
  },
);

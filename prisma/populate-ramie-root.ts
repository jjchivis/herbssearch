import { run } from "./lib/populate-herb";

// Ramie Root (Boehmeria nivea, zhu ma gen). No review of the root exists; this
// uses the background sections of two lab/animal studies (Lim et al. 2020; Lee
// et al. 2026) and a 2022 trial-review protocol for a Chinese formula containing
// it (Sun et al.).

run({
  name: "Ramie Root",
  profile: {
    family: "Urticaceae",
    genus: "Boehmeria",
    species: "nivea",
    nativeRange: "Eastern Asia",
    partsUsed: "The root; the leaves are also used",
  },
  sources: {
    lim: {
      title: "Extract of Boehmeria nivea Suppresses Mast Cell-Mediated Allergic Inflammation by Inhibiting Mitogen-Activated Protein Kinase and Nuclear Factor-κB",
      author: "Lim JY, Lee JH, Lee BR, Kim MA, Lee YM, Kim DK, Choi JK",
      journal: "Molecules",
      publicationDate: "2020-09-12",
      doi: "10.3390/molecules25184178",
      pmid: "32932637",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7570717/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lee: {
      title: "Boehmeria nivea (L.) Gaud. ameliorate oxidative stress-mediated inflammatory Responses and apoptosis in LPS/CSC-induced chronic obstructive pulmonary disease mouse model",
      author: "Lee BW, Ha JH, Yi DH, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-01-28",
      doi: "10.3389/fphar.2025.1710694",
      pmid: "41684519",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12891129/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sun: {
      title: "Efficacy and safety of Yunkang oral liquid combined with conventional therapy for threatened miscarriage of first-trimester pregnancy: a protocol for systematic review and meta-analysis",
      author: "Sun P, Tang L, Yan D, Li B, Xu L, Wang F",
      journal: "PLOS One",
      publicationDate: "2022-02-08",
      doi: "10.1371/journal.pone.0263581",
      pmid: "35134068",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8824317/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ramie", type: "COMMON_NAME" },
    { name: "Zhu Ma Gen", type: "TRADITIONAL_NAME" },
    { name: "Chinese Grass", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called zhu ma gen; the root is used for threatened miscarriage, colic in pregnancy, impetigo and vaginal discharge." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ramie is a plant of the nettle family from eastern Asia, used in traditional Chinese medicine. Its leaves are used for wounds, and its roots for:\n- Threatened miscarriage\n- Colic during pregnancy\n- Impetigo, a skin infection\n- Vaginal discharge",
      source: "lim",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In folk medicine, the roots, leaves and flowers of ramie have been used to stop bleeding, protect the liver and increase urination. Traditional Korean medicine also uses it to reduce fever, and it's regarded as a medicinal food.",
      source: "lee",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Ramie root (zhu ma gen) is one of the ingredients of Yunkang oral liquid, a Chinese medicine used alongside standard care for threatened miscarriage in early pregnancy. In pregnant mice, the formula reduced the loss of embryos. A review of its trials in people was planned in 2022.",
      source: "sun",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and mouse studies, a ramie extract calmed allergic reactions on the skin. This hasn't been tested in people.",
      source: "lim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with a lung disease like COPD, a ramie leaf extract reduced lung inflammation and damage and improved breathing tests. This hasn't been tested in people.",
      source: "lee",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In animal tests, ramie leaf extract caused no harm to rats given it daily for 28 days, and a single large dose of ramie didn't harm pregnant mice or their unborn young. These were animal tests, not studies in people.",
      source: "lee",
    },
  ],
  symptoms: [
    { slug: "pregnancy-and-childbirth", notes: "The root is traditionally used in Chinese medicine for threatened miscarriage. Its safety and effect in pregnancy haven't been shown in people." },
  ],
});

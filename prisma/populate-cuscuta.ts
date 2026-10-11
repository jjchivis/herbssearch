import { run } from "./lib/populate-herb";

// Cuscuta (dodder; Cuscuta chinensis seed, tu si zi), from a 2025 review of the
// seed in reproductive disease, toxicity and drug interactions (Li et al.), a 2014
// review of C. chinensis (Donnapee et al.; abstract only) and a 2019 review of
// the genus (Noureen et al.).

run({
  name: "Cuscuta",
  profile: {
    family: "Convolvulaceae",
    genus: "Cuscuta",
    species: "chinensis",
    partsUsed: "The seeds (tu si zi)",
  },
  sources: {
    li: {
      title: "Therapeutic roles and molecular mechanisms of Cuscutae Semen in reproductive diseases",
      author: "Li K, Zheng H, Hao W, Kong Y, Zhou Q",
      journal: "Frontiers in Immunology",
      publicationDate: "2025-09-19",
      doi: "10.3389/fimmu.2025.1659342",
      pmid: "41050656",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12491298/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    donnapee: {
      title: "Cuscuta chinensis Lam.: A systematic review on ethnopharmacology, phytochemistry and pharmacology of an important traditional herbal medicine",
      author: "Donnapee S, Li J, Yang X, Ge AH, Donkor PO, Gao XM, Chang YX",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2014-10-02",
      doi: "10.1016/j.jep.2014.09.032",
      pmid: "25281912",
      url: "https://pubmed.ncbi.nlm.nih.gov/25281912/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    noureen: {
      title: "The genus Cuscuta (Convolvolaceac): An updated review on indigenous uses, phytochemistry, and pharmacology",
      author: "Noureen S, Noreen S, Ghumman SA, Batool F, Bukhari SNA",
      journal: "Iranian Journal of Basic Medical Sciences",
      publicationDate: "2019-11-01",
      doi: "10.22038/ijbms.2019.35296.8407",
      pmid: "32128087",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7038433/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dodder", type: "COMMON_NAME" },
    { name: "Chinese Dodder", type: "COMMON_NAME" },
    { name: "Cuscuta Leaves", type: "COMMON_NAME" },
    { name: "Tu Si Zi", type: "TRADITIONAL_NAME" },
    { name: "Tusizi", type: "TRADITIONAL_NAME" },
    { name: "Cuscutae Semen", type: "COMMON_NAME" },
    { name: "Love Vine", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "The seed, tu si zi, is a top-grade tonic in the Shennong Herbal Classic, used for the liver and kidneys, eyesight, keeping pregnancies stable and fertility." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Dodder is a group of about 170 parasitic plants. They have tiny scale-like leaves and little or no green colouring, and live by wrapping around a host plant and drawing food from it. People in many parts of the world use dodders in foods and traditional medicine.",
      source: "noureen",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The seed of Chinese dodder, tu si zi, was ranked a top-grade herb in the Shennong Herbal Classic. It's a tonic used to:\n- Nourish the liver and kidneys\n- Improve eyesight\n- Keep a pregnancy stable (\"calm the fetus\")\n- Improve sperm quality and treat infertility\n- Reduce frequent urination",
      source: "li",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Chinese dodder is used as a traditional medicine in China, Korea, Pakistan, Vietnam, India and Thailand, most often against ageing, for inflammation and pain, and as an aphrodisiac.",
      source: "donnapee",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, the seed and its compounds (especially flavonoids) affected sex hormones and improved signs of male and female infertility, early menopause (premature ovarian insufficiency) and polycystic ovary syndrome. Other research suggests possible benefits for bone loss, kidney disease linked to diabetes, Alzheimer's disease and ageing. These haven't been confirmed in people.",
      source: "li",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There are no clinical trials of dodder seed on its own, only of Chinese formulas that contain it. A review of 16 studies with 1,960 men found that one such formula, Wuzi Yanzong pill, improved sperm count and movement and pregnancy rates more than Western medicine. The quality of these trials may be poor, and more high-quality trials are needed.",
      source: "li",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In mice, dodder seed extract had low toxicity. At high doses it reduced body weight, changed blood counts and raised liver enzymes. There's little information on side effects in people. The Chinese Pharmacopoeia recommends 6 to 12 g of the dried seed a day.",
      source: "li",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Based mostly on lab and animal research, dodder seed may interact with:\n- Hormone treatments, including birth control pills and hormone replacement therapy\n- Diabetes medicines, raising the risk of low blood sugar\n- Medicines that suppress the immune system, possibly weakening them\n- Other medicines, by changing how the liver breaks them down",
      source: "li",
    },
    {
      category: "PREGNANCY",
      description: "Although it's traditionally used to keep pregnancies stable, a 2014 review lists effects that could cause abortion among those seen in research on Chinese dodder.",
      source: "donnapee",
    },
  ],
  symptoms: [
    { slug: "fertility", notes: "Traditionally used for infertility; formulas containing it improved sperm quality in trials of uncertain quality. Not tested on its own." },
    { slug: "sexual-health", notes: "Used as an aphrodisiac in several Asian traditions. Not tested in trials." },
  ],
});

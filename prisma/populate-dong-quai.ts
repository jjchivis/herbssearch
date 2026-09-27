import { run } from "./lib/populate-herb";

// Dong quai (Angelica sinensis), from verified sources: Memorial Sloan
// Kettering's About Herbs entry, a 2014 ethnopharmacology review (Hook, J
// Ethnopharmacol) and a small randomized trial in men (Al-Bareeq et al. 2010).
// NCCIH has no dong quai page. Family per GBIF / Catalogue of Life.

run({
  name: "Dong Quai",
  profile: { family: "Apiaceae", genus: "Angelica", species: "sinensis", partsUsed: "The root" },
  sources: {
    mskcc: {
      title: "Dong Quai",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2026-07-29",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/dong-quai",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    hook: {
      title: "Danggui to Angelica sinensis root: are potential benefits to European women lost in translation? A review",
      author: "Hook IL",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2014-02-01",
      doi: "10.1016/j.jep.2013.12.018",
      pmid: "24365638",
      url: "https://pubmed.ncbi.nlm.nih.gov/24365638/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    albareeq: {
      title: "Dong Quai (angelica sinensis) in the treatment of hot flashes for men on androgen deprivation therapy: results of a randomized double-blind placebo controlled trial",
      author: "Al-Bareeq RJ, Ray AA, Nott L, Pautler SE, Razvi H",
      journal: "Canadian Urological Association Journal",
      organization: "Canadian Urological Association Journal",
      publicationDate: "2010-02-01",
      doi: "10.5489/cuaj.775",
      pmid: "20165579",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2811999/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Danggui", type: "TRADITIONAL_NAME", region: "China (TCM)" },
    { name: "Chinese Angelica", type: "COMMON_NAME" },
    { name: "Tang Kuei", type: "COMMON_NAME" },
    { name: "Female Ginseng", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "One of the herbs most commonly used by Traditional Chinese Medicine practitioners, with a long history in China, Korea and Japan, mainly for women's reproductive problems such as period pain, missing periods and menopause.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Dong quai (danggui) has a long history of use in China, Korea and Japan, and is still one of the herbs most commonly used by Traditional Chinese Medicine practitioners in China and Europe. It is mainly used for women's reproductive problems, such as period pain, missing periods and menopause.\n\nTechnical detail: dysmenorrhea, amenorrhoea.",
      source: "hook",
    },
    {
      category: "TRADITIONAL",
      summary: "In traditional Chinese medicine, dong quai is used for menstrual cramps and for menopausal symptoms such as hot flashes.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, dong quai showed anti-tumor effects, and in animals it protected against damage from chemotherapy and radiation. But it also acted like estrogen in the lab, and it promoted the growth of estrogen-sensitive breast tumors in mice.\n\nTechnical detail: estrogen receptor-positive breast tumors in a murine model.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies of dong quai for menopausal symptoms are inconclusive. Some research supports its use for PMS and period pain, but formal clinical trials are limited.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Well-designed trials using standardized dong quai are in short supply, though research on its extracts and compounds suggests many of its traditional uses have some scientific basis.",
      source: "hook",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial of 22 men with hot flashes caused by prostate cancer hormone treatment, dong quai taken daily for 3 months made no difference to how often, how badly or how long they had hot flashes, compared with placebo.\n\nTechnical detail: randomized, double-blind, placebo-controlled pilot; 17 of 22 completed.",
      source: "albareeq",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Dong quai may increase the risk of bleeding with blood thinners such as warfarin. It may also affect how the body handles several other medicines, including anti-platelet medicines and clozapine, and long-term use may make some medicines less effective.\n\nTechnical detail: CYP3A4 substrates; dual antiplatelet therapy (altered pharmacokinetics); clozapine (induces metabolism); lisinopril worsened anemia in animal models.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects include skin sensitivity to sunlight and sun-related rashes, loss of appetite, bloating, diarrhea and fever. Breast enlargement in men and high blood pressure have also been reported.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Avoid dong quai during pregnancy because of the risk of miscarriage.",
      source: "mskcc",
    },
    { category: "BREASTFEEDING", description: "Avoid dong quai while breastfeeding.", source: "mskcc" },
    {
      category: "CONTRAINDICATION",
      description: "If you have a hormone-sensitive cancer, talk to your doctor before using dong quai, because it can act like estrogen.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "menopause-symptoms",
      notes: "Traditionally used for hot flashes, but studies of it for menopausal symptoms are inconclusive.",
    },
    {
      slug: "menstrual-discomfort",
      notes: "A traditional Chinese remedy for period pain. Some research supports it, but formal trials are limited.",
    },
    { slug: "premenstrual-syndrome", notes: "Some research supports its use for PMS, but formal trials are limited." },
  ],
});

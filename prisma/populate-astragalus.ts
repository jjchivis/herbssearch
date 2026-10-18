import { run } from "./lib/populate-herb";

// Astragalus (Astragalus membranaceus), from a verified source: NCCIH (2025).
// Family per GBIF / Catalogue of Life.

run({
  name: "Astragalus",
  profile: {
    family: "Fabaceae",
    genus: "Astragalus",
    species: "membranaceus",
    partsUsed: "The root",
  },
  sources: {
    mcculloch: {
      title: "Astragalus-based Chinese herbs and platinum-based chemotherapy for advanced non-small-cell lung cancer: meta-analysis of randomized trials",
      author: "McCulloch M, See C, Shu XJ, et al.",
      journal: "Journal of Clinical Oncology",
      organization: "Journal of Clinical Oncology",
      publicationDate: "2006-01-01",
      doi: "10.1200/JCO.2005.03.6392",
      pmid: "16421421",
      url: "https://pubmed.ncbi.nlm.nih.gov/16421421/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    chengGastric: {
      title: "Efficacy and Safety of Astragalus-Containing Traditional Chinese Medicine Combined With Platinum-Based Chemotherapy in Advanced Gastric Cancer: A Systematic Review and Meta-Analysis",
      author: "Cheng M, Hu J, Zhao Y, et al.",
      journal: "Frontiers in Oncology",
      organization: "Frontiers in Oncology",
      publicationDate: "2021-08-04",
      doi: "10.3389/fonc.2021.632168",
      pmid: "34422628",
      url: "https://pubmed.ncbi.nlm.nih.gov/34422628/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    zhangImmune: {
      title: "The Effect of Astragalus on Humoral and Cellular Immune Response: A Systematic Review and Meta-Analysis of Human Studies",
      author: "Zhang X, Qu X, Zou Y",
      journal: "Complementary Medicine Research",
      organization: "Complementary Medicine Research",
      publicationDate: "2023-11-10",
      doi: "10.1159/000534826",
      pmid: "37952511",
      url: "https://pubmed.ncbi.nlm.nih.gov/37952511/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    latourRowers: {
      title: "Standardized astragalus extract for attenuation of the immunosuppression induced by strenuous physical exercise: randomized controlled trial",
      author: "Latour E, Arlet J, Latour EE, et al.",
      journal: "Journal of the International Society of Sports Nutrition",
      organization: "Journal of the International Society of Sports Nutrition",
      publicationDate: "2021-07-16",
      doi: "10.1186/s12970-021-00425-5",
      pmid: "34271953",
      url: "https://pubmed.ncbi.nlm.nih.gov/34271953/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nccih: {
      title: "Astragalus: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-05-01",
      url: "https://www.nccih.nih.gov/health/astragalus",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Huang Qi", type: "TRADITIONAL_NAME" },
    { name: "Milk Vetch", type: "COMMON_NAME" },
    { name: "Astragale", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "The root (huang qi) has been used for centuries, often combined with other herbs." },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2006 review of 34 trials with 2,815 people with advanced lung cancer (non-small cell) found that adding astragalus-based Chinese herbal formulas to platinum chemotherapy lowered the risk of death at 12 months and more often shrank tumours. The reviewers said this needs confirming in well-controlled trials.\n\nTechnical detail: death at 12 months RR 0.67 (95% CI 0.52 to 0.87; 12 studies, 940 people); tumour response RR 1.34 (95% CI 1.24 to 1.46; 30 studies).",
      source: "mcculloch",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2021 review of trials in advanced stomach cancer found that adding astragalus-containing Chinese medicines to platinum chemotherapy shrank tumours more often, raised some immune cell counts and caused fewer side effects. The evidence was low to moderate quality, and more high-quality trials are needed.\n\nTechnical detail: objective response rate RR 1.24 (95% CI 1.15 to 1.34).",
      source: "chengGastric",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 19 studies with 1,094 people found astragalus lowered blood markers of inflammation and raised some immune cell counts. The results varied a lot between studies.\n\nTechnical detail: cytokines IL-2, IL-4, IL-6, IL-10, TNF-α and IFN-γ fell; CD3 and the CD4/CD8 ratio rose.",
      source: "zhangImmune",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial, 18 Polish national team rowers took 500 mg of astragalus root or a dummy pill a day during 6 weeks of hard training. Astragalus helped keep some immune cell levels steady after an all-out rowing test.\n\nTechnical detail: NK and regulatory T cells stayed at baseline; changes in IL-2 and the IL-2/IL-10 ratio after exertion.",
      source: "latourRowers",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Astragalus root has been used in traditional Chinese medicine for centuries, often combined with other herbs. It is promoted for colds and other upper respiratory infections, hay fever, asthma, chronic fatigue, chronic kidney disease and diabetes, to strengthen the immune system, and on the skin for wound healing.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There isn't enough reliable evidence to know whether astragalus helps any health condition. Recent reviews found:\n- Added to metformin, it lowered blood sugar more than metformin alone in diabetes studies, though most were of poor quality.\n- It boosted immune responses and lowered inflammation markers, but the studies were small and varied.\n- Added to standard care, it improved some measures in kidney disorders.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description: "Astragalus may be safe by mouth. Up to 60 grams a day for up to 4 months doesn't seem to cause side effects.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description: "Avoid astragalus if you have an autoimmune disease, because it might worsen symptoms.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Astragalus may interact with medicines that suppress the immune system.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "There's not enough information on its safety during pregnancy or breastfeeding, and animal research suggests it may harm an unborn baby.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "seasonal-immune-support",
      notes: "Promoted to strengthen the immune system; small studies suggest it boosts immune responses, but evidence isn't reliable enough to know if it helps.",
    },
  ],
});

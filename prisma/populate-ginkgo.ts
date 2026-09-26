import { run } from "./lib/populate-herb";

// Ginkgo (Ginkgo biloba), from verified sources: NCCIH, the EMA/HMPC public
// summary on ginkgo leaf (2015) and a Cochrane review on intermittent
// claudication (Nicolaï et al. 2013). Family per GBIF / Catalogue of Life;
// native range per USDA GRIN-Global (taxon 17540).

run({
  name: "Ginkgo",
  profile: {
    family: "Ginkgoaceae",
    genus: "Ginkgo",
    species: "biloba",
    nativeRange: "Native to China, where wild trees survive in Guizhou and Zhejiang; now planted widely around the world",
    partsUsed: "The leaves, usually as an extract. The seeds are poisonous.",
  },
  sources: {
    nccih: {
      title: "Ginkgo: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/ginkgo",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Ginkgo leaf: Herbal medicine summary for the public (EMA/324406/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-11-19",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/ginkgo-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Ginkgo biloba for intermittent claudication",
      author: "Nicolaï SP, Kruidenier LM, Bendermacher BL, Prins MH, Stokmans RA, Broos PP, Teijink JA",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2013-06-01",
      doi: "10.1002/14651858.CD006888.pub3",
      pmid: "23744597",
      url: "https://pubmed.ncbi.nlm.nih.gov/23744597/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Fossil Tree", type: "COMMON_NAME" },
    { name: "Maidenhair Tree", type: "COMMON_NAME" },
    { name: "Japanese Silver Apricot", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Long used in Chinese medicine for cough, diarrhea and other conditions." },
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine for heavy legs and cold hands and feet linked to minor circulation problems.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ginkgo has a long history in Chinese medicine for cough, diarrhea and other conditions. Today the leaf extract is promoted for anxiety, heart disease, memory and thinking problems, diabetes, PMS, schizophrenia and ringing in the ears (tinnitus).",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes powdered ginkgo leaf for heaviness in the legs and cold hands and feet that can come with minor circulation problems, once a doctor has ruled out serious conditions. It said the clinical studies on circulation were too limited to count as evidence.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on clinical studies in adults aged 50 and over, the European Medicines Agency concluded that a specific ginkgo leaf extract can improve age-related decline in thinking, and quality of life, in adults with mild dementia.\n\nTechnical detail: \"well-established use\" for the dry extract (acetone extraction).",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Ginkgo has not been shown to prevent dementia or slow it down. A large study of more than 3,000 older adults over about 6 years found no difference from placebo. Ginkgo may modestly help dementia symptoms, especially at high doses, but the results are inconsistent. Evidence is limited or lacking for preventing heart disease, lowering high blood pressure, tinnitus and multiple sclerosis. A small amount of evidence suggests possible benefit for anxiety, PMS, schizophrenia and vertigo, but the findings are inconclusive.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 Cochrane review looked at ginkgo for leg pain when walking caused by narrowed leg arteries (intermittent claudication). Across 14 trials with 739 people, ginkgo increased walking distance by only about 65 meters compared with placebo, which wasn't statistically significant. The reviewers concluded there's no evidence of a meaningful benefit for peripheral artery disease.\n\nTechnical detail: 11 trials (477 participants) measured absolute claudication distance; effect size 3.57 kcal (95% CI −0.10 to 7.23, P = 0.06); publication bias likely inflated the effect.",
      source: "cochrane",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description: "Ginkgo may increase the risk of bleeding with blood thinners such as warfarin, and may interact with other medicines.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Bleeding in the eye, nose, brain or gut has been reported with ginkgo leaf medicines. If you tend to bleed easily or take blood-thinning medicines, only use the extract after talking to a doctor.",
      source: "ema",
    },
    {
      category: "TOXICITY",
      description: "Fresh ginkgo seeds are poisonous if eaten. Roasted seeds and crude plant material have also caused serious effects.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "The most common side effects are dizziness, stomach and gut symptoms, and headache.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In dementia studies, headache was the most common side effect (more than 1 in 10 people). When used for circulation problems, stomach upsets, headaches and allergic reactions have been reported.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "Ginkgo leaf medicines should only be used by adults. For circulation problems, see a doctor if symptoms last more than 2 weeks.",
      source: "ema",
    },
    { category: "PREGNANCY", description: "Ginkgo may be unsafe during pregnancy.", source: "nccih" },
  ],
  symptoms: [
    {
      slug: "poor-circulation",
      notes:
        "Traditionally used in Europe for heavy legs and cold hands and feet from minor circulation problems. A Cochrane review found no meaningful benefit for leg pain caused by narrowed arteries.",
    },
  ],
});

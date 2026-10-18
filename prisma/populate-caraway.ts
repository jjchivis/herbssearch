import { run } from "./lib/populate-herb";

// Caraway (Carum carvi), from the EMA/HMPC public summary on caraway fruit
// (EMA/498568/2015) and a 2022 meta-analysis of a peppermint oil and caraway oil
// combination (Madisch et al.; sponsored by the product's manufacturer).

run({
  name: "Caraway",
  profile: {
    family: "Apiaceae",
    genus: "Carum",
    species: "carvi",
    nativeRange: "Cultivated or gathered for its fruit",
    partsUsed: "The fruit (often called seeds), usually as a herbal tea",
  },
  sources: {
    kazemipoor: {
      title: "Antiobesity effect of caraway extract on overweight and obese women: a randomized, triple-blind, placebo-controlled clinical trial",
      author: "Kazemipoor M, Radzi CW, Hajifaraji M, Haerian BS, Mosaddegh MH, Cordell GA",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2013-11-10",
      doi: "10.1155/2013/928582",
      pmid: "24319489",
      url: "https://pubmed.ncbi.nlm.nih.gov/24319489/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ema: {
      title: "Caraway fruit (Carum carvi L., fructus): summary for the public (EMA/498568/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-10-20",
      url: "https://www.ema.europa.eu/en/medicines/herbal/carvi-fructus",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    madisch: {
      title: "Menthacarin, a Proprietary Peppermint Oil and Caraway Oil Combination, Improves Multiple Complaints in Patients with Functional Gastrointestinal Disorders: A Systematic Review and Meta-Analysis",
      author: "Madisch A, Frieling T, Zimmermann A, et al.",
      journal: "Digestive Diseases",
      publicationDate: "2022-12-09",
      doi: "10.1159/000528553",
      pmid: "36502789",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10273916/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Carum carvi", type: "COMMON_NAME" },
    { name: "Caraway Seed", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for bloating and wind, based on long-standing use." },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2013 trial, 70 overweight or obese women who exercised took 30 mL of caraway extract or a dummy drink every day for 90 days, without changing their diet. The caraway group lost more weight and body fat and had a smaller waist-to-hip ratio. Cholesterol and blood pressure didn't change, and no side effects were seen.\n\nTechnical detail: body mass index and body fat percentage fell versus placebo.",
      source: "kazemipoor",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes caraway fruit as a traditional herbal medicine to relieve digestive problems such as bloating and wind. It's usually taken as a tea, by adults and children over 12. This rests on at least 30 years of safe use, not on proof from clinical trials; the agency noted a lack of studies in patients.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Caraway oil has been tested together with peppermint oil in a product called Menthacarin. A 2022 review of 5 trials with 580 people with indigestion that has no clear cause found the combination eased symptoms better than a dummy pill, and about as well as a comparison medicine. Combining 3 of the trials (249 people) showed less stomach pain and more people feeling much better. The review was paid for by the product's maker. These results are for the oil combination, not caraway tea.\n\nTechnical detail: functional dyspepsia; pain intensity SMD 0.80 (95% CI 0.39 to 1.21); Clinical Global Impression item 2, RR 2.65 (95% CI 1.81 to 3.87).",
      source: "madisch",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "When the European Medicines Agency assessed caraway fruit medicines, no side effects had been reported.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description:
        "Don't use caraway medicines if you're allergic to caraway or other carrot-family plants (fennel, anise, celery, coriander and dill), or to mugwort or birch.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "Caraway fruit medicines are for adults and children over 12. See a doctor if symptoms last longer than 2 weeks.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "bloating", notes: "Recognized in Europe as a traditional medicine for bloating and wind." },
    { slug: "indigestion", notes: "A caraway oil and peppermint oil combination eased indigestion in trials paid for by its maker." },
  ],
});

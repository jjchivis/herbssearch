import { run } from "./lib/populate-herb";

// Dandelion (Taraxacum officinale), from verified sources: NCCIH (2024), the
// EMA/HMPC community herbal monograph and its assessment report (both published
// 2011). Family per GBIF / Catalogue of Life.

run({
  name: "Dandelion",
  profile: {
    family: "Asteraceae",
    genus: "Taraxacum",
    species: "officinale",
    nativeRange: "Originally from Europe; now grows throughout the cooler (temperate) parts of the Northern Hemisphere",
    partsUsed: "The root, leaves and flowers",
  },
  sources: {
    nccih: {
      title: "Dandelion: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/dandelion",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Taraxacum officinale Weber ex Wigg., radix cum herba (EMA/HMPC/212895/2008)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-01-28",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-taraxacum-officinale-weber-ex-wigg-radix-cum-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaReport: {
      title: "Assessment report on Taraxacum officinale Weber ex Wigg., radix cum herba (EMA/HMPC/212897/2008)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-01-28",
      url: "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-taraxacum-officinale-weber-ex-wigg-radix-cum-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Dandelion Root", type: "COMMON_NAME" },
    { name: "Lion's Tooth", type: "COMMON_NAME" },
    { name: "Blowball", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Used in Europe for mild digestive complaints historically linked to bile flow, and to increase urination. Some German dandelion medicines have been sold since 1976.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The flowers, leaves and root have traditionally been used in Mexican and other North American medicine. Today, dandelion products are promoted for indigestion (taken by mouth) and joint pain (taken by mouth or put on the skin).",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Europe, dandelion root and leaves have long been used to relieve mild digestive complaints that were historically linked to bile flow, and to increase urination. Some German products have been sold since 1976 for poor bile flow with fullness and gas.",
      source: "emaReport",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes dandelion root with leaves as a traditional herbal medicine for:\n- Mild digestive problems, such as a feeling of fullness, gas and slow digestion\n- Short-term loss of appetite\n- Increasing urine to flush the urinary tract in minor urinary complaints",
      source: "emaMonograph",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a water-based dandelion leaf extract increased the amount of bile produced by up to 40% per hour. In rats with chemical liver damage, a dandelion extract lowered liver enzymes in the blood, suggesting it may protect the liver.\n\nTechnical detail: intraduodenal decoction (Böhm 1959); whole-plant hot water extract against CCl4-induced injury in Sprague-Dawley rats lowered serum ALT and AST (Park et al. 2007).",
      source: "emaReport",
    },
    {
      category: "PRECLINICAL",
      summary: "Early lab studies have looked at dandelion extracts for effects on inflammation, antioxidant activity and viruses.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Very little research has been done on dandelion in people. There's no strong scientific evidence that it helps any health condition.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use dandelion medicines if you have:\n- A blocked or inflamed bile duct (cholangitis), gallstones or any other bile problem\n- Liver disease\n- An active stomach ulcer\n- An allergy to dandelion or other daisy-family plants",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Avoid dandelion medicines if you have kidney failure, diabetes or heart failure, because of a possible risk of high potassium levels. They aren't recommended for children under 12.",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Upper stomach pain, excess stomach acid and allergic reactions may occur. See a doctor if you get fever, painful urination, cramps or blood in the urine while using it, or if symptoms last more than 2 weeks.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description:
        "Dandelion put on the skin may cause an allergic reaction in people with eczema. Evidence is mixed on whether people allergic to ragweed, chrysanthemums, marigolds or daisies also react to dandelion.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "In theory, dandelion might interact with diabetes medicines, blood thinners and water pills.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "Dandelion in the amounts found in food is considered likely safe. Less is known about larger amounts.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Little is known about whether it's safe to use more dandelion than is found in food during pregnancy or breastfeeding. European guidance doesn't recommend dandelion medicines at these times.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "gallstones-and-bile-flow",
      notes: "Historically used in Europe for poor bile flow. Dandelion medicines shouldn't be used if you have gallstones or a blocked bile duct.",
    },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for fullness, gas and slow digestion. Not proven in trials." },
    { slug: "bloating", notes: "Recognized in Europe as a traditional medicine for a feeling of fullness and gas." },
  ],
});

import { run } from "./lib/populate-herb";

// Burdock (Arctium lappa), from verified sources: Memorial Sloan Kettering's
// About Herbs entry (2023) and the EMA/HMPC community herbal monograph on
// burdock root (2010). Family per GBIF / Catalogue of Life. Burdock is on the
// liver tab only because of a reported case of liver injury; there is no human
// research on it for liver problems.

run({
  name: "Burdock",
  profile: {
    family: "Asteraceae",
    genus: "Arctium",
    species: "lappa",
    nativeRange: "Native to Europe and northern Asia; now found worldwide",
    partsUsed: "The root; the fruit is used in traditional Chinese medicine",
  },
  sources: {
    mskcc: {
      title: "Burdock",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-03-13",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/burdock",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    ema: {
      title: "Community herbal monograph on Arctium lappa L., radix (EMA/HMPC/246763/2009)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2010-09-16",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-arctium-lappa-l-radix_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Arctium majus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Burdock Root", type: "COMMON_NAME" },
    { name: "Lappa", type: "COMMON_NAME" },
    { name: "Wild Gobo", type: "COMMON_NAME" },
    { name: "Happy Major", type: "COMMON_NAME" },
    { name: "Niubang", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "The fruit is valued as a blood purifier, for sore throat and colds, and on the skin for acne, eczema and psoriasis.",
    },
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for loss of appetite, minor urinary complaints and oily, flaky skin.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, burdock fruit is valued as a blood purifier and for sore throat and colds. It is also used on the skin for acne, eczema and psoriasis, and for poor appetite (anorexia) and gout. It is used for cancer and AIDS too, though there's no evidence it works for these. The root has been eaten as food in Asia for centuries.",
      source: "mskcc",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes burdock root as a traditional herbal medicine for:\n- Increasing urine to flush the urinary tract in minor urinary complaints\n- Short-term loss of appetite\n- Oily, flaky skin conditions (seborrheic skin)",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, burdock showed effects against inflammation, bacteria, stomach ulcers, high blood sugar and cancer. In rats it protected the liver, possibly through its antioxidant activity. In animals, the root extract also stimulated the uterus.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people is limited to small studies:\n- A cream with burdock extract improved the look of wrinkled skin.\n- Burdock tea improved signs of inflammation in people with knee arthritis.\n- Formulas containing burdock improved blood fats and after-meal blood sugar in people with kidney disease caused by diabetes.\nThere is no evidence that burdock treats cancer, infections, diabetes or other conditions. Larger studies are needed.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A 36-year-old woman developed sudden liver injury after drinking an herbal tea sold for the liver that contained burdock. Her symptoms eased after she stopped the tea.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description:
        "Burdock can cause skin allergies. A 53-year-old man had a severe whole-body allergic reaction (anaphylaxis), with redness and trouble breathing, an hour after eating boiled burdock; he recovered with treatment. People allergic to chrysanthemums may also react to burdock.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description: "Severe allergic reactions (anaphylactic shock) have been reported. Don't use burdock medicines if you're allergic to burdock or other daisy-family plants.",
      source: "ema",
    },
    {
      category: "CONTAMINATION",
      description: "Some burdock teas have been contaminated with atropine from the belladonna plant, which can affect the nervous system.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Avoid burdock during pregnancy: it may stimulate the uterus and increase the risk of premature birth.",
      source: "mskcc",
    },
    {
      category: "BREASTFEEDING",
      description: "Because there isn't enough safety data, burdock medicines aren't recommended during pregnancy or breastfeeding.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Burdock medicines aren't recommended for anyone under 18. Don't take them with prescription water pills. See a doctor if you get fever, painful urination, cramps or blood in the urine.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "liver-safety-warnings",
      notes: "One case of sudden liver injury was reported after an herbal tea containing burdock. It protected the liver in rats, but hasn't been studied for this in people.",
    },
    { slug: "skin-irritation", notes: "Recognized in Europe as a traditional medicine for oily, flaky skin; traditionally used on the skin in Chinese medicine." },
  ],
});

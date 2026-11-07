import { run } from "./lib/populate-herb";

// Walnut (Juglans regia), the common or English walnut tree; not the same
// species as Black Walnut (Juglans nigra). Sources: the EMA public summary and
// EU herbal monograph on walnut leaf, a 2026 meta-analysis of walnut-eating
// trials on blood fats, and the FDA's food allergy page (tree nuts).
// Family per GBIF.

run({
  name: "Walnut",
  profile: {
    family: "Juglandaceae",
    genus: "Juglans",
    species: "regia",
    partsUsed: "The leaf (used on the skin) and the nut (eaten as food)",
  },
  sources: {
    emaSummary: {
      title: "Walnut leaf: summary for the public (EMA/HMPC/432131/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-08-13",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/walnut-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Juglans regia L., folium (EMA/HMPC/346737/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-07-09",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-juglans-regia-l-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mashayekhi: {
      title:
        "Effects of Walnut Consumption on Blood Lipid Profile and Apolipoproteins in Adults: A GRADE-Assessed Systematic Review and Dose-Response Meta-Analysis of 49 Randomized Controlled Trials",
      author: "Mashayekhi G, Ashtary-Larky D, Karimi M, Asbaghi O, et al.",
      journal: "Food Science & Nutrition",
      publicationDate: "2026-02-10",
      doi: "10.1002/fsn3.71526",
      pmid: "41676011",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12887447/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    fdaAllergy: {
      title: "Food Allergies: What You Need to Know",
      organization: "U.S. Food and Drug Administration (FDA)",
      url: "https://www.fda.gov/food/buy-store-serve-safe-food/food-allergies-what-you-need-know",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Walnut Leaf", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Walnut leaf is recognized in the European Union as a traditional herbal medicine, used on the skin for minor inflammation and to reduce heavy sweating of the hands and feet.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes walnut leaf as a traditional herbal medicine for adults, based on well-documented, very long-standing use. The dried leaves are boiled in water and the liquid is used on the skin:\n- to relieve minor skin inflammation\n- to reduce heavy sweating of the hands and feet",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab tests have shown that walnut leaf can kill or slow the growth of germs.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 49 randomized trials in 4,611 adults found that eating walnuts lowered total cholesterol, LDL (\"bad\") cholesterol and triglycerides. Effects on HDL (\"good\") cholesterol were unclear. The authors concluded walnuts can be part of a heart-healthy diet.\n\nTechnical detail: triglycerides WMD −6.24 mg/dL; no significant overall change in HDL-C, Apo-A1 or Apo-B.",
      source: "mashayekhi",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Walnuts are tree nuts, one of the major food allergens. Food allergy reactions can be life-threatening (anaphylaxis).",
      source: "fdaAllergy",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't put walnut leaf preparations on open wounds or large skin injuries, or use them if you are allergic to walnut leaf.",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Walnut leaf preparations temporarily stain the skin. No other side effects are known, and no interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    {
      category: "TOXICITY",
      description:
        "Walnut trees contain juglone, a toxic substance. The European Medicines Agency found that dried walnut leaf has only traces of it, which don't pose a risk to human health.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description:
        "The safety of walnut leaf preparations in pregnancy and breastfeeding has not been established, so they are not recommended during pregnancy or while breastfeeding.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For adults only, on the skin. Boil 4 to 6 g of dried, cut leaf in 200 ml of water and apply on a soaked dressing:\n- for skin inflammation, 2 to 4 times a day\n- for sweating, for up to 30 minutes twice a day\nDon't use it for more than 1 week. See a doctor if symptoms continue.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "Walnut leaf is recognized in Europe as a traditional skin preparation for minor skin inflammation." },
    { slug: "high-cholesterol", notes: "Eating walnuts lowered total and LDL cholesterol and triglycerides in a review of 49 trials." },
  ],
});

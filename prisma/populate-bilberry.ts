import { run } from "./lib/populate-herb";

// Bilberry (Vaccinium myrtillus), from the European Medicines Agency's EU herbal
// monograph on the dried fruit (2015) and a 2025 meta-analysis of randomised
// trials on cardiometabolic markers (Talebi et al.; abstract only).

run({
  name: "Bilberry",
  profile: {
    family: "Ericaceae",
    genus: "Vaccinium",
    species: "myrtillus",
    partsUsed: "The ripe berries, dried for medicine",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Vaccinium myrtillus L., fructus siccus (EMA/HMPC/678995/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-09-29",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-vaccinium-myrtillus-l-fructus-siccus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    talebi: {
      title: "Investigating the Effects of Vaccinium myrtillus Supplementation on Cardiometabolic Indices: A Systematic Review and Meta-Analysis",
      author: "Talebi S, Shirani M, Mahdavi A, Bagherniya M, Sahebkar A",
      journal: "Phytotherapy Research",
      publicationDate: "2025-08-02",
      doi: "10.1002/ptr.70054",
      pmid: "40751398",
      url: "https://pubmed.ncbi.nlm.nih.gov/40751398/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "European Blueberry", type: "COMMON_NAME" },
    { name: "Whortleberry", type: "COMMON_NAME" },
    { name: "Myrtilli fructus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Dried bilberries are a traditional EU herbal medicine for mild diarrhea and for minor inflammation inside the mouth." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises dried bilberries as a traditional herbal medicine, based on long use rather than trials, for:\n- Mild diarrhea: a tea of 5 to 15 g of dried berries boiled in 250 ml of water, 3 to 4 times a day (15 to 60 g a day). See a doctor if it lasts more than 3 days.\n- Minor inflammation inside the mouth: a mouth rinse of 20 g boiled in 200 ml of water, used several times a day. See a doctor if it lasts more than a week.\nIt isn't recommended for children under 12.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 11 trials with 409 adults looked at bilberry supplements and heart and metabolic health. There was a borderline drop in long-term blood sugar (HbA1c), and triglycerides fell in short trials of 4 weeks or less. Bilberry didn't clearly change fasting blood sugar, cholesterol, blood pressure, weight or markers of inflammation. The authors say longer, high-quality trials are needed.\n\nTechnical detail: HbA1c WMD −1.63% (95% CI −3.36 to 0.11; p = 0.06); fasting glucose WMD −0.08 mmol/L (−0.22 to 0.07).",
      source: "talebi",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "The European Medicines Agency says dried bilberries can be used during pregnancy and breastfeeding; no concerns about birth defects have arisen from eating them.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects or drug interactions are known for dried bilberries.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional EU herbal medicine for mild diarrhea (as a tea of the dried berries). See a doctor if it lasts more than 3 days." },
    { slug: "high-blood-sugar", notes: "A review of small trials found a borderline drop in long-term blood sugar (HbA1c); evidence is weak." },
  ],
});

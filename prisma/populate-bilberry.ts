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
    vanekova: {
      title: "Bilberries: Curative and Miraculous - A Review on Bioactive Constituents and Clinical Research",
      author: "Vaneková Z, Rollinger JM",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-06-29",
      doi: "10.3389/fphar.2022.909914",
      pmid: "35847049",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9277355/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
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
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review checked where bilberry's best-known health claims came from. For diabetes, eyesight and circulation, trial results are contradictory, with no clear benefit or dose. The eyesight and diabetes claims trace back to unproven or false claims repeated since the 20th century without checking. The night-vision story began with a claim that British pilots ate bilberry jam in World War II, which was never confirmed, and a 2004 review found bilberry extract doesn't improve night vision in healthy eyes.",
      source: "vanekova",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The same review found more promising results for blood fats and inflammation, mostly from small studies:\n- 150 g of frozen bilberries 3 times a week for 6 weeks lowered total and LDL (\"bad\") cholesterol and triglycerides and raised HDL (\"good\") cholesterol\n- After a heart attack, 40 g of bilberry powder a day added to the cholesterol-lowering effect of statins\n- In people with metabolic syndrome, 400 g of fresh bilberries a day for 8 weeks lowered several markers of inflammation\n- In an uncontrolled study of people with mild to moderate ulcerative colitis, a bilberry powder and juice preparation led to remission in 63%\nLarger double-blind trials are still lacking.",
      source: "vanekova",
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
    { slug: "high-cholesterol", notes: "Small studies found bilberries improved blood fats, but a 2025 review of 11 trials found no clear change in cholesterol." },
    { slug: "diarrhea", notes: "A traditional EU herbal medicine for mild diarrhea (as a tea of the dried berries). See a doctor if it lasts more than 3 days." },
    { slug: "high-blood-sugar", notes: "A review of small trials found a borderline drop in long-term blood sugar (HbA1c); evidence is weak." },
  ],
});

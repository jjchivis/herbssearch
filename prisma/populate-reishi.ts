import { run } from "./lib/populate-herb";

// Reishi (Ganoderma lucidum), a medicinal mushroom, from verified sources: a
// Cochrane review on cardiovascular risk factors (Klupp et al. 2015) and
// Memorial Sloan Kettering's About Herbs entry. Family per GBIF / Catalogue of
// Life. No source covering pregnancy or breastfeeding was found, so none is
// stated.

run({
  name: "Reishi",
  profile: {
    family: "Polyporaceae",
    genus: "Ganoderma",
    species: "lucidum",
    partsUsed: "The mushroom. Reishi spore powder is also sold.",
  },
  sources: {
    cochrane: {
      title: "Ganoderma lucidum mushroom for the treatment of cardiovascular risk factors",
      author: "Klupp NL, Chang D, Hawke F, Kiat H, Cao H, Grant SJ, Bensoussan A",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2015-02-01",
      doi: "10.1002/14651858.CD007259.pub2",
      pmid: "25686270",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6486141/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    mskcc: {
      title: "Reishi Mushroom",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2026-05-05",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/reishi-mushroom",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Lingzhi", type: "COMMON_NAME" },
    { name: "Mushroom of Immortality", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Holds an important place in the traditional medicine of China, Japan, Korea and other Asian countries, where it's used to increase energy, boost the immune system and support general health.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Reishi holds an important place in the traditional medicine of China, Japan, Korea and other Asian countries, where it is used to increase energy, boost the immune system and support general health.",
      source: "mskcc",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Reishi has been eaten for its medicinal properties in Asia for more than 2,000 years, and is becoming popular in Western countries for heart health.",
      source: "cochrane",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, reishi affected the immune system and showed possible cancer-preventing effects.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2015 Cochrane review found 5 trials with 398 people. In the trials that could be analyzed, all in people with type 2 diabetes, taking 1.4–3 g of reishi a day for 12–16 weeks did not lower long-term blood sugar (HbA1c), cholesterol, blood pressure or triglycerides compared with placebo. People taking reishi were somewhat more likely to have side effects, though none were serious. The reviewers concluded the evidence doesn't support using reishi to treat heart disease risk factors.\n\nTechnical detail: HbA1c WMD −0.10% (95% CI −1.05 to 0.85); total cholesterol WMD −0.07 mmol/L; LDL-C WMD 0.02 mmol/L; adverse events RR 1.67 (95% CI 0.86 to 3.24).",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small trials suggest possible benefits for urinary symptoms in men, mild effects on blood sugar and less anxiety. There is limited evidence that reishi may boost immunity in people with cancer, but more research is needed on its safety and effectiveness.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Case reports describe liver damage from reishi, including one death.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Other side effects include nausea, trouble sleeping, dry mouth and constipation. Rare reports include chronic diarrhea and sudden nerve problems.\n\nTechnical detail: also reported: pseudoparasitosis, hypereosinophilia, acute neurotoxicity.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Reishi may raise the risk of bleeding with blood thinners such as warfarin, or anti-platelet medicines. It may also work against medicines that suppress the immune system, and may affect chemotherapy and medicines that are broken down by liver enzymes.\n\nTechnical detail: cytochrome P450 substrates; chemotherapy interaction is theoretical (antioxidant capacity).",
      source: "mskcc",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Reishi spore powder may raise the level of CA72-4, a blood marker used to monitor some cancers.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "A Cochrane review found reishi didn't lower cholesterol in people with type 2 diabetes." },
    { slug: "high-blood-pressure", notes: "A Cochrane review found reishi didn't lower blood pressure in people with type 2 diabetes." },
    { slug: "high-blood-sugar", notes: "A Cochrane review found reishi didn't lower long-term blood sugar in people with type 2 diabetes." },
  ],
});

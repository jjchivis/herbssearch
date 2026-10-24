import { run } from "./lib/populate-herb";

// Saw palmetto (Serenoa repens), from NCCIH (2025), the EMA herbal monograph on
// saw palmetto fruit (2015) and the 2023 Cochrane review for urinary symptoms of
// an enlarged prostate (Franco et al.). Family per GBIF.

run({
  name: "Saw Palmetto",
  profile: {
    family: "Arecaceae",
    genus: "Serenoa",
    species: "repens",
    nativeRange: "The West Indies and the southeast coast of North America",
    partsUsed: "The berries (fruit)",
  },
  sources: {
    nccih: {
      title: "Saw Palmetto: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/saw-palmetto",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Serenoa repens (W. Bartram) Small, fructus",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-11-24",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-serenoa-repens-w-bartram-small-fructus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Serenoa repens for the treatment of lower urinary tract symptoms due to benign prostatic enlargement",
      author: "Franco JV, Trivisonno L, Sgarbossa NJ, et al.",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2023-06-22",
      doi: "10.1002/14651858.CD001423.pub4",
      pmid: "37345871",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10286776/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Sabal serrulatum", type: "SCIENTIFIC_SYNONYM" },
    { name: "Dwarf Palm", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Saw palmetto is a small palm whose berries have been used for health. Today it's promoted for urinary symptoms of an enlarged prostate (benign prostatic hyperplasia, or BPH), male-pattern baldness and long-term prostate inflammation.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency recognizes a hexane extract of saw palmetto, based on scientific evidence, for the symptoms of an enlarged prostate. An alcohol extract is recognized as a traditional remedy for urinary symptoms of an enlarged prostate, after a doctor has ruled out serious conditions.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 Cochrane review of 27 trials with 4,656 men found that saw palmetto alone makes little or no difference to urinary symptoms or quality of life compared with a placebo (high-certainty evidence). Ten of the studies were funded by drug companies.\n\nTechnical detail: IPSS MD −0.90 (95% CI −1.74 to −0.07) at 3–6 months, 9 low-risk-of-bias studies, 1,681 participants; adverse events RR 1.01 (95% CI 0.77 to 1.31).",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Two NIH-funded trials, one using up to three times the usual dose, found saw palmetto didn't improve prostate symptoms, and hexane extracts worked no better than other kinds. A 2022 review found no clear benefit for long-term prostate inflammation and pelvic pain. Studies on hair loss are too few to draw conclusions.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Saw palmetto is well tolerated and has been used safely in studies for up to 3 years. Side effects are mild and uncommon, such as stomach upset, dizziness and headache. It doesn't seem to affect PSA blood test results.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Other reported side effects include nausea, stomach pain (especially on an empty stomach), rash, raised liver enzymes, allergic reactions and, uncommonly, breast enlargement in men that goes away.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "A few cases of a suspected interaction with the blood thinner warfarin have been reported, with a higher INR (blood clotting test).",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "See a doctor if symptoms get worse, or if you have fever, spasms, blood in the urine, painful urination or can't pass urine.",
      source: "ema",
    },
    { category: "PREGNANCY", description: "Saw palmetto may be unsafe during pregnancy or breastfeeding.", source: "nccih" },
  ],
  symptoms: [
    {
      slug: "enlarged-prostate",
      notes: "Recognized in Europe for enlarged-prostate symptoms, but a 2023 Cochrane review found little or no benefit over placebo.",
    },
    { slug: "hair-loss", notes: "Studied for male-pattern hair loss, but the evidence is too limited to draw conclusions." },
  ],
  preparations: [
    {
      slug: "extract",
      notes: "Soft extracts of the berries, made with hexane or alcohol, are taken by mouth in capsules or tablets.",
      source: "ema",
    },
  ],
});

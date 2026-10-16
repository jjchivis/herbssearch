import { run } from "./lib/populate-herb";

// Sheng Mai Yin Wan (Shengmai San / Shengmai Yin), a classical Chinese formula of
// ginseng, ophiopogon and schisandra, from a 2024 systematic review of randomised
// trials in viral myocarditis (Zhang et al.).

run({
  name: "Sheng Mai Yin Wan",
  profile: {
    family: "Araliaceae (the ginseng family) for ginseng; Asparagaceae (the asparagus family) for ophiopogon; Schisandraceae (the magnolia-vine family) for schisandra",
    genus: "Panax / Ophiopogon / Schisandra",
    species: "ginseng / japonicus / chinensis",
    partsUsed: "A formula of three herbs: ginseng root, ophiopogon root and schisandra fruit, as pills, decoctions or patent medicines",
  },
  sources: {
    zhang: {
      title: "Effectiveness and Safety of Shengmai San for Viral Myocarditis: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Zhang BR, Liu XH, Ling YT, et al.",
      journal: "Cardiovascular Therapeutics",
      publicationDate: "2024-06-20",
      doi: "10.1155/2024/2127018",
      pmid: "39742019",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11211013/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Shengmai San", type: "TRADITIONAL_NAME" },
    { name: "Sheng Mai San", type: "TRADITIONAL_NAME" },
    { name: "Shengmai Yin", type: "TRADITIONAL_NAME" },
    { name: "Sheng Mai Yin", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "A classical formula first recorded about 1,000 years ago, used to \"supplement qi and yin\" and for heart symptoms such as palpitations." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sheng mai is a classical Chinese formula first written down about 1,000 years ago by Zhang Yuansu in the Jin Dynasty. It combines three herbs:\n- Ginseng root (renshen); today dangshen or taizishen are sometimes used instead\n- Ophiopogon root (maidong)\n- Schisandra fruit (wuweizi)\nIt's used to \"supplement qi and yin\", and to ease symptoms linked to irregular heartbeat and heart failure.",
      source: "zhang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review combined 44 Chinese trials with 4,298 people with viral myocarditis (heart inflammation caused by a virus). Sheng mai, alone or with standard treatment, was linked to more people recovering from palpitations, chest pain and breathlessness, and to better heart tests. But the trials were of low quality and none used a placebo, so the benefit is uncertain. No serious side effects were reported.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No serious side effects were reported in 44 trials of sheng mai for viral myocarditis.",
      source: "zhang",
    },
  ],
  symptoms: [
    { slug: "heart-palpitations", notes: "Low-quality Chinese trials in viral myocarditis linked it to faster recovery from palpitations; the benefit is uncertain." },
  ],
});

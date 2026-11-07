import { run } from "./lib/populate-herb";

// Tribulus (Tribulus terrestris). Sources: a 2017 review of its traditional
// uses, a 2025 systematic review and a 2026 meta-analysis of trials in men,
// and two 2024 case reports of serious harm. Family per GBIF.

run({
  name: "Tribulus",
  profile: {
    family: "Zygophyllaceae",
    genus: "Tribulus",
    species: "terrestris",
    partsUsed: "The fruit and other above-ground parts, usually as an extract",
  },
  sources: {
    zhu: {
      title: "A review of traditional pharmacological uses, phytochemistry, and pharmacological activities of Tribulus terrestris",
      author: "Zhu W, Du Y, Meng H, Dong Y, Li L",
      journal: "Chemistry Central Journal",
      publicationDate: "2017-07-11",
      doi: "10.1186/s13065-017-0289-x",
      pmid: "29086839",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5503856/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vilarNeto: {
      title:
        "Effects of Tribulus (Tribulus terrestris L.) Supplementation on Erectile Dysfunction and Testosterone Levels in Men—A Systematic Review of Clinical Trials",
      author: "Vilar Neto JO, de Moraes WMAM, Pinto DV, et al.",
      journal: "Nutrients",
      publicationDate: "2025-04-06",
      doi: "10.3390/nu17071275",
      pmid: "40219032",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11990417/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    suharyani: {
      title: "Tribulus terrestris for management of patients with erectile dysfunction: a systematic review and meta-analysis of randomized trials",
      author: "Suharyani S, Amanda B, Angellee J, William W, Hariyanto TI, I'tishom R",
      journal: "International Journal of Impotence Research",
      publicationDate: "2025-05-13",
      doi: "10.1038/s41443-025-01086-7",
      pmid: "40360723",
      url: "https://doi.org/10.1038/s41443-025-01086-7",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    liverCase: {
      title: "Severe Liver and Renal Injury From Tribulus Terrestris",
      author: "Mohy-Ud-Din N, Jonassaint N",
      journal: "ACG Case Reports Journal",
      publicationDate: "2024-02-07",
      doi: "10.14309/crj.0000000000001267",
      pmid: "38328764",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10849413/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    statinCase: {
      title: "Rhabdomyolysis Risk: The Dangers of Tribulus Terrestris, an Over-the-Counter Supplement",
      author: "Huff R, Karpinska-Leydier K, Maddineni G, Begosh-Mayne D",
      journal: "American Journal of Case Reports",
      publicationDate: "2024-07-16",
      doi: "10.12659/AJCR.943492",
      pmid: "39012853",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11315611/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used for thousands of years in China, India, Sudan and Pakistan, including for sexual function and vitality.",
    },
    {
      slug: "ayurveda",
      notes: "Used for thousands of years in India, among other countries, including for sexual function and vitality.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tribulus has been used for thousands of years in traditional medicine in China, India, Sudan and Pakistan, including to improve sexual function and vitality.",
      source: "zhu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 10 trials in 483 men found:\n- There is low-quality evidence that tribulus may help erectile problems.\n- It did not reliably raise testosterone levels.\n\nTechnical detail: Vilar Neto et al. 2025; 10 clinical trials.",
      source: "vilarNeto",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 analysis of 8 randomized trials found that men with erectile problems who took tribulus scored better on an erectile function questionnaire than men on placebo. Testosterone levels did not differ, and side effects were about as common as with placebo.\n\nTechnical detail: International Index of Erectile Function (IIEF) scores improved vs placebo.",
      source: "suharyani",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A 46-year-old man who took tribulus supplements every day for 2 months developed severe jaundice (yellowing of the skin and eyes), liver injury and kidney problems, and needed hospital treatment. He recovered. The authors note there are only a few reports of liver harm in humans, but tribulus has been linked to severe jaundice and death in grazing animals.\n\nTechnical detail: peak bilirubin 48 mg/dL, creatinine 7.1; biopsy consistent with drug-induced liver injury; treated with plasmapheresis.",
      source: "liverCase",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "A 71-year-old man taking the statin atorvastatin developed rhabdomyolysis (a dangerous breakdown of muscle) after starting tribulus. The authors say research suggests tribulus may slow how the body breaks down statins and many other common medicines, which could raise the risk of serious side effects. Tell your doctor or pharmacist if you take tribulus.\n\nTechnical detail: described as a moderate CYP3A4 inhibitor; mild rise in liver enzymes also seen.",
      source: "statinCase",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In trials, side effects were about as common with tribulus as with placebo.",
      source: "suharyani",
    },
  ],
  symptoms: [
    {
      slug: "sexual-health",
      notes: "Trials suggest it may modestly help erectile problems (low-quality evidence); it doesn't reliably raise testosterone.",
    },
    {
      slug: "liver-safety-warnings",
      notes: "A case report describes severe liver and kidney injury after 2 months of tribulus supplements.",
    },
  ],
});

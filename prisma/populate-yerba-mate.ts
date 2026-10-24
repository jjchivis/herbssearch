import { run } from "./lib/populate-herb";

// Yerba mate (Ilex paraguariensis), from the IARC (WHO) evaluation of mate and
// very hot beverages (2016) and two meta-analyses of trials: blood sugar and
// metabolic health (Li et al. 2025) and blood fats (Masson et al. 2022).
// Family per GBIF.

run({
  name: "Yerba Mate",
  profile: {
    family: "Aquifoliaceae",
    genus: "Ilex",
    species: "paraguariensis",
    partsUsed: "The dried leaves, made into a drink",
  },
  sources: {
    iarc: {
      title: "IARC Monographs evaluate drinking coffee, maté, and very hot beverages (Press release No. 244)",
      organization: "International Agency for Research on Cancer (World Health Organization)",
      publicationDate: "2016-06-15",
      url: "https://www.iarc.who.int/wp-content/uploads/2018/07/pr244_E.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    li: {
      title: "Yerba Maté and its impact on glycemic control and metabolic health: a systematic review and meta-analysis",
      author: "Li D, Yue L, Peng X, et al.",
      journal: "Frontiers in Endocrinology",
      publicationDate: "2025-10-30",
      doi: "10.3389/fendo.2025.1641592",
      pmid: "41244043",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12611702/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    masson: {
      title: "Effect of Yerba Mate (Ilex paraguariensis) on Lipid Levels: A Systematic Review and Meta-Analysis",
      author: "Masson W, Barbagelata L, Lobo M, et al.",
      journal: "Plant Foods for Human Nutrition",
      publicationDate: "2022-07-13",
      doi: "10.1007/s11130-022-00991-2",
      pmid: "35829819",
      url: "https://pubmed.ncbi.nlm.nih.gov/35829819/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Maté", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Mate is a drink made by steeping the dried leaves of Ilex paraguariensis. It's drunk mainly in South America, and less often in the Middle East, Europe and North America. It's traditionally drunk very hot (about 70 °C), but may also be drunk warm or cold.",
      source: "iarc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 13 trials found yerba mate may help blood sugar control: in people with prediabetes, it lowered blood sugar after meals and HbA1c (a measure of average blood sugar), but these results came from only 2 studies. It had no clear effect on cholesterol, fasting blood sugar, waist size or body weight.\n\nTechnical detail: postprandial glucose MD −12.76 (95% CI −16.78 to −8.74); HbA1c MD −0.37 (95% CI −0.56 to −0.18); HOMA MD −0.24; N = 2 trials each.",
      source: "li",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 7 studies with 378 people found drinking yerba mate didn't significantly change cholesterol or triglyceride levels. The studies were small, so more research is needed.",
      source: "masson",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The World Health Organization's cancer agency classifies drinking very hot drinks (above 65 °C), including mate drunk very hot, as probably causing cancer of the esophagus (food pipe). It's the temperature, not the drink itself, that seems to be responsible. Mate drunk warm or cold couldn't be classified, because there wasn't enough evidence. Let mate cool before drinking.",
      source: "iarc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects reported in trials included mouth or throat irritation, trouble sleeping, a fast heartbeat, chest pain (angina), headache and stomach discomfort.",
      source: "li",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "May help blood sugar control in prediabetes, based on only 2 small trials." },
  ],
  preparations: [
    {
      slug: "tea-infusion",
      notes: "The dried leaves are steeped in water. It's traditionally drunk very hot, but can be drunk warm or cold; letting it cool lowers the cancer risk linked to very hot drinks.",
      source: "iarc",
    },
  ],
});

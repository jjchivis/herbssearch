import { run } from "./lib/populate-herb";

// Chasteberry (Vitex agnus-castus), from verified sources: NCCIH, the EMA/HMPC
// public summary on agnus castus fruit (2018) and a 2019 meta-analysis of
// double-blind RCTs in PMS (Csupor et al., Complement Ther Med). Family per
// GBIF / Catalogue of Life.

run({
  name: "Chasteberry",
  profile: {
    family: "Lamiaceae",
    genus: "Vitex",
    species: "agnus-castus",
    partsUsed: "The fruits (berries). The leaves, stems and flowers have also been used.",
  },
  sources: {
    nccih: {
      title: "Chasteberry: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/chasteberry",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Agnus castus fruit (Vitex agnus-castus L., fructus): summary of the HMPC conclusions (EMA/266692/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/agnus-castus-fruit-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    csupor: {
      title: "Vitex agnus-castus in premenstrual syndrome: A meta-analysis of double-blind randomised controlled trials",
      author: "Csupor D, Lantos T, Hegyi P, et al.",
      journal: "Complementary Therapies in Medicine",
      organization: "Complementary Therapies in Medicine",
      publicationDate: "2019-12-01",
      doi: "10.1016/j.ctim.2019.08.024",
      pmid: "31780016",
      url: "https://pubmed.ncbi.nlm.nih.gov/31780016/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Vitex", type: "COMMON_NAME" },
    { name: "Chaste Tree", type: "COMMON_NAME" },
    { name: "Monk's Pepper", type: "COMMON_NAME" },
    { name: "Agnus Castus", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Once believed to promote chastity and used by monks in the Middle Ages. Recognized by the European Medicines Agency as a traditional remedy for minor symptoms in the days before a period.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chasteberry was once believed to promote chastity and was used by monks in the Middle Ages. It has traditionally been used for mental health conditions, women's health (gynecological) problems and hormone-related skin problems.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes agnus castus fruit preparations for relief of minor symptoms in the days before a period.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies suggest chasteberry may act on hormone-producing areas of the brain, lowering the hormone prolactin, which is thought to play a role in PMS.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on clinical evidence, the European Medicines Agency concluded that one particular dry extract can treat premenstrual syndrome (PMS) when taken continuously for 3 months. In a study of 178 women, it improved symptoms such as irritability, mood changes, anger, headache and breast fullness compared with placebo. For other chasteberry preparations, studies were too poorly designed to draw firm conclusions.\n\nTechnical detail: \"well-established use\" for the specific dry extract.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2019 review included only well-reported, double-blind trials of properly described chasteberry extracts. In 3 trials with 520 women, those taking chasteberry were about 2.6 times more likely to have their PMS symptoms go away than those taking placebo. Most other trials couldn't be used as evidence because they didn't describe the product properly.\n\nTechnical detail: extracts Ze 440 and BNO 1095; RR 2.57 (95% CI 1.52 to 4.35).",
      source: "csupor",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Some studies suggest chasteberry might reduce PMS symptoms such as breast pain or tenderness, but higher-quality evidence is needed. There's little evidence for infertility, sexual problems or menopause symptoms.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Short-term use seems well tolerated. Mild side effects include nausea, stomach upset, diarrhea, headache and itching.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Reported side effects include severe allergic reactions (face swelling, trouble breathing or swallowing), rash and acne, headache, dizziness, nausea, belly pain and changes to periods. How often these happen is unknown.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "Chasteberry may not be safe for women with hormone-sensitive conditions such as breast, uterine or ovarian cancer.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description: "Agnus castus medicines are for adult women only. See a doctor if symptoms get worse or don't go away.",
      source: "ema",
    },
    { category: "PREGNANCY", description: "Chasteberry may be unsafe during pregnancy or while breastfeeding.", source: "nccih" },
  ],
  symptoms: [
    {
      slug: "premenstrual-syndrome",
      notes: "Recognized in Europe for PMS, and the best-quality trials found it helped. Some evidence for breast tenderness.",
    },
    { slug: "fertility", notes: "There's little evidence that it helps infertility." },
  ],
});

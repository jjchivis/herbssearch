import { run } from "./lib/populate-herb";

// Poria Cocos (Wolfiporia cocos sclerotium, fu ling), from a 2020 review of its
// chemistry and pharmacology (Nie et al.) and a 2022 systematic review of
// fu ling-containing formulas in type 2 diabetes (Di et al.).

run({
  name: "Poria Cocos",
  profile: {
    family: "Polyporaceae",
    genus: "Wolfiporia",
    species: "cocos",
    partsUsed: "The dried sclerotium, a firm underground mass of the fungus, usually cut into white cubes or slices",
  },
  sources: {
    nie: {
      title: "Phytochemistry and Pharmacological Activities of Wolfiporia cocos (F.A. Wolf) Ryvarden & Gilb.",
      author: "Nie A, Chao Y, Zhang X, Jia W, Zhou Z, Zhu C",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2020-09-15",
      doi: "10.3389/fphar.2020.505249",
      pmid: "33071776",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7533546/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    di: {
      title: "Benefits of herbal formulae containing Poria cocos (Fuling) for type 2 diabetes mellitus: A systematic review and meta-analysis",
      author: "Di YM, Sun L, Lu C, et al.",
      journal: "PLOS One",
      publicationDate: "2022-12-01",
      doi: "10.1371/journal.pone.0278536",
      pmid: "36455062",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9714931/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Fu Ling", type: "TRADITIONAL_NAME" },
    { name: "Fuling", type: "TRADITIONAL_NAME" },
    { name: "Poria", type: "COMMON_NAME" },
    { name: "Wolfiporia cocos", type: "COMMON_NAME" },
    { name: "Poria cocos", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called fu ling; recorded in the Shennong Herbal Classic and used for over 2,000 years to promote urination, \"remove dampness\", strengthen the spleen and calm the mind." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Poria is an edible medicinal fungus, called fu ling in Chinese. It was first recorded in the Shennong Herbal Classic and has been used for over 2,000 years. It's used to:\n- Promote urination and \"remove dampness\"\n- Reduce swelling (oedema) and phlegm\n- Strengthen the spleen and help digestion\n- Calm the mind\nIt's one of the most important Chinese medicines: nearly 15% of the preparations in the Chinese Pharmacopoeia contain it, including classic formulas such as Wu Ling San and Gui Zhi Fu Ling Wan.",
      source: "nie",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, compounds from poria (triterpenes and polysaccharides) slowed tumours and killed microbes, acted as antioxidants, may help reduce inflammation, affected the immune system, and protected the liver and kidneys. These haven't been confirmed in people.",
      source: "nie",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Fu ling is one of the herbs most often prescribed in China for type 2 diabetes. A 2022 review of 73 Chinese trials with 6,489 people found that adding herbal formulas containing it to diabetes medicines lowered fasting and after-meal blood sugar and HbA1c. Most trials were at risk of bias, and the strength of evidence was low to moderate. The formulas contained other herbs too, so the effect of poria alone isn't known.\n\nTechnical detail: fasting glucose MD −0.82 mmol/L (−0.93 to −0.71); HbA1c MD −0.64% (−0.75 to −0.53).",
      source: "di",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Poria has low toxicity in mice, and no problems were reported with traditional doses of 6 to 18 g a day.",
      source: "nie",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In the diabetes trials, side effects were no more common when formulas containing fu ling were added to diabetes medicines.",
      source: "di",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Formulas containing fu ling, added to diabetes medicines, lowered blood sugar in low-to-moderate quality Chinese trials." },
    { slug: "occasional-sleeplessness", notes: "Traditionally used to calm the mind. Not tested on its own in trials." },
  ],
});

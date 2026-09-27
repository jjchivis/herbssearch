import { run } from "./lib/populate-herb";

// Raspberry leaf (Rubus idaeus), from verified sources: the EMA/HMPC public
// summary (2017), a systematic integrative review of raspberry leaf in
// pregnancy (Bowman et al. 2021) and a prospective observational study
// (Bowman et al. 2024). Family per GBIF / Catalogue of Life.

run({
  name: "Raspberry Leaf",
  profile: { family: "Rosaceae", genus: "Rubus", species: "idaeus", partsUsed: "The leaves, dried for tea" },
  sources: {
    ema: {
      title: "Raspberry leaf (Rubus idaeus L., folium): summary of the HMPC conclusions (EMA/237849/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-05-30",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/raspberry-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    bowman2021: {
      title: "Biophysical effects, safety and efficacy of raspberry leaf use in pregnancy: a systematic integrative review",
      author: "Bowman R, Taylor J, Muggleton S, Davis D",
      journal: "BMC Complementary Medicine and Therapies",
      organization: "BMC Complementary Medicine and Therapies",
      publicationDate: "2021-02-01",
      doi: "10.1186/s12906-021-03230-4",
      pmid: "33563275",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7871383/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    bowman2024: {
      title: "Raspberry leaf (Rubus idaeus) use in pregnancy: a prospective observational study",
      author: "Bowman RL, Taylor J, Davis DL",
      journal: "BMC Complementary Medicine and Therapies",
      organization: "BMC Complementary Medicine and Therapies",
      publicationDate: "2024-04-01",
      doi: "10.1186/s12906-024-04465-7",
      pmid: "38649906",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11034164/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine for minor period cramps, mild mouth or throat inflammation and mild diarrhea.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes raspberry leaf as a traditional herbal medicine for:\n- Relief of minor cramps during menstrual periods\n- Mild inflammation of the mouth or throat\n- Mild diarrhea",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Pregnant women have used herbs to help with pregnancy, labor and birth for centuries, and raspberry leaf is one of the most common. Many women use it in the hope of an easier labor and birth.",
      source: "bowman2021",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, raspberry leaf affected smooth muscle, including the muscle of the womb. It was toxic when very high doses were injected into animals.\n\nTechnical detail: toxicity with intravenous or intraperitoneal administration.",
      source: "bowman2021",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency noted there are no clinical studies of raspberry leaf for its traditional uses, and very little lab data.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2021 review of 13 studies on raspberry leaf in pregnancy found that studies in people have shown neither harm nor benefit. One study found a meaningful but not statistically significant shortening of the pushing stage of labor. The reviewers concluded the evidence for using raspberry leaf in pregnancy is weak.\n\nTechnical detail: studies published 1941–2016; 5 laboratory, 2 animal and 6 human studies; the one study showed reduced length of second stage and less augmentation of labour.",
      source: "bowman2021",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small observational study of 91 women in Australia, those who drank raspberry leaf were less likely to have their labor medically sped up, and had shorter labors. The authors say these results can't be relied on or applied to all pregnant women, that finding no safety problems doesn't prove it is safe, and that a randomized trial is urgently needed.\n\nTechnical detail: 44 exposed, 47 not exposed; Bayesian regression.",
      source: "bowman2024",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "At the time of the European assessment, no side effects had been reported with raspberry leaf medicines.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description:
        "Raspberry leaf hasn't been shown to be safe in pregnancy: the studies so far are too small and weak to tell. Talk to your midwife or doctor before using it while pregnant.",
      source: "bowman2024",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Raspberry leaf medicines are for adults only. For period cramps or mouth and throat inflammation, see a doctor if symptoms last more than a week or get worse. For diarrhea, see a doctor if it lasts more than 3 days or gets worse.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "menstrual-discomfort", notes: "Recognized in Europe as a traditional remedy for minor cramps during periods." },
    {
      slug: "pregnancy-and-childbirth",
      notes: "Widely used in pregnancy in the hope of an easier labor, but it hasn't been properly tested and isn't proven safe.",
    },
  ],
});

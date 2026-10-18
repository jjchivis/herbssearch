import { run } from "./lib/populate-herb";

// Atractylodes Macrocephala (bai zhu), from a 2018 review of its traditional
// uses, chemistry and pharmacology (Zhu et al.; abstract only) and a 2023
// meta-analysis of atractylodes–peony formulas for IBS (Bai et al.; abstract
// only).

run({
  name: "Atractylodes Macrocephala",
  profile: {
    family: "Asteraceae",
    genus: "Atractylodes",
    species: "macrocephala",
    partsUsed: "The dried rhizome",
  },
  sources: {
    zhu: {
      title: "The traditional uses, phytochemistry, and pharmacology of Atractylodes macrocephala Koidz.: A review",
      author: "Zhu B, Zhang QL, Hua JW, Cheng WL, Qin LP",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2018-08-18",
      doi: "10.1016/j.jep.2018.08.023",
      pmid: "30130541",
      url: "https://pubmed.ncbi.nlm.nih.gov/30130541/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bai: {
      title: "Atractylodes macrocephala-Paeonia lactiflora Class Formula for the Treatment of Irritable Bowel Syndrome: A Systematic Review and Meta-Analysis",
      author: "Bai W, Wang Z, Liang J, Deng H",
      journal: "Cureus",
      publicationDate: "2023-12-05",
      doi: "10.7759/cureus.49997",
      pmid: "38186470",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10769129/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Bai Zhu", type: "TRADITIONAL_NAME" },
    { name: "Baizhu", type: "TRADITIONAL_NAME" },
    { name: "Atractylodes", type: "COMMON_NAME" },
    { name: "Atractylodis Macrocephalae Rhizoma", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called bai zhu; a tonic for weak digestion (\"spleen deficiency\") and for calming the fetus, and a core herb in formulas for irritable bowel." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bai zhu has long been used as a tonic in East Asian medicine, especially in China, for:\n- Weak digestion (\"spleen deficiency\")\n- Calming an unsettled fetus in pregnancy\n- Bone loss and obesity",
      source: "zhu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its extracts and compounds improved gut function, slowed tumours, may help reduce inflammation, acted as antioxidants, slowed bone loss, protected nerve cells and affected the immune system and hormones. These haven't been confirmed in people.",
      source: "zhu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Formulas built around bai zhu and white peony are widely used for irritable bowel syndrome (IBS). A 2023 review of 24 trials with 3,768 people found they relieved IBS symptoms more often than placebo or standard medicines, especially IBS with diarrhoea. About half the trials were at low risk of bias, but overall the certainty of the evidence wasn't high.",
      source: "bai",
    },
  ],
  symptoms: [
    { slug: "ibs", notes: "Formulas built around bai zhu and white peony relieved IBS symptoms in a review of 24 trials; certainty of the evidence wasn't high." },
    { slug: "indigestion", notes: "A traditional tonic for weak digestion. Not tested on its own in trials." },
  ],
});

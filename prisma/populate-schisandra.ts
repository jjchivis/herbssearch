import { run } from "./lib/populate-herb";

// Schisandra (Schisandra chinensis), from verified sources: Memorial Sloan
// Kettering's About Herbs entry (2022), a review of schisandra-based medicines
// for drug-induced liver injury in China (Zhu et al. 2019) and a systematic
// review of animal studies (Huang et al. 2025). Family per GBIF / Catalogue of
// Life. No source covering pregnancy or breastfeeding was found, so none is stated.

run({
  name: "Schisandra",
  profile: {
    family: "Schisandraceae",
    genus: "Schisandra",
    species: "chinensis",
    partsUsed: "The fruit",
  },
  sources: {
    mskcc: {
      title: "Schisandra",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2022-06-03",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/schisandra",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    zhu: {
      title: "Schisandra fruits for the management of drug-induced liver injury in China: A review",
      author: "Zhu P, Li J, Fu X, Yu Z",
      journal: "Phytomedicine",
      organization: "Phytomedicine",
      publicationDate: "2019-01-01",
      doi: "10.1016/j.phymed.2018.11.020",
      pmid: "31004881",
      url: "https://pubmed.ncbi.nlm.nih.gov/31004881/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    huang: {
      title: "Efficacy of Schisandra chinensis in liver injury: a systematic review and preclinical meta-analysis",
      author: "Huang BH, Lv BH, Wu DJ, Xiong FY, Li YB, Lu YP, Lv WL",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2025-08-04",
      doi: "10.3389/fphar.2025.1627081",
      pmid: "40832608",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12358260/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Wu Wei Zi", type: "TRADITIONAL_NAME" },
    { name: "Schizandra", type: "COMMON_NAME" },
    { name: "Five Flavor Berry", type: "COMMON_NAME" },
    { name: "Gomishi", type: "COMMON_NAME" },
    { name: "Omija", type: "COMMON_NAME" },
    { name: "Omicha", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used for coughs, liver conditions, stomach problems and sweating, and as a tonic for energy. Its Chinese name, wu wei zi, means \"five-flavored fruit\".",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Schisandra has a long history in traditional Chinese medicine for coughs, liver conditions, stomach problems such as diarrhea and indigestion, and sweating. It is also used as a tonic to improve energy, and in formulas for tiredness and sleep. Its name, wu wei zi, means \"five-flavored fruit\": sour, bitter, sweet, salty and pungent.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, schisandra showed antioxidant activity and seemed to protect the liver, heart and nervous system.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review of 54 animal studies found that compounds from schisandra lowered liver enzymes and signs of cell damage and inflammation in animals with liver injury.\n\nTechnical detail: ALT SMD −4.74 (95% CI −5.42 to −4.06); AST SMD −5.10 (−5.84 to −4.37); high heterogeneity (I² above 90%); lower MDA and higher SOD and GSH.",
      source: "huang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Only a few small studies have been done in people:\n- In liver transplant patients, schisandra appeared to improve liver function and reduce diarrhea caused by the anti-rejection medicine tacrolimus.\n- Some studies suggest improvements in fatty liver disease or hepatitis C when schisandra was combined with other substances.\n- A small trial in women suggests it may help menopausal hot flushes and sweating.\nThese studies were too small or uncontrolled to draw conclusions.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In China, medicines made from schisandra fruit, or lab-made versions of one of its compounds, are commonly prescribed for liver damage caused by other medicines. A 2019 review found clinical studies showing these medicines lowered raised liver test results in such patients.\n\nTechnical detail: drug-induced liver injury (DILI); serum ALT, AST and total bilirubin; synthetic analogues of schisandrin C; studies published in English or Chinese.",
      source: "zhu",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "No serious side effects have been reported, but schisandra hasn't been well studied in people. In one small trial, sleepiness and cold hands and feet were seen in both the schisandra and placebo groups.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Schisandra raised blood levels of tacrolimus, a medicine that prevents organ rejection, in liver transplant patients. Talk with your doctor before using it if you take tacrolimus.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Schisandra may change how the body breaks down many common medicines, and may increase the side effects of some. Talk with your doctor about possible interactions.\n\nTechnical detail: CYP3A4, CYP3A5 and CYP1A2 substrates (lab and animal data; clinical relevance not yet determined); P-glycoprotein substrates.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Schisandra can lower two liver enzymes (ALT and AST) on blood tests. Tell your healthcare provider you take it if you're having liver tests.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "liver-disease",
      notes: "Traditionally used for liver conditions. Small, uncontrolled studies in people are inconclusive; it can also lower liver test results.",
    },
    {
      slug: "fatty-liver",
      notes: "Some small studies suggest improvements when combined with other substances, but they are too limited to draw conclusions.",
    },
    { slug: "menopause-symptoms", notes: "A small trial in women suggests it may help hot flushes and sweating." },
    { slug: "cough", notes: "Traditionally used for coughs in Chinese medicine; not tested in clinical trials." },
    { slug: "fatigue", notes: "Traditionally used as a tonic for energy and in formulas for tiredness." },
  ],
});

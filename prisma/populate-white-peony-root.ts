import { run } from "./lib/populate-herb";

// White Peony Root (bai shao, the peeled root of Paeonia lactiflora), from a 2011
// review (He and Dai) and systematic reviews of total glucosides of paeony (TGP)
// for arthritis (Yang et al. 2023), lupus (Chen et al. 2022) and psoriasis (Zheng
// et al. 2019), and of formulas pairing it with bai zhu for IBS (Bai et al. 2023).
// Red Peony Root (chi shao) comes from the same species. Family per GBIF.

run({
  name: "White Peony Root",
  profile: { family: "Paeoniaceae", genus: "Paeonia", species: "lactiflora", nativeRange: "China, Mongolia, Korea and eastern Siberia", partsUsed: "The dried root, with the bark removed" },
  sources: {
    he: {
      title: "Anti-inflammatory and immunomodulatory effects of Paeonia lactiflora Pall., a traditional Chinese herbal medicine",
      author: "He DY, Dai SM",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2011-02-25",
      doi: "10.3389/fphar.2011.00010",
      pmid: "21687505",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3108611/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yang: {
      title: "Efficacy and safety of total glucosides of paeony in the treatment of 5 types of inflammatory arthritis: A systematic review and meta-analysis",
      author: "Yang K, Zeng L, Long Z, et al.",
      journal: "Pharmacological Research",
      publicationDate: "2023-09-01",
      doi: "10.1016/j.phrs.2023.106842",
      pmid: "37402434",
      url: "https://doi.org/10.1016/j.phrs.2023.106842",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    chen: {
      title: "Total Glucosides of Paeonia lactiflora for Safely Reducing Disease Activity in Systemic Lupus Erythematosus: A Systematic Review and Meta-Analysis",
      author: "Chen Y, Wang L, Cao Y, Li N",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-01-31",
      doi: "10.3389/fphar.2022.834947",
      pmid: "35173622",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8841895/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    zheng: {
      title: "Total glucosides of paeony for the treatment of psoriasis: A systematic review and meta-analysis of randomized controlled trials",
      author: "Zheng Q, Jiang W, Sun X, et al.",
      journal: "Phytomedicine",
      publicationDate: "2019-09-01",
      doi: "10.1016/j.phymed.2019.152940",
      pmid: "31100680",
      url: "https://doi.org/10.1016/j.phymed.2019.152940",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    bai: {
      title: "Atractylodes macrocephala-Paeonia lactiflora Class Formula for the Treatment of Irritable Bowel Syndrome: A Systematic Review With Meta-Analysis and Trial Sequential Analysis",
      author: "Bai W, Wang Z, Liang J, Deng H",
      journal: "Cureus",
      publicationDate: "2023-12-05",
      doi: "10.7759/cureus.49997",
      pmid: "38186470",
      url: "https://doi.org/10.7759/cureus.49997",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Bai Shao", type: "REGIONAL_NAME", region: "China" },
    { name: "Total Glucosides of Paeony (TGP)", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Paeoniflorin", slug: "paeoniflorin", type: "monoterpene glycoside" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In China, Korea and Japan, a tea of the peeled, dried root has been used for more than 1,200 years for joint pain, period pain, muscle cramps and spasms, hepatitis and fever.",
      source: "he",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "An extract of the root (TGP) is used as a medicine in China. A 2023 review of 63 trials (5,293 people) found that adding it to standard care may ease symptoms and inflammation in rheumatoid arthritis, ankylosing spondylitis and other arthritis, but most trials were small and low quality.",
      source: "yang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In 14 trials in lupus, adding the extract to standard care lowered disease activity and the steroid doses people needed. The evidence was moderate to low quality.",
      source: "chen",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In 30 trials in psoriasis, adding the extract to other treatment helped more people improve and cut relapses. The trials were mostly low quality.",
      source: "zheng",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Chinese formulas built around white peony and bai zhu relieved IBS symptoms better than placebo or standard drugs in 24 trials, especially IBS with diarrhea.",
      source: "bai",
    },
    {
      category: "PRECLINICAL",
      summary: "In animal studies, the extract and its main compound, paeoniflorin, eased pain and inflammation and calmed an overactive immune system.",
      source: "he",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "The most common side effect of the extract is stomach upset, mostly mild diarrhea.",
      source: "he",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "An extract added to standard care eased arthritis symptoms in many small Chinese trials." },
    { slug: "ibs", notes: "Formulas pairing it with bai zhu relieved IBS symptoms in trials." },
  ],
});

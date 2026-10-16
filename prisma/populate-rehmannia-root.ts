import { run } from "./lib/populate-herb";

// Rehmannia Root (Rehmannia glutinosa, di huang), from a 2025 review of its
// natural products against kidney fibrosis (Zhao et al.) and a 2026 review of its
// polysaccharides (Wang et al.).

run({
  name: "Rehmannia Root",
  profile: {
    family: "Orobanchaceae",
    genus: "Rehmannia",
    species: "glutinosa",
    partsUsed: "The root, used raw (sheng di huang) or steamed until black (shu di huang)",
  },
  sources: {
    zhao: {
      title: "Harnessing the multi-targeted potential of rehmanniae radix natural products against renal fibrosis: a mechanistic review",
      author: "Zhao K, Zhu H, Zheng L, Wang W, Liu P, Yu R, Ma X",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-11-17",
      doi: "10.3389/fphar.2025.1690036",
      pmid: "41333019",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12666082/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Rehmannia glutinosa polysaccharides: a review on structural features, pharmacological potential, and advanced delivery systems",
      author: "Wang B, Ma X, Yang X, Yang J, Zhou X, Ding X",
      journal: "Frontiers in Nutrition",
      publicationDate: "2026-03-18",
      doi: "10.3389/fnut.2026.1772902",
      pmid: "41929773",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13038584/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Di Huang", type: "TRADITIONAL_NAME" },
    { name: "Shu Di Huang", type: "TRADITIONAL_NAME" },
    { name: "Sheng Di Huang", type: "TRADITIONAL_NAME" },
    { name: "Rehmanniae Radix", type: "COMMON_NAME" },
    { name: "Rehmannia", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called di huang; recorded in the Shennong Herbal Classic and used for centuries to strengthen the \"kidneys\" and treat kidney diseases." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Shennong Herbal Classic describes rehmannia as sweet, cold and non-toxic, and recommends it for:\n- Broken bones and muscle injuries\n- \"Blood stasis\"\n- Building up bone marrow and muscle\n- Aching joints\nIt says that taken long-term, it \"lightens the body\" and slows ageing. Chinese medicine has long used it to strengthen the \"kidneys\", a term that also covers growth, reproduction and fluid balance.",
      source: "zhao",
    },
    {
      category: "TRADITIONAL",
      summary: "The root is used raw (sheng di huang) or steamed (shu di huang), and steaming changes its chemistry and effects.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, compounds from rehmannia, such as catalpol, protected the kidneys and reduced kidney scarring. These haven't been confirmed in people.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, rehmannia polysaccharides boosted the immune system and slowed some lung cancer cells. These haven't been tested in people.",
      source: "wang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Its long traditional use suggests it's safe, but full toxicity studies of its purified extracts are largely missing.",
      source: "wang",
    },
  ],
});

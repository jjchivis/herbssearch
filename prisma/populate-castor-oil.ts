import { run } from "./lib/populate-herb";

// Castor Oil (Ricinus communis), from a 2026 review of the plant (Mtendwa et al.),
// a 2022 meta-analysis of castor oil for inducing labour (Amerizadeh et al.) and a
// 2025 case report of ricin poisoning from castor seeds (Rauniyar et al.).

run({
  name: "Castor Oil",
  profile: {
    family: "Euphorbiaceae",
    genus: "Ricinus",
    species: "communis",
    nativeRange: "Grown throughout tropical and subtropical regions",
    partsUsed: "The oil pressed from the seeds; the seeds themselves are poisonous",
  },
  sources: {
    mtendwa: {
      title: "Phytochemistry, Pharmacological Potential and Industrial Applications of Ricinus communis L.: A Review",
      author: "Mtendwa S, Rungqu P, Maqanda V",
      journal: "Pharmaceuticals",
      publicationDate: "2026-08-10",
      doi: "10.3390/ph19081258",
      pmid: "42653756",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13516395/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    amerizadeh: {
      title: "Effect and Safety of Castor Oil on Labor Induction and Prevalence of Vaginal Delivery: A Systematic Review and Meta-Analysis",
      author: "Amerizadeh A, Farajzadegan Z, Asgary S",
      journal: "Iranian Journal of Nursing and Midwifery Research",
      publicationDate: "2022-07-01",
      doi: "10.4103/ijnmr.ijnmr_7_21",
      pmid: "36275342",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9580580/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    rauniyar: {
      title: "Pediatric ricin toxicity from castor seed ingestion: a case report from Nepal",
      author: "Rauniyar Z, Thapa T, Thapa U, Shrestha RS",
      journal: "Annals of Medicine and Surgery",
      publicationDate: "2025-09-16",
      doi: "10.1097/MS9.0000000000003907",
      pmid: "41180702",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12577919/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Castor", type: "COMMON_NAME" },
    { name: "Castor Bean", type: "COMMON_NAME" },
    { name: "Castor Oil Plant", type: "COMMON_NAME" },
    { name: "Ricinus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The castor plant's leaves, roots, seeds and oil have long been used in traditional medicine for pain, inflammation, infections, wounds, gut problems and skin diseases. Castor oil is used as a strong laxative for constipation, and traditional records describe its use to bring on labour, help expel the placenta, and as a purgative for children and older people. It's also widely used in cosmetics and industry.",
      source: "mtendwa",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 12 studies with 1,653 women at full term (37 to 42 weeks) found that castor oil made it about 3 times more likely that labour would start, and more women gave birth vaginally (81% vs 69%). None of the studies reported serious harm, but nausea was common: in one trial, about half the women who took castor oil felt sick.\n\nTechnical detail: labour induction RR 3.27 (95% CI 1.96–5.46).",
      source: "amerizadeh",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Castor seeds contain ricin, one of the most toxic plant substances known. Properly processed castor oil is generally regarded as safe because ricin stays in the seed pulp, not the oil. Raw seeds are the main danger.",
      source: "mtendwa",
    },
    {
      category: "TOXICITY",
      description: "Children can be poisoned by eating castor seeds. In a 2025 case from Nepal, a 6-year-old boy who ate castor seeds became ill with stomach and gut symptoms and needed hospital care.",
      source: "rauniyar",
    },
    {
      category: "PREGNANCY",
      description: "Castor oil can bring on labour. The studies only included women at full term (37 to 42 weeks), and nausea was common.",
      source: "amerizadeh",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Castor oil is a strong traditional laxative. The seeds are poisonous." },
    { slug: "pregnancy-and-childbirth", notes: "Can bring on labour; a review of studies in women at full term found it made labour more likely to start. Nausea is common." },
  ],
});

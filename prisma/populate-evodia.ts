import { run } from "./lib/populate-herb";

// Evodia Fruit (Euodiae Fructus, wu zhu yu, from Tetradium ruticarpum / Euodia
// rutaecarpa), from a 2025 review including toxicology (Hao et al.) and a 2020
// review including drug interactions and liver injury (Li & Wang; abstract only).

run({
  name: "Evodia Fruit",
  profile: {
    family: "Rutaceae",
    genus: "Tetradium",
    species: "ruticarpum",
    partsUsed: "The dried, nearly ripe fruit, often processed to reduce its toxicity",
  },
  sources: {
    hao: {
      title: "Euodiae Fructus: a review of botany, application, processing, phytochemistry, quality control, pharmacology, and toxicology",
      author: "Hao Y, Qi J, Huang X, Liu C, Liu Y",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-01-29",
      doi: "10.3389/fphar.2025.1509032",
      pmid: "39944619",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11813794/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li: {
      title: "Traditional uses, phytochemistry, pharmacology, pharmacokinetics and toxicology of the fruit of Tetradium ruticarpum: A review",
      author: "Li M, Wang C",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2020-08-03",
      doi: "10.1016/j.jep.2020.113231",
      pmid: "32758577",
      url: "https://pubmed.ncbi.nlm.nih.gov/32758577/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wu Zhu Yu", type: "TRADITIONAL_NAME" },
    { name: "Wuzhuyu", type: "TRADITIONAL_NAME" },
    { name: "Euodiae Fructus", type: "COMMON_NAME" },
    { name: "Evodia", type: "COMMON_NAME" },
    { name: "Evodia rutaecarpa", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called wu zhu yu; recorded in the Shennong Herbal Classic and used to dispel cold, relieve pain and stop vomiting and diarrhoea. It's mildly toxic." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wu zhu yu was first recorded in the Shennong Herbal Classic. It's used to dispel cold and relieve pain, stop vomiting and ease diarrhoea, and in formulas for:\n- Headache\n- Stomach pain and vomiting\n- Diarrhoea and irritable bowel syndrome\n- Period pain\n- Heavy bleeding after childbirth",
      source: "hao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, wu zhu yu and its compounds (evodiamine and rutaecarpine) slowed tumours, may help reduce inflammation, killed bacteria, reduced obesity, acted as antioxidants, and affected the nervous system and heart. These haven't been confirmed in people.",
      source: "li",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Wu zhu yu is mildly toxic. Too much can cause stomach pain, vomiting and blurred vision. It has caused liver damage in rats and in people, and the heart and kidneys may also be affected. Its main active compounds are also behind its toxicity. Processing reduces it, but toxicity research is limited.",
      source: "hao",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Compounds from the fruit can interact with medicines and cause liver injury.",
      source: "li",
    },
  ],
  symptoms: [
    { slug: "headache", notes: "Used in Chinese formulas for headache. It's mildly toxic and has caused liver damage." },
    { slug: "occasional-nausea", notes: "Traditionally used to stop vomiting. It's mildly toxic and has caused liver damage." },
    { slug: "liver-safety-warnings", notes: "Has caused liver damage in rats and people." },
  ],
});

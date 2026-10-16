import { run } from "./lib/populate-herb";

// Aster Root (Aster tataricus, zi wan), from a 2025 review of its botany,
// chemistry, traditional use, pharmacology and toxicology (Zhang et al.).

run({
  name: "Aster Root",
  profile: {
    family: "Asteraceae",
    genus: "Aster",
    species: "tataricus",
    nativeRange: "China, Korea, Japan, eastern Siberia and the northern United States",
    partsUsed: "The soft purple roots and rhizome, raw or honey-fried",
  },
  sources: {
    zhang: {
      title: "Aster tataricus L. f.: a review on the botany, phytochemistry, ethnopharmacology, pharmacology, toxicology and comprehensive utilization",
      author: "Zhang X, Liu M, Zhang X, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-04-09",
      doi: "10.3389/fphar.2025.1581505",
      pmid: "40271061",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12014666/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Zi Wan", type: "TRADITIONAL_NAME" },
    { name: "Ziwan", type: "TRADITIONAL_NAME" },
    { name: "Asteris Radix", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called zi wan (\"purple, soft\"); recorded in the Shennong Herbal Classic as a lung medicine to moisten the lungs and relieve cough and phlegm." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Zi wan is named for its soft, purple roots. Its use goes back to the Shennong Herbal Classic, where it's an important lung medicine that moistens the lungs and relieves cough and phlegm. It's also used for coughs in Japanese Kampo medicine and for coughs and asthma in traditional Korean medicine. The root is often honey-fried, which changes its chemistry.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, aster root eased coughs and helped clear phlegm, may help reduce inflammation, relaxed the airways, helped acute lung injury, slowed tumours and reduced bone loss. These haven't been confirmed in people.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Aster root has some liver toxicity. Its cyclic peptides (astins) resemble a known liver-damaging compound, and its saponins can damage red blood cells. Toxicity studies are few; processing and combining it with other herbs are thought to reduce toxicity.",
      source: "zhang",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "A classic Chinese, Japanese and Korean cough and phlegm remedy. Not tested on its own in trials; it has some liver toxicity." },
    { slug: "liver-safety-warnings", notes: "Reported to have some liver toxicity." },
  ],
});

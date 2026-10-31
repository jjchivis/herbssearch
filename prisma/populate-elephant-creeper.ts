import { run } from "./lib/populate-herb";

// Elephant Creeper (Argyreia nervosa, Hawaiian baby woodrose), from a 2011
// wound-healing study of its leaves (Singhal et al.) and a 2025 systematic
// review of lysergic acid amide, the hallucinogen in its seeds (Castro et al.).
// Family per GBIF.

run({
  name: "Elephant Creeper",
  profile: {
    family: "Convolvulaceae",
    genus: "Argyreia",
    species: "nervosa",
    nativeRange: "India; now grown in tropical regions",
    partsUsed: "The leaves and roots (the seeds are hallucinogenic)",
  },
  sources: {
    singhal: {
      title: "Wound healing activity of Argyreia nervosa leaves extract",
      author: "Singhal A, Gupta H, Bhati V",
      journal: "International Journal of Applied & Basic Medical Research",
      publicationDate: "2011-01-01",
      doi: "10.4103/2229-516X.81978",
      pmid: "23776770",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3657942/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    castro: {
      title: "Lysergic Acid Amide (LSA), an LSD Analog: Systematic Review of Pharmacological Effects, Adverse Outcomes, and Therapeutic Potentials",
      author: "Castro PSCC, Leopoldo K, Pedro MOP, et al.",
      journal: "Pharmacy",
      publicationDate: "2025-07-21",
      doi: "10.3390/pharmacy13040098",
      pmid: "40700269",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12286086/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Hawaiian Baby Woodrose", type: "COMMON_NAME" }],
  constituents: [{ name: "Lysergic Acid Amide", slug: "lysergic-acid-amide", type: "ergot alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The seeds have been used in rituals and traditional medicine by Indigenous peoples. They are the main source of lysergic acid amide (LSA), a hallucinogen related to LSD.",
      source: "castro",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In normal and diabetic rats and mice, a leaf extract applied to wounds, or taken by mouth in diabetic animals, helped wounds heal faster.",
      source: "singhal",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The seeds contain LSA, a hallucinogen. People who took them have had hallucinations, nausea and anxiety, and some had psychosis, high blood pressure or needed hospital care. The amount of LSA in seeds varies a lot, which makes the effects unpredictable.",
      source: "castro",
    },
  ],
});

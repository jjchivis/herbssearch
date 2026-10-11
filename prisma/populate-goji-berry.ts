import { run } from "./lib/populate-herb";

// Goji Berry (Lycium barbarum), from a 2023 meta-analysis of randomised trials on
// blood fats (Zeng et al.) and a 2025 review of food-herb-drug interactions with
// warfarin case reports (Bukowska et al.).

run({
  name: "Goji Berry",
  profile: {
    family: "Solanaceae",
    genus: "Lycium",
    species: "barbarum",
    nativeRange: "China",
    partsUsed: "The dried red berries, eaten, as juice or tea, or soaked in wine",
  },
  sources: {
    zeng: {
      title: "L. barbarum (Lycium barbarum L.) supplementation for lipid profiles in adults: A systematic review and meta-analysis of RCTs",
      author: "Zeng X, Zhao W, Wang S, Xiong H, Wu J, Ren J",
      journal: "Medicine",
      publicationDate: "2023-09-01",
      doi: "10.1097/MD.0000000000034952",
      pmid: "37773857",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10545344/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    bukowska: {
      title: "Hazardous Interactions Between Food, Herbs, and Drugs in the First Stage of Biotransformation: Case Reports of Adverse Drug Interactions in Humans",
      author: "Bukowska B, Grzegorowska A, Szczerkowska-Majchrzak E, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-05-28",
      doi: "10.3390/ijms26115188",
      pmid: "40507996",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12155451/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Goji", type: "COMMON_NAME" },
    { name: "Wolfberry", type: "COMMON_NAME" },
    { name: "Gouqizi", type: "TRADITIONAL_NAME" },
    { name: "Lycium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Known in China for over 2,000 years as a tonic for various organs." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Goji berries have been known in China for over 2,000 years, where the plant is used as a tonic for various organs. They're believed to help with diabetes, high blood fats, blood clots, a weak immune system, cancer, hepatitis and male infertility. Today they're added to health foods around the world.",
      source: "bukowska",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review combined 5 trials with 259 adults, mostly healthy people, who took goji berries, juice or extract for 4 to 16 weeks. Goji slightly lowered triglycerides (a type of blood fat) and slightly raised \"good\" HDL cholesterol. It didn't significantly change total or \"bad\" LDL cholesterol.\n\nTechnical detail: triglycerides fell by 0.14 mmol/L (95% CI 0.08 to 0.20); HDL-C rose by 0.07 mmol/L (95% CI 0.01 to 0.13); changes in TC and LDL-C were not significant.",
      source: "zeng",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Goji can strengthen the blood thinner warfarin. A 65-year-old man on warfarin had blood in his urine after drinking 20 mL of goji wine, and a 61-year-old woman's blood-clotting test (INR) rose to 4.1 after drinking 3 to 4 glasses of strong goji tea a day for 4 days. Both returned to normal after stopping goji. In the lab, goji juice blocks the liver enzymes that break down warfarin.",
      source: "bukowska",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "Slightly lowered triglycerides and raised \"good\" HDL cholesterol in a review of 5 small trials; no effect on LDL." },
  ],
});

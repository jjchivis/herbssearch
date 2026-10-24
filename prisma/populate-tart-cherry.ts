import { run } from "./lib/populate-herb";

// Tart cherry (Prunus cerasus), from two meta-analyses in exercise: recovery
// (Hill et al. 2021) and endurance performance (Gao & Chilibeck 2020). No safety
// sources were found. Family per GBIF.

run({
  name: "Tart Cherry",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "cerasus",
    partsUsed: "The fruit, usually as juice or concentrate",
  },
  sources: {
    hill: {
      title: "Tart Cherry Supplementation and Recovery From Strenuous Exercise: A Systematic Review and Meta-Analysis",
      author: "Hill JA, Keane KM, Quinlan R, Howatson G",
      journal: "International Journal of Sport Nutrition and Exercise Metabolism",
      publicationDate: "2021-01-13",
      doi: "10.1123/ijsnem.2020-0145",
      pmid: "33440334",
      url: "https://pubmed.ncbi.nlm.nih.gov/33440334/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    gao: {
      title: "Effect of Tart Cherry Concentrate on Endurance Exercise Performance: A Meta-analysis",
      author: "Gao R, Chilibeck PD",
      journal: "Journal of the American College of Nutrition",
      publicationDate: "2020-01-27",
      doi: "10.1080/07315724.2020.1713246",
      pmid: "31986108",
      url: "https://pubmed.ncbi.nlm.nih.gov/31986108/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Sour Cherry", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2021 review of 14 studies found tart cherry supplements helped recovery after hard exercise: they slightly reduced muscle soreness and helped muscle strength and power come back faster. They also slightly lowered two markers of inflammation.\n\nTechnical detail: soreness ES −0.44; strength ES −0.78; power ES −0.53; CRP ES −0.46; IL-6 ES −0.35; no effect on creatine kinase or TNF-α.",
      source: "hill",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review of 10 studies in 147 healthy people found tart cherry juice or powder, taken from 7 days to 1.5 hours before exercise, modestly improved endurance performance.\n\nTechnical detail: SMD 0.36 (95% CI 0.07 to 0.64); I² = 0%.",
      source: "gao",
    },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "In studies, it was taken as tart cherry juice or concentrate.", source: "gao" },
    { slug: "powder", notes: "Powdered tart cherry concentrate is also used.", source: "gao" },
  ],
});

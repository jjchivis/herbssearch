import { run } from "./lib/populate-herb";

// Cocoa (Theobroma cacao), from the 2017 Cochrane review of cocoa and blood
// pressure (Ried et al.) and the COSMOS trial of cocoa flavanol supplements
// (Sesso et al. 2022). Family per GBIF.

run({
  name: "Cocoa",
  profile: {
    family: "Malvaceae",
    genus: "Theobroma",
    species: "cacao",
    partsUsed: "The beans (seeds), as cocoa and chocolate",
  },
  sources: {
    cochrane: {
      title: "Effect of cocoa on blood pressure",
      author: "Ried K, Fakler P, Stocks NP",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2017-04-25",
      doi: "10.1002/14651858.CD008893.pub3",
      pmid: "28439881",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6478304/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    cosmos: {
      title: "Effect of cocoa flavanol supplementation for the prevention of cardiovascular disease events: the COcoa Supplement and Multivitamin Outcomes Study (COSMOS) randomized clinical trial",
      author: "Sesso HD, Manson JE, Aragaki AK, et al.",
      journal: "The American Journal of Clinical Nutrition",
      publicationDate: "2022-06-01",
      doi: "10.1093/ajcn/nqac055",
      pmid: "35294962",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9170467/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Cacao", type: "COMMON_NAME" },
    { name: "Chocolate", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Cocoa contains flavanols, which help the blood vessel lining make nitric oxide. Nitric oxide relaxes blood vessels, which may lower blood pressure.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 Cochrane review of 35 trials with 1,804 mostly healthy people found that flavanol-rich cocoa products lowered blood pressure a little (by about 2 points) over 2 to 18 weeks, compared with low-flavanol products. Results varied between trials, and the effect seemed bigger in trials where people knew what they were taking.\n\nTechnical detail: SBP −1.76 mmHg (95% CI −3.09 to −0.43); DBP −1.76 mmHg (95% CI −2.57 to −0.94); flavanol doses 30–1,218 mg/day.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In the COSMOS trial of 21,442 older US adults, a cocoa extract supplement taken for a median of 3.6 years didn't significantly lower total heart attacks, strokes and other cardiovascular events, but deaths from cardiovascular disease were 27% lower than with a placebo. More research is needed.\n\nTechnical detail: 500 mg flavanols/day; total CVD events HR 0.90 (95% CI 0.78 to 1.02); CVD death HR 0.73 (95% CI 0.54 to 0.98).",
      source: "cosmos",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Cocoa products were well tolerated in trials. About 1% of people had stomach complaints or nausea.",
      source: "cochrane",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "The COSMOS trial found no safety concerns with a cocoa extract supplement taken for several years.",
      source: "cosmos",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A 2017 Cochrane review found flavanol-rich cocoa lowered blood pressure by about 2 points." },
  ],
  preparations: [
    {
      slug: "culinary-preparation",
      notes: "Trials used flavanol-rich chocolate and cocoa drinks and powders, from about 1 to 105 grams of cocoa product a day.",
      source: "cochrane",
    },
    { slug: "capsule", notes: "Cocoa extract supplements standardized for flavanols are also sold.", source: "cosmos" },
  ],
});

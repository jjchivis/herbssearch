import { run } from "./lib/populate-herb";

// Macadamia Nut (Macadamia integrifolia), from the FDA's 2017 qualified health
// claim for macadamia nuts and heart disease, and a 2023 randomized trial
// (Jones et al.). Family per GBIF.

run({
  name: "Macadamia Nut",
  profile: {
    family: "Proteaceae",
    genus: "Macadamia",
    species: "integrifolia",
    nativeRange: "Eastern Australia",
    partsUsed: "The nut",
  },
  sources: {
    fda: {
      title: "FDA Completes Review of Qualified Health Claim Petition for Macadamia Nuts and the Risk of Coronary Heart Disease",
      organization: "US Food and Drug Administration",
      publicationDate: "2017-07-24",
      url: "https://www.fda.gov/food/hfp-constituent-updates/fda-completes-review-qualified-health-claim-petition-macadamia-nuts-and-risk-coronary-heart-disease",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    jones: {
      title: "Macadamia nut effects on cardiometabolic risk factors: a randomised trial",
      author: "Jones JL, Sabaté J, Heskey C, Oda K, Miles F, Rajaram S",
      journal: "Journal of Nutritional Science",
      publicationDate: "2023-05-08",
      doi: "10.1017/jns.2023.39",
      pmid: "37180485",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10173088/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In 2017 the FDA allowed a qualified health claim: supportive but not conclusive research shows that eating 1.5 ounces of macadamia nuts a day, as part of a diet low in saturated fat and cholesterol, may reduce the risk of heart disease. The FDA called the evidence consistent but limited, and it applies when the nuts replace other sources of saturated fat.",
      source: "fda",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2023 trial, 35 adults with belly fat added macadamia nuts (about 15% of their daily calories) to their usual diet for 8 weeks. They didn't gain weight or body fat, and their cholesterol fell slightly, though not by a statistically meaningful amount.",
      source: "jones",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "Macadamia nuts are very high in fat, about 38 g per 50 g of nuts, mostly the unsaturated kind.",
      source: "fda",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "The FDA allows a limited heart-health claim; one trial found a small, uncertain drop in cholesterol." },
  ],
});

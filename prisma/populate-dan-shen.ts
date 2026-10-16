import { run } from "./lib/populate-herb";

// Dan Shen (Salvia miltiorrhiza root), from a 2026 review of its cardiovascular
// effects (Vikal et al.) and a 2026 self-controlled case series on bleeding with
// anticoagulants (Liao et al.).

run({
  name: "Dan Shen",
  profile: {
    family: "Lamiaceae",
    genus: "Salvia",
    species: "miltiorrhiza",
    partsUsed: "The red roots",
  },
  sources: {
    vikal: {
      title: "Cardiovascular Benefits of Salvia miltiorrhiza (Danshen) Supplementation: Bioactive Constituents, Mechanisms, Clinical Evidence, and Formulation Strategies",
      author: "Vikal A, Maurya R, Patel P, Kurmi BD, Setzer WN, Sharifi-Rad J, Calina D",
      journal: "Food Science & Nutrition",
      publicationDate: "2026-04-26",
      doi: "10.1002/fsn3.71755",
      pmid: "42052427",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13111759/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liao: {
      title: "Increasing risk of hemorrhage following concurrent use of Salvia miltiorrhiza and oral anticoagulants",
      author: "Liao JA, Chen TC, Chai PYC, Chen TH, Chen YC",
      journal: "Therapeutic Advances in Drug Safety",
      publicationDate: "2026-05-10",
      doi: "10.1177/20420986261446497",
      pmid: "42136797",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13169102/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Danshen", type: "TRADITIONAL_NAME" },
    { name: "Salvia miltiorrhiza", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called dan shen; the root is widely used in Chinese medicine, especially for the heart and circulation." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Dan shen is a widely used Chinese medicinal herb, and its roots are the main part used for the heart and blood vessels. It's taken as the crude root and in preparations such as Compound Danshen Dripping Pills and injections.",
      source: "vikal",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its compounds (tanshinones and salvianolic acids) acted as antioxidants, may help reduce inflammation, relaxed blood vessels, reduced blood clotting and scarring, and protected the heart during reduced blood flow.",
      source: "vikal",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Clinical studies suggest possible benefits in coronary artery disease and reduced blood flow to the heart. But the trials were small and varied in the products and doses used, so high-quality trials are still needed.",
      source: "vikal",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Dan shen raises the risk of bleeding with blood thinners. In a 2026 study of 525 people in Taiwan taking oral anticoagulants, the risk of any bleeding was about 4 times higher in the first 4 weeks after dan shen was added, including bleeding in the gut and the brain. In the lab, it slows the breakdown of warfarin and newer blood thinners such as rivaroxaban and apixaban.\n\nTechnical detail: any bleeding aIRR 3.98 (95% CI 3.29–4.77) on days 1–14 and 3.99 (3.23–4.79) on days 15–28.",
      source: "liao",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Side effects are rare but can include mild stomach upset and allergic reactions. Too much may be toxic, and it can affect how the liver breaks down some medicines.",
      source: "vikal",
    },
  ],
  symptoms: [
    { slug: "poor-circulation", notes: "Widely used in Chinese medicine for the heart and circulation; trials are small. Raises bleeding risk with blood thinners." },
  ],
});

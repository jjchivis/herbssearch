import { run } from "./lib/populate-herb";

// Shiso Perilla Seeds (Perilla frutescens), from a 2024 review of perilla seeds
// (Kaur et al.), a 2024 review of perilla seed oil (Li et al.) and a 2021 study
// of perilla seed allergy in children (Jeong et al.).

run({
  name: "Shiso Perilla Seeds",
  profile: {
    family: "Lamiaceae",
    genus: "Perilla",
    species: "frutescens",
    nativeRange: "East Asia, including China, Korea, Japan, India and Thailand",
    partsUsed: "The seeds, eaten or pressed for oil",
  },
  sources: {
    kaur: {
      title: "A comprehensive review on nutritional, nutraceutical, and industrial perspectives of perilla (Perilla frutscens L.) seeds: An orphan oilseed crop",
      author: "Kaur S, Seem K, Ali A, et al.",
      journal: "Heliyon",
      publicationDate: "2024-06-18",
      doi: "10.1016/j.heliyon.2024.e33281",
      pmid: "39022021",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11252951/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li: {
      title: "Perilla Seed Oil: A Review of Health Effects, Encapsulation Strategies and Applications in Food",
      author: "Li M, Jiang N, Guo G, et al.",
      journal: "Foods",
      publicationDate: "2024-11-13",
      doi: "10.3390/foods13223615",
      pmid: "39594031",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11593517/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jeong: {
      title: "Clinical and Immunological Characterization of Perilla Seed Allergy in Children",
      author: "Jeong K, Lee SY, Jeon SA, Gantulga P, Nam JY, Hong SJ, Lee S",
      journal: "Journal of Investigational Allergology and Clinical Immunology",
      publicationDate: "2021-10-13",
      doi: "10.18176/jiaci.0756",
      pmid: "34643183",
      url: "https://pubmed.ncbi.nlm.nih.gov/34643183/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Perilla Seed", type: "COMMON_NAME" },
    { name: "Shiso", type: "COMMON_NAME" },
    { name: "Perilla", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Perilla is an oilseed crop native to East Asia. One variety is grown mainly for its seeds and oil, and another for use in traditional medicine. The seeds are 30–45% oil and also provide fiber, protein, vitamins and minerals.",
      source: "kaur",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Perilla seed oil is about 60% alpha-linolenic acid, a plant omega-3 fat. In lab and animal studies, the seeds and oil have shown antioxidant activity and possible effects on inflammation, blood sugar, body weight, cholesterol and the heart.",
      source: "kaur",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Reviewers say large clinical trials in people are still needed to confirm the health effects of perilla seed oil.",
      source: "li",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Perilla seeds can cause immediate allergic reactions. In a study of 21 children with perilla seed allergy in Korea (typically about 3 years old), more than 1 in 4 had anaphylaxis, a severe, life-threatening reaction.\n\nTechnical detail: 28.6% had anaphylaxis; 85.7% had perilla seed-specific IgE.",
      source: "jeong",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Brazilian Mint (Hyptis crenata), from a 2026 mouse anxiety study (Lacerda
// Gomes et al.) and a 2024 review of its oil's effects on smooth muscle
// (Cardeal dos Santos et al.). No human or safety studies were found. Family
// per GBIF.

run({
  name: "Brazilian Mint",
  profile: {
    family: "Lamiaceae",
    genus: "Hyptis",
    species: "crenata",
    nativeRange: "Brazil and northern South America",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    lacerda: {
      title: "Anxiolytic-Like Effect of Hyptis crenata Essential Oil: Behavioral Insights and In Silico SERT Modulation",
      author: "Lacerda Gomes SM, Cardeal Dos Santos AN, Izidorio JLG, et al.",
      journal: "ACS Omega",
      publicationDate: "2026-03-06",
      doi: "10.1021/acsomega.5c11201",
      pmid: "41908468",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13019207/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cardeal: {
      title: "Translational Perspectives on the Therapeutic Potential of Hyptis Crenata Essential Oil Terpenes in Smooth Muscle Function",
      author: "Cardeal Dos Santos AN, da Cruz Freire JE, Rodrigues BF, et al.",
      journal: "Planta Medica",
      publicationDate: "2024-09-03",
      doi: "10.1055/a-2409-3735",
      pmid: "39227040",
      url: "https://pubmed.ncbi.nlm.nih.gov/39227040/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Beta-Caryophyllene", slug: "beta-caryophyllene", type: "sesquiterpene" },
    { name: "Alpha-Pinene", slug: "alpha-pinene", type: "monoterpene" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In stressed mice, the leaf oil given for a week reduced anxious behavior, similar to the antidepressant citalopram. It didn't change eating, drinking or weight.\n\nTechnical detail: 100 and 300 mg/kg; elevated plus maze; main compounds caryophyllene, azulene, α-pinene, bornanone and viridiflorene.",
      source: "lacerda",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Many compounds in the oil relax smooth muscle, the kind in the gut, blood vessels and womb, in animal tissue tests. Researchers suggest this could explain effects on gut cramps and blood pressure, but it hasn't been tested in people.",
      source: "cardeal",
    },
  ],
});

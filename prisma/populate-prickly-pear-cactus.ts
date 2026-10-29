import { run } from "./lib/populate-herb";

// Prickly Pear Cactus (Opuntia ficus-indica, nopal), from a 2014 review
// (El-Mostafa et al.), a 2025 trial (Zaman et al.) and a 2023 meta-analysis
// of Mexican ancestral foods (Escutia-Gutiérrez et al.). Family per GBIF.

run({
  name: "Prickly Pear Cactus",
  profile: {
    family: "Cactaceae",
    genus: "Opuntia",
    species: "ficus-indica",
    nativeRange: "Mexico; now grown in dry regions worldwide",
    partsUsed: "The pads (nopales) and fruit",
  },
  sources: {
    elmostafa: {
      title: "Nopal cactus (Opuntia ficus-indica) as a source of bioactive compounds for nutrition, health and disease",
      author: "El-Mostafa K, El Kharrassi Y, Badreddine A, et al.",
      journal: "Molecules",
      publicationDate: "2014-09-17",
      doi: "10.3390/molecules190914879",
      pmid: "25232708",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6270776/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zaman: {
      title: "Assessment of Opuntia ficus-indica supplementation on enhancing antioxidant levels",
      author: "Zaman R, Tan ESS, Bustami NA, et al.",
      journal: "Scientific Reports",
      publicationDate: "2025-01-28",
      doi: "10.1038/s41598-025-87680-7",
      pmid: "39875543",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11775336/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    escutia: {
      title: "Mexican Ancestral Foods (Theobroma cacao, Opuntia ficus indica, Persea americana and Phaseolus vulgaris) Supplementation on Anthropometric, Lipid and Glycemic Control Variables in Obese Patients: A Systematic Review and Meta-Analysis",
      author: "Escutia-Gutiérrez R, Sandoval-Rodríguez A, Galicia-Moreno M, et al.",
      journal: "Foods",
      publicationDate: "2023-03-10",
      doi: "10.3390/foods12061177",
      pmid: "36981103",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10047948/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Nopal", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Indian Fig", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "The nopal cactus is rich in polyphenols, vitamins, healthy fats and amino acids. In lab and animal studies, its compounds may help reduce inflammation and showed antioxidant, blood-sugar-lowering, antimicrobial and nerve-protecting effects.",
      source: "elmostafa",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a study of 50 healthy adults, 1,500 mg of prickly pear a day for 3 months raised antioxidant levels in saliva by about 48% and lowered markers of cell damage. Participants also reported feeling better. There was no comparison group.\n\nTechnical detail: salivary total antioxidant capacity +48.1%; MDA −28.3%, 3-NT −51.5%, 8-OHdG −59.8% (P < 0.001).",
      source: "zaman",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 15 studies in 1,670 people with obesity found that eating traditional Mexican foods, including nopal, slightly lowered body mass index. The studies varied a lot, and more trials are needed.",
      source: "escutia",
    },
  ],
});

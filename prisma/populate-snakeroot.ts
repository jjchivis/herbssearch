import { run } from "./lib/populate-herb";

// Snakeroot here means Ageratina pichinchensis (axihuitl), chosen by the site
// owner. Other plants share the name (Black Cohosh is "black snakeroot"), and
// none of them is covered here. Verified sources: a review of the plant
// (Sánchez-Ramos et al. 2021), which summarizes the Mexican clinical trials, and
// a trial for nail fungus in people with diabetes (Romero-Cerecero et al. 2020).
// Family per GBIF / Catalogue of Life. No source covered pregnancy,
// breastfeeding or medicine interactions, so none is stated.

run({
  name: "Snakeroot",
  profile: {
    family: "Asteraceae",
    genus: "Ageratina",
    species: "pichinchensis",
    nativeRange: "Native to Mexico, where it grows in many states",
    partsUsed: "The above-ground parts (leaves and stems)",
  },
  sources: {
    sanchez: {
      title: "Phytochemical, Pharmacological, and Biotechnological Study of Ageratina pichinchensis: A Native Species of Mexico",
      author: "Sánchez-Ramos M, Marquina-Bahena S, Alvarez L, Román-Guerrero A, Bernabé-Antonio A, Cruz-Sosa F",
      journal: "Plants",
      organization: "Plants (Basel)",
      publicationDate: "2021-10-19",
      doi: "10.3390/plants10102225",
      pmid: "34686034",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8540463/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    romero: {
      title: "Effectiveness of an encecalin standardized extract of Ageratina pichinchensis on the treatment of onychomycosis in patients with diabetes mellitus",
      author: "Romero-Cerecero O, Islas-Garduño AL, Zamilpa A, Tortoriello J",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2020-02-22",
      doi: "10.1002/ptr.6644",
      pmid: "32086985",
      url: "https://pubmed.ncbi.nlm.nih.gov/32086985/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Axihuitl", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Snakeroot (Ageratina pichinchensis) has long been used in traditional Mexican medicine for skin conditions and injuries, and is mentioned in 16th-century sources. The above-ground parts are popularly used for skin problems, wounds, tumors and mouth sores. In rural Morelos, midwives and herbalists use it for respiratory, genital, digestive, urinary and skin infections.",
      source: "sanchez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts showed activity against bacteria and fungi (including fungi that cause athlete's foot), and reduced inflammation. In diabetic rats, extracts helped skin wounds heal.",
      source: "sanchez",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small clinical trials in Mexico have tested snakeroot extracts on the skin:\n- Athlete's foot: a 10% extract cream worked about as well as the antifungal ketoconazole over 4 weeks.\n- Fungal skin and nail infections: a 10% lacquer worked in 71% of people, compared with 81% for the antifungal ciclopirox. No side effects were seen.\n- Leg ulcers from poor vein circulation: a standardized extract helped them heal.\n- Diabetic foot ulcers: a cream shortened healing time and wound size, though the difference wasn't statistically significant.\n\nTechnical detail: therapeutic efficacy 71.1% vs 80.9%, mycological efficacy 59.1% vs 63.8% (lacquer vs 8% ciclopirox); Trichophyton rubrum and T. mentagrophytes infections.",
      source: "sanchez",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of people with type 2 diabetes and mild to moderate nail fungus, a lacquer made from a standardized snakeroot extract was applied for 6 months and compared with the antifungal ciclopirox. It worked about as well: nails improved in 78.5% of the snakeroot group and 77.2% of the ciclopirox group.\n\nTechnical detail: double-blind, randomized, controlled; encecalin-standardized extract vs 8% ciclopirox; no statistically significant difference between groups.",
      source: "romero",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects were seen in the trial of a snakeroot lacquer for fungal skin and nail infections.",
      source: "sanchez",
    },
  ],
  symptoms: [
    {
      slug: "fungal-skin-infections",
      notes: "Small trials in Mexico found extracts worked about as well as standard antifungal creams and lacquers for athlete's foot and nail fungus.",
    },
    {
      slug: "wounds-and-burns",
      notes: "Traditionally used in Mexico for wounds. Small trials suggest it may help leg ulcers and diabetic foot ulcers heal.",
    },
  ],
});

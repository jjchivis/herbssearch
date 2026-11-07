import { run } from "./lib/populate-herb";

// Links existing herbs to the "Fungal Skin and Nail Infections" topic, adding
// the sourced evidence behind each link. Herbs were suggested by a consumer
// article on toenail fungus; only those with a usable source are linked.
// Not linked: lavender and aloe (no human or direct lab evidence found for
// skin or nail fungus). Tea tree was already linked by its own script.

run(
  {
    name: "Garlic",
    sources: {
      ledezma: {
        title: "Efficacy of ajoene in the treatment of tinea pedis: a double-blind and comparative study with terbinafine",
        author: "Ledezma E, Marcano K, Jorquera A, De Sousa L, Padilla M, Pulgar M, Apitz-Castro R",
        journal: "Journal of the American Academy of Dermatology",
        publicationDate: "2000-11-01",
        doi: "10.1067/mjd.2000.107243",
        pmid: "11050588",
        url: "https://doi.org/10.1067/mjd.2000.107243",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
      ufomadu: {
        title: "A Review of The Efficacy of Complementary and Alternative Medicines in Managing Dermatologic Infectious Diseases",
        author: "Ufomadu P, Gill BJ, Shimizu I, Orengo I, Rosen T",
        journal: "The Journal of Clinical and Aesthetic Dermatology",
        publicationDate: "2025-12-01",
        pmid: "41647766",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12871498/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2000 trial, soldiers with athlete's foot used a cream made with ajoene, a compound from garlic, or a standard antifungal cream (terbinafine) twice a day for 1 week. Two months later, the fungus had cleared in all of those on the stronger ajoene cream, about the same as with terbinafine. Of the 70 who started, only 47 were checked at the end.\n\nTechnical detail: mycologic cure at 60 days: 1% ajoene 100%, 0.6% ajoene 72%, 1% terbinafine 94%; randomized, double-blind.",
        source: "ledezma",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2025 review of trials of natural remedies for skin infections said garlic-derived ajoene shows promise for fungal skin infections, but hasn't been confirmed in strong randomized trials.",
        source: "ufomadu",
      },
    ],
    symptoms: [
      {
        slug: "fungal-skin-infections",
        notes:
          "A cream made from ajoene, a garlic compound, cleared athlete's foot about as well as a standard antifungal cream in one small trial. Not tested on toenail fungus.",
      },
    ],
  },
  {
    name: "Oregano",
    sources: {},
    symptoms: [
      {
        slug: "fungal-skin-infections",
        notes: "Oregano oil has traditionally been applied for fungal infections. It hasn't been tested on athlete's foot or nail fungus in people.",
      },
    ],
  },
  {
    name: "Neem",
    sources: {
      tiple: {
        title:
          "Antifungal Activity of Neem Leaf Extract With Eucalyptus citriodora Oil and Cymbopogon martini Oil Against Tinea Capitis: An In-Vitro Evaluation",
        author: "Tiple RH, Jamane SR, Khobragade DS",
        journal: "Cureus",
        publicationDate: "2024-05-05",
        doi: "10.7759/cureus.59671",
        pmid: "38836134",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11148711/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "In a 2024 lab study, neem leaf extract stopped the growth of two fungi that cause ringworm of the scalp, though at much higher strengths than a standard antifungal medicine. It has not been tested on fungal infections in people.\n\nTechnical detail: MIC 187.5–375 μg/ml against Microsporum canis and Trichophyton tonsurans, vs 0.25–0.50 μg/ml for fluconazole.",
        source: "tiple",
      },
    ],
    symptoms: [
      {
        slug: "fungal-skin-infections",
        notes: "Lab studies only: neem leaf extract slowed fungi that cause ringworm. Not tested on athlete's foot or nail fungus in people.",
      },
    ],
  },
  {
    name: "Turmeric",
    sources: {
      rahman: {
        title:
          "Antidermatophytic activity of Curcuma longa against Trichophyton spp.: compound identification and molecular docking to lanosterol 14α-demethylase",
        author: "Rahman ABZN, Patwary MF, Ahmed S, et al.",
        journal: "BMC Complementary Medicine and Therapies",
        publicationDate: "2025-09-01",
        doi: "10.1186/s12906-025-05049-9",
        pmid: "40890783",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12403855/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "In a 2025 lab study, turmeric root extract slowed the growth of several Trichophyton fungi, the kind that cause athlete's foot and ringworm, including strains resistant to a common antifungal medicine. The authors say studies in animals or people are still needed.\n\nTechnical detail: methanolic extract; inhibition zones 10–25 mm against T. mentagrophytes, T. indotineae and T. interdigitale; active against fluconazole-resistant strains.",
        source: "rahman",
      },
    ],
    symptoms: [
      {
        slug: "fungal-skin-infections",
        notes: "Lab studies only: turmeric extract slowed fungi that cause athlete's foot and ringworm. Not tested in people.",
      },
    ],
  },
);

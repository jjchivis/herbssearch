import { run } from "./lib/populate-herb";

// Carica papaya, from a 2025 systematic review and meta-analysis of papaya
// leaf extract for low platelets during chemotherapy (Mîrșu-Păun) and a 2025
// systematic review of dengue treatments (Aynekulu Mersha et al.). Family per
// GBIF.

run({
  name: "Carica Papaya",
  profile: {
    family: "Caricaceae",
    genus: "Carica",
    species: "papaya",
    nativeRange: "Tropical Central America; now grown throughout the tropics",
    partsUsed: "The leaves (as an extract) and the fruit",
  },
  sources: {
    mirsu: {
      title: "Could Carica papaya leaf extract impact chemotherapy-induced thrombocytopenia? A systematic review and meta-analysis",
      author: "Mîrșu-Păun A",
      journal: "Nutrition and Health",
      publicationDate: "2025-08-21",
      doi: "10.1177/02601060251367802",
      pmid: "40836827",
      url: "https://pubmed.ncbi.nlm.nih.gov/40836827/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    aynekulu: {
      title: "Effectiveness of antiviral, immunomodulatory and platelet-enhancing agents for treatment of dengue infection: A systematic review",
      author: "Aynekulu Mersha DG, Duijff F, Langerak T, et al.",
      journal: "Virulence",
      publicationDate: "2025-11-13",
      doi: "10.1080/21505594.2025.2587491",
      pmid: "41214477",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12622339/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Papaya", type: "COMMON_NAME" }, { name: "Pawpaw", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review combined studies of 410 people with cancer whose platelets (blood-clotting cells) fell during chemotherapy. Papaya leaf extract raised platelet counts, and no major side effects were reported. Doses ranged from 580 to 3,300 mg a day. The studies varied and had a risk of bias, so more rigorous research is needed.\n\nTechnical detail: pooled effect size 2.20 (95% CI 0.96–3.44), P < 0.001.",
      source: "mirsu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a review of dengue treatment trials, the antibiotic doxycycline combined with papaya extract shortened hospital stays (7.3 vs 9.1 days) and raised platelet counts more than standard care. The studies were small, so larger trials are needed.",
      source: "aynekulu",
    },
  ],
});

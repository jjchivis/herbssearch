import { run } from "./lib/populate-herb";

// Adds reproductive-health topics (and the sourced entries behind them) to
// herbs that already have full profiles. Each link is backed by evidence
// already on the herb's page or added here with its source.

run(
  {
    // Turmeric: new evidence from a 2025 systematic review (Shrateh et al.).
    // A 2024 meta-analysis on the same question was retracted, so it isn't used.
    name: "Turmeric",
    sources: {
      shrateh: {
        title: "Curcumin, a bioactive supplement for premenstrual syndrome and dysmenorrhea: A systematic review of randomised clinical trials",
        author: "Shrateh ON, Jawed A, Shuja MH, Kumar KA, Rehan ST, Abdelrhman S, Naasan M, Wahab NAA",
        journal: "European Journal of Obstetrics & Gynecology and Reproductive Biology: X",
        organization: "European Journal of Obstetrics & Gynecology and Reproductive Biology: X",
        publicationDate: "2025-12-01",
        doi: "10.1016/j.eurox.2025.100432",
        pmid: "41281701",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12639325/",
        sourceType: "systematic_review",
        tier: "TIER_2_SYSTEMATIC_REVIEW",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2025 review of 10 trials of curcumin (turmeric's best-known compound) for PMS and period pain found that 6 reported significantly fewer symptoms. The authors say curcumin shows promise, but more research is needed to find the right dose and length of use, and to check possible effects on iron levels.\n\nTechnical detail: randomized controlled trials using the Premenstrual Syndrome Screening Tool (PSST) and visual analog scales; associations with inflammatory markers and vitamin D status.",
        source: "shrateh",
      },
    ],
    symptoms: [
      { slug: "premenstrual-syndrome", notes: "A 2025 review found 6 of 10 trials reported fewer PMS symptoms with curcumin; more research is needed." },
      { slug: "menstrual-discomfort", notes: "A 2025 review found curcumin reduced period pain in several trials; more research is needed." },
    ],
  },
  {
    // Ashwagandha: links rest on the existing NCCIH and Ayurvedic entries; the
    // menopause link adds a 2025 trial of shatavari plus ashwagandha.
    name: "Ashwagandha",
    sources: {
      ademola: {
        title: "Efficacy and safety of Shatavari root extract (Asparagus racemosus) for menopausal symptoms: a randomized, double-blind, three-arm, placebo-controlled study",
        author: "Ademola J, Ajgaonkar A, Debnath T, Debnath K, Langade J",
        journal: "Frontiers in Reproductive Health",
        organization: "Frontiers in Reproductive Health",
        publicationDate: "2025-01-01",
        doi: "10.3389/frph.2025.1654503",
        pmid: "41394012",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12695842/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In an 8-week trial of 135 women aged 45–65 with menopausal symptoms, a combination of ashwagandha and shatavari root extracts improved menopause symptom scores significantly more than placebo or shatavari alone. Side effects were mild (loose stools and dizziness in the combination group).\n\nTechnical detail: randomized, double-blind, three-arm, placebo-controlled; Menopause Rating Scale; NCT06716554.",
        source: "ademola",
      },
    ],
    symptoms: [
      {
        slug: "fertility",
        notes: "Limited evidence suggests taking it for 2 to 4 months may improve testosterone levels and sperm quality in men. There isn't enough evidence for female infertility.",
      },
      { slug: "sexual-health", notes: "Traditionally used in Ayurveda to boost sex drive." },
      {
        slug: "menopause-symptoms",
        notes: "In one trial, ashwagandha combined with shatavari eased menopause symptoms more than placebo. There isn't enough evidence for ashwagandha alone.",
      },
    ],
  },
  {
    // Sage: link rests on the existing NCCIH entry.
    name: "Sage",
    sources: {},
    symptoms: [{ slug: "menopause-symptoms", notes: "Early studies suggest common sage may reduce how often menopausal women have hot flashes." }],
  },
);

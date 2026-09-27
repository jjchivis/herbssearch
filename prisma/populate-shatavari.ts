import { run } from "./lib/populate-herb";

// Shatavari (Asparagus racemosus), from verified sources: a 2013 review
// (Alok et al., Asian Pac J Trop Dis), a Cochrane review of oral galactagogues
// (Foong et al. 2020) and a 2025 randomized placebo-controlled trial for
// menopausal symptoms (Ademola et al., Front Reprod Health). Family per GBIF /
// Catalogue of Life (older sources place it in Liliaceae). No source covering
// drug interactions was found, so none is stated.

run({
  name: "Shatavari",
  profile: {
    family: "Asparagaceae",
    genus: "Asparagus",
    species: "racemosus",
    nativeRange: "Found at low altitudes throughout India",
    partsUsed: "The dried roots",
  },
  sources: {
    alok: {
      title: "Plant profile, phytochemistry and pharmacology of Asparagus racemosus (Shatavari): A review",
      author: "Alok S, Jain S, Verma A, Kumar M, Mahor A, Sabharwal M",
      journal: "Asian Pacific Journal of Tropical Disease",
      organization: "Asian Pacific Journal of Tropical Disease",
      publicationDate: "2013-06-01",
      doi: "10.1016/S2222-1808(13)60049-3",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4027291/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cochrane: {
      title: "Oral galactagogues (natural therapies or drugs) for increasing breast milk production in mothers of non-hospitalised term infants",
      author: "Foong SC, Tan ML, Foong WC, Marasco LA, Ho JJ, Ong JH",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2020-05-01",
      doi: "10.1002/14651858.CD011505.pub2",
      pmid: "32421208",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7388198/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
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
  synonyms: [
    { name: "Satawar", type: "REGIONAL_NAME", region: "India" },
    { name: "Satamuli", type: "REGIONAL_NAME", region: "India" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes:
        "Used in Ayurveda as a tonic, to increase urination and to increase breast milk, and by some practitioners for nervous disorders, inflammation and some infections. Traditionally used for hormonal balance.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Shatavari's dried roots are used as medicine. They are traditionally described as a tonic that increases urination and breast milk, and some Ayurvedic practitioners have used them for nervous disorders, inflammation and certain infections. The review notes there's no scientific proof for these uses.\n\nTechnical detail: tonic, diuretic, galactagogue.",
      source: "alok",
    },
    {
      category: "TRADITIONAL",
      summary: "Shatavari is an Ayurvedic herb traditionally used for hormonal balance and to help the body adapt to stress.",
      source: "ademola",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Reports on shatavari root extracts in experimental studies describe effects on milk production, protecting the liver and the immune system, and preventing kidney stones. Researchers have also studied whether it can harm unborn babies.\n\nTechnical detail: galactogogue, antihepatotoxic, immunomodulatory, immunoadjuvant and antilithiatic effects, and teratogenicity.",
      source: "alok",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 Cochrane review of herbs and medicines to boost breast milk included shatavari among 27 studies of natural remedies. The evidence overall was of very low certainty, so the reviewers were very uncertain whether natural remedies like these increase milk or help babies gain weight. Reported side effects were minor.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an 8-week trial, 135 women aged 45–65 with menopausal symptoms took shatavari root extract, shatavari combined with ashwagandha, or a placebo. The combination improved menopause symptom scores significantly more than placebo or shatavari alone. Hormone levels stayed normal. The authors called for longer and larger studies.\n\nTechnical detail: randomized, double-blind, three-arm, placebo-controlled, multicentric; Menopause Rating Scale; NCT06716554.",
      source: "ademola",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In the 8-week menopause trial, side effects were mild and uncommon: one person taking shatavari had nausea. Liver, kidney and thyroid tests stayed normal.",
      source: "ademola",
    },
    {
      category: "PREGNANCY",
      description:
        "Researchers have studied whether shatavari can harm unborn babies, and its safety in pregnancy is uncertain. Talk to your doctor or midwife before using it while pregnant.",
      source: "alok",
    },
  ],
  symptoms: [
    {
      slug: "breast-milk-supply",
      notes: "Traditionally used in Ayurveda to increase breast milk. A Cochrane review found the evidence for herbal milk boosters is very uncertain.",
    },
    {
      slug: "menopause-symptoms",
      notes: "In one trial, shatavari combined with ashwagandha eased menopause symptoms more than placebo; shatavari alone was less clear.",
    },
  ],
});

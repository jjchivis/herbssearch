import { run } from "./lib/populate-herb";

// White Prakash, a white tea from Nepal (Camellia sinensis). At the site owner's
// request this page uses research on white tea and on tea's calming compound
// L-theanine. Sources: the seller's product page (identity only), a 2024 trial
// of white tea in obesity, a 2021 lab comparison of white and green tea
// (including caffeine), and a 2026 meta-analysis of L-theanine trials.

run({
  name: "White Prakash",
  profile: {
    family: "Theaceae",
    genus: "Camellia",
    species: "sinensis",
    partsUsed: "The young leaves and buds, lightly processed into white tea",
  },
  sources: {
    baskota: {
      title: "White Prakash (product page)",
      organization: "Baskota Group (tea seller, Nepal)",
      url: "https://www.baskotagroup.com/White-Prakash",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    akyildiz: {
      title: "White Tea Consumption Alleviates Anthropometric and Metabolic Parameters in Obese Patients",
      author: "Akyildiz K, Yilmaz A, Avci U, Toraman MN, Yazici ZA",
      journal: "Medicina",
      publicationDate: "2024-09-25",
      doi: "10.3390/medicina60101568",
      pmid: "39459354",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11509830/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    paiva: {
      title:
        "Comparative Analysis of the Polyphenols, Caffeine, and Antioxidant Activities of Green Tea, White Tea, and Flowers from Azorean Camellia sinensis Varieties Affected by Different Harvested and Processing Conditions",
      author: "Paiva L, Rego C, Lima E, Marcone M, Baptista J",
      journal: "Antioxidants",
      publicationDate: "2021-01-27",
      doi: "10.3390/antiox10020183",
      pmid: "33514043",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7912137/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gerolymos: {
      title: "Cognitive and affective effects of L-Theanine: a systematic review and meta-analysis of 31 randomized trials",
      author: "Gerolymos C, Saddier E, Boyer L, Fond G",
      journal: "Molecular Psychiatry",
      publicationDate: "2026-07-06",
      doi: "10.1038/s41380-026-03727-9",
      pmid: "42410082",
      url: "https://doi.org/10.1038/s41380-026-03727-9",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "White Tea", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "White Prakash is a white tea from Nepal, made from the same plant as green and black tea (Camellia sinensis). Its seller promotes it for calm, immune support and mood, but those claims are not based on studies of this tea. The research below is on white tea in general and on tea compounds.",
      source: "baskota",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2021 lab analysis compared white and green teas from the same plants. The white teas had fewer catechins (tea antioxidants) than the green teas but still showed strong antioxidant activity. They also had more caffeine than the green teas, so white tea is not necessarily low in caffeine.\n\nTechnical detail: caffeine 6.2–27.7 mg/g, ordered white tea > green tea > tea flowers.",
      source: "paiva",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2024 study, people with obesity followed a diet and exercise plan for 12 weeks and drank white tea, or took one of two weight-loss medicines, or nothing extra. Everyone lost weight. The white tea group also had lower cholesterol, triglycerides and markers of inflammation, and higher HDL (\"good\") cholesterol.",
      source: "akyildiz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "L-theanine is a calming amino acid found in tea. A 2026 review of 31 trials of L-theanine supplements found a single 200 mg dose improved attention, and may modestly lower short-term stress and low mood. Effects on anxiety were inconsistent. These trials used concentrated supplements, not cups of tea, and no serious side effects were reported.",
      source: "gerolymos",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "Tea's L-theanine may modestly reduce short-term stress in supplement trials; not tested with this tea." },
    { slug: "high-cholesterol", notes: "White tea with diet and exercise lowered cholesterol and triglycerides in a 12-week study." },
  ],
});

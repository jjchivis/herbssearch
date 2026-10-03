import { run } from "./lib/populate-herb";

// Black Mint, a Jamaican spearmint (Mentha spicata var. jamaicensis, as named
// by the site owner). A Jamaican herb-production manual (IICA) lists blackmint
// separately from peppermint. No verified source describing its traditional
// uses in Jamaica was found. Research below is on spearmint (Mentha spicata)
// tea, extract and oil: a PCOS tea trial (Grant 2010), a memory trial
// (Herrlinger et al. 2018) and a chemotherapy nausea trial (Tayarani-Najaran
// et al. 2013). None of it tested black mint itself. Biology Insights (2026)
// is cited only for other plants that share the name.

run({
  name: "Black Mint",
  profile: {
    family: "Lamiaceae",
    genus: "Mentha",
    species: "spicata var. jamaicensis",
    partsUsed: "The leaves, usually made into a bush tea",
  },
  sources: {
    biologyinsights: {
      title: "What Is Black Mint? Its Unique Traits and Uses",
      organization: "Biology Insights",
      publicationDate: "2026-01-17",
      url: "https://biologyinsights.com/what-is-black-mint-its-unique-traits-and-uses/",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    grant: {
      title: "Spearmint herbal tea has significant anti-androgen effects in polycystic ovarian syndrome. A randomized controlled trial",
      author: "Grant P",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2010-02-01",
      doi: "10.1002/ptr.2900",
      pmid: "19585478",
      url: "https://doi.org/10.1002/ptr.2900",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    herrlinger: {
      title: "Spearmint Extract Improves Working Memory in Men and Women with Age-Associated Memory Impairment",
      author: "Herrlinger KA, Nieman KM, Sanoshy KD, et al.",
      journal: "Journal of Alternative and Complementary Medicine",
      organization: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2018-01-09",
      doi: "10.1089/acm.2016.0379",
      pmid: "29314866",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5779242/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tayarani: {
      title: "Antiemetic activity of volatile oil from Mentha spicata and Mentha × piperita in chemotherapy-induced nausea and vomiting",
      author: "Tayarani-Najaran Z, Talasaz-Firoozi E, Nasiri R, Jalali N, Hassanzadeh M",
      journal: "ecancermedicalscience",
      organization: "ecancermedicalscience",
      publicationDate: "2013-01-31",
      doi: "10.3332/ecancer.2013.290",
      pmid: "23390455",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3562057/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jamaican Black Mint", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Blackmint", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Spearmint", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The name \"black mint\" is also used for two other plants: 'Black Mitcham', a peppermint with dark purple stems and leaves (Mentha × piperita), and huacatay (Tagetes minuta), a Peruvian plant that is actually a kind of marigold. This page is about the Jamaican spearmint. Make sure you know which plant you have.",
      source: "biologyinsights",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "These studies used ordinary spearmint, not black mint. In a 30-day trial, 42 women with polycystic ovary syndrome (PCOS) and excess body hair drank spearmint tea or a placebo tea twice a day. Testosterone levels fell in the spearmint group, and the women felt their hair growth had improved. A doctor's rating of hair growth didn't change significantly.\n\nTechnical detail: free and total testosterone reduced (p < 0.05); LH and FSH increased; modified DQLI improved; Ferriman-Gallwey score not significantly different (p = 0.12).",
      source: "grant",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 90-day trial, 90 older adults with mild age-related memory problems took a spearmint extract or a placebo. The higher dose improved working memory and the ability to fall asleep compared with placebo.\n\nTechnical detail: 900 mg/day extract high in rosmarinic acid; quality of working memory +15% (p = 0.0469), spatial working memory accuracy +9% (p = 0.0456); 600 mg/day and 0 mg/day groups also tested.",
      source: "herrlinger",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial in people having chemotherapy, spearmint or peppermint essential oil reduced how often and how badly they vomited in the first 24 hours, compared with placebo. The authors reported the oils were safe for this use.\n\nTechnical detail: randomized, double-blind; 50 chemotherapy courses analysed per group.",
      source: "tayarani",
    },
  ],
  symptoms: [
    {
      slug: "pcos",
      notes: "In women with PCOS, spearmint tea lowered testosterone in a 30-day trial. Black mint itself hasn't been studied.",
    },
    {
      slug: "memory-and-thinking",
      notes: "A spearmint extract improved working memory in older adults in a 90-day trial. Black mint itself hasn't been studied.",
    },
    {
      slug: "occasional-nausea",
      notes: "Spearmint oil reduced vomiting during chemotherapy in a trial. Black mint tea hasn't been studied.",
    },
  ],
});

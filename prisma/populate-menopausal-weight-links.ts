import { run } from "./lib/populate-herb";

// Adds the menopausal weight gain topic. None of these herbs has been tested
// for weight in menopausal women. Flaxseed gets a 2024 meta-analysis of weight
// trials in adults (Musazadeh et al.), Ashwagandha a 2026 review of body
// composition trials (Castropa et al.), and Black Cohosh a 2026 study in female
// rats (Habersatter et al.) and a 2025 safety review (Le et al.). Ginseng and
// maca were requested but no published evidence on weight in menopause was
// found, so they aren't linked.

run(
  {
    name: "Flaxseed",
    sources: {
      musazadeh: {
        title: "The effects of flaxseed (Linum usitatissimum) supplementation on anthropometric indices: An updated systematic review and meta-analysis of randomized clinical trials",
        author: "Musazadeh V, Abolghasemian M, Kavyani Z, Moridpour AH, Nazari A, Faghfouri AH",
        journal: "Complementary Therapies in Medicine",
        publicationDate: "2024-07-09",
        doi: "10.1016/j.ctim.2024.103066",
        pmid: "38992480",
        url: "https://doi.org/10.1016/j.ctim.2024.103066",
        sourceType: "systematic_review",
        tier: "TIER_2_SYSTEMATIC_REVIEW",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2024 review that pooled 64 trials found flaxseed supplements led to small drops in body weight (about 0.6 kg, or 1.4 lb), BMI and waist size (about 1.4 cm). Effects were larger in people with obesity and in trials lasting 10 to 20 weeks.",
        source: "musazadeh",
      },
    ],
    symptoms: [
      {
        slug: "menopausal-weight-gain",
        notes: "Trials in adults found small drops in weight and waist size. It hasn't been tested specifically for weight gain in menopause.",
      },
    ],
  },
  {
    name: "Ashwagandha",
    sources: {
      castropa: {
        title: "Effects of Ashwagandha (Withania somnifera) on Body Composition: A Narrative Review",
        author: "Castropa GL, Rhoades N, Liu Y, Bivins IH, Gonzalez DE, Kreider RB",
        journal: "Sports",
        publicationDate: "2026-10-09",
        doi: "10.3390/sports14100442",
        pmid: "42931579",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13709338/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2026 review of ashwagandha and body composition found mixed results, with the most benefit in people who are overweight. In one 8-week trial of stressed adults with overweight or obesity, those taking ashwagandha root extract lost about 2.3 kg compared with 1.1 kg on placebo.",
        source: "castropa",
      },
    ],
    symptoms: [
      {
        slug: "menopausal-weight-gain",
        notes: "Helped stressed adults with overweight lose a little weight in one trial. It hasn't been tested for weight gain in menopause.",
      },
    ],
  },
  {
    name: "Black Cohosh",
    sources: {
      habersatter: {
        title: "Exercise-associated and metabolic effects of Cimicifuga racemosa extract Ze 450 in a high-fat diet model in female rats",
        author: "Habersatter E, Chen S, Kostov T, Drewe J, Boonen G, Butterweck V, Diel P",
        journal: "Biomedicine & Pharmacotherapy",
        publicationDate: "2026-05-28",
        doi: "10.1016/j.biopha.2026.119549",
        pmid: "42208349",
        url: "https://doi.org/10.1016/j.biopha.2026.119549",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
      le: {
        title: "Review of black cohosh-induced toxicity and adverse clinical effects",
        author: "Le Y, Li X, Guo X, Seo JE, Manjanatha MG, Mei N",
        journal: "Journal of Environmental Science and Health, Part C",
        publicationDate: "2025-06-12",
        doi: "10.1080/26896583.2025.2513795",
        pmid: "40503925",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12359085/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "In female rats on a high-fat diet for 12 weeks, a black cohosh extract (Ze 450) reduced weight gain and belly fat about as much as exercise did, and improved blood sugar handling.",
        source: "habersatter",
      },
    ],
    safety: [
      {
        category: "TOXICITY",
        description:
          "A 2025 safety review said recent studies indicate black cohosh doesn't work for menopause symptoms and that its extract can damage DNA in lab tests. Reported side effects range from mild reactions to liver damage and, rarely, death.",
        source: "le",
      },
    ],
    symptoms: [
      {
        slug: "menopausal-weight-gain",
        notes: "Reduced weight gain in female rats on a high-fat diet. No human studies on weight; watch for liver warning signs.",
      },
    ],
  },
);

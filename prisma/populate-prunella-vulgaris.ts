import { run } from "./lib/populate-herb";

// Prunella Vulgaris (self-heal, xia ku cao), from a 2024 review of its
// anti-tumor effects that covers its history (Ning et al.) and a 2025
// meta-analysis of trials in hyperthyroidism (Wei et al.).

run({
  name: "Prunella Vulgaris",
  profile: {
    family: "Lamiaceae",
    genus: "Prunella",
    species: "vulgaris",
    nativeRange: "Widespread, including China, Korea, Japan and Europe",
    partsUsed: "The flower spikes and above-ground parts, as teas, porridge, tablets, granules and ointments",
  },
  sources: {
    ning: {
      title: "Anti-Tumor Effects and Toxicity Reduction Mechanisms of Prunella vulgaris: A Comprehensive Review",
      author: "Ning N, Nan Y, Chen G, Huang S, Lu D, Yang Y, Meng F, Yuan L",
      journal: "Molecules",
      publicationDate: "2024-04-18",
      doi: "10.3390/molecules29081843",
      pmid: "38675663",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11052495/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wei: {
      title: "Efficacy and safety of Prunella vulgaris L. combined with antithyroid drugs for hyperthyroidism: a systematic review and meta-analysis",
      author: "Wei M, Zhao Q, Yuan M, Fan Y, Li M",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-02-27",
      doi: "10.3389/fphar.2025.1530152",
      pmid: "40083379",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11903460/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Self-heal", type: "COMMON_NAME" },
    { name: "Heal-all", type: "COMMON_NAME" },
    { name: "Xia Ku Cao", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called xia ku cao; recorded since the Han Dynasty and used as both a medicine and a food." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In China, prunella is called xia ku cao. It was recorded in Shen Nong's Herbal Classic of the Han Dynasty for swollen glands in the neck, head injuries, swollen feet, joint pain and \"clearing the liver\". It has been used for sore throats and to help wounds heal.\nIt's also eaten: the young leaves have been cooked as a vegetable since at least the Song Dynasty, and it's made into teas and porridge.",
      source: "ning",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, compounds from prunella may help reduce inflammation and have shown antioxidant, antiviral and anti-tumor effects.",
      source: "ning",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review combined 17 trials with 1,366 people with an overactive thyroid (hyperthyroidism). Adding prunella products to standard antithyroid medicines improved thyroid hormone levels, shrank the thyroid gland and caused fewer side effects than the medicines alone. Relapse rates were similar.\nThe evidence was low quality, so better trials are needed. Prunella was always used alongside the standard medicines, not instead of them.\n\nTechnical detail: free T3 SMD −0.98 (95% CI −1.39 to −0.57); adverse events RR 0.34 (95% CI 0.24–0.50) across 10 trials with 770 participants.",
      source: "wei",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Traditionally used in China for sore throats. Not tested for this in trials." },
  ],
});

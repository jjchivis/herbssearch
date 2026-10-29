import { run } from "./lib/populate-herb";

// Adds the hair loss topic to Rosemary, Ginseng, Aloe and Nettle. Rosemary
// gets a 2024 review of a rosemary oil trial (Bin Rubaian et al.), Ginseng a
// 2018 review of its human studies (Choi), and Aloe and Nettle a 2025
// systematic review of herbal hair-loss trials (Allam et al.). Aloe and nettle
// have no trials of their own, and their notes say so.

const ALLAM = {
  title: "Pathophysiology, conventional treatments, and evidence-based herbal remedies of hair loss with a systematic review of controlled clinical trials",
  author: "Allam AT, El-Shiekh RA, El-Dessouki AM, et al.",
  journal: "Naunyn-Schmiedeberg's Archives of Pharmacology",
  publicationDate: "2025-06-19",
  doi: "10.1007/s00210-025-04286-6",
  pmid: "40536553",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678491/",
  sourceType: "systematic_review" as const,
  tier: "TIER_2_SYSTEMATIC_REVIEW" as const,
};

run(
  {
    name: "Rosemary",
    sources: {
      binRubaian: {
        title: "An Overview of Commonly Used Natural Alternatives for the Treatment of Androgenetic Alopecia, with Special Emphasis on Rosemary Oil",
        author: "Bin Rubaian NF, Alzamami HFA, Amir BA",
        journal: "Clinical, Cosmetic and Investigational Dermatology",
        publicationDate: "2024-11-05",
        doi: "10.2147/CCID.S470989",
        pmid: "39524109",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11549889/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2015 trial, 100 men aged 18 to 49 with male-pattern hair loss used either rosemary oil or 2% minoxidil, a standard hair-loss treatment, on the scalp for 6 months. Rosemary oil worked about as well as minoxidil, and caused less scalp itching.",
        source: "binRubaian",
      },
    ],
    symptoms: [
      {
        slug: "hair-loss",
        notes: "In one 6-month trial in men with male-pattern hair loss, rosemary oil on the scalp worked about as well as 2% minoxidil.",
      },
    ],
  },
  {
    name: "Ginseng",
    sources: {
      choi: {
        title: "Hair-Growth Potential of Ginseng and Its Major Metabolites: A Review on Its Molecular Mechanisms",
        author: "Choi BY",
        journal: "International Journal of Molecular Sciences",
        publicationDate: "2018-09-11",
        doi: "10.3390/ijms19092703",
        pmid: "30208587",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6163201/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary: "Many lab and animal studies have found that ginseng and its compounds encourage hair growth.",
        source: "choi",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a few small human studies, Korean red ginseng increased hair thickness and density. In people with alopecia areata (patchy hair loss), adding it to steroid injections improved hair growth over 12 weeks, and adding it to minoxidil worked better than minoxidil alone.",
        source: "choi",
      },
    ],
    symptoms: [
      {
        slug: "hair-loss",
        notes: "A few small human studies found Korean red ginseng increased hair thickness and density, and helped alongside standard treatments.",
      },
    ],
  },
  {
    name: "Aloe",
    sources: { allam: ALLAM },
    evidence: [
      {
        category: "TRADITIONAL",
        summary: "Aloe has long been used on the scalp, by the ancient Egyptians as a scalp soother and by Native Americans for scalp hydration and healing.",
        source: "allam",
      },
    ],
    symptoms: [
      {
        slug: "hair-loss",
        notes: "Traditionally used to soothe the scalp. No trials of aloe on its own for hair loss were found.",
      },
    ],
  },
  {
    name: "Nettle",
    sources: { allam: ALLAM },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 6-month trial of 120 people with hair loss, a shampoo and scalp solution containing nettle and five other herbs reduced hair shedding much more than a placebo. Because it combined six herbs, the effect of nettle alone isn't known.",
        source: "allam",
      },
    ],
    symptoms: [
      {
        slug: "hair-loss",
        notes: "Only tested as one of six herbs in a shampoo and scalp solution, which reduced hair shedding in a 6-month trial.",
      },
    ],
  },
);

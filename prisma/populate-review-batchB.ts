import { run } from "./lib/populate-herb";

// Review sweep, batch B. Searched about 22 pages (Scutellaria Baicalensis,
// Perilla, Corn Silk, Sceletium, Katuki, Cornelian Cherry, Ju Hua, Gambir Hook
// Vine, Magnolia Bark, Catnip, Elecampane, Mugwort, Alfalfa, Mango Leaf, Cuscuta,
// Chaga, Amaranth, Queen Anne's Lace, Black Walnut, Shame O' Lady, Periwinkle,
// Poppy). Only Corn Silk and Amaranth had reviews of human studies on the same
// plant part; the others had lab or animal reviews, formula reviews, or none.

const S = "systematic_review" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;

run(
  {
    name: "Corn Silk",
    sources: {
      shiBp: {
        title: "Corn Silk Tea for Hypertension: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
        author: "Shi S, Li S, Li W, Xu H",
        journal: "Evidence-Based Complementary and Alternative Medicine",
        publicationDate: "2019-01-17",
        doi: "10.1155/2019/2915498",
        pmid: "30792743",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6354158/",
        sourceType: S,
        tier: T2,
      },
      shiLipid: {
        title: "Corn silk decoction for blood lipid in patients with angina pectoris: A systematic review and meta-analysis",
        author: "Shi S, Yu B, Li W, Shan J, Ma T",
        journal: "Phytotherapy Research",
        publicationDate: "2019-08-18",
        doi: "10.1002/ptr.6474",
        pmid: "31423665",
        url: "https://pubmed.ncbi.nlm.nih.gov/31423665/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2019 review of 5 Chinese trials with 567 people with high blood pressure found that adding corn silk tea to blood pressure medicine may lower blood pressure more than the medicine alone. Most trials were of poor quality, so the evidence is limited.\n\nTechnical detail: blood-pressure lowering response RR 1.27 (95% CI 1.17 to 1.38).",
        source: "shiBp",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2019 review of 4 trials in people with angina found that corn silk decoction, often alongside usual treatment, may lower total and LDL (\"bad\") cholesterol and triglycerides and raise HDL (\"good\") cholesterol. Most trials weren't blinded, which may have exaggerated the effects.",
        source: "shiLipid",
      },
    ],
    symptoms: [
      { slug: "high-blood-pressure", notes: "Limited, low-quality trials suggest corn silk tea may add to the effect of blood pressure medicine." },
      { slug: "high-cholesterol", notes: "A review of 4 trials suggests corn silk decoction may improve blood fats; most trials weren't blinded." },
    ],
  },
  {
    name: "Amaranth",
    sources: {
      yilma: {
        title: "Effect of Amaranth-Containing Dietary Intervention in Improving Hemoglobin Concentration: A Systematic Review and Meta-Analysis",
        author: "Yilma MT, Eifa A, Belayneh M, Orsango AZ",
        journal: "Public Health Reviews",
        publicationDate: "2024-01-01",
        doi: "10.3389/phrs.2024.1607597",
        pmid: "39829607",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11738614/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Amaranth is an iron-rich food used against anaemia. A 2024 review of 10 studies with 1,225 people found amaranth-based foods nudged haemoglobin (the iron-carrying part of blood) upward, but the change wasn't statistically clear. The authors suggest cooking methods may affect how much iron is absorbed.",
        source: "yilma",
      },
    ],
  },
);

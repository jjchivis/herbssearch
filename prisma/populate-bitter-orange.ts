import { run } from "./lib/populate-herb";

// Bitter Orange (Citrus aurantium), from the NCCIH fact sheet, a 2022
// systematic review and meta-analysis of synephrine trials (Koncz et al.), a
// 2021 review of the plant (Maksoud et al.), a 2017 rat safety study of a
// standardized extract (Deshmukh et al.) and a 2025 review of fruit juice drug
// interactions (Berteina-Raboin). Family per GBIF.

run({
  name: "Bitter Orange",
  profile: {
    family: "Rutaceae",
    genus: "Citrus",
    species: "aurantium",
    nativeRange: "Southeast Asia",
    partsUsed: "The fruit, peel, flowers and leaves, and oils from them",
  },
  sources: {
    nccih: {
      title: "Bitter Orange: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NCCIH), NIH",
      url: "https://www.nccih.nih.gov/health/bitter-orange",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    koncz: {
      title: "The Safety and Efficacy of Citrus aurantium (Bitter Orange) Extracts and p-Synephrine: A Systematic Review and Meta-Analysis",
      author: "Koncz D, Tóth B, Bahar MA, Roza O, Csupor D",
      journal: "Nutrients",
      publicationDate: "2022-09-28",
      doi: "10.3390/nu14194019",
      pmid: "36235672",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9572433/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    maksoud: {
      title: "Citrus aurantium L. Active Constituents, Biological Effects and Extraction Methods. An Updated Review",
      author: "Maksoud S, Abdel-Massih RM, Rajha HN, et al.",
      journal: "Molecules",
      publicationDate: "2021-09-26",
      doi: "10.3390/molecules26195832",
      pmid: "34641373",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8510401/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deshmukh: {
      title: "Bitter orange (Citrus aurantium L.) extract subchronic 90-day safety study in rats",
      author: "Deshmukh NS, Stohs SJ, Magar CC, Kale A, Sowmya B",
      journal: "Toxicology Reports",
      publicationDate: "2017-11-12",
      doi: "10.1016/j.toxrep.2017.11.002",
      pmid: "29214145",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5686423/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    berteina: {
      title: "Flavonoids and Furanocoumarins Involved in Drug Interactions",
      author: "Berteina-Raboin S",
      journal: "Molecules",
      publicationDate: "2025-04-09",
      doi: "10.3390/molecules30081676",
      pmid: "40333661",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12029527/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Seville Orange", type: "COMMON_NAME" },
    { name: "Sour Orange", type: "COMMON_NAME" },
    { name: "Zhi Shi", type: "TRADITIONAL_NAME", region: "China" },
  ],
  constituents: [{ name: "p-Synephrine", slug: "p-synephrine", type: "protoalkaloid" }],
  traditions: [{ slug: "european-folk-medicine", notes: "Leaves used by the Basque people for sleeplessness, stomach aches and palpitations." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The fruit is too sour to eat raw, but the fruit, peel and oils are used in cooking, to flavor beer and spirits, and in perfume. Bitter orange oil is used on the skin and in aromatherapy.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Basque people of Europe used the leaves for sleeplessness, stomach aches and a racing heart. In South America and Mexico the leaves are used as a laxative, for sleeplessness and to calm the nerves.",
      source: "maksoud",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Bitter orange is sold in weight-loss and sports supplements, but it hasn't been clearly shown to help with any health problem. Studies of weight loss and athletic performance were small, mostly tested mixtures of ingredients, and had conflicting results.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review that pooled 18 placebo-controlled trials found that synephrine, the main active compound in bitter orange, didn't cause meaningful weight loss or change body fat when taken over time.",
      source: "koncz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In small studies, breathing in bitter orange oil lowered anxiety in people having a bone marrow test, and in people withdrawing from crack cocaine during a stressful speaking task.",
      source: "maksoud",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Taken over time, synephrine from bitter orange raised blood pressure by about 6 points (top number) and 4 points (bottom number) in a 2022 review of trials, and tended to raise heart rate.",
      source: "koncz",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Abnormal heart rhythms, heart attacks and strokes have been reported in people taking bitter orange supplements, though most products also contained other ingredients, so bitter orange's role is unclear. It's likely safe in the amounts found in food.",
      source: "nccih",
    },
    {
      category: "CONTAMINATION",
      description:
        "When the FDA tested 59 bitter orange supplements, most didn't contain the amount of synephrine on the label, and 6 contained synthetic stimulants that aren't legal in supplements.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Seville orange juice can block CYP3A4, an enzyme in the gut that breaks down many medicines, similar to grapefruit juice. It has been shown to interact with felodipine, a blood pressure drug.",
      source: "berteina",
    },
    {
      category: "PREGNANCY",
      description: "It may not be safe to use bitter orange supplements during pregnancy.",
      source: "nccih",
    },
    {
      category: "BREASTFEEDING",
      description:
        "It may not be safe to use bitter orange supplements while breastfeeding, and animal studies suggest substances in it might reduce milk supply.",
      source: "nccih",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "The NCAA bans synephrine (bitter orange) as a stimulant, so athletes who are drug tested should avoid bitter orange supplements.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "anxiety",
      notes: "In small studies, breathing in bitter orange oil lowered anxiety before a medical test and during a stressful task. Whether aromatherapy with it helps is unclear.",
    },
    { slug: "occasional-sleeplessness", notes: "The leaves are a folk remedy for sleeplessness. Not studied in people." },
  ],
});

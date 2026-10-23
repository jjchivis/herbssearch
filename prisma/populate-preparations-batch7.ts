import { run } from "./lib/populate-herb";

// Preparations sweep, batch 7: preparations mentioned in each herb's existing
// research and safety entries, plus the NCI Essiac summary for sheep sorrel and
// slippery elm. Sources already exist and are matched by URL.

run(
  {
    name: "Alfalfa",
    sources: {
      s1: { title: "Alfalfa", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/alfalfa", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Alfalfa sprouts and seeds are eaten, but they have caused outbreaks of food poisoning.", source: "s1" },
    ],
  },
  {
    name: "Bayberry",
    sources: {
      s1: { title: "Effects of bayberry juice on inflammatory and apoptotic markers in young adults with features of non-alcoholic fatty liver disease", url: "https://pubmed.ncbi.nlm.nih.gov/24377455/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The fruit is made into juice, which has been tested in a trial in China.", source: "s1" },
    ],
  },
  {
    name: "Bloodwiss",
    sources: {
      s1: { title: "Phenolic Content and Antioxidant Capacity of Infusions of Vitis tiliifolia (Humb & Bonpl. Ex Schult.) Leaves", url: "https://jast.modares.ac.ir/article_16448.html", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "A tea is made from the leaves of wild Mexican grapevines.", source: "s1" },
    ],
  },
  {
    name: "Corn Silk",
    sources: {
      s1: { title: "Corn Silk Tea for Hypertension: A Systematic Review and Meta-Analysis of Randomized Controlled Trials", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6354158/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
      s2: { title: "Corn silk decoction for blood lipid in patients with angina pectoris: A systematic review and meta-analysis", url: "https://pubmed.ncbi.nlm.nih.gov/31423665/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In Chinese trials, corn silk was taken as a tea.", source: "s1" },
      { slug: "decoction", notes: "Corn silk has also been taken as a decoction (simmered in water).", source: "s2" },
    ],
  },
  {
    name: "Irish Moss",
    sources: {
      s1: { title: "Re-evaluation of carrageenan (E 407) and processed Eucheuma seaweed (E 407a) as food additives", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7009739/", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Carrageenan, the gel taken from red seaweeds such as Irish moss, is used as a food additive.", source: "s1" },
    ],
  },
  {
    name: "Marjoram",
    sources: {
      s1: { title: "The effect of Origanum majorana tea on motor and non-motor symptoms in patients with idiopathic Parkinson's disease: A randomized controlled pilot study", url: "https://pubmed.ncbi.nlm.nih.gov/34455218/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In one small trial, people drank marjoram tea.", source: "s1" },
    ],
  },
  {
    name: "Mistletoe",
    sources: {
      s1: { title: "European Mistletoe: Usefulness and Safety", url: "https://www.nccih.nih.gov/health/european-mistletoe", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "In Europe, mistletoe extracts given by injection are sold as prescription drugs. Most studies have used injections given by a health care provider.", source: "s1" },
    ],
  },
  {
    name: "Sesame Seeds",
    sources: {
      s1: { title: "Clinical evidence of sesame (Sesamum indicum L.) products and its bioactive compounds on anthropometric measures, blood pressure, glycemic control, inflammatory biomarkers, lipid profile, and oxidative stress parameters in humans: a GRADE-assessed systematic review and dose-response meta-analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11899564/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Sesame is eaten as whole seeds, as a powder and in bars.", source: "s1" },
      { slug: "oil", notes: "Sesame oil, from the seeds, is also used.", source: "s1" },
    ],
  },
  {
    name: "Sheep Sorrel",
    sources: {
      s1: { title: "Essiac/Flor Essence (PDQ): Health Professional Version", url: "https://www.cancer.gov/about-cancer/treatment/cam/hp/essiac-pdq", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Sheep sorrel is one of the herbs in Essiac, a mixture taken by mouth as a tea.", source: "s1" },
    ],
  },
  {
    name: "Slippery Elm",
    sources: {
      s1: { title: "Essiac/Flor Essence (PDQ): Health Professional Version", url: "https://www.cancer.gov/about-cancer/treatment/cam/hp/essiac-pdq", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The inner bark of slippery elm is one of the herbs in Essiac, a mixture taken by mouth as a tea.", source: "s1" },
    ],
  },
  {
    name: "Snakeroot",
    sources: {
      s1: { title: "Phytochemical, Pharmacological, and Biotechnological Study of Ageratina pichinchensis: A Native Species of Mexico", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8540463/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "salve", notes: "In trials, creams made with an extract of the plant were applied to the skin for athlete's foot and foot ulcers.", source: "s1" },
    ],
  },
  {
    name: "Sophora Root",
    sources: {
      s1: { title: "Five-Flavor Sophora flavescens Enteric-Coated Capsules for Ulcerative Colitis: A Systematic Review and Meta-Analysis of Randomized Clinical Trials", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8769833/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "capsule", notes: "It's an ingredient in a licensed Chinese capsule medicine.", source: "s1" },
    ],
  },
  {
    name: "Turkey Tail",
    sources: {
      s1: { title: "Coriolus versicolor", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/coriolus-versicolor", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Turkey tail is used in food and in tea.", source: "s1" },
    ],
  },
);

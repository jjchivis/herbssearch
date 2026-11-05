import { run } from "./lib/populate-herb";

// African Mango (Irvingia gabonensis), from a 2024 review (abstract only), a 2013
// systematic review of weight-loss trials (Onakpoya et al., abstract only) and a
// 2022 randomized trial (Nonsa-Ard et al.). Family per GBIF.

run({
  name: "African Mango",
  profile: { family: "Irvingiaceae", genus: "Irvingia", species: "gabonensis", nativeRange: "Tropical West and Central Africa", partsUsed: "The fruit, seeds (kernels), bark and leaves" },
  sources: {
    review: {
      title: "Irvingia gabonensis baill. (African Mango): A comprehensive review of its ethnopharmacological significance, unveiling its long-standing history and therapeutic potential",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-02-21",
      doi: "10.1016/j.jep.2024.117942",
      pmid: "38395180",
      url: "https://doi.org/10.1016/j.jep.2024.117942",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    onakpoya: {
      title: "The efficacy of Irvingia gabonensis supplementation in the management of overweight and obesity: a systematic review of randomized controlled trials",
      author: "Onakpoya I, Davies L, Posadzki P, Ernst E",
      journal: "Journal of Dietary Supplements",
      publicationDate: "2013-03-01",
      doi: "10.3109/19390211.2012.760508",
      pmid: "23419021",
      url: "https://doi.org/10.3109/19390211.2012.760508",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    nonsa: {
      title: "Effects of Irvingia gabonensis Extract on Metabolism, Antioxidants, Adipocytokines, Telomere Length, and Aerobic Capacity in Overweight/Obese Individuals",
      author: "Nonsa-Ard R, Aneknan P, Tong-Un T, Honsawek S, Leelayuwat N",
      journal: "Nutrients",
      publicationDate: "2022-11-03",
      doi: "10.3390/nu14214646",
      pmid: "36364907",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9656030/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bush Mango", type: "COMMON_NAME" },
    { name: "Dika Nut", type: "COMMON_NAME" },
    { name: "Ogbono", type: "REGIONAL_NAME", region: "Nigeria" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Fruit, kernels, bark and leaves used across tropical Africa." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The kernels (ogbono) are widely traded and used to thicken traditional soups. The fruit is eaten fresh or made into juice and wine. In folk medicine the seeds are used for weight loss and diabetes, and the bark for dysentery, colic, scabies, toothache and skin problems.",
      source: "review",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 review of 3 trials found all reported weight loss and smaller waists, but the trials were poorly reported, so the effect on weight is unproven and African mango can't be recommended for weight loss.",
      source: "onakpoya",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2022 placebo-controlled trial in overweight adults, 300 mg of kernel extract a day for 12 weeks raised vitamin C and adiponectin (a hormone linked to better metabolism), but didn't change metabolism, inflammation or fitness compared with placebo.",
      source: "nonsa",
    },
  ],
  safety: [
    { category: "ADVERSE_EFFECT", description: "Side effects reported in weight-loss trials included headache and trouble sleeping.", source: "onakpoya" },
  ],
  symptoms: [
    { slug: "menopausal-weight-gain", notes: "Weight-loss trials were poor quality and the effect is unproven. Not tested in menopause." },
  ],
  preparations: [{ slug: "culinary-preparation", notes: "Ground kernels used to thicken soups.", source: "review" }],
});

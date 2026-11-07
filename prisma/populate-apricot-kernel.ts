import { run } from "./lib/populate-herb";

// Apricot kernel (Prunus armeniaca seed) and apricot kernel oil. Sources: EFSA
// (cyanide risk from raw kernels), the NCI PDQ patient summary on laetrile
// (amygdalin), a 2024 rat study and a 2025 lab study of apricot kernel oil.
// Family per GBIF.

run({
  name: "Apricot Kernel",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "armeniaca",
    partsUsed: "The kernel (the seed inside the apricot stone), and the oil pressed from it",
  },
  sources: {
    efsa: {
      title: "Apricot kernels pose risk of cyanide poisoning",
      organization: "European Food Safety Authority (EFSA)",
      publicationDate: "2016-04-27",
      url: "https://www.efsa.europa.eu/en/press/news/160427",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nci: {
      title: "Laetrile/Amygdalin (PDQ) – Patient Version",
      organization: "National Cancer Institute, NIH",
      publicationDate: "2022-06-02",
      url: "https://www.cancer.gov/about-cancer/treatment/cam/patient/laetrile-pdq",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    akaberi: {
      title: "Analgesic effect of apricot kernel oil on neuropathic pain in rats",
      author: "Akaberi M, Forouzanfar F, Rakhshandeh H, Moshirian-Farahi SM",
      journal: "Heliyon",
      publicationDate: "2024-07-20",
      doi: "10.1016/j.heliyon.2024.e34988",
      pmid: "39170485",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11336353/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vaccari: {
      title: "Preparation of a Micronutrient-Enriched Apricot Kernel Oil and Assessment of In Vitro Chemopreventive Properties",
      author: "Vaccari ME, Cavalloro V, Bedeschi M, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-09-22",
      doi: "10.3390/ijms26189237",
      pmid: "41009803",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12470769/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Apricot Kernel Oil", type: "COMMON_NAME" },
    { name: "Apricot Seed", type: "COMMON_NAME" },
    { name: "Laetrile", type: "COMMON_NAME" },
    { name: "Amygdalin", type: "COMMON_NAME" },
    { name: "Vitamin B17", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Laetrile, also called amygdalin or \"vitamin B17\", is a related substance given as a cancer treatment in Mexico and some U.S. clinics. It is not actually a vitamin.",
      source: "nci",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Most raw apricot kernels sold in the EU are imported and sold online, promoted as a cancer-fighting food. Some sellers recommend 10 kernels a day for healthy people and 60 a day for people with cancer.",
      source: "efsa",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No controlled clinical trials of laetrile have been reported, and case reports haven't shown it to be an effective cancer treatment. In a National Cancer Institute study of 175 people with cancer, the cancer had grown in about half of them by the end of treatment, and in all of them 7 months after treatment ended. The FDA has not approved laetrile for cancer or any other condition.",
      source: "nci",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Apricot kernel oil, pressed from the kernels, is mostly fats. In a 2024 rat study, taking it by mouth for 14 days eased nerve pain and lowered signs of inflammation in the spinal cord, about as well as the pain medicine gabapentin.",
      source: "akaberi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 lab study, a purified part of apricot kernel oil from a variety naturally low in amygdalin slowed the growth and spread of colon and liver cancer cells. It hasn't been tested in people.",
      source: "vaccari",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Raw apricot kernels contain amygdalin, which turns into cyanide in the body. Cyanide poisoning can cause nausea, fever, headaches, sleeplessness, thirst, tiredness, nervousness, aches and pains, and low blood pressure, and in extreme cases death.\n\nTechnical detail: EFSA acute reference dose 20 µg/kg body weight; 0.5–3.5 mg cyanide per kg body weight can be lethal.",
      source: "efsa",
    },
    {
      category: "DOSAGE",
      description:
        "Eating more than three small raw apricot kernels, or less than half of one large kernel, at one time can exceed the safe level for adults. For toddlers, even one small kernel is too much. Eating the apricot fruit itself is safe.",
      source: "efsa",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects of laetrile include nausea, vomiting, headache, dizziness, blue skin from lack of oxygen, liver damage, very low blood pressure, nerve damage, fever, confusion, coma and death. They are worse when taken by mouth, and when combined with raw almonds, crushed fruit pits, some fruits and vegetables (such as celery, peaches, bean sprouts and carrots) or high doses of vitamin C.",
      source: "nci",
    },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Raw kernels release cyanide in the body; more than three small kernels can exceed the safe limit for adults." },
  ],
});

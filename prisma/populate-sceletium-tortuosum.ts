import { run } from "./lib/populate-herb";

// Sceletium Tortuosum (kanna), from reviews of Sceletium (Gericke & Viljoen
// 2008; Olatunji et al. 2021), a 3-month safety trial (Nell et al. 2013) and a
// 3-week thinking and memory trial (Chiu et al. 2014) of the extract Zembrin.

run({
  name: "Sceletium Tortuosum",
  profile: {
    family: "Aizoaceae",
    genus: "Sceletium",
    species: "tortuosum",
    nativeRange: "South Africa (found nowhere else)",
    partsUsed: "The above-ground parts, traditionally fermented and dried, then chewed, smoked or made into tinctures; now also as a standardized extract",
  },
  sources: {
    gericke: {
      title: "Sceletium: a review update",
      author: "Gericke N, Viljoen AM",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2008-10-28",
      doi: "10.1016/j.jep.2008.07.043",
      pmid: "18761074",
      url: "https://pubmed.ncbi.nlm.nih.gov/18761074/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    olatunji: {
      title: "Sceletium tortuosum: A review on its phytochemistry, pharmacokinetics, biological, pre-clinical and clinical activities",
      author: "Olatunji TL, Siebert F, Adetunji AE, Harvey BH, Gericke J, Hamman JH, Van der Kooy F",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-11-08",
      doi: "10.1016/j.jep.2021.114711",
      pmid: "34758918",
      url: "https://pubmed.ncbi.nlm.nih.gov/34758918/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nell: {
      title: "A randomized, double-blind, parallel-group, placebo-controlled trial of Extract Sceletium tortuosum (Zembrin) in healthy adults",
      author: "Nell H, Siebert M, Chellan P, Gericke N",
      journal: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2013-02-26",
      doi: "10.1089/acm.2012.0185",
      pmid: "23441963",
      url: "https://pubmed.ncbi.nlm.nih.gov/23441963/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chiu: {
      title: "Proof-of-Concept Randomized Controlled Study of Cognition Effects of the Proprietary Extract Sceletium tortuosum (Zembrin) Targeting Phosphodiesterase-4 in Cognitively Healthy Subjects: Implications for Alzheimer's Dementia",
      author: "Chiu S, Gericke N, Farina-Woodbury M, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2014-10-19",
      doi: "10.1155/2014/682014",
      pmid: "25389443",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4217361/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Kanna", type: "COMMON_NAME" },
    { name: "Kougoed", type: "TRADITIONAL_NAME" },
    { name: "Sceletium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Used for millennia by the San and Khoi peoples of South Africa to ease hunger, thirst and tiredness, and for social and spiritual purposes." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The San and Khoi peoples of southern Africa have probably used sceletium for thousands of years. They chewed it to ease thirst and hunger and fight tiredness, and used it as a medicine and for social and spiritual purposes. Much of this knowledge has been lost over the last three centuries, and wild plants have been heavily over-harvested.",
      source: "gericke",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Traditionally, sceletium is mainly chewed or smoked:\n- To relieve toothache and belly pain\n- To lift mood, ease anxiety and help sleep\n- To curb thirst and hunger\n- For its intoxicating, euphoric effects",
      source: "olatunji",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 3-month safety trial, 37 healthy adults took a sceletium extract (8 mg or 25 mg a day) or a dummy pill. Both doses were well tolerated, with no differences in heart tracings, blood tests or physical exams. Headache and belly pain were more common in the dummy-pill group. Some people taking the extract wrote in their diaries that they coped better with stress and slept better.\n\nTechnical detail: randomized, double-blind, placebo-controlled; extract Zembrin (2:1 standardized); 12, 12 and 13 participants per group.",
      source: "nell",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 3-week trial, 21 healthy adults (average age 55) took 25 mg of sceletium extract a day and a dummy pill, in random order. On the extract, they did better on tests of switching between tasks and planning, and reported better mood and sleep. It was well tolerated. The study was small and short.\n\nTechnical detail: randomized, double-blind, placebo-controlled crossover; cognitive set flexibility p < 0.032 and executive function p < 0.022 vs placebo (CNS Vital Signs battery).",
      source: "chiu",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "In a 3-month safety trial, some people taking the extract wrote that they coped better with stress. Stress wasn't measured directly." },
    { slug: "memory-and-thinking", notes: "In a 3-week trial of 21 healthy adults, the extract improved tests of task-switching and planning compared with a dummy pill." },
  ],
});

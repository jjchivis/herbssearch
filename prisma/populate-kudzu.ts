import { run } from "./lib/populate-herb";

// Kudzu (Pueraria montana var. lobata), root. Sources: a 2026 review describing
// its traditional Chinese uses, and four small human studies on alcohol
// drinking (Lukas 2013, Penetar 2011, Penetar 2015, Keith 2026). Family per GBIF.
// No source covering pregnancy, breastfeeding or medicine interactions was
// used, so none is stated. No alcohol-use topic exists, so no topic is linked.

run({
  name: "Kudzu",
  profile: {
    family: "Fabaceae",
    genus: "Pueraria",
    species: "montana var. lobata",
    partsUsed: "The root",
  },
  sources: {
    zhou: {
      title: "Molecular Mechanisms and Therapeutic Potential of Puerariae Lobatae Radix in Bone Metabolism: A Comprehensive Review",
      author: "Zhou Z, Li Y, Zou S, Wang A, Ni L, Lu J",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2026-08-06",
      doi: "10.2147/DDDT.S620698",
      pmid: "42582789",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13458686/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lukas: {
      title: "A standardized kudzu extract (NPI-031) reduces alcohol consumption in nontreatment-seeking male heavy drinkers",
      author: "Lukas SE, Penetar D, Su Z, et al.",
      journal: "Psychopharmacology",
      publicationDate: "2012-10-16",
      doi: "10.1007/s00213-012-2884-9",
      pmid: "23070022",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3562758/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    penetar2015: {
      title: "A single dose of kudzu extract reduces alcohol consumption in a binge drinking paradigm",
      author: "Penetar DM, Toto LH, Lee DY, Lukas SE",
      journal: "Drug and Alcohol Dependence",
      publicationDate: "2015-05-27",
      doi: "10.1016/j.drugalcdep.2015.05.025",
      pmid: "26048637",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4510012/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    penetar2011: {
      title: "Kudzu extract treatment does not increase the intoxicating effects of acute alcohol in human volunteers",
      author: "Penetar DM, Maclean RR, McNeil JF, Lukas SE",
      journal: "Alcoholism: Clinical and Experimental Research",
      publicationDate: "2011-01-18",
      doi: "10.1111/j.1530-0277.2010.01390.x",
      pmid: "21244439",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3074930/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    keith: {
      title: "Effects of kudzu extract on alcohol consumption among men and women seeking treatment for alcohol use disorder",
      author: "Keith DR, Liu J, Vitaliano G, Lukas SE",
      journal: "Drug and Alcohol Dependence Reports",
      publicationDate: "2026-09-04",
      doi: "10.1016/j.dadr.2026.100473",
      pmid: "42779941",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13597183/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pueraria lobata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Puerariae Lobatae Radix", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "A classic Chinese medicinal herb, traditionally used to relieve fever and thirst, stop diarrhea, help rashes come out and counter the effects of alcohol.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Kudzu root has a long history in China as both a food and a medicine. Traditionally it has been used to:\n- relieve fever\n- ease thirst\n- stop diarrhea\n- help rashes come out\n- counter the effects of alcohol",
      source: "zhou",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2013 study, 17 young men who drank heavily but were not seeking treatment took either a kudzu extract or a placebo every day for 4 weeks. Those on kudzu drank fewer drinks each week, had fewer heavy drinking days and more days without alcohol. It did not reduce their craving for alcohol. There were no side effects and no changes in liver or kidney tests.\n\nTechnical detail: NPI-031, 250 mg isoflavones three times daily; randomized, double-blind, between-subject; weekly drinks fell by 34–57%.",
      source: "lukas",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2015 study, 20 men took a single dose of kudzu extract or a placebo before a 90-minute session where they could drink up to 6 beers. The kudzu group cut down from about 3 beers to about 2 and drank more slowly, while the placebo group drank slightly more.\n\nTechnical detail: single 2 g dose (520 mg isoflavones) 2.5 hours before; kudzu 3.0 to 1.9 beers; placebo 2.7 to 3.4 beers.",
      source: "penetar2015",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2011 study in 12 adults who drank moderately found that taking kudzu extract for 9 days did not make them feel more drunk, or affect their balance or reaction time, when they drank alcohol. Blood alcohol rose slightly faster for 10 to 15 minutes after the larger alcohol dose.\n\nTechnical detail: 750 mg/day isoflavones; double-blind crossover; alcohol challenge 0.35 or 0.7 g/kg.",
      source: "penetar2011",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 trial gave 19 men and women in treatment for alcohol use disorder kudzu extract or a placebo for 8 weeks, along with weekly counseling. Kudzu worked no better than placebo for cutting down heavy drinking days. No safety problems were seen. The authors suggest kudzu may help reduce binge drinking but may not add anything for people already in a good treatment program.\n\nTechnical detail: 750 mg/day isoflavones; heavy drinking days fell 30% with kudzu vs 44% with placebo.",
      source: "keith",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects, and no changes in liver or kidney blood tests, were seen in a 4-week study of kudzu extract in 17 men. The studies so far have been small.",
      source: "lukas",
    },
  ],
});

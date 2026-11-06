import { run } from "./lib/populate-herb";

// Jamun (Syzygium cumini), from a 2012 review of its traditional uses (Ayyanar and
// Subash-Babu), a 2026 meta-analysis of diabetes trials of jamun and related
// myrtle-family plants (Duangchan et al.) and a 2022 leg ulcer trial (Araújo et
// al.). Family per GBIF.

run({
  name: "Jamun",
  profile: { family: "Myrtaceae", genus: "Syzygium", species: "cumini", nativeRange: "South and Southeast Asia", partsUsed: "The fruit, seeds, bark and leaves" },
  sources: {
    ayyanar: {
      title: "Syzygium cumini (L.) Skeels: a review of its phytochemical constituents and traditional uses",
      author: "Ayyanar M, Subash-Babu P",
      journal: "Asian Pacific Journal of Tropical Biomedicine",
      publicationDate: "2012-03-01",
      doi: "10.1016/S2221-1691(12)60050-1",
      pmid: "23569906",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3609276/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    duangchan: {
      title: "Efficacy and Safety of Syzygium cumini and Related Myrtaceae Interventions for Dysglycemia: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Duangchan T, Kuakul K, Saipin C, et al.",
      journal: "Foods",
      publicationDate: "2026-07-01",
      doi: "10.3390/foods15132332",
      pmid: "42450449",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13360929/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    araujo: {
      title: "Randomized, double-blind clinical trial comparing the healing of stasis ulcers in lower limbs with standard hydrocolloid gel dressings and with dressings with Syzygium cumini extract",
      author: "Araújo GR, Teles BSBS, Xoteslem GC, et al.",
      journal: "Phlebology",
      publicationDate: "2022-07-01",
      doi: "10.1177/02683555221088380",
      pmid: "35466808",
      url: "https://doi.org/10.1177/02683555221088380",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Java Plum", type: "COMMON_NAME" },
    { name: "Jambolan", type: "COMMON_NAME" },
    { name: "Black Plum", type: "COMMON_NAME" },
    { name: "Eugenia jambolana", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A tropical tree with dark purple, plum-like fruit. It's one of the most widely used plants for diabetes in traditional medicine, and the seeds are said to slow the breakdown of starch into sugar.",
      source: "ayyanar",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The fruit is used for chronic diarrhea and other gut problems, the bark for sore throat, bronchitis, asthma and dysentery, and juice of the young leaves for diarrhea in children.",
      source: "ayyanar",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 13 trials in people with type 2 diabetes or prediabetes found jamun and related plants lowered fasting blood sugar slightly, about 16 mg/dL in the jamun trials. They didn't clearly improve after-meal sugar or HbA1c, and the evidence was low quality.",
      source: "duangchan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a trial of 90 people with leg ulcers, dressings with jamun extract healed ulcers no better than standard dressings.",
      source: "araujo",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Diabetes trials found no clear harm to the liver or kidneys, but side effects were poorly reported. Jamun shouldn't replace diabetes medicine.",
      source: "duangchan",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Lowered fasting blood sugar slightly in trials; low-quality evidence." },
    { slug: "diarrhea", notes: "The fruit is a traditional remedy for chronic diarrhea. Not well studied in people." },
  ],
});

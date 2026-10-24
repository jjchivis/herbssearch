import { run } from "./lib/populate-herb";

// Guarana (Paullinia cupana), from Memorial Sloan Kettering's About Herbs entry
// and a 2024 meta-analysis on cancer-related fatigue (Maselli-Schoueri et al.).
// Family per GBIF.

run({
  name: "Guarana",
  profile: {
    family: "Sapindaceae",
    genus: "Paullinia",
    species: "cupana",
    partsUsed: "The seeds",
  },
  sources: {
    mskcc: {
      title: "Guarana — About Herbs, Botanicals & Other Products",
      organization: "Memorial Sloan Kettering Cancer Center",
      publicationDate: "2022-05-06",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/guarana",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    maselli: {
      title: "Natural supplementation to effectively treat cancer-induced fatigue: evidence of a meta-analysis on the use of guaraná",
      author: "Maselli-Schoueri JH, Aguiar Junior PN, Del Giglio A",
      journal: "Revista da Associação Médica Brasileira",
      publicationDate: "2024-11-11",
      doi: "10.1590/1806-9282.20240528",
      pmid: "39536249",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11554322/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Brazilian Cocoa", type: "COMMON_NAME" }],
  constituents: [{ name: "Caffeine", slug: "caffeine", type: "alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Guarana seeds have traditionally been used for fevers, headaches and dysentery. Today guarana is promoted to boost energy, ease tiredness and reduce hunger.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Guarana seeds contain caffeine and related chemicals, and many of its effects are put down to caffeine. Lab studies suggest antioxidant and nerve-protecting effects, and that it can make blood platelets less sticky.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small studies suggest guarana might help tiredness caused by chemotherapy, but it didn't help tiredness after radiation or in people with head and neck cancer, and one earlier review found it worked no better than a placebo for cancer-related tiredness.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review of 5 studies with 229 people with cancer found guarana reduced cancer-related tiredness, but results varied a lot between studies. The authors say larger trials are needed.\n\nTechnical detail: SMD −0.77 (95% CI −1.34 to −0.21); I² = 78%.",
      source: "maselli",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Guarana can cause nausea and trouble sleeping. High amounts can cause vomiting, heartbeat changes, high blood pressure and seizures. Fast heartbeat and seizures have been reported with guarana supplements and energy drinks.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Guarana may raise bleeding risk with blood thinners such as warfarin. Taking it with other stimulants may not be safe. Talk with a health care provider first.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "fatigue", notes: "A 2024 review found it reduced cancer-related tiredness, but studies disagreed." },
  ],
  preparations: [
    { slug: "capsule", notes: "Sold as tablets and capsules.", source: "mskcc" },
    { slug: "powder", notes: "Also sold as a powder.", source: "mskcc" },
  ],
});

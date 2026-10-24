import { run } from "./lib/populate-herb";

// Coffee (Coffea), from the FDA's caffeine guidance (2024), the IARC (WHO)
// evaluation of coffee drinking (2016) and an umbrella review of coffee and
// health (Poole et al. 2017). Family per GBIF.

run({
  name: "Coffee",
  profile: {
    family: "Rubiaceae",
    genus: "Coffea",
    species: "arabica",
    partsUsed: "The roasted seeds (beans), brewed as a drink",
  },
  sources: {
    fda: {
      title: "Spilling the Beans: How Much Caffeine Is Too Much?",
      organization: "U.S. Food and Drug Administration",
      publicationDate: "2024-08-28",
      url: "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    iarc: {
      title: "IARC Monographs evaluate drinking coffee, maté, and very hot beverages (Press release No. 244)",
      organization: "International Agency for Research on Cancer (World Health Organization)",
      publicationDate: "2016-06-15",
      url: "https://www.iarc.who.int/wp-content/uploads/2018/07/pr244_E.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    poole: {
      title: "Coffee consumption and health: umbrella review of meta-analyses of multiple health outcomes",
      author: "Poole R, Kennedy OJ, Roderick P, Fallowfield JA, Hayes PC, Parkes J",
      journal: "BMJ",
      publicationDate: "2017-11-22",
      doi: "10.1136/bmj.j5024",
      pmid: "29167102",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5696634/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Arabica Coffee", type: "COMMON_NAME" }],
  constituents: [{ name: "Caffeine", slug: "caffeine", type: "alkaloid" }],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 review of more than 200 meta-analyses, mostly of observational studies, found coffee drinking was more often linked to benefit than harm. The biggest drop in risk was at 3 to 4 cups a day, including lower risk of death from any cause and of heart disease, and lower risk of some cancers and of liver, nerve and metabolic conditions. These studies show links, not proof that coffee causes the benefits.\n\nTechnical detail: 3–4 cups/day vs none — all-cause mortality RR 0.83 (95% CI 0.79 to 0.88); cardiovascular disease RR 0.85 (95% CI 0.80 to 0.90).",
      source: "poole",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "After reviewing more than 1,000 studies, the World Health Organization's cancer agency found no conclusive evidence that drinking coffee causes cancer. Studies showed lower risk of liver cancer and cancer of the womb lining, and no link with cancers of the pancreas, breast or prostate.",
      source: "iarc",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "The FDA says about 400 mg of caffeine a day, roughly two to three 12-ounce cups of brewed coffee, is not generally linked to harmful effects in healthy adults. People vary a lot in how sensitive they are to caffeine.",
      source: "fda",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Too much caffeine can cause a racing heartbeat, higher blood pressure, trouble sleeping, nervousness, shakiness, upset stomach, nausea and headaches. Some medical conditions and medicines can make you more sensitive to caffeine.",
      source: "fda",
    },
    {
      category: "PREGNANCY",
      description:
        "In pregnancy, drinking more coffee was linked to low birth weight, preterm birth and pregnancy loss.",
      source: "poole",
    },
    {
      category: "PREGNANCY",
      description: "If you're pregnant or trying to become pregnant, ask your health care provider whether to limit caffeine.",
      source: "fda",
    },
    {
      category: "BREASTFEEDING",
      description: "If you're breastfeeding, ask your health care provider whether to limit caffeine.",
      source: "fda",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Drinking more coffee was linked to a higher risk of bone fractures in women, but not in men.",
      source: "poole",
    },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "The roasted beans are brewed into a drink.", source: "fda" },
  ],
});

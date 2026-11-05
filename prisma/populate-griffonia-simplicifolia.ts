import { run } from "./lib/populate-herb";

// Griffonia simplicifolia, from a 2026 osteosarcoma cell study describing the
// plant (Bellavia et al.), a 2026 randomized pain trial (Schlemmer et al.) and a
// 2005 review of 5-HTP for depression and its safety (Turner et al., abstract
// only). Family per GBIF.

run({
  name: "Griffonia Simplicifolia",
  profile: { family: "Fabaceae", genus: "Griffonia", species: "simplicifolia", nativeRange: "West Africa", partsUsed: "The seeds" },
  sources: {
    bellavia: {
      title: "Antimetastatic Effects of a Griffonia simplicifolia Seed Extract in Osteosarcoma Cell Lines",
      author: "Bellavia D, Naselli F, Serio G, et al.",
      journal: "Antioxidants",
      publicationDate: "2026-02-19",
      doi: "10.3390/antiox15020263",
      pmid: "41750643",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12938304/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    schlemmer: {
      title: "The Effect of Griffonia simplicifolia on Pain Intensity, Central and Peripheral Sensitization, and Pain Modulation in Healthy Volunteers-A Randomized, Double-Blinded, Placebo-Controlled Crossover Trial",
      author: "Schlemmer AJ, Hammer S, Fandler-Höfler S, Lang-Illievich K, Bornemann-Cimenti H",
      journal: "Nutrients",
      publicationDate: "2026-05-19",
      doi: "10.3390/nu18101609",
      pmid: "42197069",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13209743/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    turner: {
      title: "Serotonin a la carte: supplementation with the serotonin precursor 5-hydroxytryptophan",
      author: "Turner EH, Loftis JM, Blackwell AD",
      journal: "Pharmacology & Therapeutics",
      publicationDate: "2005-07-14",
      doi: "10.1016/j.pharmthera.2005.06.004",
      pmid: "16023217",
      url: "https://doi.org/10.1016/j.pharmthera.2005.06.004",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Griffonia", type: "COMMON_NAME" }],
  constituents: [{ name: "5-Hydroxytryptophan (5-HTP)", slug: "5-htp", type: "amino acid" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "A West African plant used in traditional medicine." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Griffonia is a West African plant used in traditional medicine. Its seeds are up to 20% 5-HTP, the compound the body turns into serotonin, and they're the main source of 5-HTP supplements.",
      source: "bellavia",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Griffonia is sold for low mood and sleep. Studies suggest 5-HTP may help depression, but the evidence is limited by small, varied trials.",
      source: "schlemmer",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2026 placebo-controlled trial, 17 healthy volunteers took 100 mg of griffonia a day for 4 weeks. It didn't reduce pain in experimental pain tests.",
      source: "schlemmer",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "5-HTP raises serotonin, so the main safety concerns reviewed are serotonin syndrome, a dangerous excess of serotonin, and eosinophilia-myalgia syndrome, a serious blood and muscle disorder linked to contaminated supplements.",
      source: "turner",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In the 2026 trial, 2 of 17 people had mild, short-lived side effects; none were serious.",
      source: "schlemmer",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "Sold for low mood; studies of its compound 5-HTP for depression are small and limited." },
    { slug: "occasional-sleeplessness", notes: "Marketed as a sleep aid; not well studied for sleep." },
  ],
});

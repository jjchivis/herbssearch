import { run } from "./lib/populate-herb";

// Lippia javanica (fever tea), from a 2025 review of South African tick
// remedies (Makwarela et al.) and a 2022 rat study of its tea (Suleman et al.).
// Family per GBIF.

run({
  name: "Lippia Javanica",
  profile: {
    family: "Verbenaceae",
    genus: "Lippia",
    species: "javanica",
    nativeRange: "Southern and eastern Africa",
    partsUsed: "The leaves, usually as a tea",
  },
  sources: {
    makwarela: {
      title: "Plants Used for Tick and Tick-Borne Disease Control in South Africa: Ethnoveterinary Knowledge, Bioactivity Evidence, and Translation Pathways",
      author: "Makwarela TG, Seoraj-Pillai N, Malatji DP, Nangammbi TC",
      journal: "Plants",
      publicationDate: "2025-12-05",
      doi: "10.3390/plants14243720",
      pmid: "41470604",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12737041/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    suleman: {
      title: "Neuroprotective effects of Lippia javanica (Burm.F.) Spreng. Herbal tea infusion on Lead-induced oxidative brain damage in Wistar rats",
      author: "Suleman Z, Engwa GA, Shauli M, Musarurwa HT, Katuruza NA, Sewani-Rusike CR",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2022-01-04",
      doi: "10.1186/s12906-021-03471-3",
      pmid: "34983490",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8725456/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Fever Tea", type: "COMMON_NAME" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Used in South Africa to repel ticks from livestock." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Communities in South Africa use Lippia javanica to repel or kill ticks on livestock. In a community-led field trial, a leaf spray substantially reduced ticks, though slightly less than the chemical amitraz.",
      source: "makwarela",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given lead, drinking Lippia javanica tea for 6 weeks protected the brain from damage: it raised antioxidant levels and reduced inflammation and cell death. The tea alone caused no harm.\n\nTechnical detail: 5 mL/kg infusion; increased glutathione and superoxide dismutase; reduced TNF-α, Bax and acetylcholinesterase activity.",
      source: "suleman",
    },
  ],
});

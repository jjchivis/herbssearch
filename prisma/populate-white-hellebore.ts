import { run } from "./lib/populate-herb";

// White Hellebore (Veratrum album), from a 2025 review of plant poisonings at a
// Bulgarian hospital (Stoeva-Grigorova et al.) and a 2018 report of Veratrum
// poisoning (Anwar et al.). Family per GBIF.

run({
  name: "White Hellebore",
  profile: {
    family: "Melanthiaceae",
    genus: "Veratrum",
    species: "album",
    nativeRange: "The mountains of Europe and northern Asia",
    partsUsed: "The root (poisonous)",
  },
  sources: {
    stoeva: { title: "A 20-Year Retrospective Analysis of Plant Poisoning Cases at the Naval Hospital, Varna, Bulgaria", author: "Stoeva-Grigorova S, Radeva-Ilieva M, Dragomanova S, et al.", journal: "Toxins", publicationDate: "2025-04-12", doi: "10.3390/toxins17040197", pmid: "40278695", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12031007/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    anwar: {
      title: "Hikers poisoned: Veratrum steroidal alkaloid toxicity following ingestion of foraged Veratrum parviflorum",
      author: "Anwar M, Turner M, Farrell N, Zomlefer WB, McDougal OM, Morgan BW",
      journal: "Clinical Toxicology",
      publicationDate: "2018-02-28",
      doi: "10.1080/15563650.2018.1442007",
      pmid: "29490507",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6086754/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "False Helleborine", type: "COMMON_NAME" }, { name: "European White Hellebore", type: "COMMON_NAME" }],
  constituents: [{ name: "Veratrum Steroidal Alkaloids", slug: "veratrum-steroidal-alkaloids", type: "steroidal alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Bulgaria, a white hellebore decoction has been prepared to treat hair loss.",
      source: "stoeva",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "White hellebore is poisonous. Four people in Bulgaria who drank a hair-loss decoction by mistake developed dizziness, nausea, vomiting, low blood pressure, a very slow heartbeat and serious heart rhythm problems. Its toxins act on the heart's sodium channels; with hospital treatment, deaths are rare.",
      source: "stoeva",
    },
    {
      category: "TOXICITY",
      description:
        "Veratrum alkaloids cause vomiting followed by slow breathing, low blood pressure and a slow heartbeat. Most reported poisonings involve white hellebore. Some of these alkaloids also cause severe birth defects.",
      source: "anwar",
    },
  ],
});

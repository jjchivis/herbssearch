import { run } from "./lib/populate-herb";

// Eaglewood, agarwood (Aquilaria agallocha, syn. A. malaccensis), from a 2025
// review (Baig et al.) and a 2024 study of agarwood and anxiety (Pang et al.).
// No human trials were found. Family per GBIF.

run({
  name: "Eaglewood",
  profile: {
    family: "Thymelaeaceae",
    genus: "Aquilaria",
    species: "malaccensis",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The dark, fragrant resin-filled heartwood (agarwood)",
  },
  sources: {
    baig: {
      title: "Agarwood in the Modern Era: Integrating Biotechnology and Pharmacology for Sustainable Use",
      author: "Baig A, Akram A, Lin MK",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-08-30",
      doi: "10.3390/ijms26178468",
      pmid: "40943390",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12428735/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pang: {
      title: "Solid-Phase Microextraction/Gas Chromatography-Time-of-Flight Mass Spectrometry Approach Combined with Network Pharmacology Analysis to Evaluate the Quality of Agarwood from Different Regions against Anxiety Disorder",
      author: "Pang Y, Yu W, Liang W, et al.",
      journal: "Molecules",
      publicationDate: "2024-01-17",
      doi: "10.3390/molecules29020468",
      pmid: "38257381",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10818993/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Agarwood", type: "COMMON_NAME" },
    { name: "Oud", type: "COMMON_NAME" },
    { name: "Aquilaria agallocha", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Agarwood is a dark, fragrant resin that forms in the wood of Aquilaria trees after injury or infection. Known as agar in South Asia, oud in Arabic and jinkoh in Japanese, it has long been used in incense, perfume and traditional medicine.",
      source: "baig",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Agarwood contains compounds that in lab studies acted against microbes, inflammation and cancer cells, and had calming effects. Overharvesting and illegal trade threaten wild trees, so it is increasingly grown on plantations.",
      source: "baig",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 chemical study found agarwood from Brunei and Vietnam is rich in sesquiterpenes linked to easing anxiety, while agarwood from Malaysia and Indonesia is richer in fragrance compounds. The anxiety link was predicted by computer, not tested in people.",
      source: "pang",
    },
  ],
});

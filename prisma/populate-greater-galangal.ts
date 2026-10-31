import { run } from "./lib/populate-herb";

// Greater Galangal (Alpinia galanga), from a 2026 review of ginger-family
// plants (Kuzia et al.) and a 2023 randomized trial for SSRI-related erectile
// dysfunction (Akbarzadeh et al.). Family per GBIF.

run({
  name: "Greater Galangal",
  profile: {
    family: "Zingiberaceae",
    genus: "Alpinia",
    species: "galanga",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The rhizome",
  },
  sources: {
    kuzia: {
      title: "Antidiabetic and Anti-Inflammatory Potential of Zingiberaceae Plants in Dietary Supplement Interventions",
      author: "Kuzia N, Adamska O, Ksepka N, Wierzbicka A, Jóźwik A",
      journal: "Molecules",
      publicationDate: "2026-01-16",
      doi: "10.3390/molecules31020311",
      pmid: "41599361",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12844493/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akbarzadeh: {
      title: "Assessing the effect of Alpinia galanga extract on the treatment of SSRI-induced erectile dysfunction: A randomized triple-blind clinical trial",
      author: "Akbarzadeh F, Eslamzadeh M, Behravan G, et al.",
      journal: "Frontiers in Psychiatry",
      publicationDate: "2023-04-18",
      doi: "10.3389/fpsyt.2023.1105828",
      pmid: "37143784",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10151528/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Galangal", type: "COMMON_NAME" }],
  traditions: [
    { slug: "ayurveda", notes: "Used as a medicinal herb." },
    { slug: "traditional-chinese-medicine", notes: "Used as a medicinal herb." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Greater galangal, a member of the ginger family, is widely used as a cooking spice and as a medicine in Ayurveda, traditional Chinese medicine and Thai folk medicine.",
      source: "kuzia",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies suggest it may help lower blood sugar and calm inflammation, but human studies are scarce.",
      source: "kuzia",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 4-week triple-blind trial of 60 men taking SSRI antidepressants, a 500 mg galangal extract improved erectile function much more than a placebo.",
      source: "akbarzadeh",
    },
  ],
});

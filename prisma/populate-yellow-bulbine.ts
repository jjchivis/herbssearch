import { run } from "./lib/populate-herb";

// Yellow Bulbine (Bulbine frutescens), from pig wound studies (Pather et al.
// 2011, 2012), a 2025 review of Bulbine wound healing (Voko et al.), a 2023 lab
// diabetes study (Oyedemi et al.) and a 2021 study of Bulbine supplements (Avula et
// al.). Family per GBIF.

run({
  name: "Yellow Bulbine",
  profile: { family: "Asphodelaceae", genus: "Bulbine", species: "frutescens", nativeRange: "Southern Africa", partsUsed: "The leaf gel, and also stems and roots" },
  sources: {
    pather2011: {
      title: "A biochemical comparison of the in vivo effects of Bulbine frutescens and Bulbine natalensis on cutaneous wound healing",
      author: "Pather N, Viljoen AM, Kramer B",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2011-01-27",
      doi: "10.1016/j.jep.2010.10.007",
      pmid: "20937372",
      url: "https://doi.org/10.1016/j.jep.2010.10.007",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pather2012: {
      title: "Bulbine natalensis and Bulbine frutescens promote cutaneous wound healing",
      author: "Pather N, Kramer B",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2012-12-18",
      doi: "10.1016/j.jep.2012.09.034",
      pmid: "23078885",
      url: "https://doi.org/10.1016/j.jep.2012.09.034",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    voko: {
      title: "The Phytochemical Composition and Molecular Mechanisms Involved in the Wound Healing Attributes of Bulbine Species-A Critical Review",
      author: "Voko MP, Ogbe AA, Kulkarni MG, Coopoosamy RM, Van Staden J",
      journal: "Plants",
      publicationDate: "2025-10-01",
      doi: "10.3390/plants14193045",
      pmid: "41095187",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12526425/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    oyedemi: {
      title: "In vitro profiling and functional assessments of the anti-diabetic capacity of phenolic-rich extracts of Bulbine natalensis and Bulbine frutescens",
      author: "Oyedemi SO, Atanes P, Aiyegoro OA, et al.",
      journal: "Diabetic Medicine",
      publicationDate: "2021-12-29",
      doi: "10.1111/dme.14770",
      pmid: "34919745",
      url: "https://doi.org/10.1111/dme.14770",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    avula: {
      title: "Chemical Profiling and Characterization of Anthraquinones from Two Bulbine Species and Dietary Supplements Using Liquid Chromatography-High Resolution Mass Spectrometry",
      author: "Avula B, Bae JY, Wang YH, Wang M, Ali Z, Khan IA",
      journal: "Journal of AOAC International",
      publicationDate: "2021-09-27",
      doi: "10.1093/jaoacint/qsab075",
      pmid: "34043766",
      url: "https://doi.org/10.1093/jaoacint/qsab075",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bulbine", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A succulent found only in southern Africa. Like aloe, its leaves hold a gel that's widely used in South Africa on skin wounds and burns.",
      source: "pather2011",
    },
    {
      category: "TRADITIONAL",
      summary: "It's also used as an aphrodisiac, and in South African traditional medicine for diabetes.",
      source: "avula",
    },
    {
      category: "PRECLINICAL",
      summary: "In pigs, wounds treated with the leaf gel closed faster and healed stronger, with more collagen laid down.",
      source: "pather2012",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, extracts blocked starch- and sugar-digesting enzymes and boosted insulin release from mouse pancreas cells.",
      source: "oyedemi",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found. It contains anthraquinones, compounds also found in aloe.",
      source: "avula",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "The leaf gel is a South African remedy for wounds and burns; sped healing in pigs. Not tested in people." },
  ],
});

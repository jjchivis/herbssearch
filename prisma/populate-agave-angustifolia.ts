import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Agave Angustifolia",
  profile: {
    family: "Asparagaceae",
    genus: "Agave",
    species: "angustifolia",
    partsUsed: "The leaves and core",
  },
  sources: {
    jimenez: {
      title: "Fatty-Acid-Rich Agave angustifolia Fraction Shows Antiarthritic and Immunomodulatory Effect",
      author: "Jiménez-Ferrer E, Vargas-Villa G, Martínez-Hernández GB, et al.",
      journal: "Molecules",
      publicationDate: "2022-10-24",
      pmid: "36364031",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/molecules27217204",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9657279/",
    },
    ojeda: {
      title: "Micropropagation of Agave angustifolia \"Espadín\" Used in the Production of Mezcal",
      author: "Ojeda G, Rescalvo-Morales A, Maribel Monja-Mio K, et al.",
      journal: "Methods in Molecular Biology",
      publicationDate: "2024-01-01",
      pmid: "38985268",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1007/978-1-0716-3954-2_10",
      url: "https://doi.org/10.1007/978-1-0716-3954-2_10",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Espadín", type: "COMMON_NAME" }],
  evidence: [
    { category: "TRADITIONAL", summary: "Widely used in Mexico in sweet foods and fermented drinks, and in traditional medicine for wound pain, rheumatism and psoriasis. The variety \"espadín\" is the base for making mezcal.", source: "jimenez" },
    { category: "PRECLINICAL", summary: "In mice, extracts reduced swelling and arthritis-like inflammation.", source: "jimenez" },
    { category: "PRECLINICAL", summary: "In a lab model of the human gut, fiber (fructans) from this agave increased helpful bifidobacteria and strengthened the gut lining, which may matter for colon health.", source: "bajpai" },
  ],
});

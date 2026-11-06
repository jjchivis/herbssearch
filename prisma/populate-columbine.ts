import { run } from "./lib/populate-herb";

// Columbine (Aquilegia vulgaris), from historical folk-medicine reviews from Romania
// (Petran et al. 2020) and Serbia (Živković et al. 2026) and rat studies of its liver
// effects (Jodynis-Liebert et al. 2009). Very little research exists. Family per
// GBIF.

run({
  name: "Columbine",
  profile: { family: "Ranunculaceae", genus: "Aquilegia", species: "vulgaris", nativeRange: "Europe", partsUsed: "The aerial parts" },
  sources: {
    petran: {
      title: "Historical ethnobotanical review of medicinal plants used to treat children diseases in Romania (1860s-1970s)",
      author: "Petran M, Dragos D, Gilca M",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2020-03-24",
      doi: "10.1186/s13002-020-00364-6",
      pmid: "32204715",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7092505/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zivkovic: {
      title: "Herbal Remedies for Skin Diseases in Serbian Folk Medicine: A Review of 19th- and 20th-Century Practices",
      author: "Živković J, Šavikin K, Aligiannis N, et al.",
      journal: "Plants",
      publicationDate: "2026-04-17",
      doi: "10.3390/plants15081246",
      pmid: "42075448",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13119818/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jodynis: {
      title: "Aquilegia vulgaris extract attenuates carbon tetrachloride-induced liver fibrosis in rats",
      author: "Jodynis-Liebert J, Adamska T, Ewertowska M, Bylka W, Matławska I",
      journal: "Experimental and Toxicologic Pathology",
      publicationDate: "2009-09-01",
      doi: "10.1016/j.etp.2008.10.007",
      pmid: "19059770",
      url: "https://doi.org/10.1016/j.etp.2008.10.007",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "European Columbine", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A garden flower with nodding, spurred blooms. In Romanian folk medicine its aerial parts were applied externally for whooping cough in children.",
      source: "petran",
    },
    {
      category: "TRADITIONAL",
      summary: "In Serbian folk medicine it was applied to the skin for scabies.",
      source: "zivkovic",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with chemical liver damage, an extract reduced scarring (fibrosis) and liver enzyme rises, nearly as well as milk thistle's silymarin.",
      source: "jodynis",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Its traditional uses were external. No human medical or safety studies were found.",
      source: "petran",
    },
  ],
  symptoms: [
    { slug: "lice-and-scabies", notes: "Applied to the skin for scabies in Serbian folk medicine. Not tested in people." },
  ],
});

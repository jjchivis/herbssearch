import { run } from "./lib/populate-herb";

// Yerba santa (Eriodictyon californicum), from verified sources: a chemical
// analysis of Eriodictyon species (Wang et al. 2023) and a study of cultivated
// California yerba santa (Shock et al. 2026). Family per Guilliams &
// Hasenstab-Lehman 2023 (Namaceae). No studies in people, and no source covering
// safety, were found, so none is stated.

run({
  name: "Yerba Santa",
  profile: {
    family: "Namaceae",
    genus: "Eriodictyon",
    species: "californicum",
    nativeRange: "Native to the southwestern United States and northern Mexico",
    partsUsed: "The leaves",
  },
  sources: {
    wang: {
      title: "Chemical characterization and quantitative determination of flavonoids and phenolic acids in yerba santa (Eriodictyon spp.) using UHPLC/DAD/Q-ToF",
      author: "Wang M, Zhao J, Avula B, Lee J, Upton R, Khan IA",
      journal: "Journal of Pharmaceutical and Biomedical Analysis",
      organization: "Journal of Pharmaceutical and Biomedical Analysis",
      publicationDate: "2023-07-10",
      doi: "10.1016/j.jpba.2023.115570",
      pmid: "37473504",
      url: "https://pubmed.ncbi.nlm.nih.gov/37473504/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shock: {
      title: "Chemical Composition of Eriodictyon californicum (California Yerba Santa) Cultivated in Ontario, Oregon, USA",
      author: "Shock CC, Poudel A, Satyal P, Zhao J, Lee J, Wang M, Setzer WN",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2026-04-21",
      doi: "10.3390/molecules31081356",
      pmid: "42076034",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118867/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "California Yerba Santa", type: "COMMON_NAME" },
    { name: "Eriodictyon", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used by Indigenous peoples for centuries for various ailments, especially breathing problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Yerba santa species have been used by Indigenous peoples for centuries to treat various ailments, especially breathing problems. Despite this long history, many species have never been fully studied.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Chemical studies found yerba santa leaves contain an essential oil (including 1,8-cineole, also found in eucalyptus) and plant compounds such as eriodictyol, sterubin and rosmarinic acid. Their effects in people haven't been tested.",
      source: "shock",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used by Indigenous peoples for breathing problems. It hasn't been studied in people." },
  ],
});

import { run } from "./lib/populate-herb";

// Balsam Fir (Abies balsamea), from a 2022 study of its needles and oil
// against ticks (Adamo et al.). No medicinal or safety studies were found.
// Traditional uses also from the Native American Ethnobotany
// Database. Family per GBIF.

run({
  name: "Balsam Fir",
  profile: {
    family: "Pinaceae",
    genus: "Abies",
    species: "balsamea",
    nativeRange: "Eastern and central Canada and the northeastern United States",
    partsUsed: "The needles and resin",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Abies balsamea",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Abies+balsamea",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    adamo: {
      title: "Balsam fir (Abies balsamea) needles and their essential oil kill overwintering ticks (Ixodes scapularis) at cold temperatures",
      author: "Adamo SA, El Nabbout A, Ferguson LV, Zbarsky JS, Faraone N",
      journal: "Scientific Reports",
      publicationDate: "2022-07-29",
      doi: "10.1038/s41598-022-15164-z",
      pmid: "35906288",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9338056/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Beta-Pinene", slug: "beta-pinene", type: "monoterpene" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Abnaki, Algonquin, Chippewa, Cree, Iroquois and other peoples." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Northeastern peoples used balsam fir gum (resin) on sores, cuts, insect bites, boils and itching, and the Abnaki used it as an antiseptic. The Abnaki also stuffed the needles into pillows for good health.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Woodlands Cree drank a bark tea for colds, coughs and tuberculosis, and the Iroquois used it for coughs, colds and rheumatism. The Chippewa inhaled fumes of the melted gum for headache and used steam from the root for sore joints.",
      source: "naeb",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Balsam fir needles and their essential oil killed blacklegged ticks, which spread Lyme disease, during winter. The oil worked within days at cold temperatures, and one of its main compounds, beta-pinene, also killed ticks.",
      source: "adamo",
    },
  ],
});

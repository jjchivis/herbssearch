import { run } from "./lib/populate-herb";

// Silver Thistle (Carlina acaulis), from a 2019 review of its historical and
// traditional medical uses (Strzemski et al.) and a 2020 study of the toxicity of
// its root compound carlina oxide (Wnorowski et al.). Family per GBIF.

run({
  name: "Silver Thistle",
  profile: { family: "Asteraceae", genus: "Carlina", species: "acaulis", nativeRange: "Central and southern Europe", partsUsed: "The root" },
  sources: {
    strzemski: {
      title: "Historical and traditional medical applications of Carlina acaulis L. - A critical ethnopharmacological review",
      author: "Strzemski M, Wójciak-Kosior M, Sowa I, Załuski D, Verpoorte R",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2019-07-15",
      doi: "10.1016/j.jep.2019.111842",
      pmid: "30948315",
      url: "https://doi.org/10.1016/j.jep.2019.111842",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wnorowski: {
      title: "Toxicity of Carlina Oxide-A Natural Polyacetylene from the Carlina acaulis Roots-In Vitro and In Vivo Study",
      author: "Wnorowski A, Wnorowska S, Wojas-Krawczyk K, et al.",
      journal: "Toxins",
      publicationDate: "2020-04-09",
      doi: "10.3390/toxins12040239",
      pmid: "32283677",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7232248/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Stemless Carline Thistle", type: "COMMON_NAME" },
    { name: "Carline Thistle", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A stemless thistle with a large silvery flower that sits flat on the ground. Its root was described by ancient Greek and Roman physicians and was an official medicine in Germany and Poland until the 1800s, used for skin diseases, to cause sweating, to increase urine and to expel worms.",
      source: "strzemski",
    },
    {
      category: "TRADITIONAL",
      summary: "The root is still used in folk medicine in rural parts of the Balkans.",
      source: "strzemski",
    },
    {
      category: "PRECLINICAL",
      summary: "Modern research on the root is very limited, mostly lab studies.",
      source: "strzemski",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Carlina oxide, the main compound in the root's oil, killed both normal and cancer skin cells in lab tests and was highly toxic to zebrafish. Researchers say root extracts for medicine should have it removed.",
      source: "wnorowski",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Gentiana Nitida, now Gentianella nitida ("hercampuri"), from a 2013 survey
// of a Lima market (Bussmann et al.) and a 2001 chemistry study (Kawahara et
// al.). No pharmacology, human or safety studies were found. Family per GBIF.

run({
  name: "Gentiana Nitida",
  profile: {
    family: "Gentianaceae",
    genus: "Gentianella",
    species: "nitida",
    nativeRange: "The Andes of Peru",
    partsUsed: "The whole plant, dried and ground",
  },
  sources: {
    bussmann: { title: "Peril in the market-classification and dosage of species used as anti-diabetics in Lima, Peru", author: "Bussmann RW, Paniagua-Zambrana N, Chamorro MR, et al.", journal: "Journal of Ethnobiology and Ethnomedicine", publicationDate: "2013-05-30", doi: "10.1186/1746-4269-9-37", pmid: "23718140", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3738155/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    kawahara: {
      title: "A new secoiridoid glucoside, amaronitidin, from the Peruvian folk medicine \"Hercampuri\" (Gentianella nitida)",
      author: "Kawahara N, Masuda K, Sekita S, Satake M",
      journal: "Chemical & Pharmaceutical Bulletin",
      publicationDate: "2001-06-01",
      doi: "10.1248/cpb.49.771",
      pmid: "11411536",
      url: "https://pubmed.ncbi.nlm.nih.gov/11411536/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hercampuri", type: "REGIONAL_NAME", region: "Peru" },
    { name: "Gentianella nitida", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [{ name: "Amaronitidin", slug: "amaronitidin", type: "secoiridoid glucoside" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Peru, several gentian species are sold as \"hercampuri\". At a Lima market, this was the species most often sold under that name, as a remedy for diabetes. Different species are sold under the same name, and neither collectors nor sellers reliably tell them apart.",
      source: "bussmann",
    },
    {
      category: "PRECLINICAL",
      summary: "Chemists have found bitter compounds called secoiridoid glucosides in it, including a new one named amaronitidin.",
      source: "kawahara",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Hercampuri sold in Peruvian markets may be any of several gentian species, and none of them has been tested for safety or a safe dose.",
      source: "bussmann",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Red Jurema, jurema-vermelha (Mimosa ophthalmocentra), from a 1999 study of
// the root's alkaloids (Batista et al.) and a 2021 review of the Mimosa genus
// (Majeed et al.; its table lists the bark use without a citation). No
// pharmacology or safety studies of this species were found. Family per GBIF.

run({
  name: "Red Jurema",
  profile: {
    family: "Fabaceae",
    genus: "Mimosa",
    species: "ophthalmocentra",
    nativeRange: "The Caatinga dry forests of northeastern Brazil",
    partsUsed: "The bark and roots",
  },
  sources: {
    batista: {
      title: "Isolation and Identification of Putative Hallucinogenic Constituents from the Roots of Mimosa ophthalmocentra",
      author: "Batista LM, Almeida RN, da-Cunha EVL, da-Silva MS, Barbosa-Filho JM",
      journal: "Pharmaceutical Biology",
      publicationDate: "1999-01-01",
      doi: "10.1076/phbi.37.1.50.6312",
      url: "https://doi.org/10.1076/phbi.37.1.50.6312",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    majeed: {
      title: "A Comprehensive Review of the Ethnotraditional Uses and Biological and Pharmacological Potential of the Genus Mimosa",
      author: "Majeed I, Rizwan K, Ashar A, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2021-07-12",
      doi: "10.3390/ijms22147463",
      pmid: "34299082",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8307580/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jurema-Vermelha", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Jurema", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  constituents: [
    { name: "N,N-Dimethyltryptamine (DMT)", slug: "dmt", type: "tryptamine alkaloid" },
    { name: "Hordenine", slug: "hordenine", type: "alkaloid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Brazil, the bark is used for bronchitis and coughs.",
      source: "majeed",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Several Indigenous peoples of northeastern Brazil have used the plant to make a strong hallucinogenic drink for religious ceremonies.",
      source: "batista",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The roots contain DMT, a powerful hallucinogen, along with two related compounds, N-methyltryptamine and hordenine. The authors say this fits its ceremonial use.",
      source: "batista",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The roots contain DMT, a powerful hallucinogen. No studies of its safety as a remedy were found.",
      source: "batista",
    },
  ],
});

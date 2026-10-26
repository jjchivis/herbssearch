import { run } from "./lib/populate-herb";

// Gentianella alborosea ("hercampuri"), from a 2013 Lima market survey that
// summarizes earlier Peruvian sources (Bussmann et al.), a 2006 lab study
// (Acero et al.) and a 2000 chemistry study (Kawahara et al.). Family per GBIF.

run({
  name: "Gentianella Alborosea",
  profile: {
    family: "Gentianaceae",
    genus: "Gentianella",
    species: "alborosea",
    nativeRange: "The Andes of Peru",
    partsUsed: "The whole plant",
  },
  sources: {
    bussmann: { title: "Peril in the market-classification and dosage of species used as anti-diabetics in Lima, Peru", author: "Bussmann RW, Paniagua-Zambrana N, Chamorro MR, et al.", journal: "Journal of Ethnobiology and Ethnomedicine", publicationDate: "2013-05-30", doi: "10.1186/1746-4269-9-37", pmid: "23718140", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3738155/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    acero: {
      title: "Apoptotic and free radical scavenging properties of the methanolic extract of Gentianella alborosea",
      author: "Acero N, Llinares F, Galán de Mera A, Oltra B, Muñoz-Mingarro D",
      journal: "Fitoterapia",
      publicationDate: "2006-05-27",
      doi: "10.1016/j.fitote.2006.05.020",
      pmid: "16814959",
      url: "https://pubmed.ncbi.nlm.nih.gov/16814959/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kawahara: {
      title: "Sesterterpenoid from Gentianella alborosea",
      author: "Kawahara N, Nozawa M, Flores D, Bonilla P, Sekita S, Satake M",
      journal: "Phytochemistry",
      publicationDate: "2000-04-01",
      doi: "10.1016/s0031-9422(99)00518-x",
      pmid: "10820797",
      url: "https://pubmed.ncbi.nlm.nih.gov/10820797/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hercampuri", type: "REGIONAL_NAME", region: "Peru" },
    { name: "Hercampure", type: "REGIONAL_NAME", region: "Peru" },
  ],
  constituents: [{ name: "Alborosin", slug: "alborosin", type: "sesterterpenoid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Peruvian sources describe this hercampuri as used:\n- for diabetes\n- to lower cholesterol\n- to increase urination\n- to stimulate stomach secretions\n- for liver inflammation\n- to \"purify the blood\"",
      source: "bussmann",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract showed antioxidant activity and made cervical cancer cells self-destruct, more so at higher doses.\n\nTechnical detail: methanolic extract; DPPH radical scavenging; apoptosis in HeLa cells.",
      source: "acero",
    },
    {
      category: "PRECLINICAL",
      summary: "Chemists found a new type of compound in it, a sesterterpenoid named alborosin.",
      source: "kawahara",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Although this is the species usually described as hercampuri, a 2013 survey of a large Lima market didn't find it once. Other gentian species were sold under the name instead.",
      source: "bussmann",
    },
  ],
});

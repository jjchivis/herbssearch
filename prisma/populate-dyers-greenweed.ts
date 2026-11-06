import { run } from "./lib/populate-herb";

// Dyer's Greenweed (Genista tinctoria), from a 2009 lab study (Rigano et al.)
// and a 2011 review of its constituents (Tůmová and Tůma). Common name per USDA
// PLANTS; family per GBIF.

run({
  name: "Dyer's Greenweed",
  profile: { family: "Fabaceae", genus: "Genista", species: "tinctoria", partsUsed: "The above-ground parts" },
  sources: {
    rigano: {
      title: "Genista sessilifolia DC. and Genista tinctoria L. inhibit UV light and nitric oxide-induced DNA damage and human melanoma cell growth",
      author: "Rigano D, Cardile V, Formisano C, et al.",
      journal: "Chemico-Biological Interactions",
      publicationDate: "2009-03-05",
      doi: "10.1016/j.cbi.2009.02.010",
      pmid: "19497419",
      url: "https://doi.org/10.1016/j.cbi.2009.02.010",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tumova: {
      title: "Dyer's Greenweed (Genista tinctoria L.): constituents and biological activity",
      author: "Tůmová L, Tůma J",
      journal: "Česká a slovenská farmacie",
      publicationDate: "2011-04-01",
      pmid: "21650007",
      url: "https://pubmed.ncbi.nlm.nih.gov/21650007/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A pea-family plant. Like other Genista plants, it contains isoflavones, plant compounds that have shown estrogen-like and other effects.",
      source: "rigano",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, an extract protected DNA from damage by UV light and slowed the growth of melanoma cells. It hasn't been tested in people.",
      source: "rigano",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "tumova",
    },
  ],
});

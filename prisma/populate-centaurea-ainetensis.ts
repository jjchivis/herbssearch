import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Centaurea Ainetensis",
  profile: {
    family: "Asteraceae",
    genus: "Centaurea",
    species: "ainetensis",
    partsUsed: "The above-ground parts",
  },
  sources: {
    ghantous: {
      title: "Purified salograviolide A isolated from Centaurea ainetensis causes growth inhibition and apoptosis in neoplastic epidermal cells",
      author: "Ghantous A, Tayyoun AA, Lteif GA, et al.",
      journal: "International Journal of Oncology",
      publicationDate: "2008-04-01",
      pmid: "18360711",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      url: "https://pubmed.ncbi.nlm.nih.gov/18360711/",
    },
    elNajjar: {
      title: "Anti-colon cancer effects of Salograviolide A isolated from Centaurea ainetensis",
      author: "El-Najjar N, Dakdouki S, Darwiche N, et al.",
      journal: "Oncology Reports",
      publicationDate: "2008-04-01",
      pmid: "18357373",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      url: "https://pubmed.ncbi.nlm.nih.gov/18357373/",
    },
    alSaghir: {
      title: "Anti-inflammatory properties of Salograviolide A purified from Lebanese plant Centaurea ainetensis",
      author: "Al-Saghir J, Al-Ashi R, Salloum R, et al.",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2009-09-23",
      pmid: "19775456",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1186/1472-6882-9-36",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2761300/",
    },
  },
  evidence: [
    { category: "TRADITIONAL", summary: "A plant found only in Lebanon that is often used in folk medicine.", source: "ghantous" },
    { category: "PRECLINICAL", summary: "Its extract slowed several kinds of colon cancer cells at doses that didn't harm normal gut cells. In mice given a cancer-causing chemical, the extract greatly reduced the number of tumors. Its active compound is salograviolide A.", source: "elNajjar" },
    { category: "PRECLINICAL", summary: "Salograviolide A also reduced inflammation in gut cells and in rats.", source: "alSaghir" },
  ],
});

import { run } from "./lib/populate-herb";

// Sandalwood (Santalum album, Indian sandalwood), from a 2024 review of
// sandalwood oil (Yan et al.) and a 2021 study of commercial sandalwood oils
// (Kucharska et al.). No human trials were found. Family per GBIF.

run({
  name: "Sandalwood",
  profile: {
    family: "Santalaceae",
    genus: "Santalum",
    species: "album",
    nativeRange: "India and Southeast Asia",
    partsUsed: "The heartwood and its oil",
  },
  sources: {
    yan: {
      title: "Biological Properties of Sandalwood Oil and Microbial Synthesis of Its Major Sesquiterpenoids",
      author: "Yan X, David SD, Du G, et al.",
      journal: "Biomolecules",
      publicationDate: "2024-08-08",
      doi: "10.3390/biom14080971",
      pmid: "39199359",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11352278/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kucharska: {
      title: "A Comparison of the Composition of Selected Commercial Sandalwood Oils with the International Standard",
      author: "Kucharska M, Frydrych B, Wesolowski W, Szymanska JA, Kilanowicz A",
      journal: "Molecules",
      publicationDate: "2021-04-13",
      doi: "10.3390/molecules26082249",
      pmid: "33924603",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8070282/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Indian Sandalwood", type: "COMMON_NAME" }],
  constituents: [{ name: "Santalol", slug: "santalol", type: "sesquiterpene alcohol" }],
  traditions: [
    { slug: "ayurveda", notes: "Valued for its healing properties since ancient times." },
    { slug: "traditional-chinese-medicine", notes: "Valued for its healing properties since ancient times." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sandalwood has been valued for its healing properties since ancient times in Ayurveda and traditional Chinese medicine. Its oil, pressed from the heartwood, is prized in perfume and aromatherapy.",
      source: "kucharska",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Sandalwood oil's main compounds, alpha- and beta-santalol, give it its scent. In lab and animal studies the oil fought microbes, calmed inflammation and slowed cancer cells.",
      source: "yan",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Much sandalwood oil sold in shops is fake. In a 2021 test of six oils labeled sandalwood, none met the international standard, only one contained real Indian sandalwood, and two were synthetic mixtures.",
      source: "kucharska",
    },
  ],
});

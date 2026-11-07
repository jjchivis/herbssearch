import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Tree of Heaven",
  profile: {
    family: "Simaroubaceae",
    genus: "Ailanthus",
    species: "altissima",
    partsUsed: "The bark",
  },
  sources: {
    li: {
      title: "Traditional uses, phytochemistry, and pharmacology of Ailanthus altissima (Mill.) Swingle bark: A comprehensive review",
      author: "Li X, Li Y, Ma S, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-07-15",
      pmid: "33862103",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2021.114121",
      url: "https://doi.org/10.1016/j.jep.2021.114121",
    },
    soler: {
      title: "The Invasive Ailanthus altissima: A Biology, Ecology, and Control Review",
      author: "Soler J, Izquierdo J",
      journal: "Plants",
      publicationDate: "2024-03-23",
      pmid: "38611460",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/plants13070931",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11013224/",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Chunpi", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "The bark (Chunpi) has been used for asthma, epilepsy, bleeding and eye diseases." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "A tree native to China that has spread invasively worldwide. Its dried bark, called Chunpi, has been used for thousands of years in China, Korea and India for asthma, epilepsy, bleeding, eye diseases and other ailments.", source: "li" },
    { category: "PRECLINICAL", summary: "Lab studies report effects against tumors, inflammation and viruses. Its main compound, ailanthone, is the most typical.", source: "li" },
    { category: "PRECLINICAL", summary: "A compound from the bark killed ovarian cancer cells in the lab.", source: "bajpai" },
  ],
  safety: [
    { category: "TOXICITY", description: "The bark is considered safe at usual doses, but higher doses are toxic because of compounds called quassinoids.", source: "li" },
  ],
});

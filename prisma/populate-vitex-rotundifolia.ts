import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Vitex Rotundifolia",
  profile: {
    family: "Lamiaceae",
    genus: "Vitex",
    species: "rotundifolia",
    partsUsed: "The fruit",
  },
  sources: {
    yan: {
      title: "Vitex rotundifolia L. f. and Vitex trifolia L.: A review on their traditional medicine, phytochemistry, pharmacology",
      author: "Yan CX, Wei YW, Li H, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-05-23",
      pmid: "36822343",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2023.116273",
      url: "https://doi.org/10.1016/j.jep.2023.116273",
    },
    kim: {
      title: "Casticin ameliorates scopolamine-induced cognitive dysfunction in mice",
      author: "Kim J, Seo YH, Kim J, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2020-09-15",
      pmid: "32380246",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2020.112843",
      url: "https://doi.org/10.1016/j.jep.2020.112843",
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
  evidence: [
    { category: "TRADITIONAL", summary: "A traditional medicinal plant used for headaches, fever, diarrhea, hair loss and wound healing. Today it is used clinically in China for cold-related headaches, diarrhea and irregular periods.", source: "yan" },
    { category: "PRECLINICAL", summary: "In mice with drug-induced memory problems, casticin, a compound from the fruit, improved memory.", source: "kim" },
    { category: "PRECLINICAL", summary: "Flavonoids from the fruit slowed leukemia cells in the lab.", source: "bajpai" },
  ],
  symptoms: [
    { slug: "headache", notes: "Traditionally used for headaches; studied only in the lab and animals." },
  ],
});

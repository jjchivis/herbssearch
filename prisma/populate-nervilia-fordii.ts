import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Nervilia Fordii",
  profile: {
    family: "Orchidaceae",
    genus: "Nervilia",
    species: "fordii",
    partsUsed: "The whole plant, as an extract",
  },
  sources: {
    yao: {
      title: "Effects of Nervilia fordii Extract on Pulmonary Fibrosis Through TGF-β/Smad Signaling Pathway",
      author: "Yao Y, Yuan Y, Lu Z, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-04-19",
      pmid: "33953686",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3389/fphar.2021.659627",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8090936/",
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
    { category: "TRADITIONAL", summary: "Extracts of this orchid have been used in China for acute lung injury, lung cancer and SARS.", source: "yao" },
    { category: "PRECLINICAL", summary: "In rats, the extract reduced scarring and inflammation of the lungs caused by a drug.", source: "yao" },
    { category: "PRECLINICAL", summary: "In mice with tumors, two extracts had clear anticancer effects, helped some mice live longer and supported their immune systems.", source: "bajpai" },
  ],
});

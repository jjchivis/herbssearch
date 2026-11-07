import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Hairy Agrimony",
  profile: {
    family: "Rosaceae",
    genus: "Agrimonia",
    species: "pilosa",
    partsUsed: "The above-ground parts",
  },
  sources: {
    wen: {
      title: "Agrimonia pilosa Ledeb.: A review of its traditional uses, botany, phytochemistry, pharmacology, and toxicology",
      author: "Wen S, Zhang X, Wu Y, et al.",
      journal: "Heliyon",
      publicationDate: "2022-07-21",
      pmid: "36046524",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.heliyon.2022.e09972",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9421327/",
    },
    hop: {
      title: "The Medicinal Plant Agrimonia pilosa Ledeb.: Botanical Description, Traditional use, Phytochemistry and Pharmacology",
      author: "Hop NQ, Son NT",
      journal: "Combinatorial Chemistry & High Throughput Screening",
      publicationDate: "2023-01-01",
      pmid: "36177633",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.2174/1386207325666220928163930",
      url: "https://doi.org/10.2174/1386207325666220928163930",
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
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used to stop bleeding, for malaria and dysentery, and as a tonic." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "Hairy agrimony is widely used in Eastern Europe and East Asia for sore throat, stomach pain, headache, dysentery with mucus, vaginal discharge, parasites and eczema.", source: "hop" },
    { category: "TRADITIONAL", summary: "In Chinese medicine it is used to stop bleeding, for malaria and dysentery, and as a tonic. It has been used for gut inflammation, stomach ulcers and bleeding in the gut, but most of these uses are based on experience rather than careful clinical studies.", source: "wen" },
    { category: "PRECLINICAL", summary: "In mice with tumors, an extract of the roots helped the mice live longer and slowed tumor growth, partly by boosting immune cells.", source: "bajpai" },
  ],
});

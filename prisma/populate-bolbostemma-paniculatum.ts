import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Bolbostemma Paniculatum",
  profile: {
    family: "Cucurbitaceae",
    genus: "Bolbostemma",
    species: "paniculatum",
    partsUsed: "The tubers",
  },
  sources: {
    zhou: {
      title: "Chinese endemic medicinal plant Bolbostemma paniculatum (Maxim.) Franquet: A comprehensive review",
      author: "Zhou Y, Liu J, Zhang J, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-09-07",
      pmid: "36160391",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3389/fphar.2022.974054",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9490187/",
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
    { slug: "traditional-chinese-medicine", notes: "Used to break up lumps and reduce swelling, for sores, mastitis and breast lumps." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "A plant found only in China with a long history of medicinal use. Traditionally it has been used to break up lumps and reduce swelling, for boils and sores, breast infections (mastitis), breast lumps and swollen lymph nodes. Chinese patent medicines containing it are sold in China for cancers, breast diseases and flat warts.", source: "zhou" },
    { category: "PRECLINICAL", summary: "In lab and animal studies its extracts and compounds have shown effects against tumors, viruses and inflammation. A 2022 review said its anticancer compounds and how they work haven't been studied thoroughly, and that quality standards are still needed.", source: "zhou" },
    { category: "PRECLINICAL", summary: "In a lab study, tubeimoside V, a compound from the tubers, killed human glioblastoma (brain cancer) cells.", source: "bajpai" },
  ],
});

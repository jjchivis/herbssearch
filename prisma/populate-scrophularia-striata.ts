import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Scrophularia Striata",
  profile: {
    family: "Scrophulariaceae",
    genus: "Scrophularia",
    species: "striata",
    partsUsed: "The leaves",
  },
  sources: {
    alizadeh: {
      title: "The effect of Scrophularia striata on cell attachment and biocompatibility of decellularized bovine pericardia",
      author: "Alizadeh M, Rezakhani L, Taghdiri Nooshabadi V, et al.",
      journal: "Cell and Tissue Banking",
      publicationDate: "2022-06-01",
      pmid: "34173897",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1007/s10561-021-09939-3",
      url: "https://doi.org/10.1007/s10561-021-09939-3",
    },
    amri: {
      title: "Hydroalcoholic extract of Scrophularia striata has a significant therapeutic effect on thioacetamide-induced liver cirrhosis in rats",
      author: "Amri J, Jamalian M, Salami Z, et al.",
      journal: "Hormone Molecular Biology and Clinical Investigation",
      publicationDate: "2023-12-22",
      pmid: "38124628",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1515/hmbci-2022-0106",
      url: "https://doi.org/10.1515/hmbci-2022-0106",
    },
    mihaylova: {
      title: "Targeting Inflammation with Natural Products: A Mechanistic Review of Iridoids from Bulgarian Medicinal Plants",
      author: "Mihaylova R, Elincheva V, Gevrenova R, et al.",
      journal: "Molecules",
      publicationDate: "2025-08-22",
      pmid: "40941985",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/molecules30173456",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12430101/",
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
    { category: "TRADITIONAL", summary: "A traditional medicinal plant of Iran.", source: "alizadeh" },
    { category: "HUMAN_RESEARCH", summary: "In a randomized trial in people with long-term gum disease (chronic periodontitis), a Scrophularia striata product outperformed a standard mouthwash for plaque, gum pockets and bleeding.", source: "mihaylova" },
    { category: "PRECLINICAL", summary: "In rats with chemically caused liver scarring (cirrhosis), the extract had a significant healing effect.", source: "amri" },
    { category: "PRECLINICAL", summary: "In the lab, leaf extract slowed brain (astrocyte) cancer cells, but seed extract made the cells grow faster.", source: "bajpai" },
  ],
  symptoms: [
    { slug: "liver-disease", notes: "Reduced chemically caused liver scarring in rats; not tested in people." },
  ],
});

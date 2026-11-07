import { run } from "./lib/populate-herb";

// Bee venom from the honeybee (Apis mellifera), an animal product. Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner, plus a 2021 review. Listed under Animal-Derived Remedies.

run({
  name: "Bee Venom",
  profile: {
    family: "Apidae",
    genus: "Apis",
    species: "mellifera",
    partsUsed: "Venom, given by bee sting or injection",
  },
  sources: {
    khalil: {
      title: "Bee Venom: From Venom to Drug",
      author: "Khalil A, Elesawy BH, Ali TM, et al.",
      journal: "Molecules",
      publicationDate: "2021-08-15",
      pmid: "34443529",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/molecules26164941",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8400317/",
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
    { category: "TRADITIONAL", summary: "Venom from honeybees has been used to treat illness, either by direct bee stings or as an injection.", source: "khalil" },
    { category: "PRECLINICAL", summary: "Bee venom contains many enzymes and peptides. Lab and animal studies report effects against germs, parasites, cancer, inflammation and arthritis. Melittin, its main peptide, has shown anticancer effects in cells and animals.", source: "khalil" },
  ],
  safety: [
    { category: "TOXICITY", description: "Melittin, bee venom's main ingredient, damages healthy cells as well as cancer cells and breaks down red blood cells, which has held back its use in people.", source: "bajpai" },
  ],
  symptoms: [
    { slug: "animal-derived-remedies", notes: "A remedy made from honeybee venom." },
  ],
});

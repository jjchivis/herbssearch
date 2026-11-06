import { run } from "./lib/populate-herb";

// Field Bindweed (Convolvulus arvensis), from a 2022 study of its use in Pakistani
// traditional medicine (Abdul Khaliq et al.), a 2024 study of its extracts (Osman
// et al.) and 1995 studies of its toxic alkaloids in horses and mice (Todd et al.;
// Schultheiss et al.). Family per GBIF.

run({
  name: "Field Bindweed",
  profile: { family: "Convolvulaceae", genus: "Convolvulus", species: "arvensis", nativeRange: "Europe and Asia; now a weed worldwide", partsUsed: "The roots and leaves" },
  sources: {
    khaliq: {
      title: "Dereplication and Quantification of Major Compounds of Convolvulus arvensis L. Extracts and Assessment of Their Effect on LPS-Activated J774 Macrophages",
      author: "Abdul Khaliq H, Ortiz S, Alhouayek M, Muccioli GG, Quetin-Leclercq J",
      journal: "Molecules",
      publicationDate: "2022-01-31",
      doi: "10.3390/molecules27030963",
      pmid: "35164229",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8838012/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    osman: {
      title: "Phytoconstituent analysis, anti-inflammatory, antimicrobial and anticancer effects of nano encapsulated Convolvulus arvensis L. extracts",
      author: "Osman EEA, Shemis MA, Abdel-Hameed ES, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2024-03-14",
      doi: "10.1186/s12906-024-04420-6",
      pmid: "38486187",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10938824/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    todd: {
      title: "Tropane alkaloids and toxicity of Convolvulus arvensis",
      author: "Todd FG, Stermitz FR, Schultheis P, Knight AP, Traub-Dargatz J",
      journal: "Phytochemistry",
      publicationDate: "1995-05-01",
      doi: "10.1016/0031-9422(94)00969-z",
      pmid: "7495531",
      url: "https://doi.org/10.1016/0031-9422(94)00969-z",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    schultheiss: {
      title: "Toxicity of field bindweed (Convolvulus arvensis) to mice",
      author: "Schultheiss PC, Knight AP, Traub-Dargatz JL, Todd FG, Stermitz FR",
      journal: "Veterinary and Human Toxicology",
      publicationDate: "1995-10-01",
      pmid: "8592835",
      url: "https://pubmed.ncbi.nlm.nih.gov/8592835/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bindweed", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A twining weed with white or pink trumpet flowers. In Pakistani traditional medicine the roots are used as a laxative and a leaf paste is applied to boils, inflammation and rheumatism.",
      source: "khaliq",
    },
    {
      category: "TRADITIONAL",
      summary: "It's been used in folk medicine for rheumatism, skin problems, infections, diabetes and digestive disorders.",
      source: "osman",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, extracts reduced inflammation in immune cells.",
      source: "khaliq",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "It contains tropane alkaloids. Horses grazing pastures overrun with bindweed lost weight and developed colic and scarring of the intestines.",
      source: "todd",
    },
    {
      category: "TOXICITY",
      description: "Mice fed only bindweed died within a week from severe liver damage and stomach ulcers; smaller amounts over weeks caused mild liver and stomach inflammation.",
      source: "schultheiss",
    },
  ],
});

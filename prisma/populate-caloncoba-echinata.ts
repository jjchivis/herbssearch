import { run } from "./lib/populate-herb";

// Caloncoba Echinata (Caloncoba echinata), from a 2002 study of its leaf compounds
// against malaria parasites (Ziegler et al.) and a 2019 rat feeding study
// (Okorie-Kanu et al.), plus a 2018 Sierra Leone study of its traditional uses
// and antimicrobial activity (Yormah et al.). Family per GBIF.

run({
  name: "Caloncoba Echinata",
  profile: { family: "Achariaceae", genus: "Caloncoba", species: "echinata", nativeRange: "West Africa", partsUsed: "The leaves and seeds" },
  sources: {
    ziegler: {
      title: "New dammarane and malabaricane triterpenes from Caloncoba echinata",
      author: "Ziegler HL, Staerk D, Christensen J, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "2002-12-01",
      doi: "10.1021/np0201826",
      pmid: "12502310",
      url: "https://doi.org/10.1021/np0201826",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    okorie: {
      title: "Clinicopathologic findings in rats fed on the powder of Caloncoba echinata leaves",
      author: "Okorie-Kanu CO, Edet DI, Aba PE, Okorie-Kanu OJ",
      journal: "Veterinary Research Forum",
      publicationDate: "2019-12-15",
      doi: "10.30466/vrf.2018.89652.2170",
      pmid: "32206231",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7065583/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yormah: {
      title: "Phytochemical Screening And Antimicrobial Sensitivity Of Extracts Of The Traditional Medicinal Plant Caloncoba Echinata In Sierra Leone",
      author: "Yormah T, et al.",
      journal: "International Journal of Scientific & Technology Research",
      publicationDate: "2018-08-01",
      url: "https://www.ijstr.org/research-paper-publishing.php?month=aug2018",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Oncoba echinata", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A West African forest shrub. In Sierra Leone the oil from its seeds is used for leprosy and skin infections, and a decoction of the leafy twigs and root bark for measles, chickenpox, smallpox and menstrual problems.",
      source: "yormah",
    },
    {
      category: "TRADITIONAL",
      summary: "The starchy, oily fruit pulp has been used in Sierra Leone as a milk substitute for infants, and it's eaten by monkeys and chimpanzees in the Gola Forest.",
      source: "yormah",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, the seed oil and some leaf and bark extracts had a moderate effect against E. coli, Salmonella and Staphylococcus bacteria.",
      source: "yormah",
    },
    {
      category: "PRECLINICAL",
      summary: "New compounds from the leaves slowed the growth of malaria parasites in lab tests.",
      source: "ziegler",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In rats fed the powdered leaves for 4 weeks, the leaves caused weight loss, anemia, and damage to the liver and testes.",
      source: "okorie",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "okorie",
    },
  ],
});

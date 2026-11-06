import { run } from "./lib/populate-herb";

// Crabwood (Carapa procera), from a 2015 survey of its uses in Mali (Dembélé et
// al.), a 2025 survey in Côte d'Ivoire (Coulibaly et al.), a 2021 Burkina Faso
// malaria study in mice (Koama et al.), a 2022 toxicity and malaria study (Mahama et
// al.) and a 2021 antimicrobial study (Owusu et al.). Family per GBIF.

run({
  name: "Crabwood",
  profile: { family: "Meliaceae", genus: "Carapa", species: "procera", nativeRange: "Tropical Africa and South America", partsUsed: "The seed oil, bark and leaves" },
  sources: {
    dembele: {
      title: "Use-value and importance of socio-cultural knowledge on Carapa procera trees in the Sudanian zone in Mali",
      author: "Dembélé U, Lykke AM, Koné Y, Témé B, Kouyaté AM",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2015-03-02",
      doi: "10.1186/1746-4269-11-14",
      pmid: "25971304",
      url: "https://doi.org/10.1186/1746-4269-11-14",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    coulibaly: {
      title: "Qualitative ethnobotanical survey on the virtues of Carapa procera and plants used for protection against mosquitoes in Côte d'Ivoire",
      author: "Coulibaly FH, Azokou A, Carrasco D, et al.",
      journal: "Malaria Journal",
      publicationDate: "2025-09-30",
      doi: "10.1186/s12936-025-05531-2",
      pmid: "41029401",
      url: "https://doi.org/10.1186/s12936-025-05531-2",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    koama: {
      title: "In vivo Antimalarial, Antioxidant Activities and Safety of Carapa procera DC. (Meliaceae)",
      author: "Koama KB, Yerbanga RS, Meda NTR, et al.",
      journal: "Pakistan Journal of Biological Sciences",
      publicationDate: "2021-01-01",
      doi: "10.3923/pjbs.2021.571.578",
      pmid: "34486332",
      url: "https://doi.org/10.3923/pjbs.2021.571.578",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mahama: {
      title: "Assessment of toxicity and anti-plasmodial activities of chloroform fractions of Carapa procera and Alchornea cordifolia in murine models",
      author: "Mahama A, Chama MA, Oppong Bekoe E, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-12-23",
      doi: "10.3389/fphar.2022.1077380",
      pmid: "36618915",
      url: "https://doi.org/10.3389/fphar.2022.1077380",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    owusu: {
      title: "Phytochemical and proximate content of Carapa procera bark and its antimicrobial potential against selected pathogens",
      author: "Owusu DA, Afedzi AEK, Quansah L",
      journal: "PLoS One",
      publicationDate: "2021-12-23",
      doi: "10.1371/journal.pone.0261755",
      pmid: "34941952",
      url: "https://doi.org/10.1371/journal.pone.0261755",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "An oil tree prized in West Africa. In Mali the nuts are its most used part, pressed for an oil used mainly in cosmetics, while the bark, leaves and roots are used as medicine.",
      source: "dembele",
    },
    {
      category: "TRADITIONAL",
      summary: "In Côte d'Ivoire the seed oil is used to keep off flies, mosquitoes and ants, and the plant is also used for malaria, tiredness and cosmetics.",
      source: "coulibaly",
    },
    {
      category: "TRADITIONAL",
      summary: "Traditional healers in western Burkina Faso use it for malaria.",
      source: "koama",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice with malaria, extracts slowed the parasite.",
      source: "koama",
    },
    {
      category: "PRECLINICAL",
      summary: "A bark extract was active against several germs, including Staphylococcus aureus and Candida yeast, in lab tests.",
      source: "owusu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In animal safety tests, leaf fractions caused no deaths or changes in blood tests, but the highest dose caused reversible liver changes in rats.",
      source: "mahama",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional malaria remedy; slowed malaria in mice. Not tested in people." },
  ],
});

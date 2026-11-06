import { run } from "./lib/populate-herb";

// Robert's Geranium (Geranium robertianum, herb Robert), from a 2025 review of
// its biological activity (Haj Ali et al.) and a 2023 lab study (Świątek et
// al.). Common name "Robert geranium" per USDA PLANTS; family per GBIF.

run({
  name: "Robert's Geranium",
  profile: { family: "Geraniaceae", genus: "Geranium", species: "robertianum", partsUsed: "The above-ground parts" },
  sources: {
    hajAli: {
      title: "An Up-to-Date Review Regarding the Biological Activity of Geranium robertianum L.",
      author: "Haj Ali D, Dărăban AM, Ungureanu D, et al.",
      journal: "Plants",
      publicationDate: "2025-03-14",
      doi: "10.3390/plants14060918",
      pmid: "40265830",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11944511/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    swiatek: {
      title: "Herb Robert's Gift against Human Diseases: Anticancer and Antimicrobial Activity of Geranium robertianum L.",
      author: "Świątek Ł, Wasilewska I, Boguszewska A, et al.",
      journal: "Pharmaceutics",
      publicationDate: "2023-05-22",
      doi: "10.3390/pharmaceutics15051561",
      pmid: "37242803",
      url: "https://doi.org/10.3390/pharmaceutics15051561",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Herb Robert", type: "COMMON_NAME" },
    { name: "Robert Geranium", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A geranium used in folk medicine since ancient times. It's been put on the skin for wounds, burns, cold sores, varicose veins, mouth ulcers, sore throats, insect bites and mild rashes.",
      source: "hajAli",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In one clinical study of outer ear infections, ear drops with herb Robert, clove and lavender oils worked about as well as antibiotic (ciprofloxacin) drops.",
      source: "hajAli",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, extracts killed some bacteria, lowered cold sore virus (HHV-1) levels and slowed some cancer cells. It's rich in tannins and flavonoids.",
      source: "swiatek",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are few human safety studies.",
      source: "hajAli",
    },
  ],
});

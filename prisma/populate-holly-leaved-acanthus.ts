import { run } from "./lib/populate-herb";

// Holly-leaved acanthus / holly mangrove (Acanthus ilicifolius), from a 2022
// review of the genus (Matos et al.) and lab and animal studies (Babu 2001, 2002;
// Mani Senthil Kumar 2008). A retracted colon-cancer study (Almagrami 2014) is
// left out. No safety sources were found. Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Holly-leaved Acanthus",
  profile: {
    family: "Acanthaceae",
    genus: "Acanthus",
    species: "ilicifolius",
    nativeRange: "Mangroves, including the Sundarbans",
    partsUsed: "The leaves",
  },
  sources: {
    matos: {
      title: "A review of the ethnomedicinal uses, chemistry, and pharmacological properties of the genus Acanthus (Acanthaceae)",
      author: "Matos P, Batista MT, Figueirinha A",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-04-14",
      doi: "10.1016/j.jep.2022.115271",
      pmid: "35430290",
      url: "https://pubmed.ncbi.nlm.nih.gov/35430290/",
      sourceType: P,
      tier: T3,
    },
    kumar: {
      title: "Anti-inflammatory activity of Acanthus ilicifolius",
      author: "Mani Senthil Kumar KT, Gorain B, Roy DK, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2008-07-25",
      doi: "10.1016/j.jep.2008.07.024",
      pmid: "18703126",
      url: "https://pubmed.ncbi.nlm.nih.gov/18703126/",
      sourceType: P,
      tier: T3,
    },
    babuLiver: {
      title: "Antioxidant and hepatoprotective effect of Acanthus ilicifolius",
      author: "Babu BH, Shylesh BS, Padikkala J",
      journal: "Fitoterapia",
      publicationDate: "2001-03-01",
      doi: "10.1016/s0367-326x(00)00300-2",
      pmid: "11295303",
      url: "https://pubmed.ncbi.nlm.nih.gov/11295303/",
      sourceType: P,
      tier: T3,
    },
    babuTumor: {
      title: "Tumour reducing and anticarcinogenic activity of Acanthus ilicifolius in mice",
      author: "Babu BH, Shylesh BS, Padikkala J",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2002-01-01",
      doi: "10.1016/s0378-8741(01)00347-6",
      pmid: "11744292",
      url: "https://pubmed.ncbi.nlm.nih.gov/11744292/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Holly Mangrove", type: "COMMON_NAME" },
    { name: "Acanthus ilicifolius", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Acanthus species are used in traditional medicine mainly for breathing, nervous system, reproductive, digestive and urinary problems and for skin conditions. Holly-leaved acanthus is one of the three most-used species.",
      source: "matos",
    },
    {
      category: "TRADITIONAL",
      summary: "It grows widely in the Sundarbans mangroves, where it's popularly used to heal wounds.",
      source: "kumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a leaf extract reduced paw swelling in a standard inflammation test and blocked enzymes involved in inflammation (COX-1, COX-2 and 5-LOX). In human immune cells in the lab, it lowered inflammation signals. This hasn't been tested in people.",
      source: "kumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a leaf extract given by mouth protected the liver from a toxic chemical (carbon tetrachloride) about as well as curcumin. It also acted as an antioxidant in lab tests.\n\nTechnical detail: alcoholic leaf extract 250 and 500 mg/kg; curcumin 100 mg/kg as comparison.",
      source: "babuLiver",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, an extract slowed tumor growth, made mice with an implanted cancer live 75% longer, and delayed skin growths caused by cancer-causing chemicals. It has not been tested against cancer in people.\n\nTechnical detail: 250 and 500 mg/kg; Ehrlich ascites carcinoma; DMBA/croton oil skin papilloma.",
      source: "babuTumor",
    },
  ],
});

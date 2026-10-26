import { run } from "./lib/populate-herb";

// Cataia (Pimenta pseudocaryophyllus), from a 2012 mouse study with
// ethnobotanical background (Fajemiroye et al.), a 2022 mouse pain study
// (Manchope et al.), a 2026 mouse anxiety study of essential oils (Sá Filho et
// al.) and a 2006 lab study of the leaf oil (Lima et al.). No human or safety
// studies were found. Family per GBIF.

run({
  name: "Cataia",
  profile: {
    family: "Myrtaceae",
    genus: "Pimenta",
    species: "pseudocaryophyllus",
    nativeRange: "Brazil",
    partsUsed: "The leaves, usually as a tea",
  },
  sources: {
    fajemiroye: {
      title: "Involvement of 5-HT1A in the anxiolytic-like effect of dichloromethane fraction of Pimenta pseudocaryophyllus",
      author: "Fajemiroye JO, Galdino PM, Alves SF, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2012-03-27",
      doi: "10.1016/j.jep.2012.03.043",
      pmid: "22472106",
      url: "https://pubmed.ncbi.nlm.nih.gov/22472106/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    manchope: {
      title: "Pimenta pseudocaryophyllus (Gomes) Landrum extract inhibits inflammatory pain in mice: targeting neutrophil recruitment, oxidative stress, and cytokine production",
      author: "Manchope MF, Mizokami SS, Ferraz CR, et al.",
      journal: "Natural Product Research",
      publicationDate: "2022-03-01",
      doi: "10.1080/14786419.2022.2045487",
      pmid: "35227131",
      url: "https://pubmed.ncbi.nlm.nih.gov/35227131/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    safilho: {
      title: "Anxiolytic Potential of Selected Essential Oils and Their Impact on Motor Function",
      author: "Sá Filho AS, Ogbu JI, Olusola AJ, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-09-30",
      doi: "10.3390/ijms27198786",
      pmid: "42884030",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13664909/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lima: {
      title: "Antimicrobial activity of the essential oil from two specimens of Pimenta pseudocaryophyllus (Gomes) L.R. Landrum (Myrtaceae) native from São Paulo State, Brazil",
      author: "Lima MEL, Cordeiro I, Young MCM, Sobral MEG, Moreno PRH",
      journal: "Pharmacologyonline",
      publicationDate: "2006-01-01",
      url: "https://pharmacologyonline.silae.it/files/archives/2006/vol3/063.Lima.pdf",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Craveiro", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Louro-Cravo", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  constituents: [
    { name: "Eugenol", slug: "eugenol", type: "phenylpropanoid" },
    { name: "Methyl Eugenol", slug: "methyl-eugenol", type: "phenylpropanoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Brazilian folk medicine, a tea of cataia leaves has long been used to increase urination, as an aphrodisiac and as a calming drink for emotional tension.",
      source: "fajemiroye",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a leaf extract given by mouth reduced anxious behavior. The effect appeared to work through serotonin rather than the way Valium-type drugs work.\n\nTechnical detail: dichloromethane fraction; light-dark box and elevated plus maze; blocked by the 5-HT1A antagonist NAN-190, not by flumazenil.",
      source: "fajemiroye",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, the leaf oil at a moderate dose reduced anxious behavior without affecting balance. At a much higher dose, the calming effect reversed and coordination was slightly affected.\n\nTechnical detail: 100 mg/kg anxiolytic-like in the elevated plus maze; 500 mg/kg reduced open-arm entries; rotarod.",
      source: "safilho",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, an extract strongly reduced pain caused by inflammation, without affecting movement.\n\nTechnical detail: 3 mg/kg intraperitoneally; reduced neutrophil recruitment, oxidative stress, TNF-α and IL-1β.",
      source: "manchope",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the leaf oil killed Candida yeast and several bacteria. Plants from different places had different main compounds (eugenol or methyl eugenol).",
      source: "lima",
    },
  ],
});

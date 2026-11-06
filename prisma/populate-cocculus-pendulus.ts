import { run } from "./lib/populate-herb";

// Cocculus Pendulus (Cocculus pendulus), from ethnobotanical surveys in Iran
// (Hosseini et al. 2021) and Pakistan (Rehman et al. 2022), a review of headache
// plants in Africa (Frimpong et al. 2021) and a 2004 study of its alkaloids
// (Atta-ur-Rahman et al.). Very little research exists. Family per GBIF.

run({
  name: "Cocculus Pendulus",
  profile: { family: "Menispermaceae", genus: "Cocculus", species: "pendulus", nativeRange: "North and East Africa to South Asia", partsUsed: "The leaves and roots" },
  sources: {
    iran: {
      title: "Ethnobotany of the medicinal plants used by the ethnic communities of Kerman province, Southeast Iran",
      author: "Hosseini SH, Bibak H, Ghara AR, Sahebkar A, Shakeri A",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2021-04-28",
      doi: "10.1186/s13002-021-00438-z",
      pmid: "33910616",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8082778/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pakistan: {
      title: "Ethnogynaecological Knowledge of Traditional Medicinal Plants Used by the Indigenous Communities of North Waziristan, Pakistan",
      author: "Rehman S, Iqbal Z, Qureshi R, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2022-08-04",
      doi: "10.1155/2022/6528264",
      pmid: "35966728",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9371843/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    headache: {
      title: "A Review on Medicinal Plants Used in the Management of Headache in Africa",
      author: "Frimpong EK, Asong JA, Aremu AO",
      journal: "Plants",
      publicationDate: "2021-09-28",
      doi: "10.3390/plants10102038",
      pmid: "34685845",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8539318/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    atta: {
      title: "New cholinesterase inhibiting bisbenzylisoquinoline alkaloids from Cocculus pendulus",
      author: "Atta-ur-Rahman, Atia-tul-Wahab, Nawaz SA, Choudhary MI",
      journal: "Chemical & Pharmaceutical Bulletin",
      publicationDate: "2004-07-01",
      doi: "10.1248/cpb.52.802",
      pmid: "15256699",
      url: "https://doi.org/10.1248/cpb.52.802",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A climbing desert shrub. In southeast Iran a leaf decoction is drunk to bring down fever.",
      source: "iran",
    },
    {
      category: "TRADITIONAL",
      summary: "In North Waziristan, Pakistan, a root decoction is taken for 7 to 10 days for missed periods.",
      source: "pakistan",
    },
    {
      category: "TRADITIONAL",
      summary: "In Djibouti, the burnt leaves are inhaled for headache.",
      source: "headache",
    },
    {
      category: "PRECLINICAL",
      summary: "It contains alkaloids that block cholinesterase, the enzyme targeted by some Alzheimer's drugs, in lab tests.",
      source: "atta",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "atta",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional fever remedy in Iran. Not tested in people." },
  ],
});

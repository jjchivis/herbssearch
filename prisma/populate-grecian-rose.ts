import { run } from "./lib/populate-herb";

// Grecian Rose, as named on the card: Geum quellyon (Chilean avens, "hierba
// del clavo"). From a 2005 lab study with Mapuche ethnobotanical background
// (Russo et al.) and a 2001 case report of a drug interaction (Duclos &
// Goecke). Family per GBIF.

run({
  name: "Grecian Rose",
  profile: {
    family: "Rosaceae",
    genus: "Geum",
    species: "quellyon",
    nativeRange: "Central and southern Chile",
    partsUsed: "The roots",
  },
  sources: {
    russo: {
      title: "Antioxidant activity and antiproliferative action of methanolic extract of Geum quellyon Sweet roots in human tumor cell lines",
      author: "Russo A, Cardile V, Lombardo L, Vanella L, Vanella A, Garbarino JA",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2005-09-01",
      doi: "10.1016/j.jep.2005.03.032",
      pmid: "15941635",
      url: "https://pubmed.ncbi.nlm.nih.gov/15941635/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    duclos: {
      title: "Hierba del clavo (Geum chiloense) modifying cyclosporine levels: potential risk for transplanted people",
      author: "Duclos J, Goecke H",
      journal: "Revista Médica de Chile",
      publicationDate: "2001-07-01",
      doi: "10.4067/s0034-98872001000700013",
      pmid: "11552449",
      url: "https://pubmed.ncbi.nlm.nih.gov/11552449/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chilean Avens", type: "COMMON_NAME" },
    { name: "Hierba del Clavo", type: "REGIONAL_NAME", region: "Chile" },
    { name: "Geum chiloense", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In the traditional medicine of the Mapuche people of Chile, the root is used:\n- for tooth nerve pain\n- for stomach inflammation and prostatitis\n- to regulate menstruation\n- to increase urination\n- as an aphrodisiac",
      source: "russo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a root extract rich in tannins showed strong antioxidant activity and killed colon, prostate and mouth cancer cells.\n\nTechnical detail: Caco-2, DU-145 and KB cell lines; scavenged DPPH and superoxide; inhibited xanthine oxidase.",
      source: "russo",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "A kidney transplant patient who took hierba del clavo had dangerously high levels of the anti-rejection drug cyclosporine (ciclosporin). Levels returned to normal when he stopped the herb.",
      source: "duclos",
    },
  ],
});

import { run } from "./lib/populate-herb";

// West Indian Milkberry, cainca (Chiococca alba), from a 2024 lab study of the
// root (Pires et al.), a 2022 study of root extracts against mosquitoes
// (Borges et al.) and a 2020 study of heavy metals in Brazilian medicinal
// plants including this one (Tschinkel et al.). Family per GBIF.

run({
  name: "West Indian Milkberry",
  profile: {
    family: "Rubiaceae",
    genus: "Chiococca",
    species: "alba",
    nativeRange: "The tropical Americas, from Florida and the Caribbean to South America",
    partsUsed: "The roots and wood",
  },
  sources: {
    pires: {
      title: "Antiviral Potential of Chiococca alba (L.) Hitchc. Plant Extracts Against Chikungunya and Mayaro Viruses",
      author: "Pires ECF, da Silva FP, Schallenberger K, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2024-10-23",
      doi: "10.3390/ijms252111397",
      pmid: "39518948",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11546558/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    borges: {
      title: "Methanolic Extracts of Chiococca alba in Aedes aegypti Biorational Management: Larvicidal and Repellent Potential, and Selectivity against Non-Target Organisms",
      author: "Borges JCM, Haddi K, Valbon WR, et al.",
      journal: "Plants",
      publicationDate: "2022-11-29",
      doi: "10.3390/plants11233298",
      pmid: "36501335",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9735851/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tschinkel: {
      title: "The Hazardous Level of Heavy Metals in Different Medicinal Plants and Their Decoctions in Water: A Public Health Problem in Brazil",
      author: "Tschinkel PFS, Melo ESP, Pereira HS, et al.",
      journal: "BioMed Research International",
      publicationDate: "2020-03-12",
      doi: "10.1155/2020/1465051",
      pmid: "32258102",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7093906/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cainca", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Caninana", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Snowberry", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Naringin", slug: "naringin", type: "flavonoid" },
    { name: "Vitexin", slug: "vitexin", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Yucatec Maya healers use West Indian milkberry to bring down fever and for rheumatism.",
      source: "pires",
    },
    {
      category: "TRADITIONAL",
      summary: "In Brazil, the wood is sold as a medicinal plant to suppress appetite and to increase urination.",
      source: "tschinkel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, two root extracts blocked more than 70% of the activity of chikungunya and Mayaro viruses, which cause fever and joint pain.\n\nTechnical detail: 60 µg/mL in Vero cells; flavonoids naringin and vitexin predicted to bind the viral nsP2 protease.",
      source: "pires",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, root extracts killed the larvae of Aedes aegypti, the mosquito that spreads dengue, and repelled adult mosquitoes. They didn't harm a water bug that eats mosquito larvae.\n\nTechnical detail: methanolic extract, LC50 82 mg/mL; 18 compounds including rutin, naringin and quercetin.",
      source: "borges",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Brazilian samples of the wood contained lead above the US Pharmacopeia limit. A tea made from 40 g of the wood with another plant contained more cadmium than the daily safe limit.",
      source: "tschinkel",
    },
  ],
});

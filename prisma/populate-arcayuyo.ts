import { run } from "./lib/populate-herb";

// Arcayuyo (Chenopodium graveolens, now Dysphania graveolens), from a 2017
// mouse pain study (Déciga-Campos et al.) and a 1996 report of a fatal
// poisoning with its oil (Montoya-Cabrera et al.). Family per GBIF.

run({
  name: "Arcayuyo",
  profile: {
    family: "Amaranthaceae",
    genus: "Dysphania",
    species: "graveolens",
    nativeRange: "Mexico and the southwestern United States to the Andes",
    partsUsed: "The above-ground parts",
  },
  sources: {
    deciga: {
      title: "Antinociceptive pharmacological profile of Dysphania graveolens in mouse",
      author: "Déciga-Campos M, Mata R, Rivero-Cruz I",
      journal: "Biomedicine & Pharmacotherapy",
      publicationDate: "2017-03-08",
      doi: "10.1016/j.biopha.2017.02.096",
      pmid: "28292021",
      url: "https://pubmed.ncbi.nlm.nih.gov/28292021/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    montoya: {
      title: "Fatal poisoning caused by oil of epazote, Chenopodium graveolens",
      author: "Montoya-Cabrera MA, Escalante-Galindo P, Meckes-Fisher M, et al.",
      journal: "Gaceta Médica de México",
      publicationDate: "1996-07-01",
      pmid: "8964384",
      url: "https://pubmed.ncbi.nlm.nih.gov/8964384/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chenopodium graveolens", type: "SCIENTIFIC_SYNONYM" },
    { name: "Epazote de Zorrillo", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  constituents: [
    { name: "Ascaridole", slug: "ascaridole", type: "monoterpene peroxide" },
    { name: "Pinocembrin", slug: "pinocembrin", type: "flavonoid" },
    { name: "Chrysin", slug: "chrysin", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Mexico, it's a traditional remedy for stomach pain.",
      source: "deciga",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, an extract, a tea and the oil from the plant reduced pain responses; the oil was strongest. Three of its compounds, pinostrobin, pinocembrin and chrysin, also eased pain.\n\nTechnical detail: 31–316 mg/kg orally; hot plate, writhing and formalin tests; effect reversed by naltrexone, flumazenil and bicuculline.",
      source: "deciga",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The oil from this plant can kill. A girl under 3 died after a healer gave her 40 mL of it. She had vomiting, seizures, coma and brain swelling. The dose contained about 26 times the old medicinal dose of its toxic compound, ascaridole.",
      source: "montoya",
    },
  ],
});

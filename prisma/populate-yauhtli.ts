import { run } from "./lib/populate-herb";

// Yauhtli, Mexican mint marigold (Tagetes lucida), from a 2025 rat study of
// gout pain (Ángeles-López et al.) and a 2022 mouse study of psychosis-like
// behavior (Porras-Dávila et al.). No human studies were found. Family per GBIF.

run({
  name: "Yauhtli",
  profile: {
    family: "Asteraceae",
    genus: "Tagetes",
    species: "lucida",
    nativeRange: "Mexico and Central America",
    partsUsed: "The leaves and flowering tops",
  },
  sources: {
    angeles: {
      title: "Antinociceptive effect of Tagetes lucida in an arthritic gout-pain model in rats",
      author: "Ángeles-López GE, Avilés-Herrera J, González-Trujano ME, Cristians S, Ventura-Martínez R",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2025-10-09",
      doi: "10.1016/j.jep.2025.120718",
      pmid: "41067319",
      url: "https://pubmed.ncbi.nlm.nih.gov/41067319/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    porras: {
      title: "Herniarin, Dimethylfraxetin and Extracts from Tagetes lucida, in Psychosis Secondary to Ketamine and Its Interaction with Haloperidol",
      author: "Porras-Dávila SL, Jiménez-Ferrer E, Román Ramos R, et al.",
      journal: "Plants",
      publicationDate: "2022-10-21",
      doi: "10.3390/plants11202789",
      pmid: "36297813",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9610474/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mexican Mint Marigold", type: "COMMON_NAME" },
    { name: "Pericón", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Yerbaniz", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  constituents: [
    { name: "Umbelliferone", slug: "umbelliferone", type: "coumarin" },
    { name: "Herniarin", slug: "herniarin", type: "coumarin" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Mexico, where it's called pericón, it's used to ease rheumatic and inflammatory pain.",
      source: "angeles",
    },
    {
      category: "TRADITIONAL",
      summary: "In Mexico, it's also used for problems involving the nervous system, including behaviors linked to psychosis.",
      source: "porras",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with gout-like joint pain, a water extract relieved pain about as well as the painkiller ketorolac, and higher doses worked better. Its compound umbelliferone also eased pain. A very large single dose caused no signs of poisoning in mice.\n\nTechnical detail: 562 mg/kg aqueous extract; umbelliferone 316 mg/kg; acute toxicity 2000 mg/kg (OECD 425).",
      source: "angeles",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice given ketamine to cause psychosis-like behavior, extracts and two of the plant's compounds blocked many of the effects, including restlessness, memory problems and reduced social contact.\n\nTechnical detail: coumarins herniarin and dimethylfraxetin; acted on dopamine and glutamate systems.",
      source: "porras",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "In mice, extracts and compounds from the plant strengthened the stiffness caused by the antipsychotic haloperidol.",
      source: "porras",
    },
  ],
});

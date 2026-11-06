import { run } from "./lib/populate-herb";

// Smooth Bedstraw (Cruciata laevipes, also Galium cruciata), from the USDA PLANTS
// database, ethnobotanical surveys from central Italy (Lucchetti et al. 2019) and
// eastern Albania (Pieroni et al. 2014), a 2020 study of its scent compounds (Tava
// et al.) and a 2025 enzyme study (Günbatan et al.). Family per GBIF.

run({
  name: "Smooth Bedstraw",
  profile: { family: "Rubiaceae", genus: "Cruciata", species: "laevipes", nativeRange: "Europe and western Asia", partsUsed: "The leaves, aerial parts and roots" },
  sources: {
    usda: {
      title: "Cruciata laevipes Opiz (smooth bedstraw)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/CRLA13",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    lucchetti: {
      title: "Ethnobotanical uses in the Ancona district (Marche region, Central Italy)",
      author: "Lucchetti L, Zitti S, Taffetani F",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2019-02-05",
      doi: "10.1186/s13002-019-0288-1",
      pmid: "30722788",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6364442/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pieroni: {
      title: "Resilience at the border: traditional botanical knowledge among Macedonians and Albanians living in Gollobordo, Eastern Albania",
      author: "Pieroni A, Cianfaglione K, Nedelcheva A, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2014-03-31",
      doi: "10.1186/1746-4269-10-31",
      pmid: "24685013",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3998745/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tava: {
      title: "Identification of the Volatile Components of Galium verum L. and Cruciata leavipes Opiz from the Western Italian Alps",
      author: "Tava A, Biazzi E, Ronga D, Avato P",
      journal: "Molecules",
      publicationDate: "2020-05-16",
      doi: "10.3390/molecules25102333",
      pmid: "32429453",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7287616/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gunbatan: {
      title: "Screening Study on Serine Protease Inhibitory Activity of 10 Plant Species",
      author: "Günbatan T, Dilmaç E, Gökbulut A, Sucu M, Gürbüz İ",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2024-12-19",
      doi: "10.1002/cbdv.202402776",
      pmid: "39648840",
      url: "https://doi.org/10.1002/cbdv.202402776",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Crosswort", type: "COMMON_NAME" },
    { name: "Galium cruciata", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small yellow-flowered plant of the coffee family with leaves in crosses of four. Around Ancona, Italy, the leaf juice was drunk to expel worms and a leaf decoction used for intestinal blockages; the roots were used to dye wool red.",
      source: "lucchetti",
    },
    {
      category: "TRADITIONAL",
      summary: "In eastern Albania it's crushed with salt and fed to sheep on St. George's Day for the animals' health.",
      source: "pieroni",
    },
    {
      category: "PRECLINICAL",
      summary: "It contains scent compounds such as benzyl alcohol and phenylacetaldehyde.",
      source: "tava",
    },
    {
      category: "PRECLINICAL",
      summary: "An extract strongly blocked the digestive enzyme trypsin in lab tests.",
      source: "gunbatan",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "lucchetti",
    },
  ],
});

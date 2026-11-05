import { run } from "./lib/populate-herb";

// African Locust Bean Tree (Parkia biglobosa), from a 2024 review (Komolafe et
// al.), studies of its fermented seed condiment (Masters and Kelly 2024; Golly et
// al. 2025) and a 2020 rat cholesterol study (Atere et al.). Family per GBIF.

run({
  name: "African Locust Bean Tree",
  profile: { family: "Fabaceae", genus: "Parkia", species: "biglobosa", nativeRange: "West Africa", partsUsed: "The seeds, pods, bark and leaves" },
  sources: {
    komolafe: {
      title: "Contemporary Insights into the Biological Mechanisms of Parkia biglobosa",
      author: "Komolafe K, Olaleye MT, Huang HC, Pacurari M",
      journal: "International Journal of Environmental Research and Public Health",
      publicationDate: "2024-03-24",
      doi: "10.3390/ijerph21040394",
      pmid: "38673307",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11050164/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    masters: {
      title: "Protein Quality of African Locust Bean-A High-Value Gathered Tree Food Contributing Protein and Palatability to Plant-Based Diets",
      author: "Masters ET, Kelly BA",
      journal: "International Journal of Food Science",
      publicationDate: "2024-08-27",
      doi: "10.1155/2024/1596212",
      pmid: "39228903",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11371448/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    golly: {
      title: "Microbial Diversity, Nutritional Composition, and Health Implications of Fermented Locust Bean Seed (Dawadawa) From Ghana",
      author: "Golly KM, Doku ET, Amponsah AS, et al.",
      journal: "International Journal of Food Science",
      publicationDate: "2025-09-19",
      doi: "10.1155/ijfo/8444101",
      pmid: "41030606",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12447108/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    atere: {
      title: "Local Condiment, Iru, Obtained from the Fermentation of Parkia biglobosa Seed Substantially Reduced the Serum Cholesterol Level of Wister Rats",
      author: "Atere AV, Adedeji A, Akinmoladun AC, Oyetayo VO, Akinyosoye FA",
      journal: "Preventive Nutrition and Food Science",
      publicationDate: "2020-06-30",
      doi: "10.3746/pnf.2020.25.2.153",
      pmid: "32676466",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7333003/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dawadawa", type: "COMMON_NAME" },
    { name: "Iru", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
    { name: "Soumbala", type: "REGIONAL_NAME", region: "Mali, Burkina Faso" },
    { name: "Néré", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The seeds, gathered mostly by rural women, are fermented into a rich, savory paste (soumbala, dawadawa or iru) that's a protein-rich, meat-like flavoring in much of West African cooking.",
      source: "masters",
    },
    {
      category: "TRADITIONAL",
      summary: "In West African traditional medicine it's used for infections such as diarrhea, and for high blood pressure and type 2 diabetes.",
      source: "komolafe",
    },
    {
      category: "PRECLINICAL",
      summary: "Fermented dawadawa from Ghana is high in protein (36 to 50%) and fat, and provides iron, zinc and calcium.",
      source: "golly",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with high cholesterol, a diet with iru for 28 days lowered cholesterol, triglycerides and LDL cholesterol.",
      source: "atere",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "Traditionally fermented dawadawa contains a mix of bacteria, including Staphylococcus and Streptococcus, so hygiene during fermentation matters.",
      source: "golly",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "The fermented seed condiment lowered cholesterol in rats. Not tested in people." },
    { slug: "diarrhea", notes: "A traditional West African remedy for diarrhea. Not studied in people." },
  ],
});

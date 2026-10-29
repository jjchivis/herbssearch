import { run } from "./lib/populate-herb";

// Helichrysum petiolare (licorice plant, silverbush everlasting, kooigoed),
// from a 2021 review of South African Helichrysum species (Akinyede et al.) and
// two lab studies of its effects on blood sugar (Aladejana et al. 2020,
// Akinyede et al. 2021). No human studies were found. Family per GBIF.

run({
  name: "Helichrysum Petiolare",
  profile: {
    family: "Asteraceae",
    genus: "Helichrysum",
    species: "petiolare",
    nativeRange: "South Africa",
    partsUsed: "The leaves",
  },
  sources: {
    akinyede: {
      title: "Medicinal Properties and In Vitro Biological Activities of Selected Helichrysum Species from South Africa: A Review",
      author: "Akinyede KA, Cupido CN, Hughes GD, Oguntibeju OO, Ekpo OE",
      journal: "Plants",
      publicationDate: "2021-07-30",
      doi: "10.3390/plants10081566",
      pmid: "34451611",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8398148/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    aladejana: {
      title: "In vitro evaluation of the anti-diabetic potential of Helichrysum petiolare Hilliard & B.L. Burtt using HepG2 (C3A) and L6 cell lines",
      author: "Aladejana AE, Bradley G, Afolayan AJ",
      journal: "F1000Research",
      publicationDate: "2020-10-15",
      doi: "10.12688/f1000research.26855.2",
      pmid: "33968374",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8080987/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akinyede2: {
      title: "In Vitro Evaluation of the Anti-Diabetic Potential of Aqueous Acetone Helichrysum petiolare Extract (AAHPE) with Molecular Docking Relevance in Diabetes Mellitus",
      author: "Akinyede KA, Oyewusi HA, Hughes GD, Ekpo OE, Oguntibeju OO",
      journal: "Molecules",
      publicationDate: "2021-12-28",
      doi: "10.3390/molecules27010155",
      pmid: "35011387",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8746515/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Licorice Plant", type: "COMMON_NAME" },
    { name: "Silverbush Everlasting", type: "COMMON_NAME" },
    { name: "Kooigoed", type: "REGIONAL_NAME", region: "South Africa (Afrikaans)" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Used in South Africa for colds, coughs, fever, menstrual problems and skin care." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Helichrysum plants, the everlastings, have been used for more than 2,000 years. In South Africa they are drunk as teas or burned as smoke to cleanse the homes of sick people and to ask the ancestors for blessings.",
      source: "akinyede",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In South African traditional medicine, licorice plant is used for fever, catarrh, colds, coughs, chest problems, menstrual problems, kidney infections, high blood pressure and erectile dysfunction. A tea of the leaves is used in beauty treatments to improve the skin and to heal wounds. In the Eastern Cape it is also used for type 2 diabetes.",
      source: "akinyede",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, leaf extracts were active against Staphylococcus aureus and Bacillus cereus bacteria, though the essential oil was not. An extract also lowered signs of cell damage and inflammation without harming human skin cells.",
      source: "akinyede",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, water extracts helped muscle and liver cells take up sugar and blocked enzymes that break down starch, about as well as the diabetes drug acarbose. An alcohol extract was toxic to the cells.",
      source: "aladejana",
    },
    {
      category: "PRECLINICAL",
      summary: "In a second lab study, an extract blocked the same starch-digesting enzymes and increased sugar uptake into cells.",
      source: "akinyede2",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In one lab study, an extract damaged the DNA of normal cells. In another, an extract protected bacteria from DNA damage.",
      source: "akinyede",
    },
  ],
});

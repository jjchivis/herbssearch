import { run } from "./lib/populate-herb";

// Dragon's Blood, sangre de drago (Croton lechleri), from a 2025 review
// (de Albuquerque et al.), a 2019 trial of crofelemer, a drug purified from
// the latex (Nee et al.), and a 2024 dog study that states crofelemer's
// approval (Guy et al.). The card's tree resembles Dracaena; Croton lechleri
// was chosen because the other cards on this sheet are Amazonian plants.
// Family per GBIF.

run({
  name: "Dragon's Blood",
  profile: {
    family: "Euphorbiaceae",
    genus: "Croton",
    species: "lechleri",
    nativeRange: "The Amazon rainforest of Peru, Ecuador, Colombia and Brazil",
    partsUsed: "The red latex (sap) that flows from cuts in the bark",
  },
  sources: {
    albuquerque: {
      title: "A Review on Phytochemistry and Recent Pharmacology of Dragon's Blood (Croton lechleri), a Multifunctional Ethnomedicinal Resource from the Amazon Forest",
      author: "de Albuquerque RDDG, León-Vargas FR, Carrasco-Montañez DD, et al.",
      journal: "Planta Medica",
      publicationDate: "2025-03-05",
      doi: "10.1055/a-2551-5681",
      pmid: "40043740",
      url: "https://pubmed.ncbi.nlm.nih.gov/40043740/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nee: {
      title: "Randomized Clinical Trial: Crofelemer Treatment in Women With Diarrhea-Predominant Irritable Bowel Syndrome",
      author: "Nee J, Salley K, Ludwig AG, et al.",
      journal: "Clinical and Translational Gastroenterology",
      publicationDate: "2019-12-01",
      doi: "10.14309/ctg.0000000000000110",
      pmid: "31800542",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6970555/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    guy: {
      title: "Effects of orally administered crofelemer on the incidence and severity of neratinib-induced diarrhea in female dogs",
      author: "Guy M, Teixeira A, Shrier A, Meschter C, Bolognese J, Chaturvedi P",
      journal: "PLoS One",
      publicationDate: "2024-01-24",
      doi: "10.1371/journal.pone.0282769",
      pmid: "38265977",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10807780/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Sangre de Drago", type: "REGIONAL_NAME", region: "Peru" },
    { name: "Sangre de Grado", type: "REGIONAL_NAME", region: "Peru" },
  ],
  constituents: [
    { name: "Proanthocyanidins", slug: "proanthocyanidins", type: "polyphenol" },
    { name: "Crofelemer", slug: "crofelemer", type: "proanthocyanidin" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The red sap is widely used in Amazonian traditional medicine, especially to help wounds heal.",
      source: "albuquerque",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A review of 33 studies found the sap is mostly made of proanthocyanidins. In lab and animal studies it helped wounds heal, may help reduce inflammation, slowed tumors and had effects on the gut.",
      source: "albuquerque",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Crofelemer, a compound purified from the sap, is an approved medicine for diarrhea not caused by infection in people with HIV taking antiretroviral drugs.",
      source: "guy",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial, 240 women with irritable bowel syndrome with diarrhea took crofelemer (125 mg twice a day) or a placebo for 12 weeks. It didn't increase the number of pain-free days, the main goal. In a later analysis, more women on crofelemer had their abdominal pain improve. Side effects were similar to placebo.\n\nTechnical detail: FDA abdominal pain monthly responders over 3 months 54.2% vs 42.5%, P = 0.037 (post hoc).",
      source: "nee",
    },
  ],
});

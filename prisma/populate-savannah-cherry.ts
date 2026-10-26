import { run } from "./lib/populate-herb";

// Savannah Cherry (Eugenia calycina), from a 2024 study of the fruit (Silva et
// al.) and a 2020 study of the leaf oil against mosquito larvae (Silva et al.).
// No medicinal or safety studies were found. Family per GBIF.

run({
  name: "Savannah Cherry",
  profile: {
    family: "Myrtaceae",
    genus: "Eugenia",
    species: "calycina",
    nativeRange: "The Cerrado savanna of Brazil",
    partsUsed: "The fruit and leaves",
  },
  sources: {
    silvaFruit: {
      title: "Eugenia calycina and Eugenia stigmatosa as Promising Sources of Antioxidant Phenolic Compounds",
      author: "Silva JDR, Arruda HS, Andrade AC, et al.",
      journal: "Plants",
      publicationDate: "2024-07-24",
      doi: "10.3390/plants13152039",
      pmid: "39124157",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11313698/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    silvaOil: {
      title: "Essential oil from leaves of Eugenia calycina Cambes: Natural larvicidal against Aedes aegypti",
      author: "Silva MV, Silva SA, Teixera TL, et al.",
      journal: "Journal of the Science of Food and Agriculture",
      publicationDate: "2020-09-03",
      doi: "10.1002/jsfa.10732",
      pmid: "32789937",
      url: "https://pubmed.ncbi.nlm.nih.gov/32789937/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Cerrado Cherry", type: "COMMON_NAME" }],
  constituents: [{ name: "Cyanidin-3-Glucoside", slug: "cyanidin-3-glucoside", type: "anthocyanin" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "The red berries are low in calories and rich in anthocyanins (red plant pigments), rutin and ellagic acid, with strong antioxidant activity in lab tests.\n\nTechnical detail: cyanidin-3-glucoside 242.97 µg/g; ORAC, FRAP and ABTS assays.",
      source: "silvaFruit",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, oil from the leaves killed the larvae of Aedes aegypti, the mosquito that spreads dengue, at doses lower than those that harmed mammal cells.\n\nTechnical detail: LC50 166.4 µg/mL at 48 h; main compounds bicyclogermacrene, spathulenol and β-caryophyllene.",
      source: "silvaOil",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "Savannah cherry grows only in Brazil's Cerrado and is threatened with extinction.",
      source: "silvaOil",
    },
  ],
});

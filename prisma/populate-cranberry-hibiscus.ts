import { run } from "./lib/populate-herb";

// Cranberry Hibiscus (Hibiscus acetosella), from a 2020 study of its leaves
// (Lyu et al.), a 2023 study of its edible flowers (dos Santos Silva et al.)
// and a 2017 study of Congolese hibiscus leaves (Kapepula et al.). Family per
// GBIF.

run({
  name: "Cranberry Hibiscus",
  profile: {
    family: "Malvaceae",
    genus: "Hibiscus",
    species: "acetosella",
    nativeRange: "Africa",
    partsUsed: "The leaves, shoots and flowers",
  },
  sources: {
    lyu: {
      title: "Phenolic Compounds in Extracts of Hibiscus acetosella (Cranberry Hibiscus) and Their Antioxidant and Antibacterial Properties",
      author: "Lyu JI, Ryu J, Jin CH, et al.",
      journal: "Molecules",
      publicationDate: "2020-09-12",
      doi: "10.3390/molecules25184190",
      pmid: "32932699",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7571108/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    silva: {
      title: "Hibiscus acetosella: An Unconventional Alternative Edible Flower Rich in Bioactive Compounds",
      author: "dos Santos Silva LY, da Silva Ramos A, Cavalcante DN, et al.",
      journal: "Molecules",
      publicationDate: "2023-06-16",
      doi: "10.3390/molecules28124819",
      pmid: "37375373",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10305401/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kapepula: {
      title: "Comparison of metabolic profiles and bioactivities of the leaves of three edible Congolese Hibiscus species",
      author: "Kapepula PM, Kabamba Ngombe N, Tshisekedi Tshibangu P, et al.",
      journal: "Natural Product Research",
      publicationDate: "2017-03-21",
      doi: "10.1080/14786419.2017.1305382",
      pmid: "28322589",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6086632/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "african-traditional-medicine", notes: "Leaf and shoot decoctions taken for anemia and fever in western and central Africa." }],
  constituents: [{ name: "Caffeic acid", slug: "caffeic-acid", type: "phenolic acid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The leaves are eaten as a green vegetable. In western and central Africa, the leaves and shoots are boiled into drinks for anemia and fever.",
      source: "lyu",
    },
    {
      category: "TRADITIONAL",
      summary: "The flowers are edible and very sour, and are eaten as an unusual edible flower.",
      source: "silva",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, leaf extracts slowed the growth of Staphylococcus aureus and Pseudomonas bacteria. Red-leaved plants neutralized more free radicals than green-leaved ones.",
      source: "lyu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The flowers are rich in antioxidant plant pigments and acids. A flower extract didn't harm human cells in lab tests.",
      source: "silva",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, leaf extracts calmed the reactions white blood cells use to cause inflammation.",
      source: "kapepula",
    },
  ],
  symptoms: [{ slug: "fever", notes: "Leaf and shoot drinks are a traditional fever remedy in Africa. Not studied in people." }],
});

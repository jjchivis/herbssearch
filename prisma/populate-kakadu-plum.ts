import { run } from "./lib/populate-herb";

// Kakadu Plum (Terminalia ferdinandiana), from a 2012 review (Mohanty and
// Cock), studies of its kernels (Akter et al. 2018), its antibacterial
// extracts (Akter et al. 2019) and their effect on human cells (Akter et al.
// 2021), and a 2025 co-design study with Aboriginal communities (Lopes et al.).
// Family per GBIF.

const LOPES = {
  title: "Integrating Australian Native Foods for a More Sustainable Food System: A Qualitative Co-Design Study with Aboriginal Communities",
  author: "Lopes CVA, Hunter J, Cawthorne R, et al.",
  journal: "International Journal of Environmental Research and Public Health",
  publicationDate: "2025-04-19",
  doi: "10.3390/ijerph22040646",
  pmid: "40283867",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12026976/",
  sourceType: "peer_reviewed" as const,
  tier: "TIER_3_PEER_REVIEWED" as const,
};

run({
  name: "Kakadu Plum",
  profile: {
    family: "Combretaceae",
    genus: "Terminalia",
    species: "ferdinandiana",
    nativeRange: "Northern Australia",
    partsUsed: "The fruit",
  },
  sources: {
    mohanty: {
      title: "The chemotherapeutic potential of Terminalia ferdinandiana: Phytochemistry and bioactivity",
      author: "Mohanty S, Cock IE",
      journal: "Pharmacognosy Reviews",
      publicationDate: "2012-01-01",
      doi: "10.4103/0973-7847.95855",
      pmid: "22654402",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3358965/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akterKernel: {
      title: "Chemical and Nutritional Composition of Terminalia ferdinandiana (Kakadu Plum) Kernels: A Novel Nutrition Source",
      author: "Akter S, Netzel ME, Fletcher MT, Tinggi U, Sultanbawa Y",
      journal: "Foods",
      publicationDate: "2018-04-12",
      doi: "10.3390/foods7040060",
      pmid: "29649154",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5920425/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akterBacteria: {
      title: "Antioxidant Rich Extracts of Terminalia ferdinandiana Inhibit the Growth of Foodborne Bacteria",
      author: "Akter S, Netzel ME, Tinggi U, Osborne SA, Fletcher MT, Sultanbawa Y",
      journal: "Foods",
      publicationDate: "2019-07-24",
      doi: "10.3390/foods8080281",
      pmid: "31344916",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6724055/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akterCells: {
      title: "Impact of polyphenol-rich extracts of Terminalia ferdinandiana fruits and seeds on viability of human intestinal and liver cells in vitro",
      author: "Akter S, Addepalli R, Netzel M, Fletcher M, Sultanbawa Y, Osborne S",
      journal: "Food Chemistry: Molecular Sciences",
      publicationDate: "2021-04-21",
      doi: "10.1016/j.fochms.2021.100024",
      pmid: "35415635",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8991618/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lopes: LOPES,
  },
  constituents: [{ name: "Vitamin C (ascorbic acid)", slug: "vitamin-c", type: "vitamin" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Aboriginal Australians have eaten Kakadu plum and used it as medicine for centuries. In Western Australia the fresh or dried fruit is made into refreshing drinks, and the fruit is traditionally used as an antiseptic, a soothing balm, and for colds, flu and headaches.",
      source: "akterKernel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Kakadu plum is the richest known source of vitamin C, about 7,000 mg per 100 g of fruit.",
      source: "lopes",
    },
    {
      category: "PRECLINICAL",
      summary: "The fruit has been reported to have over 900 times more vitamin C per gram than blueberries, and is also high in other antioxidants.",
      source: "mohanty",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, fruit and leaf extracts killed food-poisoning bacteria including Listeria and drug-resistant Staphylococcus aureus (MRSA).",
      source: "akterBacteria",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Food safety studies are lacking. In lab tests on human gut and liver cells, extracts harmed cells only at very high concentrations.",
      source: "akterCells",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Traditionally used by Aboriginal Australians for colds and flu. Not studied in people." },
  ],
});

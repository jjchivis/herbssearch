import { run } from "./lib/populate-herb";

// African Geranium (Pelargonium graveolens, rose geranium), the source of
// geranium oil, from the abstract of a 2008 buchu review (Moolla & Viljoen) and
// three randomized trials of its essential oil (Seo et al. 2023, Karimi et al.
// 2023, Sabzghabaee et al. 2011). Family per GBIF.

run({
  name: "African Geranium",
  profile: {
    family: "Geraniaceae",
    genus: "Pelargonium",
    species: "graveolens",
    nativeRange: "South Africa",
    partsUsed: "The leaves, mainly for their essential oil",
  },
  sources: {
    moolla: { title: "'Buchu' – Agathosma betulina and Agathosma crenulata (Rutaceae): A review", author: "Moolla A, Viljoen AM", journal: "Journal of Ethnopharmacology", publicationDate: "2008-10-30", doi: "10.1016/j.jep.2008.07.036", pmid: "18725278", url: "https://www.sciencedirect.com/science/article/pii/S0378874108003966", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    seo: {
      title: "Inhalation of Pelargonium graveolens Essential Oil Alleviates Pain and Related Anxiety and Stress in Patients with Lumbar Spinal Stenosis and Moderate to Severe Pain",
      author: "Seo E, Cho Y, Lee JM, Seol GH",
      journal: "Pharmaceuticals",
      publicationDate: "2023-12-19",
      doi: "10.3390/ph17010001",
      pmid: "38275987",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10818376/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    karimi: {
      title: "The effect of Aromatherapy with Pelargonium graveolens (P. graveolens) on the fatigue and sleep quality of critical care nurses during the Covid-19 pandemic: A randomized controlled trial",
      author: "Karimi N, Hasanvand S, Beiranvand A, Gholami M, Birjandi M",
      journal: "Explore",
      publicationDate: "2023-06-20",
      doi: "10.1016/j.explore.2023.06.006",
      pmid: "37400355",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10281030/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sabzghabaee: {
      title: "Clinical evaluation of the essential oil of Pelargonium graveolens for the treatment of denture stomatitis",
      author: "Sabzghabaee AM, Shirdare Z, Ebadian B, Aslani A, Ghannadi A",
      journal: "Dental Research Journal",
      publicationDate: "2011-12-01",
      pmid: "23372587",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3556280/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Rose Geranium", type: "COMMON_NAME" },
    { name: "Rose-Scented Geranium", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Rose geranium is the source of geranium oil, one of the two major commercial plant oils South Africa has given the world, along with buchu oil.",
      source: "moolla",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 59 people with lumbar spinal stenosis (narrowing in the lower spine), breathing in geranium oil lowered pain more than a placebo. In those with moderate to severe pain, it also eased anxiety and stress.",
      source: "seo",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 84 intensive-care nurses during the COVID-19 pandemic, breathing in geranium oil reduced tiredness compared with sunflower oil. It didn't change their sleep quality.",
      source: "karimi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 80 denture wearers with a fungal mouth infection under the denture, a 1% geranium oil gel used twice daily for two weeks cleared or improved the infection in 90% of people, compared with 30% on a placebo gel.",
      source: "sabzghabaee",
    },
  ],
});

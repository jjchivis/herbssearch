import { run } from "./lib/populate-herb";

// Soursop (Annona muricata, graviola), from verified sources: a review of its
// ethnomedicinal uses and chemistry (Zubaidi et al. 2023), a review of its use in
// tropical Africa and South America (Rady et al. 2018) and a clinical study of
// Parkinson's disease severity (Ribeyron et al. 2026). Family per GBIF /
// Catalogue of Life.

run({
  name: "Soursop",
  profile: {
    family: "Annonaceae",
    genus: "Annona",
    species: "muricata",
    nativeRange: "Grown in tropical and subtropical regions around the world",
    partsUsed: "The fruit, leaves, bark, seeds and roots",
  },
  sources: {
    zubaidi: {
      title: "Annona muricata: Comprehensive Review on the Ethnomedicinal, Phytochemistry, and Pharmacological Aspects Focusing on Antidiabetic Properties",
      author: "Zubaidi SN, Mohd Nani H, Ahmad Kamal MS, Abdul Qayyum T, Maarof S, Afzan A, Mohmad Misnan N, Hamezah HS, Baharum SN, Mediani A",
      journal: "Life",
      organization: "Life (Basel)",
      publicationDate: "2023-01-28",
      doi: "10.3390/life13020353",
      pmid: "36836708",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9968120/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rady: {
      title: "Anticancer Properties of Graviola (Annona muricata): A Comprehensive Mechanistic Review",
      author: "Rady I, Bloch MB, Chamcheu RN, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      organization: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2018-07-30",
      doi: "10.1155/2018/1826170",
      pmid: "30151067",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6091294/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ribeyron: {
      title: "The Clinical Effect of Annonaceae Fruit Consumption on Caribbean Parkinson's Disease Severity",
      author: "Ribeyron L, Petit A, Edragas R, Belson S, Tressières B, Bachoud-Lévi AC, Remy P, Roze E, Cleret de Langavant L, Lannuzel A",
      journal: "Behavioural Neurology",
      organization: "Behavioural Neurology",
      publicationDate: "2026-01-01",
      pmid: "42192274",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13212262/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Graviola", type: "COMMON_NAME" },
    { name: "Durian Belanda", type: "REGIONAL_NAME", region: "Malaysia" },
  ],
  constituents: [{ name: "Annonacin", slug: "annonacin", type: "acetogenin" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "All parts of soursop are used in folk medicine:\n- The fruit juice is used for diarrhea, and in South America it is drunk to get rid of intestinal parasites.\n- Toasted, powdered seeds are used to cause vomiting and as a laxative.\n- In parts of Africa, all parts are used for stomachache, parasites, malaria, diabetes and cancer.\nThe fruit is widely eaten in sweets, ice cream and juices.",
      source: "zubaidi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Soursop contains more than 200 plant compounds, including acetogenins. In lab and animal studies, extracts killed cancer cells and showed antioxidant and antimicrobial effects. These effects haven't been shown in people.",
      source: "rady",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A study compared 74 people with Parkinson's disease in the Caribbean, nearly all of whom had eaten soursop-family fruits, with 104 people with Parkinson's in mainland France. The Caribbean group had more severe movement and thinking symptoms. The authors say growing evidence points to these fruits being toxic and call for public warnings.",
      source: "ribeyron",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Soursop seeds, leaves and fruit peel contain annonacin, a compound that is toxic to nerve cells.",
      source: "zubaidi",
    },
    {
      category: "TOXICITY",
      description: "Eating soursop-family fruits has been linked to more severe Parkinson's disease in the Caribbean.",
      source: "ribeyron",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Traditionally used for diarrhea; not studied in people. It contains a compound toxic to nerve cells." },
    { slug: "sibo-and-parasites", notes: "The juice is traditionally drunk in South America to get rid of intestinal parasites; not studied in people." },
  ],
});

import { run } from "./lib/populate-herb";

// Butterfly Pea Flower (Clitoria ternatea), from a 2025 review of traditionally
// used edible flowers (Książkiewicz et al.) and a 2025 review of edible flowers
// in food (Carboni et al.).

run({
  name: "Butterfly Pea Flower",
  profile: {
    family: "Fabaceae",
    genus: "Clitoria",
    species: "ternatea",
    nativeRange: "Tropical Asia and Africa",
    partsUsed: "The deep blue flowers, usually as tea or a natural food colouring",
  },
  sources: {
    ksiazkiewicz: {
      title: "Traditionally Used Edible Flowers as a Source of Neuroactive, Antioxidant, and Anti-Inflammatory Extracts and Bioactive Compounds: A Narrative Review",
      author: "Książkiewicz M, Karczewska M, Nawrot F, Korybalska K, Studzińska-Sroka E",
      journal: "Molecules",
      publicationDate: "2025-02-04",
      doi: "10.3390/molecules30030677",
      pmid: "39942781",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11820717/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    foods: {
      title: "A Comprehensive Review of Edible Flowers with a Focus on Microbiological, Nutritional, and Potential Health Aspects",
      author: "Carboni AD, Di Renzo T, Nazzaro S, Marena P, Puppo MC, Reale A",
      journal: "Foods",
      publicationDate: "2025-05-12",
      doi: "10.3390/foods14101719",
      pmid: "40428498",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12111728/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Butterfly Pea", type: "COMMON_NAME" },
    { name: "Blue Pea", type: "COMMON_NAME" },
    { name: "Asian Pigeonwings", type: "COMMON_NAME" },
    { name: "Clitoria", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used in South Asia to boost memory and intellect and for mental illness, headache and eye infections." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Butterfly pea is a climbing vine from tropical Asia and Africa with vivid blue flowers. Traditional uses include:\n- South Asia: boosting memory and intellect, mental illness, nerve disorders, eye infections and headache\n- Indonesia: eye disease and fever, and cleaning babies' eyes\n- India: snakebite and scorpion stings\n- Cuba: to bring on periods, as a vaginal wash, and for liver and gut problems",
      source: "ksiazkiewicz",
    },
    {
      category: "TRADITIONAL",
      summary: "Its flowers are rich in blue anthocyanin pigments, and are used to colour drinks, bread, cakes, noodles and other foods. The colour changes with acidity.",
      source: "foods",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, butterfly pea extracts acted as antioxidants, reduced inflammation and pain in rats and mice, and killed several kinds of bacteria. These haven't been confirmed in people.",
      source: "ksiazkiewicz",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Some studies have reported possible toxic effects from extracts of butterfly pea and a few other edible flowers.",
      source: "foods",
    },
  ],
  symptoms: [
    { slug: "memory-and-thinking", notes: "Traditionally used in South Asia to boost memory and intellect. Not tested in trials." },
  ],
});

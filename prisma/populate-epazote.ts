import { run } from "./lib/populate-herb";

// Epazote (Dysphania ambrosioides, formerly Chenopodium ambrosioides), from
// verified sources: a historical study of deworming in Jamaica (Roberts et al.
// 2025), a 2025 review (Heredia Severino et al.), a fatal poisoning case
// report (Elhaddadi et al. 2024) and a rat toxicity study (Kandsi et al. 2022).

run({
  name: "Epazote",
  profile: {
    family: "Amaranthaceae",
    genus: "Dysphania",
    species: "ambrosioides",
  },
  sources: {
    roberts: {
      title: "The impact of multiple infections and community knowledge on engagement with a historical deworming programme: hookworm and Ascaris in Jamaica, 1913-1936",
      author: "Roberts JD, Waddington LL, Quinnell RJ, Dunn AM",
      journal: "Transactions of the Royal Society of Tropical Medicine and Hygiene",
      organization: "Transactions of the Royal Society of Tropical Medicine and Hygiene",
      publicationDate: "2025-06-01",
      doi: "10.1093/trstmh/traf010",
      pmid: "39936175",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12138884/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    heredia: {
      title: "Essential Oils and Extracts from Epazote (Dysphania ambrosioides): A Phytochemical Treasure with Multiple Applications",
      author: "Heredia Severino A, Fernández-López J, Borrás-Rocher F, Viuda-Martos M",
      journal: "Plants",
      organization: "Plants",
      publicationDate: "2025-06-20",
      doi: "10.3390/plants14131903",
      pmid: "40647909",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12251798/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    elhaddadi: {
      title: "A Fatal Case Report of Chenopodium ambrosioides L. (M'khinza) Intoxication",
      author: "Elhaddadi H, Hamami A, Elouali A, Babakhouya A, Rkain M",
      journal: "Cureus",
      organization: "Cureus",
      publicationDate: "2024-05-15",
      doi: "10.7759/cureus.60351",
      pmid: "38883026",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11177892/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kandsi: {
      title: "Evaluation of Acute and Subacute Toxicity and LC-MS/MS Compositional Alkaloid Determination of the Hydroethanolic Extract of Dysphania ambrosioides (L.) Mosyakin and Clemants Flowers",
      author: "Kandsi F, Lafdil FZ, Elbouzidi A, Bouknana S, Miry A, Addi M, Conte R, Hano C, Gseyra N",
      journal: "Toxins",
      organization: "Toxins",
      publicationDate: "2022-07-12",
      doi: "10.3390/toxins14070475",
      pmid: "35878213",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9316831/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chenopodium ambrosioides", type: "SCIENTIFIC_SYNONYM" },
    { name: "M'khinza", type: "REGIONAL_NAME", region: "Morocco" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "Used in Jamaican folk medicine to treat roundworms; the same plant was used by Jamaica's Hookworm Commission in the early 1900s.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In early 20th-century Jamaica, people treated roundworms (Ascaris) with this plant as a folk remedy. The Jamaica Hookworm Commission (1919–1936) used the same plant to treat hookworm. A 2025 study found that this shared knowledge made people more willing to accept the deworming programme.",
      source: "roberts",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Known as epazote, it is an important plant in traditional Latin American medicine.",
      source: "heredia",
    },
    {
      category: "TRADITIONAL",
      summary: "It's traditionally taken as a tea for fever and pain, and used against worms.",
      source: "elhaddadi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review reported that in lab and animal studies it acted against parasites, including worms, schistosomes and malaria parasites, and also against germs, as an antioxidant and against cancer cells. The authors say clinical trials are needed to test whether it is safe and effective.",
      source: "heredia",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Epazote can cause serious and even deadly poisoning, especially in babies and children. Reported problems affect the nerves, digestion, liver and kidneys.\nIn a 2024 case, a 4-year-old girl died after being given repeated strong doses of epazote tea for a fever. She lost consciousness 4 hours after drinking it.",
      source: "elhaddadi",
    },
    {
      category: "TOXICITY",
      description:
        "In rats, it took a very large single dose of flower extract to be deadly. But a high daily dose for 15 days raised blood signs of liver and kidney strain and caused mild changes in the liver and kidneys.\n\nTechnical detail: oral LD50 of the hydroethanolic extract 5000 mg/kg; at 500 mg/kg/day for 15 days, ALT, AST and urea rose significantly.",
      source: "kandsi",
    },
  ],
  symptoms: [
    {
      slug: "sibo-and-parasites",
      notes: "A Jamaican folk remedy for roundworms, and used against hookworm in the early 1900s. It can cause deadly poisoning, especially in children.",
    },
    { slug: "fever", notes: "Used as a tea for fever in Morocco. A child died after repeated strong doses given for fever." },
    { slug: "liver-safety-warnings", notes: "Poisoning can affect the liver. High doses strained the liver and kidneys in rats." },
  ],
});

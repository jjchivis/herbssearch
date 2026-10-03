import { run } from "./lib/populate-herb";

// Noni (Morinda citrifolia), from NCCIH's noni page (February 2025) and
// Vandebroek & Picking's book on popular medicinal plants in Jamaica (2020).

run({
  name: "Noni",
  profile: {
    family: "Rubiaceae",
    genus: "Morinda",
    species: "citrifolia",
    nativeRange: "Native to the Pacific Islands, Southeast Asia, Australia and India",
    partsUsed: "The fruit, roots, stems, bark, leaves and flowers have all been used. It is now mostly sold as juice.",
  },
  sources: {
    nccih: {
      title: "Noni: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NCCIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/noni",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    vandebroek: {
      title: "Popular Medicinal Plants in Portland and Kingston, Jamaica",
      author: "Vandebroek I, Picking D",
      organization: "Springer (Advances in Economic Botany)",
      publicationDate: "2020-01-01",
      doi: "10.1007/978-3-030-48927-4",
      url: "https://doi.org/10.1007/978-3-030-48927-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "One of the 25 most popular medicinal plants in a study of two Jamaican communities." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A book based on interviews with more than 100 people in Portland and Kingston, Jamaica, includes noni among the 25 most popular medicinal plants in those communities.",
      source: "vandebroek",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Noni has traditionally been used for colds, bacterial infections, fevers and stomach and gut problems. Today it is promoted for immune health, digestion, energy and aging skin.",
      source: "nccih",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies suggest noni may act as an antioxidant, affect the immune system, and act against bacteria, fungi and tumors.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Noni hasn't been shown to help any health condition in studies of people. Very little research has been done in people.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Noni juice may be safe for up to 3 months. But several people have developed liver damage after drinking noni juice or noni tea for several weeks.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Noni is high in potassium. Avoid it if you have kidney disease or have been told to limit potassium.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Noni may interact with medicines that affect potassium levels, blood pressure or the liver. Check with your doctor or pharmacist.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "There isn't enough information to know whether noni is safe during pregnancy or breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Traditionally used for colds. It hasn't been shown to help any condition in people." },
    { slug: "fever", notes: "Traditionally used for fevers. It hasn't been shown to help any condition in people." },
    { slug: "seasonal-immune-support", notes: "Promoted for immune health, but it hasn't been shown to help any condition in people." },
    { slug: "liver-safety-warnings", notes: "Liver damage has been reported after drinking noni juice or tea for several weeks." },
  ],
});

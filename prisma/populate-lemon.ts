import { run } from "./lib/populate-herb";

// Lemon (Citrus limon), from a 2020 review (Klimek-Szczykutowicz et al.) and a
// 2024 systematic review of ways to prevent kidney stones (Lo et al.). Family
// per GBIF.

run({
  name: "Lemon",
  profile: {
    family: "Rutaceae",
    genus: "Citrus",
    species: "limon",
    nativeRange: "Asia; now grown in warm regions worldwide",
    partsUsed: "The fruit juice, peel and essential oil",
  },
  sources: {
    klimek: {
      title: "Citrus limon (Lemon) Phenomenon-A Review of the Chemistry, Pharmacological Properties, Applications in the Modern Pharmaceutical, Food, and Cosmetics Industries, and Biotechnological Studies",
      author: "Klimek-Szczykutowicz M, Szopa A, Ekiert H",
      journal: "Plants",
      publicationDate: "2020-01-17",
      doi: "10.3390/plants9010119",
      pmid: "31963590",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7020168/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lo: {
      title: "Systematic review of pharmacological, complementary, and alternative therapies for the prevention of calcium oxalate stones",
      author: "Lo CYZ, Khor QH, Abdullatif VA, Delgado C, Lu Y, Katz J, Sur RL",
      journal: "Asian Journal of Urology",
      publicationDate: "2024-07-04",
      doi: "10.1016/j.ajur.2024.04.006",
      pmid: "40458577",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12126926/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  constituents: [
    { name: "Vitamin C", slug: "vitamin-c", type: "vitamin" },
    { name: "Hesperidin", slug: "hesperidin", type: "flavanone glycoside" },
    { name: "D-Limonene", slug: "d-limonene", type: "monoterpene" },
  ],
  traditions: [{ slug: "mediterranean-folk-medicine", notes: "Lemon juice used for scurvy, colds, sore throats, fever and rheumatism." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Lemon juice was used to treat scurvy before vitamin C was discovered. In traditional medicine it's also used for colds, sore throats, fever, rheumatism, high blood pressure, chest pain and irregular periods.",
      source: "klimek",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lemon is rich in vitamin C and flavonoids such as hesperidin, and its oil is rich in limonene. Lab studies found its extracts and oil fought microbes, calmed inflammation and slowed cancer cells.",
      source: "klimek",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Lemonade raises citrate in the urine, which helps prevent calcium kidney stones. In small studies of people who form stones, the effect was weaker and less consistent than with the prescription medicine potassium citrate.",
      source: "lo",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Lemon peel and lemon essential oil contain furanocoumarins, which can make skin burn more easily in sunlight. The limonene in the oil can also irritate the skin or cause allergic reactions.",
      source: "klimek",
    },
  ],
});

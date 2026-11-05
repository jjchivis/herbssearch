import { run } from "./lib/populate-herb";

// Bhurundi (Heliotropium indicum, Indian heliotrope), from a 2026 Benin study
// (Assouma et al.), a 2026 study of its aerial parts (Shoily et al.) and a 2025
// study of its pyrrolizidine alkaloids (Zakaria et al.). Family per GBIF.

run({
  name: "Bhurundi",
  profile: { family: "Boraginaceae", genus: "Heliotropium", species: "indicum", nativeRange: "Tropical Africa, Asia and the Americas", partsUsed: "The aerial parts" },
  sources: {
    assouma: {
      title: "Phytochemical Profile and Biological Activities of the Roots of Caesalpinia bonduc and the Aerial Part of Heliotropium indicum",
      author: "Assouma FF, Dah-Nouvlessounon D, Tchogou AP, et al.",
      journal: "Biochemistry Research International",
      publicationDate: "2026-05-28",
      doi: "10.1155/bri/9058679",
      pmid: "42256646",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13239037/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shoily: {
      title: "Phytochemical Profiling and Computational Docking Studies Revealing the Potential Anticancer and Antioxidant Properties of Heliotropium indicum L.",
      author: "Shoily SA, Parvin MS, Kazi M, et al.",
      journal: "Scientifica",
      publicationDate: "2026-02-04",
      doi: "10.1155/sci5/1079290",
      pmid: "41647488",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12872038/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zakaria: {
      title: "Roots of Indian heliotrope (Heliotropium indicum) produce simple pyrrolizidine alkaloids using the same homospermidine oxidase involved in biosynthesis of complex pyrrolizidine alkaloids in aerial parts",
      author: "Zakaria MM, Salewski MB, Ober D",
      journal: "Plant Biology",
      publicationDate: "2025-07-18",
      doi: "10.1111/plb.70077",
      pmid: "40679908",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12631511/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Indian Heliotrope", type: "COMMON_NAME" }],
  constituents: [{ name: "Indicine", slug: "indicine", type: "pyrrolizidine alkaloid" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Aerial parts used in Benin for inflammation, wounds, fever and infections." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Benin and elsewhere, a decoction or tea of the aerial parts is taken by mouth or put on the skin for inflammation, wounds, skin infections, fever and stomach problems.",
      source: "assouma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts killed some drug-resistant urinary bacteria and eased pain, and in one rat study didn't harm the liver or kidneys.",
      source: "assouma",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Bhurundi contains pyrrolizidine alkaloids, mainly indicine, toxic plant compounds found throughout the plant.",
      source: "zakaria",
    },
    {
      category: "TOXICITY",
      description:
        "Pyrrolizidine alkaloids in Heliotropium species are well-documented liver toxins, and researchers say the plant's safety still needs proper testing.",
      source: "shoily",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Used on wounds and skin infections in Benin. Contains liver-toxic alkaloids." },
    { slug: "fever", notes: "A traditional fever remedy. Contains liver-toxic alkaloids; not studied in people." },
  ],
});

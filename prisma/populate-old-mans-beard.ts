import { run } from "./lib/populate-herb";

// Usnea (Usnea barbata, old man's beard), a lichen, from two toxicology reviews
// of usnic acid and Usnea (Guo et al. 2008; Chen et al. 2024) and a 2026 lab
// study of an Usnea oil extract (Dan et al.). Family per GBIF.

run({
  name: "Usnea",
  profile: {
    family: "Parmeliaceae",
    genus: "Usnea",
    species: "barbata",
    nativeRange: "Forests worldwide, hanging from tree branches",
    partsUsed: "The whole lichen",
  },
  sources: {
    guo: {
      title: "Review of usnic acid and Usnea barbata toxicity",
      author: "Guo L, Shi Q, Fang JL, Mei N, Ali AA, Lewis SM, Leakey JE, Frankos VH",
      journal: "Journal of Environmental Science and Health, Part C",
      publicationDate: "2008-10-01",
      doi: "10.1080/10590500802533392",
      pmid: "19034791",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5739313/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chen: {
      title: "Hepatotoxicity of usnic acid and underlying mechanisms",
      author: "Chen S, Ren Z, Guo L",
      journal: "Journal of Environmental Science and Health, Part C",
      publicationDate: "2024-06-21",
      doi: "10.1080/26896583.2024.2366737",
      pmid: "38904414",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12366448/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dan: {
      title: "Antioxidant, Photoprotective, and Antimicrobial Potential of Oil Extract of Usnea barbata L. F.H.Wigg from Călimani Mountains, Romania",
      author: "Dan MA, Nedea MI, Ozon EA, et al.",
      journal: "Molecules",
      publicationDate: "2026-04-17",
      doi: "10.3390/molecules31081324",
      pmid: "42076002",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118391/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Old Man's Beard", type: "COMMON_NAME" },
    { name: "Beard Lichen", type: "COMMON_NAME" },
    { name: "Song Luo", type: "TRADITIONAL_NAME" },
  ],
  constituents: [{ name: "Usnic Acid", slug: "usnic-acid", type: "dibenzofuran" }],
  traditions: [{ slug: "traditional-chinese-medicine", notes: "Called song luo; first recorded in 101 BC, though rarely used today." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Usnea is a lichen, not a plant. In Chinese medicine, where it's called song luo, it was first recorded in 101 BC and used as a tea for infections, malaria, wounds, snakebite and cough, though it's rarely used today. Around the world it has been used for tuberculosis, pain, fever, wounds and athlete's foot, and in salves, deodorants and tinctures.",
      source: "guo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Usnea has been used against microbes in many countries and was being developed as a modern medicine just before penicillin arrived.",
      source: "guo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 lab study, an Usnea oil extract acted as an antioxidant and was active against Staphylococcus aureus bacteria and Candida yeast.",
      source: "dan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Usnic acid taken by mouth can damage the liver. Weight-loss supplements containing it were linked to many reports of liver damage, and in 2001 the US FDA warned about one of them, LipoKinetix, which was then withdrawn.",
      source: "chen",
    },
  ],
});

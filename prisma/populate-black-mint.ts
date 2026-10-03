import { run } from "./lib/populate-herb";

// Black Mint, taken here as a dark form of peppermint (Mentha × piperita), the
// mint listed for Jamaica in Lowe et al. 2021. Research and safety come from
// NCCIH's peppermint oil page (May 2025). No source describing "black mint"
// as a separate Jamaican plant was found, and research is on peppermint oil,
// not on black mint tea.

run({
  name: "Black Mint",
  profile: {
    family: "Lamiaceae",
    genus: "Mentha",
    species: "× piperita",
    partsUsed: "The leaves, usually made into a bush tea",
  },
  sources: {
    lowe: {
      title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds",
      author: "Lowe H, Steele B, Bryant J, Fouad E, Toyang N, Ngwa W",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-01-01",
      doi: "10.3390/molecules26030607",
      pmid: "33503834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nccih: {
      title: "Peppermint Oil: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NCCIH)",
      publicationDate: "2025-05-01",
      url: "https://www.nccih.nih.gov/health/peppermint-oil",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Jamaican Black Mint", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Black Peppermint", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Mint is among the plants used most often in Jamaica for colds and flu." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A 2021 review lists mint (peppermint) among the plants used most often in Jamaica for colds and flu.",
      source: "lowe",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "These results are for peppermint oil, not black mint tea.\n- IBS: a 2022 review of 10 studies with more than 1,000 people found peppermint oil was better than placebo for overall IBS symptoms and belly pain. The American College of Gastroenterology recommends it for IBS symptoms.\n- Indigestion: some products combining peppermint oil with caraway oil may help. Peppermint oil alone may make indigestion worse in some people.\n- Headache: limited evidence suggests peppermint oil on the skin might relieve tension headaches.\n- Nausea: breathing in peppermint oil reduced nausea and vomiting in people having chemotherapy.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Peppermint oil taken by mouth can cause heartburn, nausea, belly pain and dry mouth. Rarely, it causes allergic reactions.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Peppermint in amounts normally found in food is likely safe during pregnancy and breastfeeding. Whether larger, medicinal amounts are safe isn't known.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Menthol, a natural compound in mint, shouldn't be breathed in by, or put on the face of, a baby or small child, because it may affect their breathing.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Among the plants used most often in Jamaica for colds and flu. This use hasn't been tested in research." },
    { slug: "ibs", notes: "Research on peppermint oil found it helped IBS symptoms and belly pain. Black mint tea itself hasn't been studied." },
    { slug: "indigestion", notes: "Peppermint oil combined with caraway oil may help indigestion; peppermint oil alone may make it worse for some people." },
    { slug: "occasional-nausea", notes: "Breathing in peppermint oil reduced nausea in people having chemotherapy. Black mint tea hasn't been studied." },
    { slug: "headache", notes: "Limited evidence suggests peppermint oil on the skin might relieve tension headaches." },
  ],
});

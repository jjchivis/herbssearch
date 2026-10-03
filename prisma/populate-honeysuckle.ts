import { run } from "./lib/populate-herb";

// Honeysuckle (Lonicera japonica, Japanese honeysuckle, jin yin hua), from a
// 2011 review of its ethnopharmacology, chemistry, pharmacology and toxicology
// (Shang et al.).

run({
  name: "Honeysuckle",
  profile: {
    family: "Caprifoliaceae",
    genus: "Lonicera",
    species: "japonica",
    nativeRange: "East Asia; now naturalized in the Americas, Australia and New Zealand",
    partsUsed: "The dried flowers and flower buds, and sometimes the vine and leaves, as teas and in herbal formulas",
  },
  sources: {
    shang: {
      title: "Lonicera japonica Thunb.: ethnopharmacology, phytochemistry and pharmacology of an important traditional Chinese medicine",
      author: "Shang X, Pan H, Li M, Miao X, Ding H",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2011-10-31",
      doi: "10.1016/j.jep.2011.08.016",
      pmid: "21864666",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7127058/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Japanese Honeysuckle", type: "COMMON_NAME" },
    { name: "Honey Suckle", type: "COMMON_NAME" },
    { name: "Jin Yin Hua", type: "TRADITIONAL_NAME" },
    { name: "Ren Dong", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Known as jin yin hua; used for fevers, sore throats, skin sores and boils, and infectious diseases." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, honeysuckle flowers are used to \"clear heat\". Uses include:\n- Fevers and epidemic fevers\n- Sore throat, headache and cough\n- Skin sores, boils and abscesses\n- Mumps in children\nIt's also eaten as a health food, used in cosmetics and grown as ground cover.",
      source: "shang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, honeysuckle extracts and their compounds may help reduce inflammation and have shown activity against bacteria and several viruses, as well as antioxidant activity and liver protection. In 2003 it was the most popular traditional Chinese medicine used in China against SARS.\n\nTechnical detail: more than 140 compounds isolated; chlorogenic acid is the Chinese Pharmacopoeia quality marker. Antiviral activity reported against RSV, HIV, HSV, PRV and NDV.",
      source: "shang",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "In mice, dogs and monkeys, honeysuckle extract interrupted pregnancy, and in pregnant rats it lowered levels of progesterone, a hormone that maintains pregnancy.",
      source: "shang",
    },
    {
      category: "TOXICITY",
      description:
        "In short-term animal tests, honeysuckle flower bud extract was fairly nontoxic, even at very high doses, and didn't damage genes. Long-term safety hasn't been studied.\n\nTechnical detail: oral LD50 > 15 g/kg body weight in mice; negative micronucleus and Ames tests.",
      source: "shang",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "Used in traditional Chinese medicine for fevers. Not tested for this in trials." },
    { slug: "sore-throat", notes: "An ingredient in traditional Chinese formulas for sore throat. Not tested on its own in trials." },
    { slug: "skin-irritation", notes: "Used in traditional Chinese medicine for skin sores and boils. Not tested for this in trials." },
  ],
});

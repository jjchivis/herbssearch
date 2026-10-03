import { run } from "./lib/populate-herb";

// Comfrey (Symphytum officinale), from the European Union herbal monograph on
// comfrey root (2024 correction), the FDA's 2001 advisory on comfrey supplements
// and a 2012 clinical overview of comfrey creams.

run({
  name: "Comfrey",
  profile: {
    family: "Boraginaceae",
    genus: "Symphytum",
    species: "officinale",
    partsUsed: "The root, made into creams and ointments for the skin. Not for taking by mouth.",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Symphytum officinale L., radix",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2024-01-31",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-symphytum-officinale-l-radix_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    fda: {
      title: "FDA advises dietary supplement manufacturers to remove comfrey products from the market",
      organization: "US Food and Drug Administration",
      publicationDate: "2001-07-06",
      url: "https://www.e-lactancia.org/media/papers/Comfrey-FDA2001.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    staiger: {
      title: "Comfrey: a clinical overview",
      author: "Staiger C",
      journal: "Phytotherapy Research",
      publicationDate: "2012-10-01",
      doi: "10.1002/ptr.4612",
      pmid: "22359388",
      url: "https://pubmed.ncbi.nlm.nih.gov/22359388/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Comfrey Root", type: "COMMON_NAME" },
    { name: "Knitbone", type: "TRADITIONAL_NAME" },
    { name: "Boneset", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Used for centuries on painful muscles and joints; recognised in Europe as a traditional cream for minor sprains and bruises." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Comfrey has been used for centuries for painful muscle and joint complaints. Its old names, knitbone and boneset, reflect its use for injuries.",
      source: "staiger",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises comfrey root creams and ointments as a traditional herbal medicine for relieving the symptoms of minor sprains and bruises in adults. This is based on long use alone.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Several trials have tested comfrey root creams on the skin against a dummy cream:\n- 120 people with back pain: pain on movement fell much more with comfrey\n- 220 people with knee arthritis: knee pain fell more with comfrey over 3 weeks\n- 142 people with ankle sprains: tenderness eased more with comfrey\n- 306 children aged 3 to 12 with bruises and sprains: symptoms improved and the cream was well tolerated\nThis summary was written by a scientist working for the drug company Merck.\n\nTechnical detail: back pain −95.2% vs −37.8% (placebo); knee osteoarthritis −54.7% vs −10.7% over 21 days. A separate 164-person ankle sprain trial found comfrey better than diclofenac gel.",
      source: "staiger",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Never take comfrey by mouth. It contains pyrrolizidine alkaloids, which damage the liver in animals and are generally accepted to be toxic to people. Outbreaks of a serious liver disease caused by these substances have been reported in several countries, and they may also cause cancer.\nIn 2001 the FDA told companies to stop selling comfrey supplements and to tell customers to stop using them right away.\n\nTechnical detail: the liver disease is hepatic veno-occlusive disease (VOD), the blockage of small veins in the liver.",
      source: "fda",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't put comfrey on broken or irritated skin, and keep it away from your eyes, mouth and other moist areas. Don't use it if you're allergic to it.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "For adults: a thin layer twice a day, for no more than 10 days. Not recommended for anyone under 18. See a doctor if symptoms don't improve or get worse.\n\nTechnical detail: semi-solid preparation with 10% liquid extract (DER 2:1, ethanol 65%); daily pyrrolizidine alkaloid exposure must be below 1 µg.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description:
        "Not recommended during pregnancy or breastfeeding. Its safety hasn't been established, and the pyrrolizidine alkaloids it contains harmed unborn young in animal studies.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "sprains-and-bruises", notes: "Recognised in Europe as a traditional cream for minor sprains and bruises. In trials, comfrey creams eased ankle sprain pain more than a dummy cream." },
    { slug: "joint-discomfort", notes: "In trials, comfrey root creams eased knee arthritis pain and back pain more than a dummy cream. Use on the skin only." },
  ],
});

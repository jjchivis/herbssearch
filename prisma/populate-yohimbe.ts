import { run } from "./lib/populate-herb";

// Yohimbe (Pausinystalia johimbe), from NCCIH's fact sheet (May 2025).

run({
  name: "Yohimbe",
  profile: {
    family: "Rubiaceae",
    genus: "Pausinystalia",
    species: "johimbe",
    nativeRange: "Central and western Africa",
    partsUsed: "The bark",
  },
  sources: {
    nccih: {
      title: "Yohimbe: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-05-01",
      url: "https://www.nccih.nih.gov/health/yohimbe",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Johimbi", type: "COMMON_NAME" },
    { name: "Pausinystalia yohimbe", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Historically used in Africa as an aphrodisiac and to enhance sexual performance." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Yohimbe bark has historically been used as an aphrodisiac and to enhance sexual performance. Today it's promoted for erectile dysfunction, sports performance, weight loss and low mood.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There's very little research on yohimbe in people, and not enough evidence to say whether it helps any health condition. Its main compound, yohimbine, is a separate prescription drug.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Yohimbine, the main compound in yohimbe, has been linked to irregular heartbeat, blood pressure problems, heart attacks and seizures. Reported side effects include stomach problems, a fast heartbeat, anxiety and high blood pressure.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't take yohimbe with MAOIs or tricyclic antidepressants. Talk to your doctor or pharmacist about any other medicines you take.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "It may be unsafe to take yohimbe by mouth during pregnancy or breastfeeding.",
      source: "nccih",
    },
    {
      category: "CONTAMINATION",
      description:
        "The amount of yohimbine in products varies widely, and many labels don't say how much they contain or list known side effects. In the US it's illegal to sell over-the-counter yohimbine products for erectile dysfunction without FDA approval, and it's restricted or banned in many countries.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "sexual-health", notes: "Historically used as an aphrodisiac and promoted for erectile dysfunction, but there's little research in people and serious heart risks." },
  ],
});

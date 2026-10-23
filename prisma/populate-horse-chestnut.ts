import { run } from "./lib/populate-herb";

// Horse chestnut (Aesculus hippocastanum), from the EMA herbal monograph and
// summary for the public on horse-chestnut seed (2020), NCCIH (2025) and the 2012
// Cochrane review of horse chestnut seed extract for chronic venous insufficiency
// (Pittler & Ernst). Family per GBIF.

const EMA = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run({
  name: "Horse Chestnut",
  profile: {
    family: "Sapindaceae",
    genus: "Aesculus",
    species: "hippocastanum",
    nativeRange: "Parts of southeastern Europe",
    partsUsed: "The seeds (as standardized extracts)",
  },
  sources: {
    emaMono: {
      title: "European Union herbal monograph on Aesculus hippocastanum L., semen, Revision 1",
      organization: EMA,
      publicationDate: "2020-01-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-aesculus-hippocastanum-l-semen-final-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaSum: {
      title: "Horse-chestnut seed: summary for the public (EMA/60766/2020)",
      organization: EMA,
      publicationDate: "2020-03-04",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/horse-chestnut-seed-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nccih: {
      title: "Horse Chestnut: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/horse-chestnut",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Horse chestnut seed extract for chronic venous insufficiency",
      author: "Pittler MH, Ernst E",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2012-11-14",
      doi: "10.1002/14651858.CD003230.pub4",
      pmid: "23152216",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7144685/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Horse chestnut seed extract was traditionally used for arthritis, pain and swelling, menstrual cramps and hemorrhoids. Today it's mainly promoted for chronic venous insufficiency (poor blood flow in the leg veins, which can cause leg pain, swelling and itching).",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes horse chestnut seed preparations, taken by mouth or put on the skin, to ease heavy, uncomfortable legs from minor vein circulation problems and to relieve bruises.",
      source: "emaSum",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on scientific evidence, the European Medicines Agency recognizes standardized horse chestnut seed extract taken by mouth for chronic venous insufficiency, with symptoms such as swollen legs, varicose veins, heavy or tired legs, pain, itching and calf cramps. It may take at least 4 weeks to help.",
      source: "emaMono",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2012 Cochrane review of trials found that horse chestnut seed extract eased the symptoms of chronic venous insufficiency more than a placebo, including leg pain and swelling. One trial suggested it may work as well as compression stockings. Side effects were usually mild and uncommon. The reviewers said larger, better trials are still needed.\n\nTechnical detail: leg pain WMD 42.4 mm on a 100 mm visual analogue scale (one trial); leg volume WMD 32.1 ml (95% CI 13.49 to 50.72) in six trials, n = 502.",
      source: "cochrane",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The raw seeds, bark, flowers and leaves are unsafe to take by mouth, because they contain a toxic compound. Standardized seed extracts, which have this compound removed, are likely safe for short-term use and have been used safely in studies for up to 12 weeks.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Stomach and gut upset, headache, dizziness, itching and allergic reactions have been reported. Creams can cause itching and redness of the skin.",
      source: "emaMono",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "See a doctor first if you have skin inflammation, a vein clot or inflammation (thrombophlebitis), hard swollen skin, severe pain, ulcers, sudden swelling of one or both legs, or heart or kidney failure. Don't put horse chestnut creams on broken skin, around the eyes or on mucous membranes. Not recommended for anyone under 18 for vein problems.",
      source: "emaMono",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety during pregnancy and breastfeeding hasn't been established, so the European Medicines Agency doesn't recommend it at these times.",
      source: "emaMono",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "No interactions with medicines have been reported.",
      source: "emaMono",
    },
  ],
  symptoms: [
    {
      slug: "poor-circulation",
      notes: "Recognized in Europe for chronic venous insufficiency, and a Cochrane review found the seed extract eased leg pain and swelling.",
    },
    { slug: "sprains-and-bruises", notes: "Recognized in Europe as a traditional remedy, by mouth or on the skin, for bruises." },
  ],
  preparations: [
    {
      slug: "extract",
      notes: "Standardized seed extracts are taken by mouth in tablets, capsules or liquids, some designed to release slowly.",
      source: "emaMono",
    },
    { slug: "salve", notes: "Creams and gels made with seed extracts are applied to the skin.", source: "emaSum" },
  ],
});

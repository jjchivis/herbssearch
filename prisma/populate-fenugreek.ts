import { run } from "./lib/populate-herb";

// Fenugreek (Trigonella foenum-graecum), from NCCIH (2023), the EMA herbal
// monograph on fenugreek seed (2021) and Memorial Sloan Kettering's About Herbs
// entry. Family per GBIF.

const EMA = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run({
  name: "Fenugreek",
  profile: {
    family: "Fabaceae",
    genus: "Trigonella",
    species: "foenum-graecum",
    nativeRange: "The Mediterranean region, southern Europe and western Asia",
    partsUsed: "The seeds",
  },
  sources: {
    nccih: {
      title: "Fenugreek: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2023-09-01",
      url: "https://www.nccih.nih.gov/health/fenugreek",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Trigonella foenum-graecum L., semen, Revision 1",
      organization: EMA,
      publicationDate: "2021-11-24",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-trigonella-foenum-graecum-l-semen-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mskcc: {
      title: "Fenugreek — About Herbs, Botanicals & Other Products",
      organization: "Memorial Sloan Kettering Cancer Center",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/fenugreek",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Methi", type: "REGIONAL_NAME" },
    { name: "Greek Hayseed", type: "COMMON_NAME" },
    { name: "Bird's Foot", type: "COMMON_NAME" },
    { name: "Hu Lu Ba", type: "TRADITIONAL_NAME" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Used in Ayurveda for inflammation, diabetes and digestive problems, and to increase breast milk." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Fenugreek has been used as a medicinal plant for about 6,000 years. Its seeds smell and taste like maple syrup and are used as a spice and flavoring. Traditionally it was used as a tonic or laxative, for menstrual cramps, menopause symptoms and kidney stones, and to increase breast milk.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes fenugreek seed as a traditional herbal medicine for adults, taken by mouth for temporary loss of appetite, or put on the skin for minor skin inflammation.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research suggests fenugreek may help lower blood sugar in people with type 2 diabetes, but many studies weren't high quality. The evidence on menstrual cramps is of low quality, and studies on increasing breast milk have had mixed results.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small studies in people suggest fenugreek may lower blood fats and sugar or ease menopause symptoms, but larger, well-designed studies are needed. In the lab, it acted like estrogen and made breast cancer cells grow.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Don't take fenugreek during pregnancy in amounts larger than in food: it has been linked to a higher risk of birth defects in animals and people.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Animal studies showed harm to reproduction, including fertility. The European Medicines Agency doesn't recommend fenugreek medicines during pregnancy or breastfeeding, or for women who could become pregnant and aren't using contraception.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description:
        "Don't use fenugreek if you're allergic to it, to peanuts or soy, or to other plants in the pea and bean family. Allergic reactions, some serious, have included facial swelling, wheezing, asthma and hay fever symptoms.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Fenugreek can cause diarrhea, nausea, gas and dizziness. Large doses may cause a harmful drop in blood sugar.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't take fenugreek with warfarin (case reports suggest it may raise bleeding risk) or SSRI antidepressants (one case of serotonin syndrome).",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Because fenugreek may lower blood sugar, people being treated for diabetes should have their blood sugar monitored closely.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "People with hormone-sensitive cancers should check with their doctor before taking more than is found in food, because fenugreek acts like estrogen in the lab.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "May help lower blood sugar in type 2 diabetes, but many studies weren't high quality." },
    { slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional remedy for temporary loss of appetite." },
    { slug: "skin-irritation", notes: "Recognized in Europe as a traditional remedy, put on the skin, for minor skin inflammation." },
    { slug: "breast-milk-supply", notes: "Traditionally used to increase breast milk; studies have had mixed results." },
  ],
  preparations: [
    { slug: "tea-infusion", notes: "The whole or crushed seeds are made into an herbal tea.", source: "ema" },
    { slug: "powder", notes: "The powdered seeds are taken by mouth, or steeped in hot water to apply to the skin.", source: "ema" },
    { slug: "extract", notes: "Dry and soft extracts of the seeds are taken in solid forms such as tablets.", source: "ema" },
    { slug: "culinary-preparation", notes: "The seeds are used as a spice and as a maple-like flavoring in foods and drinks.", source: "nccih" },
  ],
});

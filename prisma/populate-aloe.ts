import { run } from "./lib/populate-herb";

// Aloe vera (Aloe vera), from NCCIH (updated February 2025). Family per Catalogue of Life.

run({
  name: "Aloe",
  profile: {
    family: "Asphodelaceae",
    genus: "Aloe",
    species: "vera",
    nativeRange: "Grown in hot, dry, subtropical regions worldwide, including the southern border areas of Texas, New Mexico, Arizona and California",
    partsUsed: "The leaf: the clear inner gel, the yellow latex under the skin, or the whole crushed leaf",
  },
  sources: {
    nccih: {
      title: "Aloe Vera: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/aloe-vera",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Aloe Vera", type: "COMMON_NAME" },
    { name: "Aloe barbadensis", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Aloe was used in ancient Greece, Rome, Babylonia and China, mainly for skin conditions and to help wounds heal, and was thought to prevent early graying of hair. Today the gel is promoted for use on the skin for acne, psoriasis, burns and skin damage from radiation, and aloe taken by mouth is promoted for weight loss, diabetes and inflammatory bowel disease.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people suggests:\n- Burns: aloe gel on the skin may speed healing and reduce pain\n- Acne: two small studies suggest aloe gel, used with other treatments, may help\n- A small amount of research suggests it may help genital herpes, lichen planus (an itchy rash), psoriasis, skin damage from radiation, and mouth sores\n- Diabetes: a small amount of research suggests aloe by mouth may lower blood sugar and HbA1c\n- Weight: in one small study, an aloe gel product taken for 8 weeks slightly reduced weight and body fat in adults with overweight and diabetes or prediabetes\nThere isn't enough reliable information on eczema, diabetic foot ulcers, irritable bowel syndrome or ulcerative colitis.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Aloe gel on the skin is generally well tolerated, though burning, itching, rash and eczema have occasionally been reported. Aloe gel by mouth for up to 42 days appears safe. Aloe latex by mouth can cause belly pain, cramps and diarrhea.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description:
        "Taking aloe leaf extracts by mouth, for as little as 3 weeks or as long as 5 years, has been linked to cases of sudden liver inflammation (acute hepatitis). The International Agency for Research on Cancer classes whole-leaf aloe vera extract that hasn't had its harsh compounds removed (non-decolorized) as a possible cause of cancer in humans, based on gut cancers in rats and mice.",
      source: "nccih",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In 2002, the US Food and Drug Administration required aloe latex to be removed from over-the-counter laxatives because of a lack of safety data. Products differ a lot: the inner gel, the latex and the whole crushed leaf have different effects and risks.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Overusing aloe latex may increase the risk of side effects from heart medicines called cardiac glycosides, such as digoxin. If you take any medicine, talk with your health care provider before using aloe.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Aloe gel, latex or whole-leaf extract taken by mouth may be unsafe during pregnancy and breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Aloe gel on the skin may speed burn healing and reduce burn pain." },
    { slug: "high-blood-sugar", notes: "A small amount of research suggests aloe by mouth may lower blood sugar in diabetes." },
    { slug: "skin-irritation", notes: "A small amount of research suggests aloe gel may help psoriasis, lichen planus and radiation skin damage." },
    { slug: "liver-safety-warnings", notes: "Aloe leaf extracts taken by mouth have been linked to cases of acute hepatitis." },
  ],
});

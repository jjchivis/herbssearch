import { run } from "./lib/populate-herb";

// Bladderwrack (Fucus vesiculosus), from the European Medicines Agency's
// Community herbal monograph (2014).

run({
  name: "Bladderwrack",
  profile: {
    family: "Fucaceae",
    genus: "Fucus",
    species: "vesiculosus",
    partsUsed: "The whole dried seaweed (thallus), powdered",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Fucus vesiculosus L., thallus (EMA/HMPC/313674/2012)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2014-05-06",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-fucus-vesiculosus-l-thallus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Fucus", type: "COMMON_NAME" },
    { name: "Bladder Wrack", type: "COMMON_NAME" },
    { name: "Rockweed", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "A traditional herbal medicine in the EU, used alongside a reduced-calorie diet to help weight loss." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bladderwrack is a brown seaweed. The European Medicines Agency recognises it as a traditional herbal medicine, based on long use rather than trials, to help overweight adults lose weight alongside a reduced-calorie diet, after a doctor has ruled out serious conditions.\n- The usual dose is 130 mg of the powdered seaweed twice a day, 2 hours before meals\n- If you haven't lost weight after 10 weeks, see a doctor or qualified practitioner",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Not recommended for anyone under 18. Don't take it with other bladderwrack products, iodine supplements or thyroid medicines.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety in pregnancy and breastfeeding hasn't been established, so it isn't recommended then.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description: "One person taking lithium for bipolar disorder developed an overactive thyroid while using bladderwrack.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "Taking more than the recommended amount can change thyroid hormone levels. Too much may cause:\n- Worse acne\n- A pounding or fast heartbeat\n- Trembling\n- Changes in blood pressure\nIn three women, 700 or 1,400 mg a day for several weeks lengthened their menstrual cycles.",
      source: "ema",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Goldenrod (Solidago virgaurea, European goldenrod), from the European
// Medicines Agency's Community herbal monograph on goldenrod herb (2008), plus
// traditional uses and safety from the Chestnut School of Herbal Medicine's goldenrod
// profile (Blankespoor, updated 2026-10-15), which cites Moerman's Native American
// Ethnobotany, Parkinson (1640) and Mills & Bone's Essential Guide to Herbal Safety.

run({
  name: "Goldenrod",
  profile: {
    family: "Asteraceae",
    genus: "Solidago",
    species: "virgaurea",
    partsUsed: "The flowering above-ground parts, as a tea, tincture or extract",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Solidago virgaurea L., herba",
      organization: "European Medicines Agency (EMEA), Committee on Herbal Medicinal Products",
      publicationDate: "2008-09-04",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-solidago-virgaurea-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    chestnut: {
      title: "Goldenrod Benefits: The Bee's Knees for Allergies, Sinus Infections, and Urinary Tract Infections",
      author: "Blankespoor J",
      organization: "Chestnut School of Herbal Medicine",
      publicationDate: "2026-10-15",
      url: "https://chestnutherbs.com/goldenrod-flower/",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "European Goldenrod", type: "COMMON_NAME" },
    { name: "Golden Rod", type: "COMMON_NAME" },
    { name: "Solidago", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy to increase urine flow in minor urinary complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises goldenrod as a traditional herbal medicine to increase the amount of urine, alongside treatment for minor urinary complaints, in adults and teenagers. This is based on long use alone. It's traditionally taken for 2 to 4 weeks.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Most goldenrod species are native to North America. More than a dozen Native American groups have used close to twenty species, on the skin for sores, infections, burns and wounds and for toothache, and internally for urinary, breathing and digestive problems; some tribes use the root. The Kawaiisu use a leaf decoction of California goldenrod on boils and sores. In Europe, European goldenrod was a folk remedy to lessen bleeding and diarrhoea and to heal wounds, earning it the name woundwort; in 1640 the herbalist John Parkinson called it one of the best wound herbs. The name Solidago means \"to make whole\".",
      source: "chestnut",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Herbalists today use goldenrod's leaves and flowers, as tea or tincture, for sinus congestion from allergies, colds and flu, for urinary tract infections (often with marshmallow root, corn silk and uva ursi), and for bloating and indigestion. As a gargle with sage it's used for sore throats. These uses come from herbal practice and haven't been tested in clinical trials.",
      source: "chestnut",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Make sure it's really goldenrod (Solidago) before using it. Some yellow-flowered look-alikes in the daisy family, such as ragwort and groundsel (Senecio and related plants), contain pyrrolizidine alkaloids that can cause permanent liver damage, sometimes with no symptoms for months. Use a local field guide.",
      source: "chestnut",
    },
    {
      category: "ALLERGY",
      description:
        "Rarely, goldenrod has caused allergic skin rashes after handling or taking it. Goldenrod is often blamed for hay fever, but its pollen is carried by insects rather than the wind; the usual culprit is ragweed, which flowers at the same time.",
      source: "chestnut",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use goldenrod if you're allergic to it or to other plants in the daisy family (Asteraceae), or if you've been told to drink less fluid because of severe heart or kidney disease. Don't take it with prescription water pills. Not recommended for children under 12.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "See a doctor if you get a fever, pain or difficulty when urinating, cramps or blood in your urine, or if symptoms don't improve. Drink enough fluids when taking extracts.\n\nTechnical detail: infusion 3–5 g, 2–4 times daily; liquid extract or tincture 0.5–2 ml, 3 times daily; dry extract 350–450 mg, 3 times daily.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Allergic reactions and stomach or gut upset may occur.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because there isn't enough data on its safety.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Used by herbalists for sinus congestion from allergies and colds. Not tested in trials." },
    { slug: "wounds-and-burns", notes: "A traditional Native American and European wound remedy. Not tested in trials." },
    { slug: "urinary-tract-infections", notes: "Recognised in Europe as a traditional remedy to increase urine flow alongside treatment for minor urinary complaints. Based on long use, not trials." },
  ],
});

import { run } from "./lib/populate-herb";

// Soybean (Glycine max), from NCCIH's soy fact sheet (2025). Family per GBIF.

run({
  name: "Soybean",
  profile: {
    family: "Fabaceae",
    genus: "Glycine",
    species: "max",
    nativeRange: "Long cultivated in Asia; now also grown elsewhere, including the United States",
    partsUsed: "The beans (seeds)",
  },
  sources: {
    nccih: {
      title: "Soy: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/soy",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Soy", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Soybeans have long been grown in Asia. Today soy is promoted for high cholesterol, high blood pressure, diabetes, menopause symptoms and many other conditions.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people suggests:\n- Cholesterol: eating soy protein instead of other proteins may lower cholesterol slightly; soy isoflavones may not\n- Hot flashes: isoflavone supplements or soy protein may make menopausal hot flashes less frequent and severe, but the effect may be small and results vary\n- Bones: isoflavones probably help bone density after menopause\n- Blood pressure: isoflavones may lower it a little\n- Diabetes: diets high in soy may be linked to a lower risk of type 2 diabetes; it's unclear whether soy helps blood sugar control in people who already have it\n- Memory and thinking: studies conflict",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In observational studies, Asian and Asian-American women who eat more soy have a lower risk of breast cancer. Western diets may contain too little soy to see this effect, and soy supplements haven't been shown to lower breast cancer risk.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Some people are allergic to soy. In the US, soy must be listed on the label of packaged foods and dietary supplements.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Soy can cause bloating, constipation, diarrhea and nausea. In studies, soy protein supplements were used safely for up to 16 weeks and concentrated isoflavone extracts for up to 6 months.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Soy foods high in tyramine, such as tofu and soy sauce, have caused dangerously high blood pressure in people taking MAO inhibitors, a group of antidepressants.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Soy may be unsafe during pregnancy in amounts larger than those found in food. Little is known about larger amounts while breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "Eating soy protein instead of other proteins may lower cholesterol slightly." },
    { slug: "menopause-symptoms", notes: "Soy isoflavones or protein may ease hot flashes a little; results vary." },
    { slug: "high-blood-pressure", notes: "Soy isoflavones may lower blood pressure a little." },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "Common soy foods include tofu, miso, tempeh, edamame and soy milk.", source: "nccih" },
    { slug: "capsule", notes: "Soy is also sold as dietary supplements containing soy protein, isoflavones or other parts of the bean.", source: "nccih" },
  ],
});

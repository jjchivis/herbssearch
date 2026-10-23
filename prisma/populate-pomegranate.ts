import { run } from "./lib/populate-herb";

// Pomegranate (Punica granatum), from NCCIH's pomegranate fact sheet (2025).
// Family per GBIF.

run({
  name: "Pomegranate",
  profile: {
    family: "Lythraceae",
    genus: "Punica",
    species: "granatum",
    nativeRange: "From the Middle East; now grown in the Mediterranean, Southeast Asia and the southwestern United States",
    partsUsed: "The fruit and juice",
  },
  sources: {
    nccih: {
      title: "Pomegranate: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/pomegranate",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Pomegranate was used in traditional medicine for intestinal worms, diarrhea, sore throat and other conditions. Today it's promoted for high blood pressure, heart disease and diabetes.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people, many using pomegranate juice rather than supplements, suggest:\n- Blood pressure: juice or extract may help lower it, but more research is needed\n- Blood sugar: it may lower it slightly\n- Cholesterol and other blood fats: no clear effects\nThere isn't enough research to say whether it helps any other condition.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Pomegranate juice is believed to be safe, and the extract may also be safe. The root, stem and peel may not be safe in large amounts, because they contain substances that can be harmful.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Side effects are uncommon, though some people get digestive symptoms.",
      source: "nccih",
    },
    { category: "ALLERGY", description: "Allergic reactions to pomegranate have been reported.", source: "nccih" },
    {
      category: "PREGNANCY",
      description:
        "Drinking pomegranate juice may be safe during pregnancy and breastfeeding. Little is known about other forms or other parts of the plant at these times.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "Pomegranate juice or extract may help lower blood pressure, but more research is needed." },
    { slug: "high-blood-sugar", notes: "Studies suggest pomegranate may lower blood sugar slightly." },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "Pomegranate is drunk as juice, which many studies have used.", source: "nccih" },
    { slug: "extract", notes: "Pomegranate extracts are sold as dietary supplements. It has also been used on the skin and as a gargle or mouthwash.", source: "nccih" },
  ],
});

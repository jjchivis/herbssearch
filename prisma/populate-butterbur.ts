import { run } from "./lib/populate-herb";

// Butterbur (Petasites hybridus), from NCCIH (2024). Family per GBIF.

run({
  name: "Butterbur",
  profile: {
    family: "Asteraceae",
    genus: "Petasites",
    species: "hybridus",
    nativeRange: "Europe and parts of Asia and North America",
    partsUsed: "The root and leaves, as extracts",
  },
  sources: {
    nccih: {
      title: "Butterbur: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/butterbur",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Butterbur is a shrub that grows in Europe and parts of Asia and North America. Its name comes from wrapping butter in its large leaves. In the Middle Ages, smoke from burning the roots was thought to fight plague. Today it's promoted for migraine, hay fever and other conditions.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A butterbur root extract may reduce how often migraines happen in adults and children. The American Academy of Neurology recommended it in 2012 but stopped in 2015 because of serious safety concerns.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies of a butterbur leaf extract suggest it may help hay fever (allergic rhinitis) symptoms. Too little research has been done to say whether it helps anything else.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The butterbur plant contains pyrrolizidine alkaloids (PAs), which can damage the liver and lungs and may cause cancer. Only use products processed to remove PAs and labeled or certified \"PA-free.\" Products containing PAs may not be safe on the skin either, since PAs could be absorbed through cuts or scrapes.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "PA-free products seemed safe taken by mouth for up to 16 weeks in studies, including some in children and teens, but there have been rare cases of liver injury with products said to be PA-free. Other side effects include belching, diarrhea, drowsiness, rash and upset stomach.",
      source: "nccih",
    },
    {
      category: "ALLERGY",
      description:
        "Butterbur may cause an allergic reaction in people allergic to related plants, such as ragweed, chrysanthemums, marigolds and daisies.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Don't use products that contain PAs during pregnancy: they can cause birth defects and liver damage. Little is known about whether PA-free products are safe in pregnancy.",
      source: "nccih",
    },
    {
      category: "BREASTFEEDING",
      description:
        "Don't use products that contain PAs while breastfeeding. Little is known about whether PA-free products are safe while breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "headache", notes: "A PA-free root extract may reduce how often migraines happen, but there are safety concerns." },
    { slug: "hay-fever", notes: "A leaf extract may help hay fever symptoms." },
  ],
  preparations: [
    { slug: "extract", notes: "Studies used a root extract for migraine and a leaf extract for hay fever, taken by mouth. Use only PA-free products.", source: "nccih" },
  ],
});

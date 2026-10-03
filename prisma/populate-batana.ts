import { run } from "./lib/populate-herb";

// Batana (Elaeis oleifera, American oil palm), from a medically reviewed WebMD
// article (2025). There are no published studies of batana oil for hair in
// people, and no regulatory monograph.

run({
  name: "Batana",
  profile: {
    family: "Arecaceae",
    genus: "Elaeis",
    species: "oleifera",
    nativeRange: "Tropical Latin America, from Mexico to Peru",
    partsUsed: "Oil from the nuts, put on the hair and scalp",
  },
  sources: {
    webmd: {
      title: "Batana Oil for Hair Growth",
      author: "Gascón A; medically reviewed by Gardner SS",
      organization: "WebMD",
      publicationDate: "2025-09-15",
      url: "https://www.webmd.com/beauty/batana-oil-hair-growth",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Batana Oil", type: "COMMON_NAME" },
    { name: "American Oil Palm", type: "COMMON_NAME" },
    { name: "American Palm Oil", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous people in Central America, including the Miskito of Honduras, have used batana oil for centuries to care for their hair and skin.",
      source: "webmd",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There's very little scientific research on batana oil. A dermatologist says it could, in theory, help with common male- or female-pattern hair loss, but there's no evidence that it reverses baldness. The oil contains fats and vitamin E-type compounds that moisturize hair.\n\nTechnical detail: contains carotenoids, tocopherols and tocotrienols, oleic acid and linoleic acid.",
      source: "webmd",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Scalp irritation has been reported but is rare. Heavy use can build up on the scalp and lead to inflamed hair follicles (folliculitis).",
      source: "webmd",
    },
    {
      category: "ALLERGY",
      description: "If you're allergic to nuts or palm oil, test a small patch of skin before using it.",
      source: "webmd",
    },
  ],
  symptoms: [
    {
      slug: "hair-loss",
      notes: "Traditionally used to care for hair. There's no good evidence that it regrows hair or reverses baldness.",
    },
  ],
});

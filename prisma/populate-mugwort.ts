import { run } from "./lib/populate-herb";

// Mugwort (Artemisia vulgaris), from a verified source: a review of its history,
// chemistry, pharmacology and safety (Ekiert et al. 2020). Family per GBIF /
// Catalogue of Life. Neither EMA nor ESCOP has published a monograph on it.

run({
  name: "Mugwort",
  profile: {
    family: "Asteraceae",
    genus: "Artemisia",
    species: "vulgaris",
    nativeRange: "Common almost all over the world",
    partsUsed: "The above-ground parts (herb); sometimes the root",
  },
  sources: {
    ekiert: {
      title: "Significance of Artemisia Vulgaris L. (Common Mugwort) in the History of Medicine and Its Possible Contemporary Applications Substantiated by Phytochemical and Pharmacological Studies",
      author: "Ekiert H, Pajor J, Klin P, Rzepiela A, Ślesak H, Szopa A",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2020-09-25",
      doi: "10.3390/molecules25194415",
      pmid: "32992959",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7583039/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Common Mugwort", type: "COMMON_NAME" },
    { name: "Mother of Herbs", type: "TRADITIONAL_NAME" },
    { name: "Moxa", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "In medieval Europe it was called the \"mother of herbs\" and used on wounds, for gout, leg tiredness, fever and stomach complaints." },
    { slug: "traditional-chinese-medicine", notes: "Dried leaves (moxa) are burned on or near the skin in moxibustion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Mugwort has been used since ancient Egypt, Greece and Rome, especially for menstrual and pregnancy-related complaints. In medieval Europe it was called the \"mother of herbs\" and was used on wounds, for gout and tired legs, for fever and for stomach and gut complaints. In traditional Chinese medicine, dried leaves (moxa) are burned on or close to the skin in a practice called moxibustion.",
      source: "ekiert",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Today mugwort isn't commonly used as a medicine. Its bitter taste has been used to stimulate digestion, and its essential oil is used in insect repellents. In cosmetics, it is used as a skin-care ingredient, skin protectant, moisturizer and fragrance.",
      source: "ekiert",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, mugwort extracts showed antioxidant, antibacterial, antifungal and pain-relieving effects, protected the liver, and eased cramps. A fermented mugwort extract increased collagen production in lab tests, which may explain its use in anti-aging cosmetics.",
      source: "ekiert",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people is limited. A review of trials found that moxibustion with mugwort, added to blood pressure medicines, lowered the top number of blood pressure more than medicines alone. The German Commission E noted in 1988 that mugwort's effectiveness hadn't been confirmed.",
      source: "ekiert",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Mugwort pollen is a major cause of hay fever and allergic asthma in northern Europe, North America and parts of Asia. It can also cause skin allergies such as rashes (dermatitis) and hives, and severe allergic reactions have occurred after swallowing the pollen. Avoid mugwort if you're allergic to it or to other daisy-family plants.",
      source: "ekiert",
    },
    {
      category: "ALLERGY",
      description:
        "People allergic to mugwort may also react to birch and grass pollen and to some foods, including cabbage, hazelnuts and honey.",
      source: "ekiert",
    },
    {
      category: "PREGNANCY",
      description: "In large doses, mugwort may cause miscarriage. Avoid it during pregnancy.",
      source: "ekiert",
    },
    {
      category: "TOXICITY",
      description:
        "Large doses may cause nausea, vomiting and nerve damage, and high blood pressure has been reported. Compounds in the essential oil (such as thujone and camphor) may be harmful in food or supplements, mainly in concentrated oil.",
      source: "ekiert",
    },
    {
      category: "CONTRAINDICATION",
      description: "Use mugwort with caution if you have diabetes, because it can raise blood sugar.",
      source: "ekiert",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "The smoke from burning moxa has been tested for harmful compounds like those found in cigarette smoke.",
      source: "ekiert",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Used on wounds in medieval European medicine. It hasn't been tested for wounds in people." },
    {
      slug: "skin-irritation",
      notes: "Used in skin-care cosmetics, but it can itself cause skin allergies such as rashes and hives.",
    },
    { slug: "menstrual-discomfort", notes: "Traditionally used since ancient times for menstrual complaints. Avoid in pregnancy." },
  ],
});

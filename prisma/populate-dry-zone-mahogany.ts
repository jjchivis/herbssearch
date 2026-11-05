import { run } from "./lib/populate-herb";

// Dry Zone Mahogany (Khaya senegalensis, African mahogany), from a 2026 rat
// study of its stem bark for diarrhea (Hounsa et al.), a 2026 review of Benin
// medicinal plants (Hounsa et al.) and a 2026 wound-healing study of its leaves
// (Mohd Khamil et al.), and a 2022 review of its phytochemistry and
// pharmacology (Tyoapine et al.). Family per GBIF.

run({
  name: "Dry Zone Mahogany",
  profile: { family: "Meliaceae", genus: "Khaya", species: "senegalensis", nativeRange: "Sub-Saharan Africa", partsUsed: "The stem bark and leaves" },
  sources: {
    hounsaDiarrhea: {
      title: "In-vivo antidiarrheal activity of aqueous and hydroethanolic extracts of Anacardium occidentale and Khaya senegalensis used in Benin (West Africa) in a castor oil-induced diarrhea model traditionally",
      author: "Hounsa E, Fagla SM, Agbodjento E, Klotoe JR, Dougnon VT",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-06-11",
      doi: "10.3389/fphar.2026.1812204",
      pmid: "42358373",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13293577/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hounsaReview: {
      title: "Traditional medicinal knowledge and diversity of medicinal plants in Benin: a systematic review (2014-2023)",
      author: "Hounsa E, Reigada I, Assogba P, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2026-06-25",
      doi: "10.1186/s12906-026-05440-0",
      pmid: "42351099",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13556067/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    khamil: {
      title: "Bioassay-guided fractionation and identification of wound healing active compounds from Khaya senegalensis leaves",
      author: "Mohd Khamil AN, Nordin N, Rosdi MAA, et al.",
      journal: "PLoS One",
      publicationDate: "2026-02-02",
      doi: "10.1371/journal.pone.0339051",
      pmid: "41628240",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863557/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tyoapine: {
      title: "A Review of the Phytochemistry and Pharmacology of the Medicinal Plant: Khaya Senegalensis (Desr.) A. Juss",
      author: "Tyoapine DA, Victory PC, Yusuf A, Badamasi AM",
      journal: "International Journal of Research Publication and Reviews",
      publicationDate: "2022-08-01",
      doi: "10.55248/gengpi.2022.3.8.41",
      url: "https://doi.org/10.55248/gengpi.2022.3.8.41",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "African Mahogany", type: "COMMON_NAME" },
    { name: "Madaci", type: "REGIONAL_NAME", region: "Nigeria (Hausa)" },
    { name: "Ono", type: "REGIONAL_NAME", region: "Nigeria (Igbo)" },
    { name: "Oganwon", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
    { name: "Chiha", type: "REGIONAL_NAME", region: "Nigeria (Tiv)" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Stem bark decoctions used across West Africa for diarrhea, malaria and fever." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A decoction of the stem bark is used for diarrhea with mucus, malaria, fever, venereal diseases and hookworm.",
      source: "hounsaDiarrhea",
    },
    {
      category: "TRADITIONAL",
      summary: "In Benin it's among the plants used for snakebite, though few studies have looked at this use.",
      source: "hounsaReview",
    },
    {
      category: "TRADITIONAL",
      summary: "Valued for its timber, the tree's leaves are also used in traditional wound care.",
      source: "khamil",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a stem bark extract delayed and reduced diarrhea, working about as well as loperamide (Imodium) on some measures.",
      source: "hounsaDiarrhea",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, compounds from the leaves helped human skin cells close scratch wounds and weren't harmful to skin cells.",
      source: "khamil",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Across tropical Africa it's also used for dysentery, wound infections, diabetes, high blood pressure, jaundice, skin problems, scorpion stings, mental illness, leprosy, infertility, headache, syphilis, gum infections and allergies, and as a laxative and aphrodisiac.",
      source: "tyoapine",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rat studies reviewed in 2022, bark extracts protected the liver from chemical damage, reduced stomach ulcers, swelling and pain, and reduced seizures and anxiety. In sheep, a bark extract cut worm egg counts by about 89%. In lab tests, the stem bark was strongly active against malaria parasites.",
      source: "tyoapine",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In rats, a water extract of the stem bark taken for 21 days lowered red blood cells and hemoglobin, and another study suggested it may harm vital organs, so long-term use may be harmful.",
      source: "tyoapine",
    },
    { category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "hounsaReview" },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional West African diarrhea remedy; a bark extract worked about as well as loperamide in rats. Not tested in people." },
    { slug: "fever", notes: "Used traditionally for malaria and fever. Not studied in people." },
  ],
});

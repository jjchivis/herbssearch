import { run } from "./lib/populate-herb";

// Indian Gum, babul (Vachellia nilotica, syn. Acacia nilotica), from a 2025
// review of African Acacia species in animal health (Msimango et al.), a 2026
// lab study of its fruit (Abdul-Hafeez et al.), a 2020 study of its gum as a
// medicine binder (Abrar et al.) and a 2013 rat fertility study (Lampiao).
// Family per GBIF.

run({
  name: "Indian Gum",
  profile: {
    family: "Fabaceae",
    genus: "Vachellia",
    species: "nilotica",
    nativeRange: "Africa, the Middle East and the Indian subcontinent",
    partsUsed: "The gum, bark, pods and fruit",
  },
  sources: {
    msimango: {
      title: "Ethnoveterinary Potential of Acacia (Vachellia and Senegalia) Species for Managing Livestock Health in Africa: From Traditional Uses to Therapeutic Applications",
      author: "Msimango NNP, Aremu AO, Amoo SO, Masondo NA",
      journal: "Plants",
      publicationDate: "2025-10-09",
      doi: "10.3390/plants14193107",
      pmid: "41095247",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12526939/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    abdulHafeez: {
      title: "Selective anticancer activity of Vachellia nilotica fruit extract: integrated phytochemistry with antioxidant, antimicrobial, and cancer cell targeting",
      author: "Abdul-Hafeez EY, Ibrahim OHM, Alfheeaid HA, Barakat H",
      journal: "Frontiers in Nutrition",
      publicationDate: "2026-04-07",
      doi: "10.3389/fnut.2026.1799072",
      pmid: "42022553",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13095839/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    abrar: {
      title: "Formulation and evaluation of microsphere of antiulcer drug using Acacia nilotica gum",
      author: "Abrar A, Yousuf S, Dasan MK",
      journal: "International Journal of Health Sciences",
      publicationDate: "2020-03-01",
      pmid: "32206055",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7069659/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lampiao: {
      title: "The Anti-fertility Effects of Acacia nilotica in Male Wistar Rats",
      author: "Lampiao F",
      journal: "Journal of Reproduction & Infertility",
      publicationDate: "2013-01-01",
      pmid: "23926560",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3719366/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Babul", type: "COMMON_NAME" },
    { name: "Acacia nilotica", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "The most widely used acacia for treating livestock in Africa." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The fruit, bark and pods of babul have long been used in traditional medicine. They are rich in tannins.",
      source: "abdulHafeez",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Africa, babul is the most widely used acacia for treating livestock, against infections, inflammation and parasites.",
      source: "msimango",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a fruit extract was a strong antioxidant, killed some bacteria and fungi, and harmed breast, prostate and bowel cancer cells more than normal cells.",
      source: "abdulHafeez",
    },
    {
      category: "PRECLINICAL",
      summary: "Babul gum swells and binds well, and has been tested as a natural ingredient for making slow-release medicine beads.",
      source: "abrar",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In male rats given babul for 16 weeks, sperm count and movement fell and testosterone dropped. Sperm didn't recover after it was stopped.",
      source: "lampiao",
    },
  ],
});

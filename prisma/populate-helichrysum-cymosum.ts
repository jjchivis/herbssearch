import { run } from "./lib/populate-herb";

// Helichrysum cymosum (gold carpet, yellow-tipped strawflower), from a 2021
// review of South African Helichrysum species (Akinyede et al.) and a 2022
// review of Helichrysum and diabetes (Akinfenwa et al.). No human studies were
// found. Family per GBIF.

run({
  name: "Helichrysum Cymosum",
  profile: {
    family: "Asteraceae",
    genus: "Helichrysum",
    species: "cymosum",
    nativeRange: "South Africa (Eastern Cape, KwaZulu-Natal and Western Cape)",
    partsUsed: "The above-ground parts, leaves and roots",
  },
  sources: {
    akinyede: {
      title: "Medicinal Properties and In Vitro Biological Activities of Selected Helichrysum Species from South Africa: A Review",
      author: "Akinyede KA, Cupido CN, Hughes GD, Oguntibeju OO, Ekpo OE",
      journal: "Plants",
      publicationDate: "2021-07-30",
      doi: "10.3390/plants10081566",
      pmid: "34451611",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8398148/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akinfenwa: {
      title: "Helichrysum Genus and Compound Activities in the Management of Diabetes Mellitus",
      author: "Akinfenwa AO, Sagbo IJ, Makhaba M, Mabusela WT, Hussein AA",
      journal: "Plants",
      publicationDate: "2022-05-23",
      doi: "10.3390/plants11101386",
      pmid: "35631811",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9143910/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gold Carpet", type: "COMMON_NAME" },
    { name: "Yellow-Tipped Strawflower", type: "COMMON_NAME" },
    { name: "Goue Tapyt", type: "REGIONAL_NAME", region: "South Africa (Afrikaans)" },
    { name: "Imphepho", type: "REGIONAL_NAME", region: "South Africa (isiXhosa)" },
  ],
  constituents: [{ name: "Helihumulone", slug: "helihumulone", type: "phloroglucinol" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Used in South Africa for coughs, colds, fever, menstrual pain and wounds." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In South Africa, gold carpet is used for coughs, catarrh, colds, chest problems, whooping cough, headache, fever, menstrual pain, wind, wounds and skin infections, and to boost immunity and appetite.",
      source: "akinyede",
    },
    {
      category: "TRADITIONAL",
      summary: "A tea of the plant is also drunk in South Africa for diabetes.",
      source: "akinfenwa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, its essential oil was strongly active against the malaria parasite, though much weaker than the drugs quinine and chloroquine. A compound from the plant, helihumulone, was active against Candida and Cryptococcus fungi, and the oil was a strong antioxidant. The oil didn't work against the bacteria tested.",
      source: "akinyede",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In lab tests, the essential oil was the most toxic of the plant's extracts to kidney cells.",
      source: "akinyede",
    },
  ],
});

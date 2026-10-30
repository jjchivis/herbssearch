import { run } from "./lib/populate-herb";

// Prekese, Aidan fruit (Tetrapleura tetraptera), from a 2024 rodent safety
// study of its fruit (Ekeanyanwu et al.) and a 2025 case report of liver and
// kidney injury from a product containing it (Zacharia et al.). Family per GBIF.

run({
  name: "Prekese",
  profile: {
    family: "Fabaceae",
    genus: "Tetrapleura",
    species: "tetraptera",
    nativeRange: "West Africa",
    partsUsed: "The dried fruit (pod)",
  },
  sources: {
    ekeanyanwu: {
      title: "Unveiling phytochemical diversity and safety profile of hot water extract from Tetrapleura tetraptera fruit",
      author: "Ekeanyanwu CR, Nkwocha CC, Ekeanyanwu CL",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2024-10-23",
      doi: "10.1186/s12906-024-04681-1",
      pmid: "39443881",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11520151/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zacharia: {
      title: "Complementary and Alternative Medicine-Induced Combined Hepatorenal Toxicity: A Case Report",
      author: "Zacharia GS, Ravte V, Jyala A, Shehi E",
      journal: "Cureus",
      publicationDate: "2025-12-27",
      doi: "10.7759/cureus.100197",
      pmid: "41602262",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12834359/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Aidan Fruit", type: "COMMON_NAME" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "A widely used medicinal fruit in West Africa." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Prekese is a widely used medicinal plant in West Africa, traditionally taken for various ailments.",
      source: "ekeanyanwu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice and rats, a hot water extract of the fruit caused no poisoning, even at high doses. It contains compounds that may calm the nervous system, which researchers want to study further.",
      source: "ekeanyanwu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A man who took an herbal product containing prekese, Alstonia boonei and papaya extracts for fatty liver developed serious liver and kidney damage, which improved after he stopped. Prekese extracts have been linked to liver damage in animal studies.",
      source: "zacharia",
    },
  ],
});

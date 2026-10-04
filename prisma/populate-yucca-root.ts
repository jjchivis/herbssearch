import { run } from "./lib/populate-herb";

// Yucca Root (Yucca schidigera, Mojave yucca), from a 2006 review of its
// anti-inflammatory and anti-arthritic effects (Cheeke et al.).

run({
  name: "Yucca Root",
  profile: {
    family: "Asparagaceae",
    genus: "Yucca",
    species: "schidigera",
    nativeRange: "The deserts of the southwestern United States and northern Mexico",
    partsUsed: "The plant, as a powder or extract; tablets of whole-plant powder are sold as supplements",
  },
  sources: {
    cheeke: {
      title: "Anti-inflammatory and anti-arthritic effects of Yucca schidigera: a review",
      author: "Cheeke PR, Piacente S, Oleszek W",
      journal: "Journal of Inflammation",
      publicationDate: "2006-03-29",
      doi: "10.1186/1476-9255-3-6",
      pmid: "16571135",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1440857/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mojave Yucca", type: "COMMON_NAME" },
    { name: "Yucca", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used by Native Americans for arthritis and other ailments." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans used yucca for a variety of ailments, including arthritis. Today it's sold as a supplement for arthritis, used as a commercial source of saponins, and added to animal feed. Yucca products are generally recognised as safe for use in food in the US.",
      source: "cheeke",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Yucca is rich in saponins (natural soap-like compounds) and in antioxidants such as resveratrol. In lab studies, these compounds may help reduce inflammation.",
      source: "cheeke",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The only studies of yucca for arthritis in people are old reports by one researcher, who found that yucca tablets eased pain and swelling. They were published in an obscure journal and haven't been accepted as valid by arthritis researchers. A separate study found dietary yucca extract lowered total and LDL (\"bad\") cholesterol in people with high cholesterol.",
      source: "cheeke",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Traditionally used for arthritis. The only studies in people are old and not widely accepted." },
    { slug: "high-cholesterol", notes: "One study found dietary yucca extract lowered total and LDL cholesterol in people with high cholesterol." },
  ],
});

import { run } from "./lib/populate-herb";

// Gungo Peas (Cajanus cajan, pigeon pea), from a 2015 review of its flavonoids
// and importance as a food crop (Nix et al., SpringerPlus) and a 2025 review of
// its leaves in Chinese medicine (Wang et al., Chem Biodivers).

run({
  name: "Gungo Peas",
  profile: {
    family: "Fabaceae",
    genus: "Cajanus",
    species: "cajan",
    partsUsed: "The peas (seeds) are eaten. The leaves are used in Chinese medicine.",
  },
  sources: {
    nix: {
      title: "The flavonoid profile of pigeonpea, Cajanus cajan: a review",
      author: "Nix A, Paull CA, Colgrave M",
      journal: "SpringerPlus",
      organization: "SpringerPlus",
      publicationDate: "2015-03-13",
      doi: "10.1186/s40064-015-0906-x",
      pmid: "25815247",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4365078/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Cajanus cajan (L.) Millsp. Leaves: A Comprehensive Review of Phytochemistry, Pharmacological Properties, Safety, and Clinical Applications",
      author: "Wang X, Yang W, Zhang R, He Q, Feng L, Yang J, Zhang H, Chen B, Chen P, Wang Z",
      journal: "Chemistry & Biodiversity",
      organization: "Chemistry & Biodiversity",
      publicationDate: "2025-04-03",
      doi: "10.1002/cbdv.202500137",
      pmid: "40088191",
      url: "https://doi.org/10.1002/cbdv.202500137",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pigeon Pea", type: "COMMON_NAME" },
    { name: "Pigeonpea", type: "COMMON_NAME" },
    { name: "Gungo Pea", type: "REGIONAL_NAME", region: "Jamaica" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "The leaves are a well-known Chinese medicine for bone conditions such as osteoporosis and osteonecrosis." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Pigeon pea is the sixth-largest grain legume crop in the world by volume, and a major food for people and livestock.",
      source: "nix",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The leaves are a well-known traditional Chinese medicine for bone conditions, including osteoporosis (thinning bones) and osteonecrosis (bone tissue dying from poor blood supply). For over 40 years, Chinese hospitals have used a leaf preparation for osteonecrosis of the hip and infections linked to osteoarthritis.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies have found 27 flavonoids in different parts of the plant. The reviewers say there are still gaps in research on its natural compounds.",
      source: "nix",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review reported that extracts and compounds from the leaves showed a range of effects in lab and animal studies.\n\nTechnical detail: constituents include flavonoids, flavonoid glycosides, stilbenes, flavonostilbenes, steroids and triterpenoids.",
      source: "wang",
    },
  ],
  symptoms: [
    {
      slug: "joint-discomfort",
      notes: "The leaves are used in Chinese medicine for bone and joint conditions. Gungo peas as food haven't been studied for this.",
    },
  ],
});

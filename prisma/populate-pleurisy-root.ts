import { run } from "./lib/populate-herb";

// Pleurisy root (Asclepias tuberosa), from verified sources: a historical review
// mentioning its traditional use (Garcia 2020) and two case reports of eye
// injury from its sap (Mikkelsen et al. 2017; Lu et al. 2026). Family per GBIF /
// Catalogue of Life. No studies in people were found.

run({
  name: "Pleurisy Root",
  profile: {
    family: "Apocynaceae",
    genus: "Asclepias",
    species: "tuberosa",
    partsUsed: "The root",
  },
  sources: {
    garcia: {
      title: "Pandemics and Traditional Plant-Based Remedies. A Historical-Botanical Review in the Era of COVID19",
      author: "Garcia S",
      journal: "Frontiers in Plant Science",
      organization: "Frontiers in Plant Science",
      publicationDate: "2020-08-28",
      doi: "10.3389/fpls.2020.571042",
      pmid: "32983220",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7485289/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mikkelsen: {
      title: "Corneal Toxicity Following Exposure to Asclepias Tuberosa",
      author: "Mikkelsen LH, Hamoudi H, Gül CA, Heegaard S",
      journal: "The Open Ophthalmology Journal",
      organization: "The Open Ophthalmology Journal",
      publicationDate: "2017-01-31",
      doi: "10.2174/1874364101711010001",
      pmid: "28400886",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5362972/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lu: {
      title: "Toxic Keratoconjunctivitis from Milkweed (Asclepias tuberosa) Exposure in a Contact Lens Wearer",
      author: "Lu A, St Clair J, TenHulzen RD",
      journal: "The Journal of Emergency Medicine",
      organization: "The Journal of Emergency Medicine",
      publicationDate: "2026-03-06",
      doi: "10.1016/j.jemermed.2026.03.001",
      pmid: "41903404",
      url: "https://pubmed.ncbi.nlm.nih.gov/41903404/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Milkweed", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Cardiac glycosides (cardenolides)", slug: "cardenolides", type: "cardiac glycoside" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Pleurisy root has traditionally been used to treat breathing problems and to help bring up mucus. Despite its long history of use, there is little research on it.",
      source: "garcia",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The plant contains cardiac glycosides, compounds that block the pumps moving sodium and potassium in and out of cells.",
      source: "lu",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Its milky sap can seriously injure the eyes. A 70-year-old woman got blurred vision and eye pain after handling the plant; the swelling of her cornea cleared after about 4 days of treatment and her sight fully recovered.",
      source: "mikkelsen",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "A gardener who wore contact lenses lost most of her sight hours after handling the plant. It was first mistaken for simple conjunctivitis, and improved quickly with steroid and antibiotic treatment.",
      source: "lu",
    },
  ],
  symptoms: [
    {
      slug: "chest-congestion",
      notes: "Traditionally used for breathing problems and to loosen mucus. There's little research, and it contains heart-affecting compounds.",
    },
  ],
});

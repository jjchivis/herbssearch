import { run } from "./lib/populate-herb";

// Starlight Dancer (Nicotiana langsdorffii), a tobacco species. No medicinal
// research on this species was found, so at the site owner's request this page
// summarizes a 2024 review of its most-studied relative, common tobacco
// (Nicotiana tabacum), supplied by the site owner, and says so clearly.
// Family per GBIF.

run({
  name: "Starlight Dancer",
  profile: {
    family: "Solanaceae",
    genus: "Nicotiana",
    species: "langsdorffii",
    partsUsed: "No medicinal use of this species is documented",
  },
  sources: {
    zhang: {
      title: "Phytochemicals derived from Nicotiana tabacum L. plant contribute to pharmaceutical development",
      author: "Zhang W, Pan X, Fu J, Cheng W, Lin H, Zhang W, Huang Z",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-04-12",
      doi: "10.3389/fphar.2024.1372456",
      pmid: "38681197",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11045950/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "No medicinal research on Starlight Dancer itself was found. The information on this page is about its relative, common tobacco (Nicotiana tabacum), and may not apply to this plant.\n\nNative Americans regarded tobacco as a holy herb and used it for many ailments, including bronchitis, toothache, sore throat, headache, colds, burns, arthritis, skin problems and insect bites. Chinese herbal texts record it for pain, swelling, skin conditions and snakebite.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, compounds from common tobacco have shown effects including:\n- nicotine protected nerve cells in models of Alzheimer's and Parkinson's disease, reduced inflammation and lowered body weight\n- solanesol acted as an antioxidant and reduced inflammation\n- cembranoids slowed some cancer cells and fought bacteria and fungi\n- tobacco seed oil lowered blood fats in rats\nThe review stresses that this is not a reason to smoke, because tobacco smoke contains cancer-causing chemicals.",
      source: "zhang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In small studies of people with ulcerative colitis, nicotine patches combined with standard treatment worked better than standard treatment alone. But the number of people studied was small, and nicotine trials for colitis were stopped.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Nicotine, tobacco's main compound, is addictive and toxic in high doses. Tobacco smoke contains cancer-causing chemicals. This information is for common tobacco; no safety research on Starlight Dancer was found.",
      source: "zhang",
    },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "A tobacco plant; tobacco's nicotine is addictive and toxic in high doses." },
  ],
});

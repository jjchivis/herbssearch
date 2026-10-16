import { run } from "./lib/populate-herb";

// Red Peony Root (Radix Paeoniae Rubra, chi shao, from Paeonia lactiflora), from
// a 2020 review comparing red and white peony root (Tan et al.).

run({
  name: "Red Peony Root",
  profile: {
    family: "Paeoniaceae",
    genus: "Paeonia",
    species: "lactiflora",
    partsUsed: "The dried root",
  },
  sources: {
    tan: {
      title: "Efficacy, Chemical Constituents, and Pharmacological Actions of Radix Paeoniae Rubra and Radix Paeoniae Alba",
      author: "Tan YQ, Chen HW, Li J, Wu QJ",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2020-07-10",
      doi: "10.3389/fphar.2020.01054",
      pmid: "32754038",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7365904/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chi Shao", type: "TRADITIONAL_NAME" },
    { name: "Chishao", type: "TRADITIONAL_NAME" },
    { name: "Radix Paeoniae Rubra", type: "COMMON_NAME" },
    { name: "Paeoniae Radix Rubra", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called chi shao; a \"heat-clearing, blood-cooling\" herb used to relieve \"blood stasis\" and pain, for nosebleeds, sore eyes, period pain and injuries." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Red and white peony root come from the same plant, Paeonia lactiflora. Chinese physicians began treating them as separate medicines in the Northern Song Dynasty (960–1127 AD). Red peony root is described as slightly cold and bitter, and is used to \"clear heat and cool the blood\" and relieve \"blood stasis\" and pain, for:\n- Rashes and nosebleeds from \"blood heat\"\n- Painful, swollen eyes and cloudy vision\n- Pain under the ribs\n- Period pain\n- Injuries",
      source: "tan",
    },
    {
      category: "PRECLINICAL",
      summary: "In animal studies, red peony root protected the liver, improved blood flow in small vessels, widened blood vessels, protected the heart during reduced blood flow, thinned the blood and slowed clotting. Its main compound, paeoniflorin, is thought to be largely responsible. These haven't been confirmed in people.",
      source: "tan",
    },
  ],
  symptoms: [
    { slug: "menstrual-discomfort", notes: "A traditional Chinese herb for period pain. Not tested on its own in trials." },
    { slug: "sprains-and-bruises", notes: "Traditionally used for injuries and \"blood stasis\". Not tested on its own in trials." },
  ],
});

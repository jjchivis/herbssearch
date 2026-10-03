import { run } from "./lib/populate-herb";

// Chaney Root (Smilax balbisiana, also spelled chany or chainy root), from a
// review of Jamaican medicinal plants (Lowe et al. 2021). No studies of this
// species in people or animals were found in verified sources.

run({
  name: "Chaney Root",
  profile: {
    family: "Smilacaceae",
    genus: "Smilax",
    species: "balbisiana",
    nativeRange: "Jamaica",
    partsUsed: "The root, soaked and then boiled into a tea or tonic",
  },
  sources: {
    lowe: {
      title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds",
      author: "Lowe H, Steele B, Bryant J, Fouad E, Toyang N, Ngwa W",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-01-01",
      doi: "10.3390/molecules26030607",
      pmid: "33503834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chany Root", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Chainy Root", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Jamaican Sarsaparilla", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "A key ingredient in Jamaican \"root tonic\" (strong back), and brewed as a tea for colds and flu." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chaney root is one of the main plants in Jamaican \"root tonic\", also called \"strong back\". This is a boiled drink of several roots and herbs, including sarsaparilla, ginger and strong back leaf. Men commonly drink it for impotence and to increase stamina.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, chaney root is also used for colds and flu. The roots are soaked first, then brewed in water for about 10 minutes and sweetened to taste. Its use for colds rests on personal experience, not research.",
      source: "lowe",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Like other homemade root drinks, chaney root tea can carry pesticide residues or germs, so the plant should be grown and handled cleanly. Reported side effects for these teas are generally mild, such as bloating, nausea, upset stomach, diarrhea and dizziness.",
      source: "lowe",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Traditionally brewed as a tea for colds and flu in Jamaica. Not studied in people." },
    { slug: "sexual-health", notes: "A main ingredient in Jamaican root tonic, which men traditionally drink for impotence and stamina. Not studied in people." },
  ],
});

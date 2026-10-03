import { run } from "./lib/populate-herb";

// Sarsaparilla (Smilax ornata), from a review of Jamaican medicinal plants
// (Lowe et al. 2021) and a 2026 review of the genus Smilax (Sukhramani &
// Choudhary, S Afr J Bot). Research on the genus is mostly lab and animal work.

run({
  name: "Sarsaparilla",
  profile: {
    family: "Smilacaceae",
    genus: "Smilax",
    species: "ornata",
    partsUsed: "The root, boiled into tonics and roots drinks",
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
    sukhramani: {
      title: "The genus Smilax L.: A comprehensive review of traditional uses, phytochemistry, pharmacological activities, and toxicity",
      author: "Sukhramani G, Choudhary RK",
      journal: "South African Journal of Botany",
      organization: "South African Journal of Botany",
      publicationDate: "2026-03-01",
      url: "https://www.sciencedirect.com/journal/south-african-journal-of-botany/vol/190",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Sarsaparilla Root", type: "COMMON_NAME" }],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in Jamaica for colds and flu, and as one of the roots in the \"strong back\" roots tonic." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, sarsaparilla is one of the plants used most often for colds and flu. It's also one of the roots boiled into the \"roots tonic\" or \"strong back\" drink, which men commonly use for impotence and stamina.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Sarsaparilla plants (the genus Smilax) have been used for centuries for diabetes, gout, rheumatism, skin problems and syphilis. The root is the main part used.",
      source: "sukhramani",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2026 review reported more than 1,000 natural compounds found in sarsaparilla plants. In lab and animal studies, they showed effects against cancer cells, diabetes, inflammation, germs and viruses, as antioxidants, on the immune system, and protecting the liver. The reviewers say most findings are preliminary and studies in people are needed.\n\nTechnical detail: at least 1058 compounds, including flavonoids, phenolic acids, steroidal saponins, polysaccharides and stilbenoids.",
      source: "sukhramani",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "seasonal-immune-support", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "sexual-health", notes: "One of the roots in Jamaica's \"strong back\" tonic, used by men for impotence and stamina." },
    { slug: "joint-discomfort", notes: "Sarsaparilla plants have traditionally been used for gout and rheumatism." },
    { slug: "skin-irritation", notes: "Sarsaparilla plants have traditionally been used for skin problems." },
  ],
});

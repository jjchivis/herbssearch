import { run } from "./lib/populate-herb";

// Strong Back Root (Morinda royoc, called "redgal" in Jamaica and used in the
// "strong back" roots tonic), from a review of Jamaican medicinal plants (Lowe
// et al. 2021) and a lab study of its root against Giardia (Quintal-Novelo et
// al. 2022). No studies in people, or of its safety, were found.

run({
  name: "Strong Back Root",
  profile: {
    family: "Rubiaceae",
    genus: "Morinda",
    species: "royoc",
    partsUsed: "The root, boiled with other roots into a tonic",
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
    quintal: {
      title: "A Morinda royoc Root Extract and Fractions Exhibit Antigiardial Activity without Affecting Cell Viability",
      author: "Quintal-Novelo C, Valencia-Chan L, Chávez-González A, Rangel-Méndez J, Moo-Puc R",
      journal: "Iranian Journal of Parasitology",
      organization: "Iranian Journal of Parasitology",
      publicationDate: "2022-04-01",
      doi: "10.18502/ijpa.v17i2.9544",
      pmid: "36032741",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9363243/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Redgal", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Strong Back", type: "REGIONAL_NAME", region: "Jamaica" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "One of the roots in Jamaica's \"strong back\" roots tonic, used by men for impotence and stamina." },
    { slug: "native-american-ethnobotany", notes: "Used in traditional Mayan medicine for stomach and bowel pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, Morinda royoc (redgal) is one of the plants boiled into a \"roots tonic\" or \"strong back\" drink. Men commonly use this drink for impotence and to increase stamina. Other plants in the mix include chany root, sarsaparilla, ginger, medina, tick clover, ramoon and nerve west.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary: "It's used in traditional Mayan medicine for stomach and bowel pain.",
      source: "quintal",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract of the root killed Giardia, a gut parasite that causes diarrhea. The extract didn't harm human blood cells in the lab. It hasn't been tested in animals or people.\n\nTechnical detail: hexane fraction of a methanol root extract, IC50 0.08 µg/mL against G. lamblia trophozoites; main compound an anthraquinone; no toxicity to HL-60, K562 or human mononuclear cells.",
      source: "quintal",
    },
  ],
  symptoms: [
    { slug: "sexual-health", notes: "Part of Jamaica's \"strong back\" roots tonic for impotence and stamina. This use hasn't been tested in research." },
    { slug: "sibo-and-parasites", notes: "In lab tests, a root extract killed the gut parasite Giardia. It hasn't been tested in people." },
  ],
});

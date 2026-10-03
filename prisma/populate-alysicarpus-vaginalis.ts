import { run } from "./lib/populate-herb";

// Alysicarpus Vaginalis (medina), from a review of Jamaican medicinal plants
// (Lowe et al. 2021) and a 2019 lab and rat study (Sakle et al.). No studies in
// people were found.

run({
  name: "Alysicarpus Vaginalis",
  profile: {
    family: "Fabaceae",
    genus: "Alysicarpus",
    species: "vaginalis",
    partsUsed: "The plant, boiled with other roots and herbs into a tonic",
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
    sakle: {
      title: "Chemomodulatory effects of Alysicarpus vaginalis extract via mitochondria-dependent apoptosis and necroptosis in breast cancer",
      author: "Sakle NS, More SA, Mokale SN",
      journal: "Nutrition and Cancer",
      publicationDate: "2019-10-21",
      doi: "10.1080/01635581.2019.1670855",
      pmid: "31630563",
      url: "https://pubmed.ncbi.nlm.nih.gov/31630563/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Medina", type: "REGIONAL_NAME", region: "Jamaica" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Called medina; one of the herbs in Jamaican \"root tonic\" (strong back)." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, medina is one of the plants boiled into \"root tonic\", also called \"strong back\", along with chaney root, sarsaparilla, ginger and others. Men commonly drink it for impotence and to increase stamina.",
      source: "lowe",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract slowed the growth of breast cancer cells. In rats with breast tumors, it reduced tumor growth by about half.\n\nTechnical detail: ethyl acetate fraction; maximum growth inhibition of MCF-7 cells 27.12% at 100 µg/ml; 50% tumor inhibition in MNU-induced mammary carcinoma in rats.",
      source: "sakle",
    },
  ],
  symptoms: [
    { slug: "sexual-health", notes: "An ingredient in Jamaican root tonic, which men traditionally drink for impotence and stamina. Not studied in people." },
  ],
});

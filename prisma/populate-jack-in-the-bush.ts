import { run } from "./lib/populate-herb";

// Jack in the Bush (Chromolaena odorata, formerly Eupatorium odoratum), from a
// review of Jamaican medicinal plants (Lowe et al. 2021), Vandebroek &
// Picking's book on popular medicinal plants in Jamaica (2020), a 2022 review
// of its biological activities (Olawale et al.), a 2023 lab study from Nepal
// (Budha Magar et al.) and a study finding pyrrolizidine alkaloids in its roots
// (Dube et al. 2021).

run({
  name: "Jack in the Bush",
  profile: {
    family: "Asteraceae",
    genus: "Chromolaena",
    species: "odorata",
    partsUsed: "The leaves, usually made into a tea",
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
    vandebroek: {
      title: "Popular Medicinal Plants in Portland and Kingston, Jamaica",
      author: "Vandebroek I, Picking D",
      organization: "Springer (Advances in Economic Botany)",
      publicationDate: "2020-01-01",
      doi: "10.1007/978-3-030-48927-4",
      url: "https://doi.org/10.1007/978-3-030-48927-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    olawale: {
      title: "Biological activities of Chromolaena odorata: A mechanistic review",
      author: "Olawale F, Olofinsan K, Iwaloye O",
      journal: "South African Journal of Botany",
      organization: "South African Journal of Botany",
      publicationDate: "2022-01-01",
      url: "https://www.sciencedirect.com/journal/south-african-journal-of-botany/vol/144",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    budha: {
      title: "Phytochemistry, Biological, and Toxicity Study on Aqueous and Methanol Extracts of Chromolaena odorata",
      author: "Budha Magar A, Shrestha D, Pakka S, Sharma KR",
      journal: "The Scientific World Journal",
      organization: "The Scientific World Journal",
      publicationDate: "2023-10-09",
      doi: "10.1155/2023/6689271",
      pmid: "37849963",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10578980/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dube: {
      title: "First record of pyrrolizidine alkaloids in the southern African biotype of Chromolaena odorata (Asteraceae)",
      author: "Dube N, van Heerden FR, Zachariades C, Uyi OO, Munyai TC",
      journal: "South African Journal of Botany",
      organization: "South African Journal of Botany",
      publicationDate: "2021-07-01",
      url: "https://www.sciencedirect.com/journal/south-african-journal-of-botany/vol/139",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jack-in-the-bush", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Eupatorium odoratum", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "One of Jamaica's most popular bush medicines, used by at least 20% of people for colds and flu." },
    { slug: "african-traditional-medicine", notes: "Used in sub-Saharan Africa for diabetes, malaria, wounds, inflammation and fever." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, jack-in-the-bush is one of the plants used most often for colds and flu. In surveys, 20% or more of people named it for these infections.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A book based on interviews with more than 100 people in Portland and Kingston, Jamaica, includes jack-in-the-bush among the 25 most popular medicinal plants in those communities.",
      source: "vandebroek",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Asia and sub-Saharan Africa, where it grows widely, it's traditionally used for diabetes, malaria, wounds, inflammation and fever.",
      source: "olawale",
    },
    {
      category: "TRADITIONAL",
      summary: "In Nepal and elsewhere, it's traditionally used for diabetes, wounds, skin infections, diarrhea and malaria.",
      source: "budha",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2022 review of lab and animal studies reported effects against diabetes, cancer cells, inflammation, germs and parasites, as well as pain relief, lowering fever and helping wounds heal. The reviewers say how it works is still poorly understood.",
      source: "olawale",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, leaf and flower extracts acted as antioxidants, blocked an enzyme that breaks down starch into sugar, and slowed some bacteria.\n\nTechnical detail: methanol leaf extract active against K. pneumoniae, B. subtilis and E. coli; α-glucosidase inhibition; brine shrimp toxicity assay.",
      source: "budha",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Researchers have found pyrrolizidine alkaloids in the roots of jack-in-the-bush from southern Africa. Its safety in people hasn't been studied.\n\nTechnical detail: rinderine and intermidine isolated from root extracts.",
      source: "dube",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "seasonal-immune-support", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "fever", notes: "Traditionally used for fever in Africa and Asia. It lowered fever in animal studies." },
    { slug: "wounds-and-burns", notes: "Traditionally used for wounds. It helped wounds heal in lab and animal studies." },
    { slug: "high-blood-sugar", notes: "Traditionally used for diabetes. Lab and animal studies suggest effects on blood sugar; it hasn't been tested in people." },
  ],
});

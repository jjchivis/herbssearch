import { run } from "./lib/populate-herb";

// Dog's Blood (Rivina humilis, pigeon berry or blood berry), from the Natural
// History Museum of Jamaica's common name database, a 2023 study of its
// nutrients and antioxidants (Riya et al., ACS Omega), a rat study of blood
// sugar (C R et al. 2023) and a 2026 study of leafy vegetables eaten in French
// Guiana and Suriname (Tareau et al.). No studies in people were found.

run({
  name: "Dog's Blood",
  profile: {
    family: "Petiveriaceae",
    genus: "Rivina",
    species: "humilis",
    nativeRange: "Native to the Caribbean and tropical America; now naturalised in South and Southeast Asia and the Pacific",
    partsUsed: "The leaves are eaten cooked, and the red berries are also eaten",
  },
  sources: {
    nhmj: {
      title: "Common Name Database",
      organization: "Natural History Museum of Jamaica, Institute of Jamaica",
      url: "https://nhmj-ioj.org.jm/?p=11574",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    riya: {
      title: "Phytoconstituents, GC-MS Characterization of Omega Fatty Acids, and Antioxidant Potential of Less-Known Plant Rivina humilis L.",
      author: "Riya P, Kumar SS, Giridhar P",
      journal: "ACS Omega",
      organization: "ACS Omega",
      publicationDate: "2023-07-27",
      doi: "10.1021/acsomega.3c02883",
      pmid: "37576640",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10413828/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cr: {
      title: "In vivo antioxidant and hypoglycaemic potentials of Rivina humilis extract against streptozotocin induced diabetes and its complications in wistar rats",
      author: "C R, Ghosh K, A SB, Rawal P, Pramanik S",
      journal: "Journal of Diabetes and Metabolic Disorders",
      organization: "Journal of Diabetes and Metabolic Disorders",
      publicationDate: "2023-08-17",
      doi: "10.1007/s40200-023-01258-6",
      pmid: "37975104",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10638325/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tareau: {
      title: "The Consumption of Edible Leaves by Afro-Descendants in French Guiana and Suriname: An Overview of a Constantly Evolving Ethno-Culinary Practice",
      author: "Tareau MA, Greene AM, Ansoe-Tareau C, Pinas N, Rapinski M",
      journal: "Plants",
      organization: "Plants",
      publicationDate: "2026-07-06",
      doi: "10.3390/plants15132096",
      pmid: "42452292",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13363756/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dogs Blood", type: "COMMON_NAME" },
    { name: "Dogberry", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Pigeon Berry", type: "COMMON_NAME" },
    { name: "Blood Berry", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Known in Jamaica as dogberry. Haitian communities grow it for its leaves, which are cooked and eaten." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The Natural History Museum of Jamaica lists it under the common name dogberry. It's also called pigeon berry or blood berry.",
      source: "nhmj",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In French Guiana and Suriname, Haitian communities grow it for its leaves, which they cook and eat as a leafy green. The red berries are also eaten.",
      source: "tareau",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab analysis found the seeds are rich in carbohydrates, protein and fat, including omega fatty acids. Extracts of different parts of the plant acted as antioxidants. The berries contain betalains, the red pigments also found in beetroot.\n\nTechnical detail: seeds 50.15 g/100 g carbohydrate, 10.96 g protein, 11.25 g fat.",
      source: "riya",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, an alcohol-based extract given for 21 days lowered blood sugar, kept liver and kidney tests normal, and boosted the liver's antioxidant defenses.\n\nTechnical detail: streptozotocin- and fructose-induced type 2 diabetes; ethanol extract; improved oral glucose tolerance at 90 and 120 minutes; HbA1c normal in treated groups.",
      source: "cr",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Lowered blood sugar in diabetic rats. It hasn't been tested in people." },
  ],
});

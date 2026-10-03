import { run } from "./lib/populate-herb";

// Ra-Moon (Trophis racemosa, ramoon), from: the Forestry Department of
// Jamaica (2021), a Jamaica Observer article on its use (Harrison 2007,
// republished 2010) and a University of the West Indies study of a compound
// from the plant (Wynter-Adams et al. 1999). No studies of its effects in
// people, or of its safety, were found.

run({
  name: "Ra-Moon",
  profile: {
    family: "Moraceae",
    genus: "Trophis",
    species: "racemosa",
    nativeRange: "Grows in Jamaica, including Manchester, St. Elizabeth, Westmoreland, St. Ann and Portland; grows best in woodlands on limestone",
    partsUsed: "Mainly the bark, often made into a tea or added to roots drinks. The leaves are also used.",
  },
  sources: {
    forestry: {
      title: "Ramoon (Trophis racemosa)",
      organization: "Forestry Department, Government of Jamaica",
      publicationDate: "2021-07-15",
      url: "https://www.forestry.gov.jm/blogDetails?blogID=15",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    observer: {
      title: "Raise libido with ra-moon",
      author: "Harrison B",
      organization: "Jamaica Observer",
      publicationDate: "2010-09-08",
      url: "https://www.jamaicaobserver.com/2010/09/08/raise-libido-with-ra-moon/",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    wynter: {
      title: "Isolation of a muscarinic alkaloid with ocular hypotensive action from Trophis racemosa",
      author: "Wynter-Adams DM, Simon OR, Gossell-Williams MD, West ME",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "1999-12-01",
      doi: "10.1002/(SICI)1099-1573(199912)13:8<670::AID-PTR514>3.0.CO;2-8",
      pmid: "10594936",
      url: "https://pubmed.ncbi.nlm.nih.gov/10594936/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ramoon", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Ra Moon", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in Jamaica as a tea and in roots drinks for libido, and to help livestock breed." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jamaica's Forestry Department says the leaves make good fodder for livestock, and that in Jamaica the plant is also used to increase breeding in animals.",
      source: "forestry",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A Jamaica Observer article describes ra-moon as a traditional remedy used by both men and women to boost libido, popular among Rastafarians. The bark is mostly used, as a tea or in roots drinks. The article notes the tree is becoming rare because of high demand.",
      source: "observer",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Researchers at the University of the West Indies isolated a natural compound from the plant. Eye drops made from it lowered the pressure inside the eye in dogs. It also made muscle in the gut and airways contract in lab tests.\n\nTechnical detail: quaternary muscarinic alkaloid; 0.5–2% solutions lowered intraocular pressure by 6.6 to 15.7 mmHg, blocked by atropine; contracted isolated guinea-pig ileum and trachea via M1/M3 receptors.",
      source: "wynter",
    },
  ],
  symptoms: [
    {
      slug: "sexual-health",
      notes: "A traditional Jamaican remedy for low libido. This use hasn't been tested in research.",
    },
  ],
});

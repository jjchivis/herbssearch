import { run } from "./lib/populate-herb";

// Soapwort (Saponaria officinalis). Sources: a 2026 Lithuanian ethnobotany
// study, a 2026 review of acne remedies and a 2026 lab study of root saponins.
// Family per GBIF. No source covering safety was found, so none is stated.

run({
  name: "Soapwort",
  profile: {
    family: "Caryophyllaceae",
    genus: "Saponaria",
    species: "officinalis",
    partsUsed: "The above-ground parts and the root",
  },
  sources: {
    urbonaite: {
      title: "Medicinal Plants for Dermatological and Cosmetic Applications: Ethnobotanical Study from Northern Lithuania",
      author: "Urbonaite D, Bernatoniene J, Pranskunas A, Pranskuniene Z",
      journal: "Plants",
      publicationDate: "2026-04-30",
      doi: "10.3390/plants15091389",
      pmid: "42122881",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13165265/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    parvizi: {
      title: "Medicinal Plants for Acne Vulgaris: An Evidence-Based Review of Treatments Promoted by Social Media",
      author: "Parvizi MM, Saki N, Rostami Ghotbabadi Z, et al.",
      journal: "Journal of Cosmetic Dermatology",
      publicationDate: "2026-01-01",
      doi: "10.1111/jocd.70628",
      pmid: "41439563",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12729506/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    limPaik: {
      title: "Improving Cytotoxicity of Saporin with Saponin SO1406 Isolated from the Roots of Saponaria Officinalis",
      author: "Lim-Paik C, Zeng Q, Beyea R, Boohaker R, Wang P",
      journal: "Biomedicines",
      publicationDate: "2026-03-11",
      doi: "10.3390/biomedicines14030626",
      pmid: "41898273",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13023535/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "In Lithuania, the herb is rubbed with water to make a foam used to cleanse the skin.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In a 2026 study in northern Lithuania, soapwort was the most popular plant for skin impurities, named by about half of the people asked. They rub the herb between their hands with water to make a cleansing foam.",
      source: "urbonaite",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of acne remedies found soapwort has only been tested in combination with other plants. A cream made from soapwort, elecampane and black nightshade reduced acne spots in one study, so soapwort's own effect is unclear. Lab studies suggest it reduces oil production and inflammation and fights acne bacteria.",
      source: "parvizi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 lab study, saponins (soap-like compounds) from soapwort root made an anticancer toxin work better against cancer cells.\n\nTechnical detail: saponin SO1406 enhanced saporin cytotoxicity.",
      source: "limPaik",
    },
  ],
  symptoms: [
    { slug: "acne", notes: "Only tested in combination with other plants; a cream containing soapwort reduced acne spots in one study." },
  ],
});

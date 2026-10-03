import { run } from "./lib/populate-herb";

// Penny Royal, the Jamaican and tropical American pennyroyal (Clinopodium
// brownei), not European pennyroyal (Mentha pulegium). From verified sources:
// a book on popular medicinal plants in Jamaica (Vandebroek & Picking 2020),
// a 2023 study of its essential oil (Noriega et al., Molecules), a field study
// of Q'eqchi' Maya medicine in Guatemala (Vargas & Andrade-Cetto 2018) and a
// case series and review of European pennyroyal poisoning (Anderson et al.
// 1996, Ann Intern Med).

run({
  name: "Penny Royal",
  profile: {
    family: "Lamiaceae",
    genus: "Clinopodium",
    species: "brownei",
    nativeRange: "Widespread in tropical and subtropical America",
    partsUsed: "The leaves and other above-ground parts",
  },
  sources: {
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
    noriega: {
      title: "Chemical Composition, Antimicrobial and Antioxidant Bioautography Activity of Essential Oil from Leaves of Amazon Plant Clinopodium brownei (Sw.)",
      author: "Noriega P, Calderón L, Ojeda A, Paredes E",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2023-02-11",
      doi: "10.3390/molecules28041741",
      pmid: "36838728",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9962765/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vargas: {
      title: "Ethnopharmacological Field Study of Three Q'eqchi Communities in Guatemala",
      author: "Vargas JM, Andrade-Cetto A",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2018-11-06",
      doi: "10.3389/fphar.2018.01246",
      pmid: "30483122",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6240767/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    anderson: {
      title: "Pennyroyal toxicity: measurement of toxic metabolite levels in two cases and review of the literature",
      author: "Anderson IB, Mullen WH, Meeker JE, Khojasteh-Bakht SC, Oishi S, Nelson SD, Blanc PD",
      journal: "Annals of Internal Medicine",
      organization: "Annals of Internal Medicine",
      publicationDate: "1996-04-15",
      doi: "10.7326/0003-4819-124-8-199604150-00004",
      pmid: "8633832",
      url: "https://doi.org/10.7326/0003-4819-124-8-199604150-00004",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pennyroyal", type: "COMMON_NAME" },
    { name: "Jamaican Pennyroyal", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Satureja brownei", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "One of the 25 most popular medicinal plants in a study of two Jamaican communities." },
    {
      slug: "native-american-ethnobotany",
      notes: "One of the most culturally important medicinal plants for the Q'eqchi' Maya of Guatemala, used to bathe sick children.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A book based on interviews with more than 100 people in Portland and Kingston, Jamaica, includes pennyroyal (Clinopodium brownei) among the 25 most popular medicinal plants in those communities.",
      source: "vandebroek",
    },
    {
      category: "TRADITIONAL",
      summary:
        "This pennyroyal grows widely in tropical and subtropical America. It's traditionally used for breathing and digestive problems, and for pain.",
      source: "noriega",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Among the Q'eqchi' Maya of Guatemala, it's one of the most culturally important medicinal plants. Its above-ground parts are soaked overnight in water with other plants, and the water is used to bathe children with \"dry sick\", an illness with diarrhea, vomiting, fever, loss of appetite and thirst.",
      source: "vargas",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, its essential oil acted as an antioxidant and slowed the growth of some bacteria and a yeast (Candida), though less strongly than the comparison products.\n\nTechnical detail: main compounds pulegone (20.8–29.9%), ethyl cinnamate, methyl cinnamate, caryophyllene and menthone; IC50 DPPH 1.77 mg/mL, ABTS 0.06 mg/mL; MICs 3.1–13.6 mg/mL.",
      source: "noriega",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Its essential oil is about one-fifth to one-third pulegone. Pulegone is also found in European pennyroyal (Mentha pulegium), a different plant whose oil is a known poison.",
      source: "noriega",
    },
    {
      category: "TOXICITY",
      description:
        "European pennyroyal has caused deadly liver damage, and it has long been misused to try to cause abortion. A 1996 review found moderate to severe poisoning in people who took at least 10 mL of the oil. Pulegone and its breakdown product menthofuran were found in the blood of poisoned patients. Don't confuse the two plants.\n\nTechnical detail: 4 new cases (1 death) plus 18 previously reported cases.",
      source: "anderson",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Traditionally used for breathing problems in tropical America. This use hasn't been tested in people." },
    { slug: "indigestion", notes: "Traditionally used for digestive problems in tropical America. This use hasn't been tested in people." },
    {
      slug: "liver-safety-warnings",
      notes: "Its oil contains pulegone, also found in European pennyroyal, whose oil has caused deadly liver damage.",
    },
    {
      slug: "pregnancy-and-childbirth",
      notes: "Don't confuse with European pennyroyal, which has been misused to cause abortion and has caused deadly poisoning.",
    },
  ],
});

import { run } from "./lib/populate-herb";

// Pepper Elder (Piper amalago), from verified sources: a review of Jamaican
// medicinal plants (Lowe et al. 2021), rat studies of its safety and effects on
// the kidneys and blood vessels (Monteiro et al. 2023; Stein et al. 2022), a
// wound-healing case report (Dos Santos et al. 2020), and Frank et al. (2025)
// for its native range.

run({
  name: "Pepper Elder",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "amalago",
    nativeRange: "Native to the Caribbean and Latin America",
    partsUsed: "The leaves",
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
    monteiro: {
      title: "The Cardiorenal Effects of Piper amalago Are Mediated by the Nitric Oxide/Cyclic Guanosine Monophosphate Pathway and the Voltage-Dependent Potassium Channels",
      author: "Monteiro LM, Klider LM, Marques AAM, et al.",
      journal: "Pharmaceuticals",
      organization: "Pharmaceuticals",
      publicationDate: "2023-11-20",
      doi: "10.3390/ph16111630",
      pmid: "38004495",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10675251/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    stein: {
      title: "Evaluation of the safety of ethanolic extract from Piper amalago L. (Piperaceae) leaves in vivo: Subacute toxicity and genotoxicity studies",
      author: "Stein J, Jorge BC, Casali Reis AC, et al.",
      journal: "Regulatory Toxicology and Pharmacology",
      organization: "Regulatory Toxicology and Pharmacology",
      publicationDate: "2022-01-14",
      doi: "10.1016/j.yrtph.2022.105118",
      pmid: "35038484",
      url: "https://doi.org/10.1016/j.yrtph.2022.105118",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dossantos: {
      title: "The wound healing effect of aqueous extract from Piper amalago L. in diabetic patient",
      author: "Dos Santos VLP, Ribas JLC, de Lima CP, Campos R, Garcia AC, Budel JM, Messias-Reason IJ",
      journal: "Explore",
      organization: "Explore",
      publicationDate: "2019-12-13",
      doi: "10.1016/j.explore.2019.12.001",
      pmid: "31918965",
      url: "https://doi.org/10.1016/j.explore.2019.12.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    frank: {
      title: "The Use of Piper amalago var. amalago as an Eco-Friendly Insecticide Synergist in the Management of Aedes Aegypti",
      author: "Frank C, Robinson D, Poupardin R, Irvine W, Paine MJI, Delgoda R, Francis S",
      journal: "Journal of Visualized Experiments",
      organization: "Journal of Visualized Experiments",
      publicationDate: "2025-10-24",
      doi: "10.3791/68723",
      pmid: "41212839",
      url: "https://doi.org/10.3791/68723",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Pepper Elders", type: "COMMON_NAME" }],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "In Jamaica, a leaf tea is an anecdotal remedy for colds and flu." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, pepper elder is an anecdotal remedy for colds and flu. 1 to 2 teaspoons of leaves are brewed in a cup of water, left to steep for about 10 minutes, and sweetened as desired. How it might work against viruses is unknown.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary: "In Brazilian traditional medicine, it's used for inflammation, chest pain and anxiety.",
      source: "monteiro",
    },
    {
      category: "TRADITIONAL",
      summary: "It's traditionally used to ease pain and inflammation, to increase urination, and against parasites.",
      source: "stein",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, single doses of leaf extracts and the essential oil caused no deaths or organ damage. Given daily for 7 days, they increased urination without lowering blood pressure or changing the heart's rhythm. One extract relaxed blood vessels in lab tests.\n\nTechnical detail: volatile oil, aqueous and hydroalcoholic extracts; increased urine volume and electrolyte excretion; hydroalcoholic extract caused vasodilation in isolated mesenteric vascular beds via the nitric oxide/cGMP pathway and voltage-dependent potassium channels.",
      source: "monteiro",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a single case report, a person with type 2 diabetes soaked a cut thumb in water in which dried leaves had been boiled, with the leaves placed on the wound. The wound healed over 15 days. This was one case, not a controlled study.",
      source: "dossantos",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In rats given an alcohol-based leaf extract every day for 28 days, it caused liver changes and changes in blood tests. The researchers advise using it with caution, especially for long periods. It didn't damage DNA.\n\nTechnical detail: 100, 200 or 300 mg/kg by mouth in female Wistar rats; increased liver weight and relative heart and kidney weights, liver histopathology changes, lower hematocrit and albumin, higher platelets, alkaline phosphatase and cholesterol. No genotoxicity in mice at up to 1750 mg/kg.",
      source: "stein",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "An anecdotal Jamaican remedy for colds. This use hasn't been tested in people." },
    { slug: "seasonal-immune-support", notes: "An anecdotal Jamaican remedy for colds and flu. This use hasn't been tested in people." },
    { slug: "anxiety", notes: "Used for anxiety in Brazilian traditional medicine. This use hasn't been tested in people." },
    {
      slug: "wounds-and-burns",
      notes: "In one case report, leaves boiled in water helped a wound heal in a person with diabetes. This hasn't been tested in a controlled study.",
    },
  ],
});

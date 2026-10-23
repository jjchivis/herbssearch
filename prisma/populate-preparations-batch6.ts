import { run } from "./lib/populate-herb";

// Preparations sweep, batch 6: new open-access reviews and studies of each
// species (found on Europe PMC), using only sentences about the same species.

run(
  {
    name: "Ackee Leaf",
    sources: {
      s1: { title: "Uses, traditional management, perception of variation and preferences in ackee (Blighia sapida K.D. Koenig) fruit traits in Benin: implications for domestication and conservation", author: "Ekué MR, Sinsin B, Eyog-Matig O, et al", journal: "Journal of ethnobiology and ethnomedicine", publicationDate: "2010-03-19", doi: "10.1186/1746-4269-6-12", pmid: "20302642", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3224935/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "In Benin, the young leaves may be parboiled and eaten like other African leafy vegetables.", source: "s1" },
    ],
  },
  {
    name: "Atractylodes Macrocephala",
    sources: {
      s1: { title: "The chemistry and efficacy benefits of polysaccharides from Atractylodes macrocephala Koidz", author: "Liu C, Wang S, Xiang Z, et al", journal: "Frontiers in pharmacology", publicationDate: "2022-08-25", doi: "10.3389/fphar.2022.952061", pmid: "36091757", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9452894/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's one of the four herbs in Sijunzi decoction, with ginseng, poria and licorice.", source: "s1" },
    ],
  },
  {
    name: "Calamus Root",
    sources: {
      s1: { title: "Experimental evidence for use of Acorus calamus (asarone) for cancer chemoprevention", author: "Das BK, Swamy AV, Koti BC, et al", journal: "Heliyon", publicationDate: "2019-05-08", doi: "10.1016/j.heliyon.2019.e01585", pmid: "31193009", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6513775/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "poultice", notes: "A paste of the root is applied to rheumatic and inflamed joints.", source: "s1" },
    ],
  },
  {
    name: "Goji Berry",
    sources: {
      s1: { title: "An evidence-based update on the pharmacological activities and possible molecular targets of Lycium barbarum polysaccharides", author: "Cheng J, Zhou ZW, Sheng HP, et al", journal: "Drug design, development and therapy", publicationDate: "2014-12-17", doi: "10.2147/dddt.s72892", pmid: "25552899", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4277126/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "In one trial, healthy people drank a standardized juice made from the fresh ripe berries (GoChi).", source: "s1" },
    ],
  },
  {
    name: "Jamaican Rat Ears",
    sources: {
      s1: { title: "Aqueous extract of Peperomia pellucida (L.) HBK accelerates fracture healing in Wistar rats", author: "Florence NT, Huguette ST, Hubert DJ, et al", journal: "BMC complementary and alternative medicine", publicationDate: "2017-04-04", doi: "10.1186/s12906-017-1686-3", pmid: "28372562", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5379737/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's eaten as a vegetable in Cameroon.", source: "s1" },
    ],
  },
  {
    name: "Lesser Galangal",
    sources: {
      s1: { title: "A Review on the Pharmacological Activities and Phytochemicals of Alpinia officinarum (Galangal) Extracts Derived from Bioassay-Guided Fractionation and Isolation", author: "Basri AM, Taha H, Ahmad N", journal: "Pharmacognosy reviews", publicationDate: "2017-01-01", doi: "10.4103/phrev.phrev_55_16", pmid: "28503054", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5414456/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Alpinia officinarum Hance: a comprehensive review of traditional uses, phytochemistry, pharmacokinetic and pharmacology", author: "Lei X, Wang J, Zuo K, et al", journal: "Frontiers in pharmacology", publicationDate: "2024-08-16", doi: "10.3389/fphar.2024.1414635", pmid: "39221146", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11362038/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The rhizomes are traditionally brewed as a tea.", source: "s1" },
      { slug: "decoction", notes: "It's also taken as a decoction.", source: "s2" },
    ],
  },
  {
    name: "Osha",
    sources: {
      s1: { title: "Mexican Plants and Derivates Compounds as Alternative for Inflammatory and Neuropathic Pain Treatment-A Review", author: "Quiñonez-Bastidas GN, Navarrete A", journal: "Plants (Basel, Switzerland)", publicationDate: "2021-04-25", doi: "10.3390/plants10050865", pmid: "33923101", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8145628/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "A tea is made from the roots.", source: "s1" },
      { slug: "decoction", notes: "It's widely taken as a decoction.", source: "s1" },
    ],
  },
  {
    name: "Osmanthus Fragrans",
    sources: {
      s1: { title: "Secondary Metabolites of Osmanthus fragrans: Metabolism and Medicinal Value", author: "Fu CC, Xu FY, Qian YC, et al", journal: "Frontiers in pharmacology", publicationDate: "2022-07-18", doi: "10.3389/fphar.2022.922204", pmid: "35924042", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9340074/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The flowers are used to give a strong, lasting fragrance to desserts, pastries, tea and wine.", source: "s1" },
    ],
  },
  {
    name: "Poppy",
    sources: {
      s1: { title: "Iconic Arable Weeds: The Significance of Corn Poppy (Papaver rhoeas), Cornflower (Centaurea cyanus), and Field Larkspur (Delphinium consolida) in Hungarian Ethnobotanical and Cultural Heritage", author: "Pinke G, Kapcsándi V, Czúcz B", journal: "Plants (Basel, Switzerland)", publicationDate: "2022-12-23", doi: "10.3390/plants12010084", pmid: "36616213", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9824376/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "syrup", notes: "Many European pharmacies listed \"syrupus rhoeados\", a sweet infusion of the petals, used mainly as a red coloring in medicines.", source: "s1" },
      { slug: "culinary-preparation", notes: "The buds were sometimes eaten, and the petals were used as a food dye.", source: "s1" },
    ],
  },
  {
    name: "Reishi",
    sources: {
      s1: { title: "Antitumour, Antimicrobial, Antioxidant and Antiacetylcholinesterase Effect of Ganoderma Lucidum Terpenoids and Polysaccharides: A Review", author: "Cör D, Knez Ž, Knez Hrnčič M", journal: "Molecules (Basel, Switzerland)", publicationDate: "2018-03-13", doi: "10.3390/molecules23030649", pmid: "29534044", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6017764/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "powder", notes: "Reishi is often sold as dried mushroom powder. Because the fresh mushroom is up to 90% water, 1 g of extract may be about as strong as 10 g of mushroom.", source: "s1" },
    ],
  },
  {
    name: "Yellow Dock",
    sources: {
      s1: { title: "Comparison of the Proximate Composition, Vitamins (Ascorbic Acid, α-Tocopherol and Retinol), Anti-Nutrients (Phytate and Oxalate) and the GC-MS Analysis of the Essential Oil of the Root and Leaf of <i>Rumex crispus</i> L", author: "Idris OA, Wintola OA, Afolayan AJ", journal: "Plants (Basel, Switzerland)", publicationDate: "2019-02-28", doi: "10.3390/plants8030051", pmid: "30823426", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6473742/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Evaluation of the Bioactivities of Rumex crispus L. Leaves and Root Extracts Using Toxicity, Antimicrobial, and Antiparasitic Assays", author: "Idris OA, Wintola OA, Afolayan AJ", journal: "Evidence-based complementary and alternative medicine : eCAM", publicationDate: "2019-10-30", doi: "10.1155/2019/6825297", pmid: "31827556", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6885263/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The young leaves are eaten in salads and soups, or cooked as a green.", source: "s1" },
      { slug: "decoction", notes: "Traditionally, it's used as a decoction or tincture.", source: "s2" },
    ],
  },
);

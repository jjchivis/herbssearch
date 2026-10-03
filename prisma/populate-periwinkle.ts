import { run } from "./lib/populate-herb";

// Periwinkle (Catharanthus roseus, Madagascar periwinkle), the plant called
// periwinkle in Caribbean bush medicine. From verified sources: a review of
// ethnomedicines in Trinidad and Tobago (Lans 2006), a 2022 review of its
// uses, chemistry and toxicity (Kumar et al., J Ethnopharmacol), a 2015
// review (Nejat et al.), a mouse study of blood sugar (Vega-Ávila et al.
// 2012) and a 2024 poisoning case report (Chuah et al.).

run({
  name: "Periwinkle",
  profile: {
    family: "Apocynaceae",
    genus: "Catharanthus",
    species: "roseus",
    nativeRange: "Native to Madagascar; now grown in many countries as a garden plant",
    partsUsed: "In traditional medicine, the dried flowers and stems are used.",
  },
  sources: {
    lans: {
      title: "Ethnomedicines used in Trinidad and Tobago for urinary problems and diabetes mellitus",
      author: "Lans CA",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2006-10-13",
      doi: "10.1186/1746-4269-2-45",
      pmid: "17040567",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1624823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kumar: {
      title: "Catharanthus roseus (L.) G. Don: A review of its ethnobotany, phytochemistry, ethnopharmacology and toxicities",
      author: "Kumar S, Singh B, Singh R",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2021-09-22",
      doi: "10.1016/j.jep.2021.114647",
      pmid: "34562562",
      url: "https://doi.org/10.1016/j.jep.2021.114647",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nejat: {
      title: "Ornamental exterior versus therapeutic interior of Madagascar periwinkle (Catharanthus roseus): the two faces of a versatile herb",
      author: "Nejat N, Valdiani A, Cahill D, Tan YH, Maziah M, Abiri R",
      journal: "The Scientific World Journal",
      organization: "The Scientific World Journal",
      publicationDate: "2015-01-15",
      doi: "10.1155/2015/982412",
      pmid: "25667940",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4312627/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vega: {
      title: "Hypoglycemic Activity of Aqueous Extracts from Catharanthus roseus",
      author: "Vega-Ávila E, Cano-Velasco JL, Alarcón-Aguilar FJ, Fajardo Ortíz MC, Almanza-Pérez JC, Román-Ramos R",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2012-09-27",
      doi: "10.1155/2012/934258",
      pmid: "23056144",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3463976/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chuah: {
      title: "Catharanthus roseus intoxication mimicking acute cholangitis",
      author: "Chuah YY, Lee YY, Chou CK, Chang LJ",
      journal: "BMC Complementary Medicine and Therapies",
      organization: "BMC Complementary Medicine and Therapies",
      publicationDate: "2024-04-04",
      doi: "10.1186/s12906-024-04441-1",
      pmid: "38575897",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10993546/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Madagascar Periwinkle", type: "COMMON_NAME" },
    { name: "White Periwinkle", type: "REGIONAL_NAME", region: "Trinidad and Tobago" },
    { name: "Vinca rosea", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used for diabetes in Trinidad and Tobago." },
    { slug: "ayurveda", notes: "Used for cancer, diabetes, and stomach, kidney, liver and heart problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Trinidad and Tobago, white periwinkle is used for diabetes. The 2006 review that recorded this listed it among the plants that justify more formal testing.",
      source: "lans",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda and folk medicine, different parts of the plant are used for:\n- Many types of cancer\n- Diabetes\n- Stomach problems\n- Kidney, liver and heart diseases",
      source: "kumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with diabetes, water-based extracts lowered blood sugar. A stem extract cut blood sugar by about half, close to the effect of the diabetes medicine tolbutamide.\n\nTechnical detail: alloxan-induced diabetes; 250 mg/kg aqueous stem extract given intraperitoneally lowered blood glucose by 52.90%, its alkaloid-free fraction (300 mg/kg) by 51.21%, tolbutamide by 58.1%.",
      source: "vega",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2022 review reported that its extracts and compounds acted against cancer cells, diabetes, germs and insects, and as antioxidants, in lab and animal studies. Toxicity studies found they are safe only up to a certain dose, above which they cause harm.\n\nTechnical detail: 344 compounds reported, including 110 monoterpene indole alkaloids and 35 bisindole alkaloids; anticancer/cytotoxic, antidiabetic, antimicrobial, antioxidant, larvicidal and pupicidal activity.",
      source: "kumar",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Its best-known compounds, vincristine and vinblastine, are powerful cancer drugs used in chemotherapy. The plant contains only tiny amounts, but these compounds are highly poisonous on their own.",
      source: "nejat",
    },
    {
      category: "TOXICITY",
      description:
        "In a 2024 case report, a 65-year-old woman drank periwinkle juice for neck pain. She developed fever, belly pain, loss of appetite and numb legs. Tests showed liver damage with jaundice (yellowing), and she developed stomach ulcers. She recovered after she stopped taking it.\n\nTechnical detail: leukocytosis, raised liver enzymes and hyperbilirubinemia; presentation mimicked acute cholangitis.",
      source: "chuah",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Used for diabetes in Caribbean and folk medicine. It lowered blood sugar in diabetic mice but hasn't been tested in people, and the plant can be poisonous.",
    },
    {
      slug: "liver-safety-warnings",
      notes: "A woman who drank periwinkle juice developed liver damage with jaundice and recovered after stopping.",
    },
  ],
});

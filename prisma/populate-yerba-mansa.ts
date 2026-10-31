import { run } from "./lib/populate-herb";

// Yerba Mansa (Anemopsis californica), from the Native American Ethnobotany
// Database (Moerman, BRIT), a 2006 review of Chumash women's medicine (Adams
// and Garcia), and lab studies of its roots and leaves (Bussey et al. 2014;
// Kaminski et al. 2010; Medina-Holguín et al. 2008; Del-Toro-Sánchez et al.
// 2014; Nguyen et al. 2021). Family per GBIF.

run({
  name: "Yerba Mansa",
  profile: {
    family: "Saururaceae",
    genus: "Anemopsis",
    species: "californica",
    nativeRange: "Southwestern US and northern Mexico",
    partsUsed: "The roots, leaves and whole plant",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Anemopsis californica",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Anemopsis+californica",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    adams: {
      title: "Women's health among the Chumash",
      author: "Adams JD, Garcia C",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2006-02-01",
      doi: "10.1093/ecam/nek021",
      pmid: "16550233",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1375244/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bussey: {
      title: "Antimycobacterial furofuran lignans from the roots of Anemopsis californica",
      author: "Bussey RO, Sy-Cordero AA, Figueroa M, et al.",
      journal: "Planta Medica",
      publicationDate: "2014-03-31",
      doi: "10.1055/s-0034-1368352",
      pmid: "24687738",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4586282/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kaminski: {
      title: "In vitro anticancer activity of Anemopsis californica",
      author: "Kaminski CN, Ferrey SL, Lowrey T, Guerra L, Van Slambrouck S, Steelant WF",
      journal: "Oncology Letters",
      publicationDate: "2010-07-01",
      doi: "10.3892/ol_00000124",
      pmid: "21941602",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3176455/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    medina: {
      title: "Chemotypic variation of essential oils in the medicinal plant, Anemopsis californica",
      author: "Medina-Holguín AL, Holguín FO, Micheletto S, et al.",
      journal: "Phytochemistry",
      publicationDate: "2008-01-04",
      doi: "10.1016/j.phytochem.2007.11.006",
      pmid: "18177907",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2330197/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deltoro: {
      title: "Antimutagenicity of Methanolic Extracts from Anemopsis californica in Relation to Their Antioxidant Activity",
      author: "Del-Toro-Sánchez CL, Bautista-Bautista N, Blasco-Cabal JL, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2014-07-23",
      doi: "10.1155/2014/273878",
      pmid: "25152760",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4135139/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nguyen: {
      title: "Anemopsis californica Attenuates Photoaging by Regulating MAPK, NRF2, and NFATc1 Signaling Pathways",
      author: "Nguyen QTN, Fang M, Do NQ, et al.",
      journal: "Antioxidants",
      publicationDate: "2021-11-25",
      doi: "10.3390/antiox10121882",
      pmid: "34942986",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8698643/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Sesamin", slug: "sesamin", type: "lignan" },
    { name: "Asarinin", slug: "asarinin", type: "lignan" },
    { name: "Thymol", slug: "thymol", type: "monoterpene" },
  ],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by the Cahuilla, Chumash, Pima, Shoshoni, Paiute, Kawaiisu, Costanoan, Isleta and other peoples of the Southwest and California.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Across the Southwest and California, yerba mansa was a wound remedy. The Costanoan and Mahuna dusted the dried, powdered plant on wounds to clean them, the Isleta put damp leaves on open wounds, the Western Keres put chewed leaves on burns, and many peoples washed sores with a tea of it.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A tea or decoction of the root or plant was taken for colds, coughs and chest congestion by the Cahuilla, Pima, Kawaiisu, Shoshoni and Tubatulabal. The Pima held the dry root in the mouth for sore throats.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cahuilla drank it for stomach ulcers and the Shoshoni for stomachaches. The Costanoan used a root decoction for menstrual cramps and general pain, and the Paiute bathed sore muscles and feet in a leaf decoction.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Yerba mansa was a popular remedy for venereal diseases among the Chumash and other California peoples, and was still used for them in Spanish Mission times.",
      source: "adams",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Two compounds from the roots, sesamin and asarinin, stopped the growth of several nontuberculous mycobacteria, germs that can cause skin, lung and lymph node infections, in lab tests. The roots contain much more of them than the leaves.",
      source: "bussey",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, root extracts slowed the growth of colon and breast cancer cells.",
      source: "kaminski",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The root oil varies a lot from plant to plant. New Mexico plants fell into three types, rich in elemicin, methyleugenol, or piperitone and thymol. In lab tests the root oil slowed the growth of cervical and uterine cancer cells, but not lung, breast, prostate or colon cancer cells.",
      source: "medina",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, leaf and stem extracts didn't cause DNA mutations in bacteria, and reduced the mutations caused by a cancer-causing chemical.",
      source: "deltoro",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on skin cells, a yerba mansa extract calmed inflammation and protected collagen from damage caused by UVB rays from the sun.",
      source: "nguyen",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "The Chumash used yerba mansa together with tobacco to end pregnancies. It isn't known how the two were used or which caused the effect.",
      source: "adams",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A widely used Native American wound and sore remedy. Root compounds stopped some germs in lab tests; not tested in people." },
    { slug: "colds-and-congestion", notes: "Many Southwestern peoples drank a root or plant tea for colds and chest congestion. Not studied in people." },
    { slug: "sore-throat", notes: "The Pima held the dry root in the mouth for sore throats. Not studied in people." },
    { slug: "stomach-ulcers", notes: "The Cahuilla drank it for stomach ulcers. Not studied in people." },
    { slug: "menstrual-discomfort", notes: "The Costanoan used a root decoction for menstrual cramps. Not studied in people." },
  ],
  preparations: [
    { slug: "decoction", notes: "Root boiled in water, taken for colds, coughs, stomachaches and pain.", source: "naeb" },
    { slug: "powder", notes: "Dried, powdered plant dusted on wounds.", source: "naeb" },
  ],
});

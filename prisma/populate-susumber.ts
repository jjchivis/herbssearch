import { run } from "./lib/populate-herb";

// Susumber (Solanum torvum, turkey berry), from verified sources: poisoning
// reports (Smith et al. 2008, Toxicon; Glover et al. 2016, Clin Toxicol;
// Tamaiev et al. 2023, Cerebrovasc Dis, a case series with systematic review),
// a 2013 review of its traditional uses and pharmacology (Yousaf et al., J
// Appl Pharm Sci, source of the native range), a rat study from Cameroon
// (Ndebia et al. 2006), a zebrafish study of the fruit (Ren et al. 2024) and
// the Natural History Museum of Jamaica's common name database.

run({
  name: "Susumber",
  profile: {
    family: "Solanaceae",
    genus: "Solanum",
    species: "torvum",
    nativeRange:
      "Native to the West Indies and tropical America, and to parts of Asia including India, Myanmar, Thailand, the Philippines, Malaysia and China",
    partsUsed: "The berries are cooked and eaten. In traditional medicine, the leaves, roots and fruit are used.",
  },
  sources: {
    tamaiev: {
      title: "Jamaican Susumber Berry Poisoning Mimicking Acute Stroke",
      author: "Tamaiev J, Trebach J, Rosso M, Moriarty J, DiSalvo P, Biary R, Su M, Perk J, Levine SR",
      journal: "Cerebrovascular Diseases",
      organization: "Cerebrovascular Diseases",
      publicationDate: "2022-10-25",
      doi: "10.1159/000525686",
      pmid: "36282075",
      url: "https://doi.org/10.1159/000525686",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    smith: {
      title: "Solanaceous steroidal glycoalkaloids and poisoning by Solanum torvum, the normally edible susumber berry",
      author: "Smith SW, Giesbrecht E, Thompson M, Nelson LS, Hoffman RS",
      journal: "Toxicon",
      organization: "Toxicon",
      publicationDate: "2008-08-07",
      doi: "10.1016/j.toxicon.2008.07.016",
      pmid: "18725244",
      url: "https://doi.org/10.1016/j.toxicon.2008.07.016",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    glover: {
      title: "Electromyographic and laboratory findings in acute Solanum torvum poisoning",
      author: "Glover RL, Connors NJ, Stefan C, Wong E, Hoffman RS, Nelson LS, Milstein M, Smith SW, Swerdlow M",
      journal: "Clinical Toxicology",
      organization: "Clinical Toxicology",
      publicationDate: "2015-11-18",
      doi: "10.3109/15563650.2015.1110749",
      pmid: "26577583",
      url: "https://doi.org/10.3109/15563650.2015.1110749",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yousaf: {
      title: "Phytochemistry and Pharmacological Studies on Solanum torvum Swartz",
      author: "Yousaf Z, Wang Y, Baydoun E",
      journal: "Journal of Applied Pharmaceutical Science",
      organization: "Journal of Applied Pharmaceutical Science",
      publicationDate: "2013-04-27",
      doi: "10.7324/JAPS.2013.3428",
      url: "https://www.japsonline.com/admin/php/uploads/868_pdf.pdf",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ndebia: {
      title: "Analgesic and anti-inflammatory properties of aqueous extract from leaves of Solanum torvum (Solanaceae)",
      author: "Ndebia EJ, Kamgang R, Nkeh-ChungagAnye BN",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      organization: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2006-01-01",
      doi: "10.4314/ajtcam.v4i2.31214",
      pmid: "20162098",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816439/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ren: {
      title: "Steroidal Saponins from Water Eggplant (Fruits of Solanum torvum) Exhibit Anti-Epileptic Activity against Pentylenetetrazole-Induced Seizure Model in Zebrafish",
      author: "Ren R, Zhang M, Shu T, Kong Y, Su L, Li H",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2024-03-15",
      doi: "10.3390/molecules29061316",
      pmid: "38542951",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10974013/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nhmj: {
      title: "Common Name Database",
      organization: "Natural History Museum of Jamaica, Institute of Jamaica",
      url: "https://nhmj-ioj.org.jm/?p=11574",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Susumba", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Gully Bean", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Turkey Berry", type: "COMMON_NAME" },
    { name: "Water Eggplant", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "In Jamaica the berries are mainly a food, cooked in traditional dishes served with cod and rice.",
    },
    {
      slug: "ayurveda",
      notes: "Its traditional medicinal uses are recorded in Ayurveda.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes: "Recorded in Chinese medicine, where it's considered to reduce inflammation and to be calming.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Used in traditional medicine in Cameroon for pain and inflammation.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, susumber berries are cooked as part of traditional dishes, usually served with cod and rice.",
      source: "glover",
    },
    {
      category: "TRADITIONAL",
      summary: "The Natural History Museum of Jamaica lists it as susumber, gully bean or turkey berry, and notes that it is edible.",
      source: "nhmj",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A 2013 review recorded these traditional uses:\n- Colds and coughs: dried leaf powder in hot water or milk (India)\n- Cough: powdered fried fruit (India)\n- Cooling the body: leaf juice (India)\n- Worms: cooked fruit (India)\n- Asthma, diabetes and high blood pressure: root and leaf juice (Bangladesh)\n- Liver disease, tuberculosis and anemia: root juice (Brazil)\nIts uses are also recorded in Ayurveda and Chinese medicine.",
      source: "yousaf",
    },
    {
      category: "TRADITIONAL",
      summary: "In Cameroon, it's used in traditional medicine for pain and inflammation.",
      source: "ndebia",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Chinese medicine, it's considered to reduce inflammation and to be calming. In the Philippines, a tea made by boiling it in water is used for hyperactivity.",
      source: "ren",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a water-based leaf extract reduced pain and swelling.",
      source: "ndebia",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies have reported that it may fight germs and viruses, act as an antioxidant, relieve pain, help reduce inflammation and protect against stomach ulcers. It also affected blood pressure and blood clotting, and was toxic to cancer cells.\n\nTechnical detail: antimicrobial, anti-ulcerogenic, antiviral, anti-platelet aggregation, antioxidant, analgesic, anti-inflammatory, systolic blood pressure modification and cytotoxic activity.",
      source: "yousaf",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with high blood pressure, a water-based fruit extract given for 30 days caused no deaths or visible signs of harm. In Mexico, a water-based berry extract has been reported to be deadly to mice.\n\nTechnical detail: 200 mg/kg/day by mouth, alone or with L-NAME (40 mg/kg/day).",
      source: "yousaf",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In zebrafish, some natural compounds from the fruit reduced seizures. In lab tests, most of the compounds didn't harm liver cells.\n\nTechnical detail: 22 steroidal saponins isolated; torvosides X, Y and A and a spirostanol glycoside were active in a pentylenetetrazole-induced seizure model; no hepatotoxicity in LO2 cells for most compounds.",
      source: "ren",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Susumber is normally a safe food, but some batches of berries have poisoned people. Poisonous berries look the same as safe ones.\nIn two outbreaks, 11 people in New York City and Toronto got sick after eating Jamaican susumber berries. The Toronto group had eaten unripe berries. Symptoms started the next morning or about 14 hours later and included:\n- Stomach upset and diarrhea\n- Dizziness and weakness\n- Slurred speech and drooping of the face\n- Unsteady walking\nTwo people needed a breathing machine.\n\nTechnical detail: solasonine, larger amounts of solamargine and other steroidal glycoalkaloids were found in the toxic berries but not in non-toxic ones; one patient had hypercapnic respiratory failure.",
      source: "smith",
    },
    {
      category: "TOXICITY",
      description:
        "A 2023 review found 17 reported cases of susumber berry poisoning. Almost all had slurred speech and unsteady walking, and many had blurry vision. The symptoms can look like a stroke, so they need emergency care.\n6 people needed intensive care and 3 needed a breathing tube. 14 recovered quickly and completely, and 3 stayed in hospital for up to a month.\n\nTechnical detail: dysarthria 94%, unstable gait 94%, nystagmus or gaze deviation 47%, blurred vision 59%, autonomic symptoms 29%. Toxins altered by post-harvest stress or temperature changes may act on cholinergic receptors or inhibit acetylcholinesterase.",
      source: "tamaiev",
    },
    {
      category: "TOXICITY",
      description:
        "In one reported case, a 54-year-old woman had vision, speech and walking problems, vomiting and muscle aches after eating susumber berries. Doctors first thought she was having a stroke. Toxic compounds were found in her leftover berries and her blood, but not in store-bought berries tested afterward.\n\nTechnical detail: solasonine and solanidine detected; electromyography showed early full recruitment and myotonia.",
      source: "glover",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for colds and coughs in India. This use hasn't been tested in people." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used for asthma in Bangladesh. This use hasn't been tested in people." },
    {
      slug: "high-blood-pressure",
      notes: "Traditionally used for high blood pressure in Bangladesh, and it affected blood pressure in animal studies. It hasn't been tested in people.",
    },
    { slug: "high-blood-sugar", notes: "Traditionally used for diabetes in Bangladesh. This use hasn't been tested in people." },
    { slug: "sibo-and-parasites", notes: "The cooked fruit is traditionally used for worms in India. This use hasn't been tested in people." },
    { slug: "liver-disease", notes: "The root juice is traditionally used for liver disease in Brazil. This use hasn't been tested in people." },
  ],
});

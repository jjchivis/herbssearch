import { run } from "./lib/populate-herb";

// Palo azul (Eysenhardtia polystachya, kidneywood), from a 2020 review of the
// genus (Garcia-Campoy et al.), a 2022 review of Mexican kidney-stone plants
// (Sansores-España et al.), lab and animal studies on diabetes (2014, 2016),
// arthritis (2018), kidney injury (2025) and toxicity (2018), and the 2009
// study explaining why its tea glows blue (Acuña et al.). No studies in people
// were found (PubMed Central, PubMed, Native American Ethnobotany Database).

run({
  name: "Palo Azul",
  profile: {
    family: "Fabaceae",
    genus: "Eysenhardtia",
    species: "polystachya",
    nativeRange: "Mexico",
    partsUsed: "The bark and wood, soaked in water as a tea",
  },
  sources: {
    garciaCampoy: {
      title: "Phytochemical and Pharmacological Study of the Eysenhardtia Genus",
      author: "Garcia-Campoy A, Garcia E, Muñiz-Ramirez A",
      journal: "Plants",
      publicationDate: "2020-08-31",
      doi: "10.3390/plants9091124",
      pmid: "32878035",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7570365/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sansores: {
      title:
        "Plants Used in Mexican Traditional Medicine for the Management of Urolithiasis: A Review of Preclinical Evidence, Bioactive Compounds, and Molecular Mechanisms",
      author: "Sansores-España D, Pech-Aguilar AG, Cua-Pech KG, Medina-Vera I, Guevara-Cruz M, Gutiérrez-Solis AL, et al.",
      journal: "Molecules",
      publicationDate: "2022-03-21",
      doi: "10.3390/molecules27062008",
      pmid: "35335370",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8949565/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    perezGutierrez: {
      title:
        "Properties of Flavonoids Isolated from the Bark of Eysenhardtia polystachya and Their Effect on Oxidative Stress in Streptozotocin-Induced Diabetes Mellitus in Mice",
      author: "Perez-Gutierrez RM, Garcia-Campoy AH, Muñiz-Ramirez A",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2016-01-01",
      doi: "10.1155/2016/9156510",
      pmid: "27668038",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5030410/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gutierrezBaez: {
      title: "Evaluation of antidiabetic, antioxidant and antiglycating activities of the Eysenhardtia polystachya",
      author: "Gutierrez RM, Baez EG",
      journal: "Pharmacognosy Magazine",
      publicationDate: "2014-04-01",
      doi: "10.4103/0973-1296.133295",
      pmid: "24991120",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4078337/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    alonsoCastro: {
      title:
        "Pharmacological and toxicological study of a chemical-standardized ethanol extract of the branches and leaves from Eysenhardtia polystachya (Ortega) Sarg. (Fabaceae)",
      author: "Alonso-Castro AJ, Zapata-Morales JR, Arana-Argáez V, Torres-Romero JC, Ramírez-Villanueva E, Pérez-Medina SE, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2018-10-05",
      doi: "10.1016/j.jep.2018.06.016",
      pmid: "29913299",
      url: "https://doi.org/10.1016/j.jep.2018.06.016",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    parraEspejel: {
      title: "Nephroprotective activity of Eysenhardtia polystachya through antioxidant, H2S, and NO pathways",
      author: "Parra-Espejel EJ, Hipólito-Jiménez SJ, Galicia González MD, Montes Rojas D, Llera-Rojas VG, Velázquez-Moyado JA",
      journal: "Naunyn-Schmiedeberg's Archives of Pharmacology",
      publicationDate: "2025-06-12",
      doi: "10.1007/s00210-025-04331-4",
      pmid: "40504372",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678624/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pabloPerez: {
      title:
        "The Ethanolic Extract of Eysenhardtia polystachya (Ort.) Sarg. Bark and Its Fractions Delay the Progression of Rheumatoid Arthritis and Show Antinociceptive Activity in Murine Models",
      author: "Pablo-Pérez SS, Parada-Cruz B, Barbier OC, Meléndez-Camargo ME",
      journal: "Iranian Journal of Pharmaceutical Research",
      publicationDate: "2018-01-01",
      pmid: "29755555",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5937094/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    acuna: {
      title: "Structure and formation of the fluorescent compound of Lignum nephriticum",
      author: "Acuña AU, Amat-Guerri F, Morcillo P, Liras M, Rodríguez B",
      journal: "Organic Letters",
      publicationDate: "2009-07-16",
      doi: "10.1021/ol901022g",
      pmid: "19586062",
      url: "https://doi.org/10.1021/ol901022g",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Kidneywood", type: "COMMON_NAME" },
    { name: "Palo Dulce", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Coatli", type: "TRADITIONAL_NAME" },
    { name: "Lignum Nephriticum", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Mexican traditional medicine, a tea made from the wood or bark is used for kidney stones and other stones in the urinary tract.",
      source: "sansores",
    },
    {
      category: "TRADITIONAL",
      summary: "It's also used for rheumatism (painful joints), and for bladder problems that come with diabetes.",
      source: "perezGutierrez",
    },
    {
      category: "TRADITIONAL",
      summary: "Folk healers have also used it for infections, diarrhea, swelling and pain.",
      source: "alonsoCastro",
    },
    {
      category: "TRADITIONAL",
      summary:
        "When the wood is soaked in water, the tea glows bright blue. This was first recorded in the 1500s, when the wood was known as Lignum nephriticum (\"kidney wood\").\nThe glow comes from a compound that forms in the water as one of the plant's natural chemicals breaks down. It isn't present in the plant itself.\n\nTechnical detail: the fluorescent compound is a four-ring tetrahydromethanobenzofuro[2,3-d]oxacine, the end product of a spontaneous, repeated oxidation of at least one of the tree's flavonoids.",
      source: "acuna",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2022 review of lab and animal studies looked at plants used in Mexico for kidney stones, including palo azul. Their natural compounds may help stop crystals forming and clumping into stones, and may increase urine flow. None of this has been tested in people.\n\nTechnical detail: proposed actions are litholytic, antispasmodic and diuretic effects, and inhibition of crystal nucleation, growth and aggregation, possibly through antioxidant, anti-inflammatory and antimicrobial mechanisms.",
      source: "sansores",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic mice, a bark extract (100–400 mg per kg of body weight, by mouth) lowered blood sugar and cholesterol and raised insulin. In lab tests it also acted as an antioxidant.\n\nTechnical detail: methanol–water bark extract in streptozotocin-induced mildly and severely diabetic mice. It also lowered triglycerides, LDL, TBARS and G6Pase, raised HDL, glycogen, glucokinase and hexokinase, and inhibited advanced glycation end products (AGEs) in vitro.",
      source: "gutierrezBaez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In another study in diabetic mice, five compounds taken from the bark (20 mg per kg a day for 4 weeks) did not lower blood sugar. But markers of liver damage fell, and the body's own antioxidant enzymes rose in the liver, kidneys and pancreas.\nIn lab tests, the same compounds acted as antioxidants and protected heart cells from oxidative stress (damage from unstable oxygen molecules).\n\nTechnical detail: compounds 1–5 (chalcones, dihydrochalcones and a pterocarpan) in streptozotocin–nicotinamide diabetic mice lowered SGOT, SGPT, ALP and lipid peroxidation (TBARS/MDA) and raised SOD, CAT, GSH-Px and GSH; in vitro, they scavenged DPPH, hydroxyl, nitric oxide, superoxide, ABTS and hydrogen peroxide radicals and reduced reactive oxygen species in H9c2 cells. The methods describe male CD1 mice (10 per group), while the results tables mention rats (6 per group).",
      source: "perezGutierrez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Two compounds from the plant, coatline B and matlaline, were given before a sudden kidney injury in animal and lab models. They reduced damage to kidney tissue and prevented a severe drop in kidney function.\n\nTechnical detail: acute kidney injury models in vivo and in vitro; the compounds showed antioxidant activity and acted on nitric oxide (NO) and hydrogen sulfide (H2S) pathways.",
      source: "parraEspejel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with arthritis, a bark extract (25–200 mg per kg a day, by mouth) eased inflammation and reduced damage to the joints. In mice, it also reduced signs of pain.\n\nTechnical detail: complete Freund's adjuvant-induced arthritis in rats; the extract and its flavonoid-rich fractions lowered serum IL-6, TNF-α and GM-CSF. Antinociception was tested with the acetic acid writhing and hot-plate tests in mice.",
      source: "pabloPerez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract of the branches and leaves stopped the growth of E. coli and Staphylococcus aureus bacteria, but not of drug-resistant germs. In mice, it eased diarrhea and pain without causing drowsiness.\n\nTechnical detail: ethanol extract, main compound D-pinitol (26.93%). MIC 1.56 µg/mL (E. coli) and 0.78 µg/mL (S. aureus); MIC > 100 µg/mL against multidrug-resistant strains. Antidiarrheal ED50 7.5 mg/kg; antinociceptive ED50 117 mg/kg (acetic acid test).",
      source: "alonsoCastro",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In mice, an extract of the branches and leaves showed low toxicity: even 2,000 mg per kg of body weight didn't kill half the animals. In lab tests, it damaged the DNA of human blood cells only at high concentrations.\n\nTechnical detail: LD50 > 2000 mg/kg (oral and intraperitoneal); comet assay showed DNA damage in human peripheral blood mononuclear cells only above 200 µg/mL.",
      source: "alonsoCastro",
    },
  ],
  symptoms: [
    { slug: "kidney-stones", notes: "Traditionally used in Mexico for kidney stones. Studied only in the lab and in animals." },
    {
      slug: "high-blood-sugar",
      notes:
        "Traditionally used for diabetes. A bark extract lowered blood sugar in diabetic mice, but compounds from the bark didn't in another mouse study. It hasn't been tested in people.",
    },
    { slug: "joint-discomfort", notes: "Traditionally used for rheumatism. A bark extract eased arthritis in rats." },
    { slug: "diarrhea", notes: "Traditionally used for diarrhea. An extract eased diarrhea in mice." },
  ],
  preparations: [
    {
      slug: "tea-infusion",
      notes: "The wood or bark is soaked in water to make a tea, which glows blue.",
      source: "acuna",
    },
  ],
});

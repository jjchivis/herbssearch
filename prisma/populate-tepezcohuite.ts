import { run } from "./lib/populate-herb";

// Tepezcohuite (Mimosa tenuiflora), from the Healthline overview (Davidson 2021,
// updated 2022) and the primary studies it cites: Camargo-Ricalde 2000, the two
// venous leg ulcer trials (Rivera-Arce 2007; Lammoglia-Ordiales 2011), a 2017
// meta-analysis, lab and animal studies, and the goat and rat birth-defect studies.
// Plus a 2021 systematic review of its effects on unborn animals and a 2025 DMT
// study. Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;
const SR = "systematic_review" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;

run({
  name: "Tepezcohuite",
  profile: {
    family: "Fabaceae",
    genus: "Mimosa",
    species: "tenuiflora",
    nativeRange: "Southern Mexico (Oaxaca and Chiapas) through Central America to Colombia, Venezuela and Brazil",
    partsUsed: "The bark",
  },
  sources: {
    healthline: {
      title: "What Is Tepezcohuite, and Does It Benefit Your Skin?",
      author: "Davidson K",
      organization: "Healthline",
      publicationDate: "2021-02-23",
      url: "https://www.healthline.com/nutrition/tepezcohuite",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    camargo: {
      title: "Description, distribution, anatomy, chemical composition and uses of Mimosa tenuiflora (Fabaceae-Mimosoideae) in Mexico",
      author: "Camargo-Ricalde SL",
      journal: "Revista de Biología Tropical",
      publicationDate: "2000-12-01",
      pmid: "11487939",
      url: "https://pubmed.ncbi.nlm.nih.gov/11487939/",
      sourceType: P,
      tier: T3,
    },
    riveraPharm: {
      title: "Pharmacognostical studies of the plant drug Mimosae tenuiflorae cortex",
      author: "Rivera-Arce E, Gattuso M, Alvarado R, Zárate E, Agüero J, Feria I, Lozoya X",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2007-07-04",
      doi: "10.1016/j.jep.2007.06.023",
      pmid: "17709219",
      url: "https://pubmed.ncbi.nlm.nih.gov/17709219/",
      sourceType: P,
      tier: T3,
    },
    riveraTrial: {
      title: "Therapeutic effectiveness of a Mimosa tenuiflora cortex extract in venous leg ulceration treatment",
      author: "Rivera-Arce E, Chávez-Soto MA, Herrera-Arellano A, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2006-09-09",
      doi: "10.1016/j.jep.2006.08.032",
      pmid: "17088036",
      url: "https://pubmed.ncbi.nlm.nih.gov/17088036/",
      sourceType: P,
      tier: T3,
    },
    lammoglia: {
      title: "A randomised comparative trial on the use of a hydrogel with tepescohuite extract (Mimosa tenuiflora cortex extract-2G) in the treatment of venous leg ulcers",
      author: "Lammoglia-Ordiales L, Vega-Memije ME, Herrera-Arellano A, et al.",
      journal: "International Wound Journal",
      publicationDate: "2011-12-01",
      doi: "10.1111/j.1742-481x.2011.00900.x",
      pmid: "22128789",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7950610/",
      sourceType: P,
      tier: T3,
    },
    freitas: {
      title: "The use of medicinal plants in venous ulcers: a systematic review with meta-analysis",
      author: "Freitas AL, Santos CA, Souza CA, et al.",
      journal: "International Wound Journal",
      publicationDate: "2017-05-09",
      doi: "10.1111/iwj.12751",
      pmid: "28488305",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7950104/",
      sourceType: SR,
      tier: T2,
    },
    zippel: {
      title: "Arabinogalactans from Mimosa tenuiflora (Willd.) Poiret bark as active principles for wound-healing properties",
      author: "Zippel J, Deters A, Hensel A",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2009-06-06",
      doi: "10.1016/j.jep.2009.05.034",
      pmid: "19505559",
      url: "https://pubmed.ncbi.nlm.nih.gov/19505559/",
      sourceType: P,
      tier: T3,
    },
    cruz: {
      title: "Antinoceptive and Anti-inflammatory Activities of the Ethanolic Extract, Fractions and Flavones Isolated from Mimosa tenuiflora (Willd.) Poir (Leguminosae)",
      author: "Cruz MP, Andrade CM, Silva KO, et al.",
      journal: "PLoS One",
      publicationDate: "2016-03-08",
      doi: "10.1371/journal.pone.0150839",
      pmid: "26954375",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4783012/",
      sourceType: P,
      tier: T3,
    },
    pimentel: {
      title: "Mimosa tenuiflora as a cause of malformations in ruminants in the northeastern Brazilian semiarid rangelands",
      author: "Pimentel LA, Correa FR, Gardner D, et al.",
      journal: "Veterinary Pathology",
      publicationDate: "2007-11-01",
      doi: "10.1354/vp.44-6-928",
      pmid: "18039908",
      url: "https://pubmed.ncbi.nlm.nih.gov/18039908/",
      sourceType: P,
      tier: T3,
    },
    medeiros: {
      title: "Teratogenicity of Mimosa tenuiflora seeds to pregnant rats",
      author: "Medeiros RM, de Figueiredo AP, Benício TM, Dantas FP, Riet-Correa F",
      journal: "Toxicon",
      publicationDate: "2007-06-26",
      doi: "10.1016/j.toxicon.2007.06.012",
      pmid: "18078971",
      url: "https://pubmed.ncbi.nlm.nih.gov/18078971/",
      sourceType: P,
      tier: T3,
    },
    bezerra: {
      title: "Phytochemistry and teratogenic potential of Mimosa tenuiflora (Willd.) Poir. (Fabaceae) in ruminants: A systematic review",
      author: "Lima Bezerra JJ, Vieira Pinheiro AA, Barbosa Lucena R",
      journal: "Toxicon",
      publicationDate: "2021-03-13",
      doi: "10.1016/j.toxicon.2021.03.010",
      pmid: "33727031",
      url: "https://pubmed.ncbi.nlm.nih.gov/33727031/",
      sourceType: SR,
      tier: T2,
    },
    oliveira: {
      title: "Extraction and Characterization of N,N-Dimethyltryptamine from Mimosa tenuiflora: A Multivariate Approach",
      author: "de Oliveira LC, Pereira Galdino T, Pedro MDS, et al.",
      journal: "ACS Omega",
      publicationDate: "2025-09-16",
      doi: "10.1021/acsomega.5c06560",
      pmid: "41048742",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12489689/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Mimosa hostilis", type: "SCIENTIFIC_SYNONYM" },
    { name: "Tepescohuite", type: "COMMON_NAME" },
    { name: "Jurema Preta", type: "COMMON_NAME" },
    { name: "Jurema", type: "COMMON_NAME" },
    { name: "Calumbi", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In southern Mexico, tepezcohuite bark is used on skin wounds and burns as a tea, powder or ointment, and the wood is used for fuel and fences. Its use on burns became widely popular in Mexico after disasters in the 1980s, when news reports spread many myths about it. Today it's sold in shampoos, creams, soaps and capsules.",
      source: "camargo",
    },
    {
      category: "TRADITIONAL",
      summary:
        "According to Healthline, the Red Cross used tepezcohuite bark powder to treat more than 5,000 people burned in the 1984 gas explosion in Mexico City. In traditional medicine it has also been used for coughs, bronchitis, vaginal infections, stomach ulcers and pain. In Brazil, the bark and root are made into a mind-altering drink for the religious ceremony called Jurema.",
      source: "healthline",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Bahia, Brazil, where it's called jurema preta, the bark is used for coughs and to heal wounds.",
      source: "cruz",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The bark is rich in tannins (about 16% in genuine samples), which are thought to be behind its wound-healing effects. Commercial tepezcohuite powder is sometimes mixed with other plant material, so its identity can't always be trusted.",
      source: "riveraPharm",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a lab study on human skin cells, sugar compounds (arabinogalactans) from the bark helped the cells that build skin tissue grow. A plain water extract had the opposite effect at the doses tested.",
      source: "zippel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a bark extract reduced pain responses and lowered signs of inflammation. This hasn't been tested in people.\n\nTechnical detail: ethanolic bark extract 50–200 mg/kg; writhing, formalin and von Frey tests; sakuranetin identified as one active flavone.",
      source: "cruz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial in Mexico of people with leg ulcers caused by poor vein circulation, a gel with 5% tepezcohuite bark extract was compared with the same gel without it, along with cleaning and dressings. After 8 weeks, ulcers in the tepezcohuite group had shrunk by 92% on average, while only one person in the comparison group improved. No side effects were seen.",
      source: "riveraTrial",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A later trial in 41 people with the same kind of leg ulcers, also using compression bandages, found no difference: ulcers shrank about as much with the plain gel as with the tepezcohuite gel.\n\nTechnical detail: mean area reduction 6.29 cm² (MTC-2G) vs 5.85 cm² (hydrogel), P = 0.815; 32 of 41 completed.",
      source: "lammoglia",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 review combined the two tepezcohuite gel trials (42 people in total) and called it a promising treatment for leg ulcers. The two trials' results differed widely, so the evidence is weak.\n\nTechnical detail: heterogeneity I² = 84%; mean Jadad score of included studies 2.5.",
      source: "freitas",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There are no trials of tepezcohuite for skin aging, acne or psoriasis, or for any use by mouth.",
      source: "healthline",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Few side effects have been reported when it's used on the skin. Burning, tingling or skin irritation can happen.",
      source: "healthline",
    },
    {
      category: "PREGNANCY",
      description:
        "Don't use tepezcohuite if you're pregnant. In a study of pregnant goats fed the fresh plant, 3 of 4 kids were born with defects such as cleft lip and eye problems.",
      source: "pimentel",
    },
    {
      category: "PREGNANCY",
      description: "In pregnant rats fed feed containing 10% tepezcohuite seeds, 40 of 101 unborn young had bone defects, compared with 3 of 58 in untreated rats.",
      source: "medeiros",
    },
    {
      category: "TOXICITY",
      description:
        "A 2021 review of 24 studies found the plant can cause birth defects, miscarriage and death of unborn young in farm animals, especially sheep and goats. The cause may be DMT, a mind-altering compound the plant contains.",
      source: "bezerra",
    },
    {
      category: "TOXICITY",
      description:
        "Both the stem bark and the root bark contain DMT, a strong hallucinogen.",
      source: "oliveira",
    },
    {
      category: "TOXICITY",
      description:
        "The bark and roots are mind-altering when swallowed, and in ceremonies they're combined with MAO inhibitors to cause short-term hallucinations. Healthline advises not taking tepezcohuite by mouth because its safety is unknown, and using it only on the skin after checking with a health professional.",
      source: "healthline",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Its safety isn't known for people who take medicines, have health conditions, or are breastfeeding, so it's best avoided in these cases.",
      source: "healthline",
    },
  ],
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes: "Used on wounds and burns in Mexico. Of two small trials of a bark gel for leg ulcers, one found it helped and one found no benefit.",
    },
  ],
});

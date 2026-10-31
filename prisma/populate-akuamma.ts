import { run } from "./lib/populate-herb";

// Akuamma (Picralima nitida), from a 2014 review (Erharuyi et al., abstract
// only), the opioid studies of its seed alkaloids (Creed et al. 2021; Gour et
// al. 2025), a 2018 drug-interaction study (Showande et al.), rat toxicity and
// pregnancy studies (Awodele et al. 2019, abstract only; Fakeye et al. 2004,
// abstract only), and animal studies of cough, blood sugar, hormones and a
// malaria remedy. Family per GBIF.

run({
  name: "Akuamma",
  profile: {
    family: "Apocynaceae",
    genus: "Picralima",
    species: "nitida",
    nativeRange: "West and Central Africa",
    partsUsed: "Mainly the seeds; also the stem bark and leaves",
  },
  sources: {
    erharuyi: {
      title: "Medicinal uses, phytochemistry and pharmacology of Picralima nitida (Apocynaceae) in tropical diseases: a review",
      author: "Erharuyi O, Falodun A, Langer P",
      journal: "Asian Pacific Journal of Tropical Medicine",
      publicationDate: "2014-01-01",
      doi: "10.1016/S1995-7645(13)60182-0",
      pmid: "24418074",
      url: "https://doi.org/10.1016/S1995-7645(13)60182-0",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    creed: {
      title: "Isolation and Pharmacological Characterization of Six Opioidergic Picralima nitida Alkaloids",
      author: "Creed SM, Gutridge AM, Argade MD, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "2020-12-16",
      doi: "10.1021/acs.jnatprod.0c01036",
      pmid: "33326237",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7932029/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gour: {
      title: "Comprehensive pharmacokinetics and ADME evaluation of Akuamma alkaloids",
      author: "Gour A, Creed SM, Riley AP, Sharma A",
      journal: "Journal of Chromatography B",
      publicationDate: "2025-06-24",
      doi: "10.1016/j.jchromb.2025.124713",
      pmid: "40582228",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13130209/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    showande: {
      title: "Potential inhibition of major human cytochrome P450 isoenzymes by selected tropical medicinal herbs—Implication for herb–drug interactions",
      author: "Showande SJ, Fakeye TO, Kajula M, Hokkanen J, Tolonen A",
      journal: "Food Science & Nutrition",
      publicationDate: "2018-11-19",
      doi: "10.1002/fsn3.789",
      pmid: "30680158",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6341161/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    awodele: {
      title: "Toxicological evaluation of Picralima nitida in rodents",
      author: "Awodele O, Coulidiaty AGV, Afolayan GO, Agagu S, Omoseyindemi B, Busia K",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2019-03-07",
      doi: "10.1016/j.jep.2019.03.008",
      pmid: "30853649",
      url: "https://doi.org/10.1016/j.jep.2019.03.008",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fakeye: {
      title: "Evaluation of toxicity profile of an alkaloidal fraction of the stem bark of Picralima nitida",
      author: "Fakeye TO, Awe SO, Odelola HA, Ola-Davies OE, Itiola OA, Obajuluwa T",
      journal: "Journal of Herbal Pharmacotherapy",
      publicationDate: "2004-01-01",
      doi: "10.1080/J157v04n03_04",
      pmid: "15829468",
      url: "https://doi.org/10.1080/J157v04n03_04",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dapaah: {
      title: "Antitussive, expectorant and analgesic effects of the ethanol seed extract of Picralima nitida (Stapf) Th. & H. Durand",
      author: "Dapaah G, Koffuor GA, Mante PK, Ben IO",
      journal: "Research in Pharmaceutical Sciences",
      publicationDate: "2016-03-01",
      pmid: "27168749",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4852654/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    teugwa: {
      title: "Antioxidant and antidiabetic profiles of two African medicinal plants: Picralima nitida (Apocynaceae) and Sonchus oleraceus (Asteraceae)",
      author: "Teugwa CM, Mejiato PC, Zofou D, Tchinda BT, Boyom FF",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2013-07-15",
      doi: "10.1186/1472-6882-13-175",
      pmid: "23855679",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3718716/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    otoo: {
      title: "Assessment of an ethanolic seed extract of Picralima nitida ([Stapf] Th. and H. Durand) on reproductive hormones and its safety for use",
      author: "Otoo LF, Koffuor GA, Ansah C, Mensah KB, Benneh C, Ben IO",
      journal: "Journal of Intercultural Ethnopharmacology",
      publicationDate: "2015-10-01",
      doi: "10.5455/jice.20151030085004",
      pmid: "26649234",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4665024/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    idowu: {
      title: "In vivo anti-plasmodial activities and toxic impacts of lime extract of a combination of Picralima nitida, Alstonia boonei and Gongronema latifolium in mice infected with Chloroquine-sensitive Plasmodium berghei",
      author: "Idowu ET, Ajaegbu HC, Omotayo AI, Aina OO, Otubanjo OA",
      journal: "African Health Sciences",
      publicationDate: "2015-12-01",
      doi: "10.4314/ahs.v15i4.27",
      pmid: "26958029",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4765397/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Picralima nitida", type: "SCIENTIFIC_SYNONYM" },
    { name: "Abere", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
    { name: "Otosu", type: "REGIONAL_NAME", region: "Nigeria (Igbo)" },
    { name: "Mkpokiri", type: "REGIONAL_NAME", region: "Nigeria (Igbo)" },
  ],
  constituents: [
    { name: "Akuammine", slug: "akuammine", type: "alkaloid" },
    { name: "Akuammicine", slug: "akuammicine", type: "alkaloid" },
    { name: "Akuammiline", slug: "akuammiline", type: "alkaloid" },
    { name: "Picraline", slug: "picraline", type: "alkaloid" },
    { name: "Pseudo-akuammigine", slug: "pseudo-akuammigine", type: "alkaloid" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Seeds used across West Africa for pain, fever and malaria." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In West African folk medicine, parts of the akuamma tree are used for fever, high blood pressure, jaundice, period pain, stomach and gut problems, and malaria.",
      source: "erharuyi",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The seeds are mainly used for pain and fever. In Ghana, a seed product called Picap is a popular pain reliever. In the US, akuamma is sold online and in shops as capsules, powders and tinctures, which people take for pain, mood and stress.",
      source: "gour",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Nigeria the seeds are used for diabetes, jaundice, pneumonia, malaria and high blood pressure. For rheumatism, the bark is ground and cooked with other plants, and a spoonful of the mixture is taken in corn pap once a day.",
      source: "showande",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In southwestern Nigeria, a common malaria remedy is made from akuamma seeds, Alstonia boonei bark and Gongronema latifolium leaves, extracted in lime.",
      source: "idowu",
    },
    {
      category: "TRADITIONAL",
      summary: "Akuamma is used traditionally for cough.",
      source: "dapaah",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The seed's main compounds act on the body's opioid receptors, the same targets as morphine, but weakly. In mice, they did little to block pain from heat, which doesn't support the seeds' traditional use for pain.",
      source: "creed",
    },
    {
      category: "PRECLINICAL",
      summary:
        "When rats were given the ground seed by mouth, only one of its main compounds, akuammine, reached the blood in meaningful amounts, and even that was poorly absorbed.",
      source: "gour",
    },
    {
      category: "PRECLINICAL",
      summary: "In guinea pigs and mice, a seed extract reduced coughing, helped clear mucus and reduced pain.",
      source: "dapaah",
    },
    {
      category: "PRECLINICAL",
      summary: "A leaf extract lowered blood sugar by about 38% in diabetic mice.",
      source: "teugwa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The Nigerian malaria remedy containing akuamma slowed malaria parasites in infected mice. It also raised liver enzymes, a sign of liver stress, and at the highest dose raised a kidney marker.",
      source: "idowu",
    },
    {
      category: "PRECLINICAL",
      summary: "In chicks, a seed extract acted like both testosterone and estrogen. It didn't harm the liver, kidneys or blood.",
      source: "otoo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies have found that akuamma extracts or compounds relieve pain and swelling, lower blood sugar and blood pressure, act against malaria parasites and germs, and protect against stomach ulcers.",
      source: "erharuyi",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "When pregnant rats were given a seed extract, their young had lower birth weights and signs of liver and kidney harm. The researchers concluded it should not be used by pregnant women.",
      source: "awodele",
    },
    {
      category: "TOXICITY",
      description:
        "In a 90-day rat study, a seed extract damaged DNA at every dose tested and caused signs of liver damage. It also changed reproductive hormone levels.",
      source: "awodele",
    },
    {
      category: "TOXICITY",
      description:
        "An alkaloid extract of the stem bark damaged the liver when injected into animals. Put on the skin or in the eye, it caused no irritation.",
      source: "fakeye",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "In lab tests, akuamma seed extract strongly blocked CYP2D6, a liver enzyme that breaks down many medicines, and moderately blocked two others (CYP3A4 and CYP2C19). This could raise the levels of those medicines in the body. The researchers called it a particular concern; it hasn't been tested in people.",
      source: "showande",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Its compounds act on the body's opioid receptors. Some people take it to self-treat pain or opioid withdrawal. Reports that it doesn't cause a high, tolerance or dependence are only anecdotal and haven't been studied.",
      source: "creed",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "At very high doses, a seed extract made mice sleepy.",
      source: "dapaah",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "The seeds are a traditional remedy for fever. Not tested in people." },
    { slug: "cough", notes: "Used traditionally for cough. A seed extract reduced coughing in guinea pigs; not tested in people." },
    { slug: "high-blood-sugar", notes: "Used traditionally for diabetes. A leaf extract lowered blood sugar in diabetic mice; not tested in people." },
    { slug: "high-blood-pressure", notes: "Used traditionally for high blood pressure, and lowered it in animal studies. Not tested in people." },
  ],
});

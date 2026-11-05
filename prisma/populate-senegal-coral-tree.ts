import { run } from "./lib/populate-herb";

// Senegal Coral Tree (Erythrina senegalensis), from a 2008 survey of its uses in
// Mali (Togola et al.), a 2000 Nigerian study (Saidu et al., abstract only), a
// 2019 rat study (Bilanda et al., abstract only), a 2015 heart cell study (Nembo
// et al., abstract only), a 2021 systematic review and 2022 lab study (Fofana et
// al.), a 2023 seed
// lectin study (Enoma et al.) and a 2025 review of the Erythrina genus
// (Muchtaridi et al.). Family per GBIF.

run({
  name: "Senegal Coral Tree",
  profile: { family: "Fabaceae", genus: "Erythrina", species: "senegalensis", nativeRange: "West Africa", partsUsed: "The stem bark, roots, leaves and seeds" },
  sources: {
    enoma: {
      title: "Antimicrobial activities and phylogenetic study of Erythrina senegalensis DC (Fabaceae) seed lectin",
      author: "Enoma S, Adewole TS, Agunbiade TO, Kuku A",
      journal: "Biotechnologia",
      publicationDate: "2023-03-27",
      doi: "10.5114/bta.2023.125083",
      pmid: "37064277",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10091453/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    muchtaridi: {
      title: "Therapeutic Potential of Erythrina Genus: Bioactive Phytoconstituents with Potent Antiviral and Antimicrobial Activities",
      author: "Muchtaridi M, Lestyawan S, Fakhirah MA, et al.",
      journal: "Plants",
      publicationDate: "2025-10-02",
      doi: "10.3390/plants14193053",
      pmid: "41095193",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12526376/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    togola: {
      title: "Ethnopharmacological uses of Erythrina senegalensis: a comparison of three areas in Mali, and a link between traditional knowledge and modern biological science",
      author: "Togola A, Austarheim I, Theïs A, Diallo D, Paulsen BS",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2008-03-05",
      doi: "10.1186/1746-4269-4-6",
      pmid: "18321374",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2278129/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    saidu: {
      title: "Antiplasmodial, analgesic, and anti-inflammatory activities of the aqueous extract of the stem bark of Erythrina senegalensis",
      author: "Saidu K, Onah J, Orisadipe A, Olusola A, Wambebe C, Gamaniel K",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2000-07-01",
      doi: "10.1016/S0378-8741(00)00188-4",
      pmid: "10904174",
      url: "https://doi.org/10.1016/S0378-8741(00)00188-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bilanda: {
      title: "Antihypertensive and antidiabetic activities of Erythrina senegalensis DC (Fabaceae) stem bark aqueous extract on diabetic hypertensive rats",
      author: "Bilanda DC, Bidingha RÀG, Djomeni Dzeufiet PD, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2019-08-28",
      doi: "10.1016/j.jep.2019.112200",
      pmid: "31472272",
      url: "https://doi.org/10.1016/j.jep.2019.112200",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nembo: {
      title: "In vitro chronotropic effects of Erythrina senegalensis DC (Fabaceae) aqueous extract on mouse heart slice and pluripotent stem cell-derived cardiomyocytes",
      author: "Nembo EN, Atsamo AD, Nguelefack TB, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2015-02-11",
      doi: "10.1016/j.jep.2015.02.002",
      pmid: "25680843",
      url: "https://doi.org/10.1016/j.jep.2015.02.002",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fofana2022: {
      title: "In Vitro Antioxidant and Anticancer Properties of Various E. senegalensis Extracts",
      author: "Fofana S, Delporte C, Calvo Esposito R, et al.",
      journal: "Molecules",
      publicationDate: "2022-04-16",
      doi: "10.3390/molecules27082583",
      pmid: "35458781",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9025838/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fofana: {
      title: "Systematic Review of Potential Anticancerous Activities of Erythrina senegalensis DC (Fabaceae)",
      author: "Fofana S, Ouédraogo M, Esposito RC, et al.",
      journal: "Plants",
      publicationDate: "2021-12-22",
      doi: "10.3390/plants11010019",
      pmid: "35009024",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8747466/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Nté", type: "REGIONAL_NAME", region: "Mali" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Used across West Africa for infections, high blood pressure, gut problems, diabetes and hemorrhoids." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Africa it's traditionally used for infections, high blood pressure, stomach and gut problems, leprosy, diabetes and hemorrhoids.",
      source: "enoma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Compounds from the tree, mainly flavonoids, showed some of the strongest activity in its genus against viruses, including HIV and hepatitis, and against germs in lab tests. A protein from its seeds also killed bacteria.",
      source: "muchtaridi",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Healers in three areas of Mali use it for malaria, jaundice, infections, stomach problems, missed periods, period pain, infertility and body pain, and also to cause abortion. Preparations include decoctions and bark powder mixed with food or water.",
      source: "togola",
    },
    {
      category: "TRADITIONAL",
      summary: "In northern Nigeria the stem bark is commonly used for fevers.",
      source: "saidu",
    },
    {
      category: "TRADITIONAL",
      summary: "In Cameroon it's used traditionally to relax the body and lower blood sugar, for heart and blood vessel problems and diabetes.",
      source: "bilanda",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats and mice, a stem bark extract had only slight effects on malaria parasites but clearly reduced pain and swelling.",
      source: "saidu",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with diabetes and high blood pressure, a stem bark extract lowered blood pressure, blood sugar and blood fats about as well as standard drugs.",
      source: "bilanda",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2021 review found 19 of the 42 compounds isolated from the tree had anticancer activity in lab or animal studies. The stem bark is the most used part.",
      source: "fofana",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2022 lab study, stem bark extracts were rich in antioxidant plant compounds and killed five types of cancer cells, through a form of cell death other than the usual self-destruct pathway.",
      source: "fofana2022",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "It's used traditionally to cause abortion, and a Malian healer warned against taking the bark powder during pregnancy. Avoid it if pregnant.",
      source: "togola",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In lab tests on heart tissue and heart cells, a bark extract changed the heart rate, slowing it at very low doses and speeding it up at higher doses.",
      source: "nembo",
    },
    { category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "muchtaridi" },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A traditional remedy for high blood pressure; lowered it in rats. Not studied in people." },
    { slug: "fever", notes: "A common fever and malaria remedy in Nigeria and Mali; only slight effect on malaria parasites in mice." },
    { slug: "menstrual-discomfort", notes: "Used in Mali for missed or painful periods. It's also used to cause abortion; avoid in pregnancy." },
  ],
});

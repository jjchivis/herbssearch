import { run } from "./lib/populate-herb";

// Fo-Ti (Reynoutria multiflora, formerly Polygonum multiflorum; he shou wu), from
// a 2015 systematic review of liver damage case reports (Lei et al.) and a 2019
// review of its liver injury (Liu et al.).

run({
  name: "Fo-Ti",
  profile: {
    family: "Polygonaceae",
    genus: "Reynoutria",
    species: "multiflora",
    nativeRange: "China",
    partsUsed: "The root, used raw or processed (boiled in black-bean liquid), as slices for decoctions or in patent medicines such as Shou Wu Pian",
  },
  sources: {
    lei: {
      title: "Liver Damage Associated with Polygonum multiflorum Thunb.: A Systematic Review of Case Reports and Case Series",
      author: "Lei X, Chen J, Ren J, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2015-01-12",
      doi: "10.1155/2015/459749",
      pmid: "25648693",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4306360/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    liu: {
      title: "Polygonum multiflorum-Induced Liver Injury: Clinical Characteristics, Risk Factors, Material Basis, Action Mechanism and Current Challenges",
      author: "Liu Y, Wang W, Sun M, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2019-12-13",
      doi: "10.3389/fphar.2019.01467",
      pmid: "31920657",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6923272/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Fo-Ti Root", type: "COMMON_NAME" },
    { name: "He Shou Wu", type: "TRADITIONAL_NAME" },
    { name: "Heshouwu", type: "TRADITIONAL_NAME" },
    { name: "Chinese Knotweed", type: "COMMON_NAME" },
    { name: "Polygonum multiflorum", type: "SCIENTIFIC_SYNONYM" },
    { name: "Shou Wu Pian", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called he shou wu; first recorded in the Kaibao Bencao (973–974 AD). Processed root is used to darken hair, nourish the liver and kidneys and as an anti-ageing tonic; raw root to relax the bowels." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Fo-ti, called he shou wu in China, is a popular Chinese medicine. It's used raw or processed, as decoctions and in patent medicines. Clinical studies have looked at its traditional uses and at possible effects on blood fats and diseases of the brain and nerves.",
      source: "liu",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Fo-ti was first recorded in the Kaibao Bencao, a Chinese materia medica from the Song Dynasty (973–974 AD). The Chinese Pharmacopoeia lists two forms with different traditional uses:\n- Raw root: to \"clear toxins\" (a traditional Chinese idea), for boils and abscesses, to prevent malaria and to relax the bowels\n- Processed root (boiled in black-bean liquid): to nourish the liver and kidneys, \"supplement essence and blood\", darken graying hair, strengthen bones and muscles, \"eliminate dampness\" and lower blood fats",
      source: "lei",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its best-known product, Shou Wu Pian, is usually taken as an anti-ageing product or a tonic for dizziness with ringing in the ears. It's also used for premature graying of hair, lower back pain, involuntary loss of semen, vaginal discharge and constipation.\nIn reported cases of liver injury, the most common reasons people had taken it were gray hair and hair loss. Others included high blood pressure, heart disease, high blood fats, osteoarthritis, sleep problems, dizziness and general health.",
      source: "lei",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, fo-ti has lowered blood fats and slowed hardening of the arteries, protected the liver, affected the immune system, protected nerve cells and improved memory, and shown antioxidant and anti-ageing effects. These haven't been confirmed in people.",
      source: "lei",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Fo-ti can damage the liver. A review of 450 reported cases found symptoms usually began about a month after starting it: yellow skin or eyes (jaundice), tiredness, loss of appetite and dark yellow urine. Most people recovered after stopping it, but 7 died and 2 needed a liver transplant. Many cases involved taking it for a long time or in high doses. The reviewers advise anyone taking it to watch for signs of liver damage.",
      source: "lei",
    },
    {
      category: "CONTAMINATION",
      description:
        "Both raw and processed fo-ti have been linked to liver injury. The substances responsible haven't been identified, and poor quality control is a major safety concern.",
      source: "liu",
    },
  ],
  symptoms: [
    { slug: "liver-safety-warnings", notes: "One of the herbs most often linked to liver injury; hundreds of cases have been reported, a few fatal." },
    { slug: "hair-loss", notes: "Processed fo-ti is traditionally taken to darken graying hair, and gray hair and hair loss were the most common reasons people took it in reported liver injury cases. Not shown to work in trials, and it can damage the liver." },
    { slug: "constipation", notes: "The raw root is traditionally used to relax the bowels. Not tested in trials, and it can damage the liver." },
    { slug: "high-cholesterol", notes: "Traditionally used to lower blood fats, and it lowered blood fats in animal studies. Not shown in people, and it can damage the liver." },
  ],
});

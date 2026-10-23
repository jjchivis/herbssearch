import { run } from "./lib/populate-herb";

// Sword plant (Echinodorus grandiflorus), the medicinal species of the genus,
// known in Brazil as chapéu-de-couro. From lab and animal studies (Tibiriçá 2007,
// Lessa 2008, Garcia 2010, Prando 2015) and a rat pregnancy toxicity study
// (Brugiolo 2010). Studies of the related E. macrophyllus are left out. The user's
// Springer chapter on aquatic medicinal plants is paywalled and its references
// don't cover Echinodorus. Family and the newer name Aquarius grandiflorus per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Sword Plant",
  profile: {
    family: "Alismataceae",
    genus: "Echinodorus",
    species: "grandiflorus",
    nativeRange: "A semi-aquatic plant native to Brazil, where it is widespread",
    partsUsed: "The leaves",
  },
  sources: {
    tibirica: {
      title: "Pharmacological mechanisms involved in the vasodilator effects of extracts from Echinodorus grandiflorus",
      author: "Tibiriçá E, Almeida A, Caillleaux S, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2006-11-06",
      doi: "10.1016/j.jep.2006.10.030",
      pmid: "17150321",
      url: "https://pubmed.ncbi.nlm.nih.gov/17150321/",
      sourceType: P,
      tier: T3,
    },
    lessa: {
      title: "Antihypertensive effects of crude extracts from leaves of Echinodorus grandiflorus",
      author: "Lessa MA, Araújo CV, Kaplan MA, Pimenta D, Figueiredo MR, Tibiriçá E",
      journal: "Fundamental & Clinical Pharmacology",
      publicationDate: "2008-04-01",
      doi: "10.1111/j.1472-8206.2008.00565.x",
      pmid: "18353111",
      url: "https://pubmed.ncbi.nlm.nih.gov/18353111/",
      sourceType: P,
      tier: T3,
    },
    garcia: {
      title: "Antiedematogenic activity and phytochemical composition of preparations from Echinodorus grandiflorus leaves",
      author: "Garcia EF, de Oliveira MA, Godin AM, et al.",
      journal: "Phytomedicine",
      publicationDate: "2010-07-15",
      doi: "10.1016/j.phymed.2010.05.008",
      pmid: "20637578",
      url: "https://pubmed.ncbi.nlm.nih.gov/20637578/",
      sourceType: P,
      tier: T3,
    },
    prando: {
      title: "Involvement of bradykinin B2 and muscarinic receptors in the prolonged diuretic and antihypertensive properties of Echinodorus grandiflorus (Cham. & Schltdl.) Micheli",
      author: "Prando TB, Barboza LN, Araújo VO, et al.",
      journal: "Phytomedicine",
      publicationDate: "2015-12-17",
      doi: "10.1016/j.phymed.2015.10.020",
      pmid: "26776663",
      url: "https://pubmed.ncbi.nlm.nih.gov/26776663/",
      sourceType: P,
      tier: T3,
    },
    brugiolo: {
      title: "Reproductive toxicity of Echinodorus grandiflorus in pregnant rats",
      author: "Sin Singer Brugiolo S, Maria Peters V, Sales Pimenta D, et al.",
      journal: "The Journal of Toxicological Sciences",
      publicationDate: "2010-12-01",
      doi: "10.2131/jts.35.911",
      pmid: "21139341",
      url: "https://pubmed.ncbi.nlm.nih.gov/21139341/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Aquarius grandiflorus", type: "COMMON_NAME" },
    { name: "Chapéu-de-couro", type: "COMMON_NAME" },
    { name: "Chapeu de Couro", type: "COMMON_NAME" },
    { name: "Leather Hat", type: "COMMON_NAME" },
    { name: "Echinodorus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Brazilian folk medicine, the leaves of this sword plant (called chapéu-de-couro, or \"leather hat\") are widely used for high blood pressure and inflammatory conditions.",
      source: "tibirica",
    },
    {
      category: "TRADITIONAL",
      summary: "It's also used in Brazilian folk medicine to increase urination (as a water pill).",
      source: "prando",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with high blood pressure, a leaf extract lowered blood pressure, partly by relaxing blood vessels. Given by mouth over a longer period, it worked about as well as standard blood pressure medicines. This hasn't been tested in people.\n\nTechnical detail: ethanolic extract; mean arterial pressure fell up to 23% (intraperitoneal) and 51% (intravenous); effects involved nitric oxide, muscarinic and PAF receptors.",
      source: "lessa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on rabbit blood vessels, a water extract of the leaves made the vessels widen, mainly by releasing nitric oxide, a natural compound that relaxes blood vessel walls.",
      source: "tibirica",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a leaf extract taken for 7 days increased urine output about as much as the water pill hydrochlorothiazide, without the same loss of bicarbonate. It also lowered blood pressure in rats with high blood pressure. This hasn't been tested in people.",
      source: "prando",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, leaf extracts reduced swelling in a standard inflammation test. Flavonoids and diterpenes (two groups of plant compounds) seemed to be responsible.\n\nTechnical detail: carrageenan paw edema; 50% and 70% ethanol extracts at 1000 mg/kg orally; trans-aconitic acid active at 270 mg/kg.",
      source: "garcia",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "In pregnant rats given high doses of a leaf extract, the mothers developed anemia and mild liver and kidney damage, though the pregnancies and unborn young weren't affected.\n\nTechnical detail: 250–1,000 mg/kg/day by mouth; anemia, raised AST and cholesterol at 1,000 mg/kg; liver and kidney changes at 500 and 1,000 mg/kg.",
      source: "brugiolo",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "Used for high blood pressure in Brazilian folk medicine. Leaf extracts lowered blood pressure in rats; not tested in people.",
    },
  ],
});

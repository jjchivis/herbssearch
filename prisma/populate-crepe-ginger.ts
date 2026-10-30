import { run } from "./lib/populate-herb";

// Crepe Ginger (Hellenia speciosa, better known as Costus speciosus or
// Cheilocostus speciosus), from studies found by direct PubMed Central search:
// a small sore-throat study (Bakhsh et al.), a Puerto Rican diabetes-plant study
// (Gavillán-Suárez et al.; its mouse results are reported for three plants
// together, so only the traditional use is cited), rat and mouse studies, and a
// 2016 review for its native range. Not in TRAMIL. Accepted name and family per
// GBIF.

run({
  name: "Crepe Ginger",
  profile: {
    family: "Costaceae",
    genus: "Hellenia",
    species: "speciosa",
    nativeRange: "South East Asia, especially India, Sri Lanka, Indonesia and Malaysia",
    partsUsed: "Mainly the rhizome (underground stem); the leaves are also studied",
  },
  sources: {
    binny: {
      title: "Anti-inflammatory and antipyretic properties of the rhizome of Costus speciosus (Koen.) Sm.",
      author: "Binny K, Kumar SG, Dennis T",
      journal: "Journal of Basic and Clinical Pharmacy",
      publicationDate: "2010-06-01",
      pmid: "24825984",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3979190/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gavillan: {
      title:
        "Chemical profile and in vivo hypoglycemic effects of Syzygium jambos, Costus speciosus and Tapeinochilos ananassae plant extracts used as diabetes adjuvants in Puerto Rico",
      author: "Gavillán-Suárez J, Aguilar-Perez A, Rivera-Ortiz N, Rodríguez-Tirado K, Figueroa-Cuilan W, et al.",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2015-07-01",
      doi: "10.1186/s12906-015-0772-7",
      pmid: "26198986",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4511456/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bakhsh: {
      title:
        "Evaluating the therapeutic efficacy, tolerability, and safety of an aqueous extract of Costus speciosus rhizome in acute pharyngitis and acute tonsillitis. A pilot study",
      author: "Bakhsh ZA, Al-Khatib TA, Al-Muhayawi SM, ElAssouli SM, Elfiky IA, Mourad SA",
      journal: "Saudi Medical Journal",
      publicationDate: "2015-08-01",
      doi: "10.15537/smj.2015.8.11377",
      pmid: "26219454",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4549600/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ali: {
      title: "Molecular mechanisms of anti-hyperglycemic effects of Costus speciosus extract in streptozotocin-induced diabetic rats",
      author: "Ali HA, Almaghrabi OA, Afifi ME",
      journal: "Saudi Medical Journal",
      publicationDate: "2014-12-01",
      pmid: "25491216",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4362175/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    senevirathne: {
      title: "The Aqueous Leaf Extract of the Medicinal Herb Costus speciosus Suppresses Influenza A H1N1 Viral Activity under In Vitro and In Vivo Conditions",
      author: "Senevirathne A, Jayathilaka EHTT, Haluwana DK, Chathuranga K, Senevirathne M, Jeong JS, et al.",
      journal: "Viruses",
      publicationDate: "2023-06-01",
      doi: "10.3390/v15061375",
      pmid: "37376674",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10303568/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    elfar: {
      title: "Possible Anticancer Mechanisms of Some Costus speciosus Active Ingredients Concerning Drug Discovery",
      author: "El-Far AH, Badria FA, Shaheen HM",
      journal: "Current Drug Discovery Technologies",
      publicationDate: "2016-01-01",
      doi: "10.2174/1570163813666160802154403",
      pmid: "27515456",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5086671/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Costus speciosus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Cheilocostus speciosus", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in Puerto Rico alongside treatment for diabetes." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The rhizome, the plant's underground stem, has traditionally been used for inflammation and painful conditions.",
      source: "binny",
    },
    {
      category: "TRADITIONAL",
      summary: "In Puerto Rico, people commonly use plants alongside their diabetes treatment, and crepe ginger is one of them.",
      source: "gavillan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, an alcohol-based rhizome extract reduced swelling at high doses, but had only a minimal effect on fever.\n\nTechnical detail: ethanolic extract; carrageenan paw edema at 800 mg/kg and cotton pellet granuloma at 400 and 800 mg/kg; yeast-induced pyrexia only at 800 mg/kg.",
      source: "binny",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, a root extract given for 4 weeks lowered blood sugar and raised insulin levels.\n\nTechnical detail: streptozotocin-induced diabetes; ethanolic extract at 400 and 600 mg/kg; raised glucokinase, pyruvate kinase and other glucose-processing enzymes, compared with glibenclamide.",
      source: "ali",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a water extract of the leaves slowed the flu virus in cells. Given by mouth to mice, it was safe and protected them against several flu strains.\n\nTechnical detail: influenza A H1N1, H3N2 and H9N2; EC50 15.19 μg/mL in RAW264.7 cells; cinnamic, caffeic and chlorogenic acids identified as likely active compounds.",
      source: "senevirathne",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, compounds from the plant, including diosgenin and costunolide, slowed or killed several kinds of cancer cells.\n\nTechnical detail: reported mechanisms include up-regulation of Bax, intracellular calcium and reactive oxygen species.",
      source: "elfar",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study in Saudi Arabia, 15 children and adults with a sudden sore throat or tonsillitis used nose drops made from a water extract of the rhizome every 8 hours for 3 days. Symptoms improved in 60% within 24 hours, and 93% were better by day 5. No side effects were recorded.\nThere was no comparison group, so the study can't show whether the drops caused the improvement.\n\nTechnical detail: pilot cohort study; 15–30 drops every 8 hours.",
      source: "bakhsh",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects were recorded in a small study of 15 people who used rhizome nose drops for 3 days.",
      source: "bakhsh",
    },
  ],
  symptoms: [
    {
      slug: "sore-throat",
      notes: "In one small study without a comparison group, most people using rhizome nose drops for a sore throat or tonsillitis got better within 5 days.",
    },
    {
      slug: "high-blood-sugar",
      notes: "Used in Puerto Rico alongside diabetes treatment. A root extract lowered blood sugar in diabetic rats; it hasn't been tested for this in people.",
    },
  ],
  preparations: [
    {
      slug: "extract",
      notes: "Nose drops made from a water extract of the rhizome were tested in a small sore-throat study.",
      source: "bakhsh",
    },
  ],
});

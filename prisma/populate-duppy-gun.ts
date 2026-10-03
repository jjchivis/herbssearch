import { run } from "./lib/populate-herb";

// Duppy Gun (Ruellia tuberosa, Mexican bluebell), from verified sources: a
// 2024 review of its traditional uses, chemistry, pharmacology and toxicology
// (Sharma et al., Chem Biodivers) and rat studies on blood sugar, the kidneys
// and the liver (Wulan et al. 2015; Roosdiana et al. 2020; Chang et al. 2018).
// No studies in people, and no safety data in people, were found.

run({
  name: "Duppy Gun",
  profile: {
    family: "Acanthaceae",
    genus: "Ruellia",
    species: "tuberosa",
    nativeRange: "Originally from Central America; now spread to other tropical regions, including Southeast Asia",
  },
  sources: {
    sharma: {
      title: "Ethnomedicinal Uses, Phytochemistry, Pharmacology, and Toxicology of Ruellia tuberosa L.: A Review",
      author: "Sharma A, Kumar A, Singh AK, Kumar KJ, Narasimhan B, Kumar P",
      journal: "Chemistry & Biodiversity",
      organization: "Chemistry & Biodiversity",
      publicationDate: "2024-07-26",
      doi: "10.1002/cbdv.202400292",
      pmid: "39056380",
      url: "https://doi.org/10.1002/cbdv.202400292",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wulan: {
      title: "Antidiabetic Activity of Ruellia tuberosa L., Role of α-Amylase Inhibitor: In Silico, In Vitro, and In Vivo Approaches",
      author: "Wulan DR, Utomo EP, Mahdi C",
      journal: "Biochemistry Research International",
      organization: "Biochemistry Research International",
      publicationDate: "2015-10-21",
      doi: "10.1155/2015/349261",
      pmid: "26576302",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4631863/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    roosdiana: {
      title: "Ruellia tuberosa L. Extract Improves Histopathology and Lowers Malondialdehyde Levels and TNF Alpha Expression in the Kidney of Streptozotocin-Induced Diabetic Rats",
      author: "Roosdiana A, Permata FS, Fitriani RI, Umam K, Safitri A",
      journal: "Veterinary Medicine International",
      organization: "Veterinary Medicine International",
      publicationDate: "2020-10-14",
      doi: "10.1155/2020/8812758",
      pmid: "33110487",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7582068/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chang: {
      title: "Protective effect of Ruellia tuberosa L. extracts against abnormal expression of hepatic detoxification enzymes in diabetic rats",
      author: "Chang WC, Huang DW, Chen JA, et al.",
      journal: "RSC Advances",
      organization: "RSC Advances",
      publicationDate: "2018-01-01",
      doi: "10.1039/c8ra03321h",
      pmid: "35539960",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9080929/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mexican Bluebell", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes: "Used since ancient times as a Rasayana, a rejuvenating tonic.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "It has been used for decades as a folk medicine for diabetes in East Asia.",
      source: "chang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In folk medicine in Southeast Asia, including Indonesia, it has been used for:\n- Diabetes\n- High blood pressure\n- Fever\n- Pain",
      source: "wulan",
    },
    {
      category: "TRADITIONAL",
      summary: "Known as Mexican bluebell, it has been used since ancient times as a Rasayana, an Ayurvedic rejuvenating tonic.",
      source: "sharma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review reported that, in lab and animal studies, its extracts and compounds acted against cancer cells, fungi, other germs and worms. They also helped wounds heal, may help reduce inflammation, lowered blood sugar and blood fats, and protected the stomach.\n\nTechnical detail: anticancer, anti-inflammatory, wound healing, antifungal, antimicrobial, anti-diabetic, hypoglycemic, hypolipidemic, gastroprotective and anthelmintic activity; constituents include alkaloids, flavonoids, saponins and phenolic compounds.",
      source: "sharma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, an extract given for 2 weeks brought fasting blood sugar down close to normal. In lab tests, the extract blocked an enzyme the body uses to break starch down into sugar.\n\nTechnical detail: hexane fraction of a methanol extract (HFME), 450 mg/kg body weight; fasting blood glucose fell from 399 ± 82.7 to 114 ± 21.3 mg/dL; α-amylase inhibition IC50 0.14 ± 0.005 mg/mL.",
      source: "wulan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, a root extract reduced signs of kidney damage and inflammation in the kidneys.\n\nTechnical detail: streptozotocin-induced diabetes; 250 mg/kg body weight lowered malondialdehyde by 52.70% and TNF-α expression by 42.24%, with improved kidney histopathology.",
      source: "roosdiana",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, water-based and alcohol-based extracts helped bring the liver's toxin-clearing enzymes back to normal and boosted its antioxidant defenses.\n\nTechnical detail: normalized hepatic CYP2E1, UGT1A7 and GSTM1 expression; increased superoxide dismutase (SOD) activity.",
      source: "chang",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "A folk medicine for diabetes in East and Southeast Asia. It lowered blood sugar in diabetic rats, but hasn't been tested in people.",
    },
    { slug: "high-blood-pressure", notes: "Used in Southeast Asian folk medicine for high blood pressure. This use hasn't been tested in people." },
    { slug: "fever", notes: "Used in Southeast Asian folk medicine for fever. This use hasn't been tested in people." },
  ],
});

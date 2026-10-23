import { run } from "./lib/populate-herb";

// Pregnancy-safety cross-check against Chestnut School's "Herbs to Avoid During
// Pregnancy and Breastfeeding". Warnings are only added where a reliable source
// (EMA monographs, peer-reviewed studies) backs them, not on Chestnut's word alone.
// Damiana, Elecampane, Foxglove and Pokeberry are on Chestnut's list but no
// reliable pregnancy-specific source was found, so nothing was added for them.
// Hibiscus drug interactions come from Chestnut's hibiscus post, checked against
// the original human studies.

const G = "government" as const;
const T1 = "TIER_1_GOVERNMENT" as const;
const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Yarrow",
    sources: {
      emaMono: {
        title: "European Union herbal monograph on Achillea millefolium L., herba (Revision 1)",
        organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
        publicationDate: "2020-09-23",
        url: "https://www.ema.europa.eu/en/documents/herbal-opinion/final-european-union-herbal-monograph-achillea-millefolium-l-herba-revision-1_en.pdf",
        sourceType: G,
        tier: T1,
      },
    },
    safety: [
      {
        category: "PREGNANCY",
        description:
          "Its safety during pregnancy and breastfeeding hasn't been established, so the European Medicines Agency doesn't recommend yarrow medicines at these times.",
        source: "emaMono",
      },
    ],
  },
  {
    name: "Uva Ursi",
    sources: {
      emaMono: {
        title: "European Union herbal monograph on Arctostaphylos uva-ursi (L.) Spreng., folium (Revision 2)",
        organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
        publicationDate: "2018-01-30",
        url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-arctostaphylos-uva-ursi-l-spreng-folium-revision-2_en.pdf",
        sourceType: G,
        tier: T1,
      },
    },
    safety: [
      {
        category: "PREGNANCY",
        description:
          "Its safety during pregnancy and breastfeeding hasn't been established, so the European Medicines Agency doesn't recommend bearberry leaf medicines at these times.",
        source: "emaMono",
      },
    ],
  },
  {
    name: "Boneset",
    sources: {
      colegate: {
        title: "Potentially toxic pyrrolizidine alkaloids in Eupatorium perfoliatum and three related species. Implications for herbal use as boneset",
        author: "Colegate SM, Upton R, Gardner DR, Panter KE, Betz JM",
        journal: "Phytochemical Analysis",
        publicationDate: "2018-07-02",
        doi: "10.1002/pca.2775",
        pmid: "29968391",
        url: "https://pubmed.ncbi.nlm.nih.gov/29968391/",
        sourceType: P,
        tier: T3,
      },
      emaPa: {
        title: "Public statement on the use of herbal medicinal products containing toxic, unsaturated pyrrolizidine alkaloids (PAs) (EMA/HMPC/893108/2011 Rev. 1)",
        organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
        publicationDate: "2021-07-07",
        url: "https://www.ema.europa.eu/en/documents/public-statement/public-statement-use-herbal-medicinal-products-containing-toxic-unsaturated-pyrrolizidine-alkaloids-pas-including-recommendations-regarding-contamination-herbal-medicinal-products-pyrrolizidine_en.pdf",
        sourceType: G,
        tier: T1,
      },
    },
    safety: [
      {
        category: "TOXICITY",
        description:
          "All 49 boneset samples tested in a 2018 study contained pyrrolizidine alkaloids, natural compounds linked to liver disease in people. Teas and tinctures made from the herb had high levels. The researchers advised caution until the risk is better understood.\n\nTechnical detail: dehydropyrrolizidine alkaloids at 0.0002–0.07% w/w, mainly lycopsamine and intermedine and their N-oxides.",
        source: "colegate",
      },
      {
        category: "PREGNANCY",
        description:
          "Boneset contains pyrrolizidine alkaloids. In animal studies, these compounds passed into milk and harmed nursing young, and exposure before birth damaged the liver and lungs of unborn rats. The European Medicines Agency sets a strict daily limit for these compounds in herbal medicines, and says that limit also covers pregnant and breastfeeding women.\n\nTechnical detail: maximum daily oral intake 1.0 µg of unsaturated PAs.",
        source: "emaPa",
      },
    ],
  },
  {
    name: "Hibiscus",
    sources: {
      kolawole: {
        title: "Effect of zobo drink (Hibiscus sabdariffa water extract) on the pharmacokinetics of acetaminophen in human volunteers",
        author: "Kolawole JA, Maduenyi A",
        journal: "European Journal of Drug Metabolism and Pharmacokinetics",
        publicationDate: "2004-01-01",
        doi: "10.1007/bf03190570",
        pmid: "15151167",
        url: "https://pubmed.ncbi.nlm.nih.gov/15151167/",
        sourceType: P,
        tier: T3,
      },
      mahmoud: {
        title: "Significant reduction in chloroquine bioavailability following coadministration with the Sudanese beverages Aradaib, Karkadi and Lemon",
        author: "Mahmoud BM, Ali HM, Homeida MM, Bennett JL",
        journal: "Journal of Antimicrobial Chemotherapy",
        publicationDate: "1994-05-01",
        doi: "10.1093/jac/33.5.1005",
        pmid: "8089046",
        url: "https://pubmed.ncbi.nlm.nih.gov/8089046/",
        sourceType: P,
        tier: T3,
      },
    },
    safety: [
      {
        category: "DRUG_INTERACTION",
        description:
          "In a small study of 6 healthy men, drinking hibiscus tea before taking acetaminophen (Tylenol) made the body clear the drug faster. How much of the drug was absorbed didn't change.\n\nTechnical detail: zobo drink 1.5 h before 1 g acetaminophen; significant changes in elimination rate and half-life, total clearance up 11.69%.",
        source: "kolawole",
      },
      {
        category: "DRUG_INTERACTION",
        description:
          "In healthy men, taking the malaria medicine chloroquine with hibiscus tea cut the amount of drug reaching the blood to under a third of what it was with water. This could make the medicine work less well.\n\nTechnical detail: 600 mg chloroquine; AUC 2.16 vs 7.52 mg·h/L with water; Cmax 148 vs 553.",
        source: "mahmoud",
      },
    ],
  },
);

import { run } from "./lib/populate-herb";

// Aloe (Aloe vera): research on acemannan, a sugar compound from the leaf gel.
// From Chou et al. 2023 (sent by the user) and the primary studies cited on
// OncoForge's acemannan page (an AI-extracted summary, so not cited itself).
// OncoForge's human trial (Lissoni 2009) used Aloe arborescens, a different
// species, so it isn't included here.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Aloe",
  sources: {
    chou: {
      title: "Potential of methacrylated acemannan for exerting antioxidant-, cell proliferation-, and cell migration-inducing activities in vitro",
      author: "Chou MH, Chen YH, Cheng MT, Chiang HC, Chen HW, Wang CW",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2023-06-20",
      doi: "10.1186/s12906-023-04022-8",
      pmid: "37340378",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10283281/",
      sourceType: P,
      tier: T3,
    },
    alzarea: {
      title: "Preventive effect of acemannan on DMBA-induced mouse skin tumorigenesis by modulating inflammatory cytokines and apoptosis pathways",
      author: "Alzarea AI, Zafar A, Alsaidan OA, Alanazi AS, Alzarea SI, Alhassan HH, Uttekar P",
      journal: "International Journal of Biological Macromolecules",
      publicationDate: "2025-05-01",
      doi: "10.1016/j.ijbiomac.2025.143836",
      pmid: "40318716",
      url: "https://pubmed.ncbi.nlm.nih.gov/40318716/",
      sourceType: P,
      tier: T3,
    },
    peng: {
      title: "Decreased mortality of Norman murine sarcoma in mice treated with the immunomodulator, Acemannan",
      author: "Peng SY, Norman J, Curtin G, Corrier D, McDaniel HR, Busbee D",
      journal: "Molecular Biotherapy",
      publicationDate: "1991-06-01",
      pmid: "1910624",
      url: "https://pubmed.ncbi.nlm.nih.gov/1910624/",
      sourceType: P,
      tier: T3,
    },
    harris: {
      title: "Efficacy of acemannan in treatment of canine and feline spontaneous neoplasms",
      author: "Harris C, Pierce K, King G, Yates KM, Hall J, Tizard I",
      journal: "Molecular Biotherapy",
      publicationDate: "1991-12-01",
      pmid: "1768373",
      url: "https://pubmed.ncbi.nlm.nih.gov/1768373/",
      sourceType: P,
      tier: T3,
    },
    king: {
      title: "The effect of Acemannan Immunostimulant in combination with surgery and radiation therapy on spontaneous canine and feline fibrosarcomas",
      author: "King GK, Yates KM, Greenlee PG, Pierce KR, Ford CR, McAnalley BH, Tizard IR",
      journal: "Journal of the American Animal Hospital Association",
      publicationDate: "1995-09-01",
      doi: "10.5326/15473317-31-5-439",
      pmid: "8542364",
      url: "https://pubmed.ncbi.nlm.nih.gov/8542364/",
      sourceType: P,
      tier: T3,
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In a 2023 lab study, acemannan (a sugar compound from aloe gel) helped rat, mouse and human cells grow and move in ways linked to wound healing. It also helped mouse cells recover from damage caused by hydrogen peroxide. It hasn't been tested as a wound treatment in people.\n\nTechnical detail: methacrylated acemannan; DPPH radical clearance 45%; peak proliferation at 2000 µg/mL and peak 3T3-L1 migration at 5 µg/mL after 3 h; RGM1, L929 and CG1639 cells.",
      source: "chou",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice exposed to a chemical that causes skin tumors, acemannan given by mouth for 14 weeks reduced the number and size of tumors. It also lowered markers of inflammation and cell damage. This hasn't been tested in people.\n\nTechnical detail: DMBA-induced skin carcinogenesis; 25 and 50 mg/kg orally; 6 mice per group.",
      source: "alzarea",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 1991 study, mice were implanted with a fast-growing cancer that killed all untreated mice. About 40% of mice given acemannan injections into the abdomen at the time of implanting survived. The tumors in treated mice showed signs of attack by immune cells.\n\nTechnical detail: Norman murine sarcoma; intraperitoneal acemannan (Carrisyn) from Aloe barbadensis; macrophage release of interleukin-1 and TNF.",
      source: "peng",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 1991 veterinary study, 43 pet dogs and cats with cancer were given acemannan injections. Tumors in 26 showed signs of attack by immune cells, and 12 animals clearly improved, with tumor shrinkage or longer survival. These included 5 of 7 animals with a soft-tissue cancer called fibrosarcoma. There was no comparison group.\n\nTechnical detail: intraperitoneal and intralesional administration.",
      source: "harris",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In 13 pet dogs and cats with fibrosarcoma, 4 to 7 weekly acemannan treatments before surgery shrank the tumor by more than half in 2 of 12 animals that could be measured. All then had surgery and radiation, with monthly acemannan for a year. Seven of the 13 were alive and tumor-free after more than a year. There was no comparison group.\n\nTechnical detail: median survival 372 days.",
      source: "king",
    },
  ],
});

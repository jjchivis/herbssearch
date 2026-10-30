import { run } from "./lib/populate-herb";

// Sources the site owner suggested on 2026-10-29 for existing pages: an olive
// leaf trial (Imperatrice et al. 2024), a bloodroot review (Croaker et al.
// 2016), a papaya review (Srivastava et al. 2025), a Lippia javanica review
// (Maroyi 2017) and the Lady Bird Johnson Wildflower Center entry for Dalea
// compacta. Commercial and blog sources they sent weren't used.

run(
  {
    name: "Olive Leaf",
    sources: {
      imperatrice: {
        title: "Olive Leaf Extract Supplementation Improves Postmenopausal Symptoms: A Randomized, Double-Blind, Placebo-Controlled Parallel Study on Postmenopausal Women",
        author: "Imperatrice M, Lasfar A, van Kalkeren CAJ, Troost F",
        journal: "Nutrients",
        publicationDate: "2024-11-14",
        doi: "10.3390/nu16223879",
        pmid: "39599665",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11597182/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 12-week double-blind trial of 60 women after menopause, a daily olive leaf extract improved menopause symptoms and lowered blood triglycerides (a type of blood fat) compared with a placebo. It didn't change body fat or muscle.",
        source: "imperatrice",
      },
    ],
  },
  {
    name: "Bloodroot",
    sources: {
      croaker: {
        title: "Sanguinaria canadensis: Traditional Medicine, Phytochemical Composition, Biological Activities and Current Uses",
        author: "Croaker A, King GJ, Pyne JH, Anoopkumar-Dukie S, Liu L",
        journal: "International Journal of Molecular Sciences",
        publicationDate: "2016-08-27",
        doi: "10.3390/ijms17091414",
        pmid: "27618894",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5037693/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Native Americans used bloodroot for many conditions. Some tribes took small doses to stop vomiting and larger doses to cause it, older people drank it as a tea for rheumatism, and the Rappahannock used it for fever. It was also prized as a red skin dye.",
        source: "croaker",
      },
    ],
    safety: [
      {
        category: "TOXICITY",
        description:
          "Mouthwashes containing bloodroot compounds were withdrawn after they were linked to leukoplakia, white patches in the mouth that can turn into cancer. The patches didn't go away after people stopped using the mouthwash.",
        source: "croaker",
      },
    ],
  },
  {
    name: "Carica Papaya",
    sources: {
      srivastava: {
        title: "Phytomedical Properties of Carica papaya for Boosting Human Immunity Against Viral Infections",
        author: "Srivastava R, Jaiswal N, Kharkwal H, Dubey NK, Srivastava R",
        journal: "Viruses",
        publicationDate: "2025-02-16",
        doi: "10.3390/v17020271",
        pmid: "40007026",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11861161/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "A 2025 review found papaya extracts may help the body fight viruses, including dengue, by supporting the immune system and reducing inflammation. Papaya extract has raised low platelet counts, a common problem in dengue fever. The authors say clinical trials are needed.",
        source: "srivastava",
      },
    ],
  },
  {
    name: "Lippia Javanica",
    sources: {
      maroyi: {
        title: "Lippia javanica (Burm.f.) Spreng.: Traditional and Commercial Uses and Phytochemical and Pharmacological Significance in the African and Indian Subcontinent",
        author: "Maroyi A",
        journal: "Evidence-Based Complementary and Alternative Medicine",
        publicationDate: "2017-01-01",
        doi: "10.1155/2017/6746071",
        pmid: "28115974",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5237467/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    synonyms: [{ name: "Lemon Bush", type: "COMMON_NAME" }],
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Lemon bush grows in central, eastern and southern Africa and in India. It's drunk as an everyday and medicinal tea, and used for colds, coughs, fever, malaria, wounds, diarrhea, chest pain, bronchitis and asthma.",
        source: "maroyi",
      },
      {
        category: "PRECLINICAL",
        summary:
          "In lab studies it was active against microbes and the malaria parasite, and acted as an antioxidant. The review calls for studies of its safety and clinical value.",
        source: "maroyi",
      },
    ],
  },
  {
    name: "Dalea Compacta",
    sources: {
      ladybird: {
        title: "Dalea compacta (Compact Prairie Clover)",
        organization: "Lady Bird Johnson Wildflower Center, University of Texas at Austin",
        url: "https://www.wildflower.org/plants/result.php?id_plant=DACO2",
        sourceType: "secondary",
        tier: "TIER_5_SECONDARY",
      },
    },
    // Supports the native range on the Dalea Compacta page.
    synonyms: [{ name: "Purple Prairie Clover", type: "COMMON_NAME" }],
  },
);

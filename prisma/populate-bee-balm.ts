import { run } from "./lib/populate-herb";

// Bee Balm (Monarda didyma, scarlet bee balm), from a 2018 review of Cherokee
// medicinal plants, Mt. Cuba Center's Monarda trial report (2016), a 2026 lab
// study of its essential oil and a 2025 trial in middle-aged adults.

run({
  name: "Bee Balm",
  profile: {
    family: "Lamiaceae",
    genus: "Monarda",
    species: "didyma",
    nativeRange: "North America; all 17 Monarda species are native there",
    partsUsed: "The leaves, as a tea or a poultice (a moist paste put on the skin); the flowers and leaves for essential oil",
  },
  sources: {
    mtCuba: {
      title: "Monarda for the Mid-Atlantic Region (research report)",
      author: "Coombs G",
      organization: "Mt. Cuba Center",
      publicationDate: "2016-01-01",
      url: "https://publuu.com/flip-book/948685/2085804/page/2",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    setzer: {
      title: "The Phytochemistry of Cherokee Aromatic Medicinal Plants",
      author: "Setzer WN",
      journal: "Medicines (Basel)",
      publicationDate: "2018-11-12",
      doi: "10.3390/medicines5040121",
      pmid: "30424560",
      url: "https://pubmed.ncbi.nlm.nih.gov/30424560/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cichosz: {
      title: "Chemical Composition, and Antioxidant and Antimicrobial Properties of Monarda didyma L.'s Essential Oils and Hydrosols",
      author: "Cichosz P, Walasek-Janusz M, Grzegorczyk A, Papliński R, Kiczorowski P, Nurzyńska-Wierdak R",
      journal: "Molecules",
      publicationDate: "2026-07-01",
      doi: "10.3390/molecules31132252",
      pmid: "42451621",
      url: "https://pubmed.ncbi.nlm.nih.gov/42451621/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    campisi: {
      title: "Unveiling the geroprotective potential of Monarda didyma L.: insights from in vitro studies and a randomized clinical trial on slowing biological aging and improving quality of life",
      author: "Campisi M, Cannella L, Paccagnella O, Brazzale AR, Agnolin A, Grothe T, Baumann J, Pavanello S",
      journal: "GeroScience",
      publicationDate: "2025-03-01",
      doi: "10.1007/s11357-025-01580-2",
      pmid: "40064804",
      url: "https://pubmed.ncbi.nlm.nih.gov/40064804/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Scarlet Bee Balm", type: "COMMON_NAME" },
    { name: "Scarlet Beebalm", type: "COMMON_NAME" },
    { name: "Oswego Tea", type: "COMMON_NAME" },
    { name: "Monarda", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Monarda plants were used by many tribes for fever, headache, cough and pain; the Cherokee used bee balm as a poultice for colds and headaches." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Many Native American tribes used Monarda plants, the group bee balm belongs to, for fever, headache and cough. Crushed leaves were also rubbed on the body to ease pain. The name bee balm probably comes from its use to soothe bee stings.\nOther historical uses include perfume and food seasoning.",
      source: "mtCuba",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Bee balm is also called Oswego tea after Oswego, New York, where Native Americans and early settlers flavored their drinks with its leaves. After the Boston Tea Party it reportedly replaced English tea in New England.",
      source: "mtCuba",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cherokee used bee balm leaves:\n- As a poultice (a moist paste put on the skin) for colds and headaches\n- As a tea to cause miscarriage",
      source: "setzer",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, essential oils from bee balm leaves and flowers showed strong antioxidant activity and killed a range of bacteria and yeasts. Their main ingredient was thymol, the same aromatic compound found in thyme.\n\nTechnical detail: thymol 51.55–68.63% of the essential oils; DPPH IC50 0.77–0.92 µL. Hydrosols had selective antifungal but no significant antibacterial activity.",
      source: "cichosz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In one trial, 81 healthy adults aged 45 to 65 took a bee balm extract (100 mg a day) or a dummy pill for 12 weeks. Blood markers linked to aging held steady or improved in the bee balm group and worsened in the dummy-pill group. The bee balm group also reported better quality of life and sleep.\nNo significant side effects were reported. The study was small and short, and it was partly paid for by the company that makes the extract.\n\nTechnical detail: randomized, double-blind, placebo-controlled; 40 extract vs 41 placebo (maltodextrin); outcomes were leukocyte telomere length and DNA methylation age. Funded in part by Mibelle AG Biochemistry.",
      source: "campisi",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "The Cherokee traditionally used bee balm tea to cause miscarriage.",
      source: "setzer",
    },
  ],
  symptoms: [
    { slug: "headache", notes: "Traditionally used by the Cherokee as a poultice for headaches, and Monarda plants were used by many Native American tribes for headache. Not studied for headaches in people." },
    { slug: "fever", notes: "Monarda plants, including bee balm, were traditionally used by Native American tribes for fever. Not studied for fever in people." },
    { slug: "cough", notes: "Monarda plants, including bee balm, were traditionally used by Native American tribes for cough. Not studied for cough in people." },
    { slug: "colds-and-congestion", notes: "Traditionally used by the Cherokee as a poultice for colds. Not studied for colds in people." },
  ],
});

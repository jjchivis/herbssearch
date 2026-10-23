import { run } from "./lib/populate-herb";

// Water fern / mosquito fern (Azolla spp., mainly A. pinnata), from a 2025 review
// of its farming uses (Yang et al.), a 2024 cyanotoxin safety study (Bujak et al.),
// and two rat studies of A. pinnata extract. The user's Springer chapter on
// aquatic medicinal plants is paywalled and its references don't cover Azolla.
// No traditional medicinal uses were found in these sources. Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Water Fern",
  profile: {
    family: "Salviniaceae",
    genus: "Azolla",
    species: "spp.",
    nativeRange: "Native to the Americas, Africa, Asia and Australia; no species is native to Europe",
    partsUsed: "The whole plant",
  },
  sources: {
    yang: {
      title: "Role of Azolla in sustainable agriculture and climate resilience: a comprehensive review",
      author: "Yang Y, Yang Y, Deng S, Ying Z",
      journal: "Frontiers in Plant Science",
      publicationDate: "2025-10-14",
      doi: "10.3389/fpls.2025.1661720",
      pmid: "41169718",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12569520/",
      sourceType: P,
      tier: T3,
    },
    bujak: {
      title: "Azolla as a Safe Food: Suppression of Cyanotoxin-Related Genes and Cyanotoxin Production in Its Symbiont, Nostoc azollae",
      author: "Bujak JP, Pereira AL, Azevedo J, et al.",
      journal: "Plants",
      publicationDate: "2024-09-27",
      doi: "10.3390/plants13192707",
      pmid: "39409577",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11479175/",
      sourceType: P,
      tier: T3,
    },
    elrasoul: {
      title: "Antioxidant, Anti-Inflammatory, and Anti-Apoptotic Effects of Azolla pinnata Ethanolic Extract against Lead-Induced Hepatotoxicity in Rats",
      author: "Elrasoul ASA, Mousa AA, Orabi SH, et al.",
      journal: "Antioxidants",
      publicationDate: "2020-10-19",
      doi: "10.3390/antiox9101014",
      pmid: "33086604",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7603163/",
      sourceType: P,
      tier: T3,
    },
    ghanbari: {
      title: "Reno-Protective Properties of Azolla pinnata Extract Against Gentamicin-Induced Kidney Damage Are Attributed to Its Antioxidant Effects",
      author: "Ghanbari Alamoti M, Jalali Mashayekhi F, Hosseini N, Najafi H, Changizi-Ashtiyani S",
      journal: "Iranian Biomedical Journal",
      publicationDate: "2025-09-01",
      doi: "10.61882/ibj.5194",
      pmid: "41287470",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13310546/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Azolla", type: "COMMON_NAME" },
    { name: "Mosquito Fern", type: "COMMON_NAME" },
    { name: "Azolla pinnata", type: "COMMON_NAME" },
    { name: "Azolla filiculoides", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Azolla has been grown in rice paddies for centuries as a natural fertilizer. In Vietnam its use dates back to the 11th century, and by the 17th century it was widespread in China; it later spread to India and the Philippines. A floating mat of azolla blocks light to weeds and cuts water loss. It's also fed to farm animals and fish because it's rich in protein.",
      source: "yang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Azolla lives with a type of bacteria (cyanobacteria) inside its leaves that takes nitrogen from the air, which is why it works as a fertilizer. Several azolla species have become invasive outside their native range, forming dense mats that disrupt waterways.",
      source: "yang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given lead for 60 days, an extract of Azolla pinnata given by mouth reduced liver damage and lowered signs of inflammation and cell damage. This hasn't been tested in people.\n\nTechnical detail: 10 mg/kg ethanolic extract; compounds identified included quercetin, rutin, vitexin and hyperoside.",
      source: "elrasoul",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given the antibiotic gentamicin, which can harm the kidneys, an Azolla pinnata extract helped protect kidney function and tissue, mainly by boosting the body's antioxidant defenses. This hasn't been tested in people.\n\nTechnical detail: hydroalcoholic extract 10 or 20 mg/kg/day orally for 7 days.",
      source: "ghanbari",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The bacteria living inside azolla are a type that can make toxins in other species. A 2024 study of 48 azolla samples found no genes for the main cyanobacterial toxins, and no BMAA, a nerve toxin. The authors concluded azolla could be a safe food.",
      source: "bujak",
    },
    {
      category: "CONTAMINATION",
      description:
        "Azolla absorbs heavy metals from water and is used to clean polluted water.",
      source: "yang",
    },
  ],
});

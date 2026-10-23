import { run } from "./lib/populate-herb";

// Preparations sweep, batch 9: USDA NRCS plant guides, the FDA list of natural
// flavoring substances (21 CFR 172.510), King's American Dispensatory (catnip), a
// review of Lippia graveolens and a shatavari trial. USDA notes that milkweed shoots and roots
// were boiled and eaten are left out, because the plant is poisonous raw.

const USDA = "USDA Natural Resources Conservation Service, National Plant Data Center";

run(
  {
    name: "Pleurisy Root",
    sources: {
      usda: { title: "Plant Guide: Butterfly Milkweed (Asclepias tuberosa L.)", organization: USDA, url: "https://plants.usda.gov/DocumentLibrary/plantguide/pdf/pg_astu.pdf", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "powder", notes: "Indigenous groups dried and powdered the root and blew it into wounds, or chewed the root and placed it on wounds.", source: "usda" },
    ],
  },
  {
    name: "Spanish Moss",
    sources: {
      usda: { title: "Plant Guide: Spanish Moss (Tillandsia usneoides (L.) L.)", organization: USDA, url: "https://plants.usda.gov/DocumentLibrary/plantguide/pdf/pg_tius.pdf", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "The plant was boiled to make a tea for chills and fever.", source: "usda" },
    ],
  },
  {
    name: "Yucca Root",
    sources: {
      cfr: { title: "21 CFR 172.510 — Natural flavoring substances and natural substances used in conjunction with flavors", organization: "US Food and Drug Administration (Code of Federal Regulations)", url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-172/subpart-F/section-172.510", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "Mohave yucca is on the US list of natural flavoring substances allowed in food.", source: "cfr" },
    ],
  },
{
    name: "Catnip",
    sources: {
      kings: { title: "King's American Dispensatory (1898): Nepeta — Catnep", author: "Felter HW, Lloyd JU", url: "https://henriettes-herb.com/eclectic/kings/nepeta.html", sourceType: "historical_text", tier: "TIER_4_TRADITIONAL_TEXT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried herb was steeped in boiling water and drunk warm; a warm infusion with saffron was a popular remedy for children's colds.", source: "kings" },
      { slug: "powder", notes: "The powdered dried leaves were given in cold or warm water.", source: "kings" },
    ],
  },
  {
    name: "Lippia Graveolens",
    sources: {
      rev: { title: "Mexican Oregano (Lippia graveolens Kunth) as Source of Bioactive Compounds: A Review", author: "Bautista-Hernández I, Aguilar CN, Martínez-Ávila GCG, et al.", journal: "Molecules", publicationDate: "2021-08-25", doi: "10.3390/molecules26175156", pmid: "34500592", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8434378/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Mexican oregano is sold as a culinary herb.", source: "rev" },
      { slug: "essential-oil", notes: "The plant is grown mainly for its essential oil, which gives its strong aroma and flavor.", source: "rev" },
    ],
  },
  {
    name: "Shatavari",
    sources: {
      trial: { title: "A Double-Blind Randomized Clinical Trial for Evaluation of Galactogogue Activity of Asparagus racemosus Willd.", author: "Gupta M, Shaw B", journal: "Iranian Journal of Pharmaceutical Research", publicationDate: "2011-01-01", pmid: "24363697", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3869575/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "In one Ayurvedic trial, the dried root was ground into a fine powder and taken in capsules.", source: "trial" },
    ],
  },
);

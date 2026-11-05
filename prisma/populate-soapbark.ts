import { run } from "./lib/populate-herb";

// Soapbark (Quillaja saponaria), from the FDA list of natural flavoring
// substances, the 2019 EFSA re-evaluation of quillaia extract (E 999), a 2026
// history of the tree (Osbourn), and mouse and rat studies (Sarkhel 2016; Tam and
// Roner 2011; Abdel-Reheim et al. 2017). Family per GBIF.

run({
  name: "Soapbark",
  profile: { family: "Quillajaceae", genus: "Quillaja", species: "saponaria", nativeRange: "Central Chile", partsUsed: "The inner bark" },
  sources: {
    fda: {
      title: "21 CFR 172.510 Natural flavoring substances and natural substances used in conjunction with flavors",
      organization: "US Food and Drug Administration",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-172/subpart-F/section-172.510",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    efsa: {
      title: "Re-evaluation of Quillaia extract (E 999) as a food additive and safety of the proposed extension of use",
      organization: "European Food Safety Authority",
      author: "EFSA Panel on Food Additives and Flavourings (FAF)",
      journal: "EFSA Journal",
      publicationDate: "2019-03-06",
      doi: "10.2903/j.efsa.2019.5622",
      pmid: "32626248",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7009130/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    osbourn: {
      title: "The Cinderella tree, Quillaja saponaria - A soap story",
      author: "Osbourn A",
      journal: "Plants, People, Planet",
      publicationDate: "2025-11-25",
      doi: "10.1002/ppp3.70108",
      pmid: "41743997",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7618798/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sarkhel: {
      title: "Evaluation of the anti-inflammatory activities of Quillaja saponaria Mol. saponin extract in mice",
      author: "Sarkhel S",
      journal: "Toxicology Reports",
      publicationDate: "2015-12-01",
      doi: "10.1016/j.toxrep.2015.11.006",
      pmid: "28959520",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5615419/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tam: {
      title: "Characterization of in vivo anti-rotavirus activities of saponin extracts from Quillaja saponaria Molina",
      author: "Tam KI, Roner MR",
      journal: "Antiviral Research",
      publicationDate: "2011-06-01",
      doi: "10.1016/j.antiviral.2011.04.004",
      pmid: "21549151",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3106224/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    abdelreheim: {
      title: "Quillaja saponaria bark saponin protects Wistar rats against ferrous sulphate-induced oxidative and inflammatory liver damage",
      author: "Abdel-Reheim MA, Messiha BAS, Abo-Saif AA",
      journal: "Pharmaceutical Biology",
      publicationDate: "2017-12-01",
      doi: "10.1080/13880209.2017.1345950",
      pmid: "28728456",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6130630/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Quillaja", type: "COMMON_NAME" },
    { name: "Quillay", type: "COMMON_NAME" },
    { name: "Soap Bark Tree", type: "COMMON_NAME" },
    { name: "Quillaia Extract (E 999)", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "QS-21", slug: "qs-21", type: "saponin" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A Chilean tree whose bark foams like soap in water. Its name comes from the Mapuche word küllay, meaning soap, and the bark has long been used to wash hair and wool.",
      source: "osbourn",
    },
    {
      category: "TRADITIONAL",
      summary: "The bark has been used for centuries in Chilean folk medicine for inflammation and pain.",
      source: "sarkhel",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "QS-21, a compound from the bark, is approved for use in human vaccines, where it helps the immune system respond more strongly.",
      source: "osbourn",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a bark saponin extract reduced swelling, though less than the drug indomethacin.",
      source: "sarkhel",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a small dose of the extract cut rotavirus diarrhea from 79% of animals to 11%.",
      source: "tam",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, bark saponin protected the liver from iron overload damage.",
      source: "abdelreheim",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "In the EU, quillaia extract (E 999) is approved in foods and drinks. EFSA set a safe daily limit of 3 mg of its saponins per kg of body weight and found typical intake stays below it.",
      source: "efsa",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "The FDA allows soapbark (quillaia) as a natural flavoring in foods and drinks.",
      source: "fda",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Reduced rotavirus diarrhea in mice. Not tested in people." },
  ],
});

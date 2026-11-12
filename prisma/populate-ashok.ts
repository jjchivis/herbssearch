import { run } from "./lib/populate-herb";

// Ashok (Saraca asoca, syn. Saraca indica), from a 2026 open study of an
// Ashoka-based syrup for heavy periods (Dhiman et al.), a 2015 lab and animal
// study of its bark (Yadav et al.) and a 2024 study (Prasad et al.). Family
// per GBIF.

run({
  name: "Ashok",
  profile: {
    family: "Fabaceae",
    genus: "Saraca",
    species: "asoca",
    nativeRange: "The Indian subcontinent",
    partsUsed: "The bark",
  },
  sources: {
    dhiman: {
      title: "Efficacy and safety of an Ayurvedic Menohelp syrup in the management of heavy menstrual bleeding (menorrhagia): an open-label clinical study",
      author: "Dhiman K, Prajapati PK, Gopal D, Gautam A, Singal R",
      journal: "Drugs in Context",
      publicationDate: "2026-09-03",
      doi: "10.7573/dic.2026-3-1",
      pmid: "42741735",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13574237/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yadav: {
      title: "Saraca indica bark extract shows in vitro antioxidant, antibreast cancer activity and does not exhibit toxicological effects",
      author: "Yadav NK, Saini KS, Hossain Z, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2015-03-16",
      doi: "10.1155/2015/205360",
      pmid: "25861411",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4378602/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    prasad: {
      title: "Investigating potent cardioprotective compounds as ACE inhibitors in Saraca asoca",
      author: "Prasad S, Younis K, Yousuf O",
      journal: "Toxicology Reports",
      publicationDate: "2024-09-10",
      doi: "10.1016/j.toxrep.2024.101731",
      pmid: "39309635",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11416659/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ashoka", type: "COMMON_NAME" },
    { name: "Ashoka Bark", type: "COMMON_NAME" },
    { name: "Saraca indica", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [{ slug: "ayurveda", notes: "A principal herb in Ayurvedic gynecology, for heavy periods and other uterine problems." }],
  symptoms: [
    {
      slug: "menstrual-discomfort",
      notes: "Used in Ayurveda for heavy periods; an open study of an Ashoka-based syrup reduced bleeding and period pain.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ashok is one of the oldest sacred trees in Indian religion. It is one of the main herbs in Ayurvedic gynecology, used for heavy periods and other uterine problems, and as a tonic for women's health.",
      source: "prasad",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 90-day study of women with heavy periods, an Ayurvedic syrup based on Ashoka cut menstrual blood loss by about half and eased period pain, with no serious side effects. There was no comparison group, and the syrup contains other herbs too.",
      source: "dhiman",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a bark extract acted as an antioxidant and harmed breast cancer cells, and animal tests found no signs of toxicity.",
      source: "yadav",
    },
  ],
});

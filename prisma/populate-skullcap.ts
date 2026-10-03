import { run } from "./lib/populate-herb";

// Skullcap (Scutellaria lateriflora, American or blue skullcap), from NIH
// LiverTox, a 2018 review of Cherokee medicinal plants and a 2014 trial in
// healthy volunteers.

run({
  name: "Skullcap",
  profile: {
    family: "Lamiaceae",
    genus: "Scutellaria",
    species: "lateriflora",
    nativeRange: "North America",
    partsUsed: "The dried leaves and stems, as a tea or extract. The Cherokee used the root.",
  },
  sources: {
    livertox: {
      title: "LiverTox: Skullcap",
      organization: "National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK548757/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
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
    brock: {
      title: "American Skullcap (Scutellaria lateriflora): a randomised, double-blind placebo-controlled crossover study of its effects on mood in healthy volunteers",
      author: "Brock C, Whitehouse J, Tewfik I, Towell T",
      journal: "Phytotherapy Research",
      publicationDate: "2014-05-01",
      doi: "10.1002/ptr.5044",
      pmid: "23878109",
      url: "https://pubmed.ncbi.nlm.nih.gov/23878109/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "American Skullcap", type: "COMMON_NAME" },
    { name: "Blue Skullcap", type: "COMMON_NAME" },
    { name: "Scullcap", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used for centuries by Native Americans, including the Cherokee, for period problems, nerves, digestion and kidney problems." },
    { slug: "western-herbalism", notes: "Used today as a tea or extract for anxiety, stress and sleep problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans have used skullcap for centuries for period problems, nervousness, and digestive and kidney problems. Today its dried leaves and stems are taken as a tea or extract for anxiety, stress and trouble sleeping.",
      source: "livertox",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cherokee used skullcap root:\n- As a tea for periods and diarrhea\n- Boiled, to help expel the afterbirth after childbirth\n- For breast pain and for \"nerves\"",
      source: "setzer",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In one study, 43 healthy adults took freeze-dried skullcap (350 mg, 3 times a day) and a dummy pill for 2 weeks each, in random order. Anxiety scores were not clearly different between skullcap and the dummy pill.\nOverall mood improved while people took skullcap but not while they took the dummy pill. Most people weren't anxious to begin with, which limits the findings. Skullcap didn't reduce energy or thinking ability.\n\nTechnical detail: double-blind, placebo-controlled crossover; Beck Anxiety Inventory p = 0.191; Profile of Mood States total mood disturbance fell from baseline with skullcap (p < 0.001) but not placebo (p = 0.072); carryover effect noted.",
      source: "brock",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Skullcap has been linked to rare cases of liver injury. In most cases people were taking several herbs at once, so skullcap's role was unclear.\nSome products sold as skullcap were found to be mislabeled or mixed with germander, an herb that damages the liver.",
      source: "livertox",
    },
  ],
  symptoms: [
    { slug: "anxiety", notes: "Traditionally used for anxiety. In one small study of healthy adults it improved overall mood, but anxiety scores weren't clearly better than a dummy pill." },
    { slug: "stress", notes: "Traditionally taken as a tea or extract for stress." },
    { slug: "occasional-sleeplessness", notes: "Traditionally taken as a tea or extract for trouble sleeping." },
  ],
});

import { run } from "./lib/populate-herb";

// Slippery elm (Ulmus rubra), from a verified source: the NIH LiverTox entry.
// Family per GBIF / Catalogue of Life. No clinical studies were found.

run({
  name: "Slippery Elm",
  profile: {
    family: "Ulmaceae",
    genus: "Ulmus",
    species: "rubra",
    nativeRange: "Native to the eastern and central United States and Canada",
    partsUsed: "The inner bark",
  },
  sources: {
    livertox: {
      title: "Slippery Elm. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
      organization: "LiverTox, National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
      publicationDate: "2024-01-05",
      pmid: "38289993",
      url: "https://pubmed.ncbi.nlm.nih.gov/38289993/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The inner bark of slippery elm is taken by mouth for sore throat and stomach and gut upset, and put on the skin for rashes and irritation.",
      source: "livertox",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Slippery elm is generally recognized as safe. There's no evidence it raises liver enzymes or causes liver injury.",
      source: "livertox",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Traditionally taken for stomach and gut upset; not tested in trials." },
    { slug: "sore-throat", notes: "Traditionally taken for sore throat; not tested in trials." },
  ],
});

import { run } from "./lib/populate-herb";

// Cedar (Thuja occidentalis, northern white cedar, arborvitae), from a 2005
// review of its pharmacy, pharmacology and clinical use (Naser et al.), written
// by scientists from Schaper & Brümmer, maker of the Thuja-containing product
// Esberitox.

run({
  name: "Cedar",
  profile: {
    family: "Cupressaceae",
    genus: "Thuja",
    species: "occidentalis",
    nativeRange: "Eastern North America; grown in Europe as an ornamental tree",
    partsUsed: "The leafy twig tips",
  },
  sources: {
    naser: {
      title: "Thuja occidentalis (Arbor vitae): A Review of its Pharmaceutical, Pharmacological and Clinical Properties",
      author: "Naser B, Bodinet C, Tegtmeier M, Lindequist U",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2005-02-09",
      doi: "10.1093/ecam/neh065",
      pmid: "15841280",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1062158/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Northern White Cedar", type: "COMMON_NAME" },
    { name: "White Cedar", type: "COMMON_NAME" },
    { name: "Arborvitae", type: "COMMON_NAME" },
    { name: "Thuja", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Indigenous people in Canada showed it to a 16th-century expedition as a remedy for weakness from scurvy." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous people in Canada first showed this tree to a 16th-century European expedition, and it proved effective for weakness from scurvy. In folk medicine it has been used for:\n- Bronchitis with mucus\n- Bedwetting and bladder infections\n- Psoriasis\n- Absent periods\n- Rheumatism\nToday it's used mainly in homeopathy.",
      source: "naser",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, cedar extracts have shown antiviral activity and stimulated parts of the immune system.",
      source: "naser",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No controlled trials have tested cedar on its own. Studies of a product that combines it with echinacea and wild indigo found it helped with colds and other upper respiratory infections. The review was written by scientists from the company that makes this product.",
      source: "naser",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The fresh plant is poisonous because of its high thujone content; thujone makes up about 65% of its essential oil. Poisoning from the fresh plant can cause vomiting, stomach pain, diarrhea, headache, agitation and seizures, and damage to the liver, kidneys and heart. Infants who ate fresh leaves and twigs had mild stomach upset and vomiting.",
      source: "naser",
    },
    {
      category: "PREGNANCY",
      description: "Don't use cedar during pregnancy or breastfeeding without first talking to a doctor.",
      source: "naser",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Combined with echinacea and wild indigo in a product studied for colds. Not tested on its own." },
  ],
});

// Shared plain-language helpers for herb content. See docs/CONTENT_STYLE.md.

// Stored text may end with "\n\nTechnical detail: ..." holding the exact
// figures and scientific terms behind the plain-language sentence above it.
export const TECHNICAL_MARKER = "\n\nTechnical detail: ";

export function splitTechnical(text: string): { plain: string; technical: string | null } {
  const i = text.indexOf(TECHNICAL_MARKER);
  if (i === -1) return { plain: text, technical: null };
  return { plain: text.slice(0, i), technical: text.slice(i + TECHNICAL_MARKER.length) };
}

// Everyday names for plant families, shown next to the botanical name.
export const FAMILY_COMMON_NAMES: Record<string, string> = {
  Apiaceae: "the carrot and parsley family",
  Asteraceae: "the daisy family",
  Caprifoliaceae: "the honeysuckle family",
  Hypericaceae: "the St. John's wort family",
  Lamiaceae: "the mint family",
  Solanaceae: "the nightshade family",
  Urticaceae: "the nettle family",
  Zingiberaceae: "the ginger family",
};

// Terms that can't always be avoided. The first use in each block of herb text
// gets a tooltip with this definition.
export const GLOSSARY: Record<string, string> = {
  adaptogen:
    "A plant traditionally used to help the body respond to physical or mental stress. Research on these effects varies depending on the plant and the specific use.",
  anaphylaxis: "A severe, whole-body allergic reaction that needs emergency treatment.",
  antioxidant: "A substance that helps protect cells from certain types of damage.",
  astringent: "Something that tightens or firms body tissues, such as skin or the lining of the mouth.",
  "essential oil": "A concentrated oil containing the aromatic compounds from a plant.",
  "enteric-coated": "A capsule coating designed to open in the intestine rather than the stomach.",
  infusion: "A preparation made by pouring hot water over plant material and letting it steep.",
  placebo: "A dummy treatment with no active ingredient, used to compare results in a study.",
  "systematic review":
    "A study that gathers and assesses all the good-quality research on a question, rather than relying on a single trial.",
  "meta-analysis": "A study that combines the results of several trials to get a clearer overall answer.",
  "randomized controlled trial":
    "A study where people are assigned by chance to get the treatment or a comparison, such as a placebo. It's one of the most reliable ways to test a treatment.",
  tincture:
    "A concentrated herbal preparation made by soaking plant material in alcohol, glycerin or another liquid.",
  "Commission E": "An expert panel set up by the German government to assess the safety and use of herbal medicines.",
  rhizome: "An underground stem that grows sideways and sends out roots, like ginger or turmeric.",
};

export const EVIDENCE_LABELS: Record<string, string> = {
  TRADITIONAL: "Traditional use",
  PRECLINICAL: "Laboratory & animal research",
  HUMAN_RESEARCH: "Research in people",
};

export const EVIDENCE_NOTES: Record<string, string> = {
  TRADITIONAL: "These are traditional uses, not proven treatments.",
  PRECLINICAL:
    "Lab and animal results show what might be worth studying in people. They don't show that the herb has these effects in humans.",
};

export const SAFETY_LABELS: Record<string, string> = {
  DRUG_INTERACTION: "Interactions with medicines",
  CONTRAINDICATION: "Who should avoid it",
  ALLERGY: "Allergies",
  ADVERSE_EFFECT: "Side effects",
  PREGNANCY: "Pregnancy",
  BREASTFEEDING: "Breastfeeding",
  SURGERY: "Before surgery",
  TOXICITY: "Toxicity testing",
  DOSAGE: "How much to use",
  CONTAMINATION: "Contamination",
  PREPARATION_SPECIFIC: "Depends on how it's prepared",
};

export const TIER_LABELS: Record<string, string> = {
  TIER_1_GOVERNMENT: "Government health agency",
  TIER_2_SYSTEMATIC_REVIEW: "Review or clinical trial",
  TIER_3_PEER_REVIEWED: "Peer-reviewed study",
  TIER_4_TRADITIONAL_TEXT: "Traditional text",
  TIER_5_SECONDARY: "General reference",
};

export function herbPageTitle(name: string, scientificName: string, hasInteractions: boolean) {
  return `${name} (${scientificName}): Uses, Research${hasInteractions ? ", Drug Interactions" : ""} & Safety`;
}

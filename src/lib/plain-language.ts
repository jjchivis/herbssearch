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
  Amaryllidaceae: "the amaryllis and onion family",
  Apiaceae: "the carrot and parsley family",
  Araliaceae: "the ginseng family",
  Asparagaceae: "the asparagus family",
  Acanthaceae: "the acanthus family",
  Asteraceae: "the daisy family",
  Brassicaceae: "the mustard and cabbage family",
  Caryophyllaceae: "the pink and carnation family",
  Caprifoliaceae: "the honeysuckle family",
  Cucurbitaceae: "the gourd and cucumber family",
  Equisetaceae: "the horsetail family",
  Fabaceae: "the pea and bean family",
  Ginkgoaceae: "the ginkgo family",
  Hericiaceae: "a family of tooth fungi (mushrooms with hanging spines)",
  Hypericaceae: "the St. John's wort family",
  Lamiaceae: "the mint family",
  Lauraceae: "the laurel family",
  Linaceae: "the flax family",
  Malvaceae: "the mallow family",
  Meliaceae: "the mahogany family",
  Passifloraceae: "the passionflower family",
  Phyllanthaceae: "the leafflower family",
  Piperaceae: "the pepper family",
  Plantaginaceae: "the plantain family",
  Polyporaceae: "a family of bracket fungi (mushrooms that grow on wood)",
  Primulaceae: "the primrose family",
  Ranunculaceae: "the buttercup family",
  Rosaceae: "the rose family",
  Schisandraceae: "the magnolia-vine family",
  Solanaceae: "the nightshade family",
  Theaceae: "the tea family",
  Urticaceae: "the nettle family",
  Zingiberaceae: "the ginger family",
};

// Shown above the herb list when a visitor browses a body system whose
// conditions can be serious (docs/CONTENT_STYLE.md, "Symptom search").
export const BODY_SYSTEM_NOTES: Record<string, string> = {
  cardiovascular:
    "Heart and blood vessel problems can be serious. These herbs are listed because people have traditionally used them or researchers have studied them, not because they're proven treatments. Don't use them in place of medicine your doctor prescribed, and check with your doctor or pharmacist first: several can interact with heart, blood pressure and blood-thinning medicines.",
  reproductive:
    "Many herbs affect hormones, and several aren't safe during pregnancy or breastfeeding or with hormone-sensitive cancers. These herbs are listed because of traditional use or research, not because they're proven treatments. Check with your doctor, midwife or pharmacist before using them, especially if you're pregnant, trying to conceive or taking hormonal medicines.",
  "liver-gallbladder":
    "Liver and gallbladder problems need diagnosis and care from a health professional. These herbs are listed because of traditional use or research, not because they're proven treatments. Some herbs and supplements can themselves harm the liver, and several shouldn't be used if you have gallstones. Check with your doctor or pharmacist first, especially if you have liver disease or take regular medicines.",
  skin:
    "Most minor skin problems can be cared for at home, but see a doctor for deep, infected or slow-healing wounds, serious burns, or rashes that come with a fever. Several of these herbs can cause skin allergies, especially plants in the daisy family such as calendula and mugwort. These herbs are listed because of traditional use or research, not because they're proven treatments.",
  "nervous-system":
    "Several of these herbs can make you sleepy and add to the effects of alcohol and of sleep or anxiety medicines, so don't drive if they make you drowsy. Some, such as kava, have been linked to liver damage. For ongoing anxiety, low mood or sleep problems, talk to a health professional. These herbs are listed because of traditional use or research, not because they're proven treatments.",
  respiratory:
    "Get emergency help for severe breathlessness, chest pain or blue lips. Don't use herbs in place of asthma inhalers or other prescribed medicines. These herbs are listed because of traditional use or research, not because they're proven treatments.",
  metabolic:
    "Blood sugar problems such as diabetes need diagnosis and care from a health professional. Some of these herbs may add to the effects of diabetes medicines, so check with your doctor or pharmacist before using them.",
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
  atherosclerosis: "A buildup of fatty deposits (plaque) inside the arteries that narrows and hardens them.",
  "mm Hg": "Millimeters of mercury, the unit blood pressure is measured in.",
  bile: "A digestive fluid made by the liver and stored in the gallbladder. It helps the body digest fats.",
  "liver enzymes":
    "Substances measured in a liver blood test, such as ALT and AST. Higher levels can be a sign that liver cells are being damaged.",
  "LDL": "Low-density lipoprotein, often called \"bad\" cholesterol because high levels can build up in the arteries.",
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

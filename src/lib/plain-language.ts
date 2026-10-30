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
  Acanthaceae: "the acanthus family",
  Acoraceae: "the sweet flag family",
  Aizoaceae: "the ice plant family",
  Alismataceae: "the water plantain family",
  Altingiaceae: "the sweetgum family",
  Amaranthaceae: "the amaranth family",
  Amaryllidaceae: "the amaryllis and onion family",
  Anacardiaceae: "the cashew and mango family",
  Annonaceae: "the custard-apple family",
  Apiaceae: "the carrot and parsley family",
  Apocynaceae: "the dogbane and milkweed family",
  Aquifoliaceae: "the holly family",
  Araceae: "the arum family, which includes duckweeds",
  Araliaceae: "the ginseng family",
  Arecaceae: "the palm family",
  Aristolochiaceae: "the birthwort family",
  Asparagaceae: "the asparagus family",
  Asphodelaceae: "the aloe family",
  Asteraceae: "the daisy family",
  Balsaminaceae: "the balsam and touch-me-not family",
  Berberidaceae: "the barberry family",
  Betulaceae: "the birch family",
  Bignoniaceae: "the trumpet-creeper family",
  Bixaceae: "the annatto family",
  Boraginaceae: "the borage family",
  Brachytheciaceae: "a family of feather mosses",
  Brassicaceae: "the mustard and cabbage family",
  Bromeliaceae: "the pineapple and bromeliad family",
  Burseraceae: "the frankincense and myrrh family",
  Cactaceae: "the cactus family",
  Campanulaceae: "the bellflower family",
  Cannabaceae: "the hemp family, which includes hops",
  Caprifoliaceae: "the honeysuckle family",
  Caricaceae: "the papaya family",
  Caryophyllaceae: "the pink and carnation family",
  Celastraceae: "the staff-vine family",
  Clusiaceae: "the mangosteen family",
  Combretaceae: "the combretum family",
  Convolvulaceae: "the morning glory family",
  Cornaceae: "the dogwood family",
  Costaceae: "the spiral ginger family",
  Crassulaceae: "the stonecrop and jade plant family",
  Cucurbitaceae: "the gourd and cucumber family",
  Cupressaceae: "the cypress family",
  Cynomoriaceae: "the cynomorium family of parasitic plants",
  Ebenaceae: "the ebony family",
  Elaeagnaceae: "the oleaster family, which includes sea buckthorn",
  Equisetaceae: "the horsetail family",
  Ericaceae: "the heather family",
  Euphorbiaceae: "the spurge family",
  Fabaceae: "the pea and bean family",
  Fucaceae: "the rockweed family of brown seaweeds",
  Gentianaceae: "the gentian family",
  Geraniaceae: "the geranium family",
  Gesneriaceae: "the gesneriad family, which includes African violets",
  Gigartinaceae: "a family of red seaweeds",
  Ginkgoaceae: "the ginkgo family",
  Hamamelidaceae: "the witch hazel family",
  Hericiaceae: "a family of tooth fungi (mushrooms with hanging spines)",
  Hymenochaetaceae: "a family of bracket fungi that grow on trees",
  Hypericaceae: "the St. John's wort family",
  Hypoxidaceae: "the star-grass family",
  Iridaceae: "the iris family",
  Juglandaceae: "the walnut family",
  Lamiaceae: "the mint family",
  Lauraceae: "the laurel family",
  Linaceae: "the flax family",
  Lobariaceae: "a family of leafy lichens",
  Lythraceae: "the loosestrife family, which includes pomegranate",
  Magnoliaceae: "the magnolia family",
  Malvaceae: "the mallow family",
  Melanthiaceae: "the false hellebore family",
  Meliaceae: "the mahogany family",
  Menispermaceae: "the moonseed family",
  Monimiaceae: "the boldo family",
  Moraceae: "the fig and mulberry family",
  Moringaceae: "the moringa family",
  Myricaceae: "the bayberry family",
  Myrtaceae: "the myrtle family",
  Namaceae: "the nama family",
  Nyctaginaceae: "the four o'clock family",
  Nymphaeaceae: "the water lily family",
  Olacaceae: "the olax family",
  Oleaceae: "the olive family",
  Onagraceae: "the evening primrose family",
  Ophiocordycipitaceae: "a family of fungi that grow on insects",
  Orchidaceae: "the orchid family",
  Orobanchaceae: "the broomrape family",
  Paeoniaceae: "the peony family",
  Papaveraceae: "the poppy family",
  Parmeliaceae: "a large family of lichens",
  Passifloraceae: "the passionflower family",
  Pedaliaceae: "the sesame family",
  Petiveriaceae: "the guinea hen weed family",
  Phyllanthaceae: "the leafflower family",
  Phytolaccaceae: "the pokeweed family",
  Pinaceae: "the pine family",
  Piperaceae: "the pepper family",
  Plantaginaceae: "the plantain family",
  Poaceae: "the grass family",
  Polygonaceae: "the buckwheat and dock family",
  Polypodiaceae: "the polypody fern family",
  Polyporaceae: "a family of bracket fungi (mushrooms that grow on wood)",
  Portulacaceae: "the purslane family",
  Primulaceae: "the primrose family",
  Ranunculaceae: "the buttercup family",
  Rhamnaceae: "the buckthorn family",
  Rosaceae: "the rose family",
  Rubiaceae: "the coffee family",
  Rutaceae: "the citrus family",
  Salicaceae: "the willow family",
  Salviniaceae: "the floating fern family",
  Santalaceae: "the sandalwood family, which includes mistletoe",
  Sapindaceae: "the soapberry family",
  Schisandraceae: "the magnolia-vine family",
  Scrophulariaceae: "the figwort family",
  Smilacaceae: "the greenbrier family",
  Solanaceae: "the nightshade family",
  Sphagnaceae: "the peat moss family",
  Stemonaceae: "the stemona family",
  Taxaceae: "the yew family",
  Theaceae: "the tea family",
  Tremellaceae: "a family of jelly fungi",
  Typhaceae: "the cattail family",
  Ulmaceae: "the elm family",
  Urticaceae: "the nettle family",
  Verbenaceae: "the verbena family",
  Viburnaceae: "the viburnum and elder family",
  Vitaceae: "the grape family",
  Zingiberaceae: "the ginger family",
  Zygophyllaceae: "the caltrop family",
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
  immune:
    "Herbs can't replace vaccines or medical treatment for infections. Several herbs promoted as immune boosters have caused liver or kidney damage, and some affect medicines that suppress the immune system. Check with your doctor or pharmacist, especially if you have an autoimmune disease or take regular medicines. These herbs are listed because of traditional use or research, not because they're proven treatments.",
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

// Short form of TIER_LABELS, shown as a badge next to each citation number.
export const TIER_BADGES: Record<string, string> = {
  TIER_1_GOVERNMENT: "Health agency",
  TIER_2_SYSTEMATIC_REVIEW: "Review or trial",
  TIER_3_PEER_REVIEWED: "Study",
  TIER_4_TRADITIONAL_TEXT: "Traditional text",
  TIER_5_SECONDARY: "General reference",
};

export const TIER_ORDER = [
  "TIER_1_GOVERNMENT",
  "TIER_2_SYSTEMATIC_REVIEW",
  "TIER_3_PEER_REVIEWED",
  "TIER_4_TRADITIONAL_TEXT",
  "TIER_5_SECONDARY",
];

// Safety categories summarized in the "Safety at a glance" strip at the top of
// each herb page, in display order.
export const SAFETY_GLANCE = [
  { category: "PREGNANCY", label: "Pregnancy" },
  { category: "BREASTFEEDING", label: "Breastfeeding" },
  { category: "DRUG_INTERACTION", label: "Medicines" },
  { category: "CONTRAINDICATION", label: "Who should avoid it" },
  { category: "ALLERGY", label: "Allergies" },
  { category: "TOXICITY", label: "Toxicity" },
];

export function herbPageTitle(name: string, scientificName: string, hasInteractions: boolean) {
  return `${name} (${scientificName}): Uses, Research${hasInteractions ? ", Drug Interactions" : ""} & Safety`;
}

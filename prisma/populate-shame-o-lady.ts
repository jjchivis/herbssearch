import { run } from "./lib/populate-herb";

// Shame O' Lady (Mimosa pudica, sensitive plant), from the TRAMIL Caribbean
// pharmacopoeia entry, a 2012 review (Ahmad et al., Pharmacogn Rev), a Jamaica
// Observer article on its Jamaican names (2022) and a toxicity study in chicks
// (Nghonjuyi et al. 2016).

run({
  name: "Shame O' Lady",
  profile: {
    family: "Fabaceae",
    genus: "Mimosa",
    species: "pudica",
    nativeRange: "Widespread in tropical America; now naturalised in the tropics worldwide",
    partsUsed: "The leaves and roots",
  },
  sources: {
    tramil: {
      title: "Mimosa pudica",
      organization: "TRAMIL (Traditional Medicine in the Islands)",
      url: "https://tramil.net/en/plant/mimosa-pudica",
      sourceType: "secondary",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    ahmad: {
      title: "Mimosa pudica L. (Laajvanti): An overview",
      author: "Ahmad H, Sehgal S, Mishra A, Gupta R",
      journal: "Pharmacognosy Reviews",
      organization: "Pharmacognosy Reviews",
      publicationDate: "2012-07-01",
      doi: "10.4103/0973-7847.99945",
      pmid: "23055637",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3459453/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    observer: {
      title: "The fascinating 'shame plant'",
      organization: "Jamaica Observer",
      publicationDate: "2022-04-25",
      url: "https://jamaicaobserver.com/2022/04/25/the-fascinating-shame-plant",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    nghonjuyi: {
      title: "Acute and sub-chronic toxicity studies of three plants used in Cameroonian ethnoveterinary medicine: Aloe vera (L.) Burm. f. (Xanthorrhoeaceae) leaves, Carica papaya L. (Caricaceae) seeds or leaves, and Mimosa pudica L. (Fabaceae) leaves in Kabir chicks",
      author: "Nghonjuyi NW, Tiambo CK, Taïwe GS, Toukala JP, Lisita F, Juliano RS, Kimbi HK",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2015-12-02",
      doi: "10.1016/j.jep.2015.11.049",
      pmid: "26657577",
      url: "https://doi.org/10.1016/j.jep.2015.11.049",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shame Old Lady", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Shame Ol' Lady", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Dead and Wake", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Shamey Macca", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Shame Plant", type: "COMMON_NAME" },
    { name: "Sensitive Plant", type: "COMMON_NAME" },
    { name: "Touch Me Not", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Recommended by TRAMIL, the Caribbean traditional-medicine research network, as a tea for period cramps." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica it's called shame old lady, dead and wake, or shamey macca, because its leaves fold up when touched. They also close at night and in strong heat or rain.",
      source: "observer",
    },
    {
      category: "TRADITIONAL",
      summary:
        "TRAMIL, a Caribbean research network that reviews traditional remedies, recommends it for period cramps, based on significant traditional use and published research. Their preparation: 5 grams of leaves and roots boiled for 10 minutes, or steeped, in 4 cups (1 litre) of water. Drink 1 cup 3 times a day for no more than 3 to 5 days, and don't keep the tea for more than 24 hours.",
      source: "tramil",
    },
    {
      category: "TRADITIONAL",
      summary:
        "It has long been used for urinary and reproductive problems, piles, dysentery (bloody diarrhea) and sinus problems, and is put on wounds.",
      source: "ahmad",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies report that it may fight bacteria, counter snake venom, reduce fertility, prevent seizures, ease depression and act as an aphrodisiac.",
      source: "ahmad",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In chicks, a leaf extract caused no deaths even at very high single doses, and no harm when given daily for 42 days.\n\nTechnical detail: hydroalcoholic leaf extract, single oral doses 40–5120 mg/kg; 80–640 mg/kg/day for 42 days.",
      source: "nghonjuyi",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "TRAMIL advises not to use it during pregnancy or breastfeeding, or in children under 12.",
      source: "tramil",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Period cramps can be caused by more serious problems, such as endometriosis, fibroids, pelvic infections, ectopic pregnancy or tumors. TRAMIL recommends seeing a doctor first.",
      source: "tramil",
    },
  ],
  symptoms: [
    {
      slug: "menstrual-discomfort",
      notes: "TRAMIL recommends it as a tea for period cramps, based on traditional use and research. See a doctor first to rule out other causes.",
    },
    { slug: "diarrhea", notes: "Traditionally used for dysentery (bloody diarrhea)." },
    { slug: "wounds-and-burns", notes: "Traditionally put on wounds." },
    { slug: "pregnancy-and-childbirth", notes: "TRAMIL advises not to use it during pregnancy or breastfeeding." },
  ],
});

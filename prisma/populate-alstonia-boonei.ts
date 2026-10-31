import { run } from "./lib/populate-herb";

// Alstonia boonei, from a 2012 review (Adotey et al.) and a 2025 case report
// of liver and kidney injury from a product containing it (Zacharia et al.).
// The traditional preparations, rat arthritis studies and Ghanaian names come
// from the review's full text. A 2014 lab study of the root bark (Obiagwu et
// al.) adds its use for arthritis and a free-radical test. Family per GBIF.

run({
  name: "Alstonia Boonei",
  profile: {
    family: "Apocynaceae",
    genus: "Alstonia",
    species: "boonei",
    nativeRange: "West and Central Africa",
    partsUsed: "The bark, leaves, roots and latex (sap)",
  },
  sources: {
    adotey: {
      title: "A Review of the Ethnobotany and Pharmacological Importance of Alstonia boonei De Wild (Apocynaceae)",
      author: "Adotey JP, Adukpo GE, Opoku Boahen Y, Armah FA",
      journal: "ISRN Pharmacology",
      publicationDate: "2012-07-30",
      doi: "10.5402/2012/587160",
      pmid: "22900200",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3413980/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    obiagwu: {
      title: "The Useful Medicinal Properties of the Root-Bark Extract of Alstonia boonei (Apocynaceae) May Be Connected to Antioxidant Activity",
      author: "Obiagwu MO, Ihekwereme CP, Ajaghaku DL, Okoye FB",
      journal: "ISRN Pharmacology",
      publicationDate: "2014-01-27",
      doi: "10.1155/2014/741478",
      pmid: "24592332",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3921938/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zacharia: {
      title: "Complementary and Alternative Medicine-Induced Combined Hepatorenal Toxicity: A Case Report",
      author: "Zacharia GS, Ravte V, Jyala A, Shehi E",
      journal: "Cureus",
      publicationDate: "2025-12-27",
      doi: "10.7759/cureus.100197",
      pmid: "41602262",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12834359/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "God's Tree", type: "COMMON_NAME" },
    { name: "Onyame Dua", type: "REGIONAL_NAME", region: "Ghana" },
    { name: "Osen-nuru", type: "REGIONAL_NAME", region: "Ghana (Twi)" },
    { name: "Sinduro", type: "REGIONAL_NAME", region: "Ghana (Twi)" },
    { name: "Nyamenlebaka", type: "REGIONAL_NAME", region: "Ghana (Nzema)" },
  ],
  constituents: [
    { name: "Echitamidine", slug: "echitamidine", type: "alkaloid" },
    { name: "Echitamine", slug: "echitamine", type: "alkaloid" },
    { name: "Boonein", slug: "boonein", type: "iridoid" },
    { name: "Lupeol", slug: "lupeol", type: "triterpene" },
    { name: "Ursolic acid", slug: "ursolic-acid", type: "triterpene" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Sacred in some West African forest communities; used for malaria and fever." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Called God's tree (Onyame dua) in Ghana, Alstonia boonei is sacred in some West African forest communities, so its parts aren't eaten. It is traditionally used for malaria, fever, diabetes and infections, and as an aphrodisiac.",
      source: "adotey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies support its use against malaria and fever, and found antimicrobial and blood-sugar-lowering effects. It is rich in alkaloids and triterpenes.",
      source: "adotey",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The bark is the part most used, fresh or dried. In Ghana, a bark decoction sweetened with honey is taken up to 4 times a day for pain, including period pain, pelvic pain, painful urination from infections, joint pain and the aches of malaria fever.",
      source: "adotey",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A cold infusion of the bark is taken 2 to 3 times a day by people with diabetes to lower blood sugar, and given to children to clear roundworms, threadworms and other gut worms.",
      source: "adotey",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Fresh bark is made into tinctures used for snake, rat and scorpion bites and stings. The bark is also given to women to help pass the afterbirth and to increase breast milk, and is mixed with other plants for jaundice, broken bones and asthma. The sap is taken as a laxative, and hardened sap is put on yaws sores.",
      source: "adotey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with arthritis, compounds from the root bark (lupeol acetate and amyrins) reduced joint swelling. A stem bark extract reduced swelling, pain and fever in rats and mice.",
      source: "adotey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts of the root bark neutralized free radicals (unstable molecules that can damage cells), though more weakly than vitamin C.",
      source: "obiagwu",
    },
    {
      category: "TRADITIONAL",
      summary: "The root bark is commonly used with other herbs to manage arthritis in West and Central Africa.",
      source: "obiagwu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A Ghanaian arthritis remedy made mostly of Alstonia boonei root bark, with a little Rauvolfia vomitoria root bark and palm nut, reduced joint swelling in rats.",
      source: "adotey",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A man who took an herbal product containing Alstonia boonei, prekese and papaya extracts developed serious liver and kidney damage, which improved after he stopped. Alstonia boonei has been linked to liver and kidney damage in animal studies.",
      source: "zacharia",
    },
    {
      category: "TOXICITY",
      description:
        "In arthritic rats, compounds from the root bark made the liver and kidneys heavier, and one raised a liver enzyme. The researchers said this could mean the root bark is toxic.",
      source: "adotey",
    },
    {
      category: "PREGNANCY",
      description:
        "The bark is traditionally given to help pass the afterbirth, and it has been reported as possibly able to cause miscarriage.",
      source: "adotey",
    },
    {
      category: "DOSAGE",
      description: "There are no studies of safe doses, side effects or long-term use of Alstonia boonei.",
      source: "adotey",
    },
  ],
  preparations: [
    { slug: "decoction", notes: "Bark boiled in water, sometimes sweetened with honey, taken up to 4 times a day for pain.", source: "adotey" },
    { slug: "tincture", notes: "Made from fresh bark; used traditionally for snake, rat and scorpion bites and stings.", source: "adotey" },
  ],
  symptoms: [
    { slug: "fever", notes: "Traditionally used for malaria fever. A bark extract lowered fever in mice; not tested in people." },
    { slug: "joint-discomfort", notes: "Traditionally used for joint pain. Root bark compounds reduced joint swelling in arthritic rats; no human trials." },
    { slug: "menstrual-discomfort", notes: "A bark decoction is traditionally taken for period pain. Not studied in people." },
    { slug: "high-blood-sugar", notes: "A cold bark infusion is traditionally taken for diabetes. Not studied in people." },
  ],
});

import { run } from "./lib/populate-herb";

// Bhumyamalaki (Phyllanthus amarus), from a 2011 review of its traditional use
// and pharmacology (Patel et al.), two Cochrane reviews of Phyllanthus for
// chronic hepatitis B (Xia et al. 2011, 2013), the first hepatitis B study
// (Thyagarajan et al. 1988), a small study of urine, blood pressure and blood
// sugar (Srividya & Periwal 1995), a hangover trial (George et al. 2019) and a
// knee arthritis gel trial (Pinkaew et al. 2020). Family per current APG
// classification (Phyllanthaceae; older sources say Euphorbiaceae).

run({
  name: "Bhumyamalaki",
  profile: { family: "Phyllanthaceae", genus: "Phyllanthus", species: "amarus", partsUsed: "The whole plant" },
  sources: {
    patel: {
      title: "Phyllanthus amarus: ethnomedicinal uses, phytochemistry and pharmacology: a review",
      author: "Patel JR, Tripathi P, Sharma V, Chauhan NS, Dixit VK",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2011-11-18",
      doi: "10.1016/j.jep.2011.09.040",
      pmid: "21982793",
      url: "https://doi.org/10.1016/j.jep.2011.09.040",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xia2011: {
      title: "Phyllanthus species for chronic hepatitis B virus infection",
      author: "Xia Y, Luo H, Liu JP, Gluud C",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2011-04-13",
      doi: "10.1002/14651858.CD008960.pub2",
      pmid: "21491412",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD008960.pub2/full",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    xia2013: {
      title: "Phyllanthus species versus antiviral drugs for chronic hepatitis B virus infection",
      author: "Xia Y, Luo H, Liu JP, Gluud C",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2013-04-30",
      doi: "10.1002/14651858.CD009004.pub2",
      pmid: "23633363",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11930397/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    thyagarajan: {
      title: "Effect of Phyllanthus amarus on chronic carriers of hepatitis B virus",
      author: "Thyagarajan SP, Subramanian S, Thirunalasundari T, Venkateswaran PS, Blumberg BS",
      journal: "The Lancet",
      publicationDate: "1988-10-01",
      doi: "10.1016/s0140-6736(88)92416-6",
      pmid: "2901611",
      url: "https://doi.org/10.1016/s0140-6736(88)92416-6",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    srividya: {
      title: "Diuretic, hypotensive and hypoglycaemic effect of Phyllanthus amarus",
      author: "Srividya N, Periwal S",
      journal: "Indian Journal of Experimental Biology",
      publicationDate: "1995-11-01",
      pmid: "8786163",
      url: "https://pubmed.ncbi.nlm.nih.gov/8786163/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    george: {
      title:
        "Effects of Phyllanthus amarus PHYLLPRO leaves on hangover symptoms: a randomized, double-blind, placebo-controlled crossover study",
      author: "George A, Udani JK, Yusof A",
      journal: "Pharmaceutical Biology",
      publicationDate: "2019-12-01",
      doi: "10.1080/13880209.2019.1585460",
      pmid: "30922154",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6442116/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pinkaew: {
      title:
        "Phonophoresis of Phyllanthus amarus nanoparticle gel improves functional capacity in individuals with knee osteoarthritis: A randomized controlled trial",
      author: "Pinkaew D, Kiattisin K, Wonglangka K, Awoot P",
      journal: "Journal of Bodywork and Movement Therapies",
      publicationDate: "2020-01-01",
      doi: "10.1016/j.jbmt.2019.04.013",
      pmid: "31987536",
      url: "https://doi.org/10.1016/j.jbmt.2019.04.013",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bhumi Amla", type: "REGIONAL_NAME", region: "India" },
    { name: "Keezhanelli", type: "REGIONAL_NAME", region: "Tamil Nadu" },
    { name: "Stonebreaker", type: "COMMON_NAME" },
    { name: "Carry Me Seed", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "An important Ayurvedic plant for the stomach, liver, kidneys, spleen and urinary system." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "An important plant in Ayurveda, used for problems of the stomach, liver, kidneys and spleen, and of the urinary and genital organs. It's described as bitter.",
      source: "patel",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The whole plant has also been used for:\n- diarrhea and dysentery\n- fevers that come and go\n- gonorrhea, heavy periods and other genital problems\n- eye problems, scabies, ulcers and wounds",
      source: "patel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts and compounds from the plant showed many effects, including against viruses, bacteria and malaria parasites, lowering blood sugar and cholesterol, and protecting the liver and kidneys. Most of these haven't been tested in people.\n\nTechnical detail: reported constituents include lignans, flavonoids, hydrolysable tannins (ellagitannins), polyphenols, triterpenes, sterols and alkaloids; reported activities include antiviral, antibacterial, antiplasmodial, anti-inflammatory, anticancer, antidiabetic, hypolipidemic, antioxidant, hepatoprotective, nephroprotective and diuretic effects.",
      source: "patel",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an early study of people carrying hepatitis B, 22 of 37 (59%) who took the plant for 30 days lost a key sign of the virus in their blood, compared with 1 of 23 (4%) who took a placebo. Few or no side effects were seen. Later trials didn't confirm this result (see below).\n\nTechnical detail: loss of hepatitis B surface antigen (HBsAg) 15–20 days after treatment; some people were followed for up to 9 months.",
      source: "thyagarajan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A Cochrane review of 16 trials (1,326 people) found no convincing evidence that phyllanthus plants, the group that includes bhumyamalaki, help chronic hepatitis B compared with a placebo.\nAdding phyllanthus to antiviral medicines may have worked better than the medicines alone, but the trials had serious weaknesses, so this isn't reliable. No serious side effects were reported.\n\nTechnical detail: only 1 trial (42 people) used a placebo, with no difference in HBeAg seroconversion (RR 0.9; 95% CI 0.73 to 1.25). In 15 add-on trials, phyllanthus plus antivirals affected serum HBV DNA (RR 0.69), HBeAg (RR 0.70) and HBeAg seroconversion (RR 0.77), with substantial heterogeneity; the HBV DNA result wasn't supported by trial sequential analysis. Most trials didn't report which species was used.",
      source: "xia2011",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A second Cochrane review compared phyllanthus with antiviral medicines in 5 trials (290 people). All the trials had a high risk of bias, and the review found too little evidence to support or rule out phyllanthus for chronic hepatitis B.\n\nTechnical detail: \"compound phyllanthus\" for 3–12 months versus lamivudine, interferon alpha or thymosin. HBeAg clearance favoured phyllanthus in conventional meta-analysis (RR 0.76) but not after trial sequential analysis; no difference in HBsAg (RR 1.00) or HBV DNA clearance (RR 0.83). No adverse event data were reported.",
      source: "xia2013",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study without a comparison group, 9 people with mild high blood pressure (4 of whom also had diabetes) took the whole plant for 10 days. They passed more urine, and their blood sugar fell. Blood pressure fell in those without diabetes and in the women. No harmful side effects were seen.\n\nTechnical detail: significant increases in 24-hour urine volume and in urine and serum sodium; significant fall in systolic blood pressure in non-diabetic and female participants.",
      source: "srividya",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial with 15 adults, a leaf extract (750 mg a day for 10 days) was taken before drinking alcohol. Compared with a placebo, people had milder hangover symptoms, such as less nausea, headache and dizziness, and alcohol cleared from their blood faster. Some of the researchers worked for the company that makes the extract.\n\nTechnical detail: randomized, double-blind, placebo-controlled crossover study of PHYLLPRO, a standardized ethanol extract; the placebo group still had 0.05% blood alcohol 12 hours after drinking (p < 0.0001). Hangover Severity Score differences at hour 10 (p < 0.05). First author affiliated with Biotropics Malaysia Berhad.",
      source: "george",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial with 40 people with knee arthritis, both groups had 10 sessions of ultrasound therapy. Those treated with a gel made from the plant had less knee pain and walked further in 6 minutes than those treated with a plain gel.\n\nTechnical detail: randomized, double-blind trial of phonophoresis with P. amarus nanoparticle gel versus ultrasound with a non-drug coupling gel (1.0 W/cm², 10 minutes per session); VAS pain and 6-minute walk test both improved more in the phonophoresis group (p < 0.05).",
      source: "pinkaew",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "In hepatitis B trials, no serious side effects were reported. Only 2 of 16 trials gave numbers for side effects.",
      source: "xia2011",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In the hangover trial, side effects were no more common than with the placebo.",
      source: "george",
    },
  ],
  symptoms: [
    {
      slug: "liver-disease",
      notes:
        "Traditionally used for the liver. Cochrane reviews of hepatitis B trials found no convincing benefit when it's used on its own.",
    },
    { slug: "high-blood-sugar", notes: "Blood sugar fell in a small 10-day study of 9 people with no comparison group." },
    { slug: "high-blood-pressure", notes: "Blood pressure fell in some people in a small 10-day study with no comparison group." },
    { slug: "diarrhea", notes: "Traditionally used for diarrhea and dysentery." },
    { slug: "fever", notes: "Traditionally used for fevers that come and go." },
    {
      slug: "joint-discomfort",
      notes: "A gel made from the plant, applied with ultrasound, eased knee arthritis pain in a 40-person trial.",
    },
  ],
});

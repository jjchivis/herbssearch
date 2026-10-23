import { run } from "./lib/populate-herb";

// Dong quai (Angelica sinensis), from verified sources: Memorial Sloan
// Kettering's About Herbs entry, a 2014 ethnopharmacology review (Hook, J
// Ethnopharmacol), a small randomized trial in men (Al-Bareeq et al. 2010) and
// two menopause trials (Hirata et al. 1997; Haines et al. 2008), and lab and
// animal studies on bone (Kong et al. 2014; Yang et al. 2019), blood sugar
// (Wang et al. 2015) and mood (Shen et al. 2016).
// NCCIH has no dong quai page. Family per GBIF / Catalogue of Life.

run({
  name: "Dong Quai",
  profile: { family: "Apiaceae", genus: "Angelica", species: "sinensis", partsUsed: "The root" },
  sources: {
    mskcc: {
      title: "Dong Quai",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2026-07-29",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/dong-quai",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    hook: {
      title: "Danggui to Angelica sinensis root: are potential benefits to European women lost in translation? A review",
      author: "Hook IL",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2014-02-01",
      doi: "10.1016/j.jep.2013.12.018",
      pmid: "24365638",
      url: "https://pubmed.ncbi.nlm.nih.gov/24365638/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    albareeq: {
      title: "Dong Quai (angelica sinensis) in the treatment of hot flashes for men on androgen deprivation therapy: results of a randomized double-blind placebo controlled trial",
      author: "Al-Bareeq RJ, Ray AA, Nott L, Pautler SE, Razvi H",
      journal: "Canadian Urological Association Journal",
      organization: "Canadian Urological Association Journal",
      publicationDate: "2010-02-01",
      doi: "10.5489/cuaj.775",
      pmid: "20165579",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2811999/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hirata: {
      title: "Does dong quai have estrogenic effects in postmenopausal women? A double-blind, placebo-controlled trial",
      author: "Hirata JD, Swiersz LM, Zell B, Small R, Ettinger B",
      journal: "Fertility and Sterility",
      organization: "Fertility and Sterility",
      publicationDate: "1997-12-01",
      doi: "10.1016/s0015-0282(97)00397-x",
      pmid: "9418683",
      url: "https://pubmed.ncbi.nlm.nih.gov/9418683/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    haines: {
      title: "A randomized, double-blind, placebo-controlled study of the effect of a Chinese herbal medicine preparation (Dang Gui Buxue Tang) on menopausal symptoms in Hong Kong Chinese women",
      author: "Haines CJ, Lam PM, Chung TK, Cheng KF, Leung PC",
      journal: "Climacteric",
      organization: "Climacteric",
      publicationDate: "2008-06-01",
      doi: "10.1080/13697130802073029",
      pmid: "18568789",
      url: "https://pubmed.ncbi.nlm.nih.gov/18568789/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    kong: {
      title: "Angelica sinensis extract inhibits RANKL-mediated osteoclastogenesis by down-regulated the expression of NFATc1 in mouse bone marrow cells",
      author: "Kong L, Zhao Q, Wang X, Zhu J, Hao D, Yang C",
      journal: "BMC Complementary and Alternative Medicine",
      organization: "BMC Complementary and Alternative Medicine",
      publicationDate: "2014-12-12",
      doi: "10.1186/1472-6882-14-481",
      pmid: "25496242",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4295400/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yang: {
      title: "Ligustilide, a major bioactive component of Angelica sinensis, promotes bone formation via the GPR30/EGFR pathway",
      author: "Yang F, Lin ZW, Huang TY, Chen TT, Cui J, Li MY, Hua YQ",
      journal: "Scientific Reports",
      organization: "Scientific Reports",
      publicationDate: "2019-05-06",
      doi: "10.1038/s41598-019-43518-7",
      pmid: "31061445",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6502875/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Angelica sinensis polysaccharide regulates glucose and lipid metabolism disorder in prediabetic and streptozotocin-induced diabetic mice through the elevation of glycogen levels and reduction of inflammatory factors",
      author: "Wang K, Cao P, Shui W, Yang Q, Tang Z, Zhang Y",
      journal: "Food & Function",
      organization: "Food & Function",
      publicationDate: "2015-03-01",
      doi: "10.1039/c4fo00859f",
      pmid: "25630053",
      url: "https://pubmed.ncbi.nlm.nih.gov/25630053/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shen: {
      title: "The Antidepressant Effect of Angelica sinensis Extracts on Chronic Unpredictable Mild Stress-Induced Depression Is Mediated via the Upregulation of the BDNF Signaling Pathway in Rats",
      author: "Shen J, Zhang J, Deng M, Liu Y, Hu Y, Zhang L",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2016-08-25",
      doi: "10.1155/2016/7434692",
      pmid: "27642354",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5014956/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Danggui", type: "TRADITIONAL_NAME", region: "China (TCM)" },
    { name: "Chinese Angelica", type: "COMMON_NAME" },
    { name: "Tang Kuei", type: "COMMON_NAME" },
    { name: "Female Ginseng", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "One of the herbs most commonly used by Traditional Chinese Medicine practitioners, with a long history in China, Korea and Japan, mainly for women's reproductive problems such as period pain, missing periods and menopause.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Dong quai (danggui) has a long history of use in China, Korea and Japan, and is still one of the herbs most commonly used by Traditional Chinese Medicine practitioners in China and Europe. It is mainly used for women's reproductive problems, such as period pain, missing periods and menopause.\n\nTechnical detail: dysmenorrhea, amenorrhoea.",
      source: "hook",
    },
    {
      category: "TRADITIONAL",
      summary: "In traditional Chinese medicine, dong quai is used for menstrual cramps and for menopausal symptoms such as hot flashes.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, dong quai showed anti-tumor effects, and in animals it protected against damage from chemotherapy and radiation. But it also acted like estrogen in the lab, and it promoted the growth of estrogen-sensitive breast tumors in mice.\n\nTechnical detail: estrogen receptor-positive breast tumors in a murine model.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on mouse bone marrow cells, a dong quai extract stopped the cells that break down bone from forming, without harming the cells. The authors suggest it might help prevent bone loss, but it wasn't tested in animals or people.\n\nTechnical detail: inhibited RANKL-induced osteoclast differentiation in bone marrow macrophages, dose-dependently; suppressed c-Fos, c-Jun and NFATc1.",
      source: "kong",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Ligustilide, the main active compound in dong quai, helped bone-building cells develop in lab tests. In zebrafish, it lessened the bone loss caused by a steroid medicine (prednisolone).\n\nTechnical detail: promoted osteoblast differentiation of MC3T3-E1 cells and bone marrow mesenchymal stem cells via GPR30/EGFR signaling.",
      source: "yang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with prediabetes or diabetes, a sugar-based compound (polysaccharide) from fresh dong quai root lowered blood sugar and insulin resistance. It also lowered cholesterol and triglycerides. In prediabetic mice it reduced body weight.\n\nTechnical detail: Angelica sinensis polysaccharide (ASP); prediabetic and streptozotocin-induced diabetic mice; HOMA-IR decreased; hepatic and muscle glycogen increased; serum IL-6 and TNF-α reduced.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats made depressed by 5 weeks of mild, unpredictable stress, a dong quai extract (1 g per kg of body weight) brought their behavior back to normal. It also raised levels of a brain protein (BDNF) linked to mood.\n\nTechnical detail: chronic unpredictable mild stress model; sucrose preference, forced swim and open field tests; upregulated hippocampal BDNF and phosphorylated CREB and ERK1/2.",
      source: "shen",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies of dong quai for menopausal symptoms are inconclusive. Some research supports its use for PMS and period pain, but formal clinical trials are limited.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Well-designed trials using standardized dong quai are in short supply, though research on its extracts and compounds suggests many of its traditional uses have some scientific basis.",
      source: "hook",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial of 22 men with hot flashes caused by prostate cancer hormone treatment, dong quai taken daily for 3 months made no difference to how often, how badly or how long they had hot flashes, compared with placebo.\n\nTechnical detail: randomized, double-blind, placebo-controlled pilot; 17 of 22 completed.",
      source: "albareeq",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a US trial, 71 women past menopause who had hot flashes took dong quai on its own or a placebo for 24 weeks. Dong quai worked no better than placebo for hot flashes or other menopausal symptoms. It also didn't act like estrogen on the lining of the womb or the vagina.\n\nTechnical detail: double-blind, randomized, placebo-controlled; no significant differences in endometrial thickness, vaginal maturation index, vasomotor flush count or Kupperman index.",
      source: "hirata",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 6-month trial in Hong Kong, 100 women with menopausal symptoms took a traditional formula (Dang Gui Buxue Tang, 1 part dong quai to 5 parts astragalus) or a placebo. Overall it worked no better than placebo for hot flashes and night sweats; it did better only for mild hot flashes. No serious side effects were linked to it.\n\nTechnical detail: randomized, double-blind, placebo-controlled; 103 enrolled, 50 per group; mild flushes per month 18.9 to 8.6 (p < 0.01) vs placebo 26.0 to 12.4 (p = 0.062).",
      source: "haines",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Dong quai may increase the risk of bleeding with blood thinners such as warfarin. It may also affect how the body handles several other medicines, including anti-platelet medicines and clozapine, and long-term use may make some medicines less effective.\n\nTechnical detail: CYP3A4 substrates; dual antiplatelet therapy (altered pharmacokinetics); clozapine (induces metabolism); lisinopril worsened anemia in animal models.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects include skin sensitivity to sunlight and sun-related rashes, loss of appetite, bloating, diarrhea and fever. Breast enlargement in men and high blood pressure have also been reported.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Avoid dong quai during pregnancy because of the risk of miscarriage.",
      source: "mskcc",
    },
    { category: "BREASTFEEDING", description: "Avoid dong quai while breastfeeding.", source: "mskcc" },
    {
      category: "CONTRAINDICATION",
      description: "If you have a hormone-sensitive cancer, talk to your doctor before using dong quai, because it can act like estrogen.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "menopause-symptoms",
      notes:
        "Traditionally used for hot flashes, but in a 24-week trial of 71 women dong quai on its own worked no better than placebo. A formula combining it with astragalus also did no better overall.",
    },
    {
      slug: "menstrual-discomfort",
      notes: "A traditional Chinese remedy for period pain. Some research supports it, but formal trials are limited.",
    },
    { slug: "premenstrual-syndrome", notes: "Some research supports its use for PMS, but formal trials are limited." },
  ],
});

import { run } from "./lib/populate-herb";

// European mistletoe (Viscum album), from NCCIH (2024) and the NCI PDQ Mistletoe
// Extracts patient summary (updated 2023-06-21). Family per Catalogue of Life.

run({
  name: "Mistletoe",
  profile: {
    family: "Santalaceae",
    genus: "Viscum",
    species: "album",
    nativeRange: "Europe; it grows partly as a parasite on trees such as apple, oak, pine and elm",
    partsUsed: "Extracts of the plant, usually given by injection",
  },
  sources: {
    nccih: {
      title: "European Mistletoe: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/european-mistletoe",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nci: {
      title: "Mistletoe Extracts (PDQ®)–Patient Version",
      organization: "National Cancer Institute (NIH)",
      publicationDate: "2023-06-21",
      url: "https://www.cancer.gov/about-cancer/treatment/cam/patient/mistletoe-pdq",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "European Mistletoe", type: "COMMON_NAME" },
    { name: "Viscum album", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Used for centuries in Europe for seizures, headaches and menopause symptoms; extracts are now widely prescribed there for people with cancer." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "European mistletoe has been used for centuries in traditional medicine for seizures, headaches and menopause symptoms. It is different from American mistletoe, the holiday decoration.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Mistletoe has been used for hundreds of years for:\n- Epilepsy\n- Asthma\n- High blood pressure\n- Headaches\n- Menopause symptoms\n- Infertility\n- Skin inflammation\n- Arthritis and rheumatism\nIn Europe, mistletoe extracts are among the most prescribed therapies for people with cancer. Products differ by the type of host tree, the time of year the plant is picked, how the extract is made and the company that makes it.",
      source: "nci",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Mistletoe isn't a proven cancer treatment and shouldn't be used to treat cancer outside of clinical trials. Some trials, mostly in Europe, suggested it improved survival or quality of life, but many had major weaknesses: few patients, missing information about patients and doses, and poor design. Very little research has looked at mistletoe taken by mouth. A small NIH study found people with advanced cancer could tolerate injected mistletoe together with a cancer drug.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The US National Cancer Institute reports mixed results from larger studies, mostly of mistletoe injected alongside standard treatment:\n- Breast cancer: fewer side effects from treatment in one study, and longer survival in another\n- Bowel cancer that hadn't spread: a look back at past patients found longer time without the cancer returning, fewer side effects and better symptom relief\n- Advanced pancreatic cancer: longer survival than with no cancer treatment, in a 2013 study\n- Lung cancer: no difference in quality of life compared with chemotherapy in 2 trials, and no difference in survival or tumour response in another, though more people felt better\n- Melanoma: no longer survival after 1 year of treatment\nThese findings should be read with caution because many studies were small or poorly designed. The US Food and Drug Administration hasn't approved mistletoe to treat cancer or any other condition.\n\nTechnical detail: early-stage breast cancer after surgery (adjuvant); retrospective cohort 1993–2000 in non-metastatic colorectal cancer; non-small cell lung cancer.",
      source: "nci",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "European mistletoe berries and leaves can cause serious harm if eaten.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Injected mistletoe extract can cause soreness and swelling where it's injected, headache, fever, chills, nausea and feeling very tired. A few severe allergic reactions, including anaphylactic shock, have been reported. High doses damaged the liver in some cases, but the damage healed. Other reported effects include circulation problems, inflamed veins with clots, and swollen lymph nodes.\n\nTechnical detail: thrombophlebitis.",
      source: "nci",
    },
    {
      category: "DRUG_INTERACTION",
      description: "If you take any medicine, talk with your health care provider before using European mistletoe. Some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "European mistletoe is probably unsafe during pregnancy. Little is known about whether it's safe while breastfeeding.",
      source: "nccih",
    },
  ],
});

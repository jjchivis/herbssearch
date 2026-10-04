import { run } from "./lib/populate-herb";

// Snake Gourd Root (Trichosanthes kirilowii root, Trichosanthis Radix, tian hua
// fen), from a 2025 review (Mudondo et al.; abstract only) and a 2022 review of
// sixty years of research on its protein trichosanthin (Lu et al.).

run({
  name: "Snake Gourd Root",
  profile: {
    family: "Cucurbitaceae",
    genus: "Trichosanthes",
    species: "kirilowii",
    partsUsed: "The root, dried and powdered (tian hua fen)",
  },
  sources: {
    mudondo: {
      title: "Trichosanthis Radix: A comprehensive review on botany, ethnomedicine, phytochemistry, pharmacology, quality control and toxicology",
      author: "Mudondo J, Happy K, Okello D, Kang Y",
      journal: "Fitoterapia",
      publicationDate: "2025-05-05",
      doi: "10.1016/j.fitote.2025.106597",
      pmid: "40334818",
      url: "https://pubmed.ncbi.nlm.nih.gov/40334818/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lu: {
      title: "A Sixty-Year Research and Development of Trichosanthin, a Ribosome-Inactivating Protein",
      author: "Lu JQ, Wong KB, Shaw PC",
      journal: "Toxins",
      publicationDate: "2022-02-27",
      doi: "10.3390/toxins14030178",
      pmid: "35324675",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8950148/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tian Hua Fen", type: "TRADITIONAL_NAME" },
    { name: "Trichosanthes Root", type: "COMMON_NAME" },
    { name: "Trichosanthis Radix", type: "COMMON_NAME" },
    { name: "Chinese Cucumber Root", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called tian hua fen; first recorded in the 7th century. Used to \"clear heat\", reduce swelling, regulate menstruation and, historically, to cause abortion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Snake gourd root comes from Trichosanthes kirilowii and a close relative. It has been used for centuries in China, Japan, South Korea and other Asian countries for diabetes, cancer, inflammation, and heart and breathing conditions. Pharmacopoeias in several countries list it to \"clear heat\", reduce swelling, \"expel pus\", \"generate fluids\" and regulate menstruation.",
      source: "mudondo",
    },
    {
      category: "TRADITIONAL",
      summary:
        "As tian hua fen, it was first recorded in the 7th century by the physician Sun Simiao. Later texts, including the Compendium of Materia Medica, list it in prescriptions for ending pregnancy, abnormal menstruation and a placenta that won't come out. In the 1960s it was widely used in China to cause abortions, and in 1972 its active protein, trichosanthin, was purified to reduce side effects.",
      source: "lu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In Chinese clinical studies from 1990 to 2000, trichosanthin injections ended pregnancies, including mid-term pregnancies and ectopic pregnancies, with high success rates. Today, medical abortion relies on other drugs that work more often and have fewer side effects.\nAround 1990, a purified form was tested in people with AIDS in the US and UK. Results were inconsistent, and some people had serious side effects.",
      source: "lu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In the lab, trichosanthin blocked HIV from multiplying in immune cells and has shown potential against stomach and bowel cancers. Researchers are modifying it to reduce its side effects.",
      source: "lu",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Snake gourd root contains trichosanthin, which ends pregnancies. It has been used in China to cause abortions.",
      source: "lu",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Reported side effects of tian hua fen include:\n- Flu-like illness with fever, headache, joint pain and sore throat\n- Skin rash and pain where it was injected\n- Bleeding gums and nosebleeds, and heavy bleeding\n- Stomach pain and infection\n- Severe allergic reactions\nOne death was reported in 1969. In AIDS trials of a purified form, a few people had confusion or coma, and one died.",
      source: "lu",
    },
  ],
  symptoms: [
    { slug: "pregnancy-and-childbirth", notes: "Warning: contains trichosanthin, which ends pregnancies; it was used in China to cause abortions." },
    { slug: "high-blood-sugar", notes: "Traditionally used for diabetes in Asian medicine. Not shown in the sources to work in people." },
  ],
});

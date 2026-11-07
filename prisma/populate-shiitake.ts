import { run } from "./lib/populate-herb";

// Shiitake (Lentinula edodes), an edible mushroom. Sources: MSKCC's "Shiitake
// Mushroom" monograph (uses, lentinan, side effects, case reports), a 2015
// randomized dietary trial on immune markers (Dai et al.) and a 2026 review
// for its early history in Japan. Family per GBIF.

run({
  name: "Shiitake",
  profile: {
    family: "Omphalotaceae",
    genus: "Lentinula",
    species: "edodes",
    partsUsed: "The mushroom, fresh or dried, and extracts of the mushroom or its mycelium (root-like threads)",
  },
  sources: {
    mskcc: {
      title: "Shiitake Mushroom",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-02-14",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/shiitake-mushroom",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    dai: {
      title:
        "Consuming Lentinula edodes (Shiitake) Mushrooms Daily Improves Human Immunity: A Randomized Dietary Intervention in Healthy Young Adults",
      author: "Dai X, Stanilka JM, Rowe CA, et al.",
      journal: "Journal of the American College of Nutrition",
      publicationDate: "2015-04-11",
      doi: "10.1080/07315724.2014.950391",
      pmid: "25866155",
      url: "https://doi.org/10.1080/07315724.2014.950391",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sadowska: {
      title: "Medicinal Mushrooms and Their Bioactive Compounds: From Traditional Use to Therapeutic Potential",
      author: "Sadowska A, Włosek-Pawełas D, Car H",
      journal: "Molecules",
      publicationDate: "2026-05-20",
      doi: "10.3390/molecules31101749",
      pmid: "42197308",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13209540/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shiitake Mushroom", type: "COMMON_NAME" },
    { name: "Forest Mushroom", type: "COMMON_NAME" },
    { name: "Hua Gu", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Shiitake is native to East Asia and is widely used fresh or dried in East Asian cooking. It is grown around the world for its supposed health benefits and is valued by some as a cancer remedy.",
      source: "mskcc",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Historical records say that in the 2nd century AD, the Japanese Emperor Chuai was given shiitake as a gift by the Indigenous people of Kyushu.",
      source: "sadowska",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Much of the research is on lentinan, a sugar molecule from shiitake. In lab studies, lentinan did not kill cancer cells directly, but boosted parts of the immune system and killed some viruses and germs. Shiitake compounds also lowered cholesterol in lab and animal studies. Most lentinan studies used injections, so it's not known whether eating shiitake has the same effects.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2015 study, 52 healthy young adults ate 5 or 10 g of dried shiitake every day for 4 weeks. Afterwards, some of their immune cells were more active, they had more of an infection-fighting antibody in their saliva, and a marker of inflammation was lower. There was no group that didn't eat shiitake, and the study measured immune markers, not illness.\n\nTechnical detail: increased γδ-T and NK-T cell proliferation and activation, higher salivary sIgA, lower serum CRP.",
      source: "dai",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small studies of shiitake extracts have had mixed results:\n- A shiitake extract did not work as a treatment for prostate cancer.\n- In people with advanced stomach and bowel cancers, an extract taken by mouth reduced side effects of chemotherapy.\n- Lentinan given with chemotherapy may help some people with cancer live longer, but more studies are needed.\n- A small trial suggested it may help prevent unhealthy cholesterol levels in adults with borderline high cholesterol.\nIt isn't proven to prevent or treat cancer, infections or other illnesses.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Eating shiitake, raw or even cooked, can cause \"shiitake dermatitis\": an itchy rash of red, raised, whip-like streaks on the skin. It has been linked to lentinan. Long-term use of shiitake powder has also caused skin rashes, sensitivity to sunlight and stomach upset.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description:
        "Breathing in shiitake spores has caused an allergic lung reaction. Food allergy to shiitake has also been reported.\n\nTechnical detail: hypersensitivity pneumonitis.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Swallowing a whole shiitake mushroom, or large pieces, has blocked the small intestine in several people, sometimes needing surgery.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Eating shiitake regularly over a long time may raise the number of eosinophils (a type of white blood cell), which can show up on blood tests.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "seasonal-immune-support",
      notes: "Eating shiitake daily changed some immune markers in healthy adults; it hasn't been shown to prevent infections.",
    },
    {
      slug: "high-cholesterol",
      notes: "Lowered cholesterol in lab and animal studies; human evidence is limited to small trials.",
    },
  ],
});

import { run } from "./lib/populate-herb";

// English Ivy (Hedera helix), from the EMA/HMPC public summary (2017) and the
// European Union herbal monograph on ivy leaf (Revision 2). Common name per USDA
// PLANTS; family per GBIF.

run({
  name: "English Ivy",
  profile: { family: "Araliaceae", genus: "Hedera", species: "helix", partsUsed: "The leaves" },
  sources: {
    emaSummary: {
      title: "Ivy leaf (Hedera helix L., folium): herbal medicine summary for the public (EMA/821305/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-11-21",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/ivy-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Hedera helix L., folium, Revision 2 (EMA/HMPC/325716/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-11-21",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-hedera-helix-l-folium-revision-2_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Ivy Leaf", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary: "The European Medicines Agency accepts ivy leaf extracts, based on well-established use, to help loosen mucus in chesty (productive) coughs, so phlegm is easier to bring up. They're for adults and children from age 2, taken by mouth.",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary: "How it works isn't fully known. Lab studies suggest it may widen the airways and help the lungs make thinner, watery mucus.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Don't give ivy leaf medicines to children under 2, because they may make breathing problems worse. Don't use them if you're allergic to ivy or related plants. Use with caution if you have gastritis or a stomach ulcer.",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Nausea, vomiting, diarrhea and allergic reactions such as hives, rash and trouble breathing have been reported. Too much can cause nausea, vomiting, diarrhea and agitation.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description: "See a doctor if the cough lasts more than a week, or if you get a fever, shortness of breath or green or yellow (pus-like) phlegm. A child aged 2 to 4 with a lasting or repeated cough should see a doctor first.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been studied.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Accepted in Europe to help loosen mucus in chesty coughs." },
  ],
});

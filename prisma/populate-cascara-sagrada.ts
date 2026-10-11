import { run } from "./lib/populate-herb";

// Cascara Sagrada (Rhamnus purshiana / Frangula purshiana bark), from the European
// Medicines Agency's EU herbal monograph (Revision 1, 2020) and a 2024 EFSA
// scientific opinion on the safety of hydroxyanthracene-containing preparations.

run({
  name: "Cascara Sagrada",
  profile: {
    family: "Rhamnaceae",
    genus: "Rhamnus",
    species: "purshiana",
    partsUsed: "The dried bark",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Rhamnus purshiana DC., cortex, Final – Revision 1 (EMA/HMPC/726270/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2020-05-06",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rhamnus-purshiana-dc-cortex-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    efsa: {
      title: "Scientific Opinion on additional scientific data related to the safety of preparations of Rheum palmatum L., Rheum officinale Baill. and their hybrids, Rhamnus purshiana DC., Rhamnus frangula L. and Cassia senna L.",
      organization: "European Food Safety Authority, Panel on Nutrition, Novel Foods and Food Allergens (NDA)",
      publicationDate: "2024-05-23",
      doi: "10.2903/j.efsa.2024.8766",
      pmid: "38784839",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11112454/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Cascara", type: "COMMON_NAME" },
    { name: "Cascara Safrada", type: "COMMON_NAME" },
    { name: "Cascara Bark", type: "COMMON_NAME" },
    { name: "Frangula purshiana", type: "SCIENTIFIC_SYNONYM" },
    { name: "Rhamni purshianae cortex", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency accepts cascara bark as an established medicine for short-term use for occasional constipation. It's a stimulant laxative: bacteria in the large intestine turn its compounds into active forms that make the bowel move and draw water into the stool.\n- Taken once a day at night, at the smallest dose that gives a soft stool\n- Not to be used for more than 1 week, and usually only 2 or 3 times in that week\n- If symptoms continue, see a doctor or pharmacist\n\nTechnical detail: dose equivalent to 10–30 mg hydroxyanthracene derivatives (as cascaroside A) once daily; for adolescents over 12, adults and the elderly.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use cascara if you have:\n- A blocked or narrowed bowel, or a bowel that doesn't move (atony)\n- Appendicitis\n- Inflammatory bowel disease such as Crohn's disease or ulcerative colitis\n- Stomach pain without a known cause\n- Severe dehydration\nIt's not for children under 12.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Don't use cascara during pregnancy, because some of its compounds (such as emodin and aloe-emodin) may damage DNA in lab studies. Don't use it while breastfeeding, because related compounds pass into breast milk.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Cascara can cause stomach cramps and watery stools, especially in people with irritable bowel, and allergic reactions such as itching, hives or rash. Using it for a long time can:\n- Make the bowel work less well and lead to dependence on laxatives\n- Cause loss of water and salts, and protein or blood in the urine\n- Darken the lining of the bowel (this usually fades after stopping)\nIt can turn urine yellow or red-brown, which is harmless. Long-term overdose of this kind of laxative can cause liver inflammation (toxic hepatitis).",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Long-term use can lower potassium, which can increase the effect of heart medicines such as cardiac glycosides (for example digoxin) and interact with heart-rhythm medicines. Water pills (medicines that increase urination), corticosteroids and liquorice root can add to the loss of potassium.",
      source: "ema",
    },
    {
      category: "TOXICITY",
      description: "In 2024, the European Food Safety Authority said it couldn't establish the safety of cascara bark preparations in foods and supplements. The preparations tested contained compounds known or suspected to damage DNA.",
      source: "efsa",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Accepted by the European Medicines Agency for short-term use in occasional constipation; not for more than 1 week." },
  ],
});

import { prisma } from "@/lib/prisma";
import type { PickerHerb } from "@/components/marketplace/herb-picker";

/** Every herb in the library, for the herb picker. */
export async function herbOptions(): Promise<PickerHerb[]> {
  const herbs = await prisma.herb.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true, scientificName: true, restriction: { select: { id: true } } },
  });
  return herbs.map((h) => ({ id: h.id, name: h.name, scientificName: h.scientificName, restricted: Boolean(h.restriction) }));
}

import { prisma } from "../lib/prisma.js";

export async function getPricingArchive() {
  const looks = await prisma.look.findMany({
    orderBy: { displayOrder: "asc" },
    include: {
      garments: {
        orderBy: { displayOrder: "asc" },
        include: { costing: true },
      },
    },
  });

  return looks;
}

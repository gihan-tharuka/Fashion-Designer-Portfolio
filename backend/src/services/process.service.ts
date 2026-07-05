import { prisma } from "../lib/prisma.js";

export async function getProcessItems() {
  return prisma.processItem.findMany({
    orderBy: { displayOrder: "asc" },
  });
}

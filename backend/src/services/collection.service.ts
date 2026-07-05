import { prisma } from "../lib/prisma.js";
import { HttpError } from "../lib/errors.js";

export async function getCollectionBySlug(slug: string) {
  const collection = await prisma.collection.findUnique({
    where: { slug },
    include: {
      looks: {
        orderBy: { displayOrder: "asc" },
        include: {
          images: { orderBy: { displayOrder: "asc" } },
          tags: { orderBy: { displayOrder: "asc" } },
        },
      },
    },
  });

  if (!collection) {
    throw new HttpError(404, "Collection not found");
  }

  return collection;
}

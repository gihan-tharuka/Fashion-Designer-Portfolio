import { prisma } from "../lib/prisma.js";
import { HttpError } from "../lib/errors.js";

export async function getLooks() {
  return prisma.look.findMany({
    orderBy: { displayOrder: "asc" },
    include: {
      images: { orderBy: { displayOrder: "asc" } },
      tags: { orderBy: { displayOrder: "asc" } },
    },
  });
}

export async function getLookBySlug(slug: string) {
  const look = await prisma.look.findUnique({
    where: { slug },
    include: {
      images: { orderBy: { displayOrder: "asc" } },
      materials: { orderBy: { displayOrder: "asc" } },
      tags: { orderBy: { displayOrder: "asc" } },
      garments: {
        orderBy: { displayOrder: "asc" },
        include: { costing: true },
      },
      collection: true,
    },
  });

  if (!look) {
    throw new HttpError(404, "Look not found");
  }

  const siblings = await prisma.look.findMany({
    where: { collectionId: look.collectionId },
    orderBy: { displayOrder: "asc" },
    select: {
      slug: true,
      name: true,
      number: true,
      displayOrder: true,
    },
  });

  const index = siblings.findIndex((item) => item.slug === slug);

  return {
    look,
    previous: index > 0 ? siblings[index - 1] : null,
    next: index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null,
  };
}

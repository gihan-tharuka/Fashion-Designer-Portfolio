import { LookImageType, Prisma } from "@prisma/client";
import { HttpError } from "../lib/errors.js";
import { prisma } from "../lib/prisma.js";

export type AdminLookImageInput = {
  type: LookImageType;
  url: string;
  alt: string;
  caption?: string | null;
  displayOrder?: number;
};

export type AdminLookTagInput = {
  label: string;
  displayOrder?: number;
};

export type AdminLookMaterialInput = {
  label: string;
  value: string;
  displayOrder?: number;
};

export type AdminLookCreateInput = {
  number: string;
  slug: string;
  name: string;
  subtitle?: string | null;
  description: string;
  concept?: string | null;
  designDevelopment?: string | null;
  problemsAndImprovements?: string | null;
  outcomeAndReflection?: string | null;
  displayOrder: number;
  isFeatured?: boolean;
  images?: AdminLookImageInput[];
  tags?: AdminLookTagInput[];
  materials?: AdminLookMaterialInput[];
};

export type AdminLookUpdateInput = Partial<AdminLookCreateInput>;

const adminLookListInclude = {
  collection: {
    select: {
      id: true,
      slug: true,
      name: true,
      season: true,
    },
  },
  images: { orderBy: { displayOrder: "asc" as const } },
  tags: { orderBy: { displayOrder: "asc" as const } },
  materials: { orderBy: { displayOrder: "asc" as const } },
  _count: {
    select: {
      garments: true,
    },
  },
} satisfies Prisma.LookInclude;

const adminLookDetailInclude = {
  collection: true,
  images: { orderBy: { displayOrder: "asc" as const } },
  tags: { orderBy: { displayOrder: "asc" as const } },
  materials: { orderBy: { displayOrder: "asc" as const } },
  garments: {
    orderBy: { displayOrder: "asc" as const },
    include: { costing: true },
  },
} satisfies Prisma.LookInclude;

function normalizeOptionalText(value?: string | null) {
  if (typeof value !== "string") {
    return value ?? null;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

async function getPrimaryCollectionId() {
  const collection = await prisma.collection.findFirst({
    where: { slug: "lumene" },
    select: { id: true },
  });

  if (collection) {
    return collection.id;
  }

  const fallback = await prisma.collection.findFirst({
    orderBy: { displayOrder: "asc" },
    select: { id: true },
  });

  if (!fallback) {
    throw new HttpError(500, "No collection available for look creation");
  }

  return fallback.id;
}

async function assertUniqueLookFields(
  input: Pick<AdminLookCreateInput, "slug" | "number">,
  options?: { lookId?: string; collectionId?: string },
) {
  const collectionId = options?.collectionId ?? (await getPrimaryCollectionId());

  const [slugMatch, numberMatch] = await Promise.all([
    prisma.look.findFirst({
      where: {
        slug: input.slug,
        ...(options?.lookId ? { NOT: { id: options.lookId } } : {}),
      },
      select: { id: true },
    }),
    prisma.look.findFirst({
      where: {
        collectionId,
        number: input.number,
        ...(options?.lookId ? { NOT: { id: options.lookId } } : {}),
      },
      select: { id: true },
    }),
  ]);

  if (slugMatch) {
    throw new HttpError(409, "Look slug already exists");
  }

  if (numberMatch) {
    throw new HttpError(409, "Look number already exists in this collection");
  }
}

function mapImageCreateMany(images?: AdminLookImageInput[]) {
  return images?.map((image, index) => ({
    type: image.type,
    url: image.url.trim(),
    alt: image.alt.trim(),
    caption: normalizeOptionalText(image.caption),
    displayOrder: image.displayOrder ?? index + 1,
  }));
}

function mapTagCreateMany(tags?: AdminLookTagInput[]) {
  return tags?.map((tag, index) => ({
    label: tag.label.trim(),
    displayOrder: tag.displayOrder ?? index + 1,
  }));
}

function mapMaterialCreateMany(materials?: AdminLookMaterialInput[]) {
  return materials?.map((material, index) => ({
    label: material.label.trim(),
    value: material.value.trim(),
    displayOrder: material.displayOrder ?? index + 1,
  }));
}

export async function getAdminLooks() {
  return prisma.look.findMany({
    orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    include: adminLookListInclude,
  });
}

export async function getAdminLookById(id: string) {
  const look = await prisma.look.findUnique({
    where: { id },
    include: adminLookDetailInclude,
  });

  if (!look) {
    throw new HttpError(404, "Look not found");
  }

  return look;
}

export async function createAdminLook(input: AdminLookCreateInput) {
  const collectionId = await getPrimaryCollectionId();
  await assertUniqueLookFields(input, { collectionId });

  return prisma.look.create({
    data: {
      collectionId,
      number: input.number.trim(),
      slug: input.slug.trim(),
      name: input.name.trim(),
      subtitle: normalizeOptionalText(input.subtitle),
      description: input.description.trim(),
      concept: normalizeOptionalText(input.concept),
      designDevelopment: normalizeOptionalText(input.designDevelopment),
      problemsAndImprovements: normalizeOptionalText(input.problemsAndImprovements),
      outcomeAndReflection: normalizeOptionalText(input.outcomeAndReflection),
      displayOrder: input.displayOrder,
      isFeatured: input.isFeatured ?? false,
      images: input.images?.length
        ? { create: mapImageCreateMany(input.images) }
        : undefined,
      tags: input.tags?.length ? { create: mapTagCreateMany(input.tags) } : undefined,
      materials: input.materials?.length
        ? { create: mapMaterialCreateMany(input.materials) }
        : undefined,
    },
    include: adminLookDetailInclude,
  });
}

export async function updateAdminLook(id: string, input: AdminLookUpdateInput) {
  const existing = await prisma.look.findUnique({
    where: { id },
    select: {
      id: true,
      collectionId: true,
      slug: true,
      number: true,
    },
  });

  if (!existing) {
    throw new HttpError(404, "Look not found");
  }

  const nextSlug = input.slug?.trim() ?? existing.slug;
  const nextNumber = input.number?.trim() ?? existing.number;

  if (nextSlug !== existing.slug || nextNumber !== existing.number) {
    await assertUniqueLookFields(
      {
        slug: nextSlug,
        number: nextNumber,
      },
      { lookId: id, collectionId: existing.collectionId },
    );
  }

  return prisma.$transaction(async (tx) => {
    if (input.images) {
      await tx.lookImage.deleteMany({ where: { lookId: id } });
    }

    if (input.tags) {
      await tx.lookTag.deleteMany({ where: { lookId: id } });
    }

    if (input.materials) {
      await tx.lookMaterial.deleteMany({ where: { lookId: id } });
    }

    await tx.look.update({
      where: { id },
      data: {
        number: input.number?.trim(),
        slug: input.slug?.trim(),
        name: input.name?.trim(),
        subtitle:
          input.subtitle !== undefined
            ? normalizeOptionalText(input.subtitle)
            : undefined,
        description: input.description?.trim(),
        concept:
          input.concept !== undefined
            ? normalizeOptionalText(input.concept)
            : undefined,
        designDevelopment:
          input.designDevelopment !== undefined
            ? normalizeOptionalText(input.designDevelopment)
            : undefined,
        problemsAndImprovements:
          input.problemsAndImprovements !== undefined
            ? normalizeOptionalText(input.problemsAndImprovements)
            : undefined,
        outcomeAndReflection:
          input.outcomeAndReflection !== undefined
            ? normalizeOptionalText(input.outcomeAndReflection)
            : undefined,
        displayOrder: input.displayOrder,
        isFeatured: input.isFeatured,
        images: input.images?.length
          ? { create: mapImageCreateMany(input.images) }
          : input.images
            ? undefined
            : undefined,
        tags: input.tags?.length
          ? { create: mapTagCreateMany(input.tags) }
          : input.tags
            ? undefined
            : undefined,
        materials: input.materials?.length
          ? { create: mapMaterialCreateMany(input.materials) }
          : input.materials
            ? undefined
            : undefined,
      },
    });

    return tx.look.findUnique({
      where: { id },
      include: adminLookDetailInclude,
    });
  });
}

export async function deleteAdminLook(id: string) {
  const look = await prisma.look.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          garments: true,
        },
      },
    },
  });

  if (!look) {
    throw new HttpError(404, "Look not found");
  }

  if (look._count.garments > 0) {
    throw new HttpError(
      409,
      "This look has garments attached and cannot be deleted in Phase 4",
    );
  }

  await prisma.look.delete({ where: { id } });

  return {
    id: look.id,
    name: look.name,
    deleted: true,
  };
}

import { PriceStatus, PrismaClient, SkillType } from "@prisma/client";
import { looks } from "../../frontend/lib/looks.ts";
import { lookPricing } from "../../frontend/lib/pricing.ts";
import {
  brandStatement,
  collectionSeed,
  designValues,
  designerProfileSeed,
  processItemsSeed,
  siteSettingsSeed,
} from "../src/config/seed-data.ts";

const prisma = new PrismaClient();

type PriceValue = number | "To be finalised" | "Price on request";

function toPriceStatus(value: PriceValue): PriceStatus {
  if (value === "To be finalised") {
    return "TO_BE_FINALISED";
  }

  if (value === "Price on request") {
    return "PRICE_ON_REQUEST";
  }

  return "CONFIRMED";
}

function toDecimal(value: PriceValue) {
  return typeof value === "number" ? value : null;
}

function toMarginStatus(value: string): PriceStatus {
  if (value === "To be finalised") {
    return "TO_BE_FINALISED";
  }

  if (value === "Price on request") {
    return "PRICE_ON_REQUEST";
  }

  return "CONFIRMED";
}

function toMarginDecimal(value: string) {
  if (value.endsWith("%")) {
    return Number(value.replace("%", ""));
  }

  return null;
}

async function main() {
  await prisma.enquiry.deleteMany();
  await prisma.garmentCosting.deleteMany();
  await prisma.garment.deleteMany();
  await prisma.lookImage.deleteMany();
  await prisma.lookMaterial.deleteMany();
  await prisma.lookTag.deleteMany();
  await prisma.look.deleteMany();
  await prisma.processItem.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.designerProfile.deleteMany();
  await prisma.siteSetting.deleteMany();
  await prisma.collection.deleteMany();

  const collection = await prisma.collection.create({
    data: {
      ...collectionSeed,
      looks: {
        create: looks.map((look, lookIndex) => {
          const pricing = lookPricing.find((item) => item.lookSlug === look.slug);

          return {
            number: look.number,
            slug: look.slug,
            name: look.name,
            subtitle: look.subtitle,
            description: look.description,
            concept: look.concept,
            designDevelopment: look.designDevelopment,
            problemsAndImprovements: look.problemsAndImprovements,
            outcomeAndReflection: look.outcomeAndReflection,
            displayOrder: lookIndex + 1,
            isFeatured: true,
            images: {
              create: [
                look.image
                  ? {
                      type: "DEVELOPMENT",
                      url: look.image,
                      alt: `Look ${look.number} ${look.name} design development image`,
                      caption: "Design Development",
                      displayOrder: 1,
                    }
                  : null,
                look.modelImage
                  ? {
                      type: "MODEL",
                      url: look.modelImage,
                      alt: `Look ${look.number} ${look.name} model presentation image`,
                      caption: "Model View",
                      displayOrder: 2,
                    }
                  : null,
                look.finalImage
                  ? {
                      type: "FINAL_VIEWS",
                      url: look.finalImage,
                      alt: `Look ${look.number} ${look.name} front side back garment views`,
                      caption: "Final Garment Views",
                      displayOrder: 3,
                    }
                  : null,
              ].filter(Boolean) as {
                type: "DEVELOPMENT" | "MODEL" | "FINAL_VIEWS";
                url: string;
                alt: string;
                caption: string;
                displayOrder: number;
              }[],
            },
            materials: {
              create:
                look.materials?.map(([label, value], materialIndex) => ({
                  label,
                  value,
                  displayOrder: materialIndex + 1,
                })) ?? [],
            },
            tags: {
              create: look.tags.map((tag, tagIndex) => ({
                label: tag,
                displayOrder: tagIndex + 1,
              })),
            },
            garments: {
              create:
                pricing?.garments.map((garment, garmentIndex) => ({
                  name: garment.garmentName,
                  fabric: garment.fabric,
                  displayOrder: garmentIndex + 1,
                  costing: {
                    create: {
                      fabricUsage: garment.fabricUsage,
                      fabricPricePerYard: toDecimal(garment.fabricPricePerYard),
                      fabricPricePerYardStatus: toPriceStatus(
                        garment.fabricPricePerYard,
                      ),
                      fabricCost: toDecimal(garment.fabricCost),
                      fabricCostStatus: toPriceStatus(garment.fabricCost),
                      batikOrDyeCost: toDecimal(garment.batikOrDyeCost),
                      sewingCost: toDecimal(garment.sewingCost),
                      trimsCost: toDecimal(garment.trimsCost),
                      finishingCost: toDecimal(garment.finishingCost),
                      totalProductionCost: toDecimal(garment.totalProductionCost),
                      totalProductionCostStatus: toPriceStatus(
                        garment.totalProductionCost,
                      ),
                      profitMarginPercent: toMarginDecimal(garment.profitMargin),
                      profitMarginStatus: toMarginStatus(garment.profitMargin),
                      finalSellingPrice: toDecimal(garment.finalSellingPrice),
                      finalSellingPriceStatus: toPriceStatus(
                        garment.finalSellingPrice,
                      ),
                      notes: pricing.note ?? null,
                    },
                  },
                })) ?? [],
            },
          };
        }),
      },
      processItems: {
        create: [
          ...processItemsSeed.map((item, index) => ({
            ...item,
            displayOrder: index + 1,
          })),
          ...designValues.map((value, index) => ({
            number: null,
            title: value.title,
            description: value.text,
            imageUrl: null,
            imageAlt: null,
            category: "Design Identity",
            displayOrder: processItemsSeed.length + index + 1,
          })),
          {
            number: null,
            title: "Brand Statement",
            description: brandStatement.paragraphs.join("\n\n"),
            imageUrl: collectionSeed.brandImageUrl,
            imageAlt: "Brand statement visual for LUMENÉ.",
            category: "Brand Statement",
            displayOrder: processItemsSeed.length + designValues.length + 1,
          },
        ],
      },
    },
  });

  const designerProfile = await prisma.designerProfile.create({
    data: {
      name: designerProfileSeed.name,
      title: designerProfileSeed.title,
      bio: designerProfileSeed.bio,
      portraitUrl: designerProfileSeed.portraitUrl,
      quote: designerProfileSeed.quote,
      email: designerProfileSeed.email,
      phone: designerProfileSeed.phone,
      linkedinUrl: designerProfileSeed.linkedinUrl,
      location: designerProfileSeed.location,
      portfolioPdfUrl: designerProfileSeed.portfolioPdfUrl,
      skills: {
        create: [
          ...designerProfileSeed.skills.map((label, index) => ({
            label,
            type: SkillType.SKILL,
            displayOrder: index + 1,
          })),
          ...designerProfileSeed.creativeInterests.map((label, index) => ({
            label,
            type: SkillType.CREATIVE_INTEREST,
            displayOrder: index + 1,
          })),
        ],
      },
    },
  });

  await prisma.siteSetting.create({
    data: {
      ...siteSettingsSeed,
    },
  });

  console.log(
    `Seeded ${collection.name} with ${looks.length} looks and designer profile ${designerProfile.name}.`,
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

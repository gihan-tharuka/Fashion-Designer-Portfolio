import type {
  BackendCollectionResponse,
  BackendGarment,
  BackendLook,
  BackendLookDetail,
  BackendLookNavItem,
  BackendPriceStatus,
  BackendPricingLook,
  BackendProcessItem,
  BackendSiteSettingsResponse,
} from "@/lib/backend-types";
import type { Look } from "@/lib/looks";
import type { LookPricing, PriceValue } from "@/lib/pricing";

type ContactDetail = {
  label: string;
  value: string;
  href: string | null;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type ProcessArchiveImage = {
  src: string;
  label: string;
};

function getLookImage(look: Pick<BackendLook, "images">, type: string) {
  return look.images.find((image) => image.type === type)?.url;
}

function toPriceValue(
  value: string | null,
  status: BackendPriceStatus,
): PriceValue {
  if (status === "TO_BE_FINALISED") {
    return "To be finalised";
  }

  if (status === "PRICE_ON_REQUEST") {
    return "Price on request";
  }

  if (value == null) {
    return "Price on request";
  }

  return Number(value);
}

function toProfitMargin(value: string | null, status: BackendPriceStatus) {
  if (status === "TO_BE_FINALISED") {
    return "To be finalised";
  }

  if (status === "PRICE_ON_REQUEST") {
    return "Price on request";
  }

  return value ? `${Number(value)}%` : "Price on request";
}

function mapGarmentsToPricing(garments: BackendGarment[]) {
  return garments.map((garment) => ({
    garmentName: garment.name,
    fabric: garment.fabric,
    fabricUsage: garment.costing?.fabricUsage ?? "To be finalised",
    fabricPricePerYard: toPriceValue(
      garment.costing?.fabricPricePerYard ?? null,
      garment.costing?.fabricPricePerYardStatus ?? "PRICE_ON_REQUEST",
    ),
    fabricCost: toPriceValue(
      garment.costing?.fabricCost ?? null,
      garment.costing?.fabricCostStatus ?? "PRICE_ON_REQUEST",
    ),
    batikOrDyeCost: toPriceValue(
      garment.costing?.batikOrDyeCost ?? null,
      garment.costing?.batikOrDyeCost == null
        ? "PRICE_ON_REQUEST"
        : "CONFIRMED",
    ),
    sewingCost: toPriceValue(
      garment.costing?.sewingCost ?? null,
      garment.costing?.sewingCost == null ? "PRICE_ON_REQUEST" : "CONFIRMED",
    ),
    trimsCost: toPriceValue(
      garment.costing?.trimsCost ?? null,
      garment.costing?.trimsCost == null ? "PRICE_ON_REQUEST" : "CONFIRMED",
    ),
    finishingCost: toPriceValue(
      garment.costing?.finishingCost ?? null,
      garment.costing?.finishingCost == null
        ? "PRICE_ON_REQUEST"
        : "CONFIRMED",
    ),
    totalProductionCost: toPriceValue(
      garment.costing?.totalProductionCost ?? null,
      garment.costing?.totalProductionCostStatus ?? "PRICE_ON_REQUEST",
    ),
    profitMargin: toProfitMargin(
      garment.costing?.profitMarginPercent ?? null,
      garment.costing?.profitMarginStatus ?? "PRICE_ON_REQUEST",
    ),
    finalSellingPrice: toPriceValue(
      garment.costing?.finalSellingPrice ?? null,
      garment.costing?.finalSellingPriceStatus ?? "PRICE_ON_REQUEST",
    ),
  }));
}

export function mapBackendLookToLook(look: BackendLook | BackendLookDetail): Look {
  return {
    number: look.number,
    slug: look.slug,
    name: look.name,
    description: look.description,
    subtitle: look.subtitle ?? undefined,
    tags: look.tags.map((tag) => tag.label),
    concept: "concept" in look ? look.concept ?? undefined : undefined,
    designDevelopment:
      "designDevelopment" in look
        ? look.designDevelopment ?? undefined
        : undefined,
    problemsAndImprovements:
      "problemsAndImprovements" in look
        ? look.problemsAndImprovements ?? undefined
        : undefined,
    outcomeAndReflection:
      "outcomeAndReflection" in look
        ? look.outcomeAndReflection ?? undefined
        : undefined,
    materials:
      "materials" in look
        ? look.materials.map((material) => [material.label, material.value])
        : undefined,
    image: getLookImage(look, "DEVELOPMENT"),
    modelImage: getLookImage(look, "MODEL"),
    finalImage: getLookImage(look, "FINAL_VIEWS"),
  };
}

export function mapBackendLooksToLooks(looks: BackendLook[]) {
  return looks.map(mapBackendLookToLook);
}

export function mapBackendPricingToLookPricing(
  looks: BackendPricingLook[],
): LookPricing[] {
  return looks.map((look) => ({
    lookNumber: look.number,
    lookSlug: look.slug,
    lookName: look.name,
    note:
      look.garments.find((garment) => garment.costing?.notes)?.costing?.notes ??
      undefined,
    garments: mapGarmentsToPricing(look.garments),
  }));
}

export function mapBackendLookNavItemToLook(item: BackendLookNavItem): Look {
  return {
    number: item.number,
    slug: item.slug,
    name: item.name,
    description: "",
    tags: [],
  };
}

export function mapBackendProcessItemsToSteps(
  items: BackendProcessItem[],
): ProcessStep[] {
  return items
    .filter((item) => item.number)
    .slice(0, 8)
    .map((item) => ({
      number: item.number ?? "",
      title: item.title,
      text: item.description,
    }));
}

export function mapBackendProcessItemsToArchiveImages(
  items: BackendProcessItem[],
): ProcessArchiveImage[] {
  const preferredTitles = [
    "Research and Concept",
    "Mood Board Development",
    "Textile Experiments",
    "Design Refinement",
  ];

  const preferredItems = preferredTitles
    .map((title) => items.find((item) => item.title === title && item.imageUrl))
    .filter((item): item is BackendProcessItem => Boolean(item));

  const archiveItems = preferredItems.length === preferredTitles.length
    ? preferredItems
    : items.filter((item) => item.imageUrl).slice(0, 4);

  return archiveItems.map((item) => ({
    src: item.imageUrl ?? "",
    label: item.title,
  }));
}

export function mapBackendSiteSettingsToContactDetails(
  data: BackendSiteSettingsResponse,
): ContactDetail[] {
  const email = data.siteSettings.contactEmail;
  const phone = data.siteSettings.contactPhone;
  const linkedin = data.siteSettings.linkedinUrl;
  const location = data.siteSettings.location;

  return [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    ...(phone
      ? [
          {
            label: "Phone",
            value: phone,
            href: `tel:${phone.replace(/\s+/g, "")}`,
          },
        ]
      : []),
    ...(linkedin
      ? [
          {
            label: "LinkedIn",
            value: linkedin.replace(/^https?:\/\//, ""),
            href: linkedin,
          },
        ]
      : []),
    ...(location
      ? [
          {
            label: "Location",
            value: location,
            href: null,
          },
        ]
      : []),
  ];
}

export function mapBackendSiteSettingsToContactCtas(
  data: BackendSiteSettingsResponse,
) {
  return {
    emailHref: `mailto:${data.siteSettings.contactEmail}`,
    linkedinHref:
      data.siteSettings.linkedinUrl ??
      data.designerProfile?.linkedinUrl ??
      "https://www.linkedin.com/",
    portfolioPdfHref:
      data.siteSettings.portfolioPdfUrl ??
      data.designerProfile?.portfolioPdfUrl ??
      "/docs/portfolio.pdf",
  };
}

export function mapBackendCollectionSummary(
  collection: BackendCollectionResponse,
) {
  return {
    title: `${collection.name} Capsule Collection ${collection.season}`,
    description: collection.description,
    imageUrl: collection.lineupImageUrl ?? "/images/website/lineup.jpg",
    facts: [
      `${collection.looks.length} Looks`,
      "Draped Silhouettes",
      "Batik-Inspired Surfaces",
      "Emotional Transformation",
    ],
  };
}

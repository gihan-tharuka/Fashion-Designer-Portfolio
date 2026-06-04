export type PriceValue = number | "To be finalised" | "Price on request";

export type GarmentPricing = {
  garmentName: string;
  fabric: string;
  fabricUsage: string;
  fabricPricePerYard: PriceValue;
  fabricCost: PriceValue;
  batikOrDyeCost: PriceValue;
  sewingCost: PriceValue;
  trimsCost: PriceValue;
  finishingCost: PriceValue;
  totalProductionCost: PriceValue;
  profitMargin: string;
  finalSellingPrice: PriceValue;
};

export type LookPricing = {
  lookNumber: string;
  lookSlug: string;
  lookName: string;
  note?: string;
  garments: GarmentPricing[];
};

export const pricingCurrency = "LKR";

export const lookPricing: LookPricing[] = [
  {
    lookNumber: "01",
    lookSlug: "look-01",
    lookName: "The Cocooned Self",
    garments: [
      {
        garmentName: "Draped cocoon jacket",
        fabric: "Brown-toned batik-inspired textile",
        fabricUsage: "3.5 yd",
        fabricPricePerYard: 2800,
        fabricCost: 9800,
        batikOrDyeCost: 6500,
        sewingCost: 18000,
        trimsCost: 2500,
        finishingCost: 4200,
        totalProductionCost: 41000,
        profitMargin: "55%",
        finalSellingPrice: 63550,
      },
      {
        garmentName: "Wide-leg trouser",
        fabric: "Structured warm brown fabric",
        fabricUsage: "2.25 yd",
        fabricPricePerYard: 2400,
        fabricCost: 5400,
        batikOrDyeCost: 2500,
        sewingCost: 9500,
        trimsCost: 1800,
        finishingCost: 2200,
        totalProductionCost: 21400,
        profitMargin: "50%",
        finalSellingPrice: 32100,
      },
    ],
  },
  {
    lookNumber: "02",
    lookSlug: "look-02",
    lookName: "Wrapped in Shadow",
    garments: [
      {
        garmentName: "Draped hooded jacket",
        fabric: "Printed dark blue textile",
        fabricUsage: "To be finalised",
        fabricPricePerYard: "To be finalised",
        fabricCost: "To be finalised",
        batikOrDyeCost: 7200,
        sewingCost: 18500,
        trimsCost: 3200,
        finishingCost: 4800,
        totalProductionCost: "To be finalised",
        profitMargin: "Price on request",
        finalSellingPrice: "Price on request",
      },
      {
        garmentName: "Wrapped orange skirt",
        fabric: "Textured orange fabric",
        fabricUsage: "2 yd",
        fabricPricePerYard: 2600,
        fabricCost: 5200,
        batikOrDyeCost: 1800,
        sewingCost: 9800,
        trimsCost: 1600,
        finishingCost: 2400,
        totalProductionCost: 20800,
        profitMargin: "50%",
        finalSellingPrice: 31200,
      },
      {
        garmentName: "Detachable leg cuffs",
        fabric: "Structured cuff material",
        fabricUsage: "1 yd",
        fabricPricePerYard: 2200,
        fabricCost: 2200,
        batikOrDyeCost: 1200,
        sewingCost: 5200,
        trimsCost: 1500,
        finishingCost: 1400,
        totalProductionCost: 11500,
        profitMargin: "45%",
        finalSellingPrice: 16675,
      },
    ],
  },
  {
    lookNumber: "03",
    lookSlug: "look-03",
    lookName: "Soft Emergence",
    garments: [
      {
        garmentName: "Structured cropped jacket",
        fabric: "Warm copper/brown textured fabric",
        fabricUsage: "1.75 yd",
        fabricPricePerYard: 3000,
        fabricCost: 5250,
        batikOrDyeCost: 2800,
        sewingCost: 14500,
        trimsCost: 2400,
        finishingCost: 3500,
        totalProductionCost: 28450,
        profitMargin: "55%",
        finalSellingPrice: 44098,
      },
      {
        garmentName: "Printed high-neck inner top",
        fabric: "Printed textile surface fabric",
        fabricUsage: "1.25 yd",
        fabricPricePerYard: 2400,
        fabricCost: 3000,
        batikOrDyeCost: 3200,
        sewingCost: 6500,
        trimsCost: 900,
        finishingCost: 1600,
        totalProductionCost: 15200,
        profitMargin: "45%",
        finalSellingPrice: 22040,
      },
      {
        garmentName: "Blush chrysalis skirt and tulle collar",
        fabric: "Soft blush fabric with lightweight sheer tulle",
        fabricUsage: "4 yd",
        fabricPricePerYard: "To be finalised",
        fabricCost: "To be finalised",
        batikOrDyeCost: 1800,
        sewingCost: 16000,
        trimsCost: 1800,
        finishingCost: 3600,
        totalProductionCost: "To be finalised",
        profitMargin: "Price on request",
        finalSellingPrice: "Price on request",
      },
    ],
  },
  {
    lookNumber: "04",
    lookSlug: "look-04",
    lookName: "Winged Resolve",
    garments: [
      {
        garmentName: "Hooded structured upper garment",
        fabric: "Textured orange and soft underlayer fabrics",
        fabricUsage: "2.5 yd",
        fabricPricePerYard: 2750,
        fabricCost: 6875,
        batikOrDyeCost: 2200,
        sewingCost: 16500,
        trimsCost: 2600,
        finishingCost: 3900,
        totalProductionCost: 32075,
        profitMargin: "55%",
        finalSellingPrice: 49716,
      },
      {
        garmentName: "Printed flared lower garment",
        fabric: "Printed batik-inspired fabric",
        fabricUsage: "3 yd",
        fabricPricePerYard: 2500,
        fabricCost: 7500,
        batikOrDyeCost: 5200,
        sewingCost: 12500,
        trimsCost: 1600,
        finishingCost: 2800,
        totalProductionCost: 29600,
        profitMargin: "50%",
        finalSellingPrice: 44400,
      },
      {
        garmentName: "Butterfly-inspired back panel",
        fabric: "Structured panel fabric",
        fabricUsage: "To be finalised",
        fabricPricePerYard: "To be finalised",
        fabricCost: "To be finalised",
        batikOrDyeCost: 1800,
        sewingCost: 8500,
        trimsCost: 2400,
        finishingCost: 2200,
        totalProductionCost: "To be finalised",
        profitMargin: "Price on request",
        finalSellingPrice: "Price on request",
      },
    ],
  },
  {
    lookNumber: "05",
    lookSlug: "look-05",
    lookName: "Unfolded Path",
    garments: [
      {
        garmentName: "Printed tie-front dress layer",
        fabric: "Lightweight printed draped fabric",
        fabricUsage: "3.25 yd",
        fabricPricePerYard: 2300,
        fabricCost: 7475,
        batikOrDyeCost: 5600,
        sewingCost: 13800,
        trimsCost: 1400,
        finishingCost: 2800,
        totalProductionCost: 31075,
        profitMargin: "50%",
        finalSellingPrice: 46613,
      },
      {
        garmentName: "Orange barrel trousers",
        fabric: "Linen or structured trouser fabric",
        fabricUsage: "2.75 yd",
        fabricPricePerYard: 2700,
        fabricCost: 7425,
        batikOrDyeCost: 1200,
        sewingCost: 13500,
        trimsCost: 2100,
        finishingCost: 2600,
        totalProductionCost: 26825,
        profitMargin: "50%",
        finalSellingPrice: 40238,
      },
    ],
  },
  {
    lookNumber: "06",
    lookSlug: "look-06",
    lookName: "Final Release",
    note: "Final runway pricing to be confirmed after train finish and internal support refinement.",
    garments: [
      {
        garmentName: "One-shoulder draped dress",
        fabric: "Lightweight printed fabric with fluid fall",
        fabricUsage: "5 yd",
        fabricPricePerYard: "To be finalised",
        fabricCost: "To be finalised",
        batikOrDyeCost: 7800,
        sewingCost: 21000,
        trimsCost: 2200,
        finishingCost: 5200,
        totalProductionCost: "To be finalised",
        profitMargin: "Price on request",
        finalSellingPrice: "Price on request",
      },
    ],
  },
];

export function isNumericPrice(value: PriceValue): value is number {
  return typeof value === "number";
}

export function formatPrice(value: PriceValue) {
  if (!isNumericPrice(value)) {
    return value;
  }

  return `${pricingCurrency} ${new Intl.NumberFormat("en-LK", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

export function sumPriceValues(values: PriceValue[]): PriceValue {
  if (values.some((value) => !isNumericPrice(value))) {
    return "Price on request";
  }

  return values.reduce<number>(
    (total, value) => total + (isNumericPrice(value) ? value : 0),
    0,
  );
}

export function getLookProductionCost(look: LookPricing) {
  return sumPriceValues(look.garments.map((garment) => garment.totalProductionCost));
}

export function getLookFinalSellingPrice(look: LookPricing) {
  return sumPriceValues(look.garments.map((garment) => garment.finalSellingPrice));
}

export function getCollectionProductionCost() {
  return sumPriceValues(lookPricing.map(getLookProductionCost));
}

export function getCollectionFinalSellingPrice() {
  return sumPriceValues(lookPricing.map(getLookFinalSellingPrice));
}

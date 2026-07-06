import { EnquiryStatus, PriceStatus } from "@prisma/client";
import { HttpError } from "../lib/errors.js";
import { prisma } from "../lib/prisma.js";

export async function getAdminDashboard() {
  const [
    totalLooks,
    totalGarments,
    totalEnquiries,
    newEnquiries,
    processItems,
    confirmedCostings,
    priceOnRequestCostings,
    latestEnquiries,
    latestUpdatedLooks,
  ] = await Promise.all([
    prisma.look.count(),
    prisma.garment.count(),
    prisma.enquiry.count(),
    prisma.enquiry.count({ where: { status: "NEW" } }),
    prisma.processItem.count(),
    prisma.garmentCosting.count({
      where: {
        finalSellingPriceStatus: PriceStatus.CONFIRMED,
      },
    }),
    prisma.garmentCosting.count({
      where: {
        OR: [
          { finalSellingPriceStatus: PriceStatus.PRICE_ON_REQUEST },
          { totalProductionCostStatus: PriceStatus.PRICE_ON_REQUEST },
          { fabricPricePerYardStatus: PriceStatus.PRICE_ON_REQUEST },
        ],
      },
    }),
    prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.look.findMany({
      orderBy: { updatedAt: "desc" },
      take: 5,
      select: {
        id: true,
        slug: true,
        number: true,
        name: true,
        updatedAt: true,
      },
    }),
  ]);

  return {
    totalLooks,
    totalGarments,
    totalEnquiries,
    newEnquiries,
    processItems,
    confirmedCostings,
    priceOnRequestCostings,
    latestEnquiries,
    latestUpdatedLooks,
  };
}

export async function getAdminEnquiries() {
  return prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function updateAdminEnquiryStatus(
  id: string,
  status: EnquiryStatus,
) {
  const enquiry = await prisma.enquiry.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!enquiry) {
    throw new HttpError(404, "Enquiry not found");
  }

  return prisma.enquiry.update({
    where: { id },
    data: { status },
  });
}

import { PriceStatus, Prisma } from "@prisma/client";

export function decimalToNumber(value: Prisma.Decimal | null | undefined) {
  return value == null ? null : Number(value);
}

export function serializePrice(
  value: Prisma.Decimal | null | undefined,
  status: PriceStatus,
) {
  return {
    value: decimalToNumber(value),
    status,
  };
}

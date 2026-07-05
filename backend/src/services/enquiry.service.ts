import type { EnquiryInterestType } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

type CreateEnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  interestType?: EnquiryInterestType;
};

export async function createEnquiry(input: CreateEnquiryInput) {
  return prisma.enquiry.create({
    data: {
      name: input.name,
      email: input.email,
      phone: input.phone,
      subject: input.subject,
      message: input.message,
      interestType: input.interestType ?? "OTHER",
    },
  });
}

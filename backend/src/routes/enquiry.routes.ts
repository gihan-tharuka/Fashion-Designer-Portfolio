import { EnquiryInterestType } from "@prisma/client";
import { Router } from "express";
import { z } from "zod";
import { createEnquiryController } from "../controllers/enquiry.controller.js";
import { validateBody } from "../middleware/validate.js";

export const enquiryRouter = Router();

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10).max(4000),
  interestType: z.nativeEnum(EnquiryInterestType).optional(),
});

enquiryRouter.post("/enquiries", validateBody(enquirySchema), createEnquiryController);

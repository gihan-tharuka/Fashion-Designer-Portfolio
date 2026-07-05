import type { Request, Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { createEnquiry } from "../services/enquiry.service.js";

export const createEnquiryController = asyncHandler(
  async (req: Request, res: Response) => {
    const enquiry = await createEnquiry(req.body);
    return sendSuccess(res, enquiry, 201);
  },
);

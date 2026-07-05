import type { Request, Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { getPricingArchive } from "../services/pricing.service.js";

export const getPricing = asyncHandler(async (_req: Request, res: Response) => {
  const pricing = await getPricingArchive();
  return sendSuccess(res, pricing);
});

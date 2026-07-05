import type { Request, Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { getLookBySlug, getLooks } from "../services/look.service.js";

export const listLooks = asyncHandler(async (_req: Request, res: Response) => {
  const looks = await getLooks();
  return sendSuccess(res, looks);
});

export const getLook = asyncHandler(async (req: Request, res: Response) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const look = await getLookBySlug(slug);
  return sendSuccess(res, look);
});

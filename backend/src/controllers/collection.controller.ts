import type { Request, Response } from "express";
import { getCollectionBySlug } from "../services/collection.service.js";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";

export const getCollection = asyncHandler(async (req: Request, res: Response) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const collection = await getCollectionBySlug(slug);
  return sendSuccess(res, collection);
});

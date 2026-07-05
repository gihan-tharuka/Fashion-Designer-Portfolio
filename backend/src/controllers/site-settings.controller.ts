import type { Request, Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { getSiteSettings } from "../services/site-settings.service.js";

export const getSiteSettingsController = asyncHandler(
  async (_req: Request, res: Response) => {
    const settings = await getSiteSettings();
    return sendSuccess(res, settings);
  },
);

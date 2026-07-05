import type { Request, Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { getProcessItems } from "../services/process.service.js";

export const getProcess = asyncHandler(async (_req: Request, res: Response) => {
  const processItems = await getProcessItems();
  return sendSuccess(res, processItems);
});

import type { Request, Response } from "express";
import { sendSuccess } from "../lib/http.js";

export function getHealth(_req: Request, res: Response) {
  return sendSuccess(res, {
    status: "ok",
    service: "lumene-backend",
    timestamp: new Date().toISOString(),
  });
}

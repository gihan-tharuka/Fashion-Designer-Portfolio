import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import { getCurrentAdmin, loginAdmin } from "../services/auth.service.js";

export const loginController = asyncHandler(async (req, res: Response) => {
  const result = await loginAdmin(req.body.email, req.body.password);
  return sendSuccess(res, result);
});

export const getMeController = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const user = await getCurrentAdmin(req.authUser!.id);
    return sendSuccess(res, user);
  },
);

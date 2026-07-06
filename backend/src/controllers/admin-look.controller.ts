import type { Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import {
  createAdminLook,
  deleteAdminLook,
  getAdminLookById,
  getAdminLooks,
  updateAdminLook,
} from "../services/admin-look.service.js";

export const getAdminLooksController = asyncHandler(
  async (_req: AuthenticatedRequest, res: Response) => {
    const data = await getAdminLooks();
    return sendSuccess(res, data);
  },
);

export const getAdminLookController = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const data = await getAdminLookById(String(req.params.id));
    return sendSuccess(res, data);
  },
);

export const createAdminLookController = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const data = await createAdminLook(req.body);
    return sendSuccess(res, data, 201);
  },
);

export const updateAdminLookController = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const data = await updateAdminLook(String(req.params.id), req.body);
    return sendSuccess(res, data);
  },
);

export const deleteAdminLookController = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const data = await deleteAdminLook(String(req.params.id));
    return sendSuccess(res, data);
  },
);

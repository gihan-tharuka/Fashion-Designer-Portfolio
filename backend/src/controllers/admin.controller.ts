import type { Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import {
  getAdminDashboard,
  getAdminEnquiries,
} from "../services/admin.service.js";

export const getAdminDashboardController = asyncHandler(
  async (_req, res: Response) => {
    const data = await getAdminDashboard();
    return sendSuccess(res, data);
  },
);

export const getAdminEnquiriesController = asyncHandler(
  async (_req, res: Response) => {
    const data = await getAdminEnquiries();
    return sendSuccess(res, data);
  },
);

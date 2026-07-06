import type { Response } from "express";
import { asyncHandler } from "../lib/async-handler.js";
import { sendSuccess } from "../lib/http.js";
import {
  getAdminDashboard,
  getAdminEnquiries,
  updateAdminEnquiryStatus,
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

export const updateAdminEnquiryStatusController = asyncHandler(
  async (req, res: Response) => {
    const data = await updateAdminEnquiryStatus(
      String(req.params.id),
      req.body.status,
    );
    return sendSuccess(res, data);
  },
);

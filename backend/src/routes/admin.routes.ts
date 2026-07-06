import { Router } from "express";
import {
  getAdminDashboardController,
  getAdminEnquiriesController,
} from "../controllers/admin.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

export const adminRouter = Router();

adminRouter.use("/admin", requireAuth, requireAdmin);
adminRouter.get("/admin/dashboard", getAdminDashboardController);
adminRouter.get("/admin/enquiries", getAdminEnquiriesController);

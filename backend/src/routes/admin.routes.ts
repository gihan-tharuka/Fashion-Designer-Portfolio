import { Router } from "express";
import { LookImageType } from "@prisma/client";
import { z } from "zod";
import {
  getAdminDashboardController,
  getAdminEnquiriesController,
  updateAdminEnquiryStatusController,
} from "../controllers/admin.controller.js";
import {
  createAdminLookController,
  deleteAdminLookController,
  getAdminLookController,
  getAdminLooksController,
  updateAdminLookController,
} from "../controllers/admin-look.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

export const adminRouter = Router();

const idSchema = z.object({
  id: z.string().min(1, "A valid id is required"),
});

const lookImageSchema = z.object({
  type: z.nativeEnum(LookImageType),
  url: z.string().trim().min(1, "Image url is required"),
  alt: z.string().trim().min(1, "Image alt text is required"),
  caption: z.string().trim().optional().nullable(),
  displayOrder: z.number().int().nonnegative().optional(),
});

const lookTagSchema = z.object({
  label: z.string().trim().min(1, "Tag label is required"),
  displayOrder: z.number().int().nonnegative().optional(),
});

const lookMaterialSchema = z.object({
  label: z.string().trim().min(1, "Material label is required"),
  value: z.string().trim().min(1, "Material value is required"),
  displayOrder: z.number().int().nonnegative().optional(),
});

const lookCreateSchema = z.object({
  number: z.string().trim().min(1, "Look number is required"),
  slug: z.string().trim().min(1, "Look slug is required"),
  name: z.string().trim().min(1, "Look name is required"),
  subtitle: z.string().trim().optional().nullable(),
  description: z.string().trim().min(1, "Description is required"),
  concept: z.string().trim().optional().nullable(),
  designDevelopment: z.string().trim().optional().nullable(),
  problemsAndImprovements: z.string().trim().optional().nullable(),
  outcomeAndReflection: z.string().trim().optional().nullable(),
  displayOrder: z.number().int().nonnegative(),
  isFeatured: z.boolean().optional(),
  images: z.array(lookImageSchema).optional(),
  tags: z.array(lookTagSchema).optional(),
  materials: z.array(lookMaterialSchema).optional(),
});

const lookUpdateSchema = lookCreateSchema.partial().refine(
  (value) => Object.keys(value).length > 0,
  "At least one look field is required",
);

const enquiryStatusSchema = z.object({
  status: z.enum(["NEW", "READ", "ARCHIVED"]),
});

adminRouter.use("/admin", requireAuth, requireAdmin);
adminRouter.get("/admin/dashboard", getAdminDashboardController);
adminRouter.get("/admin/enquiries", getAdminEnquiriesController);
adminRouter.patch(
  "/admin/enquiries/:id",
  validate({ params: idSchema, body: enquiryStatusSchema }),
  updateAdminEnquiryStatusController,
);
adminRouter.get("/admin/looks", getAdminLooksController);
adminRouter.get(
  "/admin/looks/:id",
  validate({ params: idSchema }),
  getAdminLookController,
);
adminRouter.post(
  "/admin/looks",
  validate({ body: lookCreateSchema }),
  createAdminLookController,
);
adminRouter.patch(
  "/admin/looks/:id",
  validate({ params: idSchema, body: lookUpdateSchema }),
  updateAdminLookController,
);
adminRouter.delete(
  "/admin/looks/:id",
  validate({ params: idSchema }),
  deleteAdminLookController,
);

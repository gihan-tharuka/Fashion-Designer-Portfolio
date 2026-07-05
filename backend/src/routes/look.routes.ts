import { Router } from "express";
import { z } from "zod";
import { getLook, listLooks } from "../controllers/look.controller.js";
import { validate } from "../middleware/validate.js";

export const lookRouter = Router();

const slugSchema = z.object({
  slug: z.string().regex(/^look-\d{2}$/i, "Look slug must match look-01 format"),
});

lookRouter.get("/looks", listLooks);
lookRouter.get("/looks/:slug", validate({ params: slugSchema }), getLook);

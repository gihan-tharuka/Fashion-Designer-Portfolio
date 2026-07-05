import { Router } from "express";
import { z } from "zod";
import { getCollection } from "../controllers/collection.controller.js";
import { validate } from "../middleware/validate.js";

export const collectionRouter = Router();

const collectionSlugSchema = z.object({
  slug: z.string().min(1),
});

collectionRouter.get(
  "/collection/:slug",
  validate({ params: collectionSlugSchema }),
  getCollection,
);

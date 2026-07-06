import { Router } from "express";
import { z } from "zod";
import { getMeController, loginController } from "../controllers/auth.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";

export const authRouter = Router();

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(200),
});

authRouter.post("/auth/login", validateBody(loginSchema), loginController);
authRouter.get("/auth/me", requireAuth, requireAdmin, getMeController);

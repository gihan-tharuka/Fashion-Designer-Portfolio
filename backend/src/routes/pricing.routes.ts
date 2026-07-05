import { Router } from "express";
import { getPricing } from "../controllers/pricing.controller.js";

export const pricingRouter = Router();

pricingRouter.get("/pricing", getPricing);

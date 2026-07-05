import { Router } from "express";
import { getSiteSettingsController } from "../controllers/site-settings.controller.js";

export const siteSettingsRouter = Router();

siteSettingsRouter.get("/site-settings", getSiteSettingsController);

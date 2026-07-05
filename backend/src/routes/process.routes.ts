import { Router } from "express";
import { getProcess } from "../controllers/process.controller.js";

export const processRouter = Router();

processRouter.get("/process", getProcess);

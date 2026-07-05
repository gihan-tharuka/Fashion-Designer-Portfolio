import { Prisma } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { HttpError } from "../lib/errors.js";
import { sendError } from "../lib/http.js";

export function notFoundHandler(_req: Request, res: Response) {
  return sendError(res, "Route not found", 404);
}

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof HttpError) {
    return sendError(res, error.message, error.statusCode);
  }

  if (error instanceof ZodError) {
    return sendError(
      res,
      error.issues.map((issue) => issue.message).join(", "),
      400,
    );
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return sendError(res, "Database request failed", 500);
  }

  if (error instanceof Error) {
    return sendError(res, error.message, 500);
  }

  return sendError(res, "Unexpected server error", 500);
}

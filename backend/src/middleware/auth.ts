import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../lib/errors.js";
import { verifyAuthToken } from "../lib/auth.js";

export type AuthenticatedUser = {
  id: string;
  email: string;
  role: "ADMIN";
};

export type AuthenticatedRequest = Request & {
  authUser?: AuthenticatedUser;
};

function extractBearerToken(authorizationHeader?: string) {
  if (!authorizationHeader) {
    return null;
  }

  const [scheme, token] = authorizationHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
}

export function requireAuth(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction,
) {
  const token = extractBearerToken(req.headers.authorization);

  if (!token) {
    return next(new HttpError(401, "Authentication required"));
  }

  try {
    const payload = verifyAuthToken(token);
    req.authUser = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
    return next();
  } catch {
    return next(new HttpError(401, "Invalid or expired token"));
  }
}

export function requireAdmin(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction,
) {
  if (!req.authUser) {
    return next(new HttpError(401, "Authentication required"));
  }

  if (req.authUser.role !== "ADMIN") {
    return next(new HttpError(403, "Admin access required"));
  }

  return next();
}

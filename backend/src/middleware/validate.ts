import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject, ZodTypeAny } from "zod";

type ValidateShape = {
  body?: ZodTypeAny;
  params?: ZodTypeAny;
  query?: ZodTypeAny;
};

export function validate(schema: ValidateShape) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (schema.body) {
      req.body = schema.body.parse(req.body);
    }

    if (schema.params) {
      req.params = schema.params.parse(req.params);
    }

    if (schema.query) {
      req.query = schema.query.parse(req.query) as Request["query"];
    }

    next();
  };
}

export function validateBody(schema: AnyZodObject) {
  return validate({ body: schema });
}

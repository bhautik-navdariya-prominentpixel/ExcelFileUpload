import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ResponseModel from "../common/models/response.model";

export function validationMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(ResponseModel.fail("Validation Failed!", errors.array()));
  }
  next();
}

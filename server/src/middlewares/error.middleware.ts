import { NextFunction, Request, Response } from "express";
import ResponseModel from "../common/models/response.model";

export function errorHandlingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log(error.);

  res.json(ResponseModel.fail("Something went wrong from our side!", error.message));
}

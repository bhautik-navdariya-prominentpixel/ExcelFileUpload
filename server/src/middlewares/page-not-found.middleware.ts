import { Request, Response } from "express";
import ResponseModel from "../common/models/response.model";

export const PageNotFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).json(ResponseModel.fail("404 url not found!"));
};

import { param } from "express-validator";
import { validationMiddleware } from "../../middlewares/validation.middleware";

export function paramsValidator(paramName: string) {
  return [
    param(paramName, `${paramName} in parameter only allows number and with grater then zero`)
      .notEmpty()
      .isInt({ min: 0 }),
    validationMiddleware,
  ];
}

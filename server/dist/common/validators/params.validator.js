"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsValidator = paramsValidator;
const express_validator_1 = require("express-validator");
const validation_middleware_1 = require("../../middlewares/validation.middleware");
function paramsValidator(paramName) {
    return [
        (0, express_validator_1.param)(paramName, `${paramName} in parameter only allows number and with grater then zero`)
            .notEmpty()
            .isInt({ min: 0 }),
        validation_middleware_1.validationMiddleware,
    ];
}
//# sourceMappingURL=params.validator.js.map
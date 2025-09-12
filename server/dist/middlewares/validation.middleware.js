"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = validationMiddleware;
const express_validator_1 = require("express-validator");
const response_model_1 = __importDefault(require("../common/models/response.model"));
function validationMiddleware(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json(response_model_1.default.fail("Validation Failed!", errors.array()));
    }
    next();
}
//# sourceMappingURL=validation.middleware.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = errorHandlingMiddleware;
const response_model_1 = __importDefault(require("../common/models/response.model"));
function errorHandlingMiddleware(error, req, res, next) {
    // console.log(error.);
    res.json(response_model_1.default.fail("Something went wrong from our side!", error.message));
}
//# sourceMappingURL=error.middleware.js.map
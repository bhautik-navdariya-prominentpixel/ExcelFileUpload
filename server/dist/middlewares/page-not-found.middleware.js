"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundMiddleware = void 0;
const response_model_1 = __importDefault(require("../common/models/response.model"));
const PageNotFoundMiddleware = (req, res) => {
    res.status(404).json(response_model_1.default.fail("404 url not found!"));
};
exports.PageNotFoundMiddleware = PageNotFoundMiddleware;
//# sourceMappingURL=page-not-found.middleware.js.map
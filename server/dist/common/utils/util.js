"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootPath = void 0;
const path_1 = __importDefault(require("path"));
exports.RootPath = path_1.default.dirname(require.main?.filename ?? "");
//# sourceMappingURL=util.js.map
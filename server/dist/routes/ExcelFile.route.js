"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExcelFile_controller_1 = require("../controllers/ExcelFile.controller");
const multer_config_1 = __importDefault(require("../common/config/multer.config"));
const ExcelFileRouter = (0, express_1.Router)();
ExcelFileRouter.get("/", ExcelFile_controller_1.getUploadedData).post("/", multer_config_1.default.single("file"), ExcelFile_controller_1.uploadExcelFile);
exports.default = ExcelFileRouter;
//# sourceMappingURL=ExcelFile.route.js.map
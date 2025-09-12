"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const util_1 = require("../utils/util");
const storage = multer_1.default.diskStorage({
    destination(req, file, callback) {
        callback(null, path_1.default.join(util_1.RootPath, "/temp/"));
    },
    filename(req, file, callback) {
        const fileName = Date.now() + file.originalname;
        // file.filename = fileName;
        callback(null, fileName);
    },
});
function excelFileMiamiChecker(req, file, callback) {
    if (file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.mimetype === "application/vnd.ms-excel") {
        callback(null, true);
    }
    callback(null, false);
}
const upload = (0, multer_1.default)({ storage, fileFilter: excelFileMiamiChecker });
exports.default = upload;
//# sourceMappingURL=multer.config.js.map
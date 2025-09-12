"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const excel_helper_1 = require("./common/helpers/excel.helper");
const util_1 = require("./common/utils/util");
(0, excel_helper_1.getDataFromExcel)(path_1.default.join(util_1.RootPath, "Book1.xlsx")).then(console.log);
//# sourceMappingURL=app.js.map
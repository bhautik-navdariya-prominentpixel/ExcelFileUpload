"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUploadedData = getUploadedData;
exports.uploadExcelFile = uploadExcelFile;
const response_model_1 = __importDefault(require("../common/models/response.model"));
const excel_helper_1 = require("../common/helpers/excel.helper");
const promises_1 = __importDefault(require("fs/promises"));
const infocus_wastelinq_wq_sales_order_header_table_1 = __importDefault(require("../common/models/tables/infocus_wastelinq_wq_sales_order_header.table"));
async function getUploadedData(req, res) {
    const InfocusWastelinqWqSalesOrderHeaderData = await infocus_wastelinq_wq_sales_order_header_table_1.default.findAll();
    return res.json(response_model_1.default.success(InfocusWastelinqWqSalesOrderHeaderData));
}
async function uploadExcelFile(req, res) {
    if (!req.file) {
        return res.json(response_model_1.default.fail("No File Provided"));
    }
    let resData;
    try {
        resData = await (0, excel_helper_1.getDataFromExcel)(req.file.path);
    }
    catch (e) {
        return res.json(response_model_1.default.fail("Went wrong while upload file", e.toString()));
    }
    const InfocusWastelinqWqSalesOrderHeaderResponse = await infocus_wastelinq_wq_sales_order_header_table_1.default.bulkCreate(resData);
    promises_1.default.unlink(req.file.path);
    return res
        .status(201)
        .json(response_model_1.default.success(InfocusWastelinqWqSalesOrderHeaderResponse, "Data Uploaded Successfully!"));
}
//# sourceMappingURL=ExcelFile.controller.js.map
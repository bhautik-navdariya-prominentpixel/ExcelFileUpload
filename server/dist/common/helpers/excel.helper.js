"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromExcel = getDataFromExcel;
const exceljs_1 = __importDefault(require("exceljs"));
const global_constant_1 = require("../types/constants/global.constant");
const infocus_wastelinq_wq_sales_order_header_table_1 = __importDefault(require("../models/tables/infocus_wastelinq_wq_sales_order_header.table"));
async function getDataFromExcel(file) {
    const workbook = new exceljs_1.default.Workbook();
    await workbook.xlsx.readFile(file);
    const sheet = workbook.getWorksheet(global_constant_1.SHEET_NAME);
    if (!sheet) {
        console.log("Sheet name", sheet);
        throw new Error("No such Sheet Found with " + global_constant_1.SHEET_NAME);
    }
    const columnsName = [];
    const columnData = [];
    sheet?.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber === 1) {
            row.eachCell((cell) => {
                columnsName.push((cell.value ?? "")?.toString().trim());
            });
            let temporaryInfocusObject = new infocus_wastelinq_wq_sales_order_header_table_1.default();
            columnsName.forEach((column) => {
                if (!(column in temporaryInfocusObject)) {
                    throw new Error("Invalid Column Name " + column);
                }
            });
            return;
        }
        let localObject = {};
        row.eachCell((cell, cellNumber) => {
            const key = columnsName[cellNumber - 1] ?? "";
            localObject[key] = cell.value?.toString() ?? "";
        });
        columnData.push(localObject);
    });
    return columnData;
}
//# sourceMappingURL=excel.helper.js.map
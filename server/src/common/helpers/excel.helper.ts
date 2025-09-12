import Excel, { Cell, Row } from "exceljs";
import { SHEET_NAME } from "../types/constants/global.constant";
import InfocusWastelinqWqSalesOrderHeader from "../models/tables/infocus_wastelinq_wq_sales_order_header.table";
type StringKeyValue = { [keyName: string]: string };

export async function getDataFromExcel(file: string): Promise<StringKeyValue[]> {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(file);
  const sheet = workbook.getWorksheet(SHEET_NAME);

  if (!sheet) {
    console.log("Sheet name", sheet);
    throw new Error("No such Sheet Found with " + SHEET_NAME);
  }
  const columnsName: string[] = [];
  const columnData: StringKeyValue[] = [];
  sheet?.eachRow({ includeEmpty: false }, (row: Row, rowNumber: number) => {
    if (rowNumber === 1) {
      row.eachCell((cell: Cell) => {
        columnsName.push((cell.value ?? "")?.toString().trim());
      });
      let temporaryInfocusObject = new InfocusWastelinqWqSalesOrderHeader();
      columnsName.forEach((column) => {
        if (!(column in temporaryInfocusObject)) {
          throw new Error("Invalid Column Name " + column);
        }
      });

      return;
    }
    let localObject: StringKeyValue = {};
    row.eachCell((cell: Cell, cellNumber: number) => {
      const key: string = columnsName[cellNumber - 1] ?? "";
      localObject[key] = cell.value?.toString() ?? "";
    });
    columnData.push(localObject);
  });
  return columnData;
}

import { Request, Response } from "express";
import ResponseModel from "../common/models/response.model";
import { getDataFromExcel } from "../common/helpers/excel.helper";
import fs from "fs/promises";
import InfocusWastelinqWqSalesOrderHeader from "../common/models/tables/infocus_wastelinq_wq_sales_order_header.table";

export async function getUploadedData(req: Request, res: Response<ResponseModel<any>>) {
  const InfocusWastelinqWqSalesOrderHeaderData = await InfocusWastelinqWqSalesOrderHeader.findAll({
    order: ["salesOrderNumber"],
  });
  return res.json(ResponseModel.success(InfocusWastelinqWqSalesOrderHeaderData));
}
export async function uploadExcelFile(req: Request, res: Response<ResponseModel<any>>) {
  if (!req.file) {
    return res.json(ResponseModel.fail("No File Provided"));
  }
  let resData: any;
  try {
    resData = await getDataFromExcel(req.file.path);
  } catch (e: any) {
    return res.json(ResponseModel.fail("Went wrong while upload file", e.toString()));
  }

  const InfocusWastelinqWqSalesOrderHeaderResponse =
    await InfocusWastelinqWqSalesOrderHeader.bulkCreate(resData);
  fs.unlink(req.file.path);

  return res
    .status(201)
    .json(
      ResponseModel.success(
        InfocusWastelinqWqSalesOrderHeaderResponse,
        "Data Uploaded Successfully!"
      )
    );
}

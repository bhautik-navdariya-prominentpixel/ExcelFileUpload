import { Request, Response } from "express";
import ResponseModel from "../common/models/response.model";
export declare function getUploadedData(req: Request, res: Response<ResponseModel<any>>): Promise<Response<ResponseModel<any>, Record<string, any>>>;
export declare function uploadExcelFile(req: Request, res: Response<ResponseModel<any>>): Promise<Response<ResponseModel<any>, Record<string, any>>>;
//# sourceMappingURL=ExcelFile.controller.d.ts.map
import { Router } from "express";
import { getUploadedData, uploadExcelFile } from "../controllers/ExcelFile.controller";
import upload from "../common/config/multer.config";

const ExcelFileRouter = Router();

ExcelFileRouter.get("/", getUploadedData).post("/", upload.single("file"), uploadExcelFile);

export default ExcelFileRouter;

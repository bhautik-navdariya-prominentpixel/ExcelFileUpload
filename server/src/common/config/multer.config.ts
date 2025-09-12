import { Request } from "express";
import multer from "multer";
import path from "path";
import { RootPath } from "../utils/util";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.join(RootPath, "/temp/"));
  },
  filename(req, file, callback) {
    const fileName = Date.now() + file.originalname;
    // file.filename = fileName;
    callback(null, fileName);
  },
});

function excelFileMiamiChecker(req: Request, file: Express.Multer.File, callback: Function) {
  if (
    file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.mimetype === "application/vnd.ms-excel"
  ) {
    callback(null, true);
  }
  callback(null, false);
}
const upload = multer({ storage, fileFilter: excelFileMiamiChecker });

export default upload;

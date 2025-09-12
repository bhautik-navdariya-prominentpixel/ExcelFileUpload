import "./common/config/dotenv.config";
import "./common/config/connection.config";
import path from "path";
import express from "express";
import { PageNotFoundMiddleware } from "./middlewares/page-not-found.middleware";
import { errorHandlingMiddleware } from "./middlewares/error.middleware";
import ExcelFileRouter from "./routes/ExcelFile.route";

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});

app.use("/excel-file/", ExcelFileRouter);

// if all routes are not used then return 404
app.use(PageNotFoundMiddleware);

// error handling middleware.
app.use(errorHandlingMiddleware);

app.listen(3000);

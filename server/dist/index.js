"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./common/config/dotenv.config");
require("./common/config/connection.config");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const page_not_found_middleware_1 = require("./middlewares/page-not-found.middleware");
const error_middleware_1 = require("./middlewares/error.middleware");
const ExcelFile_route_1 = __importDefault(require("./routes/ExcelFile.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});
app.use("/excel-file/", ExcelFile_route_1.default);
// if all routes are not used then return 404
app.use(page_not_found_middleware_1.PageNotFoundMiddleware);
// error handling middleware.
app.use(error_middleware_1.errorHandlingMiddleware);
app.listen(3000);
//# sourceMappingURL=index.js.map
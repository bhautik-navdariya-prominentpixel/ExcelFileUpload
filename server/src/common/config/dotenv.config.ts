import dotenv from "dotenv";
import path from "path";
import { RootPath } from "../utils/util";

dotenv.config({ path: path.join(RootPath, ".env") });

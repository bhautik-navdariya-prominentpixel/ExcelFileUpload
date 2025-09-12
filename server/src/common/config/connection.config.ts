import { sequelize } from "./database.config";

sequelize.sync().then(() => {
  console.log("Database Synced Successfully!");
});

import { sequelize } from "./database.config";

sequelize.sync({ alter: true }).then(() => {
  console.log("Database Synced Successfully!");
});

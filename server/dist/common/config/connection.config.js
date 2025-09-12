"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = require("./database.config");
database_config_1.sequelize.sync().then(() => {
    console.log("Database Synced Successfully!");
});
//# sourceMappingURL=connection.config.js.map
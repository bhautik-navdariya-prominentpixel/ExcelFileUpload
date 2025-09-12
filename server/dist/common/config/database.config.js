"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "mysql",
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST_NAME,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_PASSWORD,
    pool: {
        min: 0,
        max: 2,
        acquire: 120000,
        idle: 150000,
    },
    logging: () => { },
});
//# sourceMappingURL=database.config.js.map
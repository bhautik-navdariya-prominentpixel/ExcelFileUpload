"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = require("../../config/database.config");
const Database_1 = require("../../types/enums/Database");
class InfocusWastelinqWqSalesOrderHeader extends sequelize_1.Model {
    salesOrderNumber;
    purchaseOrder;
    requestedDate;
    requestedNotes;
    statusId;
    branchId;
    generatorLocationId;
    billToLocationId;
    salespersonId;
    importMasterId;
    legacyNumber;
    logisticsStatusId;
    fileName;
    insertDatetimeUtc;
    wqId;
    isActive;
}
InfocusWastelinqWqSalesOrderHeader.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    salesOrderNumber: sequelize_1.DataTypes.INTEGER,
    purchaseOrder: sequelize_1.DataTypes.STRING,
    requestedDate: sequelize_1.DataTypes.DATE,
    requestedNotes: sequelize_1.DataTypes.STRING,
    statusId: sequelize_1.DataTypes.INTEGER,
    branchId: sequelize_1.DataTypes.INTEGER,
    generatorLocationId: sequelize_1.DataTypes.INTEGER,
    billToLocationId: sequelize_1.DataTypes.INTEGER,
    salespersonId: sequelize_1.DataTypes.INTEGER,
    importMasterId: sequelize_1.DataTypes.INTEGER,
    legacyNumber: sequelize_1.DataTypes.STRING,
    logisticsStatusId: sequelize_1.DataTypes.INTEGER,
    fileName: sequelize_1.DataTypes.STRING,
    insertDatetimeUtc: sequelize_1.DataTypes.DATE,
    wqId: sequelize_1.DataTypes.INTEGER,
    isActive: sequelize_1.DataTypes.BOOLEAN,
}, {
    sequelize: database_config_1.sequelize,
    tableName: Database_1.DATABASE_TABLE.INFOCUS_WASTELINQ_WQ_SALE_ORDER_HEADER,
    freezeTableName: true,
    underscored: true,
});
exports.default = InfocusWastelinqWqSalesOrderHeader;
//# sourceMappingURL=infocus_wastelinq_wq_sales_order_header.table.js.map
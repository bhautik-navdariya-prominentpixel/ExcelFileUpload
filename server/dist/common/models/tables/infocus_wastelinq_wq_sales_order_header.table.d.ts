import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
declare class InfocusWastelinqWqSalesOrderHeader extends Model<InferAttributes<InfocusWastelinqWqSalesOrderHeader>, InferCreationAttributes<InfocusWastelinqWqSalesOrderHeader>> {
    id: CreationOptional<number>;
    salesOrderNumber: number;
    purchaseOrder: string;
    requestedDate: Date;
    requestedNotes: string;
    statusId: number;
    branchId: number;
    generatorLocationId: number;
    billToLocationId: number;
    salespersonId: number;
    importMasterId: number;
    legacyNumber: string;
    logisticsStatusId: number;
    fileName: string;
    insertDatetimeUtc: Date;
    wqId: number;
    isActive: boolean;
}
export default InfocusWastelinqWqSalesOrderHeader;
//# sourceMappingURL=infocus_wastelinq_wq_sales_order_header.table.d.ts.map
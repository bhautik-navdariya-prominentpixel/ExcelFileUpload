import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../../config/database.config";
import { DATABASE_TABLE } from "../../types/enums/Database";

class InfocusWastelinqWqSalesOrderHeader extends Model<
  InferAttributes<InfocusWastelinqWqSalesOrderHeader>,
  InferCreationAttributes<InfocusWastelinqWqSalesOrderHeader>
> {
  declare id: CreationOptional<number>;
  public salesOrderNumber!: number;
  public purchaseOrder!: string;
  public requestedDate!: Date;
  public requestedNotes!: string;
  public statusId!: number;
  public branchId!: number;
  public generatorLocationId!: number;
  public billToLocationId!: number;
  public salespersonId!: number;
  public importMasterId!: number;
  public legacyNumber!: string;
  public logisticsStatusId!: number;
  public fileName!: string;
  public insertDatetimeUtc!: Date;
  public wqId!: number;
  public isActive!: boolean;
}

InfocusWastelinqWqSalesOrderHeader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    salesOrderNumber: DataTypes.INTEGER,
    purchaseOrder: DataTypes.STRING,
    requestedDate: DataTypes.DATE,
    requestedNotes: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    branchId: DataTypes.INTEGER,
    generatorLocationId: DataTypes.INTEGER,
    billToLocationId: DataTypes.INTEGER,
    salespersonId: DataTypes.INTEGER,
    importMasterId: DataTypes.INTEGER,
    legacyNumber: DataTypes.STRING,
    logisticsStatusId: DataTypes.INTEGER,
    fileName: DataTypes.STRING,
    insertDatetimeUtc: DataTypes.DATE,
    wqId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
  },
  {
    sequelize: sequelize,
    tableName: DATABASE_TABLE.INFOCUS_WASTELINQ_WQ_SALE_ORDER_HEADER,
    freezeTableName: true,
    underscored: true,
  }
);

export default InfocusWastelinqWqSalesOrderHeader;

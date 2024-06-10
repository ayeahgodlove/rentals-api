import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { IProduct } from "../../domain/models/product";
import { Store } from "./store";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "product",
  modelName: "Product",
})
export class Product extends Model<IProduct> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @ForeignKey(() => Store) // foreign key
  @Column
  storeId!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    defaultValue: 0,
  })
  amount!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  durationOfRentage!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  condition!: string;

  @Column({
    type: DataType.DATE,
  })
  availabilityStartDate!: Date;

  @Column({
    type: DataType.DATE,
  })
  availabilityEndDate!: Date;

  @Column({
    type: DataType.DATE,
  })
  availabilityStartTime!: Date;

  @Column({
    type: DataType.DATE,
  })
  availabilityEndTime!: Date;

  // relationships

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    unique: false,
  })
  images!: string[];

  @BelongsTo(() => Store, "storeId")
  store!: Store;
}

import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { User } from "./user";
import { Order } from "./order";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "payment",
  modelName: "Payment"
})
export class Payment extends Model {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  })
  @ForeignKey(() => User)
  userId!: string;

  @Column({
    type: DataType.STRING(40),
    allowNull: false,
    unique: true,
    references: {
      model: Order,
      key: "orderNo",
    }
  })
  orderNo!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  status!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  slug!: string;

  @BelongsTo(() => User)
  user!: User;
  @BelongsTo(() => Order)
  order!: Order;
}
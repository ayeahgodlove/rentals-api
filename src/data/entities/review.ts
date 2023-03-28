import { Table, Model, Column, DataType, HasMany, BelongsTo } from "sequelize-typescript";
import { Product } from "./product";
import { User } from "./user";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "review",
  modelName: "Review"
})
export class Review extends Model<Review> {
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
  userId!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  })
  productId!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @BelongsTo(() => Product)
  products!: Product

  @BelongsTo(() => User)
  user!: User;
}
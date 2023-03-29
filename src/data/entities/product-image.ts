import { Table, Model, Column, DataType, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Product } from "./product";
import { User } from "./user";

// shortDescription: string;

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "product_image",
  modelName: "ProductImage"
})
export class ProductImage extends Model<ProductImage> {
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
      model: Product,
      key: "id",
    },
  })
  @ForeignKey(() => Product)
  productId!: string; 

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  slug!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  url!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  shortDescription!: string;

  @BelongsTo(() => Product)
  products!: Product
}
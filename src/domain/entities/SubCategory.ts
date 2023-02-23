import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { Category } from "./Category";
import { Product } from "./Product";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "SubCategories",
  modelName: "SubCategory"
})
export class SubCategory extends Model {
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
      model: Category,
      key: "id",
    },
  })
  @ForeignKey(() => Category)
  categoryId!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  slug!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  /**
   * Rav4 => Cars (belongs to)
   */
  @BelongsTo(() => Category)
  category!: Category;

  @HasMany(() => Product)
  products!: Product[];
}
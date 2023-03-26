import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { IsNotEmpty, Min, IsString, Max } from "class-validator";
// import { Transform } from "class-transformer";
import { Category } from "./category";
import { Product } from "./product";

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
  @IsNotEmpty()
  @IsString()
  @Max(50)
  @ForeignKey(() => Category)
  categoryId!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  @Max(128)
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
  @IsNotEmpty()
  description!: string;

  /**
   * Rav4 => Cars (belongs to)
   */
  @BelongsTo(() => Category)
  category!: Category;

  @HasMany(() => Product)
  products!: Product[];
}
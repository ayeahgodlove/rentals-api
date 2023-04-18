import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { ICategory } from "../../domain/models/category";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "category",
  modelName: "Category",
  deletedAt: false,
})
export class Category extends Model<ICategory> {
  @Column({
    type: DataType.STRING(50),
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
}

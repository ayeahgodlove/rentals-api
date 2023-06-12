import { Table, Model, Column, DataType } from "sequelize-typescript";
import { ITag } from "../../domain/models/tag";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "tag",
  modelName: "Tag",
})
export class Tag extends Model<ITag> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  name!: string;
}

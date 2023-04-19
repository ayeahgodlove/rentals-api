import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { IRole } from "../../domain/models/role";
import { User } from "./user";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "role",
  modelName: "Role"
})
export class Role extends Model<IRole> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

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

  // relationships
  @HasMany(() => User)
  users!: User[];
}

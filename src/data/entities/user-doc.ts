import { Table, Model, Column, DataType, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { IUserDoc } from "../../domain/models/user-doc";
import { User } from "./user";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "userDoc",
  modelName: "UserDoc"
})
export class UserDoc extends Model<IUserDoc> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id: string;

  @ForeignKey(() => User)
  @Column
  userId!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  idCard1!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  idCard2!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  passportPhoto!: string;

  // relationships
  @BelongsTo(() => User)
  user!: User;
}

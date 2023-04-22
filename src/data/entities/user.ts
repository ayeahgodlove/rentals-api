import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
} from "sequelize-typescript";
import { IUser } from "../../domain/models/user";
import { Role } from "./role";
import { Review } from "./review";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "user",
  modelName: "User"
})
export class User extends Model<IUser> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    primaryKey: true,
  })
  declare id: string;
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  authStrategy!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  firstname!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  lastname!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  avatar!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(13),
    allowNull: false,
    unique: true,
  })
  phoneNumber!: string;

  @Column({
    type: DataType.STRING(13),
    allowNull: false,
    unique: true,
  })
  whatsappNumber!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  country!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  password!: string;

  @ForeignKey(() => Role) // foreign key
  @Column
  roleId!: string;

  @HasMany(() => Review)
  reviews!: Review[];
}

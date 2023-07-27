import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./user";
import { IReview } from "../../domain/models/review";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "review",
  modelName: "Review"
})
export class Review extends Model<IReview> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column
  @ForeignKey(() => User)
  userId!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comment!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating!: number;

  @BelongsTo(() => User)
  user!: User;
}

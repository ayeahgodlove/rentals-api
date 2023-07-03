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
  tableName: "reviews_tbl",
  modelName: "Review"
})
export class Review extends Model<IReview> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
    comment: "ID field which is set as a primary key and unique",
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

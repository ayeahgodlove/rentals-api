// src/presentation/dtos/OrderRequestDto.ts

import {  IsNotEmpty, IsString, IsNumber } from "class-validator";
import { IOrder, emptyOrder } from "../../domain/models/order";
import { v4 } from "uuid";
import slugify from "slugify";

export class OrderRequestDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  orderNo: string;



  constructor(data: IOrder) {
    this.userId = data.userId;
    this.status = data.status;
    this.orderNo = data.orderNo;
    this.total = data.total;
  }

  toData(): IOrder {
    return {
      ...emptyOrder,
      id: v4(),
      slug:  slugify(this.orderNo, {lower: true, replacement: "-"}),
      orderNo: this.orderNo,
      status: this.status,
      userId: this.userId,
      total: this.total,
    };
  }

  toUpdateData(data: IOrder): IOrder {
    return {
      id: data.id,
      slug: data.slug,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      orderNo: data.orderNo,
      status: data.status,
      total: data.total,
      userId: data.userId,
    }
  }
}

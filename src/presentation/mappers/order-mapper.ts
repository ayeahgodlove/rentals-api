// src/presentation/mappers/OrderMapper.ts

import { Order } from "../../data/entities/order";
import { IOrder } from "../../domain/models/order";

export class OrderMapper {
  toDTO(order: Order): IOrder {
    const orderDTO: IOrder = {
        id: `${order.id}`,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        slug: order.slug,
        orderNo: order.orderNo,
        status: order.status,
        total: order.total,
        userId: order.userId
    };
    return orderDTO;
  }
  toDTOs(categories: Order[]): IOrder[] {
    const _categories = categories.map(order => {
      const orderDTO: IOrder = {
        id: `${order.id}`,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        slug: order.slug,
        orderNo: order.orderNo,
        status: order.status,
        total: order.total,
        userId: order.userId
    };

      return orderDTO
    })
    return _categories;
  }
}

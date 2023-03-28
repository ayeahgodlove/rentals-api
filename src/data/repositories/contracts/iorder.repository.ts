import { Order } from "../../entities/order";
import { IOrder } from "../../../domain/models/order";

export interface IOrderRepository {
    create(order: IOrder): Promise<Order>;
    findById(id: string): Promise<Order | null>;
    findByOrderNo(orderNo: string): Promise<Order | null>;
    getAll(): Promise<Order[]>;
    update(order: IOrder): Promise<Order>;
    delete(id: string): Promise<void>;
  }
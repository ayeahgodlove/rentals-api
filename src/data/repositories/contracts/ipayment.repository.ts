import { IPayment } from "../../../domain/models/payment";
import { Payment } from "../../entities/payment";

export interface IPaymentRepository {
    create(payment: IPayment): Promise<Payment>;
    findById(id: string): Promise<Payment | null>;
    findByOrderId(orderId: string): Promise<Payment | null>;
    getAll(): Promise<Payment[]>;
    update(payment: IPayment): Promise<Payment>;
    delete(id: string): Promise<void>;
  }
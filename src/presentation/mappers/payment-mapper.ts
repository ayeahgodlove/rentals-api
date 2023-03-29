// src/presentation/mappers/PaymentMapper.ts

import { Payment } from "../../data/entities/payment";
import { IPayment } from "../../domain/models/payment";

export class PaymentMapper {
  toDTO(payment: Payment): IPayment {
    const paymentDTO: IPayment = {
      id: `${payment.id}`,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
      userId: payment.userId,
      orderId: payment.orderId,
      amount: payment.amount,
      status: payment.status
    };
    return paymentDTO;
  }
  toDTOs(payments: Payment[]): IPayment[] {
    const _payments = payments.map(payment => {
      const paymentDTO: IPayment = {
        id: `${payment.id}`,
        createdAt: payment.createdAt,
        updatedAt: payment.updatedAt,
        userId: payment.userId,
        orderId: payment.orderId,
        amount: payment.amount,
        status: payment.status
    };

      return paymentDTO
    })
    return _payments;
  }
}

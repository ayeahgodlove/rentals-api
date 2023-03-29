import { IBaseResponse } from "./base-response";

export interface IPayment {
  id: string;
  userId: string;
  orderId: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyPayment: IPayment = {
  id: "",
  userId: "",
  orderId: "",
  amount: 0,
  status: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface IPaymentResponse extends IBaseResponse {
  data: IPayment | null;
}

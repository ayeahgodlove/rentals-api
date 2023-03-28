import { IBaseResponse } from "./base-response";

export interface IReview {
  id: string;
  rating: number;
  userId: string;
  productId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyReview: IReview = {
  id: "",
  rating: 0,
  userId: "",
  productId: "",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface IReviewResponse extends IBaseResponse {
  data: IReview | null | IReview[];
}
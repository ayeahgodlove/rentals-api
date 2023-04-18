import { IBaseResponse } from "./base-response";

export interface IReview {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyRevIReview: IReview = {
  id: "",
  userId: "",
  rating: 0,
  comment: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface IReviewResponse extends IBaseResponse {
  data: IReview | null | IReview[];
}

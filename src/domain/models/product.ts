import { IBaseResponse } from "./base-response";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  amount: number;
  durationOfRentage: number;
  condition: string;
  availabilityStartDate: Date;
  availabilityEndDate: Date;
  availabilityStartTime: Date;
  availabilityEndTime: Date;
 
}

export const emptyProduct: IProduct = {
  id: "",
  name: "",
  description: "",
  longDescription: "",
  amount: 0,
  durationOfRentage: 0,
  condition: "",
  availabilityStartDate: new Date(),
  availabilityEndDate: new Date(),
  availabilityStartTime: new Date(),
  availabilityEndTime: new Date()
};

export interface IProductResponse extends IBaseResponse {
  data: IProduct | null | IProduct[];
}

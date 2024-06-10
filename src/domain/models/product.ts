import { IBaseResponse } from "./base-response";

export interface IProduct {
  id: string;
  name: string;
  storeId: string;
  amount: number;

  description: string;

  durationOfRentage: number;
  condition: string;
  availabilityStartDate: Date;
  availabilityEndDate: Date;
  availabilityStartTime: Date;
  availabilityEndTime: Date;
  images: string[];
}

export const emptyProduct: IProduct = {
  id: "",
  name: "",
  storeId: "",
  description: "",
  amount: 0,
  durationOfRentage: 0,
  condition: "",
  availabilityStartDate: new Date(),
  availabilityEndDate: new Date(),
  availabilityStartTime: new Date(),
  availabilityEndTime: new Date(),
  images: [] 
};

export interface IProductResponse extends IBaseResponse {
  data: IProduct | null | IProduct[];
}

import { IBaseResponse } from "./base-response";

export interface IProductImage {
  id: string;
  productName: string;
  productImageId: string;
  imageUrl: string;
}

export const emptyProductImage: IProductImage = {
  id: "",
  productImageId: "",
  imageUrl: "",
  productName: ""
};

export interface IProductImageResponse extends IBaseResponse {
  data: IProductImage | null | IProductImage[];
}

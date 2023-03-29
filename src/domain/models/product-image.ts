import { IBaseResponse } from "./base-response";

export interface IProductImage {
  id: string;
  productId: string;
  name: string;
  slug: string;
  url: string;
  shortDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyProductImage: IProductImage = {
    id: "",
    productId: "",
    slug: "",
    name: "",
    url: "",
    shortDescription: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

export interface IProductImageResponse extends IBaseResponse {
  data: IProductImage | null;
  token?: string
}

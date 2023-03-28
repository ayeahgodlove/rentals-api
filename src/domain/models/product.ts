import { IBaseResponse } from "./base-response";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  categoryId: string;
  subCategoryId: string;
  quantity: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}

export const emptyProduct: IProduct = {
  id: "",
  name: "",
  price: 0,
  shortDescription: "",
  description: "",
  categoryId: "",
  subCategoryId: "",
  quantity: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  slug: "",
};

export interface IProductResponse extends IBaseResponse {
  data: IProduct | null;
}

import { IBaseResponse } from "./base-response";
import { IImage, emptyImage } from "./image.model";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryId: string;
  subCategoryId: string;
  quantity: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  images: IImage[]
}

export const emptyProduct: IProduct = {
  id: "",
  name: "",
  price: 0,
  description: "",
  categoryId: "",
  subCategoryId: "",
  quantity: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  slug: "",
  images: [emptyImage]
};

export interface IProductResponse extends IBaseResponse {
  data: IProduct | null;
}

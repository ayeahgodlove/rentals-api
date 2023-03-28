import { IBaseResponse } from "./base-response";

export interface IImage {
  id: string;
  productId: string;
  slug: string;
  url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyImage: IImage = {
    id: "",
    productId: "",
    slug: "",
    url: "",
    description: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

export interface IImageResponse extends IBaseResponse {
  data: IImage | null;
  token?: string
}

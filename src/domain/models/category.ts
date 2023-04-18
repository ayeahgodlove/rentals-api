import { IBaseResponse } from "./base-response";

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyCategory: ICategory = {
  id: "",
  name: "",
  slug: "",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface ICategoryResponse extends IBaseResponse {
  data: ICategory | null | ICategory[];
}

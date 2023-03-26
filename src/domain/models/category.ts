import { IBaseResponse } from "./base-response";

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISubCategory extends ICategory {
  categoryId: string;
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

export const emptySubCategory: ISubCategory = {
  ...emptyCategory,
  categoryId: '',
};
export interface ISubCategoryResponse extends IBaseResponse {
  data: ISubCategory | null |ISubCategory[];
}

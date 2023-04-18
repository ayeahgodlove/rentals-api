import { IBaseResponse } from "./base-response";

export interface IRole {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyRole: IRole = {
  id: "",
  name: "",
  slug: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface IRoleResponse extends IBaseResponse {
  data: IRole | null | IRole[];
}

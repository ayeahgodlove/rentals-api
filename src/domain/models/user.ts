import { IBaseResponse } from "./base-response";

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  city: string; //town
  country: string;
  address: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyUser: IUser = {
  id: "",
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phoneNumber: "",
  whatsappNumber: "",
  city: "",
  country: "",
  address: "",
  password: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface IUserResponse extends IBaseResponse {
  user: IUser | null | IUser[];
}
import { IBaseResponse } from "./base-response";

export interface IUserDoc {
  id: string;
  userId: string;
  idCard1: string;
  idCard2: string;
  passportPhoto: string;
}

export const emptyUserDoc: IUserDoc = {
  id: "",
  userId: "",
  idCard1: "",
  idCard2: "",
  passportPhoto: "",
};

export interface IUserDocResponse extends IBaseResponse {
  data: IUserDoc | null | IUserDoc[];
}

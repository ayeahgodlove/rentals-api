// src/presentation/dtos/UserRequestDto.ts

import {  IsNotEmpty, IsString, IsStrongPassword, IsEmail } from "class-validator";
import { IUser, emptyUser } from "../../domain/models/user";
import { v4 } from "uuid";
import slugify from "slugify";

export class UserRequestDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  constructor(data: IUser) {
    this.username = data.username;
    this.fullname = data.fullname;
    this.email = data.email;
    this.role = data.role;
    this.address = data.address;
    this.password = data.password;
  }

  toData(): IUser {
    return {
      ...emptyUser,
      id: v4(),
      slug:  slugify(this.fullname, {lower: true, replacement: "-"}),
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      role: this.role,
      address: this.address,
      password: this.password
    };
  }

  toUpdateData(data: IUser): IUser {
    return {
      id: data.id,
      slug: data.slug,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      username: data.username,
      fullname: data.fullname,
      address: data.address,
      email: data.email,
      password: data.password,
      role: data.role
    }
  }
}

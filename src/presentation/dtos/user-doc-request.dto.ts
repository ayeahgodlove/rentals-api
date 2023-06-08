// src/presentation/dtos/userDoc-request.dto.ts

import { IsNotEmpty, IsString, Length } from "class-validator";
import { IUserDoc, emptyUserDoc } from "../../domain/models/user-doc";
import { nanoid } from "nanoid";
import slugify from "slugify";

// id: string;
// userId: string;
// idCard1: string;
// idCard2: string;
// passportPhoto: string;

export class UserDocRequestDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  idCard1: string;

  @IsNotEmpty()
  @IsString()
  idCard2: string;

  @IsNotEmpty()
  @IsString()
  passportPhoto: string;

  constructor(data: IUserDoc) {
    this.userId = data.userId;
    this.idCard1 = data.idCard1;
    this.idCard2 = data.idCard2;
    this.passportPhoto = data.passportPhoto;
  }

  toData(): IUserDoc {
    return {
      ...emptyUserDoc,
      id: nanoid(10),
      userId: this.userId,
      idCard1: this.idCard1,
      idCard2: this.idCard2,
      passportPhoto: this.passportPhoto,
    };
  }

  toUpdateData(data: IUserDoc): IUserDoc {
    return {
      id: data.id,
      userId: data.userId,
      idCard1: data.idCard1,
      idCard2: data.idCard2,
      passportPhoto: data.passportPhoto,
    };
  }
}

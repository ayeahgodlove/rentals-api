"use strict";
// src/presentation/dtos/userDoc-request.dto.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocRequestDto = void 0;
const user_doc_1 = require("../../domain/models/user-doc");
const nanoid_1 = require("nanoid");
// id: string;
// userId: string;
// idCard1: string;
// idCard2: string;
// passportPhoto: string;
class UserDocRequestDto {
    // @IsNotEmpty()
    // @IsString()
    userId;
    // @IsNotEmpty()
    // @IsString()
    idCard1;
    // @IsNotEmpty()
    // @IsString()
    idCard2;
    // @IsNotEmpty()
    // @IsString()
    passportPhoto;
    constructor(data) {
        this.userId = data.userId;
        this.idCard1 = data.idCard1;
        this.idCard2 = data.idCard2;
        this.passportPhoto = data.passportPhoto;
    }
    toData() {
        return {
            ...user_doc_1.emptyUserDoc,
            id: (0, nanoid_1.nanoid)(10),
            userId: this.userId,
            idCard1: this.idCard1,
            idCard2: this.idCard2,
            passportPhoto: this.passportPhoto,
        };
    }
    toUpdateData(data) {
        return {
            id: data.id,
            userId: data.userId,
            idCard1: data.idCard1,
            idCard2: data.idCard2,
            passportPhoto: data.passportPhoto,
        };
    }
}
exports.UserDocRequestDto = UserDocRequestDto;

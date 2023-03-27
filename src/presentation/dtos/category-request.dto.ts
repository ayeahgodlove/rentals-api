// src/presentation/dtos/CategoryRequestDto.ts

import {  IsNotEmpty, IsString, Length } from "class-validator";
import { ICategory, emptyCategory } from "../../domain/models/category";
import { v4 } from "uuid";
import slugify from "slugify";

export class CategoryRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  constructor(data: ICategory) {
    this.name = data.name;
    this.description = data.description;
  }

  toData(): ICategory {
    return {
      ...emptyCategory,
      id: v4(),
      slug:  slugify(this.name, {lower: true, replacement: "-"}),
      name: this.name,
      description: this.description,
    };
  }

  toUpdateData(data: ICategory): ICategory {
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  }
}

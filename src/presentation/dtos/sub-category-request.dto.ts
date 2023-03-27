// src/presentation/dtos/SubCategoryRequestDto.ts

import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";
import { ISubCategory, emptySubCategory } from "../../domain/models/category";
import slugify from "slugify";
import { v4 } from "uuid";

export class SubCategoryRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  constructor(data: ISubCategory) {
    this.name = data.name;
    this.description = data.description;
    this.categoryId = data.categoryId;
  }

  toData(): ISubCategory {
    return {
      ...emptySubCategory,
      id: v4(),
      slug:  slugify(this.name, {lower: true, replacement: "-"}),
      name: this.name,
      description: this.description,
      categoryId: this.categoryId
    };
  }

  toUpdateData(data: ISubCategory): ISubCategory {
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      categoryId: data.categoryId,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  }
}

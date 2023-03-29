// src/presentation/dtos/ProductImageRequestDto.ts

import {  IsNotEmpty, IsString, Length } from "class-validator";
import { IProductImage, emptyProductImage } from "../../domain/models/product-image";
import { v4 } from "uuid";
import slugify from "slugify";

export class ProductImageRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  name: string;

  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  constructor(data: IProductImage) {
    this.name = data.name;
    this.shortDescription = data.shortDescription;
    this.url = data.url;
    this.productId = data.productId
  }

  toData(): IProductImage {
    return {
      ...emptyProductImage,
      id: v4(),
      slug:  slugify(this.name, {lower: true, replacement: "-"}),
      name: this.name,
      shortDescription: this.shortDescription,
      productId: this.productId,
      url: this.url,
    };
  }

  toUpdateData(data: IProductImage): IProductImage {
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      shortDescription: this.shortDescription,
      productId: this.productId,
      url: this.url,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  }
}
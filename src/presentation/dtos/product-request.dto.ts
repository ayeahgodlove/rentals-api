// src/presentation/dtos/ProductRequestDto.ts

import {  IsNotEmpty, IsString, IsNumber } from "class-validator";
import { IProduct, emptyProduct } from "../../domain/models/product";
import { v4 } from "uuid";
import slugify from "slugify";

export class ProductRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  subCategoryId: string;



  constructor(data: IProduct) {
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.categoryId = data.categoryId;
    this.subCategoryId = data.subCategoryId;
    this.shortDescription = data.shortDescription;
    this.quantity = data.quantity;
  }

  toData(): IProduct {
    return {
      ...emptyProduct,
      id: v4(),
      slug:  slugify(this.name, {lower: true, replacement: "-"}),
      name: this.name,
      description: this.description,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
      price: this.price,
      shortDescription: this.shortDescription,
      quantity: this.quantity
    };
  }

  toUpdateData(data: IProduct): IProduct {
    return {
      id: data.id,
      slug: data.slug,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      price: data.price,
      name: data.name,
      description: data.description,
      categoryId: data.categoryId,
      subCategoryId: data.subCategoryId,
      quantity: data.quantity,
      shortDescription: data.shortDescription
    }
  }
}

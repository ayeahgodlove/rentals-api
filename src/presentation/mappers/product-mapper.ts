// src/presentation/mappers/ProductMapper.ts

import { Product } from "../../data/entities/product";
import { IProduct } from "../../domain/models/product";

export class ProductMapper {
  toDTO(product: Product): IProduct {
    const productDTO: IProduct = {
      id: `${product.id}`,
      name: product.name,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      slug: product.slug,
      description: product.description,
      price: product.price,
      shortDescription: product.shortDescription,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId,
      quantity: product.quantity
    };
    return productDTO;
  }
  toDTOs(products: Product[]): IProduct[] {
    const _products = products.map(product => {
      const productDTO: IProduct = {
        id: `${product.id}`,
        name: product.name,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        slug: product.slug,
        description: product.description,
        price: product.price,
        shortDescription: product.shortDescription,
        categoryId: product.categoryId,
        subCategoryId: product.subCategoryId,
        quantity: product.quantity
    };

      return productDTO
    })
    return _products;
  }
}

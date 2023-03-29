// src/presentation/mappers/ProductImageMapper.ts

import { ProductImage } from "../../data/entities/product-image";
import { IProductImage } from "../../domain/models/product-image";

export class ProductImageMapper {
  toDTO(productImage: ProductImage): IProductImage {
    const productImageDTO: IProductImage = {
      id: `${productImage.id}`,
      name: productImage.name,
      createdAt: productImage.createdAt,
      updatedAt: productImage.updatedAt,
      shortDescription: productImage.shortDescription,
      productId: productImage.productId,
      slug: productImage.slug,
      url: productImage.url
    };
    return productImageDTO;
  }
  toDTOs(productImages: ProductImage[]): IProductImage[] {
    const _productImages = productImages.map(productImage => {
      const productImageDTO: IProductImage = {
        id: `${productImage.id}`,
        name: productImage.name,
        createdAt: productImage.createdAt,
        updatedAt: productImage.updatedAt,
        shortDescription: productImage.shortDescription,
        productId: productImage.productId,
        slug: productImage.slug,
        url: productImage.url
    };

      return productImageDTO
    })
    return _productImages;
  }
}

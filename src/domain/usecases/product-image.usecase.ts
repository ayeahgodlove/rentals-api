import { IProductImageRepository } from "../../data/repositories/contracts/iproduct-image.repository";
import { ProductImage } from "../../data/entities/product-image";
import { IProductImage } from "../models/product-image";

export class ProductImageUseCase {
    /**
     *
     */
    constructor(private readonly productImageRepository: IProductImageRepository) {}

    async createProductImage(productImage: IProductImage): Promise<ProductImage> {
        const existingProductImage = await this.productImageRepository.findByName(productImage.name);
    
        if (existingProductImage) {
          throw new Error('Product Image already exists');
        }
    
        // const _productImage = new ProductImage({productImage}); 
        //because it's already done in the Repository
        return this.productImageRepository.create(productImage);
      }
    
      async getAll(): Promise<ProductImage[]> {
        return this.productImageRepository.getAll();
      }

      async getProductImageById(id: string): Promise<ProductImage | null> {
        return this.productImageRepository.findById(id);
      }
    
      async getProductImageByName(productImage: IProductImage): Promise<ProductImage | null> {
        const _productImage = await this.productImageRepository.findByName(productImage.name);
    
        if (!_productImage) {
          return null;
        }
    
        return _productImage;
      }
    
      async updateProductImage(productImage: IProductImage): Promise<ProductImage> {
        return this.productImageRepository.update(productImage);
      }
    
      async deleteProductImage(id: string): Promise<void> {
        return this.productImageRepository.delete(id);
      }
}

import { IProductRepository } from "../../data/repositories/contracts/iproduct.repository";
import { Product } from "../../data/entities/product";
import { IProduct } from "../models/product";

export class ProductUseCase {
    /**
     *
     */
    constructor(private readonly productRepository: IProductRepository) {}

    async createProduct(product: IProduct): Promise<Product> {
        const existingProduct = await this.productRepository.findByName(product.name);
    
        if (existingProduct) {
          throw new Error('Product already exists');
        }
    
        // const _product = new Product({product}); 
        //because it's already done in the Repository
        return this.productRepository.create(product);
      }
    
      async getAll(): Promise<Product[]> {
        return this.productRepository.getAll();
      }

      async getProductById(id: string): Promise<Product | null> {
        return this.productRepository.findById(id);
      }
    
      async getProductByName(product: IProduct): Promise<Product | null> {
        const _product = await this.productRepository.findByName(product.name);
    
        if (!_product) {
          return null;
        }
    
        return _product;
      }
    
      async updateProduct(product: IProduct): Promise<Product> {
        return this.productRepository.update(product);
      }
    
      async deleteProduct(id: string): Promise<void> {
        return this.productRepository.delete(id);
      }
}

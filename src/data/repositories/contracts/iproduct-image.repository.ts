import { IProductImage } from "../../../domain/models/product-image";
import { ProductImage } from "../../entities/product-image";

export interface IProductImageRepository {
    create(productImage: IProductImage): Promise<ProductImage>;
    findById(id: string): Promise<ProductImage | null>;
    findByName(name: string): Promise<ProductImage | null>;
    getAll(): Promise<ProductImage[]>;
    update(productImage: IProductImage): Promise<ProductImage>;
    delete(id: string): Promise<void>;
  }
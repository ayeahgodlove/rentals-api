import { IProduct } from "../../../domain/models/product";
import { Product } from "../../entities/product";

export interface IProductRepository {
    create(product: IProduct): Promise<Product>;
    findById(id: string): Promise<Product | null>;
    findByName(name: string): Promise<Product | null>;
    getAll(): Promise<Product[]>;
    update(product: IProduct): Promise<Product>;
    delete(id: string): Promise<void>;
  }
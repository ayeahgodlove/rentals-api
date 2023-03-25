import { Category } from "../../entities/category";
import { ICategory } from "../../../domain/models/category";

export interface ICategoryRepository {
    create(category: ICategory): Promise<Category>;
    findById(id: string): Promise<Category | null>;
    findByName(name: string): Promise<Category | null>;
    getAll(): Promise<Category[]>;
    update(category: ICategory): Promise<Category>;
    delete(id: string): Promise<void>;
  }
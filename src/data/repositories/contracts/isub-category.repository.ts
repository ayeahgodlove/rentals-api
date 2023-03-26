import { SubCategory } from "../../entities/sub-category";
import { ISubCategory } from "../../../domain/models/category";

export interface ISubCategoryRepository {
    create(Subcategory: ISubCategory): Promise<SubCategory>;
    findById(id: string): Promise<SubCategory | null>;
    findByName(name: string): Promise<SubCategory | null>;
    getAll(): Promise<SubCategory[]>;
    update(Subcategory: ISubCategory): Promise<SubCategory>;
    delete(id: string): Promise<void>;
  }
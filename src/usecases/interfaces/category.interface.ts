import { ICategory } from "../../domain/models/category";


export interface CategoryRepository {
  getById(id: string): Promise<ICategory>;
  create(user: ICategory): Promise<ICategory>;
  getAll(): Promise<ICategory[]>;
}

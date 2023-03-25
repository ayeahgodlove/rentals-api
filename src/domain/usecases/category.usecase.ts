import { ICategoryRepository } from "../../data/repositories/contracts/icategory.repository";
import { Category } from "../../data/entities/category";
import { ICategory } from "../models/category";

export class CategoryUseCase {
    /**
     *
     */
    constructor(private readonly categoryRepository: ICategoryRepository) {}

    async createCategory(category: ICategory): Promise<Category> {
        const existingCategory = await this.categoryRepository.findByName(category.name);
    
        if (existingCategory) {
          throw new Error('Category already exists');
        }
    
        // const _category = new Category({category}); 
        //because it's already done in the Repository
        return this.categoryRepository.create(category);
      }
    
      async getAll(): Promise<Category[]> {
        return this.categoryRepository.getAll();
      }

      async getCategoryById(id: string): Promise<Category | null> {
        return this.categoryRepository.findById(id);
      }
    
      async getCategoryByNameAndPassword(category: ICategory): Promise<Category | null> {
        const _category = await this.categoryRepository.findByName(category.name);
    
        if (!_category) {
          return null;
        }
    
        return _category;
      }
    
      async updateCategory(category: ICategory): Promise<Category> {
        return this.categoryRepository.update(category);
      }
    
      async deleteCategory(id: string): Promise<void> {
        return this.categoryRepository.delete(id);
      }
}

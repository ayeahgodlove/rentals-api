import { ISubCategoryRepository } from "../../data/repositories/contracts/isub-category.repository";
import { SubCategory } from "../../data/entities/sub-category";
import { ISubCategory } from "../models/category";

export class SubCategoryUseCase {
    /**
     *
     */
    constructor(private readonly subCategoryRepository: ISubCategoryRepository) {}

    async createSubCategory(subCategory: ISubCategory): Promise<SubCategory> {
        const existingSubCategory = await this.subCategoryRepository.findByName(subCategory.name);
    
        if (existingSubCategory) {
          throw new Error('Sub Category already exists');
        }
    
        // const _subCategory = new SubCategory({subCategory}); 
        //because it's already done in the Repository
        return this.subCategoryRepository.create(subCategory);
      }
    
      async getAll(): Promise<SubCategory[]> {
        return this.subCategoryRepository.getAll();
      }

      async getSubCategoryById(id: string): Promise<SubCategory | null> {
        return this.subCategoryRepository.findById(id);
      }
    
      async getSubCategoryByName(subCategory: ISubCategory): Promise<SubCategory | null> {
        const _subCategory = await this.subCategoryRepository.findByName(subCategory.name);
    
        if (!_subCategory) {
          return null;
        }
    
        return _subCategory;
      }
    
      async updateSubCategory(subCategory: ISubCategory): Promise<SubCategory> {
        return this.subCategoryRepository.update(subCategory);
      }
    
      async deleteSubCategory(id: string): Promise<void> {
        return this.subCategoryRepository.delete(id);
      }
}

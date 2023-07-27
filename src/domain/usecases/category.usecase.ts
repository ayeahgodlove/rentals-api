import { Category } from "../../data/entities/category";
import { IRepository } from "../../data/repositories/contracts/repository.base";
import { ICategory } from "../models/category";
import slugify from "slugify";
export class CategoryUseCase {
  /**
   *
   */
  constructor(
    private readonly categoryRepository: IRepository<ICategory, Category>
  ) {}

  async createCategory(category: ICategory): Promise<Category> {
    const existingCategory = await this.categoryRepository.findByName(
      category.name
    );

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    // const _category = new Category({category});
    //because it's already done in the Repository
    return this.categoryRepository.create(category);
  }

  async getAll(
    page: number,
    pageSize: number
  ): Promise<{ rows: Category[]; count: number }> {
    return this.categoryRepository.getAll(page, pageSize);
  }

  async getCategoryById(id: string): Promise<Category | null> {
    return this.categoryRepository.findById(id);
  }

  async updateCategory(category: ICategory): Promise<Category> {
    const { id, name, description, updatedAt, createdAt } = category;
    const obj: ICategory = {
      id,
      name,
      slug: slugify(name, { lower: true, replacement: "-" }),
      description,
      updatedAt,
      createdAt,
    };
    return this.categoryRepository.update(obj);
  }

  async deleteCategory(id: string): Promise<void> {
    return this.categoryRepository.delete(id);
  }
}

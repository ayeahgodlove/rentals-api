import { SubCategory } from "../../entities/sub-category";
import { ISubCategory } from "../../../domain/models/sub-category";
import { NotFoundException } from "../../../shared/exceptions/not-found.exception";
import { IRepository } from "../contracts/repository.base";

export class SubCategoryRepository implements IRepository<ISubCategory, SubCategory> {
  /**
   *
   */
  constructor() {}

  /**
   * Receives a SubCategory as parameter
   * @Subcategory
   * returns void
   */
  async create(Subcategory: ISubCategory): Promise<SubCategory> {
    try {
      return await SubCategory.create<SubCategory>({ ...Subcategory });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns SubCategory
   */
  async findById(id: string): Promise<SubCategory | null> {
    try {
      const SubcategoryItem = await SubCategory.findByPk(id);

      if (!SubcategoryItem) {
        throw new NotFoundException("SubCategory", id);
      }
      return SubcategoryItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @name
   * returns SubCategory
   */
  async findByName(name: string): Promise<SubCategory | null> {
    try {
      const SubcategoryItem = await SubCategory.findOne({ where: { name } });
      return SubcategoryItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of SubCategory
   */
  async getAll(page: number, pageSize: number): Promise<{
    rows: SubCategory[],
    count: number;
  }> {
    const offset = (page - 1) * pageSize;
    try {
      const categories = await SubCategory.findAndCountAll({ limit: pageSize, offset });
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a SubCategory as parameter
   * @Subcategory
   * returns void
   */
  async update(Subcategory: ISubCategory): Promise<SubCategory> {
    const { id } = Subcategory;
    try {
      const SubcategoryItem: any = await SubCategory.findByPk(id);

      if (!SubcategoryItem) {
        throw new NotFoundException("SubCategory", id.toString());
      }

      return await SubcategoryItem?.update({ ...Subcategory });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id: string): Promise<void> {
    try {
      const SubcategoryItem = await SubCategory.findByPk(id);

      if (!SubcategoryItem) {
        throw new NotFoundException("SubCategory", id);
      }

      await SubcategoryItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

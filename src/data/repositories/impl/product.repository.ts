import slugify from "slugify";
import { Product } from "../../entities/product";
import { IProductRepository } from "../contracts/iproduct.repository";
import { IProduct } from "../../../domain/models/product";

export class ProductRepository implements IProductRepository {
  /**
   *
   */
  constructor() {}

  /**
   * Receives a Product as parameter
   * @product
   * returns void
   */
  async create(product: IProduct): Promise<Product> {
    try {
      return await Product.create<Product>(product as any);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Product
   */
  async findById(id: string): Promise<Product | null> {
    try {
      const productItem = await Product.findByPk(id);
      return productItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @name
   * returns Category
   */
  async findByName(name: string): Promise<Product | null> {
    try {
      const productItem = await Product.findOne({ where: { name } });
      return productItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Product
   */
  async getAll(): Promise<Product[]> {
    try {
      const categories = await Product.findAll();
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Product as parameter
   * @product
   * returns void
   */
  async update(product: IProduct): Promise<Product> {
    const {
      id,
      name,
      price,
      shortDescription,
      description,
      categoryId,
      quantity,
      subCategoryId,
      updatedAt,
    } = product;
    try {
      const productItem: any = await Product.findByPk(id);
      return await productItem?.update({
        id,
        name,
        price,
        shortDescription,
        quantity,
        description,
        categoryId,
        subCategoryId,
        updatedAt,
      });
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
      const productItem = await Product.findByPk(id);
      await productItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

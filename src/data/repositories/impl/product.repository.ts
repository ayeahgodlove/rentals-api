import { Product } from "../../entities/product";
import { IProduct } from "../../../domain/models/product";
import { NotFoundException } from "../../../shared/exceptions/not-found.exception";
import { IRepository } from "../contracts/repository.base";

export class ProductRepository implements IRepository<IProduct, Product> {
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
      return await Product.create<Product>({ ...product });
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

      if (!productItem) {
        throw new NotFoundException("Product", id);
      }
      return productItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @name
   * returns Product
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
    const { id } = product;
    try {
      const productItem: any = await Product.findByPk(id);

      console.log(product);
      if (!productItem) {
        throw new NotFoundException("Product", id.toString());
      }

      return await productItem?.update({ ...product });
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

      if (!productItem) {
        throw new NotFoundException("Product", id);
      }

      await productItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

import { Request, Response } from "express";
import {
  ICategory,
  ICategoryResponse,
  emptyCategory,
} from "../../domain/models/category";
import { CategoryUseCase } from "../../domain/usecases/category.usecase";
import slugify from "slugify";
import { v4 } from "uuid";
import { CategoryRepository } from "../../data/repositories/impl/category.repository";

const categoryRepository = new CategoryRepository();
const categoryUseCase = new CategoryUseCase(categoryRepository);

export class CategoriesController {
  async createCategory(req: Request, res: Response<ICategoryResponse>): Promise<void> {
    const { name, description } = req.body;

    try {
      const category: ICategory = {
        ...emptyCategory,
        id: v4(),
        name,
        description,
        slug: slugify(name, "-"),
      };
      const categoryResponse = await categoryUseCase.createCategory(category);
      res.status(201).json({
        data: categoryResponse as any,
        message: "Category d Successfully!",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: "Category Creation Failed!" + error.message,
        validationErrors: error,
        success: true,
      });
    }

    res.status(201).send();
  }

  async getCategoryById(
    req: Request,
    res: Response<ICategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const category = await categoryUseCase.getCategoryById(id);

      if (!category) {
        res.status(404).json({
          data: null,
          message: "Category not found",
          validationErrors: [],
          success: false,
        });
        return;
      }

      res.json({
        data: category as any,
        message: "Category Found!",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: error,
        success: false,
      });
    }
  }

  async updateCategory(
    req: Request,
    res: Response<ICategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const category = await categoryUseCase.getCategoryById(id);

      if (!category) {
        res.status(404).json({
          data: null,
          message: "Category not found",
          validationErrors: [],
          success: false,
        });
        return;
      }

      const { name, description } = req.body;
      if (name) {
        category.name = name;
      }
      if (description) {
        category.description = description;
      }

      const obj: ICategory = {
        id: `${category.id}`,
        name,
        description,
        slug: `${category.slug}`,
        createdAt: new Date(category.createdAt),
        updatedAt: new Date(category.updatedAt),
      };
      const updatedCategory = await categoryUseCase.updateCategory(obj);

      res.json({
        data: updatedCategory as any,
        message: "Category Updated Successfully!",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [],
        success: false,
      });
    }
  }

  async deleteCategory(
    req: Request,
    res: Response<ICategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const category = await categoryUseCase.getCategoryById(id);

      if (!category) {
        res
          .status(404)
          .json({
            data: null,
            message: "Category not found",
            validationErrors: [],
            success: false,
          });
        return;
      }

      await categoryUseCase.deleteCategory(id);

      res.sendStatus(204);
    } catch (error: any) {
      res
        .status(400)
        .json({
          message: error.message,
          data: null,
          validationErrors: [],
          success: true,
        });
    }
  }
}

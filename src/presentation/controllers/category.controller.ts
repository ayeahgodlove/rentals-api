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
import { CategoryMapper } from "../mappers/category-mapper";

const categoryRepository = new CategoryRepository();
const categoryUseCase = new CategoryUseCase(categoryRepository);
const categoryMapper = new CategoryMapper();

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
      const categoryDTO = categoryMapper.toDTO(categoryResponse) //convert entity to DTO

      res.status(201).json({
        data: categoryDTO,
        message: "Category created Successfully!",
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

    res.status(201).send();
  }

  async getAll(
    req: Request,
    res: Response<ICategoryResponse>
  ): Promise<void> {
    try {

      const categories = await categoryUseCase.getAll();
      const categoryDTOs = categoryMapper.toDTOs(categories)
      res.json({
        data: categories as any,
        message: "Success",
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
      const categoryDTO = categoryMapper.toDTO(category)
      res.json({
        data: categoryDTO,
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

      const categoryDTO1 = categoryMapper.toDTO(category)

      const updatedCategory = await categoryUseCase.updateCategory(categoryDTO1);
      const categoryDTO2 = categoryMapper.toDTO(updatedCategory);

      res.json({
        data: categoryDTO2,
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
          throw new Error(`Category not found!`);
      }

      const categoryDTO = categoryMapper.toDTO(category)

      await categoryUseCase.deleteCategory(id);

      res.status(204).json({
        message: `${categoryDTO.name}`,
        validationErrors: [],
        success: true,
        data: null
      });
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

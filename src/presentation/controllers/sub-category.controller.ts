import { Request, Response } from "express";
import {
  ISubCategory,
  ISubCategoryResponse,
  emptySubCategory,
} from "../../domain/models/category";
import { SubCategoryUseCase } from "../../domain/usecases/sub-category.usecase";
import slugify from "slugify";
import { v4 } from "uuid";
import { SubCategoryRepository } from "../../data/repositories/impl/sub-category.repository";
import { SubCategoryMapper } from "../mappers/sub-category-mapper";
import { validate } from "class-validator";
import { SubCategory } from "../../data/entities/sub-category";
import { displayValidationErrors } from "../../utils/displayValidationErrors";

const subCategoryRepository = new SubCategoryRepository();
const subCategoryUseCase = new SubCategoryUseCase(subCategoryRepository);
const subCategoryMapper = new SubCategoryMapper();

export class SubCategoriesController {
  async createSubCategory(
    req: Request,
    res: Response<ISubCategoryResponse>
  ): Promise<void> {
    const { name, description, categoryId } = req.body;
    const subCategory = new SubCategory({
      id: v4(),
      name,
      description,
      slug: slugify(name, "-"),
      categoryId,
    });

    const validationErrors = await validate(subCategory);
    if (validationErrors.length > 0) {
      res.status(400).json({
        data: null,
        message: "Validations failed!",
        success: false,
        validationErrors: displayValidationErrors(validationErrors) as any,
      });
    }
    else {
      try {
     
        const subCategoryResponse = await subCategoryUseCase.createSubCategory({
          ...emptySubCategory,
          id: v4(),
          name,
          description,
          slug: slugify(name, "-"),
          categoryId,
        });
  
        res.status(201).json({
          data: subCategoryResponse as any,
          message: "Sub Category created Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(500).json({
          data: null,
          message: error.message,
          validationErrors: [],
          success: false,
        });
      }
    }
  }

  async getAll(
    req: Request,
    res: Response<ISubCategoryResponse>
  ): Promise<void> {
    try {
      const subCategories = await subCategoryUseCase.getAll();
      const subCategoryDTOs = subCategoryMapper.toDTOs(subCategories);
      res.json({
        data: subCategories as any,
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

  async getSubCategoryById(
    req: Request,
    res: Response<ISubCategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const subCategory = await subCategoryUseCase.getSubCategoryById(id);

      if (!subCategory) {
        res.status(404).json({
          data: null,
          message: "Sub Category not found",
          validationErrors: [],
          success: false,
        });
        return;
      }
      const subCategoryDTO = subCategoryMapper.toDTO(subCategory);
      res.json({
        data: subCategoryDTO,
        message: "Sub Category Found!",
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

  async updateSubCategory(
    req: Request,
    res: Response<ISubCategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const subCategory = await subCategoryUseCase.getSubCategoryById(id);

      if (!subCategory) {
        res.status(404).json({
          data: null,
          message: "SubCategory not found",
          validationErrors: [],
          success: false,
        });
        return;
      }

      const { name, description, categoryId } = req.body;
      if (name) {
        subCategory.name = name;
      }
      if (description) {
        subCategory.description = description;
      }
      if (categoryId) {
        subCategory.categoryId = categoryId;
      }

      const subCategoryDTO1 = subCategoryMapper.toDTO(subCategory);

      const updatedSubCategory = await subCategoryUseCase.updateSubCategory(
        subCategoryDTO1
      );
      // const subCategoryDTO2 = subCategoryMapper.toDTO(updatedSubCategory);

      res.json({
        data: updatedSubCategory as any,
        message: "SubCategory Updated Successfully!",
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

  async deleteSubCategory(
    req: Request,
    res: Response<ISubCategoryResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const subCategory = await subCategoryUseCase.getSubCategoryById(id);

      if (!subCategory) {
        res.status(404);
        throw new Error(`SubCategory not found!`);
      }

      const subCategoryDTO = subCategoryMapper.toDTO(subCategory);

      await subCategoryUseCase.deleteSubCategory(id);

      res.status(204).json({
        message: `${subCategoryDTO.name}`,
        validationErrors: [],
        success: true,
        data: null,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        data: null,
        validationErrors: [],
        success: true,
      });
    }
  }
}

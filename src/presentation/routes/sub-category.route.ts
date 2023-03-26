// src/infrastructure/routes/category-routes.ts
import { Router } from 'express';
import { SubCategoriesController } from '../controllers/sub-category.controller';

const subCategoryController = new SubCategoriesController();

const subCategoryRouter = Router();

subCategoryRouter.get('', subCategoryController.getAll);
subCategoryRouter.get('/:id', subCategoryController.getSubCategoryById);
subCategoryRouter.post('', subCategoryController.createSubCategory);
subCategoryRouter.put('/:id', subCategoryController.updateSubCategory);
subCategoryRouter.delete('/:id', subCategoryController.deleteSubCategory);

export default subCategoryRouter;

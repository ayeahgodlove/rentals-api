// src/infrastructure/routes/category-routes.ts
import { Router } from 'express';
import { CategoriesController } from '../controllers/category.controller';

const categoryController = new CategoriesController();

const categoryRouter = Router();

categoryRouter.get('', categoryController.getAll);
categoryRouter.get('/:id', categoryController.getCategoryById);
categoryRouter.post('', categoryController.createCategory);
categoryRouter.put('/:id', categoryController.updateCategory);
categoryRouter.delete('/:id', categoryController.deleteCategory);

export default categoryRouter;

// src/infrastructure/routes/category-routes.ts
import { Router } from 'express';
import { CategoriesController } from '../controllers/category.controller';

const categoryController = new CategoriesController();

const categoryRouter = Router();

categoryRouter.post('/api/categories', categoryController.createCategory);
categoryRouter.get('/api/categories/:id', categoryController.getCategoryById);
categoryRouter.put('/api/categories/:id', categoryController.updateCategory);
categoryRouter.delete('/api/categories/:id', categoryController.deleteCategory);

export default categoryRouter;

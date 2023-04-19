"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/category-routes.ts
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const categoryController = new category_controller_1.CategoriesController();
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('', categoryController.getAll);
categoryRouter.get('/:id', categoryController.getCategoryById);
categoryRouter.post('', categoryController.createCategory);
categoryRouter.put('/:id', categoryController.updateCategory);
categoryRouter.delete('/:id', categoryController.deleteCategory);
exports.default = categoryRouter;

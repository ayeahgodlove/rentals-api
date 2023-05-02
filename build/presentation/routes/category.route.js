"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/category-routes.ts
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const is_authenticated_middleware_1 = require("../../shared/middlewares/is-authenticated.middleware");
const categoryController = new category_controller_1.CategoriesController();
const categoryRouter = (0, express_1.Router)();
categoryRouter.get("", is_authenticated_middleware_1.isAuthenticatedMiddleware, categoryController.getAll);
categoryRouter.get("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, categoryController.getCategoryById);
categoryRouter.post("", is_authenticated_middleware_1.isAuthenticatedMiddleware, categoryController.createCategory);
categoryRouter.put("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, categoryController.updateCategory);
categoryRouter.delete("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, categoryController.deleteCategory);
exports.default = categoryRouter;

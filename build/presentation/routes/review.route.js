"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/review-routes.ts
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
const reviewController = new review_controller_1.ReviewsController();
const reviewRouter = (0, express_1.Router)();
reviewRouter.get("", reviewController.getAll);
reviewRouter.get("/:id", reviewController.getReviewById);
reviewRouter.post("", reviewController.createReview);
reviewRouter.put("/:id", reviewController.updateReview);
reviewRouter.delete("/:id", reviewController.deleteReview);
exports.default = reviewRouter;

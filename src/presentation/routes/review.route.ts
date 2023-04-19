// src/infrastructure/routes/review-routes.ts
import { Router } from "express";
import { ReviewsController } from "../controllers/review.controller";

const reviewController = new ReviewsController();

const reviewRouter = Router();

reviewRouter.get("", reviewController.getAll);
reviewRouter.get("/:id", reviewController.getReviewById);
reviewRouter.post("", reviewController.createReview);
reviewRouter.put("/:id", reviewController.updateReview);
reviewRouter.delete("/:id", reviewController.deleteReview);

export default reviewRouter;

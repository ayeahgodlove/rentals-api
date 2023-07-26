"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUseCase = void 0;
class ReviewUseCase {
    reviewRepository;
    /**
     *
     */
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async createReview(review) {
        return this.reviewRepository.create(review);
    }
    async getAll(page, pageSize) {
        return this.reviewRepository.getAll(page, pageSize);
    }
    async getReviewById(id) {
        return this.reviewRepository.findById(id);
    }
    async updateReview(review) {
        const obj = {
            ...review,
            updatedAt: new Date(),
        };
        return this.reviewRepository.update(obj);
    }
    async deleteReview(id) {
        return this.reviewRepository.delete(id);
    }
}
exports.ReviewUseCase = ReviewUseCase;

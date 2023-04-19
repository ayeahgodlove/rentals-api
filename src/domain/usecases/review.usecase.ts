import { Review } from "../../data/entities/review";
import { IRepository } from "../../data/repositories/contracts/repository.base";
import { IReview } from "../models/review";

export class ReviewUseCase {
  /**
   *
   */
  constructor(
    private readonly reviewRepository: IRepository<IReview, Review>
  ) {}

  async createReview(review: IReview): Promise<Review> {
    return this.reviewRepository.create(review);
  }

  async getAll(): Promise<Review[]> {
    return this.reviewRepository.getAll();
  }

  async getReviewById(id: string): Promise<Review | null> {
    return this.reviewRepository.findById(id);
  }

  async updateReview(review: IReview): Promise<Review> {
    const obj: IReview = {
      ...review,
      updatedAt: new Date(),
    };
    return this.reviewRepository.update(obj);
  }

  async deleteReview(id: string): Promise<void> {
    return this.reviewRepository.delete(id);
  }
}

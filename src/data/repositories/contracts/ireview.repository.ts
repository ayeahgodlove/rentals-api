import { IReview } from "../../../domain/models/review";
import { Review } from "../../entities/review";

export interface IReviewRepository {
    create(review: IReview): Promise<Review>;
    findById(id: string): Promise<Review | null>;
    getAll(): Promise<Review[]>;
    update(review: IReview): Promise<Review>;
    delete(id: string): Promise<void>;
  }
// src/presentation/mappers/ReviewMapper.ts

import { Review } from "../../data/entities/review";
import { IReview } from "../../domain/models/review";

export class ReviewMapper {
  toDTO(review: Review): IReview {
    const reviewDTO: IReview = {
      id: `${review.id}`,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      description: review.description,
      rating: review.rating,
      userId: review.userId,
      productId: review.productId
    };
    return reviewDTO;
  }
  toDTOs(reviews: Review[]): IReview[] {
    const _reviews = reviews.map(review => {
      const reviewDTO: IReview = {
        id: `${review.id}`,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        rating: review.rating,
        userId: review.userId,
        productId: review.productId,
        description: review.description
    };

      return reviewDTO
    })
    return _reviews;
  }
}

// src/presentation/mappers/category-mapper.ts

import { Category } from "../../data/entities/category";
import { Review } from "../../data/entities/review";
import { Role } from "../../data/entities/role";
import { User } from "../../data/entities/user";
import { UserDoc } from "../../data/entities/user-doc";
import { ICategory } from "../../domain/models/category";
import { IReview } from "../../domain/models/review";
import { IRole } from "../../domain/models/role";
import { IUser } from "../../domain/models/user";
import { IUserDoc } from "../../domain/models/user-doc";

export class CategoryMapper {
  toDTO(category: Category): ICategory {
    const entity = category.toJSON<ICategory>();
    return entity;
  }
  toDTOs(categories: Category[]): ICategory[] {
    const _categories = categories.map((category) => {
      const entity = category.toJSON<ICategory>();
      return entity;
    });
    return _categories;
  }
}

export class UserMapper {
  toDTO(user: User): IUser {
    const entity = user.toJSON<IUser>();
    return entity;
  }
  toDTOs(users: User[]): IUser[] {
    const _users = users.map((user) => {
      const entity = user.toJSON<IUser>();
      return entity;
    });
    return _users;
  }
}

export class UserDocMapper {
  toDTO(userDoc: UserDoc): IUserDoc {
    const entity = userDoc.toJSON<IUserDoc>();
    return entity;
  }
  toDTOs(userDocs: UserDoc[]): IUserDoc[] {
    const _userDocs = userDocs.map((userDoc) => {
      const entity = userDoc.toJSON<IUserDoc>();
      return entity;
    });
    return _userDocs;
  }
}

export class RoleMapper {
  toDTO(role: Role): IRole {
    const entity = role.toJSON<IRole>();
    return entity;
  }
  toDTOs(roles: Role[]): IRole[] {
    const _roles = roles.map((role) => {
      const entity = role.toJSON<IRole>();
      return entity;
    });
    return _roles;
  }
}

export class ReviewMapper {
  toDTO(review: Review): IReview {
    const entity = review.toJSON<IReview>();
    return entity;
  }
  toDTOs(reviews: Review[]): IReview[] {
    const _reviews = reviews.map((review) => {
      const entity = review.toJSON<IReview>();
      return entity;
    });
    return _reviews;
  }
}

// src/presentation/mappers/category-mapper.ts

import { Branch } from "../../data/entities/branch";
import { Category } from "../../data/entities/category";
import { Review } from "../../data/entities/review";
import { Role } from "../../data/entities/role";
import { Tag } from "../../data/entities/tag";
import { User } from "../../data/entities/user";
import { UserDoc } from "../../data/entities/user-doc";
import { IBranch } from "../../domain/models/branch";
import { ICategory } from "../../domain/models/category";
import { IReview } from "../../domain/models/review";
import { IRole } from "../../domain/models/role";
import { ITag } from "../../domain/models/tag";
import { IUser } from "../../domain/models/user";
import { IUserDoc } from "../../domain/models/user-doc";
import { IStore } from "../../domain/models/store";
import { Store } from "../../data/entities/store";
import { Product } from "../../data/entities/product";
import { IProduct } from "../../domain/models/product";
import { ProductImage } from "../../data/entities/product-image";
import { IProductImage } from "../../domain/models/product-image";
import { SubCategory } from "../../data/entities/sub-category";
import { ISubCategory } from "../../domain/models/sub-category";

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

export class SubCategoryMapper {
  toDTO(subCategory: SubCategory): ISubCategory {
    const entity = subCategory.toJSON<ISubCategory>();
    return entity;
  }
  toDTOs(subCategories: SubCategory[]): ISubCategory[] {
    const _subCategories = subCategories.map((subCategory) => {
      const entity = subCategory.toJSON<ISubCategory>();
      return entity;
    });
    return _subCategories;
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

export class TagMapper {
  toDTO(tag: Tag): ITag {
    const entity = tag.toJSON<ITag>();
    return entity;
  }
  toDTOs(tags: Tag[]): ITag[] {
    const _tags = tags.map((tag) => {
      const entity = tag.toJSON<ITag>();
      return entity;
    });
    return _tags;
  }
}

export class BranchMapper {
  toDTO(branch: Branch): IBranch {
    const entity = branch.toJSON<IBranch>();
    return entity;
  }
  toDTOs(branches: Branch[]): IBranch[] {
    const _branches = branches.map((branch) => {
      const entity = branch.toJSON<IBranch>();
      return entity;
    });
    return _branches;
  }
}

export class StoreMapper {
  toDTO(store: Store): IStore {
    const entity = store.toJSON<IStore>();
    return entity;
  }
  toDTOs(stores: Store[]): IStore[] {
    const _stores = stores.map((store) => {
      const entity = store.toJSON<IStore>();
      return entity;
    });
    return _stores;
  }
}

export class ProductMapper {
  toDTO(product: Product): IProduct {
    const entity = product.toJSON<IProduct>();
    return entity;
  }
  toDTOs(products: Product[]): IProduct[] {
    const _products = products.map((product) => {
      const entity = product.toJSON<IProduct>();
      return entity;
    });
    return _products;
  }
}
export class ProductImageMapper {
  toDTO(productImage: ProductImage): IProductImage {
    const entity = productImage.toJSON<IProductImage>();
    return entity;
  }
  toDTOs(productImages: ProductImage[]): IProductImage[] {
    const _productImages = productImages.map((productImage) => {
      const entity = productImage.toJSON<IProductImage>();
      return entity;
    });
    return _productImages;
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

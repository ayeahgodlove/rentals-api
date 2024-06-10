"use strict";
// src/presentation/mappers/category-mapper.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewMapper = exports.RoleMapper = exports.UserDocMapper = exports.ProductMapper = exports.StoreMapper = exports.BranchMapper = exports.TagMapper = exports.UserMapper = exports.SubCategoryMapper = exports.CategoryMapper = void 0;
class CategoryMapper {
    toDTO(category) {
        const entity = category.toJSON();
        return entity;
    }
    toDTOs(categories) {
        const _categories = categories.map((category) => {
            const entity = category.toJSON();
            return entity;
        });
        return _categories;
    }
}
exports.CategoryMapper = CategoryMapper;
class SubCategoryMapper {
    toDTO(subCategory) {
        const entity = subCategory.toJSON();
        return entity;
    }
    toDTOs(subCategories) {
        const _subCategories = subCategories.map((subCategory) => {
            const entity = subCategory.toJSON();
            return entity;
        });
        return _subCategories;
    }
}
exports.SubCategoryMapper = SubCategoryMapper;
class UserMapper {
    toDTO(user) {
        const entity = user.toJSON();
        return entity;
    }
    toDTOs(users) {
        const _users = users.map((user) => {
            const entity = user.toJSON();
            return entity;
        });
        return _users;
    }
}
exports.UserMapper = UserMapper;
class TagMapper {
    toDTO(tag) {
        const entity = tag.toJSON();
        return entity;
    }
    toDTOs(tags) {
        const _tags = tags.map((tag) => {
            const entity = tag.toJSON();
            return entity;
        });
        return _tags;
    }
}
exports.TagMapper = TagMapper;
class BranchMapper {
    toDTO(branch) {
        const entity = branch.toJSON();
        return entity;
    }
    toDTOs(branches) {
        const _branches = branches.map((branch) => {
            const entity = branch.toJSON();
            return entity;
        });
        return _branches;
    }
}
exports.BranchMapper = BranchMapper;
class StoreMapper {
    toDTO(store) {
        const entity = store.toJSON();
        return entity;
    }
    toDTOs(stores) {
        const _stores = stores.map((store) => {
            const entity = store.toJSON();
            return entity;
        });
        return _stores;
    }
}
exports.StoreMapper = StoreMapper;
class ProductMapper {
    toDTO(product) {
        const entity = product.toJSON();
        return entity;
    }
    toDTOs(products) {
        const _products = products.map((product) => {
            const entity = product.toJSON();
            return entity;
        });
        return _products;
    }
}
exports.ProductMapper = ProductMapper;
class UserDocMapper {
    toDTO(userDoc) {
        const entity = userDoc.toJSON();
        return entity;
    }
    toDTOs(userDocs) {
        const _userDocs = userDocs.map((userDoc) => {
            const entity = userDoc.toJSON();
            return entity;
        });
        return _userDocs;
    }
}
exports.UserDocMapper = UserDocMapper;
class RoleMapper {
    toDTO(role) {
        const entity = role.toJSON();
        return entity;
    }
    toDTOs(roles) {
        const _roles = roles.map((role) => {
            const entity = role.toJSON();
            return entity;
        });
        return _roles;
    }
}
exports.RoleMapper = RoleMapper;
class ReviewMapper {
    toDTO(review) {
        const entity = review.toJSON();
        return entity;
    }
    toDTOs(reviews) {
        const _reviews = reviews.map((review) => {
            const entity = review.toJSON();
            return entity;
        });
        return _reviews;
    }
}
exports.ReviewMapper = ReviewMapper;

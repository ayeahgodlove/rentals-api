// src/presentation/mappers/CategoryMapper.ts

import { Category } from "../../data/entities/category";
import { ICategory } from "../../domain/models/category";

export class CategoryMapper {
  toDTO(category: Category): ICategory {
    const entity = category.toJSON<ICategory>();
    return entity;
  }
  toDTOs(categories: Category[]): ICategory[] {
    const _categories = categories.map(category => {
      const entity = category.toJSON<ICategory>();
      return entity;
    })
    return _categories;
  }
}

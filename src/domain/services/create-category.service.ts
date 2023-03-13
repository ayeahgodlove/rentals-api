// src/domain/services/create-category.service.ts

import slugify from "slugify";
import { CategoryRepository } from "../../usecases/interfaces/category.interface";
import { ICategory, emptyCategory } from "../models/category";
import { uuid } from "uuidv4";


export class CreateCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) { }

    async execute({ name, description }: { name: string; description: string }): Promise<void> {
        const category: ICategory = {
            ...emptyCategory,
            id: uuid(),
            name,
            description,
            slug: slugify(name, "-"),
        };
        await this.categoryRepository.create(category);
    }
}

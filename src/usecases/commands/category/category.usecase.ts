import { ICategory } from "../../../domain/models/category";
import { CategoryRepository } from "../../interfaces/category.interface";

export class CreateCategoryUseCase {
    /**
     *
     */
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(category: ICategory): Promise<ICategory> {
        //validate category inputs

        const createdCategory = await this.categoryRepository.create(category);
        return createdCategory;
    }
}

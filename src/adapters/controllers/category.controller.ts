import { Request, Response } from "express";
import { ICategoryResponse } from "../../domain/models/category";
import { CreateCategoryUseCase } from "../../usecases/commands/category/category.usecase";

export class CategoriesController {
    constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

    async create(req: Request, res: Response<ICategoryResponse>): Promise<void> {
        const { name, description } = req.body;
        await this.createCategoryUseCase.execute({ name, description } as any);
        res.status(201).send();
    }
}
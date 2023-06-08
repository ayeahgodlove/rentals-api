import { Request, Response } from "express";
import {
  IUserDoc,
  IUserDocResponse,
  emptyUserDoc,
} from "../../domain/models/user-doc";
import { UserDocUseCase } from "../../domain/usecases/user-doc.usecase";
import { UserDocRepository } from "../../data/repositories/impl/user-doc.repository";
import { UserDocMapper } from "../mappers/mapper";
import { UserDocRequestDto } from "../dtos/user-doc-request.dto";
import { validate } from "class-validator";
import { displayValidationErrors } from "../../utils/displayValidationErrors";
import { NotFoundException } from "../../shared/exceptions/not-found.exception";

const userDocRepository = new UserDocRepository();
const userDocUseCase = new UserDocUseCase(userDocRepository);
const userDocMapper = new UserDocMapper();

export class UserDocsController {
  async createUserDoc(
    req: Request,
    res: Response<IUserDocResponse>
  ): Promise<void> {
    const dto = new UserDocRequestDto(req.body);
    const validationErrors = await validate(dto);

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const userDocResponse = await userDocUseCase.createUserDoc(
          dto.toData()
        );

        res.status(201).json({
          data: userDocResponse.toJSON<IUserDoc>(),
          message: "UserDoc created Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [],
          success: false,
        });
      }
    }
  }

  async getAll(req: Request, res: Response<any>): Promise<void> {
    try {
      const userDocs = await userDocUseCase.getAll();
      const userDocsDTO = userDocMapper.toDTOs(userDocs);

      res.json({
        data: userDocsDTO,
        message: "Success",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async getUserDocById(
    req: Request,
    res: Response<IUserDocResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const userDoc = await userDocUseCase.getUserDocById(id);
      if (!userDoc) {
        throw new NotFoundException("UserDoc", id);
      }
      const userDocDTO = userDocMapper.toDTO(userDoc);
      res.json({
        data: userDocDTO,
        message: "Success",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async updateUserDoc(
    req: Request,
    res: Response<IUserDocResponse>
  ): Promise<void> {
    const dto = new UserDocRequestDto(req.body);
    const validationErrors = await validate(dto);

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const id = req.params.id;

        const obj: IUserDoc = {
          ...emptyUserDoc,
          ...req.body,
          id: id,
        };
        const updatedUserDoc = await userDocUseCase.updateUserDoc(obj);
        const userDocDto = userDocMapper.toDTO(updatedUserDoc);

        res.json({
          data: userDocDto,
          message: "UserDoc Updated Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [error],
          success: false,
        });
      }
    }
  }

  async deleteUserDoc(
    req: Request,
    res: Response<IUserDocResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      await userDocUseCase.deleteUserDoc(id);

      res.status(204).json({
        message: `Operation successfully completed!`,
        validationErrors: [],
        success: true,
        data: null,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        data: null,
        validationErrors: [error],
        success: true,
      });
    }
  }
}

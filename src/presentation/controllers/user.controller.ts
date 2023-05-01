import { Request, Response } from "express";
import { IUser, IUserResponse, emptyUser } from "../../domain/models/user";
import { UserUseCase } from "../../domain/usecases/user.usecase";
import { UserRepository } from "../../data/repositories/impl/user.repository";
import { UserMapper } from "../mappers/mapper";
import { UserRequestDto } from "../dtos/user-request.dto";
import { validate } from "class-validator";
import { displayValidationErrors } from "../../utils/displayValidationErrors";
import { NotFoundException } from "../../shared/exceptions/not-found.exception";
import { User } from "../../data/entities/user";
// import { UnauthorizedException } from "../../shared/exceptions/unauthorized.exception";

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userMapper = new UserMapper();

export class UsersController {
  async createUser(req: Request, res: Response<IUserResponse>): Promise<void> {
    const dto = new UserRequestDto(req.body);
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
        const userResponse = await userUseCase.createUser(dto.toData());

        res.status(201).json({
          data: userResponse.toJSON<IUser>(),
          message: "User created Successfully!",
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
      const users = await userUseCase.getAll();
      const usersDTO = userMapper.toDTOs(users);

      res.json({
        data: usersDTO,
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

  async updateUser(req: Request, res: Response<IUserResponse>): Promise<void> {
    const dto = new UserRequestDto(req.body);
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

        const obj: IUser = {
          ...emptyUser,
          ...req.body,
          id: id,
        };
        const updatedUser = await userUseCase.updateUser(obj);
        const userDto = userMapper.toDTO(updatedUser);

        res.json({
          data: userDto,
          message: "User Updated Successfully!",
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

  async deleteUser(req: Request, res: Response<IUserResponse>): Promise<void> {
    try {
      const id = req.params.id;

      await userUseCase.deleteUser(id);

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

  async uploadAvatar(req: Request, res: Response<any>): Promise<void> {
    const user = req.user as User;
    const { filename } = req.file as Express.Multer.File;

    try {
      await userUseCase.updateAvatar(user.id, filename);

      res.json({
        message: "User Avatar uploaded Successfully!",
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  }
}

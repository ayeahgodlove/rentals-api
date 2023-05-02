"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const user_1 = require("../../domain/models/user");
const user_usecase_1 = require("../../domain/usecases/user.usecase");
const user_repository_1 = require("../../data/repositories/impl/user.repository");
const mapper_1 = require("../mappers/mapper");
const user_request_dto_1 = require("../dtos/user-request.dto");
const class_validator_1 = require("class-validator");
const displayValidationErrors_1 = require("../../utils/displayValidationErrors");
// import { UnauthorizedException } from "../../shared/exceptions/unauthorized.exception";
const userRepository = new user_repository_1.UserRepository();
const userUseCase = new user_usecase_1.UserUseCase(userRepository);
const userMapper = new mapper_1.UserMapper();
class UsersController {
    async createUser(req, res) {
        const dto = new user_request_dto_1.UserRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const userResponse = await userUseCase.createUser(dto.toData());
                res.status(201).json({
                    data: userResponse.toJSON(),
                    message: "User created Successfully!",
                    validationErrors: [],
                    success: true,
                });
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [],
                    success: false,
                });
            }
        }
    }
    async getAll(req, res) {
        try {
            const users = await userUseCase.getAll();
            const usersDTO = userMapper.toDTOs(users);
            res.json({
                data: usersDTO,
                message: "Success",
                validationErrors: [],
                success: true,
            });
        }
        catch (error) {
            res.status(400).json({
                data: null,
                message: error.message,
                validationErrors: [error],
                success: false,
            });
        }
    }
    async updateUser(req, res) {
        const dto = new user_request_dto_1.UserRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const id = req.params.id;
                const obj = {
                    ...user_1.emptyUser,
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
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [error],
                    success: false,
                });
            }
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await userUseCase.deleteUser(id);
            res.status(204).json({
                message: `Operation successfully completed!`,
                validationErrors: [],
                success: true,
                data: null,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
                data: null,
                validationErrors: [error],
                success: true,
            });
        }
    }
    async uploadAvatar(req, res) {
        const user = req.user;
        const { filename } = req.file;
        try {
            await userUseCase.updateAvatar(user.id, filename);
            res.json({
                message: "User Avatar uploaded Successfully!",
                success: true,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    }
}
exports.UsersController = UsersController;

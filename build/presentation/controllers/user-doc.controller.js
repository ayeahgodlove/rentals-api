"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocsController = void 0;
const user_doc_1 = require("../../domain/models/user-doc");
const user_doc_usecase_1 = require("../../domain/usecases/user-doc.usecase");
const user_doc_repository_1 = require("../../data/repositories/impl/user-doc.repository");
const mapper_1 = require("../mappers/mapper");
const not_found_exception_1 = require("../../shared/exceptions/not-found.exception");
const user_1 = require("../../data/entities/user");
const user_doc_2 = require("../../data/entities/user-doc");
const nanoid_1 = require("nanoid");
const userDocRepository = new user_doc_repository_1.UserDocRepository();
const userDocUseCase = new user_doc_usecase_1.UserDocUseCase(userDocRepository);
const userDocMapper = new mapper_1.UserDocMapper();
class UserDocsController {
    async createUserDoc(req, res) {
        const user = req.user;
        //get uploaded files
        const { idCard1, idCard2, passportPhoto } = req.files;
        if (!req.files) {
            throw new Error("Please select files!");
        }
        try {
            const userDocResponse = await userDocUseCase.createUserDoc({
                userId: user.id,
                idCard1: idCard1[0].filename,
                idCard2: idCard2[0].filename,
                passportPhoto: passportPhoto[0].filename,
                id: (0, nanoid_1.nanoid)(10),
            });
            res.status(201).json({
                data: userDocResponse.toJSON(),
                message: "UserDoc submitted Successfully!",
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
    async getAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        try {
            const { rows, count } = await userDocUseCase.getAll(page, pageSize);
            const userDocsDTO = userDocMapper.toDTOs(rows);
            // total pages
            const totalPages = Math.ceil(count / pageSize);
            res.json({
                data: userDocsDTO,
                message: "Success",
                validationErrors: [],
                success: true,
                currentPage: page,
                totalPages,
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
    async getUserDocById(req, res) {
        try {
            const id = req.params.id;
            const userDoc = await user_doc_2.UserDoc.findByPk(id);
            if (!userDoc) {
                throw new not_found_exception_1.NotFoundException("UserDoc", id);
            }
            const userDocDTO = userDocMapper.toDTO(userDoc);
            // search user by ID
            const user = await user_1.User.findByPk(userDocDTO.userId);
            if (!user) {
                throw new not_found_exception_1.NotFoundException("User", `${userDoc.userId}`);
            }
            // Update the user's verification status
            await user.update({
                ...user,
                verified: true,
            });
            await user.save();
            res.json({
                data: userDocDTO,
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
    async updateUserDoc(req, res) {
        try {
            const id = req.params.id;
            const userDoc = await user_doc_2.UserDoc.findByPk(id);
            if (!userDoc) {
                throw new not_found_exception_1.NotFoundException("userDoc", `${id}`);
            }
            // search user by ID
            const user = await user_1.User.findByPk(userDoc.userId);
            if (!user) {
                throw new not_found_exception_1.NotFoundException("User", `${userDoc.userId}`);
            }
            const obj = {
                ...user_doc_1.emptyUserDoc,
                ...req.body,
                id: id,
            };
            const updatedUserDoc = await userDocUseCase.updateUserDoc(obj);
            // Update the user's verification status
            user.verified = true;
            await user.save();
            const userDocDto = userDocMapper.toDTO(updatedUserDoc);
            res.json({
                data: userDocDto,
                message: "UserDoc Updated Successfully!",
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
    async deleteUserDoc(req, res) {
        try {
            const id = req.params.id;
            await userDocUseCase.deleteUserDoc(id);
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
}
exports.UserDocsController = UserDocsController;

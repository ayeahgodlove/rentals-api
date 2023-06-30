"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const validatePassword = async (password, incomingPasword) => {
    const hashedPassword = await bcrypt_1.default.hash(incomingPasword, 10);
    if (hashedPassword.length === password.length &&
        hashedPassword === password) {
        return true;
    }
    else {
        return false;
    }
};
exports.validatePassword = validatePassword;

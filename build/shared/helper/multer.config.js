"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerInstance = void 0;
const multer_1 = __importDefault(require("multer"));
// Create a Multer storage engine that saves files to disk
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/avatars");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
// create a multer instance with the storage engine
const multerInstance = (0, multer_1.default)({ storage: storage });
exports.multerInstance = multerInstance;

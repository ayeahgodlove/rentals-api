"use strict";
/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDbConfig = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_1 = require("../../../data/entities/category");
const dotenv = __importStar(require("dotenv"));
const user_1 = require("../../../data/entities/user");
const role_1 = require("../../../data/entities/role");
const review_1 = require("../../../data/entities/review");
dotenv.config();
class PostgresDbConfig {
    _sequelize;
    /**
     *
     */
    constructor() {
        this._sequelize = new sequelize_typescript_1.Sequelize({
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            port: parseInt(process.env.DB_PORT),
            host: process.env.HOST,
            dialect: "postgres",
            models: [
                category_1.Category,
                user_1.User,
                role_1.Role,
                review_1.Review
            ],
            logging: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });
    }
    get sequelize() {
        return this._sequelize;
    }
    connection = async () => {
        try {
            await this.sequelize.authenticate();
            console.log("Postgres connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the postgres database:", error);
        }
    };
}
exports.PostgresDbConfig = PostgresDbConfig;

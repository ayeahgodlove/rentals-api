"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDbConfig = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
class MySQLDbConfig {
    sequelize;
    /**
     *
     */
    constructor() {
        this.sequelize = new sequelize_typescript_1.Sequelize("honeyman_db", "root", "root@Password", {
            dialect: "mysql",
            dialectOptions: {
                // Your mysql2 options here
                charset: "utf8mb4_general_ci",
                multipleStatements: true
            },
            host: "localhost",
            define: {
                timestamps: true,
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
            logging: false,
        });
    }
    connection = async () => {
        try {
            await this.sequelize.authenticate();
            console.log("MySQL connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the mysql database:", error);
        }
    };
}
exports.MySQLDbConfig = MySQLDbConfig;

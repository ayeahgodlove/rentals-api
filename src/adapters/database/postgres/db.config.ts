/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */
import { Category } from "@src/domain/entities/category";
import { Order } from "@src/domain/entities/order";
import { Payment } from "@src/domain/entities/payment";
import { Product } from "@src/domain/entities/product";
import { ProductOrder } from "@src/domain/entities/product-order";
import { SubCategory } from "@src/domain/entities/sub-category";
import { User } from "@src/domain/entities/user";
import { Sequelize } from "sequelize-typescript";

export class DbConfig {
    private readonly sequelize!: Sequelize;
    /**
     *
     */
    constructor() {
        this.sequelize = new Sequelize({
            username: "postgres",
            password: "admin@2022",
            database: "honeyman_db",
            port: 5432,
            host: "localhost",
            dialect: "postgres",
            models: [User, SubCategory, Order, ProductOrder, Product, Category, Payment],
            logging: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        })
    }

    connection = async () => {
        try {
            await this.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }
}

/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */

import { Sequelize } from "sequelize-typescript";
// import { User } from "../../../domain/entities/user";
// import { SubCategory } from "../../../domain/entities/sub-category";
// import { Order } from "../../../domain/entities/order";
// import { ProductOrder } from "../../../domain/entities/product-order";
// import { Product } from "../../../domain/entities/product";
// import { Category } from "../../../domain/entities/category";
// import { Payment } from "../../../domain/entities/payment";

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
      models: [
        // User,
        // SubCategory,
        // Order,
        // ProductOrder,
        // Product,
        // Category,
        // Payment,
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

  connection = async () => {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
}

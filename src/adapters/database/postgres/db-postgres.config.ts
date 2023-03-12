/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */

import { Sequelize } from "sequelize-typescript";
import { Category } from "../../../domain/entities/category";
import { Order } from "../../../domain/entities/order";
import { Payment } from "../../../domain/entities/payment";
import { Product } from "../../../domain/entities/product";
import { SubCategory } from "../../../domain/entities/sub-category";
import { User } from "../../../domain/entities/user";
import { ProductOrder } from "../../../domain/entities/product-order";

import * as dotenv from "dotenv";
dotenv.config();

export class PostgresDbConfig {
  private readonly _sequelize!: Sequelize;
  /**
   *
   */
  constructor() {
    this._sequelize = new Sequelize({
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      port: parseInt(process.env.DB_PORT!),
      host: process.env.HOST,
      dialect: "postgres",
      models: [
        User,
        SubCategory,
        Order,
        ProductOrder,
        Product,
        Category,
        Payment,
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

  public get sequelize(){
    return this._sequelize;
  }

  connection = async () => {
    try {
      await this.sequelize.authenticate();
      console.log("Postgres connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the postgres database:", error);
    }
  };
}

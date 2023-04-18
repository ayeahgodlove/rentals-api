/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */

import { Sequelize } from "sequelize-typescript";
import { Category } from "../../../data/entities/category";
import { User } from "../../../data/entities/user";

import * as dotenv from "dotenv";
import { Review } from "../../../data/entities/review";
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
        Category,
        Review,
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

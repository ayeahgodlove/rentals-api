import { DbConfig } from "./adapters/database/postgres/db.config";

const db =  new DbConfig();
db.connection();
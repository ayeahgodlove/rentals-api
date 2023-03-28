import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";

import { PostgresDbConfig } from "./infrastructure/database/postgres/db-postgres.config";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { notFoundHandler } from "./shared/middlewares/not-found.middleware";
import { checkJwt } from "./shared/middlewares/authz.middleware";
import categoryRouter from "./presentation/routes/category.route";
import subCategoryRouter from "./presentation/routes/sub-category.route";
import orderRouter from "./presentation/routes/order.route";
import userRouter from "./presentation/routes/user.route";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();

/**
 *  App Configuration
 */
// enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(helmet());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const db = new PostgresDbConfig();
db.connection();

//routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/api/categories', categoryRouter);
app.use('/api/sub-categories', subCategoryRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.get("/api/private", checkJwt, (req, res) => {
  res.send("This is a private route, authenicate before you can see it");
});

// middleware interceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Listening on port ${PORT}`);
});
